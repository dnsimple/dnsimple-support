---
title: What is DNS?
excerpt: DNS resolves human-readable domain names to machine-readable IP addresses.
categories:
- DNS
- Guides
---

# What is DNS?

### Table of Contents {#toc}

* TOC
{:toc}

Domain Name System (DNS) is a system whose main goal is to resolve human-readable domain names to machine-readable IP addresses. This process is also known as DNS resolution. It is easy for a human to remember domain names like google.com or dnsimple.com, but web browsers use the Internet Protocol (IP) to communicate. DNS is used to resolve the IP address associated with a domain name. Understanding DNS is crucial for efficient internet access.

## IP addresses

IP addresses are how computers know where to find each other, much like a street address. DNS servers take a domain like dnsimple.com and resolve addresses like `104.245.210.170` for IPv4, or the newer alphanumeric `2607:f8b0:4004:c19::64` for IPv6. Both IPv4 and IPv6 addresses are integral to DNS functionality.

## How does DNS work?

DNS uses several servers in conjunction to resolve a domain name to an IP address. They also enable other online services with different kinds of resource records. The DNS system ensures a seamless online experience.

Check out our web comic at [howdns.works](https://howdns.works) for a fun overview of DNS in action.

## Key DNS components

- **DNS records:** These records are instructions living on DNS servers that provide important information about domains and hostnames that live on authoritative name servers. Different DNS record types serve specific purposes. Some common record types are: [A records](/articles/a-record/), [AAAA records](/articles/aaaa-record/), [CNAME records](/articles/cname-record/), [MX records](/articles/mx-record/), [TXT records](/articles/txt-record/), and [NS records](/articles/ns-record/). Each type plays a vital role in directing internet traffic.

- **DNS resolver:** Also known as a recursive resolver, these are the first stop in the DNS query process. They look up the IP address for a client. DNS resolvers are essential for translating domain names into IP addresses.

- **Root name servers:** They are at the top of the DNS hierarchy and are the next stop in the DNS resolution process. Root name servers find the specific top-level domain server a domain name is associated with. Root servers are fundamental to the DNS infrastructure.

- **TLD (top-level domain) servers:** The third stop, these manage information for top-level domains like .com, .org, and .net. TLD servers provide information about authoritative name servers for specific domain names. A TLD server will point to the authoritative DNS server for a domain name.

- **Authoritative name servers:** These servers hold the "official" DNS records for a domain. They are the final source of truth for IP addresses and will return them to the recursive resolver. Authoritative DNS servers are the ultimate source of DNS information.

![diagram of DNS component types](/files/dns-components.svg)

## Iterative vs. recursive queries

The connections between a resolver and client are recursive queries--queries that communicate with several DNS servers. Connections between root name, TLD, and authoritative DNS servers are typically iterative queries, which only query a single DNS server. Understanding the difference between iterative and recursive DNS queries is essential for comprehending DNS architecture.

![Diagram of recursive vs iterative DNS queries](/files/dns-recursive-vs-iterative.svg)

## DNS resolution: step-by-step

1. **Web browser search:** A DNS query starts on the web browser for a site, like dnsimple.com. This initiates the DNS lookup process.
1. **Recursive resolver:** Your browser communicates with a recursive resolver, which searches for the IP address for you. The recursive resolver acts as an intermediary in the DNS resolution.
1. **Root server query:** The resolver begins by querying a root name server to find which TLD server is responsible for the .com domain.
1. **TLD server query:** The resolver queries the .com TLD server, which returns the authoritative name server responsible for dnsimple.com.
1. **Authoritative name server query:** The resolver queries the authoritative name server, which contains the resource records associated with the domain name dnsimple.com.
1. **IP address returned:** Once the resolver gets the IP address back, it caches the record's information using the [TTL](/articles/what-is-ttl/) value of the record and sends it to your device. DNS caching improves the efficiency of future DNS lookups.

![flow diagram of the DNS resolution process](/files/dns-resolution-steps.svg)
