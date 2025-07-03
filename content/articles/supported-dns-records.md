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

- [A](/articles/a-record/) (type 1)
- [AAAA](/articles/aaaa-record/) (type 28)
- [CAA](/articles/caa-record/) (type 257)
- [CNAME](/articles/cname-record/) (type 5)
- HINFO (type 13)
- [MX](/articles/mx-record/) (type 15)
- NAPTR (type 35)
- [NS](/articles/ns-record/) (type 2)
- PTR (type 12)
- [SRV](/articles/srv-record/) (type 33)
- [SPF](/articles/spf-record/) (type 99)
- SSHFP (type 44)
- [TXT](/articles/txt-record/) (type 16)

Additionally, we support the following proprietary DNS record types:

- [ALIAS](/articles/alias-record/)
- [URL](/articles/url-record/)
- [POOL](/articles/pool-record/)

Other record types are used behind the scenes to provide core DNS features:

- [SOA](/articles/soa-record/) (type 6): Automatically created when you add a domain.
- DS (type 43), DNSKEY (type 48): Automatically created when you [enable DNSSEC on a domain](/articles/dnssec/).

## DNS Records

Some DNS records have their own semantics but are defined using existing record types. These include:

- SPF (defined as a TXT record)
- DKIM (defined as a TXT record)

## Limitations

- **CAA records and integrated providers**: CAA records are only supported on DNSimple and via Secondary DNS. They are not currently supported for transfer to integrated providers via the Control Plane.

For more information about each DNS record type, click the links above to view detailed articles and configuration instructions.
