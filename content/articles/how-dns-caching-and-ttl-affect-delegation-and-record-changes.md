---
title: How DNS Caching and TTL Affect Delegation and Record Changes
excerpt: Why delegation and DNS record updates can look delayed worldwide, and how resolver caching, TTL, and negative caching interact with registry data.
meta: DNS resolvers cache delegation and record answers for as long as the TTL allows. Registry and WHOIS can update before every resolver drops old cached NS or record data.
categories:
- Name Servers
- DNS
---

# How DNS Caching and TTL Affect Delegation and Record Changes

DNS answers are cached. After you change [name server delegation](/articles/what-is-a-nameserver/) at your registrar or edit records in your DNS zone, authoritative servers can serve the new data immediately, while many resolvers still return older answers until their cache entries expire. That gap is normal and bounded mainly by [time-to-live (TTL)](/articles/what-is-ttl/) values and resolver behavior.

### Table of Contents {#toc}

* TOC
{:toc}

---

## Record changes and TTL {#record-changes-and-ttl}

When you change an A, AAAA, CNAME, MX, or other record at your DNS host, authoritative name servers publish the new value quickly. Recursive resolvers that already cached the old answer keep serving it until the TTL on that cached answer reaches zero, then they fetch fresh data. See [How Long Does a New DNS Record Take to Resolve?](/articles/how-long-does-it-take-for-a-new-record-to-resolve-for-my-domain/) and [DNSimple TTL Settings Reference](/articles/what-minimum-time-to-live/) for product defaults and how to lower TTL ahead of planned changes.

## Delegation changes and caching {#delegation-changes-and-caching}

Changing which servers are authoritative (for example after [pointing your domain to DNSimple](/articles/pointing-domain-to-dnsimple/)) updates delegation at the registry. Resolvers cache delegation responses too. Parents publish NS records for your zone with their own TTLs; until those caches expire, some clients may still query your previous name servers. That is why support often cites up to roughly 24 hours for broad propagation even though [WHOIS](/articles/domain-resolution-issues/#check-name-server-list-in-the-whois-response/) may already list new name servers.

Delegation caching and record caching are separate layers. You can see correct NS data in WHOIS while an individual resolver still uses old NS until its cached delegation expires.

## Negative caching {#negative-caching}

If a resolver recently learned that a name did not exist or got an error, it may cache that negative result (NXDOMAIN or NODATA) for the [negative TTL](https://www.ietf.org/rfc/rfc2308.txt) derived from the SOA record. After you add a new record or fix delegation, negative caching can briefly hide the fix from some resolvers even when authoritative data is already correct.

## What to do next {#what-to-do-next}

- For browser or laptop tests, [flush local DNS cache](/articles/check-dns-cache/) so your device does not reuse stale answers.
- For delegation problems, follow [Troubleshoot DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/) and [Troubleshoot Domain Resolution Issues](/articles/domain-resolution-issues/).
- For record-specific problems, see [Troubleshoot Record Resolution Issues](/articles/record-resolution-issues/).

## Have more questions?

If you have questions about propagation or caching, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
