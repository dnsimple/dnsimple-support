---
title: Differences Between A and CNAME Records
excerpt: A and CNAME records are the two common ways to map a host name to an address. This article explains the differences between these two records.
categories:
- DNS
---

# Differences Between A and CNAME Records

The A record and the CNAME record are two of the most fundamental, commonly used ways to map a hostname (like `www.example.com` or `blog.example.com`) in the Domain Name System (DNS). While both ultimately lead a client to an IP address, they achieve this through distinct mechanisms with important implications for how you manage your domain. 
Understanding these differences is necessary for correctly configuring your DNS and avoiding common pitfalls.

## Understanding the core distinctions

The primary difference between an A record and a CNAME record lies in what they point to:

**A record (address record):**
- **Direct IP mapping:** An A record maps a hostname directly to one or more IPv4 addresses. This is the most straightforward way to tell a DNS resolver the exact numerical location of a server.
- **Example:** If you want blog.dnsimple.com to point directly to the server 185.31.17.133, you would configure:
```
    blog.dnsimple.com.     A        185.31.17.133
```
- Use case: Ideal when you have a stable, known IP address for your server and want direct control over that mapping.
- Learn more: What’s an A Record?

**CNAME record (canonical name record):**
- **Maps to another name:** A CNAME record maps one hostname (e.g., www.example.com) to another hostname (the "canonical name," e.g., example.com or service.provider.com). It functions as a pointer, instructing DNS resolvers to look up the IP address of the target hostname.
- **Inherits resolution:** When a DNS query encounters a CNAME record, it effectively follows the pointer. The DNS resolver then attempts to resolve the canonical name, inheriting its entire resolution chain until an IP address (usually via an A or AAAA record) is found.
- **Exclusivity restriction:** A CNAME record cannot coexist with any other record type (such as MX records for email, TXT records, or NS records) for the exact same hostname. If a name has a CNAME record, it can have no other records associated with it. This is a fundamental limitation of standard DNS.
- **Use case:** A CNAME record is best when you want one hostname to mirror another, or when the IP address of your service is managed by a third party and might change, but their hostname (e.g., your-app.heroku.com) remains stable.
- **Learn more:** What’s a CNAME Record?

## Practical example: CNAME chaining for flexibility

Let's illustrate the power of CNAMEs with a real-world example from our own setup for blog.dnsimple.com:

```
    blog.dnsimple.com.      CNAME   aetrion.github.io.
    aetrion.github.io.      CNAME   github.map.fastly.net.
    github.map.fastly.net.  A       185.31.17.133
```

In this scenario, our blog is hosted on GitHub Pages, which uses Fastly for content delivery. 

When someone visits `blog.dnsimple.com`:
1. The DNS resolver looks up `blog.dnsimple.com` and finds another CNAME pointing to `aetrion.github.io`.
1. It then queries `aetrion.github.io`, and finds another CNAME pointing to `github.map.fastly.net`.
1. Finally, it resolves `github.map.fastly.net` to its A record, `185.31.17.133`. The browser then connects to `185.31.17.133`.

The benefit of this CNAME chain is that if GitHub Pages or Fastly changes their underlying IP address, we only need them to update the A record for `github.map.fastly.net`. Our `blog.dnsimple.com` CNAME automatically inherits the change without us needing to manually update our DNS records.

<info>
While CNAME chaining is possible, each additional step adds another DNS lookup. Too many chained CNAMEs can slow down resolution, so it’s best to keep chains short.
</info>

## Which one to use?
Choosing between an A record and a CNAME record depends directly on your specific needs and the capabilities of your hosting environment:

**Choose an A record if:**
- You know and control the stable IPv4 address of your server.
- You want to point your root domain (e.g., `example.com`) directly to an IP address (as CNAMEs cannot be used at the root if other records like MX are present).
- You want fine-grained control over the exact IP resolution.

**Choose a CNAME record if:**
- You want to alias one subdomain (e.g., `www.example.com`, `app.example.com`) to another hostname, especially if that hostname's IP address might change (e.g., cloud services, CDNs).
- You understand and accept the restriction that no other DNS records can exist for that specific hostname (e.g., if `www.example.com` is a CNAME, you cannot have an MX record for `www.example.com`).

<warning>
Never use a CNAME record for your root domain name (e.g., `example.com`) if you need other essential records like MX (for email), NS (for delegation), or SOA records. The CNAME restriction makes it incompatible with the requirements of an apex domain. For such scenarios, DNSimple offers the ALIAS record as a solution. 
</warning>

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
