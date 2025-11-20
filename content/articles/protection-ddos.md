---
title: Protection Against DDoS Attacks
excerpt: DNSimple offers multi-layered DDoS defense.
meta: Protect your online presence with DNSimple's robust multi-layered DDoS defense. Ensure your services remain available and secure against malicious attacks.
categories:
- DNS
---

# Protection Against DDoS Attacks

A distributed denial-of-service (DDoS) attack is a malicious attempt to overwhelm a server or network with a flood of internet traffic. At the DNS level, a DDoS attack can prevent your domain from resolving, making your website and other online services inaccessible to legitimate users.

DNSimple provides defense against these attacks at no additional cost and without any special configuration. Our protection is automatically enabled for all domains.

## How our DDoS protection works

DNSimple's DDoS defense system acts as a protective layer that sits in front of all our name servers. When a DNS query is sent, our [Anycast network](/articles/why-anycast-dns/) (automatically routes the request to the nearest of our [points of presence (POPs)](/articles/anycast/). At this point, the request is analyzed before it's allowed to reach our authoritative name servers.

Think of it like a security checkpoint:

- **Initial screening:** All incoming traffic is continuously analyzed for potential malicious patterns and anomalies.
- **Legitimate traffic:** Legitimate requests are allowed to pass through the system. They are then served from a fast caching layer if the information is available, or forwarded to the nearest data center for a fresh response.
- **Malicious traffic:** Malicious requests are detected and blocked at the POP level, preventing them from consuming the resources of our name servers and disrupting service for others.

This multilayered defense, powered by Anycast routing, ensures that your domain remains online and your legitimate customers continue to receive fast DNS responses, even during an attack.

## Multi-provider protection

DNSimple's name servers and DDoS protection infrastructure are distributed in multiple locations around the world. We are always working to introduce additional providers for zones where complete redundancy is critical.

If you're interested in leveraging this for your domain, please [contact us](https://dnsimple.com/contact) to discuss the technical requirements and pricing.

## Have more questions? 
If you have additional questions or need any assistance with your domain security, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
