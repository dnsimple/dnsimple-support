---
title: What Is an ALIAS Record?
excerpt: What an ALIAS record is, and how to add an ALIAS record in DNSimple.
meta: What an ALIAS record is, and how to add an ALIAS record in DNSimple. Discover how to easily add to enhance your domain's DNS management and improve website performance.
categories:
- DNS
---

# What Is an ALIAS Record?

### Table of Contents {#toc}

* TOC
{:toc}

---
## What is an ALIAS record?

ALIAS records are a virtual record type developed by DNSimple to address a specific DNS management challenge: providing CNAME-like behavior for apex domains. Traditional DNS standards prevent using a [CNAME record](/articles/cname-record/) directly on a root domain (e.g., `example.com`), which creates limitations when you want your main domain to point to a hostname provided by services like Heroku or AWS Elastic Load Balancers.

An ALIAS record functions as a dynamic [A record](/articles/a-record/) that resolves IP addresses in real-time. When a DNS resolver queries your domain, the ALIAS record automatically resolves to one or more IPv4 (A) or [IPv6](/articles/ipv6-support/) (AAAA) addresses associated with the target hostname you've specified. From the resolver's perspective, your domain appears to have standard A or [AAAA records](/articles/aaaa-record/), effectively bypassing the CNAME restriction at the apex.

The resolution happens dynamically rather than returning a static IP address stored in DNS. The ALIAS record looks up the current addresses for the target hostname each time it's queried, then presents those addresses as if they were regular A or AAAA records on your domain.

### CNAME limitations at the apex

The limitation stems from how CNAME records work. According to [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.6.2), if a domain has a CNAME record, it cannot have any other records. This means no [MX records](/articles/mx-record/) for email, no [NS records](/articles/ns-record/) for name servers, and no A records can coexist with a CNAME.

Apex domains must have NS and [SOA records](/articles/soa-record/) to function, and they often require MX records for email delivery. Since these essential records cannot coexist with a CNAME, using a CNAME at the apex is not possible.

ALIAS records solve this by operating differently. They allow you to point your apex domain to a hostname while maintaining all other essential DNS records. This capability is particularly valuable for services that provide dynamic IP addresses, such as CDNs, cloud hosting platforms, or load balancers, where static A records would be impractical or inefficient.

## How ALIAS records work

### Dynamic resolution process

ALIAS record functionality is implemented on DNSimple's name servers, which are built on an open-source Erlang DNS server (`erl-dns`) enhanced with custom handlers. The ALIAS handler performs the dynamic resolution.

When a DNS query for an A or AAAA record type reaches a DNSimple name server for a domain with an ALIAS record, the ALIAS handler is invoked. Rather than looking up a static IP address, this handler performs a real-time resolution:

1. **External query:** The handler queries a local PowerDNS resolver to determine the current IPv4 or IPv6 addresses associated with the target hostname specified in your ALIAS record (e.g., `myapp.herokuapp.com`).
2. **Information extraction:** If the resolution succeeds, the handler extracts the resulting A and AAAA records.
3. **Dynamic response:** These dynamically obtained IP addresses are returned to the `erl-dns` server process, which serves them to the original requesting resolver as if they were static A or AAAA records directly on your domain.

### Performance and reliability

DNSimple's ALIAS resolution incorporates caching and retry mechanisms to ensure optimal performance and reliability:

**In-memory cache:** Successful resolutions are stored in an in-memory cache, allowing subsequent requests for the same ALIAS record to be served quickly without performing a new external resolution.

**Timeout and retries:** If an external resolution attempt fails or times out (currently targeting 500 milliseconds, with ongoing efforts to reduce this further), the system first attempts to return a cached response if one exists. If no cached response is available, the request is retried a set number of times. Only after exhausting these retries and failing to obtain a current or cached response will an empty result set be returned. This approach ensures your domain remains accessible even if the target service experiences temporary issues.

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
