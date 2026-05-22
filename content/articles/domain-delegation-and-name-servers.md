---
title: Domain Delegation and Name Servers Explained
excerpt: How delegation, name servers, and DNS hosting fit together, why customers use different words for the same workflow, and which DNSimple guide matches your situation.
meta: How domain delegation and authoritative name servers work together. Guides you to the right DNSimple article for your registration and DNS hosting setup.
categories:
  - Name Servers
---

# Domain Delegation and Name Servers Explained

**Delegation** tells the global DNS system which name servers are authoritative for your domain. Customers describe this workflow as "pointing," "delegating," "setting name servers," or "changing name servers." The correct steps depend on where the domain is registered and where DNS is hosted. Use the table at the end of this page to find the right guide.

### Table of Contents {#toc}

* TOC
{:toc}

---

## What domain delegation means {#what-domain-delegation-means}

**Delegation** is how the global DNS system learns which servers are **authoritative** for your domain. That authority is published as **NS** records from your domain's parent (usually via your **registrar** sending information to the registry). Delegation answers the question: which name servers should resolvers query for records in this zone?

For a fuller description of the delegation chain, see [What Is Domain Delegation?](/articles/what-is-domain-delegation/).

## How delegation and name servers are related {#delegation-and-name-servers}

In everyday language, people say **name servers** when they talk about delegation because delegation lists **hostnames** (for example `ns1.dnsimple-edge.com`) that must answer DNS for your domain. Changing delegation usually means **changing which name server hostnames are listed at the registrar** for your domain.

Authoritative name servers host your zone file (your A, MX, CNAME, and other records). For vocabulary and resolver basics, see [What is a name server?](/articles/what-is-a-nameserver/).

## Common terms customers use {#common-terms}

Customers often use different phrases for the same general workflow of **pointing DNS traffic at a provider**:

- "Pointing the domain"
- "Delegating"
- "Setting name servers"
- "Changing name servers"

Those phrases usually mean updating **delegation** so the internet uses a new set of authoritative servers. They do **not** automatically mean editing records inside your DNS zone. Record edits and registrar delegation are related but different actions.

## Why the steps depend on where the domain is registered {#steps-and-registration}

The registrar is where **registration** is managed and where **delegation for the apex domain** is updated for most TLD workflows. So:

- If DNSimple is **not** your registrar, you change delegation at the registrar that holds the domain (DNSimple cannot change another registrar's delegation for you).
- If DNSimple **is** your registrar, you change delegation inside DNSimple when that domain's registration lives with us.

That split is why DNSimple splits How-to articles between domains registered here and domains registered elsewhere.

## Delegation changes are made at the registrar {#delegation-at-registrar}

**Delegation for your apex domain** is configured through the registration path for your domain (the registrar and registry system). That is separate from adding NS records **inside** your own zone for a **child** subdomain, which is zone configuration on an authoritative server you already control. For child zones, see [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/).

## Domain registration and DNS hosting {#registration-and-dns-hosting}

**Domain registration** means your registrar relationship for the domain name (renewals, contacts, transfer locks).

**DNS hosting** means which provider operates authoritative DNS for your zone and serves your records.

They are related but not the same: you can register a domain with DNSimple and host DNS elsewhere, or register elsewhere and host DNS with DNSimple. Delegation is what connects registration data at the registry to the DNS hosting you choose.

## Why DNSimple DNS records may not appear on the public internet {#why-records-may-not-be-used}

DNSimple stores your zone configuration when you host DNS with DNSimple. **Public resolvers only use that zone when delegation lists DNSimple's authoritative name servers.** Secondary DNS or other advanced configurations can also route queries to your DNSimple zone, but those require intentional setup.

If delegation still points to another provider, that provider's zone is what the public internet uses. Edits in DNSimple will not change public resolution until delegation points to DNSimple (or the relevant architecture you intend).

## What must be true for DNSimple to answer public DNS {#requirements}

All of the following must line up for DNSimple-hosted DNS to be what the world queries:

1. **DNSimple subscription is active** for the account that owns the DNS hosting work you are doing.
2. **The zone exists and is managed in DNSimple** for that domain (your records live in that zone).
3. **Delegation lists DNSimple name servers** for that domain. For standard hosting, use the hostnames in [DNSimple Name Servers](/articles/dnsimple-nameservers/). If your setup uses vanity name servers or another advanced configuration, the hostnames will differ.

If something still fails after delegation looks correct, propagation and caching can delay visible changes. See [What is TTL?](/articles/what-is-ttl/) and [Troubleshoot Domain Resolution Issues](/articles/domain-resolution-issues/).

## Choose the right guide {#choose-the-right-guide}

| Situation | Start here |
|-----------|------------|
| Domain is registered **elsewhere** and you want DNS hosted **by DNSimple** | [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) |
| Domain is registered **with DNSimple** and you want DNS hosted **by DNSimple** | [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/) |
| Domain is registered **with DNSimple** and you want DNS hosted **by another provider** | [Setting the Name Servers for a Domain](/articles/setting-name-servers/) |
| You need to delegate **only a subdomain** (child zone) | [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/) |
| Name servers use names **under your own domain** (for example `ns1.example.com` for `example.com`) and you need glue context | [What Are Glue Records?](/articles/what-are-glue-records/) |

> [!TIP]
> If you are unsure where the domain is registered, check the registrar in a [WHOIS](https://dnsimple.com/whois) lookup for the domain, or inspect delegation with a tool such as [zone.vision](https://zone.vision/#/). Then return to this table.

## Have more questions?

If you need help choosing the right path or interpreting delegation output, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
