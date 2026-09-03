---
title: Discontinuation of Legacy NS1 and NS3 IP Addresses
excerpt: DNSimple migrated NS1 and NS3 to new edge infrastructure. The legacy Cloudflare IP addresses were fully retired on July 6, 2026.
meta: DNSimple migrated NS1 and NS3 to new edge infrastructure and retired the legacy Cloudflare IP addresses on July 6, 2026. Find the replacement IPs and the migration timeline.
categories:
  - DNS
---

# Discontinuation of Legacy NS1 and NS3 IP Addresses

> [!NOTE]
> This migration completed on July 6, 2026. Most DNSimple customers did not need to take any action, and no action is required now. For the current list of name server hostnames and IP addresses, see [DNSimple Name Servers](/articles/dnsimple-nameservers/).

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our multi-year effort to modernize our DNS infrastructure and improve global resolution performance, we retired the legacy IP addresses associated with our NS1 and NS3 name servers. These IPs had already been replaced by our high-performance [Cache Edge network](https://blog.dnsimple.com/2023/03/cache-edge-layer/), first introduced in 2023.

Following [the expansion of our cache edge infrastructure in 2024](https://blog.dnsimple.com/2024/10/expanding-cache-edge-network/) and the discontinuation of the legacy NS2 and NS4 IP addresses in June 2025, NS1 and NS3 were the final two name servers still pointing to the older infrastructure. The legacy IPs were fully decommissioned on **July 6, 2026**.

## What changed {#changing}

The table below summarizes the IP addresses that were deprecated, along with their replacements in the cache edge layer:

| Name Server | Retired IP                    | Replacement IP      |
|-------------|-------------------------------|---------------------|
| **NS1**     | `162.159.24.4`                | `199.247.152.53`    |
| **NS1**     | `2400:cb00:2049:1::a29f:1804` | `2620:111:8004::53` |
| **NS3**     | `162.159.26.4`                | `199.247.154.53`    |
| **NS3**     | `2400:cb00:2049:1::a29f:1a04` | `2620:111:8006::53` |

As part of this change, the canonical name server hostnames for NS1 and NS3 also moved to dedicated edge domains:

- `ns1.dnsimple.com` to `ns1.dnsimple-edge.com`
- `ns3.dnsimple.com` to `ns3.dnsimple-edge.io`

The legacy `ns1.dnsimple.com` and `ns3.dnsimple.com` hostnames continue to resolve after the migration, but they now point to the new edge infrastructure.

## Timeline {#timeline}

| Date                | Milestone                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------------|
| **May 1, 2026**     | New NS1 & NS3 edge infrastructure went live. Self-migration was available from this date.      |
| **May 1, 2026**     | Started staged automatic migration of domains registered with DNSimple (Group 1)              |
| **May 29, 2026**    | Ended staged automatic migration of domains registered with DNSimple (Group 1)                |
| **June 1, 2026**    | Started migration of hosted zones still delegated to the legacy hostnames (Group 2)           |
| **June 12, 2026**   | Ended migration of hosted zones still delegated to the legacy hostnames (Group 2)             |
| **June 15, 2026**   | Cloudflare brownout #1 - legacy IPs temporarily stopped answering to surface remaining traffic. |
| **June 22, 2026**   | Cloudflare brownout #2 - legacy IPs temporarily stopped answering to surface remaining traffic. |
| **July 6, 2026**    | **Legacy Cloudflare IPs fully decommissioned.** Any configuration still pointing at the old IPs stopped resolving. |

The two brownouts on June 15 and June 22, 2026 briefly paused answering queries on the legacy Cloudflare IPs. This surfaced any traffic still landing on the old infrastructure so that remaining configurations could be identified and updated before the final decommission date.

## Who was impacted {#impacted}

Three groups of customers were affected by this migration, each with a different level of action required.

### Group 1 - Domains registered with DNSimple

**No action was required.** For domains registered with DNSimple and delegated to our name servers, we handled the migration automatically between May 1 and May 29, 2026. For domains using [vanity name servers](/articles/vanity-nameservers/), we also updated the glue records at the registry and the corresponding A/AAAA records in the zone.

If you independently maintain a copy of your zone at another DNS provider (not through DNSimple's secondary DNS), you should update the NS records at that provider to reference `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io`. The old `ns1.dnsimple.com` and `ns3.dnsimple.com` hostnames continue to work, but updating ensures your configuration stays current.

### Group 2 - Domains registered elsewhere with DNS hosted at DNSimple

**We force-migrated these domains by June 12, 2026.** For domains registered at another registrar but using DNSimple for DNS, the delegation at that registrar pointed at `ns1.dnsimple.com` and/or `ns3.dnsimple.com`. By June 12, 2026, we transparently updated the A and AAAA records for `ns1.dnsimple.com` and `ns3.dnsimple.com` to point at the new edge infrastructure, so delegation continued to work without changes on the customer side.

If you want your delegation to reflect the current hostnames, update it at your registrar to use `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io`.

### Group 3 - Using vanity name servers with a domain NOT registered through DNSimple

**These customers had to self-migrate before July 6, 2026.** For vanity name servers (for example `ns1.yourdomain.com`), the glue records at the registrar pointed at the legacy Cloudflare IPs. We cannot update glue records on a customer's behalf - only the registrar can do that.

> [!WARNING]
> Any glue records still pointing at the legacy Cloudflare IPs stopped resolving on July 6, 2026. If your domains are no longer resolving, update the [glue records](/articles/what-are-glue-records/) at your registrar to the replacement IPs listed above.

## How to check your glue records {#verify}

If you use a vanity name server, you can check whether your glue records still point at a legacy IP by running:

```
dig +short ns1.yourdomain.com
dig +short ns3.yourdomain.com
```

If the query returns `162.159.24.4` or `162.159.26.4` (or the matching IPv6 addresses), or fails to return an answer at all, the glue records still point at the retired IPs. Update them at your registrar to the replacement IPs listed above; `whois yourdomain.com` shows the name server addresses the registry currently publishes.

For non-vanity setups, you can check which name servers your domain uses at its registrar. If they reference `ns1.dnsimple.com` or `ns3.dnsimple.com`, they now resolve to the new edge infrastructure and no action is required.

## What you need to do {#what-to-do}

- **Group 1 - registered with DNSimple:** No action required. We handled the migration between May 1 and May 29, 2026.
- **Group 2 - hosted at DNSimple, registered elsewhere:** No action required. We migrated the delegation transparently by June 12, 2026. Optionally, update your delegation at your registrar to `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io`.
- **Group 3 - vanity name servers:** If your domains stopped resolving, update the [glue records](/articles/what-are-glue-records/) at your registrar to the replacement IPs above.

You can always refer to the latest list of official DNSimple name servers here: [DNSimple Name Server Reference](/articles/dnsimple-nameservers/).

## Questions or concerns? {#questions}

If you have any questions or need help, [reach out to our support team](https://dnsimple.com/contact).

Thank you for being part of DNSimple as we continue to invest in speed, resilience, and the future of DNS.
