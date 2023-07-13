---
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

DNSimple supports the ability to sync managed zones to [CoreDNS](https://coredns.io/).

## Prerequisites

One of the following:
- [DNSimple CoreDNS Binary](https://github.com/dnsimple/coredns-dnsimple/releases)
- [DNSimple CoreDNS Docker Container](https://hub.docker.com/r/dnsimple/coredns-dnsimple/tags)
- Administrator access to a DNSimple account

## Supported Features

- **Sync integrated zone records**: Sync your zone records from DNSimple to multiple CoreDNS instances and verify the sync state with the [Deployment Editor](/articles/deployment-editor#record-syncing).

The CoreDNS integrated provider supports one-way syncing of zone records configured at DNSimple. All records configured for the zone at DNSimple will be synced to CoreDNS on startup and again during each refresh interval. Zone records for any other integrated DNS provider must first be synced to DNSimple before they will be aviailable to CoreDNS instances.

#### Supported record types

All DNSimple record types can be synced to CoreDNS:

- A
- AAAA
- ALIAS
- CNAME
- MX
- NS
- POOL
- PTR
- SOA
- SPF
- SRV
- TXT
- URL

<note>
[Regional records](/articles/regional-records) are a custom DNSimple record feature and do not have an equivalent in CoreDNS. When synced from DNSimple to CoreDNS, you may specify one or more regions for an integrated zone in CoreDNS. More information about configuring zones with regional records can be found in the [coredns-dnsimple](https://github.com/dnsimple/coredns-dnsimple) documentation.
</note>
