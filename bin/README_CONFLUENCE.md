# Confluence Content Gap Analysis Tool

Tools for identifying missing information in Customer Success space that exists in Engineering space.

## Two Options Available

### Option 1: Browser-Based Tool (No API Token Required)
Use `confluence_browser_compare.html` - works with your existing browser login session.

### Option 2: API-Based Tool (Requires API Token)
Use `confluence_compare.py` - requires Confluence API credentials.

## Browser-Based Tool (Recommended if you don't have API token permissions)

### Usage

1. **Open the HTML file in your browser:**
   - Open `bin/confluence_browser_compare.html` in your web browser
   - Make sure you're logged into Confluence in the same browser

2. **Fill in the form:**
   - **Confluence Base URL:** Your Confluence URL (e.g., `https://your-domain.atlassian.net/wiki`)
   - **Engineering Space Key:** The space key (e.g., "Engineering" or "ENG")
   - **Customer Success Space Key:** The space key (e.g., "Customer Success" or "CS")

3. **Click "Analyze Missing Content"**
   - The tool will fetch pages from both spaces
   - It analyzes content coverage (this may take a few minutes for large spaces)
   - Results are displayed in the browser

4. **Download the report:**
   - Click "Download Report as Markdown" to save the results

### How It Works

- Uses your existing browser session (no API token needed)
- Makes API calls from the browser context
- Works as long as you're logged into Confluence
- Processes pages in batches with progress updates

### Troubleshooting

**"Cannot access Confluence API" error:**
- Make sure you're logged into Confluence in the same browser
- Verify the Confluence URL is correct
- Check that you have access to both spaces

**Slow performance:**
- Large spaces may take several minutes
- The tool shows progress as it processes pages
- You can stop the analysis at any time

---

## API-Based Tool (Requires API Token)

### Setup

### 1. Get Confluence API Credentials

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Create an API token
3. Note your Confluence base URL (e.g., `https://your-domain.atlassian.net/wiki`)

### 2. Set Environment Variables

```bash
export CONFLUENCE_URL="https://your-domain.atlassian.net/wiki"
export CONFLUENCE_EMAIL="your-email@example.com"
export CONFLUENCE_API_TOKEN="your-api-token"
```

Or create a `.env` file in the project root (make sure it's in `.gitignore`):

```bash
CONFLUENCE_URL=https://your-domain.atlassian.net/wiki
CONFLUENCE_EMAIL=your-email@example.com
CONFLUENCE_API_TOKEN=your-api-token
```

### 3. Install Python Dependencies

```bash
pip install requests html2text markdownify
```

Or if using a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install requests html2text markdownify
```

## Usage

### Find Missing Information in Customer Success

```bash
python3 bin/confluence_compare.py \
  --engineering="Engineering" \
  --customer-success="Customer Success"
```

### Save Report to File

```bash
python3 bin/confluence_compare.py \
  --engineering="Engineering" \
  --customer-success="Customer Success" \
  --output=missing_info_report.md
```

### Use Space Keys Instead of Names

If you know the space keys (often shorter):

```bash
python3 bin/confluence_compare.py --engineering="ENG" --customer-success="CS"
```

## How It Works

The tool analyzes the actual content of pages (not just titles) to identify information gaps:

1. **Extracts Topics** - Identifies key topics, features, and concepts from Engineering pages
2. **Checks Coverage** - Searches Customer Success pages for similar content
3. **Calculates Coverage Score** - Determines how much of the Engineering content is covered
4. **Reports Gaps** - Lists pages with less than 50% coverage in Customer Success

## Report Contents

The report includes:

1. **Summary** - Overview of spaces and missing content count
2. **High Priority** - Pages with < 20% coverage (most missing information)
   - Lists missing topics/features
   - Shows which Customer Success pages partially cover the content
3. **Medium Priority** - Pages with 20-35% coverage
4. **Low Priority** - Pages with 35-50% coverage (needs improvement)

Each entry includes:
- Engineering page title and URL
- Coverage percentage
- Missing topics/features
- Related Customer Success pages (if any)

## What to Do with Results

### High Priority Items
- Review the Engineering page to understand what information is missing
- Create new Customer Success documentation or update existing pages
- Focus on customer-facing information that should be documented

### Medium/Low Priority Items
- Review existing Customer Success pages and enhance them
- Add missing topics or features to existing documentation
- Cross-reference related pages

## Troubleshooting

### "Could not access space" Error
- Verify the space key/name is correct
- Check that your account has access to both spaces
- Ensure the API token has the necessary permissions

### "Missing required credentials" Error
- Make sure environment variables are set
- Or use `--url`, `--email`, and `--token` flags
- Verify credentials are correct

### Import Errors
If you see import errors for `html2text` or `markdownify`:
```bash
pip install html2text markdownify
```

### Slow Processing
- Large spaces may take several minutes to process
- The tool processes pages sequentially to avoid API rate limits
- Progress is shown every 10 pages

## Notes

- The tool uses Confluence REST API v1
- Content analysis focuses on topics, headings, and key phrases
- Coverage threshold is set to 50% (pages below this are flagged)
- The analysis is heuristic-based and may require manual review
