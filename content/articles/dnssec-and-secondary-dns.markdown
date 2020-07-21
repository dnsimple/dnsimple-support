---
title: Why DNSSEC and Secondary DNS may not work together
excerpt: A detailed explanation as to why DNSSEC and Secondary DNS may not be compatible together.
categories:
- DNS
---

### Table of Contents {#toc}

* TOC
{:toc}

---

## Why won't DNSSEC and Secondary DNS work together?

Here is why DNSSEC and secondary DNS may not work together:

All authoritative name server responses should include the RR set signatures (RRSIG) corresponding to any published DNSKEY that is the Zone Signing Key (ZSK) type. This is necessary because a resolve could get the ZSK from one authoritative and the RRSIG from another authoritative. To include the RRSIG for all ZSK DNSKEYs, the authoritative name servers must have all private key material. We currently do not share private key material, and even if we did, AXFR does not support transferring private key material and thus key rotations would have to be done manually in a coordinate fashion.

Note that in practice, it is possible to run multi-provider DNSSEC without sharing ZSK private key material, however it is not guaranteed to work due to the condition described above with resolvers getting the DNSKEY and the RRset + RRSIG from different authoritative name servers.

You can read more information about multi-provider DNSSEC in this [Draft RFC here](https://tools.ietf.org/html/draft-ietf-dnsop-multi-provider-dnssec-05).
