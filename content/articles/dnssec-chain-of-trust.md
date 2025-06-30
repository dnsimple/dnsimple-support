---
title: The DNSSEC Chain of Trust
excerpt: Explains the DNSSEC Chain of Trust.
meta: Learn what the DNSSEC Chain of Trust is and why it's critical to DNSSEC.
categories:
  - DNSSEC
---
# The DNSSEC Chain of Trust
The Chain of Trust is the fundamental mechanism that lets DNSSEC-aware resolvers verify the authenticity and integrity of DNS data cryptographically. It ensures the information they receive hasn't been tampered with and comes from a trusted, authoritative source.

## What is the DNSSEC Chain of Trust?
The DNSSEC Chain of Trust is a cryptographic pathway that follows the hierarchical structure of the Internet's DNS. It's a series of digital signatures that link each level of the DNS system, from the root zone down to Top-Level Domains (TLDs) and individual domains, through all the steps in between.

By meticulously linking each level of the domain name hierarchy with digital signatures, it provides a verifiable path from a universally trusted anchor all the way down to your individual domain's records. This creates an unbroken chain of cryptographic verification essential for preventing DNS tampering, ensuring data integrity, and building trust in the internet's naming system.

## Why is a Chain of Trust needed?
Without a chain of trust, a DNSSEC-validating resolver wouldn't know where to begin trusting DNS data.

### The chain ensures:

**Authenticity:** Each zone in the delegation chain uses its private key to sign its DNS data to provide proof of origin.
**Integrity**: Data hasn't been altered in transit.
**Verifiability:** Resolvers can validate the data they receive by verifying it against its expected authoritative origin.

## How the Chain of Trust works
The Chain of Trust operates through the interplay of two key DNSSEC record types: DNSKEY records and DS records, established with a Trust Anchor.

1. **The Trust Anchor (The Root of Trust)**

    The journey begins with a Trust Anchor, which is a public cryptographic key. A DNSSEC-validating resolver is pre-configured to implicitly trust this key.
The most crucial Trust Anchor is the public Key Signing Key (KSK) for the DNS root zone ( . ). Most validating resolvers globally have this key built in. This Trust Anchor is the ultimate "point of known goodness" from which all other validations extend.

1. **Signing at each level (DNSKEY and RRSIG)**

    Each DNSSEC-enabled zone (such as the root, a TLD, or your domain) has its public key stored in DNSKEY records. The corresponding private key is used to generate RRSIG records, which are cryptographic signatures over the zone's data (specifically, its RRSETs, or resource record sets).

1. **Delegating trust down the hierarchy (DS records)**

    DNSSEC relies on a chain of trust that extends from the root of the DNS hierarchy down to individual domains. This chain is established through the use of Delegation Signer (DS) records.

1. **Setting up trust (the role of DS records in secure delegation)**

    A parent zone doesn't directly sign the child zone's data. Instead, to establish a secure delegation, the parent zone signs a cryptographic digest (a hash) of the child zone's KSK. This summary is called a DS record.

    - **Child zone action:** The operator of the child zone (e.g., example.com) generates a KSK then calculates a cryptographic digest of this KSK.
    - **Parent zone action:** This digest is then provided to the parent zone (e.g., .com). The parent zone publishes this digest as a DS record within its own zone file and signs it with its own Key Signing Key. This DS record effectively acts as a secure "pointer" to the child zone's KSK.
    - **Chain establishment:** This process is repeated down the hierarchy. The root zone publishes DS records for TLDs like .com, and TLDs like .com publish DS records for second-level domains like example.com.

1. **Processing a DNSSEC-aware request (how a resolver verifies trust)**

    When a DNSSEC-validating resolver receives a request for a domain, it uses this established chain of trust to verify the authenticity of the DNS data. The verification process flows as follows:

    - **Trusting the root:** A DNSSEC-validating resolver starts by implicitly trusting the root zone's Trust Anchor (a pre-configured cryptographic key).
    - **Verifying the TLD:** The resolver queries for the `.com` TLD's DNSKEY. Simultaneously, it fetches the DS record for .com from the root zone. The resolver uses the root's Trust Anchor to verify the root's signature on the `.com` DS record. This verified DS record then cryptographically points the resolver to the correct DNSKEY record for the `.com` zone.
    - **Verifying your domain:** The resolver, now trusting the .com zone (because its DNSKEY was validated via the root's DS record), queries for your domain's (`example.com`) DNSKEY. It also fetches the DS record for `example.com` from the `.com` zone. The resolver then verifies the `.com`'s signature on the `example.com` DS record. This validated example.com DS record then points the resolver to the correct DNSKEY records for your example.com zone.
    - **Verifying data**: Finally, your `example.com` zone uses its DNSKEY records to sign its regular DNS data (like A, MX, CNAME records) with RRSIG records. The resolver can now use your domain's validated DNSKEY to verify the RRSIGs on your data, ensuring its authenticity and integrity.

## Why the chain must remain unbroken
If any link in this chain breaks — for example, if a DS record points to an incorrect DNSKEY, or if a signature is missing or invalid — DNSSEC-aware resolvers won't be able to verify the data. They will consider it untrustworthy and won't provide it to the end-user. This can prevent them from reaching your website or service.

## Have more questions?
If you want to explore more DNSSEC terms, take a look at our [DNSSEC Glossary](/articles/dnssec-glossary/). Ready to get started with DNSSEC? Read [Enabling DNSSEC](/articles/enabling-dnssec/). If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
