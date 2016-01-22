---
title: Using an SSL Certificate with Heroku
excerpt: How to install on Heroku a certificate purchased with DNSimple.
categories:
- Heroku and DNSimple
---

# Using an SSL Certificate with Heroku

If you purchase an SSL certificate through DNSimple and would like to use it at Heroku then you will want to follow the instructions given on the Heroku web site for [using an SSL certificate from DNSimple in Heroku](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) and [setting up the Heroku SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint).

Make sure that you point your domain to your [custom SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint#endpoint-details) that Heroku provides. Don't use the generic `myapp.herokuapp.com` and `proxy.herokuapp.com` endpoints or an IP address to avoid [SSL certificate errors](/articles/ssl-certificate-herokuapp-error).

