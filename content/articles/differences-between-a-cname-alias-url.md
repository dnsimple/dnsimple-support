---
title: Differences Among A, CNAME, ALIAS, and URL Records
excerpt: Understanding the differences among the A, CNAME, ALIAS, and URL records.
categories:
- DNS
---

# Differences Among A, CNAME, ALIAS, and URL Records

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/mn07RUxAJRA" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

When configuring your domain's DNS, you often need to point a hostname (like `www.example.com` or `example.com`) to a specific online destination. While A, CNAME, ALIAS, and URL records all serve this purpose, they achieve it in fundamentally different ways, each with its own capabilities and limitations. Understanding these distinctions is crucial for selecting the right record type for your specific needs, whether it's direct server mapping, alias creation, or web redirection.

## Core distinctions: standard DNS vs. DNSimple innovations

The first major difference lies in their origin and behavior:

### Standard DNS records
- **A records** and **CNAME records** are fundamental, universally recognized DNS record types defined by Internet RFCs. They operate purely at the DNS (Domain Name System) layer, resolving names to IP addresses or to other names.

### DNSimple proprietary records
- **ALIAS records** and **URL records** are special record types developed by DNSimple. They are translated internally by DNSimple's systems into standard DNS records (like A or AAAA records) to ensure compatibility with the DNS protocol, but they offer unique functionality not available with standard records.

## Understanding the differences in action

Let's break down how each record type functions and the primary problem it solves:

### A record (address record)
- **What it does:** Directly maps a hostname (e.g., `example.com`) to one or more IPv4 addresses (e.g., `192.0.2.1`).
- **When to use:** When you know and directly control the stable IPv4 address of the server hosting your site or service.
- **Learn more:** [What Is an A Record?](/articles/a-record/)
  
### CNAME record (canonical name record)
- **What it does:** Maps one hostname (the alias, e.g., blog.example.com) to another hostname (the canonical name, e.g., `www.example.com`). It acts as an alias, directing traffic to where the canonical name points.
- **Important rule:** A CNAME record **cannot coexist with any other record type** (like MX, TXT, NS, or A records) for the exact same hostname. This is a fundamental limitation of standard DNS.
- **When to use:** When you want a hostname to point to another hostname and you don't need any other records (like MX for email) on that specific hostname. Typically used for subdomains.
- **Learn more:** [What Is a CNAME Record?](/articles/cname-record/)

### ALIAS record (DNSimple proprietary)
- **What it does:** Maps a hostname (including the root domain, e.g., `example.com`) to another hostname, providing CNAME-like behavior but with crucial differences.
- **Key advantage:** Unlike a CNAME, an ALIAS record **can coexist with other records** (like MX records) for the same hostname. It dynamically resolves the target hostname to an IP address at the time of the DNS query, appearing as an A record to the resolver.
- **When to use:**
    - When you need to alias your root domain (apex zone, e.g., `example.com`) to a hostname (e.g., a CDN or cloud service that provides a hostname, not a static IP).
    - When you need to alias a hostname to another hostname, but that hostname also needs other DNS records (like MX records for email).
- **Learn more:** [What Is an ALIAS Record?](/articles/alias-record/)

### URL record (DNSimple proprietary):
- **What it does:** Initiates an HTTP redirect from a source hostname (e.g., `old-site.com`) to a target URL (e.g., `https://new-site.com/home`). This redirection occurs at the HTTP layer via DNSimple's redirector service, not directly through DNS resolution to your final web server.
- **Important rule:** Unlike A, CNAME, or ALIAS records that cause a name to resolve to an IP, the URL record causes the name to redirect to a destination. The web browser receives an HTTP redirect instruction and then goes to the new URL.
- **When to use:** When you want a domain or subdomain to automatically send visitors to a completely different web address, changing the URL in their browser's address bar.
- **Learn more:** [What Is a URL Record?](/articles/url-record/)

## Choosing the right record type

The choice among these record types depends entirely on your specific requirements:

**Use an A record:**
- When you know the fixed, stable **IPv4 address** of your server.
- This is the most direct way to point a hostname to a server's location.

**Use a CNAME record:**
- When you want to alias a **subdomain** (e.g., `blog.example.com`) to another hostname (e.g., `example.wordpress.com`).
- Crucially, choose CNAME **only if** that subdomain will not have any other records (like MX records for email) associated with it.

**Use an ALIAS record:**
- When you need to alias your **root domain** (e.g., `example.com`) to a hostname provided by a service (e.g., a CDN or cloud host that gives you `cdn.mycloud.com`, not an IP).
- When you need to alias any hostname to another hostname, but that hostname **must also have other DNS records** (e.g., you need `support.example.com` to point to `tickets.zendesk.com` AND receive email via an MX record).

**Use a URL record:**
- When you want to perform a **web redirect** (HTTP redirect), causing a visitor's browser to automatically change addresses from one URL to another.
- This is ideal for simple domain forwarding or redirecting www to your naked domain without requiring a full web server setup.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
