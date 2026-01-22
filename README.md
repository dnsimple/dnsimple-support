# DNSimple Help Site

This is the [DNSimple Help site](https://support.dnsimple.com) built with [nanoc](http://nanoc.stoneship.org/).

[![CI](https://github.com/dnsimple/dnsimple-support/actions/workflows/ci.yml/badge.svg)](https://github.com/dnsimple/dnsimple-support/actions/workflows/ci.yml)

## Quick Start

```shell
asdf install
bundle install
rake run
```

The site will be available at http://localhost:3000

## Deployment

Each commit to main is deployed automatically via Netlify.

## Search Results

To pin specific articles to the top of search results for certain queries, edit `_widget/src/components/app/rigged-results.yml`:

```yaml
email:
  - /articles/mx-record/
  - /articles/email-forwarding/

transfer:
  - /articles/domain-transfer/
  - /articles/transferring-domain-away/
```

Pinned articles appear first, followed by Fuse.js search results.

## Contributing

For setup instructions, development workflow, writing guidelines, and best practices, see [CONTRIBUTING.md](CONTRIBUTING.md).
