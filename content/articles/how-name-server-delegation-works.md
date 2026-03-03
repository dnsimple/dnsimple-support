---
title: How Name Server Delegation Works
excerpt: Understand how name server delegation establishes authority in the DNS hierarchy.
meta: Learn how name server delegation works in DNS, establishing authority and directing DNS queries to the correct authoritative name servers.
categories:
- Name Servers
---

# How Name Server Delegation Works

### Table of Contents {#toc}

* TOC
{:toc}

---

Name server delegation is the fundamental mechanism that establishes which name servers are authoritative for a domain in the DNS hierarchy. It's the process by which parent zones (like Top-Level Domains) direct DNS queries to the correct authoritative name servers for child domains, creating the distributed structure that makes the internet's Domain Name System work.

## What is delegation?

Delegation is the act of assigning authority for a portion of the DNS namespace to a specific set of name servers. When you register a domain like `example.com`, the `.com` Top-Level Domain (TLD) registry delegates authority for `example.com` to the name servers you specify. This tells the DNS system that those name servers are the authoritative source for all DNS records under `example.com`.

## The DNS hierarchy and delegation

The DNS system is organized in a hierarchical structure, with delegation occurring at each level:

1. **Root zone**: The root zone (represented by `.`) delegates authority to TLD name servers (like `.com`, `.org`, `.net`).

2. **Top-Level Domains**: TLD name servers delegate authority to second-level domains (like `example.com`, `dnsimple.com`).

3. **Second-level domains**: Second-level domains can further delegate authority to subdomains (like `www.example.com` or `mail.example.com`), though this is less common.

This hierarchical delegation creates a chain of authority that allows DNS resolvers to navigate from the root of the DNS tree down to the specific domain they're looking for.

## How delegation works in practice

When a DNS resolver needs to find the IP address for `www.example.com`, the delegation process works as follows:

1. **Root query**: The resolver starts by querying a root name server, asking "Who is authoritative for `.com`?"

2. **TLD delegation**: The root name server responds with the `.com` TLD name servers and provides [NS records](/articles/ns-record/) that delegate `example.com` to specific authoritative name servers (for example, `ns1.dnsimple.com`, `ns2.dnsimple-edge.net`).

3. **Domain query**: The resolver then queries one of the authoritative name servers for `example.com` (e.g., `ns1.dnsimple.com`).

4. **Record retrieval**: The authoritative name server responds with the specific DNS record (like an A record) for `www.example.com`.

This delegation chain ensures that DNS queries are directed to the correct authoritative name servers, which hold the actual DNS records for the domain.

## NS records and delegation

[NS records](/articles/ns-record/) are the DNS record type that implements delegation. They specify which name servers are authoritative for a domain or subdomain. NS records are published at two levels:

1. **Parent zone**: The parent zone (like `.com`) publishes NS records that delegate `example.com` to specific name servers. These NS records are what tell the DNS system where to find authoritative information for `example.com`.

2. **Child zone**: The authoritative name servers for `example.com` also publish NS records within their own zone file, confirming which name servers are authoritative for the domain.

## Glue records and circular dependencies

When name servers are subdomains of the domain they serve (like `ns1.example.com` serving `example.com`), a circular dependency problem arises: How can a resolver find the IP address of `ns1.example.com` if it needs to query `ns1.example.com` to find information about `example.com`?

[Glue records](/articles/what-are-glue-records/) solve this problem by providing the IP addresses of name servers directly in the parent zone. When the parent zone provides NS records delegating to `ns1.example.com`, it also provides the A and AAAA records (glue records) for `ns1.example.com`, allowing the resolver to immediately know where to query next.

## Changing delegation

You can change which name servers are authoritative for your domain by updating the delegation at your domain registrar:

- **To delegate to DNSimple**: If your domain is registered with DNSimple, follow our guide on [delegating a domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/). If your domain is registered elsewhere, see [delegating a domain registered with another registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

- **To delegate to another provider**: If your domain is registered with DNSimple, you can [set the name servers to point to another provider](/articles/setting-name-servers/#pointing-the-name-servers-to-another-provider).

## Subdomain delegation

You can also delegate subdomains to different name servers by adding NS records for the subdomain. This is useful when you want a subdomain (like `subdomain.example.com`) to be managed by a different DNS provider or set of name servers. For instructions, see [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/).

## Have more questions?

If you have additional questions about name server delegation or need assistance with configuring delegation for your domains, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

