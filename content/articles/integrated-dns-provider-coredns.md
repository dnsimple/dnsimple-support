---
meta: Sync your zones managed at DNSimple to one or more CoreDNS instances.
title: CoreDNS
excerpt: Sync your zones managed at DNSimple to one or more CoreDNS instances.
categories:
- DNS
- Integrations
---

# CoreDNS

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to sync managed zones to [CoreDNS](https://coredns.io/). The CoreDNS Integrated Provider is configured per zone and returns the current sync state for all zone records to the [Record Editor](/articles/record-editor-integrated-zones#record-syncing).

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/9yO2Oo_N1ms" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

<info>
The "Integrations" link in the navigation menu referenced in the video has been deprecated. After [connecting](/articles/integrated-dns-providers#connecting-an-integrated-dns-provider) CoreDNS to your DNSimple account as an Integrated DNS Provider, use the "DNS Zone Providers" card in the DNS section of your domain's management page to [add](/articles/integrated-dns-providers#adding-a-zone-to-an-integrated-dns-provider) or [delete](/articles/integrated-dns-providers#deleting-a-zone-from-an-integrated-dns-provider) CoreDNS configuration for a zone.
</info>


## Prerequisites

- CoreDNS binary compiled with the [coredns-dnsimple](https://github.com/dnsimple/coredns-dnsimple) plugin
  - [DNSimple CoreDNS Binary](https://github.com/dnsimple/coredns-dnsimple/releases)
  - [DNSimple CoreDNS Docker Container](https://hub.docker.com/r/dnsimple/coredns-dnsimple/tags)
- [Full access](/articles/domain-access-control/#full-access) to a DNSimple account

## Supported features

- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Record Editor](/articles/record-editor-integrated-zones).
- **Sync integrated zone records**: Sync your zone records from DNSimple to multiple CoreDNS instances, and verify the sync state with the [Record Editor](/articles/record-editor-integrated-zones#record-syncing).

The CoreDNS Integrated Provider supports one-way syncing of zone records configured at DNSimple. All records configured for the zone at DNSimple will be synced to CoreDNS on startup and again during each refresh interval. Zone records for any other Integrated DNS Provider must first be synced to DNSimple before they will be available to CoreDNS instances.

#### Supported record types

All DNSimple record types can be synced to CoreDNS:

- [A](/articles/a-record)
- [AAAA](/articles/aaaa-record)
- [ALIAS](/articles/alias-record)
- [CNAME](/articles/cname-record)
- HINFO
- [MX](/articles/mx-record)
- [NS](/articles/ns-record)
- [POOL](/articles/pool-record)
- PTR
- [SOA](/articles/soa-record)
- [SPF](/articles/spf-record)
- [SRV](/articles/srv-record)
- SSHFP
- [TXT](/articles/txt-record)
- [URL](/articles/url-record)
