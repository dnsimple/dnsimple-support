---
title: Understanding RRSETs and RRSIGs in DNSSEC
excerpt: Explains how RRSETs and RRSIGs work.
meta: Learn about RRSETs and RRSIGs, what they are, why they're important, and how they work.
categories:
- DNSSEC
---

# Understanding RRSETs and RRSIGs in DNSSEC

This article explains Resource Record Sets (RRSETs) and Resource Record Signatures (RRSIGs), which are fundamental to how DNS, particularly DNSSEC, ensures the integrity and security of your domain's information.

RRSETs and RRSIGs are foundational elements in the security of modern DNS. RRSETs serve as the logical grouping for your domain's records, while RRSIGs provide cryptographic assurance of their authenticity and integrity. Together, these components form the core mechanism through which DNSSEC safeguards your DNS queries from tampering, ensuring reliable navigation to online destinations.

## What is an RRSET?

An RRSET (Resource Record Set) is a collection of all DNS records that share the same name and type within a given DNS zone.

For example, if your domain `www.example.com` needs to point to two different IP addresses for redundancy, you would have two separate A records:
- `www.example.com. IN A 192.0.2.1`
- `www.example.com. IN A 192.0.2.2`
  
These two A records, because they both belong to `www.example.com` and are type `A`, form the A record RRSET for `www.example.com`.

## Why RRSETs are important

RRSETs are the foundational unit for DNSSEC signing. Instead of signing individual records, DNSSEC signs an entire RRSET. This ensures a complete group of related records is treated as a single, verifiable unit, confirming its authenticity.

## What is an RRSIG?

An RRSIG (Resource Record Signature) is a digital signature that authenticates an entire RRSET. It serves as cryptographic proof that the RRSET data you receive is legitimate and hasn't been altered or forged since it was published by the authoritative DNS server.

### How it works (basic)

1. **Signing:** When DNSSEC is enabled for a domain, an RRSIG record is generated for each RRSET within that domain's zone. This signature is created using the zone's unique private signing key, typically the Zone Signing Key (ZSK).
1. **Serving:** When a DNS resolver (like your internet service provider's DNS server) requests an RRSET (e.g., the A records for `www.example.com`), the authoritative DNS server sends back both the RRSET and its corresponding RRSIG record.
1. **Verification:** The resolver then uses the domain's public cryptographic key, found in a DNSKEY record (obtained through the secure DNSSEC chain of trust), to verify the RRSIG.
    - If the signature is **valid**, the resolver trusts that the RRSET is authentic and hasn't been tampered with.
    - If the signature is **invalid**, the resolver will discard the data, preventing you from being directed to a potentially malicious location.

## Key information in an RRSIG record

An RRSIG record includes specific details crucial for its verification:

- **Type covered:** The DNS record type of the RRSET being signed (e.g., A, MX, CNAME).
- **Algorithm:** The cryptographic algorithm used for the signature (e.g., RSA/SHA-256).
- **Original TTL:** The original Time To Live (TTL) value of the signed RRSET.
- **Signature inception & expiration:** The time window during which the signature is valid. Signatures are time-limited and regenerated periodically.
- **Key tag:** A short identifier for the public key used to verify this signature.
- **Signer's name:** The domain name of the zone that signed the RRSET (typically your domain).
- **Signature:** The actual cryptographic signature data.

## Why RRSIGs are important

RRSIGs are fundamental to DNSSEC. They are essential for:

**DNSSEC validation:** Enabling DNS resolvers to cryptographically verify the authenticity and integrity of DNS data.
**Preventing attacks:** Helping to prevent malicious activities like DNS spoofing and cache poisoning.
**DNS spoofing:** An attacker sends fake DNS responses to redirect users to malicious websites.
**Cache poisoning:** A more specific form of spoofing where an attacker injects fraudulent data into a DNS resolver's cache. If a resolver's cache is "poisoned," it will provide the incorrect (malicious) IP address for a domain to all subsequent users who query that resolver, until the poisoned entry expires. RRSIGs ensure that resolvers only accept and cache genuinely signed data, making these types of attacks significantly harder to execute successfully.
**Building trust:** Adding a critical layer of trust to the entire DNS lookup process.

## The relationship between RRSETs and RRSIGs

**The relationship is direct and interdependent:** an RRSIG always signs an RRSET.

You won't find an RRSIG for an individual DNS record in isolation. When you modify or add records, if DNSSEC is active, new RRSIGs are automatically generated to secure the updated RRSETs. This pairing is how DNSSEC provides its robust security guarantees. A resolver expects both the RRSET and its corresponding RRSIG; without a valid RRSIG, the RRSET's authenticity cannot be confirmed.

## Where do you see RRSETs and RRSIGs at DNSimple?

For most DNSimple users, RRSETs and RRSIGs work in the background. When you manage your DNS records in our record editor, you're interacting with the individual records that form RRSETs.

The generation and management of RRSIGs are handled automatically when you configure DNSSEC for your domain at DNSimple. We take care of:
- Generating the necessary cryptographic keys for your zone.
- Creating and maintaining the RRSIG records for all your RRSETs.
- Periodically re-signing your RRSETs to ensure signatures remain valid.

While you won't directly create or edit RRSIG records through our record editor, advanced users, or those troubleshooting DNSSEC, might see them when performing manual DNS queries using tools like dig. 

You could also see these records in other troubleshooting tools that provide detailed DNS record information, such as:

**Online DNS lookup tools:** Many websites offer DNS lookup services (e.g., DNSViz, intoDNS) that can show all record types, including RRSIGs, if DNSSEC is configured for a domain.
**Programming libraries/scripts:** Developers writing code to interact with DNS often use libraries that can retrieve and parse RRSIG records for validation purposes.
While the technical aspects of DNSSEC can be complex, DNSimple simplifies this by automating the generation and management of the necessary cryptographic keys and RRSIGs for your domains. 

For more in-depth troubleshooting steps and tools related to DNSSEC, read [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/).

## Have more questions?
Ready to get started with DNSSEC? Enabling DNSSEC is a critical step in enhancing your domain's security and protecting both your visitors and your online presence. Read [Enabling DNSSEC](/articles/enabling-dnssec/) for detailed instructions. 

If you have further questions or need any assistance, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
