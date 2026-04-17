---
title: DNS Redundancy Options at DNSimple
excerpt: How to add DNS redundancy to your domains using secondary DNS or multi-provider setups.
meta: Learn when and how to add DNS redundancy at DNSimple. Compare secondary DNS via zone transfer (AXFR) with multi-provider DNS sync to protect your domains from outages.
categories:
- Secondary DNS
---

# DNS Redundancy Options at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

DNS redundancy means having more than one DNS provider answering queries for your domains. If one provider experiences an outage, the other continues serving DNS responses, keeping your domains online.

## How DNSimple provides resilience by default {#default-resilience}

Every zone hosted on DNSimple is served by multiple name servers distributed across independent networks using [Anycast DNS](/articles/why-anycast-dns/). This means queries are automatically routed to the nearest healthy server, and single-server failures do not cause resolution failures.

For many domains, this built-in redundancy is sufficient. Adding a secondary DNS provider is an additional layer of protection for domains where any downtime is unacceptable.

## When to add a secondary DNS provider {#when}

Consider adding a secondary DNS provider if:

- Your domain serves production traffic that cannot tolerate any DNS downtime.
- You have contractual or compliance requirements for multi-provider DNS.
- You want resilience against a complete provider-level outage, not just individual server failures.

## Option 1: Secondary DNS with zone transfers (AXFR) {#axfr}

This is the standard approach. DNSimple acts as the primary DNS server and automatically transfers zone data to a secondary provider via [AXFR](https://en.wikipedia.org/wiki/DNS_zone_transfer). The secondary provider answers queries using its own name servers.

**How it works:**

1. You configure a secondary DNS provider (such as Dyn, DNSMadeEasy, or EasyDNS) or any provider that supports AXFR.
2. You [enable secondary DNS](/articles/secondary-dns/) in your DNSimple account for the domain.
3. DNSimple sends zone transfers to the secondary provider whenever records change.
4. You update your domain's delegation at the registrar to include the secondary provider's name servers alongside DNSimple's.

**Considerations:**

- [ALIAS records](/articles/alias-and-secondary-dns/) are resolved into A/AAAA records before being transferred, since ALIAS is not a standard record type.
- [DNSSEC and secondary DNS](/articles/dnssec-and-secondary-dns/) require careful coordination. Read the compatibility article before enabling both.

For setup instructions, see [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).

## Option 2: Multi-provider DNS without zone transfers {#multi-provider}

If your secondary provider does not support AXFR, or you prefer manual control, you can keep zones in sync across providers using the DNSimple API, zone imports, or infrastructure-as-code tools.

This approach requires more operational overhead since records must be updated in both providers when changes are made.

For details, see [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/).

## Provider-specific guides {#provider-guides}

DNSimple provides pre-configured setup guides for these secondary DNS providers:

- [Dyn](/articles/secondary-dns-provider-dyn/)
- [DNSMadeEasy](/articles/secondary-dns-provider-dns-made-easy/)
- [EasyDNS](/articles/secondary-dns-provider-easy-dns/)

You can also use any provider that supports AXFR by choosing the custom option in the [secondary DNS setup](/articles/secondary-dns/).

## DNSimple as the secondary provider {#dnsimple-as-secondary}

If you use another DNS provider as your primary, you can [configure DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) or set up a [hidden primary with DNSimple as secondary](/articles/secondary-dns-dnsimple-with-hidden-primary/).

## Have more questions?

If you have any questions about setting up DNS redundancy for your domains, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
