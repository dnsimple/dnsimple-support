#!/usr/bin/env python3
"""
Confluence Content Gap Analysis Tool

Analyzes content in Engineering space and identifies what information is missing
in Customer Success space. Focuses on content gaps, not duplicates.

Setup:
1. Get your Confluence API token from: https://id.atlassian.com/manage-profile/security/api-tokens
2. Set environment variables:
   export CONFLUENCE_URL="https://your-domain.atlassian.net/wiki"
   export CONFLUENCE_EMAIL="your-email@example.com"
   export CONFLUENCE_API_TOKEN="your-api-token"

Usage:
    # Find missing information in Customer Success (from Engineering)
    python3 bin/confluence_compare.py --engineering="Engineering" --customer-success="Customer Success"

    # Save report to file
    python3 bin/confluence_compare.py --engineering="ENG" --customer-success="CS" --output=missing_info_report.md
"""

import os
import sys
import json
import argparse
import requests
import re
from pathlib import Path
from datetime import datetime
from collections import defaultdict
from difflib import SequenceMatcher
import html2text

try:
    import markdownify
except ImportError:
    markdownify = None


class ConfluenceComparator:
    def __init__(self, base_url, email, api_token):
        self.base_url = base_url.rstrip('/')
        self.email = email
        self.api_token = api_token
        self.session = requests.Session()
        self.session.auth = (email, api_token)
        self.session.headers.update({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        self.html_converter = html2text.HTML2Text()
        self.html_converter.ignore_links = False
        self.html_converter.body_width = 0

    def get_space(self, space_key):
        """Get space information by key."""
        url = f"{self.base_url}/rest/api/space"
        params = {'spaceKey': space_key}
        response = self.session.get(url, params=params)
        response.raise_for_status()
        return response.json()

    def get_space_pages(self, space_key, limit=100):
        """Get all pages from a space."""
        url = f"{self.base_url}/rest/api/content"
        pages = []
        start = 0
        
        while True:
            params = {
                'spaceKey': space_key,
                'expand': 'body.storage,version,ancestors,metadata.labels',
                'limit': limit,
                'start': start
            }
            
            response = self.session.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            pages.extend(data.get('results', []))
            
            if 'next' not in data.get('_links', {}):
                break
                
            start += limit
        
        return pages

    def get_page_content_text(self, page):
        """Extract text content from a page."""
        body = page.get('body', {}).get('storage', {}).get('value', '')
        if markdownify:
            return markdownify.markdownify(body, heading_style="ATX")
        else:
            return self.html_converter.handle(body)

    def extract_key_topics(self, content):
        """Extract key topics/features from page content."""
        topics = set()
        content_lower = content.lower()
        
        # Extract headings (markdown or HTML)
        headings = re.findall(r'^#{1,6}\s+(.+)$', content, re.MULTILINE)
        headings.extend(re.findall(r'<h[1-6][^>]*>(.+?)</h[1-6]>', content, re.IGNORECASE))
        
        for heading in headings:
            # Clean HTML tags from headings
            heading = re.sub(r'<[^>]+>', '', heading).strip()
            if heading and len(heading) < 100:  # Reasonable heading length
                topics.add(heading.lower())
        
        # Extract feature names, API endpoints, configuration options
        # Look for patterns like "API endpoint", "feature", "configuration"
        feature_patterns = [
            r'(?:feature|endpoint|api|config|setting|option):\s*([^\n,;]+)',
            r'`([a-z0-9_-]+)`',  # Code/technical terms in backticks
            r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:feature|endpoint|api|setting)',  # Capitalized terms
        ]
        
        for pattern in feature_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                if isinstance(match, tuple):
                    match = match[0] if match else ''
                match = match.strip()
                if match and 3 < len(match) < 50:
                    topics.add(match.lower())
        
        return topics

    def extract_key_phrases(self, content, min_length=3, max_length=4):
        """Extract important phrases from content."""
        # Remove markdown/HTML formatting
        text = re.sub(r'[#*`\[\]()]', ' ', content)
        text = re.sub(r'<[^>]+>', ' ', text)
        
        # Split into sentences and extract noun phrases
        sentences = re.split(r'[.!?]\s+', text)
        phrases = set()
        
        for sentence in sentences:
            words = sentence.split()
            # Extract phrases of different lengths (min_length to max_length)
            for length in range(min_length, max_length + 1):
                for i in range(len(words) - length + 1):
                    phrase = ' '.join(words[i:i+length]).lower()
                    # Filter out common phrases and very short phrases
                    if len(phrase) > 5 and not re.match(r'^(the|a|an|is|are|was|were|this|that|these|those)\s+', phrase):
                        phrases.add(phrase)
        
        return phrases

    def find_content_coverage(self, eng_page, cs_pages):
        """Check if Engineering page content is covered in Customer Success pages."""
        eng_content = self.get_page_content_text(eng_page)
        eng_topics = self.extract_key_topics(eng_content)
        eng_phrases = self.extract_key_phrases(eng_content)
        
        if not eng_topics and not eng_phrases:
            return None, 0.0
        
        covered_topics = set()
        covered_phrases = set()
        matching_pages = []
        
        for cs_page in cs_pages:
            cs_content = self.get_page_content_text(cs_page)
            cs_topics = self.extract_key_topics(cs_content)
            cs_phrases = self.extract_key_phrases(cs_content)
            
            # Check topic overlap
            topic_overlap = eng_topics & cs_topics
            phrase_overlap = eng_phrases & cs_phrases
            
            if topic_overlap or phrase_overlap:
                coverage_score = (len(topic_overlap) + len(phrase_overlap) * 0.5) / max(len(eng_topics) + len(eng_phrases) * 0.5, 1)
                if coverage_score > 0.1:  # At least 10% overlap
                    covered_topics.update(topic_overlap)
                    covered_phrases.update(phrase_overlap)
                    matching_pages.append({
                        'page': cs_page,
                        'coverage': coverage_score,
                        'topics_covered': topic_overlap,
                        'phrases_covered': phrase_overlap
                    })
        
        # Calculate overall coverage
        total_items = len(eng_topics) + len(eng_phrases) * 0.5
        covered_items = len(covered_topics) + len(covered_phrases) * 0.5
        overall_coverage = covered_items / total_items if total_items > 0 else 0.0
        
        missing_topics = eng_topics - covered_topics
        missing_phrases = eng_phrases - covered_phrases
        
        return {
            'overall_coverage': overall_coverage,
            'missing_topics': missing_topics,
            'missing_phrases': missing_phrases,
            'matching_pages': matching_pages
        }, overall_coverage

    def analyze_missing_content(self, engineering_key, customer_success_key):
        """Analyze what content exists in Engineering but is missing in Customer Success."""
        print(f"Fetching pages from '{engineering_key}' space (Engineering)...")
        try:
            eng_info = self.get_space(engineering_key)
            eng_name = eng_info.get('name', engineering_key)
        except Exception as e:
            print(f"Error: Could not access space '{engineering_key}': {e}")
            return None
        
        eng_pages = self.get_space_pages(engineering_key)
        print(f"  Found {len(eng_pages)} pages")
        
        print(f"\nFetching pages from '{customer_success_key}' space (Customer Success)...")
        try:
            cs_info = self.get_space(customer_success_key)
            cs_name = cs_info.get('name', customer_success_key)
        except Exception as e:
            print(f"Error: Could not access space '{customer_success_key}': {e}")
            return None
        
        cs_pages = self.get_space_pages(customer_success_key)
        print(f"  Found {len(cs_pages)} pages")
        
        print("\nAnalyzing content coverage...")
        print("This may take a few minutes for large spaces...")
        
        missing_content = []
        total_pages = len(eng_pages)
        
        for i, eng_page in enumerate(eng_pages, 1):
            if i % 10 == 0:
                print(f"  Processing page {i}/{total_pages}...")
            
            coverage_data, coverage_score = self.find_content_coverage(eng_page, cs_pages)
            
            if coverage_data and coverage_score < 0.5:  # Less than 50% coverage
                missing_content.append({
                    'eng_page': eng_page,
                    'coverage': coverage_score,
                    'coverage_data': coverage_data
                })
        
        # Sort by coverage (lowest first - most missing)
        missing_content.sort(key=lambda x: x['coverage'])
        
        return {
            'engineering': {
                'key': engineering_key,
                'name': eng_name,
                'pages': eng_pages,
                'count': len(eng_pages)
            },
            'customer_success': {
                'key': customer_success_key,
                'name': cs_name,
                'pages': cs_pages,
                'count': len(cs_pages)
            },
            'missing_content': missing_content
        }

    def generate_report(self, analysis):
        """Generate a markdown report of missing content."""
        report = []
        report.append("# Missing Information in Customer Success Space")
        report.append("")
        report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append("")
        report.append("## Analysis Summary")
        report.append("")
        report.append(f"- **Engineering Space:** {analysis['engineering']['name']} ({analysis['engineering']['key']})")
        report.append(f"  - Total pages: {analysis['engineering']['count']}")
        report.append(f"- **Customer Success Space:** {analysis['customer_success']['name']} ({analysis['customer_success']['key']})")
        report.append(f"  - Total pages: {analysis['customer_success']['count']}")
        report.append("")
        report.append(f"- **Pages with missing/low coverage in Customer Success:** {len(analysis['missing_content'])}")
        report.append("")
        report.append("> This report identifies Engineering documentation that has less than 50% content coverage in Customer Success space.")
        report.append("")
        
        if not analysis['missing_content']:
            report.append("## ✅ No Missing Content Found")
            report.append("")
            report.append("All Engineering pages appear to have good coverage in Customer Success space!")
            return '\n'.join(report)
        
        # Group by coverage level
        high_priority = [item for item in analysis['missing_content'] if item['coverage'] < 0.2]
        medium_priority = [item for item in analysis['missing_content'] if 0.2 <= item['coverage'] < 0.35]
        low_priority = [item for item in analysis['missing_content'] if 0.35 <= item['coverage'] < 0.5]
        
        report.append("## High Priority - Missing Content (< 20% coverage)")
        report.append("")
        if high_priority:
            report.append(f"Found {len(high_priority)} pages with very low coverage in Customer Success.")
            report.append("")
            for item in high_priority:
                eng_page = item['eng_page']
                title = eng_page.get('title', 'Untitled')
                page_id = eng_page.get('id', '')
                url = f"{self.base_url}/pages/viewpage.action?pageId={page_id}"
                modified = eng_page.get('version', {}).get('when', 'Unknown')
                coverage_pct = int(item['coverage'] * 100)
                coverage_data = item['coverage_data']
                
                report.append(f"### {title}")
                report.append("")
                report.append(f"- **Engineering URL:** {url}")
                report.append(f"- **Last Modified:** {modified}")
                report.append(f"- **Coverage in Customer Success:** {coverage_pct}%")
                report.append("")
                
                if coverage_data['missing_topics']:
                    report.append("**Missing Topics/Features:**")
                    for topic in sorted(list(coverage_data['missing_topics']))[:10]:  # Top 10
                        report.append(f"- {topic}")
                    if len(coverage_data['missing_topics']) > 10:
                        report.append(f"- ... and {len(coverage_data['missing_topics']) - 10} more")
                    report.append("")
                
                if coverage_data['matching_pages']:
                    report.append("**Partially Covered In:**")
                    for match in sorted(coverage_data['matching_pages'], key=lambda x: -x['coverage'])[:3]:
                        match_title = match['page'].get('title', 'Untitled')
                        match_id = match['page'].get('id', '')
                        match_url = f"{self.base_url}/pages/viewpage.action?pageId={match_id}"
                        match_coverage = int(match['coverage'] * 100)
                        report.append(f"- [{match_title}]({match_url}) ({match_coverage}% coverage)")
                    report.append("")
                
                report.append("**Action:** Create or update Customer Success documentation to cover this content.")
                report.append("")
        else:
            report.append("No pages with very low coverage found.")
            report.append("")
        
        if medium_priority:
            report.append("## Medium Priority - Partial Coverage (20-35% coverage)")
            report.append("")
            report.append(f"Found {len(medium_priority)} pages with partial coverage.")
            report.append("")
            for item in medium_priority[:20]:  # Limit to top 20
                eng_page = item['eng_page']
                title = eng_page.get('title', 'Untitled')
                page_id = eng_page.get('id', '')
                url = f"{self.base_url}/pages/viewpage.action?pageId={page_id}"
                coverage_pct = int(item['coverage'] * 100)
                
                report.append(f"- **{title}** - {coverage_pct}% coverage")
                report.append(f"  - [Engineering Page]({url})")
                report.append("")
        
        if low_priority:
            report.append("## Low Priority - Needs Improvement (35-50% coverage)")
            report.append("")
            report.append(f"Found {len(low_priority)} pages that could use more comprehensive coverage.")
            report.append("")
            for item in low_priority[:15]:  # Limit to top 15
                eng_page = item['eng_page']
                title = eng_page.get('title', 'Untitled')
                page_id = eng_page.get('id', '')
                url = f"{self.base_url}/pages/viewpage.action?pageId={page_id}"
                coverage_pct = int(item['coverage'] * 100)
                
                report.append(f"- **{title}** - {coverage_pct}% coverage - [Engineering Page]({url})")
        
        return '\n'.join(report)


def main():
    parser = argparse.ArgumentParser(
        description='Find missing information in Customer Success space (compared to Engineering)',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Find missing content in Customer Success (from Engineering)
  python3 bin/confluence_compare.py --engineering="Engineering" --customer-success="Customer Success"
  
  # Save report to file
  python3 bin/confluence_compare.py --engineering="ENG" --customer-success="CS" --output=missing_info_report.md
        """
    )
    
    parser.add_argument('--engineering', required=True, 
                       help='Engineering space key (e.g., "Engineering" or "ENG")')
    parser.add_argument('--customer-success', required=True,
                       help='Customer Success space key (e.g., "Customer Success" or "CS")')
    parser.add_argument('--output', help='Output file for report (default: print to stdout)')
    parser.add_argument('--url', help='Confluence base URL (overrides CONFLUENCE_URL env var)')
    parser.add_argument('--email', help='Confluence email (overrides CONFLUENCE_EMAIL env var)')
    parser.add_argument('--token', help='Confluence API token (overrides CONFLUENCE_API_TOKEN env var)')
    
    args = parser.parse_args()
    
    # Get credentials
    base_url = args.url or os.getenv('CONFLUENCE_URL')
    email = args.email or os.getenv('CONFLUENCE_EMAIL')
    api_token = args.token or os.getenv('CONFLUENCE_API_TOKEN')
    
    if not all([base_url, email, api_token]):
        print("Error: Missing required credentials")
        print("\nPlease provide:")
        print("  - CONFLUENCE_URL (or --url)")
        print("  - CONFLUENCE_EMAIL (or --email)")
        print("  - CONFLUENCE_API_TOKEN (or --token)")
        print("\nOr set them as environment variables.")
        sys.exit(1)
    
    # Create comparator
    comparator = ConfluenceComparator(base_url, email, api_token)
    
    # Run analysis
    print(f"Analyzing missing content in Customer Success space")
    print(f"Comparing: '{args.engineering}' (Engineering) vs '{args.customer_success}' (Customer Success)")
    print("=" * 80)
    
    analysis = comparator.analyze_missing_content(args.engineering, args.customer_success)
    
    if analysis is None:
        sys.exit(1)
    
    # Generate report
    report = comparator.generate_report(analysis)
    
    # Output report
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(report)
        print(f"\n✅ Analysis complete! Report saved to: {args.output}")
    else:
        print("\n" + "=" * 80)
        print(report)


if __name__ == '__main__':
    main()
