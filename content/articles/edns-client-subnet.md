---
title: What Is EDNS Client Subnet Support?
excerpt: What ECS is and how it works.
meta: This article explains what EDNS Client Subnet (ECS) support is, how it is an option in the Extension Mechanisms for DNS, and how it's configured with an ALIAS record
categories:
- DNS
---

# What Is EDNS Client Subnet Support?

### Table of Contents {#toc}

* TOC
{:toc}

---

**EDNS Client Subnet (ECS)** is a mechanism that allows for more accurate, location-based DNS responses. Its primary purpose is to help latency-sensitive services like **Content Delivery Networks (CDNs)** route a user to the closest possible server, reducing the time it takes for a web page or other content to load.

By default, a DNS query from a public resolver (like Google Public DNS, 8.8.8.8) only shows the resolver's IP address. This can be problematic if the resolver is geographically far from the user, causing the DNS response to route the user to a server that isn't close to them. ECS solves this by allowing the resolver to pass along a partial, masked version of the end user's IP address in the DNS query.

## How it benefits your services

Having ECS enabled means your customers get the closest possible edge node provided by your CDN. This reduces the average time required to load your web page, improves the overall latency of your network services, and provides a better customer experience.

## How DNSimple supports ECS

DNSimple has implemented an [RFC 7871](https://datatracker.ietf.org/doc/html/rfc7871)-compliant solution to support ECS queries for customers using [ALIAS records](/articles/alias-record/). If your ALIAS records point to a CDN or another latency-sensitive service that supports ECS, our systems will pass along the client IP information. This ensures the CDN can provide an accurate, geo-location-aware response to your end users.

This feature is supported across all [DNSimple plans](https://dnsimple.com/pricing).

We have researched and tested ECS support among CDN providers and confirmed full compliance with the RFC 7871 standard.

### Supported CDN providers:
- [Netlify](https://www.netlify.com)
- [BunnyCDN](https://bunnycdn.com/)

If you operate a CDN, or use a CDN we don't support yet, please [contact us](https://dnsimple.com/feedback) so we can determine compatibility.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
