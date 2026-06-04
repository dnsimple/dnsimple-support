---
title: What Is an A Record?
excerpt: An A record maps a domain name to the IP address (IPv4) of the computer hosting the domain.
meta: An A record is DNS record type 1. It maps a domain name like www.example.com to the IPv4 address of the server that hosts it.
categories:
- DNS
---

# A Records

### Table of Contents {#toc}

* TOC
{:toc}

---

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/nJ53QG-gq8o" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is an A record? {#what-is-an-a-record}

An **A record** (record type 1) maps a domain name to an **IPv4 address**. The "A" stands for **Address**. When someone visits `www.example.com`, the A record tells their device which server IP (like `192.0.2.1`) to connect to.

A records are the most common DNS record type. Every time you open a website, send email, or connect to an online service, DNS uses A records (or their IPv6 counterpart, [AAAA records](/articles/aaaa-record/)) to turn domain names into addresses.

## How A records work {#how-a-records-work}

Here is what happens when you type a domain name like `www.dnsimple.com` into your browser:

1. Your computer's DNS resolver asks for the IP address associated with `www.dnsimple.com`.
1. The query reaches DNSimple's authoritative name servers.
1. The name server finds an A record for `www.dnsimple.com` pointing to an IPv4 address (for example, `208.93.64.253`).
1. The name server sends that IP address back to your resolver.
1. Your browser connects to the server at that address.

This is why you can type a domain name instead of memorizing a string of numbers.

## Common uses for A records {#common-uses-for-a-records}

A records connect domain names to services on the internet:

**Website and service hosting:** Point a domain at the server running your website, mail server, or other online service.

**Redundancy and load balancing:** You can add multiple A records for the same domain, each pointing to a different server IP. That gives you two options:

- **Failover:** If one server goes down, traffic can route to another server listed in the A records.
- **Load balancing:** Spread requests across multiple servers to handle more traffic.

**Multiple domains, one address:** Different domain names can point to the same IP address. Each domain gets its own A record, but they all resolve to that shared server. This is common when you host several sites on one machine.

The technical details are in [RFC 1035, Section 3.4.1](https://datatracker.ietf.org/doc/html/rfc1035#section-3.4.1) if you want to dig into the specification.

## Managing A records in DNSimple {#managing-a-records-in-dnsimple}

You can manage A records in DNSimple's [record editor](/articles/record-editor/). Add new records, remove old ones, or update IP addresses as needed.

For detailed steps, check out our guide: [Manage A Records](/articles/manage-a-record/).

## Have more questions?
If you have additional questions or need any assistance with your A records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
