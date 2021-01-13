---
title: Protection Against DDoS Attacks
excerpt: DNSimple offers multi-layered DDoS defense.
categories:
- DNS
---

# Protection Against DDoS Attacks

We use Cloudflare's DNS Firewall for our DNS distributed denial-of-service (DDoS) defense layer. Cloudflare also provides application layer DDoS defense, but we don't offer that as we don't proxy for your application traffic—we focus on DNS as deliberate choice.
 
We recognize that relying on a single provider introduces a single point of failure, so we are working to introduce other defense partners in our infrastructure and ultimately want to give customers the choice to pick and choose from a mix of providers for maximum protection and redundancy.
 
Ultimately, this would provide greater redundancy compared to using a single provider alone because, in the event that Cloudflare's network goes down, the domains hosted on our system will be served by the additional provider. If this is something that you're interested in now, please contact us at [support@dnsimple.com](mailto:support@dnsimple.com) or through the [contact page](https://dnsimple.com/contact), to discuss technical requirements and pricing.
