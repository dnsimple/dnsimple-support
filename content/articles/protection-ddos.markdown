---
title: Protection Against DDoS Attacks
excerpt: DNSimple offers multi-layered DDoS defense.
categories:
- DNS
---

# Protection Against DDoS Attacks

We use Cloudflare's [DNS Firewall](https://www.cloudflare.com/dns/dns-firewall/) for our DNS distributed denial-of-service (DDoS) defense layer. This protection is enabled by default for all customers at no additional cost. 

## How it works

DNS queries for your name servers are sent to the nearest Cloudflare data center, where the legitimacy of the request is checked and malicious traffic blocked. If the correct DNS response is available in Cloudflare's cache, then the response is returned to the visitor. If the DNS response is not available in the cache, Cloudflare will query the name servers of the provider in the background to fetch and return the DNS response to the visitor.
 
## Future plans

We are currently working to introduce alternative providers for zones where complete redundancy is critical. If this is something that you're interested in now, please contact us at [support@dnsimple.com](mailto:support@dnsimple.com) or through the [contact page](https://dnsimple.com/contact), to discuss technical requirements and pricing.
