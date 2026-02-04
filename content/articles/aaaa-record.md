---
title: What Is an AAAA Record?
excerpt: An AAAA record maps a domain name to the IP address (IPv6) of the computer hosting the domain.
meta: Learn about AAAA records, the IPv6 counterpart to A records. Understand how AAAA records map domain names to IPv6 addresses for modern internet connectivity.
categories:
  - DNS
---

# AAAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/4SGgO5MSQLg?si=I5Hu7dj7-uuwA-xs" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is an AAAA record?

An AAAA record (record type 28) serves the same purpose as an [A record](/articles/a-record/), but for **IPv6 addresses** instead of IPv4. It maps a domain name like `api.example.com` to the numerical **IPv6 address** of the server hosting that domain.

The relationship between A and AAAA records is straightforward: A records point to IPv4 addresses, while AAAA records point to IPv6 addresses. Both accomplish the same goal of connecting domain names to IP addresses, just using different IP address formats.

## IPv6 adoption and AAAA records

IPv4 address exhaustion has been a reality for years, driving increased adoption of IPv6 (Internet Protocol Version 6) across the internet. IPv6 provides a significantly larger address space and introduces architectural improvements over IPv4.

As networks, services, and devices increasingly support IPv6, AAAA records have become more important. All DNSimple name servers are assigned IPv6 addresses, enabling them to respond to queries over both IPv4 and IPv6. This dual-stack capability ensures compatibility regardless of which protocol a client uses.

## How AAAA records work

When a device attempts to connect to a domain, its DNS resolver checks for an AAAA record first if the device and network support IPv6. When an AAAA record exists, the connection proceeds over IPv6. If no AAAA record is found, the resolver falls back to querying for an A record and connecting over IPv4.

This automatic fallback ensures users can reach your services whether they're using IPv4 or IPv6. You can configure both record types simultaneously to support clients on either protocol.

## Common uses for AAAA records

AAAA records provide the same flexibility as A records, adapted for IPv6:

**Core IPv6 service hosting:** AAAA records enable websites, email servers, and other online services to be accessible over the IPv6 internet.

**Redundancy and load balancing:** Multiple AAAA records can be configured for the same domain name, with each record pointing to a different server's IPv6 address. This configuration supports:
- **Failover:** If one IPv6 server becomes unavailable, traffic automatically redirects to another available server.
- **Traffic distribution:** Requests can be distributed across multiple IPv6 servers to handle high traffic volumes more efficiently.

**Multiple names to one address:** Several different domain names can point to the same IPv6 address. Each domain maintains its own AAAA record directing to that shared IP address.

The formal specification for the DNS AAAA record is defined in [RFC 3596, Section 2.1](https://datatracker.ietf.org/doc/html/rfc3596#section-2.1).

## Managing AAAA records in DNSimple

DNSimple's [record editor](/articles/record-editor/) provides an interface for managing AAAA records. You can add new AAAA records, remove existing ones, or update their target IPv6 addresses directly from the editor.

For step-by-step instructions on performing these actions, see our guide: [Managing AAAA Records](/articles/manage-aaaa-record/).

## Have more questions?
If you have additional questions or need any assistance with AAAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
