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
## Why ALIAS records exist
An ALIAS record is a unique, virtual record type developed by DNSimple to address a specific challenge in DNS management: providing CNAME-like behavior for apex domains. Traditional DNS standards prevent using a [CNAME record](/articles/cname-record/) directly on a root domain (e.g., `example.com`), which can be limiting when you want your main domain to point to a hostname provided by a service like Heroku or an AWS Elastic Load Balancer.

## What an ALIAS record is
At its core, an ALIAS record acts as a smart, dynamic [A record](/articles/a-record/). When a DNS resolver queries your domain, the ALIAS record automatically resolves your domain to one or more IPv4 (A) or [IPv6](/articles/ipv6-support/) (AAAA) addresses in real-time. From the perspective of the requesting resolver, your domain appears to have standard A or [AAAA records](/articles/aaaa-record/), effectively bypassing the CNAME restriction at the apex.

### Why CNAMEs cannot be used at the apex
The primary reason ALIAS records exist is the inherent limitation of CNAME records. A CNAME (Canonical Name) record establishes an alias from one domain name to another. However, according to [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.6.2), if a domain has a CNAME record, it cannot have any other records (like [MX records](/articles/mx-record/) for email, [NS records](/articles/ns-record/) for name servers, or even A records). Since the apex domain must have NS and [SOA records](/articles/soa-record/) (and often MX records), it cannot simultaneously be a CNAME.

This is where the ALIAS record shines. It allows you to point your apex domain to a hostname while still maintaining other essential DNS records. This is particularly valuable for services that provide dynamic IP addresses (like CDNs, cloud hosting platforms, or load balancers) where a static A record wouldn't be practical or efficient.

## How ALIAS records work

### Dynamic resolution process
The functionality of ALIAS records happens behind the scenes, powered by DNSimple's name servers. Our name servers are built on an open-source Erlang DNS server (erl-dns), which we've enhanced with a mechanism for "custom handlers." This is where the ALIAS handler comes in.

When a DNS query for an A or AAAA record type hits a DNSimple name server, the ALIAS handler is invoked. Instead of looking up a static IP address, this handler performs a real-time resolution:

1. **External query:** The handler queries a local PowerDNS resolver to determine the current IPv4 or IPv6 addresses associated with the target hostname specified in your ALIAS record (e.g., `myapp.herokuapp.com`).
1. **Information extraction:** If the resolution is successful, the handler extracts the resulting A and AAAA records.
1. **Dynamic response:** These dynamically obtained IP addresses are then returned to the `erl-dns` server process, which serves them to the original requesting resolver as if they were static A or AAAA records directly on your domain.

### Performance and reliability
To ensure optimal performance and reliability, DNSimple's ALIAS resolution incorporates caching and retry mechanisms:

**In-memory cache:** Successful resolutions are stored in an in-memory cache. This allows subsequent requests for the same ALIAS record to be served quickly without needing to perform a new external resolution.

**Timeout and retries:** If an external resolution attempt fails (e.g., due to a timeout of 500 milliseconds, which we aim to lower for even faster responses), the system first attempts to return a cached response if one exists. If there's no cached response, the request is retried a set number of times. Only after exhausting these retries and failing to get a current or cached response will an empty result set be returned, indicating the record could not be resolved. This robust system ensures that your domain remains accessible even if the target service experiences temporary issues.

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

