---
title: What Is a Name Server?
excerpt: Learn what name servers are, why they're important, and how they work in the DNS system.
meta: Discover the role of name servers in DNS resolution and how they translate domain names into IP addresses to enable internet connectivity.
categories:
- Name Servers
---

# What Is a Name Server?

### Table of Contents {#toc}

* TOC
{:toc}

---

Name servers (also called nameservers) are specialized servers that form the backbone of the Domain Name System (DNS). They act as authoritative directories that translate human-readable domain names (like `example.com`) into machine-readable IP addresses (like `192.0.2.1`), enabling computers to locate and connect to websites, email servers, and other internet services. When you need to change nameservers for your domain, you update the name server delegation at your domain registrar.

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/2WdF1zT01HY" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<info>
"Name server", "nameserver", and other variants all refer to the same thing. For consistency, we refer to it here as a "name server".
</info>

## The role of name servers in DNS

Name servers are essential components of the DNS infrastructure. When you type a domain name into your browser, your device queries name servers to find the corresponding IP address. This process, known as DNS resolution, involves multiple steps:

1. Your browser sends a DNS query to a recursive resolver (typically provided by your internet service provider).
2. The recursive resolver queries root name servers, which direct it to Top-Level Domain (TLD) name servers (like `.com` or `.org`).
3. The TLD name servers provide the authoritative name servers for your domain.
4. The recursive resolver queries these authoritative name servers to obtain the specific DNS records (like A records) for the domain.
5. The IP address is returned to your browser, which then connects to the web server.

To learn more about how DNS works, check out our [How DNS Works web comics](https://howdns.works/) or [What Is DNS?](/articles/what-is-dns/) support article.

## Authoritative vs. recursive name servers

There are two main types of name servers:

- **Authoritative name servers**: These servers hold the "official" DNS records for a domain. They are the final source of truth for a domain's DNS information. When you delegate your domain to DNSimple, DNSimple's name servers become authoritative for your domain.

- **Recursive name servers** (also called resolvers): These servers perform DNS lookups on behalf of clients. They query authoritative name servers and cache the results to improve performance. Your internet service provider typically provides recursive name servers.

## How name servers relate to domain delegation

When you register a domain, you specify which name servers are authoritative for that domain. This process is called **delegation**. The name servers you specify at your domain registrar determine where DNS queries for your domain will be directed.

For example, if you delegate your domain to DNSimple's name servers (`ns1.dnsimple.com`, `ns2.dnsimple-edge.net`, etc.), all DNS queries for your domain will be answered by DNSimple's authoritative name servers, using the DNS records you've configured in your DNSimple account.

## Managing your domain's name servers

To use DNSimple as your DNS hosting provider, you need to delegate your domain to DNSimple's name servers. The process depends on where your domain is registered:

- **If your domain is registered with DNSimple**: Follow our guide on [delegating a domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).

- **If your domain is registered elsewhere**: Follow our guide on [delegating a domain registered with another registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

### Changing name servers

To change your domain's name servers (also called nameservers), you need to update the name server delegation at your domain registrar. When you change nameservers, you're telling the DNS system which name servers are authoritative for your domain. 

If you need to change nameservers for your domain to point to a different DNS provider, or switch back to DNSimple's name servers, see [Setting the Name Servers for a Domain](/articles/setting-name-servers/). Changing nameservers is a common task when migrating DNS hosting or switching between DNS providers.

<note>
#### Verify your name server delegation

It's important to verify that your domain is properly delegated to the correct name servers. If your domain isn't delegated to DNSimple, [changes you make to DNS records](/articles/record-editor/) won't resolve.

To check which name servers your domain is using, you can use tools like [zone.vision](https://zone.vision/#/) to perform a DNS lookup.
</note>

## Have more questions?

If you have additional questions about name servers or need assistance with domain delegation, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
