---
title: Protection Against DDoS Attacks
excerpt: DNSimple offers multi-layered DDoS defense.
categories:
- DNS
---

# Protection Against DDoS Attacks

## Understanding DNSimple DDoS Protection

DNSimple provides defense against distributed denial-of-service (DDoS) attacks at the DNS level. This protection is available to all customers at no additional cost and without any special configuration.


## How does it work?

When a DNS query is sent to one of our [anycast name servers](/articles/dnsimple-nameservers/), the request is routed via anycast to the nearest point-of-presence (POP) of our DDoS defense system using the Border Gateway Protocol (BGP). The DDoS system sits in front of all our name servers and continuously analyzes incoming traffic to detect potential malicious patterns.

Legitimate requests pass through the DDoS defense system and hit a first layer of caching. Cached requests are immediately returned for optimal results. Non-blocked, non-cached requests are forwarded to the nearest [data center](/articles/anycast/) for processing. Once the query is processed by one of our name servers, the answer is returned to the client and cached if necessary.


## Multi-provider protection

DNSimple's name servers and DDoS protection infrastructure are distributed in multiple locations around the world.

We currently adopt a single DDoS protection provider, and we're working to introduce additional providers for zones where complete redundancy is critical. If this is something you're interested in, please [contact us](https://dnsimple.com/contact) to discuss technical requirements and pricing.
