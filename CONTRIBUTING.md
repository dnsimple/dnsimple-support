# Contributing to DNSimple Support

This guide covers best practices and guidelines for contributing to the DNSimple Support site.

## Getting Started

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

### Links and References

Include in articles:

- Relevant links to customer-facing information: dev docs, other support pages, and video walkthroughs
- The information you want to communicate to the customer. Make sure it's clear

When adding links:

- Use support.dnsimple.com for internal article links
- Use dnsimple.com for product/marketing pages
- Ensure all links are current and functional
- Include external explanation links where helpful (e.g., Wikipedia, ICANN, Cloudflare, etc.)

## Managing Content

### Categories

Add/remove/edit categories by editing `priorities/categories.yaml`.

After making changes:

```bash
rake run
```

### Sub-categories

Group and order articles in sub-categories by editing the corresponding YAML file in the `categories` folder.

Articles not added to a YAML file will be automatically grouped in an "Other" sub-category.

After making changes:

```bash
rake run
```

## Creating and Reviewing Articles

### New Support Documentation

When creating new support documentation:

1. **Create a branch** and draft the article directly in the repository
2. **Follow the writing guidelines** - keep content clear and concise
3. **Include relevant links** - customer-facing information, dev docs, other support pages, and video walkthroughs
4. **Test locally** with `rake run` to verify formatting and layout
5. **Create a pull request** following the PR process below

### Updating Support Articles

**Minor updates** (adding a sentence, updating links, adding a note, product name changes):

- Edit directly in a branch and create a PR

**Substantial updates** (major rewrites, significant content changes):

- Follow the same process as creating new documentation
- If unsure whether an update is minor or substantial, ask in #customer-success

### Pull Request Process

When submitting a pull request:

1. Apply the label `articles`
2. Set yourself as assignee
3. **Request reviews:**
   - Tag a second expert with knowledge of the feature/product
   - Tag Alyse for proofreading, clarity, and voice/tone
   - Tag Customer Success for review (required for substantial updates, optional for minor updates)
   - To ensure consistent tone, wait until after initial proofreading and edits before adding Customer Success for review
4. **Testing:** If reviewers need to test a process, they should use https://sandbox.dnsimple.com
5. Ensure all approvals are received
6. Verify the pipeline is green
7. Merge the PR yourself
8. Delete the source branch

## Git Commit Guidelines

When creating commits:

- Focus on clear, descriptive commit messages
- Use imperative mood (e.g., "Add article about...", "Update DNS guide...")
- Keep commits focused on a single logical change

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
