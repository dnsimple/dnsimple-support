---
title: How Long Does a New DNS Record Take to Resolve?
excerpt: Learn how quickly new DNS records become available at DNSimple. Understand DNS caching, propagation delays, and how TTL affects record visibility.
categories:
- DNS
---

# How Long Does a New DNS Record Take to Resolve?

Records you add to a domain will be available within seconds from all of DNSimple's name servers. This rapid propagation means your new record is live on our end almost instantly.

The time it takes for the new record to be visible to you and your visitors, however, depends on how other DNS resolvers handle caching.

## The role of caching
When a new record is added, a DNS resolver may not see it immediately if it has recently queried the domain for that same record. Resolvers, used by browsers and applications, store DNS information in a cache to reduce network traffic and speed up lookups.

This caching behavior also applies to records that don't exist. If a DNS resolver queries for a name that's not yet in the system, it will cache that negative response. It may take up to an hour for this negative result to be cleared from a resolver's cache, causing a delay before your new record becomes publicly visible.

To learn more about how caching works and how to control it, read our [**What Is Time-to-Live?**](https://support.dnsimple.com/articles/what-is-ttl/) article.

## Have more questions? 
If you have additional questions about caching, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
