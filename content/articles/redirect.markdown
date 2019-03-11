---
title: Configuring a Redirect
excerpt: DNSimple provides a special URL record you can use to redirect a hostname to another URL using our redirector service.
categories:
- Domains
---

# Configuring a Redirect

DNSimple provides a special [URL record](/articles/url-record) you can use to redirect a hostname to another URL using our [redirector](/articles/redirector).

This feature can be used to redirect the www version of a domain the non-www hostname. You can also redirect a secondary domain you purchased to the main domain without pointing it to any web hosting service.


## Configure a redirect

You can use the URL record to configure a redirect. Check the [URL record](/articles/url-record) and [redirector](/articles/redirector) articles for specific instructions on how to create the redirect.

The redirector is designed to use transparent 301 redirects. We don't support masked redirects.


## Configure an HTTPS, or HTTP+HTTPS redirect

The DNSimple redirector [doesn't support HTTPS](/articles/redirector-https). You cannot redirect an HTTPS request. Check the [redirector + HTTPS](/articles/redirector-https) article for possible alternatives.
