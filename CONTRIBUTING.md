# Contributing to DNSimple Support

This guide covers best practices and guidelines for contributing to the DNSimple Support site.

## Creating and Reviewing Articles

### Editing Process

When creating new or updating existing support documentation:

1. **Create a branch** and draft the article directly in the repository
2. **Follow the writing guidelines** - keep content clear and concise
3. **Include relevant links** - customer-facing information, dev docs, other support pages, and video walkthroughs
4. **Test locally** with `rake run` to verify formatting and layout
5. **Create a pull request** following the PR process below

### Pull Request Process

When submitting a pull request:

1. Apply the label `documentation`
2. Set yourself as assignee
3. **Request reviews:**
   - Tag a second expert with knowledge of the feature/product
   - Use AI (Cursor or Claude Code) for proofreading, clarity, and voice/tone — the project rules in `.cursor/rules/` enforce the DNSimple editorial voice automatically
   - Tag Customer Success for review (required for substantial updates, optional for minor updates)
4. **Testing:** If reviewers need to test a process, they should use https://sandbox.dnsimple.com
5. Ensure all approvals are received
6. Verify the pipeline is green
7. Merge the PR yourself
8. Delete the source branch

## Getting Started

For a quick overview and setup instructions, see [README.md](README.md).

### Setup

```bash
# Install dependencies
asdf install
bundle install

# Start development server
rake run
```

The site runs at http://localhost:3000

## Content Writing Guidelines

### APA Style Guidelines

All content in the `content/articles/` directory must follow the **APA Style guidelines** as defined by the American Psychological Association.

**Reference:** [APA Style Guidelines](https://apastyle.apa.org/style-grammar-guidelines/)

When creating, editing, or reviewing articles in `content/articles/`, ensure that:

- Writing style, grammar, and formatting conform to APA Style standards
- Citations (if any) follow APA citation format
- Language and terminology are consistent with APA Style conventions
- Headings, lists, and other structural elements follow APA formatting guidelines

### Diataxis Framework

All content in the `content/articles/` directory must follow the **Diataxis framework**, which organizes documentation by user intent.

**Reference:** [Diataxis Framework](https://diataxis.fr/)

> [!NOTE] Internal
> See [Getting Started Writing Support Articles at DNSimple](https://dnsimple.atlassian.net/wiki/spaces/SUPPORT/pages/3653861402/Getting+Started+Writing+Support+Articles+at+DNSimple)

When creating, editing, or reviewing articles in `content/articles/`, ensure that:

- The article type matches the user intent (Getting Started, Tutorial, How-to Guide, Explanation, Reference)
- Content scope and structure align with the selected article type
- Related articles are organized consistently across the Diataxis categories

### Writing Guidelines

Support docs should be as clear and concise as possible. Each step of the process should be clearly communicated or linked to a relevant section. Never make the customer scroll more than they have to for info.

> [!NOTE] Internal
> If you have any questions, ask in the #customer-success thread in Slack.

### Markdown Style

- Use GitHub-Flavored Markdown (GFM)
- Follow DNSimple style guide for technical writing
- Keep content clear, concise, and user-focused

### Callouts

Callouts provide a consistent, structured way to highlight important information in support articles. Use GitHub Flavored Markdown callout syntax:

**Available callout types:**

- `[!NOTE]` - Things the user must be aware of, actionable or not, but that won't damage, delete, or otherwise compromise their account
- `[!TIP]` - Recommendations to make users' work easier. Useful but non-critical
- `[!WARNING]` - Reserved for the most critical information. Use when a user could do something damaging or permanent to their account

**Syntax:**

```markdown
> [!NOTE]
> Your callout content here. Can span multiple lines.
> Each line should start with `>`.
```

**Examples:**

Display a note to readers:

```markdown
> [!NOTE]
> Make sure to update your name servers at your registrar to complete the delegation process.
```

Show a tip:

```markdown
> [!TIP]
> You can use our one-click services to automatically configure DNS for popular services.
```

Show a warning about potential issues:

```markdown
> [!WARNING]
> Transferring your domain away from DNSimple will cancel all active subscriptions associated with it.
```

**Best practices:**

- Use callouts sparingly to maintain impact
- Choose the appropriate callout type for your message:

  - Use `[!NOTE]` for things users must be aware of
  - Use `[!TIP]` for helpful recommendations
  - Use `[!WARNING]` for critical information about damaging or permanent actions

- Keep callout content concise and focused
- Place callouts near relevant content, not at the end of articles

### List Formatting

Always place a newline between a colon (`:`) and list items:

**Correct:**

```markdown
This is a title:

- List item
- Another item
```

**Incorrect:**

```markdown
This is a title:
- List item
```

This applies to:

- Markdown content
- Code comments (both bulleted and numbered lists)
- All documentation

### Links and Cross-Linking

Every article should link to related articles. Cross-linking helps readers navigate between concepts and improves discoverability in both search engines and AI answer engines.

**When writing or updating an article:**

- Link to related articles inline where a concept is first mentioned — don't save links for a list at the bottom
- Check whether existing articles should link *back* to the new or updated article and include those edits in the same PR
- Link on first mention of a concept, not every mention

**Link format:**

- Internal articles: use relative paths — `/articles/article-slug/`
- Developer docs: `https://developer.dnsimple.com/v2/...`
- Product/marketing pages: `https://dnsimple.com/...`
- External references: include where helpful (e.g., Wikipedia, ICANN, RFC documents)
- Use descriptive link text — `[SSL certificate types](/articles/ssl-certificates-types/)` not `[click here](/articles/ssl-certificates-types/)`
- Ensure all links are current and functional

### SEO and GEO (Generative Engine Optimization)

Articles should be optimized for both traditional search engines (SEO) and AI answer engines like ChatGPT, Perplexity, and Google AI Overviews (GEO). The two goals reinforce each other.

**Keywords and query targeting:**

- Identify the most relevant keywords for the page/product/feature
- Place the strongest keywords in H1 or H2 headings
- Include natural-language variations of key terms — people ask AI assistants full questions like "How do I renew an SSL certificate in DNSimple?", not just "renew SSL certificate"
- Avoid keyword stuffing — maintain readability and relatability for customers

**Opening paragraph:**

- The first 1–3 sentences after the H1 should directly answer the core question the article addresses
- AI engines extract this as their primary citation source — make it self-contained and factual
- Keep it under 80 words

**Headings:**

- Use headings that match how people ask questions in search bars and AI prompts
- Question-format H2s work well for Explanation and Reference articles (e.g., "Do I need CAA records?")
- Imperative-format H2s work well for How-to articles (e.g., "Adding CAA records")
- Each H2 section should be self-contained enough to be extracted as a standalone answer

**Frontmatter Metadata:**

- Every article must include both `excerpt` and `meta` frontmatter keys
  - The `excerpt` provides a brief, user-focused description of the article
  - The `meta` key is used for page metadata and AI citation — write it as a direct answer to the question the article addresses (if omitted, it defaults to the excerpt value)
- Use the `social` frontmatter key to add an image for the `og:image` meta tag
  - This image will be displayed on social media when the URL is shared
  - Place social images in the `images/social` folder
  - If no social key is present, it will default to the `illustration` image if one exists

## Managing Content

### Categories

Add/remove/edit categories by editing `priorities/categories.yaml`.

After making changes:

```bash
rake run
```

### Sub-categories

Group and order articles in sub-categories by editing the corresponding YAML file in the `categories` folder.

Sub-categories should align with the Diataxis framework article types: Getting Started, Explanation, How-to Guide, Reference, and Tutorial.

Articles not added to a YAML file will be automatically grouped in an "Other" sub-category.

After making changes:

```bash
rake run
```

## Git and PR Guidelines

### Branching

- Always create a new branch from `main` before starting work. Never commit directly to `main`.
- One branch per PR. Don't mix unrelated changes in the same branch.
- Use descriptive branch names: `add-ssl-lifecycle-article`, `update-caa-records-guide`, `fix-ssl-crosslinks`

### Commits

- Use imperative mood: "Add article about...", "Update DNS guide...", "Fix broken link in..."
- Keep the first line under 72 characters
- One logical change per commit

### PR scope

- Each PR should be one logical unit of work: one new article, one set of related updates, or one structural change
- Only include files related to the current task — don't bundle unrelated drafts or changes
- If a PR touches 10+ unrelated files, it's too broad — split it up

## AI-Assisted Writing

If you use Cursor or Claude Code to help write articles, the repository includes project-level rules that automatically guide the AI:

- **`.cursor/rules/article-writing.mdc`** — Voice, tone, anti-patterns (prevents robotic AI writing), cross-linking, and a review checklist
- **`.cursor/rules/article-structure.mdc`** — Frontmatter requirements, page skeleton, formatting rules, SEO/GEO guidance, and Diataxis type alignment
- **`.cursor/rules/git-workflow.mdc`** — Interactive checkpoints for branching, committing, and PR creation; filename and character rules for cross-platform compatibility

These rules are loaded automatically by Cursor when you open relevant files. Claude Code picks them up via `CLAUDE.md`. No setup needed — they travel with the repo.

## Testing

Before submitting changes:

```bash
rake run
```

Verify:

- All pages render correctly
- Links work as expected
- No build errors or warnings
- Content displays properly at localhost:3000
