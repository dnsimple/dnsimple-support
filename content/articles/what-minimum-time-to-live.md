---
title: DNSimple TTL Settings Reference
excerpt: The standard time-to-live (TTL) for records added to DNSimple is 1 hour, but you can set different values.
meta: Learn about DNSimple's TTL (Time-to-Live) settings. Understand default TTL values, minimum TTL, and when to use high or low TTL values for DNS records.
categories:
- DNS
---

# DNSimple TTL Settings Reference

This document provides information about the Time-to-Live (TTL) settings available in DNSimple's record editor. To learn more about TTL, see our article [What is Time-to-Live](https://support.dnsimple.com/articles/what-is-ttl/)?

## TTL Values and defaults
The **Time-to-Live (TTL)** value for a DNS record determines how long a DNS resolver can cache a record before needing to refresh it from the authoritative name servers.

- **Default TTL:** The standard TTL for records added to DNSimple is **1 hour (3600 seconds)**.
- **Minimum TTL:** Through the web interface, you can select a TTL as low as **1 minute (60 seconds)**.

## TTL recommendations
The TTL value you set can affect both the performance and update speed of your domain.

- **When to use a low TTL:** You may want to lower a record's TTL to a short value (e.g., 1 to 5 minutes) when you are preparing for an imminent DNS record change. A lower TTL ensures the change from one address to another occurs quickly and propagates to resolvers across the internet faster, reducing potential downtime.
- **When to use a high TTL:** During normal, stable operation, we recommend keeping your TTL at the default of **1 hour or more**. A higher TTL means DNS resolvers only need to check for a record update once an hour, reducing DNS query traffic and resulting in better performance for your clients.

## DNSimple-specific policy
DNSimple reserves the right to review traffic patterns for performance and stability. If a record's TTL is deemed too low for a given traffic pattern, we may contact you via email first and request that you raise the TTL to a higher value. This is done to improve cache results and maintain the health of our DNS network.

## Have more questions? 
If you have additional questions or need any assistance with your TTL settings, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
