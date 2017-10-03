# DNSimple Help Site

This is the [DNSimple Help site](https://support.dnsimple.com) built with [nanoc](http://nanoc.stoneship.org/).

## Setup

Ruby 2, or higher, is required to build the site. Dependencies are managed using Bundler.

    $ git clone https://github.com/dnsimple/dnsimple-support.git
    $ cd dnsimple-support
    $ bundle

For a list of `nanoc` commands type

    $ nanoc --help

## Development

`nanoc` ships with an autocompiler that automatically compiles changed files on every HTTP request.

    $ bundle exec nanoc live

    Loading site… done
    Thin web server (v1.7.0 codename Dunder Mifflin)
    Maximum connections set to 1024
    Listening on 0.0.0.0:3000, CTRL+C to stop

    14:26:35 - INFO - Compilation succeeded.
    14:26:35 - INFO - Guard is now watching at '~/projects/dnsimple-support'
    
### Managing categories

You can add/remove/edit categories by editing the file `priorities/categories.yaml`.

Once you are done, run `rake clean`, `rake compile` and `nanoc view` (or `nanoc live`) to see your changes

### Sorting articles

You can edit the order in which the articles appear in a category page by editing the file `priorities/articles.yaml`

Once you are done, run `rake clean`, `rake compile` and `nanoc view` (or `nanoc live`) to see your changes.

## Deployment

Each commit to master is [deployed automatically via Travis](https://blog.dnsimple.com/2016/04/publish-static-via-travis-to-cloudfront/).

### Manual deployment

To publish the site manually you will need Java (as the static deployer is written in Scala).

Add a `.env` file with following variables, replacing `ACCESS_ID` and `ACCESS_KEY` with the real values.

    S3_ID=ACCESS_ID
    S3_SECRET=ACCESS_KEY

Finally, run:

    $ rake publish
