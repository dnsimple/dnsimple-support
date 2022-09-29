# DNSimple Help Site

This is the [DNSimple Help site](https://support.dnsimple.com) built with [nanoc](http://nanoc.stoneship.org/)

[![CI](https://github.com/dnsimple/dnsimple-support/actions/workflows/ci.yml/badge.svg)](https://github.com/dnsimple/dnsimple-support/actions/workflows/ci.yml)


## Setup

1. Clone this repository
1. Run `asdf install`
1. Run `bundle install`
1. Start your local instance with `rake run`

The site will be visible at [localhost:3000](http://localhost:3000).


## Development

Use `rake run` to start the site. The server will automatically re-compiles changed files.


## Deployment

Each commit to main is deployed automatically via Netlify.


### Managing categories

You can add/remove/edit categories by editing the file `priorities/categories.yaml`.

Once you are done, run `rake run` to see your changes

#### Sub-categories

You can group and order articles in sub-categories by editing the corresponding YAML file in the `categories` folder. Articles that are not added to a YAML file, will be automatically grouped in a "Other" sub-category.

Once you are done, run `rake run` to see your changes.

## Contributing

When submitting a pull request, apply the label `articles` and set yourself as assignee. Select `@SarahCaminiti1` and `@deandre` for review and, if your PR makes more substantive changes to copy, select `@itsalyse` as well for copy editing.

Once all approvals are given and the pipeline is green, merge the PR yourself and delete the source branch.

### Support writing guidelines

Reference our support writing guidelines, [here](https://support.dnsimple.com/articles/writing-guide/).
