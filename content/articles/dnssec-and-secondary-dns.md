---
title: Why DNSSEC and Secondary DNS May Not Work Together
excerpt: A detailed explanation as to why DNSSEC and Secondary DNS may not be compatible together.
meta: Understand why DNSSEC and secondary DNS may conflict. Learn about zone signing, key material, and compatibility issues between these DNS security features.
categories:
- DNS
---

# Why DNSSEC and Secondary DNS May Not Work Together

While both [DNSSEC (DNS Security Extensions)](/articles/what-is-dnssec/) and [secondary DNS](/articles/secondary-dns/) are used to enhance DNS resilience, they are not always compatible. This is because the standard methods used for secondary DNS may conflict with the security requirements of DNSSEC, leading to potential resolution failures.

The core issue lies in how DNSSEC signs records and how secondary DNS servers receive them.

## The challenge: zone signing and key material

For DNSSEC to function correctly, every authoritative name server for a domain **must** be able to respond with a valid signature for every record it serves. This signature, known as an [RRSIG](/articles/dnssec-glossary/#rrsig), is generated using a private key (a [Zone Signing Key](/articles/types-of-dnssec-keys/#zone-signing-key-zsk) or ZSK).

The problem arises when a DNS resolver (the client making the query) gets the [DNSKEY](/articles/dnskey-records-explained/) from one authoritative name server and the RRSIG from a different authoritative name server. Both servers must be able to sign with the same private key and must have access to that private key material.

## The conflict with secondary DNS

Secondary DNS servers typically get their zone data from a primary server using a process called a zone transfer (**AXFR** or **IXFR**). These transfer protocols, however, **do not support transferring private key material**.

This creates a critical conflict:

- The primary server has the private keys and can sign the zone.
- The secondary server receives the zone data and RRSIGs, but **it doesn't have the private keys itself**.
- In a scenario where the primary server goes offline and a record signature expires, the secondary server cannot re-sign the record, potentially causing a DNSSEC validation failure.

While it's technically possible to set up a multi-provider DNSSEC configuration without sharing private keys, this is not a guaranteed solution. DNS resolvers may still encounter situations where the DNSKEY they cached from one provider doesn't match the RRSIG they receive from another, leading to a validation error and a broken DNSSEC chain.

For a deeper dive into multi-provider DNSSEC, refer to [RFC 8901](https://datatracker.ietf.org/doc/html/rfc8901).

## Learn more

To enable DNSSEC for your domain, see [Enabling DNSSEC](/articles/enabling-dnssec/). If you encounter issues with your DNSSEC configuration, see [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance. For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
If you have additional questions or need any assistance with secondary DNS or DNSSEC, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
