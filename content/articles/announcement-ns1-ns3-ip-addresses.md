---
title: Discontinuation of Legacy NS1 and NS3 IP Addresses
excerpt: DNSimple is migrating NS1 and NS3 to new edge infrastructure. Legacy Cloudflare IP addresses will be fully retired on July 6, 2026.
meta: DNSimple is migrating NS1 and NS3 to new edge infrastructure. Find replacement IPs, the migration timeline, and what to do before July 6, 2026.
categories:
  - DNS
---

# Discontinuation of Legacy NS1 and NS3 IP Addresses

> [!NOTE]
> Most DNSimple customers do not need to take any action — we will handle the migration automatically. The only customers who must act are those using [vanity name servers](/articles/vanity-nameservers/) whose [glue records](/articles/what-are-glue-records/) still point at the legacy IPs. If you are impacted, you will receive an email from us with specific details for your account.

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our multi-year effort to modernize our DNS infrastructure and improve global resolution performance, we are officially retiring the legacy IP addresses associated with our NS1 and NS3 name servers. These IPs have already been replaced by our high-performance [Cache Edge network](https://blog.dnsimple.com/2023/03/cache-edge-layer/), first introduced in 2023.

Following [the expansion of our cache edge infrastructure in 2024](https://blog.dnsimple.com/2024/10/expanding-cache-edge-network/) and the discontinuation of the legacy NS2 and NS4 IP addresses in June 2025, NS1 and NS3 are the final two name servers still pointing to the older infrastructure. The legacy IPs will be fully decommissioned on **July 6, 2026**.

## What's changing

The table below summarizes the IP addresses that will be deprecated, along with their replacements in the cache edge layer:

| Name Server | Deprecated IP                 | Replacement IP      |
|-------------|-------------------------------|---------------------|
| **NS1**     | `162.159.24.4`                | `199.247.152.53`    |
| **NS1**     | `2400:cb00:2049:1::a29f:1804` | `2620:111:8004::53` |
| **NS3**     | `162.159.26.4`                | `199.247.154.53`    |
| **NS3**     | `2400:cb00:2049:1::a29f:1a04` | `2620:111:8006::53` |

As part of this change, the canonical name server hostnames for NS1 and NS3 are also moving to dedicated edge domains:

- `ns1.dnsimple.com` → `ns1.dnsimple-edge.com`
- `ns3.dnsimple.com` → `ns3.dnsimple-edge.io`

The legacy `ns1.dnsimple.com` and `ns3.dnsimple.com` hostnames will continue to resolve after the migration, but they will point to the new edge infrastructure.

## Timeline

| Date                | Milestone                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------------|
| **May 1, 2026**     | New NS1 & NS3 edge infrastructure goes live. **You can begin self-migrating at any time after this date.** |
| **May 1, 2026**     | Start staged automatic migration of domains registered with DNSimple (Group 1)                |
| **May 29, 2026**    | End staged automatic migration of domains registered with DNSimple. (Group 1)                 |
| **June 1, 2026**    | Start migration of hosted zones still delegated to the legacy hostnames. (Group 2)            |
| **June 12, 2026**   | End migration of hosted zones still delegated to the legacy hostnames. (Group 2)              |
| **June 15, 2026**   | Cloudflare brownout #1 — legacy IPs temporarily stop answering to surface remaining traffic.  |
| **June 22, 2026**   | Cloudflare brownout #2 — legacy IPs temporarily stop answering to surface remaining traffic.  |
| **July 6, 2026**    | **Legacy Cloudflare IPs fully decommissioned.** Any configuration still pointing at the old IPs will stop resolving. |

## Am I impacted?

There are three groups of customers affected by this migration, each with a different level of action required.

### Group 1 — Domains registered with DNSimple

**You do not need to do anything.** If your domain is registered with DNSimple and delegated to our name servers, we will handle the migration for you automatically between May 1 and June 1, 2026. All registered domains will be fully migrated by June 26, 2026. For domains using [vanity name servers](/articles/vanity-nameservers/), we will also update the glue records at the registry and the corresponding A/AAAA records in your zone.

If you independently maintain a copy of your zone at another DNS provider (not through DNSimple's secondary DNS), you should update the NS records at that provider to reference `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io`. The old `ns1.dnsimple.com` and `ns3.dnsimple.com` hostnames will continue to work, but updating ensures your configuration stays current.

### Group 2 — Domains registered elsewhere with DNS hosted at DNSimple

**We recommend self-migrating, but we will force-migrate you by June 12, 2026.** If your domain is registered at another registrar but uses DNSimple for DNS, your delegation at that registrar currently points at `ns1.dnsimple.com` and/or `ns3.dnsimple.com`. You have two options:

- **Self-migrate** (recommended): at your registrar, update the delegation to use `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io` instead. You can do this any time **after May 1, 2026**.
- **Do nothing**: by June 12, 2026, we will transparently update the A and AAAA records for `ns1.dnsimple.com` and `ns3.dnsimple.com` to point at the new edge infrastructure. Your delegation will continue to work without changes on your side.

### Group 3 — Using vanity name servers with a domain NOT registered through DNSimple

**You must self-migrate before July 6, 2026.** If you use vanity name servers (for example `ns1.yourdomain.com`), the glue records at your registrar currently point at the legacy Cloudflare IPs. We cannot update glue records on your behalf — only your registrar can do that. If you take no action, your domains will stop resolving when the legacy IPs are decommissioned.

## How to verify if you're impacted

If you use a vanity name server, you can check whether your glue records are still on the legacy IPs by running:

```
dig +short ns1.yourdomain.com
dig +short ns3.yourdomain.com
```

If the response contains `162.159.24.4` or `162.159.26.4` (or the matching IPv6 addresses), you need to update your configuration before July 6, 2026.

For non-vanity setups, you can check which name servers your domain uses at its registrar — if they reference `ns1.dnsimple.com` or `ns3.dnsimple.com`, you fall under Group 1 or Group 2 and no action is strictly required.

## What about the brownouts?

On **June 15, 2026** and **June 22, 2026** we will briefly pause answering queries on the legacy Cloudflare IPs. Any traffic still landing on the old infrastructure will temporarily fail, making it easy to identify configurations that still need attention. If you notice intermittent resolution failures on those dates, treat it as a strong signal that you still have glue records or delegations pointing at the legacy IPs and should complete your migration before July 15, 2026.

## What you need to do

- **Group 1 — registered with DNSimple:** No action required. We'll handle the migration between May 1 and May 29, 2026.
- **Group 2 — hosted at DNSimple, registered elsewhere:** Optional but recommended: update your delegation at your registrar to `ns1.dnsimple-edge.com` and `ns3.dnsimple-edge.io` any time after May 1, 2026. Otherwise, you will be migrated transparently on June 26, 2026.
- **Group 3 — vanity name servers:** Required: update the [glue records](/articles/what-are-glue-records/) at your registrar to the replacement IPs above before **July 6, 2026**.

You can always refer to the latest list of official DNSimple name servers here:

👉 [DNSimple Name Server Reference](/articles/dnsimple-nameservers/)

## Questions or concerns?

If you have any questions or need help with the transition, don't hesitate to [reach out to our support team](https://dnsimple.com/contact).

Thank you for being part of DNSimple as we continue to invest in speed, resilience, and the future of DNS.
