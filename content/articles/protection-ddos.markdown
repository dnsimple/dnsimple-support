---
title: Protection Against DDoS Attacks
excerpt: DNSimple offers multi-layered DDoS defense.
categories:
- DNS
---

# Protection Against DDoS Attacks

## Understanding DNSimple DDoS Protection

DNSimple provides defense against distributed denial-of-service (DDoS) attacks at DNS level. This protection is available to all customers at no additional cost and without any special configuration.

DNSimple DDoS protection system works by actively analyzing the DNS queries sent to our [name servers](/articles/dnsimple-nameservers/), and taking action in case of malicious traffic.

## How does it work?

When a DNS query is sent to one of our anycast name servers, the request is being routed via anycast to the nearest point-of-presence (POP) of our DDoS defense system using the BGP protocol. The DDoS system sits in front of all our name-servers, and continuously analyses incoming traffic in order to detect potential abuse patterns.

Legitimate requests pass through the DDoS defense system and hits a first layer of caching. Cached requests are immediately returned for optimal results Non-blocked non-cached requests are forwarded to the nearest [data center around the world](/articles/anycast/) for processing. Once the query is processed by one of our name servers, the answer is returned to the client and cached if necessary.


## Multi-provider protection

DNSimple name servers and DDoS protection infrastructure are distributed in multiple locations around the world.

We currently adopt a single DDoS protection provider, and we are working to introduce additional providers for zones where complete redundancy is critical. If this is something that you're interested in, please [contact us](https://dnsimple.com/contact) to discuss technical requirements and pricing.
