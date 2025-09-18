---
title: What Is a URL Record?
excerpt: What a URL record is, and how to add a URL record in DNSimple.
meta: Learn what a URL record is and discover step-by-step instructions for adding one in DNSimple to effectively redirect your domain traffic.
categories:
- DNS
---

# What Is a URL Record?

### Table of Contents {#toc}

* TOC
{:toc}

---

A URL record is a special, proprietary DNSimple record type designed to provide a straightforward way to redirect a hostname to any other URL using our built-in [redirector service](/articles/redirector/). This record type simplifies the process of performing web (HTTP) redirects, which are typically managed at the web server level.

Traditional DNS records, like [A](/articles/a-record/) or [CNAME](/articles/cname-record/), only resolve domain names to IP addresses or other domain names; they do not inherently perform web redirects. The URL record bridges this gap, offering a simple DNS-based solution for directing web traffic from one address to another.

## How URL records facilitate web redirects
The magic of URL records happens through DNSimple's dedicated redirector service:

**DNS resolution:** When you [create a URL record](/articles/manage-url-record/), DNSimple automatically configures underlying A and [AAAA records](/articles/aaaa-record/) for the source hostname (e.g., `www.example.com`) to point to the IP addresses of our redirector service.
**HTTP redirection:** When an HTTP client (like a web browser) queries that hostname, it resolves to our redirector service's IP address. Our redirector service then receives the HTTP request and immediately serves an appropriate HTTP redirect response (e.g., a `301 Permanent Redirect`) to the client.
**Client redirects:** The client's browser automatically follows this redirect instruction to the target URL configured in the URL record.

From the user's perspective, accessing the source hostname seamlessly directs them to the new destination URL.

## Key use cases and benefits
URL records are useful for various web redirection scenarios:

**Redirecting www to naked domain:** Redirect `www.example.com` to `example.com` (or vice-versa).
**Redirecting secondary domains:** Point a domain you've purchased (e.g., `mynewproduct.net`) directly to your main website (`mycompany.com`) without needing to set up a separate web hosting service for the secondary domain.
**Temporary or permanent redirects:** Quickly set up redirects for marketing campaigns, defunct pages, or rebranding efforts.
**Centralized management:** Manage your web redirects alongside your other DNS records directly within your DNSimple account, simplifying your infrastructure.

For more detailed information about the DNSimple redirector service, including supported redirect types and any specific limitations, see our [Redirector Article](/articles/redirector/).

## Managing URL records
For step-by-step instructions on how to add, remove, and update URL records in your DNSimple account, refer to our dedicated How-To Guide: [Managing URL Records](/articles/manage-url-record/).

## URL record format and technical details
The URL record is a special DNSimple record type and is not defined by any RFC.

For a detailed breakdown of the elements configurable for a URL record in DNSimple, and further technical insights into how DNSimple exposes these records as underlying A and AAAA records, consult our Reference Guide: [URL Record Format and Technical Details](/articles/url-record-format-details/).

## Have more questions?
If you have additional questions or need any assistance with your URL records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
