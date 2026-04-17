---
title: What Is DNS?
excerpt: DNS stands for Domain Name System. It resolves human-readable domain names to machine-readable IP addresses so browsers can load websites.
meta: DNS stands for Domain Name System - the protocol that translates domain names into IP addresses. Learn what DNS means, how DNS resolution works, and the role of DNS records, resolvers, and name servers.
categories:
- DNS
---

# What Is DNS?

### Table of Contents {#toc}

* TOC
{:toc}

DNS stands for Domain Name System. It translates human-readable domain names into machine-readable IP addresses through a process called DNS resolution. Domain names like google.com or dnsimple.com are easy for people to remember, but web browsers use IP addresses to communicate. DNS bridges that gap by resolving the IP address associated with each domain name.

## IP addresses {#ip-addresses}

IP addresses are how computers know where to find each other, much like a street address. DNS servers take a domain like dnsimple.com and resolve addresses like `104.245.210.170` for IPv4, or the newer alphanumeric `2607:f8b0:4004:c19::64` for IPv6.

## How does DNS work? {#how-does-dns-work}

DNS uses several servers in conjunction to resolve a domain name to an IP address. They also enable other online services with different kinds of resource records.

Check out our web comic at [howdns.works](https://howdns.works) for a fun overview of DNS in action.

## Key DNS components {#key-dns-components}

- **DNS records:** Instructions living on DNS servers that provide information about domains and hostnames. Some common record types are: [A records](/articles/a-record/), [AAAA records](/articles/aaaa-record/), [CNAME records](/articles/cname-record/), [MX records](/articles/mx-record/), [TXT records](/articles/txt-record/), and [NS records](/articles/ns-record/).

- **DNS resolver:** Also known as a recursive resolver, this is the first stop in the DNS query process. It looks up the IP address on behalf of the client.

- **Root name servers:** At the top of the DNS hierarchy, these find the specific top-level domain server a domain name is associated with.

- **TLD (top-level domain) servers:** These manage information for top-level domains like .com, .org, and .net. A TLD server points to the authoritative DNS server for a domain name.

- **Authoritative name servers:** These servers hold the official DNS records for a domain. They are the final source of truth for IP addresses and return them to the recursive resolver.

![diagram of DNS component types](/files/dns-components.png)

## Iterative vs. recursive queries {#iterative-vs-recursive-queries}

The connections between a resolver and client are recursive queries - queries that communicate with several DNS servers. Connections between root name, TLD, and authoritative DNS servers are typically iterative queries, which only query a single DNS server.

![Diagram of recursive vs iterative DNS queries](/files/dns-recursive-and-iterative.png)

## DNS resolution: step-by-step {#dns-resolution-step-by-step}

1. **Web browser search:** A DNS query starts when you enter a site like dnsimple.com in your browser.
1. **Recursive resolver:** Your browser contacts a recursive resolver, which searches for the IP address on your behalf.
1. **Root server query:** The resolver queries a root name server to find which TLD server is responsible for the .com domain.
1. **TLD server query:** The resolver queries the .com TLD server, which returns the authoritative name server responsible for dnsimple.com.
1. **Authoritative name server query:** The resolver queries the authoritative name server, which contains the resource records for dnsimple.com.
1. **IP address returned:** The resolver caches the record using the [TTL](/articles/what-is-ttl/) value and sends the IP address to your device.

![flow diagram of the DNS resolution process](/files/dns-resolution-steps.png)
