# DNSimple Help Site

This is the [DNSimple Help site](https://support.dnsimple.com) built with [nanoc](http://nanoc.stoneship.org/)

[![Build Status](https://travis-ci.org/dnsimple/dnsimple-support.svg?branch=master)](https://travis-ci.org/dnsimple/dnsimple-support)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f63d313f-9855-48e1-abb1-8b38c8e0d5bd/deploy-status)](https://app.netlify.com/sites/dnsimple-support/deploys)


## Setup

1. Clone this repository
2. Run `asdf install`
3. Run `bundle install`
4. Run `yarn`
5. Start your local instance with `yarn live`

## Development

Use `yarn live` to concurrently compile JS and CSS dependencies along with running `nanoc live`.
An autocompiler automatically compiles changed files on every HTTP request.

```shell
yarn live

Loading site… done
Thin web server (v1.7.0 codename Dunder Mifflin)
Maximum connections set to 1024
Listening on 0.0.0.0:3000, CTRL+C to stop

14:26:35 - INFO - Compilation succeeded.
14:26:35 - INFO - Guard is now watching at '~/projects/dnsimple-support'
```

### Managing categories

You can add/remove/edit categories by editing the file `priorities/categories.yaml`.

Once you are done, run `rake clean`, `rake compile` and `nanoc view` (or `nanoc live`) to see your changes

### Sorting articles

You can edit the order in which the articles appear in a category page by editing the file `priorities/articles.yaml`

Once you are done, run `rake clean`, `rake compile` and `nanoc view` (or `nanoc live`) to see your changes.

## Deployment

Each commit to master is deployed automatically via Netlify.
