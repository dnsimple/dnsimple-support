# AGENTS.md

This document provides guidance for AI agents working with this codebase.

## Project Overview

This is the DNSimple Help site (https://support.dnsimple.com), a static site built with [nanoc](https://nanoc.app/). The site contains support documentation, articles, and guides for DNSimple's DNS and domain management services.

## Content Style Guidelines

### Articles Directory

All content in the `content/articles/` directory must follow the **APA Style guidelines** as defined by the American Psychological Association.

**Reference:** [APA Style Guidelines](https://apastyle.apa.org/style-grammar-guidelines/)

When creating, editing, or reviewing articles in `content/articles/`, ensure that:

- Writing style, grammar, and formatting conform to APA Style standards
- Citations (if any) follow APA citation format
- Language and terminology are consistent with APA Style conventions
- Headings, lists, and other structural elements follow APA formatting guidelines

### Article Structure

Articles are written in Markdown format with YAML frontmatter. Example structure:

```markdown
---
title: Article Title
excerpt: Brief description
categories:
- Category Name
---

# Article Title

Content follows here...
```

## Project Structure

- `content/articles/` - All support articles (must follow APA Style)
- `categories/` - Category definitions in YAML format
- `layouts/` - HTML layout templates
- `lib/` - Ruby libraries for nanoc processing
- `_widget/` - Vue.js widget components
- `output/` - Generated static site output

## Development

- Run `rake run` to start the local development server
- The site is automatically deployed to Netlify on commits to main
- See `README.md` for full setup and development instructions

## Contributing

When contributing articles:
1. Draft new articles and substantial updates in Google Docs first
2. Follow the SOP for [Support Article Creation & Updates](https://dnsimple.atlassian.net/wiki/spaces/BIZOPS/pages/2615115803/Support+Article+Creation+and+Update+Procedure)
3. Apply the `articles` label when submitting PRs
4. Ensure all content in `content/articles/` adheres to APA Style guidelines

