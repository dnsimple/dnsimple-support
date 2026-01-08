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

## Content Guidelines

### Before You Start

Follow the SOP for [Support Article Creation & Updates](https://dnsimple.atlassian.net/wiki/spaces/BIZOPS/pages/2615115803/Support+Article+Creation+and+Update+Procedure).

**Important:**

- Draft all new articles in Google Docs prior to creating a PR
- Draft any substantial updates in Google Docs prior to creating a PR

### Writing Guidelines

Reference our [support writing guidelines](https://support.dnsimple.com/articles/writing-guide/) for style, tone, and formatting standards.

### Markdown Style

- Use GitHub-Flavored Markdown (GFM)
- Follow DNSimple style guide for technical writing
- Keep content clear, concise, and user-focused

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

- Use support.dnsimple.com for internal article links
- Use dnsimple.com for product/marketing pages
- Ensure all links are current and functional

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

## Pull Request Process

When submitting a pull request:

1. Apply the label `articles`
2. Set yourself as assignee
3. Ensure all approvals are received
4. Verify the pipeline is green
5. Merge the PR yourself
6. Delete the source branch

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

## Deployment

Each commit to main is deployed automatically via Netlify.

## Best Practices

### When Creating a New Article

1. Draft in Google Docs (per SOP)
2. Get necessary approvals
3. Create the article file in the appropriate location
4. Follow the support writing guidelines
5. Test locally with `rake run`
6. Create PR with `articles` label
7. Set yourself as assignee
8. After approval and green pipeline, merge and delete branch

### When Updating an Existing Article

1. For substantial changes, draft in Google Docs (per SOP)
2. For minor fixes, you can edit directly
3. Follow the support writing guidelines
4. Test locally with `rake run`
5. Create PR with `articles` label
6. Follow standard PR process
