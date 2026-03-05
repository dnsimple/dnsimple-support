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

An AAAA record (record type 28) does the same job as an [A record](/articles/a-record/), except it points to **IPv6 addresses** instead of IPv4. It connects a domain name like `api.example.com` to the **IPv6 address** of the server that hosts it.

If you know how A records work, AAAA records are pretty similar. A records point to IPv4 addresses. AAAA records point to IPv6 addresses. Same concept, different address format.

## IPv6 adoption and AAAA records

We've been running out of IPv4 addresses for a while now. That's why more of the internet is moving to IPv6 (Internet Protocol Version 6). IPv6 gives us way more addresses to work with, plus some improvements to how the internet works.

As more networks and devices support IPv6, AAAA records are getting more common. All of DNSimple's name servers have IPv6 addresses, so they can handle queries over IPv4 or IPv6. This dual-stack setup means they work with either protocol.

## How AAAA records work

Here's what happens when your device tries to reach a domain. If your device and network support IPv6, the DNS resolver will look for an AAAA record first. If it finds one, the connection uses IPv6. If not, it falls back to checking for an A record and uses IPv4 instead.

You don't have to pick one or the other. You can set up both A and AAAA records on the same domain. That way, clients can connect using whichever protocol they support.

## Common uses for AAAA records

AAAA records work just like A records, but for IPv6:

**Hosting services over IPv6:** Use AAAA records to make your website, email server, or other services reachable over IPv6.

**Redundancy and load balancing:** You can create multiple AAAA records for the same domain, each pointing to a different server's IPv6 address. This lets you do a couple of things:
- **Failover:** If one server goes down, traffic moves to another one automatically.
- **Load balancing:** Spread requests across multiple servers to handle more traffic.

**Multiple domains, one address:** Different domain names can all point to the same IPv6 address. Each domain gets its own AAAA record, but they all resolve to that shared IP.

The technical details are in [RFC 3596, Section 2.1](https://datatracker.ietf.org/doc/html/rfc3596#section-2.1) if you want to dig into the specification.

## Managing AAAA records in DNSimple

You can manage AAAA records using DNSimple's [record editor](/articles/record-editor/). Add new ones, remove old ones, or update IPv6 addresses as needed.

For detailed steps, check out our guide: [Managing AAAA Records](/articles/manage-aaaa-record/).

## Have more questions?
If you have additional questions or need any assistance with AAAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
