---
title: CNAME Record Reference
excerpt: The formal structure, restrictions, and key technical details of a CNAME record.
meta: Learn how to efficiently manage your CNAME records in DNSimple with our step-by-step guide for adding, updating, and removing records with ease.
categories:
- DNS
---

# CNAME Record Reference

This article is a reference for the formal structure, restrictions, and key technical details of a [CNAME (Canonical Name)](/articles/cname-record/) record.

## CNAME record format

A CNAME record is a single resource record that maps one domain name to another. The structure follows the standard format defined in [RFC 1035, Section 3.3.1](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.1).

The core component of a CNAME record is its RDATA (Resource Data) section, which is composed of one single element:

| Element | Description |
|:--------|:-------------------------------------------------------|
| domain-name | A domain name that specifies the canonical or primary name for the record. |

The canonical representation of a CNAME record is:
```
<name> IN CNAME <domain-name>
```
In the DNSimple [record editor](/articles/record-editor/), a CNAME record is represented by the following customizable elements:

| Element | Description |
|:--------|:-------------------------------------------------------|
|Name| The host name for the record, without the domain name. This is generally referred to as a “subdomain”.|
|TTL| The [time-to-live](/articles/what-is-ttl/) in seconds. This is the amount of time the record is allowed to be cached by a resolver.|
|Content| The fully-qualified domain-name that the CNAME maps to.|

## CNAME record restrictions
Understanding the following restrictions is critical to properly using CNAME records:
- **No coexistence with other records:** A CNAME record cannot coexist with any other record for the same name. It's not possible to have both a CNAME and an [MX record](/mx-record/) for www.example.com simultaneously.
- **Must point to a domain name:** A CNAME record must always point to another domain name and never directly to an IP address.
- **Chained CNAMEs:** A CNAME record can technically point to another CNAME record (e.g., `a.example.com` CNAME `b.example.com`, and `b.example.com` CNAME `c.example.com`). However, this is generally not recommended for performance reasons.

## Have more questions?
If you have additional questions or need any assistance with your CNAME records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
