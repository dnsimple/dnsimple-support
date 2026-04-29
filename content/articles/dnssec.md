---
title: DNSSEC at DNSimple
excerpt: Enable, manage, and troubleshoot DNSSEC for your domains at DNSimple, with automatic key rotation and DS-data and KEY-data interface support.
meta: DNSSEC at DNSimple. Enable, manage, and troubleshoot DNSSEC with automatic key rotation, DS record provisioning, and key lifecycle management.
categories:
- DNSSEC
---

# DNS Security Extensions (DNSSEC) at DNSimple 

### Table of Contents {#toc}

* TOC
{:toc}
---

DNSSEC (Domain Name System Security Extensions) adds an essential layer of security to DNS, protecting your domain from various attacks like cache poisoning. At DNSimple, we simplify the complexity of DNSSEC, offering features like automatic key rotation and support for DS-data **and** KEY-data interfaces, making it easy to enable and manage DNSSEC for your domains and helping you ensure the integrity and authenticity of your DNS data.

## What is DNSSEC? {#what-is-dnssec}

If you are new to DNSSEC, these articles will help you understand the fundamentals.

- [What Is DNSSEC (Domain Name System Security Extensions)?](/articles/what-is-dnssec/) Learn what DNSSEC is and why it matters.
- [The DNSSEC Chain of Trust](/articles/dnssec-chain-of-trust/): Explore the concept of the Chain of Trust and how it ensures the validity of DNS data.
- [What Are DS Records?](/articles/what-are-ds-records/): Understand the role of Delegation Signer (DS) records in linking a child zone to its parent in the DNSSEC chain.
- [DNSKEY Records Explained](/articles/dnskey-records-explained/): Dive into DNSKEY records, which contain the public keys used to verify DNSSEC signatures.
- [What Are the Types of DNSSEC Keys?](/articles/types-of-dnssec-keys/): Discover the different types of DNSSEC keys and their specific functions.
- [What Are RRSETs and RRSIGs in DNSSEC?](/articles/understanding-rrsets-rrsigs/): Learn about Resource Record Sets (RRSETs) and RRSIG (Resource Record Signature) records, which provide cryptographic proof of data integrity.
- [What Are NSEC and NSEC3 Records?](/articles/nsec-nsec3-records/): Explore NSEC and NSEC3 records and how they help prevent zone walking.
- [What Are CDS and CDNSKEY?](/articles/what-are-cds-and-cdnskey/) Understand how these record types help automate DNSSEC management and simplify key rollovers.
- [What Is DANE (DNS-based Authentication of Named Entities)?](/articles/what-is-dane/) - Learn about DANE and how it uses DNSSEC to authenticate TLS certificates through DNS records.
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) - Understand compatibility considerations when using DNSSEC with secondary DNS.

## How to manage DNSSEC {#how-to-manage-dnssec}

Ready to use DNSSEC? Learn how to manage your DNSSEC configurations effectively with these articles.

- [Enable DNSSEC](/articles/enabling-dnssec/): A step-by-step guide to turning DNSSEC **on** for your domain.
- [Disable DNSSEC](/articles/disabling-dnssec/): A step-by-step guide to turning DNSSEC **off** for your domain.
- [Add and Remove DS Records](/articles/manage-ds-record/): Learn how to manually add or remove Delegation Signer (DS) records for your domain.
- [Manage DS Records When Changing DNS](/articles/ds-records-changing-dns/): A guide to updating DS records when you migrate your DNS hosting to a different provider.
- [Use Cloudflare DNSSEC with DNSimple](/articles/cloudflare-ds-record/): Set up Cloudflare DNSSEC when your domain is registered with DNSimple.
- [Rotate DNSSEC Keys](/articles/rotate-dnssec-key/): Learn how to manage DNSSEC key rotation and what to do when keys change.

## DNSSEC compatibility with other DNSimple features {#dnssec-compatibility-with-other-dnsimple-features}

Not all DNSimple features are compatible with DNSSEC. Before enabling DNSSEC, review the compatibility details for your setup.

- [DNSSEC Compatibility With Other DNSimple Features](/articles/dnssec-compatibility/): A reference of which DNSimple features work with DNSSEC and any limitations to be aware of.

## Troubleshoot DNSSEC configurations {#troubleshooting-dnssec-configurations}

Encountering issues with your DNSSEC setup? Find solutions and guidance here.

- [Troubleshoot DNSSEC](/articles/troubleshooting-dnssec-configurations/): A comprehensive guide to diagnosing and resolving common DNSSEC problems.

## Reference articles {#reference-articles}

Dive deeper into the specifics of DNSSEC with our comprehensive reference materials, including an overview of the settings and details available in your DNSimple account.

- [DNSSEC Management in DNSimple](/articles/dnssec-management-in-dnsimple/): A detailed look at the DNSSEC management interface within your DNSimple account, including available settings and information.
- [DNSSEC Glossary](/articles/dnssec-glossary/): Familiarize yourself with common terms and definitions related to DNSSEC.
