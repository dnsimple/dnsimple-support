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

ALIAS records are something we built at DNSimple to solve a specific problem: you can't use a [CNAME record](/articles/cname-record/) on your root domain (like `example.com`). But sometimes you need your main domain to point to a hostname from a service like Heroku or an AWS Elastic Load Balancer.

An ALIAS record acts like a dynamic [A record](/articles/a-record/) that looks up IP addresses on the fly. When someone queries your domain, the ALIAS record finds the current IPv4 (A) or [IPv6](/articles/ipv6-support/) (AAAA) addresses for whatever hostname you've specified. To the resolver asking for your domain, it looks like you have regular A or [AAAA records](/articles/aaaa-record/) set up.

Instead of storing a static IP address in DNS, the ALIAS record looks up the current addresses every time it's queried. Then it serves those addresses as if they were normal A or AAAA records on your domain.

### CNAME limitations at the apex

Here's why CNAMEs don't work at the apex. According to [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.6.2), if a domain has a CNAME record, it can't have any other records. That means no [MX records](/articles/mx-record/) for email, no [NS records](/articles/ns-record/) for name servers, no A records—nothing else.

But your root domain needs NS and [SOA records](/articles/soa-record/) to work. It usually needs MX records too. Since those records can't exist alongside a CNAME, you can't use a CNAME at the apex.

ALIAS records get around this by working differently. They let you point your root domain to a hostname while keeping all your other DNS records. This is really useful when you're dealing with services that change their IP addresses—CDNs, cloud platforms, load balancers, that kind of thing. A static A record wouldn't work well in those cases.

## How ALIAS records work

### Dynamic resolution process

The ALIAS functionality runs on our name servers. We use an open-source Erlang DNS server called `erl-dns`, and we've added custom handlers to it. The ALIAS handler does the dynamic lookup.

When a DNS query comes in for a domain with an ALIAS record, here's what happens:

1. **External query:** The handler asks a local PowerDNS resolver to find the current IPv4 or IPv6 addresses for the hostname in your ALIAS record (something like `myapp.herokuapp.com`).
2. **Information extraction:** If that lookup works, the handler pulls out the A and AAAA records it found.
3. **Dynamic response:** Those IP addresses get sent back through the `erl-dns` server to whoever asked for them. To that resolver, it looks exactly like your domain has static A or AAAA records.

### Performance and reliability

We've added some features to keep things fast and reliable:

**In-memory cache:** When we successfully resolve an ALIAS record, we store the result in memory. The next time someone asks for the same record, we can return the cached answer right away instead of doing another lookup.

**Timeout and retries:** Sometimes the external lookup fails or takes too long (we're aiming for 500 milliseconds or less, and we're working on making it even faster). When that happens, we try to return a cached answer first if we have one. If there's no cache, we retry the lookup a few times. We only return an empty result if all those attempts fail. This keeps your domain accessible even if the target service has a temporary problem.

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
