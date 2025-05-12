---
title: Discontinuation of Legacy NS2 and NS4 IP Addresses
excerpt: DNSimple will no longer support legacy NS2 and NS4 IP addresses starting June 15, 2025. Affected customers will be notified via email.
categories:
---

# Discontinuation of Legacy NS2 and NS4 IP Addresses

<info>
This article contains information that is only relevant to customers with legacy configurations using outdated IP addresses. If you are impacted, you will receive an email from us asking you to take action.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our multi-year effort to modernize our DNS infrastructure and improve global resolution performance, we are officially retiring the legacy IP addresses associated with our NS2 and NS4 name servers. These IPs have already been replaced by our high-performance [Cache Edge network](https://blog.dnsimple.com/2023/03/cache-edge-layer/), first introduced in 2023.

Following [the expansion of our cache edge infrastructure in 2024](https://blog.dnsimple.com/2024/10/expanding-cache-edge-network/), most domains have already transitioned to the new IP addresses. This announcement serves as final notice that the legacy IPs will be decommissioned on **June 15, 2025**.

## What's Changing

The table below summarizes the IP addresses that will be deprecated, along with their replacements in the cache edge layer:

| Name Server | Deprecated IPv4 | Deprecated IPv6 | Replacement IPv4 | Replacement IPv6 |
|-------------|------------------|------------------|-------------------|-------------------|
| **NS2**     | `162.159.25.4`   | `2400:cb00:2049:1::a29f:1904` | `199.247.153.53`   | `2620:111:8005::53` |
| **NS4**     | `162.159.27.4`   | `2400:cb00:2049:1::a29f:1b04` | `199.247.155.53`   | `2620:111:8007::53` |

Domains still pointing to the deprecated IPs will **cease to resolve correctly after June 15, 2025**.

## What You Need to Do

If your domain configuration references any of the deprecated IPs directly, typically via [vanity name servers](https://support.dnsimple.com/articles/vanity-nameservers/) glue records or custom setups outside DNSimple, you must update your configuration to point to the replacement IPs listed above before **June 15, 2025**.

For most DNSimple customers, no manual action is required. Our systems automatically handle the transition as long as you're using the correct name server hostnames. You can always refer to the latest list of official DNSimple name servers here:

👉 [DNSimple Name Server Reference](https://support.dnsimple.com/articles/dnsimple-nameservers/)

## Questions or Concerns?

If you have any questions or need help with the transition, don't hesitate to [reach out to our support team](https://support.dnsimple.com/).

Thank you for being part of the DNSimple journey as we continue to invest in speed, resilience, and the future of DNS.
