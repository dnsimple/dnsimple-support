---
title: EDNS Client Subnet support for ALIAS records
excerpt: What ECS is and how it works.
categories:
- DNS
---

# EDNS Client Subnet support for ALIAS records

### Table of Contents {#toc}

* TOC
{:toc}

---

This article explains what EDNS Client Subnet support is and how it's configured with an ALIAS record.


## How ECS Works:

EDNS Client Subnet support is a mechanism defined in [RFC7871](https://tools.ietf.org/html/rfc7871) for recursive resolvers to send partial client IP address information to authoritative DNS nameservers.

Latency-sensitive services like Content Delivery Networks (CDNs) use this information to provide accurate geo-location aware responses when answering name lookups coming from the recursive resolvers based at your Internet Service Provider (ISP) or public resolvers as Google Public DNS (8.8.8.8) service. DNSimple implemented an RFC7871 compliant solution to support these types of DNS queries at our authoritative DNS servers for customers using ALIAS records.

If your ALIAS records point to a Content Delivery Network (CDN), or other latency-sensitive service which supports ECS, our systems will pass this information along, returning the geo-locatio-aware responses to the end users.


## How does it benefit me and my services?

By having ECS enabled along the path of the DNS queries, your customers will be able to get the closest edge node provided by your Content Delivery Network of choice. This will reduce the average time required to load your web page in your customers' browsers, or improve the overall latency of the network services that you provide.


## Which plans support ECS?

We support this feature across all subscriptions.


## Which Content Delivery Networks (CDNs) do you support?

We researched and tested ECS support among CDN providers. We chose only CDN providers that could confirm full compliance with the RFC7871 standard to make sure our customers are not affected by non-adherence to the above standard. Otherwise this leads to suboptimal operations.

**List of supported CDN providers:**

24/06/2020 - Netlify 

01/09/2020 - BunnyCDN 
[BunnyCDN](https://bunnycdn.com/) works to improve your user experience, SEO, conversions, revenue, security, and stability. They provide a fast global network and powerful features – so you can minimize latency and maximize performance. 

If you operate a CDN, or use a CDN we don't support yet, please [contact us](https://dnsimple.com/contact) so we can determine compatibility.

## More information

For a more detailed explanation of what an ALIAS record is, and how you can use it with our systems, take a look at this [support article](/articles/alias-record/).
