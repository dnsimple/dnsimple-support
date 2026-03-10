# Agent Instructions

Instructions for AI coding agents when working on this project.

## Agent Organization

- The main file should always be named `AGENTS.md`
- `CLAUDE.md` includes this file plus all `.cursor/rules/*.mdc` rule files for Claude Code compatibility
- Cursor users get the rule files automatically from `.cursor/rules/`

## Content Work (Primary Use Case)

Most AI-assisted work on this project is writing and editing support articles. The detailed rules for this live in `.cursor/rules/` — these are the source of truth:

- **`.cursor/rules/article-writing.mdc`** — Voice, tone, anti-patterns, cross-linking, review checklist
- **`.cursor/rules/article-structure.mdc`** — Frontmatter, page skeleton, callouts, links, SEO/GEO, Diataxis types
- **`.cursor/rules/git-workflow.mdc`** — Interactive checkpoints (branch, commit, PR), filename/character rules, PR hygiene

Follow these rules when working on any file in `content/articles/`. They cover everything from sentence-level writing style to when you must stop and ask the user before proceeding.

### Key content principles

- All articles follow **APA Style** and the **Diataxis framework**
- Cross-link related articles automatically — both from the new article and back from existing articles
- Optimize for both SEO and GEO (AI answer engines)
- See [CONTRIBUTING.md](CONTRIBUTING.md) for the full content writing guidelines, PR review process, and category management

## Project Overview

This is the DNSimple Help site (https://support.dnsimple.com), a static site built with [nanoc](https://nanoc.app/). See [README.md](README.md) for setup and deployment details.

## Project Structure

- `content/articles/` — All support articles (Markdown with YAML frontmatter)
- `categories/` — Category definitions in YAML format
- `priorities/categories.yaml` — Master category list
- `layouts/` — HTML layout templates
- `lib/` — Ruby libraries for nanoc processing
- `_widget/` — Vue.js search widget components
- `output/` — Generated static site output (gitignored)
- `.cursor/rules/` — AI agent rules (Cursor and Claude Code)

## Key Documentation

- **[README.md](README.md)** — Setup instructions and deployment
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — Contribution guidelines, PR process, writing standards

## Support Widget

The support widget is a Vue.js component in `_widget/` that provides search across support and developer documentation. See `_widget/index.html` for local development, `npm run dev` to start, and `npm test` for specs.

To pin articles to the top of search results for specific queries, edit `_widget/src/components/app/rigged-results.yml`.
