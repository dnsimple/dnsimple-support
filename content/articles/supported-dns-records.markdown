---
title: Supported DNS Record Types
excerpt: The list of DNS record types (RR) supported by DNSimple.
categories:
- DNS
---

# Supported DNS Record Types

We currently support the following standard record types:

- [A](/articles/a-record)
- AAAA
- [CAA](/articles/caa-record) (see note below)
- [CNAME](/articles/cname-record)
- [MX](/articles/mx-record)
- [NS](/articles/ns-record)
- TXT
- [SPF](/articles/spf-record)
- [SRV](/articles/srv-record)
- NAPTR
- HINFO
- SSHFP

We also support several special record types:

- [ALIAS](/articles/alias-record)
- [URL](/articles/url-record)
- [POOL](/articles/pool-record)

Finally, we automatically add your [SOA](/articles/soa-record) record for you when you add a domain.

<note>
CAA records are only supported on the DNSimple primary name servers (ns1.dnsimple.com through ns4.dnsimple.com). We currently do not support transferring CAA records to secondary name servers.
</note>
