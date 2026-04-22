---
title: DNSKEY Records Explained
excerpt: The DNSKEY record is the DNS record type that holds the DNSSEC public signing key used to verify digital signatures on DNS data.
meta: The DNSKEY record holds the DNSSEC public signing key. Learn how DNSKEY records work and their role in DNSSEC validation and the chain of trust.
categories:
- DNSSEC
---
# DNSKEY Records Explained

The DNSKEY record is the type of DNS record that holds the DNSSEC public signing key. Resolvers use this public key to verify the digital signatures ([RRSIG records](/articles/understanding-rrsets-rrsigs/#what-is-an-rrsig)) on your domain's DNS data, confirming that the information is authentic and has not been tampered with. DNSKEY records are the foundation of the [DNSSEC Chain of Trust](/articles/dnssec-chain-of-trust/).

## What type of DNS record holds the DNSSEC public signing key? {#what-type-of-dns-record-holds-the-dnssec-public-signing-key}

The DNSKEY record holds the DNSSEC public signing key. Each DNSSEC-enabled zone publishes one or more DNSKEY records containing the public portion of its cryptographic key pairs - a [Zone Signing Key (ZSK)](/articles/types-of-dnssec-keys/#zone-signing-key-zsk) that signs DNS data and a [Key Signing Key (KSK)](/articles/types-of-dnssec-keys/#key-signing-key-ksk) that signs the DNSKEY record set itself.

## What is the purpose of a DNSKEY record? {#what-is-the-purpose-of-a-dnskey-record}
A DNSKEY record serves two critical functions:
1. **Holding public keys:** It contains the public portion of the cryptographic key pairs used in DNSSEC. These public keys are essential for validating RRSIG records.
1. **Establishing the Chain of Trust:** DNSKEY RRSet is signed, creating a Chain of Trust that extends from your domain to the Internet's root zone.

## DNSKEY record structure {#dnskey-record-structure}
A DNSKEY record contains several key pieces of information:

- **Flags:** These numeric values indicate properties of the key, most notably whether it is a [Zone Signing Key (ZSK) or a Key Signing Key (KSK)](/articles/types-of-dnssec-keys/).
    - A flag value of 256 indicates a ZSK.
    - A flag value of 257 indicates a KSK.
- **Protocol: This field is always 3 for DNSSEC.**
- **Algorithm:** This numeric value specifies the cryptographic algorithm used with the key (e.g., 8 for RSA/SHA-256, 13 for ECDSA/P-256/SHA-256).
- **Public key:** This is the actual public key data, encoded in Base64. It is the core component that resolvers use to verify signatures.

## ZSK vs. KSK in DNSKEY records {#zsk-vs-ksk-in-dnskey-records}
A DNSKEY record can represent either a Zone Signing Key (ZSK) or a Key Signing Key (KSK). These keys have distinct roles, and this distinction is crucial to DNSSEC's operation.
- **Zone Signing Key (ZSK):** ZSKs are used to sign the bulk of your domain's resource records (A, MX, CNAME, etc.). Because they sign frequently changing data, ZSKs can be rotated relatively often. The DNSKEY record for a ZSK has a flag value of 256.
- **Key Signing Key (KSK):** KSKs have a higher level of trust. They are used to sign the DNSKEY record itself. This creates a "Chain of Trust." The public key hash of the KSK is published in a DS record at your parent zone (e.g., your registrar). This DS record is the crucial link that connects your domain's DNSSEC information to the parent zone, ultimately leading up to the Internet's root. The DNSKEY record for a KSK has a flag value of 257.

## How DNSKEY records enable validation {#how-dnskey-records-enable-validation}
Here is a simplified view of how DNSKEY records participate in the DNSSEC validation process:
1. A resolver queries for a DNS record (example: the A record for `www.example.com`).
1. The authoritative server responds with the A record and an RRSIG record. The RRSIG record contains a digital signature of the A record.
1. The resolver also receives the DNSKEY record for the ZSK.
1. The resolver uses the public key in the ZSK's DNSKEY record to verify the signature in the RRSIG record. If the signature is valid, this proves the A record is authentic and has not been modified.
1. To trust the ZSK, the resolver needs to trust the KSK. It retrieves the DNSKEY record for the KSK.
1. The resolver verifies the signature on the ZSK's DNSKEY record using the public key in the KSK's DNSKEY record.
1. The resolver then uses the DS record from the parent zone to validate the KSK. This is where the Chain of Trust connects to the parent zone.

## DNSKEY records and security {#dnskey-records-and-security}
DNSKEY records are at the heart of DNSSEC's security model. Protecting the private keys associated with DNSKEY records is paramount. 

If a private key is compromised, an attacker could forge signatures and potentially hijack your domain. That is why proper key management and rotation practices are essential.

## Learn more {#learn-more}

To learn more about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/). To understand how DS records connect DNSKEY records to the parent zone, see [What Are DS Records?](/articles/what-are-ds-records/). To explore DNSSEC terms and definitions, check out our [DNSSEC Glossary](/articles/dnssec-glossary/). For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
Ready to get started with DNSSEC? Read [Enable DNSSEC](/articles/enabling-dnssec/). If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we will be happy to help.
