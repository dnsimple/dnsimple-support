---
title: What is an AAAA record?
excerpt: An AAAA record maps a domain name to the IP address (IPv6) of the computer hosting the domain.
categories:
- DNS
---

# AAAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is an AAAA record?

An **AAAA record** maps a domain name to the IP address (Version 6) of the computer hosting the domain. Simply put, an AAAA record is used to find the IP address of a computer connected to the internet from a name.

The AAAA record is concettually similar to the [A record](/articles/a-record), but it allows you to specify the IPv6 address of the server, rather than the IPv4.

AAAA records are [less common than A records](/articles/common-dns-records), however their popularity is raising along with the increased adoption of IPv6 addresses. For example, all the DNSimple name servers are [assigned to an IPv6 address](/articles/ipv6-support) and can be queries either via IPv4 or IPv6.

As for the A records, you can use multiple AAAA records for the same domain in order to provide redundancy. Additionally, multiple names could point to the same address, in which case each would have its own AAAA record pointing to that same IP address.

The DNS A record is specified by [RFC 3596](https://tools.ietf.org/html/rfc3596).


## AAAA record format {#record-format}

The structure of an AAAA record follows the standard top-level format definition defined [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed by one single element:

|:--------|:--------------------------------------------------------|
| address | A 128 bit Internet address representing an IPv6 address |

Hosts that have multiple Internet addresses will have multiple A records.

The canonical representation is:

```
AAAA <address>
```

where `<address>` is an IPv6 address and looks like `2400:cb00:2049:1::a29f:1804`.

In DNSimple, the AAAA record is represented by the following customizable elements:

|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | The host name for the record, without the domain name. This is generally referred as "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Address | The IPv6 address the AAAA record points to.                                                                                                |


## Querying AAAA records

You can use `dig` to determine the AAAA record associated to a domain name. The result is contained in the `ANSWER` section and it contains the fully-qualified domain name (FQDN), the remaining time-to-live (TTL) and the IP address.

```
$ dig AAAA ns1.dnsimple.com

; <<>> DiG 9.10.6 <<>> AAAA ns1.dnsimple.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 52403
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;ns1.dnsimple.com.		IN	AAAA

;; ANSWER SECTION:
ns1.dnsimple.com.	1795	IN	AAAA	2400:cb00:2049:1::a29f:1804

;; Query time: 47 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Fri Nov 02 19:20:40 CET 2018
;; MSG SIZE  rcvd: 73
```


## Manage AAAA records

From the DNSimple record editor you can [add, remove, and update AAAA records](/articles/manage-aaaa-record).
