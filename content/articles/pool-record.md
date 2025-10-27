---
title: What Is a POOL Record?
excerpt: What a POOL record is, and how to create POOL records with DNSimple.
meta: Discover what a POOL record is and learn how to easily create and manage POOL records using DNSimple for efficient DNS configuration.
categories:
- DNS
---
# Pool Records

### Table of Contents {#toc}
* TOC
{:toc}

---

## What is a POOL record?

A **POOL record** is a unique and powerful record type developed by DNSimple to provide advanced traffic management capabilities. It allows you to randomly distribute incoming requests across multiple target hostnames, essentially acting as a lightweight, DNS-based load balancer for your services.

While standard [CNAME records](/articles/cname-record/)can alias one name to another, they lack the ability to dynamically choose between several destinations. The POOL record solves this by enabling you to define a collection (pool) of hostnames that a single CNAME-like record can point to, randomly selecting one at resolution time.

## How POOL records work: intelligent CNAME resolution
The magic of POOL records happens on DNSimple's authoritative [name servers](/articles/dnsimple-nameservers/). 

When a DNS resolver queries a domain name for which you've configured a POOL record:

1. DNSimple's name server randomly selects one of the target hostnames you've defined within your POOL record.
1. It returns this randomly chosen hostname to the requesting resolver as if it were a standard CNAME record.
1. The resolver then proceeds to look up the IP address of that chosen hostname, directing the user's traffic to one of your specified providers.

This dynamic selection process occurs with each new resolution request, allowing you to randomly distribute incoming traffic across all active members of your pool.

## Key benefits and use cases for POOL records
POOL records offer several significant advantages for managing your online services.

### Simple load distribution
Ideal for distributing traffic across multiple instances of an application, multiple content delivery network (CDN) providers, or different cloud service endpoints. This helps balance the load and improve responsiveness.

### Seamless maintenance & failover
- **Graceful removal**: You can easily remove a specific provider or server from the pool at any time. Once removed, and after DNS caches have expired, no new requests will be directed to that provider, allowing for maintenance or decommissioning without downtime.
- **Basic failover**: While not a full health-check system, you can remove unhealthy endpoints to manually steer traffic away from issues.

### A/B testing (basic)
For simple scenarios, you could use a POOL record to randomly send users to different versions of a site or service to observe behavior.

### Vendor redundancy
Easily distribute traffic across different service providers (e.g., `example.provider1.com`, `example.provider2.com`), reducing reliance on a single vendor.

<warning> 
POOL records are a proprietary record type created by DNSimple. **They are resolved and managed exclusively by DNSimple's name servers**. If your domain's DNS is not hosted with DNSimple, or if you transfer it to another provider, POOL records will not function. 
</warning>

## Managing POOL records in DNSimple
DNSimple provides a user-friendly interface for configuring and maintaining your POOL records. You can easily add new records, manage the pool of target hostnames, and remove or update entries directly from your domain's [record editor](/articles/record-editor/).

## Have more questions?
If you have additional questions or need any assistance with your POOL records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
