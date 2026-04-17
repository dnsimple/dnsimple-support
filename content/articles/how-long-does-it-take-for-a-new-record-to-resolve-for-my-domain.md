---
title: How Long Does a New DNS Record Take to Resolve?
excerpt: New DNS records are live on DNSimple name servers within seconds. Full DNS propagation to all resolvers worldwide depends on TTL and caching.
meta: DNS propagation typically takes minutes to 48 hours depending on TTL and resolver caching. Learn how long new DNS records take to resolve and why propagation delays happen.
categories:
- DNS
---

# How Long Does a New DNS Record Take to Resolve?

Records you add to a domain will be available within seconds from all of DNSimple's name servers. Full DNS propagation - the time it takes for the change to be visible worldwide - depends on how other DNS resolvers handle caching.

## DNS propagation and caching {#dns-propagation-and-caching}

DNS propagation is the time it takes for DNS record changes to spread across all resolvers on the internet. When a new record is added, a DNS resolver may not see it immediately if it has recently queried the domain for that same record. Resolvers store DNS information in a cache to reduce network traffic and speed up lookups.

This caching behavior also applies to records that do not exist. If a DNS resolver queries for a name that is not yet in the system, it will cache that negative response. It may take up to an hour for this negative result to be cleared from a resolver's cache, causing a delay before your new record becomes publicly visible.

To learn more about how caching works and how to control it, read our [What Is Time-to-Live?](/articles/what-is-ttl/) article. For information about DNSimple's TTL settings, see [What is the Minimum Time-To-Live Provided by DNSimple?](/articles/what-minimum-time-to-live/).

If you are experiencing issues with records not resolving, see [Check DNS Cache](/articles/check-dns-cache/) for steps to clear your cache, or refer to [Troubleshoot Record Resolution Issues](/articles/record-resolution-issues/) and [Troubleshoot Domain Resolution Issues](/articles/domain-resolution-issues/) for guidance.

## Have more questions?
If you have additional questions about caching, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.
