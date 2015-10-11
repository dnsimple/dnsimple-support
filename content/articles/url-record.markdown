---
title: What is an URL record?
excerpt: Welcome to DNSimple. This article is about our URL record. Enjoy low cost hosted DNS services, an easy to use web interface, and REST API.
categories:
- DNS
---

# What is an URL record?

The **URL** record is a [special DNSimple record](/articles/supported-dns-records). The URL records can be used to [redirect a hostname to another URL](/articles/redirect).

## Create an URL record

Go to the [advanced editor](/articles/advanced-editor) for your domain and select a URL record from the *Add Record* dropdown.

Enter the hostname you would like to redirect from, and the URL to redirect to.

- `hostname`: The hostname is the name part of the non-HTTPS fully-qualified domain name you want to handle. For example, if you want to redirect `example.com` leave it blank. To redirect a subdomain such as `www.example.com`, enter only `www`.

- `URL`: The HTTP or HTTPS URL to redirect to. It can be also be a subdirectory of a site or a single page.

![Create URL record](/files/dnsimple-url-record-create.png)

## Redirecting over SSL

Right now it is not possible for our redirection service to handle SSL requests for your domain names. Take a look at the article [Can a URL record redirect requests over SSL?](/articles/url-redirect-ssl) for additional information and an explanation of alternatives.

## URL to URL redirects

URL to URL redirects can't be done with our URL record. Only domains or subdomains can be redirected to complete URLs. 

Example: foo.com/blog to bar.com/blog

## Wildcard subdomain to URL redirects

Is not possible to redirect wildcard subdomains to URLs.

Example: *.foo.com to bar.com/$1

