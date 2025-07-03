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

The Domain Name System (DNS) is composed of several DNS record types, called resource records (RR). DNSimple supports a wide range of these types, from the most common and traditional records to newer types introduced to provide innovative services like [DNS Certification Authority Authorization](/articles/caa-record/).

## DNS Record Types

Here is a list of the standard DNS record types supported:

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

Additionally, we support the following proprietary DNS record types:

- [ALIAS](/articles/alias-record/)
- [URL](/articles/url-record/)
- [POOL](/articles/pool-record/)

Other record types are used behind the scenes to provide core DNS features:

- [SOA](/articles/soa-record/): Automatically created when you add a domain.
- DS, DNSKEY: Automatically created when you [enable DNSSEC on a domain](/articles/dnssec/).

## DNS Records

Some DNS records have their own semantics but are defined using existing record types. These include:

- SPF (defined as a TXT record)
- DKIM (defined as a TXT record)

## Limitations

- **CAA records and integrated providers**: CAA records are only supported on DNSimple and via Secondary DNS. They are not currently supported for transfer to integrated providers via the Control Plane.

For more information about each DNS record type, click the links above to view detailed articles and configuration instructions.
