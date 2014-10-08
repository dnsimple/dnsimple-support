---
title: Configuring a Redirect
excerpt: 
categories:
- Domains
---

# Configuring a Redirect

DNSimple provides a special [URL record](/articles/url-record) you can use to redirect an hostname to another URL.

This feature can be used, for example, to redirect the www version of a domain the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain, without pointing it to any web hosting service.

## Configure a redirect

Go to the [advanced editor](/articles/advanced-editor) for your domain and select a `URL` record.

## Redirect status code

The redirect sets a 301 status code. The code is not configurable and it's currently not possible to return a 302 temporary redirect using the URL record.

## Caveats

[HTTP redirects will only work with non-SSL connections](/articles/url-redirect-ssl), you cannot redirect an HTTPs request to another URL.

If you need to use SSL then you should point your domain to the server where the SSL certificate is installed and handle redirection internally in your application code.

