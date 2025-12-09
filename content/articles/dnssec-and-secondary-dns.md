---
title: Why DNSSEC and Secondary DNS May Not Work Together
excerpt: A detailed explanation as to why DNSSEC and Secondary DNS may not be compatible together.
meta: Understand why DNSSEC and secondary DNS may conflict. Learn about zone signing, key material, and compatibility issues between these DNS security features.
categories:
- DNS
- DNSSEC
- Secondary DNS
---

# Why DNSSEC and Secondary DNS May Not Work Together

While both [DNSSEC (DNS Security Extensions)](/articles/what-is-dnssec/) and [secondary DNS](/articles/secondary-dns/) are used to enhance DNS resilience, they are not always compatible. This is because the standard methods used for secondary DNS may conflict with the security requirements of DNSSEC, leading to potential resolution failures.

The core issue lies in how DNSSEC signs records and how secondary DNS servers receive them.

## The challenge: zone signing and key material

For DNSSEC to function correctly, DNS resolvers (the clients making the query) must be able to verify the trust-chain associated with at least one of the [DS records](/articles/what-are-ds-records/) present in the parent zone for a domain name. For this, all authoritative name servers involved in the domain's delegation must provide valid [DNSKEY](/articles/dnskey-records-explained/) and [RRSIG records](/articles/dnssec-glossary/#rrsig).

## The conflict with secondary DNS

DNS servers typically get their zone data from a primary server using a process called a zone transfer (**AXFR** or **IXFR**), which comes with some crucial limitations:
- Our system doesn't transfer RRSIG records over AXFR zone transfers.
- These transfer protocols **do not support transferring private key material**

As a consequence, the primary server is always able to provide all the necessary DNSKEY and RRSIG records, but the secondary server will not be able provide RRSIG records, breaking DNSSEC.

A workaround for this is to ensure all providers involved in the domain's delegation maintain their own trust chain, ensuring that DNS resolvers will always be able to verify at least one of the available trust-chains, with some caveats:
- Our Inbound AXFR service replaces the whole zone, which means that any existing DNSKEY and RRSIG records would be lost. This is why we currently don't allow enabling DNSSEC and Inbound AXFR Secondary DNS at the same time.
- We can't guarantee the behavior of secondaries receiving Outbound AXFR zone transfers from us. For this workaround to work, they must not remove the DNSKEY and RRSIG records required to support their trust-chain. 

For a deeper dive into multi-provider DNSSEC, refer to [RFC 8901](https://datatracker.ietf.org/doc/html/rfc8901).

## Learn more

To enable DNSSEC for your domain, see [Enabling DNSSEC](/articles/enabling-dnssec/). If you encounter issues with your DNSSEC configuration, see [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance. For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
If you have additional questions or need any assistance with secondary DNS or DNSSEC, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
