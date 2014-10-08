---
title: Troubleshooting SSL error for *.heroku.com or *. herokuapp.com
excerpt: 
categories:
- Heroku and DNSimple
---

# Troubleshooting SSL error for *.heroku.com or *. herokuapp.com

You pointed your domain to Heroku to use an SSL certificate and you are receiving an error message like this:

> This is probably not the site you are looking for!
> 
> You attempted to reach example.com, but instead you actually reached a server identifying itself as *.herokuapp.com. This may be caused by a misconfiguration on the server or by something more serious. An attacker on your network could be trying to get you to visit a fake (and potentially harmful) version of example.com.

![Error](http://f.cl.ly/items/2Q1V0g1x3D0f2U2h282G/dnsimple-heroku-ssl-error.png)

This error occurs because you are pointing the DNS to the generic Heroku endpoint. Instead you need to **use the [custom SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) they provide to you**.

Do not try to point to `proxy.herokuapp.com` as this will not work with a custom domain and SSL.

For more information visit this article about [using an SSL certificate with Heroku](http://support.dnsimple.com/articles/ssl-certificate-with-heroku).
