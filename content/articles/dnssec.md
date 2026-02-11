---
title: DNSSEC at DNSimple
excerpt: Learn where to find everything you need to know about DNSSEC at DNSimple.
meta: Discover everything you need to know about DNSSEC at DNSimple. Learn how to enable, manage, and troubleshoot DNSSEC for enhanced DNS security.
categories:
- DNSSEC
---

# DNS Security Extensions (DNSSEC) at DNSimple 

### Table of Contents {#toc}

* TOC
{:toc}
---

DNSSEC (Domain Name System Security Extensions) adds an essential layer of security to DNS, protecting your domain from various attacks like cache poisoning. At DNSimple, we simplify the complexity of DNSSEC, offering features like automatic key rotation and support for DS-data **and** KEY-data interfaces, making it easy to enable and manage DNSSEC for your domains and helping you ensure the integrity and authenticity of your DNS data.

## What is DNSSEC?

If you are new to DNSSEC, these articles will help you understand the fundamentals.

- [What Is DNSSEC (Domain Name System Security Extensions)?](/articles/what-is-dnssec/) Learn what DNSSEC is and why it matters.
- [The DNSSEC Chain of Trust](/articles/dnssec-chain-of-trust/): Explore the concept of the Chain of Trust and how it ensures the validity of DNS data.
- [What Are DS Records?](/articles/what-are-ds-records/): Understand the role of Delegation Signer (DS) records in linking a child zone to its parent in the DNSSEC chain.
- [DNSKEY Records Explained](/articles/dnskey-records-explained/): Dive into DNSKEY records, which contain the public keys used to verify DNSSEC signatures.
- [What Are the Types of DNSSEC Keys?](/articles/types-of-dnssec-keys/): Discover the different types of DNSSEC keys and their specific functions.
- [Understanding RRSETs and RRSIGs in DNSSEC](/articles/understanding-rrsets-rrsigs/): Learn about Resource Record Sets (RRSETs) and RRSIG (Resource Record Signature) records, which provide cryptographic proof of data integrity.
- [Understanding NSEC and NSEC3 Records](/articles/nsec-nsec3-records/): Explore NSEC and NSEC3 records and how they help prevent zone walking.
- [What Are CDS and CDNSKEY?](/articles/what-are-cds-and-cdnskey/) Understand how these record types help automate DNSSEC management and simplify key rollovers.
- [What Is DANE (DNS-based Authentication of Named Entities)?](/articles/what-is-dane/) - Learn about DANE and how it uses DNSSEC to authenticate TLS certificates through DNS records.
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) - Understand compatibility considerations when using DNSSEC with secondary DNS.

## How to manage DNSSEC

Ready to use DNSSEC? Learn how to manage your DNSSEC configurations effectively with these articles.

- [Enabling DNSSEC](/articles/enabling-dnssec/): A step-by-step guide to turning DNSSEC **on** for your domain.
- [Disabling DNSSEC](/articles/disabling-dnssec/):  A step-by-step guide to turning DNSSEC **off** for your domain.
- [Adding and Removing DS Records](/articles/manage-ds-record/): Learn how to manually add or remove Delegation Signer (DS) records for your domain.
- [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/): A guide to updating DS records when you migrate your DNS hosting to a different provider.
- [Using Cloudflare DNSSEC with DNSimple](/articles/cloudflare-ds-record/): Using Cloudflare DNSSEC when your domain is with DNSimple.
- [Rotate DNSSEC Keys](/articles/rotate-dnssec-key/): Learn how to manage DNSSEC key rotation and what to do when keys change.

## Troubleshooting DNSSEC configurations

Encountering issues with your DNSSEC setup? Find solutions and guidance here.

- [Troubleshooting DNSSEC](/articles/troubleshooting-dnssec-configurations/): A comprehensive guide to diagnosing and resolving common DNSSEC problems.

## Reference articles

Dive deeper into the specifics of DNSSEC with our comprehensive reference materials, including an overview of the settings and details available in your DNSimple account.

- [DNSSEC Management in DNSimple](/articles/dnssec-management-in-dnsimple/): A detailed look at the DNSSEC management interface within your DNSimple account, including available settings and information.
- [DNSSEC Glossary](/articles/dnssec-glossary/): Familiarize yourself with common terms and definitions related to DNSSEC.
