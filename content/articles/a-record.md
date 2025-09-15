---
title: What Is an A Record?
excerpt: An A record maps a domain name to the IP address (IPv4) of the computer hosting the domain.
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

## Understanding the foundation of DNS: the A record
An **A record** (record type 1) is the most fundamental and widely used type of DNS (Domain Name System) record. The "A" in A record stands for **Address**, specifically an **IPv4 address**. Its primary purpose is to map a human-readable domain name (e.g., `www.example.com`) to the numerical IPv4 address (e.g., `192.0.2.1`) of the server or computer hosting that domain on the Internet.

Essentially, whenever you interact with anything on the internet -— like visiting a website, sending an email, or connecting to an online service -— the domain name you use must first be translated into an IP address by an A record.

## How A records work: connecting names to locations
When you type a domain name, like `www.dnsimple.com`, into your web browser, a series of steps occurs:

1. Your computer's DNS resolver sends a query to find the IP address associated with `www.dnsimple.com`.
1. This query eventually reaches DNSimple's authoritative name servers.
1. At our name server, there's an A record for `www.dnsimple.com` that points to a specific IPv4 address (e.g., `208.93.64.253`).
1. The name server returns this IP address to your resolver.
1. Your browser then uses this IP address to connect directly to the server hosting the DNSimple website.

This entire process makes it possible for you to use memorable domain names instead of having to recall long strings of numbers.

## Key capabilities and common uses
While simple in concept, A records are versatile and essential:

**Core website and service hosting:** The backbone for connecting almost any domain name to a web server, mail server, or other internet-connected service.

**Multiple records for redundancy and load balancing:** You can configure multiple A records for the same domain name, each pointing to a different server IP address. When a resolver queries the domain, it might receive all listed IP addresses. This is commonly used to:
- **Provide redundancy/railover:** If one server becomes unavailable, traffic can automatically be directed to another server listed in the A records.
- **Distribute traffic (load balancing):** Traffic can be spread across multiple servers, helping to manage high volumes of requests efficiently.

**Multiple names to one address:** Conversely, many different domain names can point to the same single IP address. In this scenario, each domain would have its own A record, all pointing to that shared IP. This is common when hosting multiple websites on a single server.

The specification for the DNS A record is formally defined in [RFC 1035, Section 3.4.1](https://datatracker.ietf.org/doc/html/rfc1035#section-3.4.1). 

## Managing A Records in DNSimple
DNSimple provides a straightforward interface for managing your A records. You can easily add new A records, remove existing ones, or update their target IP addresses directly from your domain's record editor.

For step-by-step instructions on how to perform these actions, please refer to our dedicated How-To Guide: [Managing A Records](/articles/manage-a-record/).

## Have more questions?
If you have additional questions or need any assistance with our One-click Services, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
