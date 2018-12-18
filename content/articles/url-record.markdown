---
title: What's a URL Record?
excerpt: What a URL record is, and how to add a URL record in DNSimple.
categories:
- DNS
---

# What's a URL Record?

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's a URL record?

The **URL record** is a [special DNSimple record](/articles/supported-dns-records). URL records can be used to redirect a hostname to another URL using our [redirector](/articles/manage-url-record).

This feature can be used, for example, to redirect the `www.example.com` domain to `example.com`. Another use case is to redirect a secondary domain you purchased to the main domain without pointing it to any web hosting service.

For more information about the service, supported redirect types, and limitations, visit the [redirector](/articles/redirector) article.


## URL record format {#record-format}

The URL record is a special record, and it's not defined by any RFC.

In DNSimple, the URL record is represented by the following customizable elements:

|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| name    | The host name for the record without the domain name. This is generally referred to as "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| URL     | The redirect destination URL.                                                                                                              |

DNSimple exposes URL records as standard A and AAAA records. The canonical representation is the same for the A and AAAA records.

When you create a URL record, we automatically configure a set of A and AAAA records to point the source hostname to an instance of our [redirector](/articles/redirector) service. When an HTTP client queries the hostname, our redirector service  serves an appropriate HTTP request to redirect the client to the target URL you configured in the record editor.


## Manage URL records

From the DNSimple record editor you can [add, remove, and update URL records](/articles/manage-url-record).
