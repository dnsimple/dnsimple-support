---
title: How ALIAS Records Resolve with Secondary DNS
excerpt: How DNSimple resolves ALIAS records into A and AAAA records before zone transfers to secondary DNS servers.
meta: When DNSimple is the primary for secondary DNS, ALIAS records are resolved to A and AAAA records, refreshed on a schedule, and pushed to secondaries with NOTIFY.
categories:
- DNS
- Secondary DNS
---

# How ALIAS Records Resolve with Secondary DNS

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple [ALIAS records](/articles/alias-record/) provide dynamic resolution for apex domains. When secondary DNS servers pull your zone from DNSimple over AXFR, ALIAS cannot be transferred as a standard record type. DNSimple resolves each ALIAS to A and AAAA addresses, then transfers those addresses to your secondary servers.

## The challenge with secondary DNS and ALIAS records {#challenge}

Traditional records such as [A](/articles/a-record/), [MX](/articles/mx-record/), or [TXT](/articles/txt-record/) are static and transfer directly during AXFR. An ALIAS record is virtual: DNSimple looks up the target in real time and returns A or [AAAA](/articles/aaaa-record/) answers.

Because ALIAS is not a transferable standard type, DNSimple cannot send the ALIAS rule itself. It resolves the ALIAS to IP addresses and transfers those resolved records instead.

## How DNSimple keeps secondary servers up to date {#refresh}

When you configure outbound secondary DNS (DNSimple as primary) for a zone that has ALIAS records, DNSimple:

1. **Resolves ALIAS records at setup** - Writes the resulting A and AAAA records into the zone transfer data that secondaries pull.
1. **Re-resolves when the TTL expires** - Checks each zone every few minutes and re-resolves its ALIAS records once the shortest ALIAS TTL in that zone has elapsed. A lower TTL on your ALIAS record means more frequent refreshes.
1. **Updates transfer data** - Removes stale A and AAAA addresses for that ALIAS and writes the new ones.
1. **Sends NOTIFY** - Notifies configured secondary name servers so they can start a new AXFR or IXFR and pick up the updated addresses.

This keeps secondary servers aligned with the latest ALIAS resolution while you use secondary DNS for redundancy. See [Add a secondary DNS server to DNSimple](/articles/secondary-dns/) and [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/).

## Have more questions?

If you have questions about ALIAS records and secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
