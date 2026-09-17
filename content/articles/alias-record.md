---
title: What Is an ALIAS Record?
excerpt: What an ALIAS record is, and how to add an ALIAS record in DNSimple.
meta: What an ALIAS record is and how to add one in DNSimple. ALIAS records let you point your root domain to another hostname using DNS resolution.
categories:
- DNS
---

# What Is an ALIAS Record?

### Table of Contents {#toc}

* TOC
{:toc}

---
## What is an ALIAS record? {#what-is-an-alias-record}

ALIAS records are something we built at DNSimple to solve a specific problem: you cannot use a [CNAME record](/articles/cname-record/) on your root domain (like `example.com`). But sometimes you need your main domain to point to a hostname from a service like Heroku or an AWS Elastic Load Balancer.

An ALIAS record acts like a dynamic [A record](/articles/a-record/) that looks up IP addresses on the fly. When someone queries your domain, the ALIAS record finds the current IPv4 (A) or [IPv6](/articles/ipv6-support/) (AAAA) addresses for whatever hostname you have specified. To the resolver asking for your domain, it looks like you have regular A or [AAAA records](/articles/aaaa-record/) set up.

Instead of storing a static IP address in DNS, the ALIAS record looks up the current addresses every time it is queried. Then it serves those addresses as if they were normal A or AAAA records on your domain.

### CNAME limitations at the apex

Here is why CNAMEs do not work at the apex. According to [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.6.2), if a domain has a CNAME record, it cannot have any other records. That means no [MX records](/articles/mx-record/) for email, no [NS records](/articles/ns-record/) for name servers, no A records—nothing else.

But your root domain needs NS and [SOA records](/articles/soa-record/) to work. It usually needs MX records too. Since those records cannot exist alongside a CNAME, you cannot use a CNAME at the apex.

ALIAS records get around this by working differently. They let you point your root domain to a hostname while keeping all your other DNS records. This is really useful when you are dealing with services that change their IP addresses—CDNs, cloud platforms, load balancers, that kind of thing. A static A record would not work well in those cases.

## How ALIAS records work {#how-alias-records-work}

### Dynamic resolution process

The ALIAS functionality runs on our name servers. We use an open-source Erlang DNS server called `erl-dns`, and we have added custom handlers to it. The ALIAS handler does the dynamic lookup.

When a DNS query comes in for a domain with an ALIAS record, here is what happens:

1. **External query:** The handler asks a local PowerDNS resolver to find the current IPv4 or IPv6 addresses for the hostname in your ALIAS record (something like `myapp.herokuapp.com`).
2. **Information extraction:** If that lookup works, the handler pulls out the A and AAAA records it found.
3. **Dynamic response:** Those IP addresses get sent back through the `erl-dns` server to whoever asked for them. To that resolver, it looks exactly like your domain has static A or AAAA records.

### Performance and reliability

We have added some features to keep things fast and reliable:

**In-memory cache:** When we successfully resolve an ALIAS record, we store the result in memory. The next time someone asks for the same record, we can return the cached answer right away instead of doing another lookup.

**Timeout and retries:** Each lookup attempt has 500 milliseconds to complete. If an attempt times out, DNSimple checks the in-memory cache again and returns a cached answer if one is available. If there is no cached answer, DNSimple tries the lookup one more time.

**When the lookup fails:** If both attempts fail, or the resolver reports an error for the target, DNSimple name servers answer with `SERVFAIL`. This status tells resolvers the answer is temporarily unavailable, so they retry the query, often against another DNSimple name server, instead of caching an empty result. Your ALIAS record resolves again as soon as the target is reachable.

**When the target does not exist:** If the ALIAS target returns `NXDOMAIN` (the name does not exist), DNSimple answers with an empty response for the A or AAAA query rather than `NXDOMAIN`. Other records on the same name, such as MX or TXT records, keep working. You can check which status a query returns with [dig](/articles/what-is-dig/).

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.
