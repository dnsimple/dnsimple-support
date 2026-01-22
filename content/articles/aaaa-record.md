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

## Understanding IPv6 connectivity: the AAAA record

An AAAA record (record type 28) is a type of DNS record that serves the same fundamental purpose as an [A record](/articles/a-record/) but for **IPv6 addresses**. It maps a human-readable domain name (e.g., `api.example.com`) to the numerical **IPv6 address** of the server or computer hosting that domain on the internet.

Conceptually, the AAAA record is the direct IPv6 counterpart to the IPv4 A record. Just as an A record allows your browser to find a server's IPv4 address, an AAAA record enables it to locate a server via its IPv6 address.

## The rise of IPv6 and AAAA records
While A records (IPv4) have historically been more common, the adoption of IPv6 (Internet Protocol Version 6) is steadily increasing worldwide due to the exhaustion of available IPv4 addresses. IPv6 offers a vastly larger address space and introduces various architectural improvements to the internet.

As more networks, services, and end-user devices connect using IPv6, the importance of AAAA records grows. For instance, all DNSimple name servers are assigned IPv6 addresses, meaning they can be queried and respond via either IPv4 or IPv6, demonstrating this dual-stack capability.

## How AAAA records facilitate connection
When a device (like your computer or phone) attempts to connect to a domain, its DNS resolver will typically try to find an AAAA record first if the device and network support IPv6. If an AAAA record is found, the connection can proceed over IPv6. If not, it will usually fall back to looking for an A record and connecting over IPv4. This seamless process ensures users can reach your services regardless of the IP version they are using.

## Key capabilities for robust IPv6 hosting
Like A records, AAAA records offer important capabilities for building resilient and efficient services:

**Core IPv6 service hosting:** Essential for making your websites, email servers, and other online services accessible over the IPv6 internet.

**Redundancy and load balancing:** You can configure multiple AAAA records for the same domain name, each pointing to a different server's IPv6 address. This enables:
- **Failover:** If one IPv6 server becomes unavailable, traffic can be redirected to another available server.
- **Traffic distribution:** Requests can be spread across multiple IPv6 servers to handle high volumes of traffic more efficiently.

**Multiple names to one address:** Just as with A records, several different domain names can point to the same single IPv6 address, with each domain having its own AAAA record directing to that shared IP.

The formal specification for the DNS AAAA record is defined in [RFC 3596, Section 2.1](https://datatracker.ietf.org/doc/html/rfc3596#section-2.1).

## Managing AAAA records in DNSimple
DNSimple provides a user-friendly interface for managing your AAAA records. You can easily add new AAAA records, remove existing ones, or update their target IPv6 addresses directly from the [record editor](/articles/record-editor/).

For step-by-step instructions on how to perform these actions, please refer to our dedicated How-To Guide: [Managing AAAA Records](/articles/manage-aaaa-record/).

## Have more questions?
If you have additional questions or need any assistance with AAAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
