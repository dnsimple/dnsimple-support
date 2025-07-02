---
title: Understanding NSEC and NSEC3 Records
excerpt: Explains how NSEC and NSEC3 Records.
meta: Learn about NSEC and NSEC3 Records, what they are, why they're important, and how they work.
categories:
- DNSSEC
---

# Understanding NSEC and NSEC3 Records

NSEC (Next Secure) and NSEC3 (Next Secure version 3) records are essential DNSSEC components that solve the critical problem of Authenticated Denial of Existence. They allow DNSSEC-validating resolvers to cryptographically confirm that a queried name or record doesn't exist, which helps prevent malicious actors from spoofing non-existent domains. While NSEC provides a direct link between names, NSEC3 enhances privacy by using hashed names, making it the preferred choice for most modern DNSSEC deployments. 

At DNSimple, we utilize NSEC3 for all DNSSEC-enabled domains to provide these enhanced privacy and security benefits. These records are fundamental to ensuring the complete security of DNS responses.

## The challenge of denial of existence in DNSSEC

In traditional (unsigned) DNS, if you query for a non-existent domain or record, the authoritative server responds with an "NXDOMAIN" (Non-Existent Domain) or "NODATA" (No Data) error. 

With DNSSEC, however, a validating resolver needs to trust this denial cryptographically. Otherwise, an attacker could claim a domain doesn't exist to redirect traffic or hide a legitimate service.

NSEC and NSEC3 records provide this cryptographic proof of non-existence.

## What is an NSEC record?

An NSEC record creates a "chain" of all existing names in a DNSSEC-signed zone. These names are linked in canonical DNS name order, a meticulous alphabetical ordering that ensures a unique sequence. Canonical DNS name order refers to a standardized, case-insensitive, alphabetical sorting of domain names, where subdomains are ordered before their parent domains (e.g., `alpha.example.com` comes before `beta.example.com`, which comes before `example.com`). 

Each NSEC record lists three details:

1. The name of the current record
1. The name of the next authoritative record in the zone's canonical DNS name order
1. A list of DNS record types that exist for the current name

### How NSEC works for non-existence

When a validating resolver queries for a non-existent name (e.g., `beta.dnsimple.com` in a zone that has `alpha.dnsimple.com` and `gamma.dnsimple.com` as existing names, sorted in canonical order):

1. The authoritative server responds with an NSEC record for the closest existing name immediately before `beta.dnsimple.com` in the zone's canonical DNS name order (which would be `alpha.dnsimple.com`).
1. This NSEC record specifies the name of the next existing authoritative record in that sorted order (which would be `gamma.dnsimple.com`).
1. Since `beta.dnsimple.com` falls between `alpha.dnsimple.com` and `gamma.dnsimple.com` (as indicated by the NSEC record and canonical DNS name order), and the NSEC record is cryptographically signed (via an RRSIG), the resolver can cryptographically prove that `beta.dnsimple.com` doesn't exist in the zone.

### The "Zone Walking" vulnerability of NSEC
While NSEC provides authenticated denial of existence, it has a significant privacy drawback: Zone Walking. Because NSEC records link every existing name in the zone in a sorted list, anyone can repeatedly query for non-existent names, and reconstruct the entire list of all valid names within a zone by following the NSEC links. This Zone Walking can reveal sensitive organizational structure or internal hosts.

## What is an NSEC3 record?
NSEC3 (Next Secure version 3) records were developed to address the Zone Walking vulnerability of NSEC while still providing authenticated denial of existence. NSEC3 achieves this by using cryptographic hashing.

Instead of linking actual domain names, NSEC3 records link hashed versions of the domain names. This makes it much harder to Zone Walk.

### How NSEC3 works for non-existence
When a validating resolver queries for a non-existent name:

1. The authoritative server sends back two NSEC3 records:
    - One for the closest existing hashed name **before** the hashed query name.
    - One for the closest existing hashed name **after** the hashed query name.
1. Each NSEC3 record is accompanied by an RRSIG signature, allowing resolvers to validate its authenticity.
1. The resolver receives these two hashed boundaries and can then cryptographically prove that the queried name's hash falls between these two existing hashes, thus proving the non-existence of the original name.
1. To prevent brute-force attacks on the hashes, NSEC3 uses a "salt" and an "iteration" count, making it computationally expensive to reverse the hashes.

### NSEC3 parameters
The parameters in an NSEC3PARAM record at the zone apex define the behavior of an NSEC3 record. These include:
- **Hash algorithm:** Which hashing algorithm is used (e.g., SHA-1). While SHA-1 has known vulnerabilities in other cryptographic contexts, it's still commonly used in NSEC3 due to its established presence in DNSSEC standards and the iterative hashing combined with salting that provides additional protection against typical brute-force attacks.
- **Flags:** Options like "Opt-Out" (see below).
- **Iterations:** How many times the hash function is applied. More iterations mean more security but slower validation.
- **Salt:** A random string added to the name before hashing to prevent pre-computed hash tables.

### NSEC3 "Opt-Out"
NSEC3 includes an "Opt-Out" flag that allows zones with many insecure (unsigned) delegations to opt out of publishing NSEC3 records for those insecure child zones. This can simplify zone management but introduces a slight validation difference for non-existent names within those opt-out zones.

## NSEC vs. NSEC3: key differences
While both NSEC and NSEC3 provide authenticated denial of existence, they differ significantly in their approach and implications:

- **Zone Walking prevention:** This is the primary distinction. NSEC is vulnerable to Zone Walking because it links actual domain names in a sorted list, which can expose all names in a zone. In contrast, NSEC3 protects against Zone Walking by linking cryptographic hashes of domain names, making it computationally much harder to discover all names.
- **Record linkage:** NSEC directly links the current domain name to the next domain name in canonical order. NSEC3 links the hashed version of the current domain name to the hashed version of the next domain name.
- **Privacy:** Due to Zone Walking, NSEC offers low privacy as it reveals all names in the zone. NSEC3 offers high privacy by obscuring domain names behind hashes.
- **Complexity:** NSEC is generally simpler to implement and manage. NSEC3 is more complex due to the introduction of hashing, salt, iteration counts, and the Opt-Out feature.
- **Performance:** NSEC can be faster for resolvers as it involves less computation. NSEC3 validation can be slightly slower due to the hashing and iteration requirements.
- **Common use:** Due to privacy concerns, NSEC is less common in DNSSEC deployments now. NSEC3 is widely preferred for modern DNSSEC implementations because of its enhanced Zone Walking protection.

## Have more questions?
If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.

Ready to get started with DNSSEC? Read [Enabling DNSSEC](/articles/enabling-dnssec/) for detailed instructions.
