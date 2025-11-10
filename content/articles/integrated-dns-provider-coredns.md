---
title: Integrated DNS Provider CoreDNS
excerpt: Sync your zones managed at DNSimple to one or more CoreDNS instances.
meta: Easily sync your DNSimple-managed zones with multiple CoreDNS instances, streamlining your DNS management for enhanced performance and reliability.
categories:
- DNS
- Integrations
---

# CoreDNS

### Table of Contents {#toc}

* TOC
{:toc}

---

This article serves as a reference for the prerequisites, supported features, and record types for connecting CoreDNS as an Integrated DNS Provider (/articles/what-are-integrated-providers/).

## Prerequisites

- CoreDNS binary compiled with the [coredns-dnsimple](https://github.com/dnsimple/coredns-dnsimple) plugin
  - [DNSimple CoreDNS Binary](https://github.com/dnsimple/coredns-dnsimple/releases)
  - [DNSimple CoreDNS Docker Container](https://hub.docker.com/r/dnsimple/coredns/tags)
- [Full access](/articles/domain-access-control/#full-access) to a DNSimple account

## Supported features

- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Record Editor](/articles/record-editor-integrated-zones/).
- **Sync integrated zone records**: Sync your zone records from DNSimple to multiple CoreDNS instances, and verify the sync state with the [Record Editor](/articles/record-editor-integrated-zones/#record-syncing).

The CoreDNS Integrated Provider supports one-way syncing of zone records configured at DNSimple. All records configured for the zone at DNSimple will be synced to CoreDNS on startup and again during each refresh interval. Zone records for any other Integrated DNS Provider must first be synced to DNSimple before they will be available to CoreDNS instances.

## Supported record types

All DNSimple record types can be synced to CoreDNS:

- [A](/articles/a-record/)
- [AAAA](/articles/aaaa-record/)
- [ALIAS](/articles/alias-record/)
- [CAA](/articles/caa-record/)
- [CNAME](/articles/cname-record/)
- [HINFO](/articles/hinfo-records/)
- [MX](/articles/mx-record/)
- [NS](/articles/ns-record/)
- [POOL](/articles/pool-record/)
- [PTR](/articles/reverse-dns-ptr-records/)
- [SOA](/articles/soa-record/)
- [SPF](/articles/spf-record/)
- [SRV](/articles/srv-record/)
- [SSHFP](/articles/sshfp-records/)
- [TXT](/articles/txt-record/)
- [URL](/articles/url-record/)

## Have more questions?
If you have additional questions or need any assistance with your Integrated DNS Providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
