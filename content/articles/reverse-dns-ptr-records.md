---
title: What are Reverse DNS Lookups and PTR Records?
excerpt: Reverse DNS lookups query DNS to determine the hostname associated with a given IP address.
meta: Learn how reverse DNS lookups and PTR records enhance the security and user experience of SSH connections.
categories:
- DNS
---
# What are Reverse DNS Lookups and PTR Records?

### Table of Contents {#toc}
* TOC
{:toc}

---

A Reverse DNS (rDNS) lookup is the process of querying the [Domain Name System (DNS)](/articles/what-is-dns/) to determine the hostname associated with a given IP address. It's the opposite of a standard, or forward, DNS lookup, which translates a hostname (like `www.example.com`) into an IP address.

Reverse DNS lookups are made possible by a specific type of DNS resource record called a PTR (Pointer) record (Type 12). A PTR record is the key data entry that allows an IP address to be mapped back to its corresponding hostname.

## How reverse DNS lookups work (and what PTR records contain)
While most DNS records map names to IP addresses within a domain's traditional forward DNS zone (e.g., `example.com`), PTR records live in dedicated **reverse DNS zones**.

To facilitate this reverse mapping, IP addresses are transformed into special domain names within specific top-level domains:

- **IPv4 addresses**: The address is reversed octet by octet, and `.in-addr.arpa` is appended. For instance, the IP address `192.0.2.5` becomes the reverse domain name `5.2.0.192.in-addr.arpa`.
- [**IPv6 addresses**](/articles/ipv6-support/), each hexadecimal digit is reversed and separated by dots, with .ip6.arpa appended. This results in much longer, but similarly structured, names (e.g., `2001:db8::1` becomes `1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa.`).
When a system performs a reverse DNS lookup, it constructs this special reverse domain name from the IP address and then queries the DNS system. The authoritative server for that reverse domain name will then respond with the PTR record, which contains the hostname.

### Example of PTR records in a zone file
If a server at IP address `192.0.2.5` has the hostname mail.example.com, its PTR record might appear in a DNS zone file as:
```
5.2.0.192.in-addr.arpa. IN PTR mail.example.com.
```
Or, more commonly, within the specific reverse zone file for the `192.0.2.0/24` subnet:
```
5 IN PTR mail.example.com.
```
For an IPv6 address like `2001:db8::1` (which is shorthand for `2001:0db8:0000:0000:0000:0000:0000:0001`), its PTR record would resolve:
```
1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa. IN PTR ipv6host.example.com.
```

## Why are reverse DNS lookups important?
Reverse DNS and PTR records are critical for several fundamental internet operations, primarily concerning security, trust, and logging.

### Email anti-spam verification
One of the most vital uses. Many mail servers perform a reverse DNS lookup on the IP address of an incoming connection. If the IP address does not resolve to a legitimate hostname via a PTR record, or if the PTR record does not match the forward DNS record, the incoming email may be flagged as spam, quarantined, or rejected entirely. This helps verify the sender's identity and combat spoofing.

### Logging and analytics
Server logs (e.g., web server access logs, firewall logs, application logs) often record connecting IP addresses. Reverse DNS lookups allow these logs to display human-readable hostnames instead of just raw IP addresses, simplifying analysis, auditing, and troubleshooting for administrators.

### Network troubleshooting and security audits 
System administrators use reverse DNS to identify unknown connections to their systems, verify the identity of remote servers, or confirm that external services are connecting from expected hostnames. It provides an additional layer of verification.

### Certain application protocols 
Some specialized or older network protocols and applications might rely on successful reverse DNS resolution for authentication, authorization, or proper functionality.

## Who manages reverse DNS (and PTR records)?
Unlike forward DNS records for your domain name, which you typically manage directly with your DNS provider (like DNSimple), **control over reverse DNS zones (and PTR records) is tied to who owns or allocates your IP address block.**

**Your reverse DNS entries are generally managed by:**
- **Your internet service provider (ISP)**: If you obtain static IP addresses from them.
- **Your cloud provider**: If you are using services from Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, or similar providers.
- **Your hosting company**: If you have a dedicated server or Virtual Private Server (VPS).
- **Your organization**: If your organization has been directly allocated public IP address blocks by a Regional Internet Registry (RIR).

## Managing PTR records with DNSimple
DNSimple supports managing reverse DNS entries (i.e., PTR records), but it's crucial to understand how this differs from managing your domain's forward DNS. The authority for PTR records lies with the entity that controls your IP address block.

**If you want DNSimple to manage your PTR records**:
- **Subscription plan**: This feature is available on certain [DNSimple plans](https://dnsimple.com/pricing).
- **Delegation is required**: You must be able to delegate the portion of your subnet (IP address block) that you want DNSimple to respond to for reverse DNS queries. This involves instructing your IP address provider (your Internet Service Provider, hosting company, or cloud provider) to point the reverse DNS for your IP range to DNSimple's nameservers.
- **No direct control**: Depending on your IP address provider or hosting company, you may not have direct control over your subnet's reverse DNS delegation. In that case, you'll need to ask your hosting company or IP address provider to set up the reverse DNS entries you require directly with them.

<info>
In scenarios where DNSimple is acting as a secondary DNS provider for your forward domain, it will only handle the records within that forward zone. PTR record management for your IP addresses will still need to be handled as described above.
</info>

## A key best practice
Reverse DNS lookups, powered by PTR records, are a fundamental and vital component of the internet's infrastructure. They enable the essential translation of IP addresses back to hostnames, playing a critical role in email deliverability, server logging, and network security. 

While DNSimple supports managing PTR records, doing so requires proper delegation from your IP address provider and may depend on your subscription plan. Ensuring correct PTR record configuration for your public-facing servers is a key best practice for reliable online operations.

## Have more questions? 
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
