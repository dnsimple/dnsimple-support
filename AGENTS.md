# Agent Instructions

Instructions for AI coding agents when working on this project.

## Agent Organization

When creating agent instruction files:

- The main file should always be named `AGENTS.md`
- Create a `CLAUDE.md` file containing `@AGENTS.md` for compatibility with Claude Code

## Key Documentation

- **[README.md](README.md)** - Quick start guide, setup instructions, and deployment information
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines, commit format, testing approach

## Project Overview

This is the DNSimple Help site (https://support.dnsimple.com), a static site built with [nanoc](https://nanoc.app/). See [README.md](README.md) for setup and deployment details.

## Content Guidelines

All content in `content/articles/` must follow **APA Style guidelines** and the **Diataxis framework**. See the [Content Writing Guidelines](CONTRIBUTING.md#content-writing-guidelines) section in CONTRIBUTING.md for full details.

### Article Structure

Articles are written in Markdown format with YAML frontmatter. Example structure:

```markdown
---
title: Article Title
excerpt: Brief description
meta: Page metadata description
categories:
- Category Name
---

# Article Title

Content follows here...
```

## Project Structure

- `content/articles/` - All support articles
- `categories/` - Category definitions in YAML format
- `layouts/` - HTML layout templates
- `lib/` - Ruby libraries for nanoc processing
- `_widget/` - Vue.js widget components
- `output/` - Generated static site output

## Support Widget

The support widget is a Vue.js component that provides search across support and developer documentation.

### Widget Configuration

The widget is embedded via script tag in `layouts/default.html`:

```html
<script
  type="text/javascript"
  src="/widget.js"
  data-dnsimple-current-site-url=""
  data-dnsimple-getting-started-url="/articles/getting-started/"
  data-dnsimple-sources='[{"name": "DNSimple Support", "url": ""}, {"name": "DNSimple Developer", "url": "https://developer.dnsimple.com"}]'
></script>
```

- `data-dnsimple-current-site-url` - Used for same-site detection (determines if links open in widget or navigate away)
- `data-dnsimple-sources` - Array of sources to fetch articles from. Empty URL means relative (current origin)

### Rigged Results

To pin specific articles to the top of search results for certain queries, edit `_widget/src/components/app/rigged-results.yml`:

```yaml
email:
  - /articles/mx-record/
  - /articles/email-forwarding/

transfer:
  - /articles/domain-transfer/
```

The YAML is parsed by `rigged-results.js` using a simple regex parser.

### Widget Development

- `_widget/index.html` - Test page for local widget development
- Run `npm run dev` in `_widget/` for development
- Run `npm test` to run widget specs
