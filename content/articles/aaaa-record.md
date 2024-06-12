---
title: What's an AAAA record?
excerpt: An AAAA record maps a domain name to the IP address (IPv6) of the computer hosting the domain.
categories:
- DNS
---

# AAAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's an AAAA record?

An **AAAA record** maps a domain name to the IP address (Version 6) of the computer hosting the domain. An AAAA record is used to find the IP address of a computer connected to the internet from a name.

The AAAA record is conceptually similar to the [A record](/articles/a-record), but it allows you to specify the IPv6 address of the server, rather than the IPv4.

AAAA records are [less common than A records](/articles/common-dns-records), however their popularity is rising along with the increased adoption of IPv6 addresses. For example, all the DNSimple name servers are [assigned to an IPv6 address](/articles/ipv6-support) and can be queried via either IPv4 or IPv6.

As with the A records, you can use multiple AAAA records for the same domain in order to provide redundancy. Multiple names could point to the same address, in which case each would have its own AAAA record pointing to that same IP address.

The DNS A record is specified by [RFC 3596](https://tools.ietf.org/html/rfc3596).


## AAAA record format {#record-format}

The structure of an AAAA record follows the standard top-level format definition defined [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of one single element:

| Element | Description |
|:--------|:--------------------------------------------------------|
| address | A 128 bit Internet address representing an IPv6 address |

Hosts that have multiple Internet addresses have multiple A records.

The canonical representation is:

```
AAAA <address>
```

where `<address>` is an IPv6 address and looks like `2400:cb00:2049:1::a29f:1804`.

In DNSimple, the AAAA record is represented by the following customizable elements:

| Element | Description |
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | The host name for the record without the domain name. This is generally referred to as "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Address | The IPv6 address the AAAA record points to.                                                                                                |


## Formatting

Because the same IPV6 address [can be represented in different ways](https://wikipedia.org/wiki/IPv6_address#Representation), DNSimple normalizes the IPV6 address to the canonical form, as described in [RFC 5952 section 4](https://www.rfc-editor.org/rfc/rfc5952.html#section-4).

Some examples:
- If you provide the IPv6 address `2001:0000:0000:00FE:0000:0000:0000:CDEF`, we will store it as `2001:0:0:fe::cdef`.
- If you provide the IPv6 address `2001:0db8::0001:0000`, we will store it as `2001:db8::1:0`.
- If you provide the IPv6 address `2001:db8:0:0:0:0:2:1`, we will store it as `2001:db8::2:1`.
- If you provide the IPv6 address `::ffff:c000:0280`, we will store it as `::ffff:192.0.2.128`.


## Querying AAAA records

You can use `dig` to determine the AAAA record associated with a domain name. The result is contained in the `ANSWER` section. It contains the fully-qualified domain name (FQDN), the remaining time-to-live (TTL), and the IP address.

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
