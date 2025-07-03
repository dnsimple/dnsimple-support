---
title: Supported DNS Records and DNS Record Types
excerpt: The list of DNS record types (RR) and DNS records supported by DNSimple.
meta: Explore the comprehensive list of DNS record types supported by DNSimple, including A, AAAA, CNAME, MX, and more, to enhance your domain management experience.
categories:
- DNS
---

# Supported DNS Records and DNS Record Types

### Table of Contents {#toc}

* TOC
{:toc}

---

The Domain Name System (DNS) is composed of several DNS record types, called resource records (RR). DNSimple supports several types, from common and traditional record types, to some newer types introduced to provide innovative services like [DNS Certification Authority Authorization](/articles/caa-record/).


## DNS Record Types

This is a list of the supported standard DNS record types:

- [A](/articles/a-record/)
- [AAAA](/articles/aaaa-record/)
- [CAA](/articles/caa-record/)
- [CNAME](/articles/cname-record/)
- HINFO
- [MX](/articles/mx-record/)
- NAPTR
- [NS](/articles/ns-record/)
- PTR
- [SRV](/articles/srv-record/)
- [SPF](/articles/spf-record/)
- SSHFP
- [TXT](/articles/txt-record/)

In addition, we support the following proprietary DNS record types:

- [ALIAS](/articles/alias-record/)
- [URL](/articles/url-record/)
- [POOL](/articles/pool-record/)

We support additional record types used behind the scenes to provide various DNS features:

- We automatically create the [SOA](/articles/soa-record/) record for you when you add a domain.
- We create `DS` and `DNSKEY` records when you [enable DNSSEC on a domain](/articles/dnssec/)


## Limitations

- **`CAA` records and integrated providers**: `CAA` records are only supported on DNSimple and via Secondary DNS. We currently don't support transferring `CAA` records to integrated providers via the Control Plane.

For more information about specific DNS record types, click on the links above to view detailed articles about each record type and how to configure them in DNSimple.
