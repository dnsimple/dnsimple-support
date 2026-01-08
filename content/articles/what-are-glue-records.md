---
title: What Are Glue Records?
excerpt: Learn what glue records are and why they matter.
meta: Discover the importance of glue records and how they solve a fundamental problem in DNS.
categories:
  - DNS
  - Name Servers
---

# What Are Glue Records?

### Table of Contents

* TOC
{:toc}

---

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/m_RaPIRNxFs?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

> [!NOTE]
> The above video also demonstrates adding missing glue records directly from the Edit delegation page. However, this is no longer supported. Glue records can only be added via applying [name server sets](/articles/name-server-sets/#creating-an-account-name-server-set) that contain the necessary glue records.

Glue records are a special type of DNS record that play an important role in the delegation of domain names, particularly when a domain's authoritative name servers are part of that same domain. They are essentially IP addresses (A or AAAA records) for name servers that solve a fundamental "chicken and egg" problem in the Domain Name System.

## The "chicken and egg" problem

Let's say you register `example.com` and want to use `ns1.example.com` and `ns2.example.com` as its authoritative name servers (these are often called vanity name servers). When someone tries to find `example.com`, their DNS resolver needs to know the IP address of `ns1.example.com`. But how can it find the IP address of `ns1.example.com` if `ns1.example.com` is supposed to tell it where `example.com` is? It creates a circular dependency.

Glue records break this loop.

## How glue records work: the role of the parent zone

Glue records are not published within your domain's DNS zone. They are published by the parent zone (typically the Top-Level Domain, or TLD registry like .COM, .ORG, etc.) and/or your domain registrar.

When you register a domain and specify name servers that are subdomains of your domain (e.g., `ns1.yourdomain.com`), you also provide the IP addresses for those name servers to your registrar. Your registrar communicates these IP addresses to the TLD registry. The TLD registry publishes these IP addresses as glue records alongside the NS records that delegate your domain.

**The process:**

1. A DNS resolver wants to find `www.yourdomain.com`.
1. It queries a root name server, which points it to the .COM TLD name servers.
1. The .COM TLD name servers look for NS records for `yourdomain.com`. They find NS records pointing to `ns1.yourdomain.com` and `ns2.yourdomain.com`.
1. Crucially, alongside these NS records, the .COM TLD name servers also provide the glue records (the A/AAAA records) for `ns1.yourdomain.com` and `ns2.yourdomain.com` directly.
1. With these IP addresses, the resolver can now directly contact `ns1.yourdomain.com` or `ns2.yourdomain.com` to get the A record for `www.yourdomain.com`.

This extra "glue" information ensures the resolution chain can be completed.

### Common use case: vanity name servers

The most common reason for needing to understand and configure glue records is when you set up vanity name servers (also known as private name servers or custom name servers). Instead of using generic name servers provided by your DNS host (like `ns1.dnsimple.com`), you opt to brand them with your own domain (e.g., `ns1.mycompany.com`).

When setting up vanity name servers, you must define the glue records (the IP addresses of `ns1.mycompany.com`, `ns2.mycompany.com`, etc.) at your domain registrar, typically in a dedicated section for "Host Records" or "Private Name Servers."

### Relationship to other DNS records

**NS Records**: Glue records are inseparable from NS records when the name servers are within the delegated zone. The NS record delegates authority, and the glue record provides the necessary IP address to resolve that delegation.

**A/AAAA Records**: A glue record is essentially an A record (for IPv4) or an AAAA record (for IPv6) that is published at a higher level in the DNS hierarchy (the parent zone/TLD) to resolve a circular dependency.

#### DNSimple's role in glue records

If DNSimple is your domain registrar, you will typically manage your glue records within your DNSimple account interface when setting up vanity name servers. If your domain is registered elsewhere, you will manage them through your third-party registrar's control panel.

## Managing glue records

For step-by-step instructions on how to set up vanity name servers for your domain, please refer to [Managing Vanity Name Servers](/articles/vanity-nameservers/).

## Have more questions?

If you have additional questions or need any assistance with your glue records or vanity name servers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
