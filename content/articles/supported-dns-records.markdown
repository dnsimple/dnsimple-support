---
title: Supported DNS Record Types
excerpt: The list of DNS record types (RR) supported by DNSimple.
categories:
- DNS
---

# Supported DNS Record Types

### Table of Contents {#toc}

* TOC
{:toc}

---

The Domain Name System (DNS) is composed by several record types, technically called resource records. DNSimple supports the most common and traditional record types, as well some newer types introduced to provide innovative services like [DNS Certification Authority Authorization](/articles/caa-record).


## Supported Records

We currently support the following standard record types:

- [A](/articles/a-record)
- AAAA
- [CAA](/articles/caa-record) (see note below)
- [CNAME](/articles/cname-record)
- HINFO
- [MX](/articles/mx-record)
- NAPTR
- [NS](/articles/ns-record)
- PTR
- [SRV](/articles/srv-record)
- [SPF](/articles/spf-record)
- SSHFP
- TXT

We also created 3 special record types:

- [ALIAS](/articles/alias-record)
- [URL](/articles/url-record)
- [POOL](/articles/pool-record)

Finally, we support additional record type used behind the scenes to provide various DNS features:

- We automatically create the [SOA](/articles/soa-record) record for you when you add a domain.
- We create `DS` and `DNSKEY` records when you [enable DNSSEC on a domain](/articles/dnssec)


## Limitations

<note>
CAA records are only supported on the DNSimple primary name servers (ns1.dnsimple.com through ns4.dnsimple.com). We currently do not support transferring CAA records to secondary name servers.
</note>
