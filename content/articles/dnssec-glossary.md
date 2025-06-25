---
title: DNSSEC Glossary
excerpt: Defines terms related to DNSSEC.
categories:
- DNSSEC
---
# DNSSEC Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

## Core Concepts

### DNSSEC
DNSSEC (Domain Name System Security Extensions) is a suite of protocols that add cryptographic signatures to DNS responses, enabling resolvers to verify data integrity and authenticity. When a zone is DNSSEC-enabled, each resource record set (RRset) is signed with a private key, and a corresponding public key is published in a DNSKEY record. Resolvers fetch these keys and verify RRSIG signatures, ensuring that DNS answers have not been altered or spoofed.

**Learn more:**
[RFC 9364](https://datatracker.ietf.org/doc/rfc9364/)
[HowDNSSEC.works](https://howdnssec.works/)

### Chain of Trust
The DNSSEC chain of trust is a hierarchical validation process that starts at a trusted anchor (usually the root's public key) and follows a series of cryptographic signatures down to the queried domain. Each zone's DNSKEY set is signed by a parent zone's DS record, which itself is signed by its parent, and so on up to the root. By verifying each signature in turn, resolvers ensure that DNS data has not been tampered with.

**Learn more:**
[ICANN DNSSEC Intro](https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en#keys)
[HowDNSSEC.works: Trust the Hierarchy](https://howdnssec.works/trust-the-hierarchy/)

### Trust Anchor
A DNSSEC Trust Anchor is a known, securely distributed public key that resolvers use as the starting point for validating DNSSEC signatures. Typically anchored at the root zone, this key establishes the first link in the chain of trust. When a resolver encounters a DNSSEC-signed record, it verifies the signature by following the chain of DS and DNSKEY records up to the trust anchor. If each signature validates correctly against this anchor, the resolver can trust the integrity of the DNS data.

**Learn more:**
[RFC 9718](https://datatracker.ietf.org/doc/rfc9718/)
[IANA Trust Anchors](https://www.iana.org/dnssec/files)

## Record Types & Signing

### RRSet
An RRSet (Resource Record Set) is a collection of DNS records in a zone that share the same name, type, and class. For example, the A records for “www.dnsimple.com” form an RRSet. DNSSEC treats each RRSet as a single cryptographic unit: the zone's private key signs the entire set, producing an RRSIG record. When resolvers query a signed zone, they fetch both the RRSet and its corresponding RRSIG to verify authenticity and integrity.

**Learn more:** 
[RFC 4034 §2.1](https://datatracker.ietf.org/doc/html/rfc4034#page-4)

### RRSIG
An RRSIG (Resource Record Signature) is a DNS record type used by DNSSEC to authenticate the integrity of an entire RRSet. When a zone is signed, the zone-signing key's private component cryptographically signs each group of same-type records, producing an RRSIG record. Resolvers retrieve both the RRSet and its RRSIG, then use the corresponding public key (from a DNSKEY record) to verify that the data has not been altered in transit.

**Learn more:** 
[RFC 4034 §3](https://datatracker.ietf.org/doc/html/rfc4034#section-3)

### DNSKEY
A DNSKEY record holds the public key used by DNSSEC to verify cryptographic signatures on DNS data. When a zone is signed, its private key signs each RRSet, producing corresponding RRSIG records. Resolvers fetch the DNSKEY public key and use it to decrypt the RRSIG's signature, confirming that the data has not been tampered with. By publishing and validating DNSKEY entries, DNSSEC ensures the authenticity and integrity of DNS responses.

**Learn more:** 
[RFC 4034 §2](https://datatracker.ietf.org/doc/html/rfc4034#section-2)

### DS 
A DS (Delegation Signer) record is a DNSSEC resource record stored in a parent zone that contains a cryptographic hash of a child zone's DNSKEY. When a resolver follows the chain of trust, it retrieves the DS from the parent and compares it against the DNSKEY published in the child zone. If the hashes match, the resolver can trust the child's DNSKEY and continue verifying signatures down the hierarchy. DS records enable secure delegation by linking parent and child zones without exposing the child's public key directly.

**Learn more:** 
[RFC 4034 §5](https://datatracker.ietf.org/doc/html/rfc4034#section-5)
[Managing DS records at dnsimple.com](/articles/manage-ds-record/)

## Key Management

### ZSK
A ZSK (Zone-Signing Key) is a DNSSEC key pair used to sign all resource record sets (RRSets) within a specific DNS zone. The private component of the ZSK creates cryptographic signatures (RRSIG records) for each RRSet, while the corresponding public key is published in a DNSKEY record. When a resolver queries a signed zone, it fetches the RRSet, its RRSIG, and the ZSK's public DNSKEY to verify that the data has not been altered. ZSKs are designed for more frequent rotation than Key-Signing Keys (KSKs), balancing security and operational efficiency.

**Learn more:** 
[nist.gov: ZSK](https://csrc.nist.gov/glossary/term/zone_signing_key)
[HowDNSSEC.works: New records](https://howdnssec.works/new-records/)

### KSK
A KSK (Key-Signing Key) is a DNSSEC key pair dedicated to signing the DNSKEY RRSet for a zone, rather than individual data records. Its private component creates RRSIG signatures over the entire set of DNSKEY records, while the public key is published alongside them. When a resolver validates DNSSEC, it first retrieves the KSK's public DNSKEY to verify those signatures, establishing trust before proceeding to verify zone data. KSKs typically rotate less frequently than Zone-Signing Keys (ZSKs), providing a stable trust anchor.

**Learn more:**
[nist.gov: KSK](https://csrc.nist.gov/glossary/term/key_signing_key)
[HowDNSSEC.works: Key-Signing Who?](https://howdnssec.works/key-signing-who/)

### DNSSEC Key Rollover
A DNSSEC key rollover is the process of replacing an existing cryptographic key (either a Zone-Signing Key or a Key-Signing Key) with a new one without interrupting the chain of trust. The steps typically include publishing both old and new public keys, updating DS records in the parent zone, and ensuring resolvers can validate signatures under both keys during the transition. Once the new key is trusted and in use, the old key is retired. Proper key rollovers prevent signature failures and maintain continuous DNSSEC protection.

**Learn more:** 
[RFC 6781 §4.1](https://datatracker.ietf.org/doc/html/rfc6781#section-4.1)
[HowDNSSEC.works: Human DNS](https://howdnssec.works/human-dns/)

### Root Signing Key Ceremony
The Root Signing Key Ceremony is a carefully orchestrated event, typically held quarterly, in which trusted key-holders gather in-person to generate and sign a new Key-Signing Key (KSK) for the DNS root zone. During this ceremony, the old root KSK is retired and replaced by the new public key, which is then securely distributed to resolvers as the updated trust anchor. This human-led process, with multiple safeguards, audits, and cross-checks, ensures that DNSSEC validation remains reliable and prevents malicious actors from compromising the root's cryptographic integrity. 

**Learn more:**
[ICANN Root Ceremony](https://www.icann.org/en/blogs/details/the-key-to-the-internet-and-key-ceremonies-an-explainer-11-07-2023-en)
[HowDNSSEC.works: Human DNS](https://howdnssec.works/human-dns/)

## Proof of Non-Existence

### NSEC
An NSEC (Next Secure) record is a DNSSEC resource record used to prove the non‐existence of a queried name. When a resolver requests a non‐existent domain, the authoritative server returns an NSEC record pointing to the next valid name in the zone's sorted order. This NSEC record, along with its RRSIG, cryptographically demonstrates that no records exist between the two names, providing authenticated denial of existence.

**Learn more:** 
[RFC 4034 §4](https://datatracker.ietf.org/doc/html/rfc4034#section-4)

### NSEC3
An NSEC3 (Next Secure Version 3) record is a DNSSEC resource record that proves the non‐existence of a queried name while preventing zone‐walking. Unlike NSEC, NSEC3 hashes domain names before constructing the chain of hashes. When a resolver queries a non‐existent record, the authoritative server returns an NSEC3 record that shows the closest existing hashed name and its hash range. Paired with an RRSIG signature, this securely authenticates denial of existence without revealing all zone names.

**Learn more:** 
[RFC 5155 §3](https://datatracker.ietf.org/doc/html/rfc5155#section-3)

## Extensions & Automation

### EDNS0
EDNS0 (Extension Mechanisms for DNS) expands DNS protocol capabilities to support larger UDP payloads, extended flags, and optional parameters required by DNSSEC. Traditional DNS was limited to 512-byte messages, but DNSSEC signatures often exceed this size. By negotiating EDNS0 during a query, resolvers indicate they can handle bigger packets and DNSSEC-related records like RRSIG and DNSKEY. This ensures secure, efficient DNSSEC lookups without forcing a fallback to slower TCP.

**Learn more:** 
[RFC 6891](https://datatracker.ietf.org/doc/html/rfc6891)

### CDS / CDNSKEY
CDS (Child DS) and CDNSKEY (Child DNSKEY) are DNSSEC resource record types that automate updating a parent zone's DS record when a child zone rolls over its DNSKEY. A CDNSKEY record publishes the child's full public DNSKEY in its own zone; when the parent retrieves it, it can derive and insert the correct DS hash automatically. Similarly, a CDS record carries the precomputed DS hash of the child's DNSKEY, which the parent can copy. By using CDS/CDNSKEY, zone operators streamline key rollovers and reduce manual errors, ensuring the parent's DS remains synchronized with the child's active key.

**Learn more:** 
[RFC 7344 §3](https://datatracker.ietf.org/doc/html/rfc7344#section-3)

### DS Digest Algorithm
A DNSSEC DS Digest Algorithm is the cryptographic hash function used to generate the digest value stored in a DS (Delegation Signer) record. When a child zone publishes its DNSKEY, the designated digest algorithm (e.g., SHA-1, SHA-256) processes the DNSKEY's public key data to produce a fixed-length hash. The parent zone stores this hash in its DS record. During validation, resolvers re-hash the child's DNSKEY using the same digest algorithm and compare it to the DS to confirm authenticity.

**Learn more:** 
[RFC 4034 §5.1](https://datatracker.ietf.org/doc/html/rfc4034#section-5.1)
