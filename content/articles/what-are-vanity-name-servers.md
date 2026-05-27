---
title: What Are Vanity Name Servers?
excerpt: Vanity name servers use hostnames under your own domain as authoritative servers instead of your DNS provider's default names, and why that depends on glue records.
meta: Vanity name servers are branded authoritative hostnames like ns1.example.com. They require glue records when the hostname falls inside the delegated zone.
categories:
- Name Servers
- Domains and Transfers
---

# What Are Vanity Name Servers?

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/8p7GFBvTnxM" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Vanity name servers (also called private name servers or custom name servers) are authoritative name server hostnames that use your own domain instead of your DNS provider's defaults. For example, you might publish `ns1.example.com` and `ns2.example.com` at the registry instead of hostnames such as `ns1.dnsimple.com`. Public lookups still show which servers are authoritative; only the hostnames change.

For background on what authoritative name servers do in general, see [What is a name server?](/articles/what-is-a-nameserver/).

### Table of Contents {#toc}

* TOC
{:toc}

---

## Why organizations use vanity name servers {#why-use-vanity-name-servers}

Common reasons include:

- Consistent naming so delegation lists match your brand domain.
- Less visible coupling to a specific DNS provider in NS listings (DNSimple still hosts the zone; only the published hostnames change).
- Hostnames under a zone you control, which can simplify coordination if you later change underlying addresses while keeping the same delegation names.

These are presentation and operational preferences, not a change to how DNS resolution works.

## How vanity name servers interact with glue {#glue-and-vanity}

When the delegated name servers are names inside the same zone being delegated (for example delegating `example.com` to `ns1.example.com`), resolvers face a circular dependency: they need an IP for `ns1.example.com` before they can query it for `example.com`. The parent zone fixes that by publishing [glue records](/articles/what-are-glue-records/) (addresses for those server names) next to the NS delegation.

If your authoritative servers use provider-supplied names outside your zone (for example `ns1.dnsimple.com`), your zone does not need glue for delegation at the parent in the same way. For the step-by-step resolution story, read [What Are Glue Records?](/articles/what-are-glue-records/).

## Vanity name servers at DNSimple {#vanity-at-dnsimple}

> [!NOTE]
> Vanity name servers are available on the [Enterprise Plan](https://dnsimple.com/enterprises).

Conceptually, using vanity name servers with DNSimple has two parts: making branded hostnames resolve to DNSimple's addresses (including glue registration where required), then setting delegation at each registrar to those hostnames. Which registrar holds the domain determines whether glue is submitted through DNSimple or through another provider.

Product-specific steps, screens, and ordering live in [Manage Vanity Name Servers](/articles/vanity-nameservers/). IP addresses for DNSimple infrastructure appear in [DNSimple Name Servers](/articles/dnsimple-nameservers/).

## Have more questions?

If you have additional questions about vanity name servers, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
