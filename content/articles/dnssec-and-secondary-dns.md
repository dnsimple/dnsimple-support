---
title: Why DNSSEC and Secondary DNS May Not Work Together
excerpt: Why DNSSEC and secondary DNS can conflict, and how inbound vs outbound AXFR differ at DNSimple.
meta: DNSSEC and secondary DNS may conflict because zone transfers do not carry private key material, and DNSimple does not transfer RRSIG records over AXFR.
categories:
- DNS
- DNSSEC
- Secondary DNS
---

# Why DNSSEC and Secondary DNS May Not Work Together

### Table of Contents {#toc}

* TOC
{:toc}

---

[DNSSEC (DNS Security Extensions)](/articles/what-is-dnssec/) and [secondary DNS](/articles/secondary-dns/) both strengthen DNS, but they are not always compatible. Zone transfers used for secondary DNS can conflict with how DNSSEC signs records, which can cause resolution failures for DNSSEC-aware resolvers.

## The challenge: zone signing and key material {#zone-signing}

For DNSSEC to work, resolvers must verify a trust chain for at least one of the [DS records](/articles/what-are-ds-records/) in the parent zone. Every authoritative name server in the delegation must serve valid [DNSKEY](/articles/dnskey-records-explained/) and [RRSIG](/articles/dnssec-glossary/#rrsig) records.

## The conflict with secondary DNS {#conflict}

Secondary servers usually receive zone data from a primary using a zone transfer (**AXFR** or **IXFR**). Those transfers have important limits:

- DNSimple does not transfer RRSIG records over AXFR zone transfers.
- These transfer protocols do not support transferring private key material.

As a result, the primary can serve DNSKEY and RRSIG records, but a secondary that only receives unsigned data cannot serve the RRSIG records needed for DNSSEC.

A common workaround is for each provider in the delegation to maintain its own trust chain so resolvers can verify at least one chain. At DNSimple that has important caveats:

- **Inbound AXFR** (DNSimple as secondary) replaces the whole zone. Existing DNSKEY and RRSIG records would be lost. DNSimple does not allow enabling DNSSEC and inbound AXFR secondary DNS at the same time.
- **Outbound AXFR** (DNSimple as primary) is not hard-blocked when DNSSEC is enabled, but DNSimple cannot guarantee how third-party secondaries treat DNSKEY and RRSIG records. For multi-provider DNSSEC to work, those secondaries must keep the records required for their trust chain.

For multi-provider DNSSEC design, see [RFC 8901](https://datatracker.ietf.org/doc/html/rfc8901).

## Learn more {#learn-more}

- [Enable DNSSEC](/articles/enabling-dnssec/)
- [Troubleshoot DNSSEC](/articles/troubleshooting-dnssec-configurations/)
- [DNS Security Extensions (DNSSEC) at DNSimple](/articles/dnssec/)
- [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/)

## Have more questions?

If you have additional questions about secondary DNS or DNSSEC, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
