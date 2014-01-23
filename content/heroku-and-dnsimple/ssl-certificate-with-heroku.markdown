---
title: Using an SSL Certificate with Heroku
excerpt: 
category: Heroku and DNSimple
---

# Using an SSL Certificate with Heroku

If you purchase an SSL certificate through DNSimple and would like to use it at Heroku then you will want to follow the instructions given on the Heroku web site for setting up a [custom SSL domain](https://devcenter.heroku.com/articles/ssl#customdomain-ssl).

Make sure that you point your domain to your custom SSL endpoint that Heroku provides. Don't use the generic `proxy.herokuapp.com` endpoint or IP address to avoid [SSL certificate errors](/articles/ssl-certificate-herokuapp-error).

Note that you can't use the Heroku one-click service at DNSimple if you are planning to use an SSL certificate, rather you should add the ALIAS (for the apex) or CNAME record (for subdomains) through the Advanced Editor.

Some DNSimple customers have also put together blog posts about SSL certificates and Heroku:

- http://ryan.mcgeary.org/2011/09/16/how-to-add-a-dnsimple-ssl-certificate-to-heroku/
- http://bigtrapeze.com/2012/05/16/enabling-wildcard-ssl-on-a-heroku-rails-app/
