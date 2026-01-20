---
title: What Is Anycast DNS and Why Use It?
excerpt: Anycast offers several advantages over Unicast, resulting in lower latency and better traffic distribution.
meta: Learn about Anycast DNS and its benefits. Understand how Anycast reduces latency, improves resilience, and why DNSimple uses it for all domains.
categories:
- DNS
---

# What Is Anycast DNS and Why Use It?

Anycast is a powerful routing technology that, in the context of DNS, significantly improves the speed and reliability of your domain. Instead of a DNS query traveling to a single, specific server, Anycast allows a single IP address to be served from multiple physical locations around the world.

To understand Anycast, it's helpful to first understand Unicast, which is how most connections work. With Unicast, a packet sent from your computer to a server is addressed to a single, unique IP address. As the packet travels, internet routers use their routing tables to guide it to that one specific destination.

With Anycast DNS, the process is different. All of [DNSimple's name servers](/articles/dnsimple-nameservers/) share the same IP addresses. When a DNS query is sent, the internet's routing protocols automatically direct the packet to the closest available server location. This optimization is transparent to the user, providing a faster, more reliable response.

## Why Anycast DNS is a better solution

Anycast DNS provides two primary benefits: lower latency and increased resilience.

### Lower latency

The biggest factor in network latency is geographic distance. Anycast serves DNS queries from the closest physical server, drastically reducing the time it takes for a DNS lookup to complete. This means your visitors' web browsers can find the IP address for your website faster, leading to a quicker overall user experience.

DNSimple operates a global Anycast network of name servers. For a complete list of these locations, please refer to our DNSimple [Points of Presence](/articles/anycast/) reference article.

### Enhanced resilience

Anycast DNS also provides a higher degree of fault tolerance and uptime. With a globally distributed network, if one of our name servers goes offline due to a network issue, hardware failure, or other event, that location is automatically removed from the internet's routing tables. This allows other nearby name servers to seamlessly pick up the slack without any interruption to your service.

This distributed architecture provides significant redundancy, ensuring your domain's DNS remains highly available even in the event of localized outages.

## DNSimple and Anycast

All domains hosted with DNSimple are served through our Anycast network by default. Just use the name servers provided in our documentation to take advantage of this service.

DNSimple's proprietary [ALIAS record type](/articles/alias-record/) is a second-order DNS query that also benefits from our Anycast network. When resolving an ALIAS record, the Anycast server is likely to be closer to the target's geographic location, which can help an ALIAS record resolve to a closer data center if your application is also geographically distributed.

## Have more questions?
If you have additional questions about Anycast DNS, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
