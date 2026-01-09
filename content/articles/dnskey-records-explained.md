---
title: DNSKEY Records Explained
excerpt: Explains DNSKEY records and their importance.
meta: Learn the purpose and structure of DNSKEY records and how they enable validation.
categories:
- DNSSEC
---
# DNSKEY Records Explained

In DNSSEC, DNSKEY records are fundamental. They hold the public keys that are used to verify the digital signatures [(RRSIG records)](/articles/understanding-rrsets-rrsigs/#what-is-an-rrsig) of your domain's DNS data. This allows resolvers to confirm that the information they receive is authentic and hasn't been tampered with.

DNSKEY records are the cornerstone of trust in DNSSEC. Understanding the structure and function of DNSKEY records, especially the distinction between ZSKs and KSKs, is crucial for anyone working with or managing DNSSEC-secured domains. They're the foundation upon which the entire [Chain of Trust](/articles/dnssec-chain-of-trust/) is built.

## What is the purpose of a DNSKEY record?
A DNSKEY record serves two critical functions:
1. **Holding public keys:** It contains the public portion of the cryptographic key pairs used in DNSSEC. These public keys are essential for validating RRSIG records.
1. **Establishing the Chain of Trust:** DNSKEY RRSet is signed, creating a Chain of Trust that extends from your domain to the Internet's root zone.

## DNSKEY record structure
A DNSKEY record contains several key pieces of information:

- **Flags:** These numeric values indicate properties of the key, most notably whether it's a [Zone Signing Key (ZSK) or a Key Signing Key (KSK)](/articles/types-of-dnssec-keys/).
    - A flag value of 256 indicates a ZSK.
    - A flag value of 257 indicates a KSK.
- **Protocol: This field is always 3 for DNSSEC.**
- **Algorithm:** This numeric value specifies the cryptographic algorithm used with the key (e.g., 8 for RSA/SHA-256, 13 for ECDSA/P-256/SHA-256).
- **Public key:** This is the actual public key data, encoded in Base64. It's the core component that resolvers use to verify signatures.

## ZSK vs. KSK in DNSKEY records
A DNSKEY record can represent either a Zone Signing Key (ZSK) or a Key Signing Key (KSK). These keys have distinct roles, and this distinction is crucial to DNSSEC's operation.
- **Zone Signing Key (ZSK):** ZSKs are used to sign the bulk of your domain's resource records (A, MX, CNAME, etc.). Because they sign frequently changing data, ZSKs can be rotated relatively often. The DNSKEY record for a ZSK has a flag value of 256.
- **Key Signing Key (KSK):** KSKs have a higher level of trust. They're used to sign the DNSKEY record itself. This creates a "Chain of Trust." The public key hash of the KSK is published in a DS record at your parent zone (e.g., your registrar). This DS record is the crucial link that connects your domain's DNSSEC information to the parent zone, ultimately leading up to the Internet's root. The DNSKEY record for a KSK has a flag value of 257.

## How DNSKEY records enable validation
Here's a simplified view of how DNSKEY records participate in the DNSSEC validation process:
1. A resolver queries for a DNS record (example: the A record for `www.example.com`).
1. The authoritative server responds with the A record and an RRSIG record. The RRSIG record contains a digital signature of the A record.
1. The resolver also receives the DNSKEY record for the ZSK.
1. The resolver uses the public key in the ZSK's DNSKEY record to verify the signature in the RRSIG record. If the signature is valid, this proves the A record is authentic and hasn't been modified.
1. To trust the ZSK, the resolver needs to trust the KSK. It retrieves the DNSKEY record for the KSK.
1. The resolver verifies the signature on the ZSK's DNSKEY record using the public key in the KSK's DNSKEY record.
1. The resolver then uses the DS record from the parent zone to validate the KSK. This is where the Chain of Trust connects to the parent zone.

## DNSKEY records and security
DNSKEY records are at the heart of DNSSEC's security model. Protecting the private keys associated with DNSKEY records is paramount. 

If a private key is compromised, an attacker could forge signatures and potentially hijack your domain. That's why proper key management and rotation practices are essential.

## Learn more

To learn more about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/). To understand how DS records connect DNSKEY records to the parent zone, see [What Are DS Records?](/articles/what-are-ds-records/). To explore DNSSEC terms and definitions, check out our [DNSSEC Glossary](/articles/dnssec-glossary/). For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
Ready to get started with DNSSEC? Read [Enabling DNSSEC](/articles/enabling-dnssec/). If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
