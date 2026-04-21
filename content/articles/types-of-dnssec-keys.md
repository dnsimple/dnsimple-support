---
title: What Are the Types of DNSSEC Keys?
excerpt: DNSSEC uses two key types - a Zone Signing Key (ZSK) that signs DNS records and a Key Signing Key (KSK) that signs the DNSKEY record set.
meta: Learn about the two types of DNSSEC keys - the Zone Signing Key (ZSK) and Key Signing Key (KSK) - how they hold the public signing key, and why both are needed.
categories:
- DNSSEC
---
 
# What Are the Types of DNSSEC Keys?
When you enable DNSSEC, your domain is protected using two types of keys that work together to keep your DNS information trusted and secure.

## Zone Signing Key (ZSK)
The Zone Signing Key is used to sign your domain's DNS records, like A, MX, and CNAME records.

This allows DNS resolvers to check that your DNS information hasn't been tampered with and is coming from the correct source.

## Key Signing Key (KSK)
The Key Signing Key signs your [DNSKEY record](/articles/dnskey-records-explained/), which contains the public part of both your ZSK and KSK.

This signature allows DNS resolvers to verify that the keys protecting your domain can be trusted.

It also connects your domain to the global [DNSSEC chain of trust](/articles/dnssec-chain-of-trust/):
- Your domain's parent zone (like .com, .org, etc.) stores a DS record that points to your KSK.
- When a DNS resolver looks up your domain, it first checks this DS record to confirm it can trust your KSK.
- Once the resolver trusts your KSK, it can then trust your ZSK and, in turn, trust your DNS records.

## Learn more

To learn more about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/). To understand how DS records connect your KSK to the parent zone, see [What Are DS Records?](/articles/what-are-ds-records/). For information about DNSSEC key rotation, see [Rotate DNSSEC Keys](/articles/rotate-dnssec-key/). For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
If you want to explore more DNSSEC terms, take a look at our [DNSSEC Glossary](/articles/dnssec-glossary/). Ready to get started with DNSSEC? Read [Enable DNSSEC](/articles/enabling-dnssec/). If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
