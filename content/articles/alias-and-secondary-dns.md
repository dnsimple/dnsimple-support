---
title: How ALIAS Records Resolve with Secondary DNS
excerpt: How DNSimple ensures ALIAS resolution on secondary servers.
meta: Learn more about how DNSimple's special handling process to ensure your secondary servers always have the most up-to-date IP addresses.
categories:
- DNS
---

# How ALIAS Records Resolve with Secondary DNS
DNSimple's [ALIAS records](/articles/alias-record/) provide dynamic resolution for your apex domains, a feature unique to our platform. When you use secondary DNS servers that pull your zone data from DNSimple (often via AXFR or "zone transfers"), the dynamic nature of ALIAS records requires a special handling process to ensure your secondary servers always have the most up-to-date IP addresses.

## The challenge with secondary DNS and ALIAS records
Traditional DNS records like [A](/articles/a-record/), [MX](/articles/mx-record/), or [TXT](/articles/txt-record/) are static entries that are directly transferred to secondary DNS servers during a zone transfer (e.g., using AXFR). However, an ALIAS record is a virtual record type that performs a real-time lookup on _DNSimple's name servers_ to return an A or [AAAA record](/articles/aaaa-record/). Because the ALIAS record itself isn't a standard, transferable DNS record, we cannot simply send the ALIAS "rule" to your secondary DNS servers. Instead, we must resolve the ALIAS to its actual IP addresses (A or AAAA records) and then transfer _those_ resolved records.

## How DNSimple ensures ALIAS resolution on secondary servers
To maintain seamless operation and ensure your secondary DNS servers always serve the correct, current IP addresses for your ALIAS records, DNSimple implements a specific resolution and update mechanism:

1. **Initial resolution during setup:** When you configure secondary DNS for your zone with DNSimple, we perform an initial resolution of all ALIAS records. The resulting A or AAAA records are then written into a specialized zone transfer database, ready to be pulled by your secondary name servers.
1. **Scheduled updates for relevance:** Since the IP address an ALIAS record points to can change (e.g., if your target service's IP addresses rotate), DNSimple runs a **scheduled job** to periodically re-resolve your ALIAS records.
1. **Dynamic record management:** During this scheduled update:
    - The ALIAS record is resolved again to its current IPv4 and IPv6 addresses.
    - Any old, outdated A or AAAA records for that ALIAS in our zone transfer database are removed.
    - The newly resolved A or AAAA records are then written into the zone transfer database.
1. **Immediate notification (NOTIFY):** After updating the records in our zone transfer database, DNSimple sends a **NOTIFY message** to the appropriate secondary name servers configured for your zone. This message signals to your secondary servers that a change has occurred and prompts them to initiate a new zone transfer (AXFR or IXFR) to pull the updated records. This ensures that the IP addresses served by your secondary DNS servers remain synchronized with the latest resolution of your ALIAS record.

This proactive approach ensures that even when using secondary DNS, the dynamic nature of ALIAS records is fully supported, providing reliable and up-to-date name resolution for your domain.

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
