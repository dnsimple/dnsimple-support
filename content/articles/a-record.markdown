
---
title: What's an A Record?
excerpt: An A record maps a domain name to the IP address (IPv4) of the computer hosting the domain.
categories:
- DNS
---

# A Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's an A record?

An **A record** maps a domain name to the IP address (Version 4) of the computer hosting the domain. An A record is used to find the IP address of a computer connected to the internet from a name.

The _A_ in A record stands for _Address_. Whenever you visit a web site, send an email, connect to Twitter or Facebook, or do almost anything on the Internet, the address you enter is a series of words connected with dots.

For example, to access the DNSimple website you enter `www.dnsimple.com`. At our name server there's an A record that points to the IP address `208.93.64.253`. This means that a request from your browser to `www.dnsimple.com` is directed to the server with IP address `208.93.64.253`.

A Records are the simplest type of DNS records, and one of the primary records used in DNS servers.

You can do a lot with A records, including using multiple A records for the same domain in order to provide redundancy and fallbacks. Additionally, multiple names could point to the same address, in which case each would have its own A record pointing to that same IP address.

The DNS A record is specified by [RFC 1035](https://tools.ietf.org/html/rfc1035).


## A record format {#record-format}

The structure of an A record follows the standard top-level format definition defined [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of one single element:

|:--------|:-------------------------------------------------------|
| address | A 32 bit Internet address representing an IPv4 address |

Hosts that have multiple Internet addresses have multiple A records.

The canonical representation is:

```
A <address>
```

where `<address>` is an IPv4 address and looks like `162.159.24.4`.

In DNSimple, the A record is represented by the following customizable elements:

|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | The host name for the record, without the domain name. This is generally referred to as "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Address | The IPv4 address the A record points to.                                                                                                   |


## Querying A records

You can use `dig` to determine the A record associated to a domain name. The result is contained in the `ANSWER` section. It contains the fully-qualified domain name (FQDN), the remaining time-to-live (TTL), and the IP address.

```
$ dig A api.dnsimple.com

; <<>> DiG 9.8.3-P1 <<>> A api.dnsimple.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 5792
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;api.dnsimple.com.		IN	A

;; ANSWER SECTION:
api.dnsimple.com.	59	IN	A	208.93.64.253

;; Query time: 80 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Sun Jul 31 22:21:31 2016
;; MSG SIZE  rcvd: 50
```


## Manage A records

From the DNSimple record editor, you can [add, remove, and update A records](/articles/manage-a-record).

