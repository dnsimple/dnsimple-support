---
title: Discontinuation of Legacy NS1 and NS3 IP Addresses
excerpt: DNSimple will no longer support legacy NS1 and NS3 IP addresses starting June 15, 2026. Affected customers will be notified via email.
meta: Learn about DNSimple's discontinuation of legacy NS1 and NS3 IP addresses. Find replacement IPs and understand what action you need to take before June 15, 2026.
categories:
  - DNS
---

# Discontinuation of Legacy NS1 and NS3 IP Addresses

> [!NOTE]
> This article contains information that is only relevant to customers with legacy configurations using outdated IP addresses, typically through [vanity name servers](/articles/vanity-nameservers/) and glue records. If you are impacted, you will receive an email from us asking you to take action.

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our multi-year effort to modernize our DNS infrastructure and improve global resolution performance, we are officially retiring the legacy IP addresses associated with our NS1 and NS3 name servers. These IPs have already been replaced by our high-performance [Cache Edge network](https://blog.dnsimple.com/2023/03/cache-edge-layer/), first introduced in 2023.

Following [the expansion of our cache edge infrastructure in 2024](https://blog.dnsimple.com/2024/10/expanding-cache-edge-network/) and the discontinuation of the legacy NS2 and NS4 IP addresses in June 2025, NS1 and NS3 are the final two name servers still pointing to the older infrastructure. This announcement serves as final notice that the legacy IPs will be decommissioned on **June 15, 2026**.

## What's changing

The table below summarizes the IP addresses that will be deprecated, along with their replacements in the cache edge layer:

| Name Server | Deprecated IP                 | Replacement IP      |
|-------------|-------------------------------|---------------------|
| **NS1**     | `162.159.24.4`                | `199.247.152.53`    |
| **NS1**     | `2400:cb00:2049:1::a29f:1804` | `2620:111:8004::53` |
| **NS3**     | `162.159.26.4`                | `199.247.154.53`    |
| **NS3**     | `2400:cb00:2049:1::a29f:1a04` | `2620:111:8006::53` |

Domains still pointing to the deprecated IPs will **cease to resolve correctly after June 15, 2026**.

## How to verify if you're impacted

You are impacted if you use a vanity name server whose [glue record](/articles/what-are-glue-records/) at your registrar still points to one of the deprecated IPs above. To check, run:

```
dig +short ns1.yourdomain.com
dig +short ns3.yourdomain.com
```

If the response contains `162.159.24.4` or `162.159.26.4` (or the matching IPv6 addresses), you need to update your configuration before June 15, 2026.

## What you need to do

If your domain configuration references any of the deprecated IPs directly, typically via [vanity name server](/articles/vanity-nameservers/) glue records or custom setups outside DNSimple, you must update your configuration to point to the replacement IPs listed above before **June 15, 2026**.

For most DNSimple customers, no manual action is required. Our systems automatically handle the transition as long as you're using the correct name server hostnames. You can always refer to the latest list of official DNSimple name servers here:

👉 [DNSimple Name Server Reference](/articles/dnsimple-nameservers/)

## Questions or concerns?

If you have any questions or need help with the transition, don't hesitate to [reach out to our support team](https://dnsimple.com/contact).

Thank you for being part of DNSimple as we continue to invest in speed, resilience, and the future of DNS.
