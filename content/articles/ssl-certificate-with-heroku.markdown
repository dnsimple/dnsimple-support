---
title: Using an SSL Certificate with Heroku
excerpt: How to install on Heroku a certificate purchased with DNSimple.
categories:
- Heroku and DNSimple
---

# Using an SSL Certificate with Heroku

If you purchase an SSL certificate through DNSimple and would like to use it at Heroku then you will want to follow the instructions given on the Heroku web site for [setting up the SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) and [installing an SSL certificate from DNSimple](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple).

Make sure that you point your domain to your [custom SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint#endpoint-details) that Heroku provides. Don't use the generic `myapp.herokuapp.com` and `proxy.herokuapp.com` endpoints or an IP address to avoid [SSL certificate errors](/articles/ssl-certificate-herokuapp-error).

## More Resources

Some DNSimple customers have also put together blog posts about SSL certificates and Heroku:

- [How To Add a DNSimple SSL Certificate to Heroku](http://ryan.mcgeary.org/2011/09/16/how-to-add-a-dnsimple-ssl-certificate-to-heroku/)
- [Enable Wildcard SSL on a Heroku Rails App](http://bigtrapeze.com/2012/05/16/enabling-wildcard-ssl-on-a-heroku-rails-app/)
