---
title: What is a URL record?
excerpt: What is an URL record and how to create URL records with DNSimple.
categories:
- DNS
---

# What is a URL record?

The **URL** record is a [special DNSimple record](/articles/supported-dns-records). The URL records can be used to redirect a host name to another URL using our [redirector](/articles/redirector).

This feature can be used, for example, to redirect the www version of a domain the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain, without pointing it to any web hosting service.

For more information about the service, supported redirect types and limitations visit the [redirector](/articles/redirector) article.


## Create a URL record

Go to the [record editor](/articles/record-editor) for your domain and select a URL record from the *Add Record* dropdown.

Enter the hostname you would like to redirect from, and the URL to redirect to.

- `hostname`: The hostname is the name part of the non-HTTPS fully-qualified domain name you want to handle. For example, if you want to redirect `example.com` leave it blank. To redirect a subdomain such as `www.example.com`, enter only `www`.

- `URL`: The HTTP or HTTPS URL to redirect to. It can be also be a subdirectory of a site or a single page.

![Create URL record](/files/dnsimple-url-record-create.png)


### HTTPS redirects

The redirector doesn't support HTTPS, therefore you cannot redirect an HTTPS request.

Take a look at the article [redirector and HTTPS](/articles/redirector-https) for additional information and a list of possible of alternative solutions.
