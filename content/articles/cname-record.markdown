---
title: What's a CNAME record?
excerpt: CNAME records can be used to alias one name to another.
categories:
- DNS
---

# CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's a CNAME record?

**CNAME records** can be used to alias one name to another. CNAME stands for Canonical Name. 

A common example is when you have both `example.com` and `www.example.com` pointing to the same application and hosted by the same server. In this case, to avoid maintaining two different records, it's common to create:

- An `A` record for `example.com` pointing to the server IP address
- A `CNAME` record for `www.example.com` pointing to `example.com`

As a result, `example.com` points to the server IP address, and `www.example.com` points to the same address via `example.com`. Should the IP address change, you only need to update it in one place: just edit the A record for `example.com`, and `www.example.com` automatically inherits the changes.

<note>
A CNAME record must always point to another domain name, never directly to an IP address.
</note>

The DNS A record is specified by [RFC 1035](https://tools.ietf.org/html/rfc1035).


## Restrictions

1. A CNAME record must always point to another domain name and never directly to an IP address.
2. A CNAME record cannot co-exist with another record for the same name. It's not possible to have both a CNAME and TXT record for `www.example.com`.
3. A CNAME can point to another CNAME, although this configuration is generally not recommended for performance reasons. When applicable, the CNAME should point as closely as possible to the target name in order to avoid unnecessary performance overheads.


## CNAME record format {#record-format}

The structure of an A record follows the standard top-level format definition defined [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of one single element:

| Element | Description |
|:------------|:----------------------------------------------------------------------------|
| domain-name | A domain name which specifies the canonical or primary name for the record. |

The canonical representation is:

```
CNAME <domain-name>
```

where `<domain-name>` is a fully-qualified domain name such as `example.com`.

In DNSimple, the CNAME record is represented by the following customizable elements:

| Element | Description |
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | The host name for the record, without the domain name. This is generally referred to as "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Content | The domain-name the CNAME maps to.                                                                                                         |


## CNAME and Redirect

The CNAME record is sometimes improperly referred to as _redirect_, generally in the context of web (HTTP) redirects.

There is no direct correlation between a CNAME and an HTTP redirect, nor does configuring CNAME automatically result in any HTTP redirect.
In order to perform an HTTP redirect, the server responding to the HTTP request must be configured to return an appropriate HTTP response. This is not directly achievable using a CNAME.

You can learn more by reading the [differences between the A, CNAME, ALIAS and URL records](/articles/differences-between-a-cname-alias-url). DNSimple provides a special [URL record](/articles/url-record) that can be used to configure an HTTP redirect.


## Querying CNAME records

You can use `dig` to determine the CNAME record associated to a domain name. The result is contained in the `ANSWER` section. It contains the fully-qualified domain name (FQDN), the remaining time-to-live (TTL), and the domain-name.

```
$ dig CNAME www.dnsimple.com

; <<>> DiG 9.10.6 <<>> CNAME www.dnsimple.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 5274
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;www.dnsimple.com.		IN	CNAME

;; ANSWER SECTION:
www.dnsimple.com.	3599	IN	CNAME	dnsimple.com.

;; Query time: 52 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Fri Nov 02 20:33:09 CET 2018
;; MSG SIZE  rcvd: 59
```


## Manage CNAME records

From the DNSimple record editor you can [add, remove, and update CNAME records](/articles/manage-cname-record).
