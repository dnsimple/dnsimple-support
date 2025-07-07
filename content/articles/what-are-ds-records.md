---
title: What Are DS Records?
excerpt: Learn what DS records are and why they matter for DNSSEC.
categories:
- DNS
---

# What are DS records?

A Delegation Signer (DS) record is a critical DNSSEC record that connects your domain's cryptographic identity to the global DNS system. It acts as a trusted reference from your parent zone (like .com or .org) to your domain's Key Signing Key (KSK) by containing a cryptographic digest (hash) of that key.

This digest enables DNS resolvers to verify the authenticity and integrity of your DNSKEY without requiring access to the key itself. The DS record extends DNSSEC's chain of trust by letting the parent zone "vouch" for your domain's keys.

## The DNS hierarchy

To understand DS records, it's important to understand how the DNS system is structured.

- At the top is the root zone (".").
- Below that are top-level domains (TLDs) like .com, .net, or .org, known as parent zones.
- Below that are your domains, like example.com, referred to as child zones.

In a DNSSEC-enabled setup, each layer can validate the one below it. The DS record allows the parent zone to securely delegate trust to your domain by linking to your domain's DNSSEC keys.

## Why DS records matter

When DNSSEC is enabled for your domain, DNS resolvers can verify that your DNS records haven't been forged or modified. This is possible, because your records are cryptographically signed using private keys, and the corresponding public key (your KSK) is published in your domain via DNSKEY records.

But publishing a DNSKEY alone isn't enough. For DNS resolvers to trust your DNSKEY, they need a verified reference to it from the parent zone. That's the role of the DS record.

Without a DS record in the parent zone, or if the DS record doesn't match your current KSK, DNS resolvers will reject your domain's DNSSEC signatures. This can make your domain unreachable to users using DNSSEC-validating resolvers.

## How DS records establish trust

Enabling DNSSEC involves a series of steps that lead to the creation and publication of a DS record. 

Here's how it works:

1. **Generate DNSSEC keys**
    When you enable DNSSEC on your domain, two key pairs are created
   
   - **Key Signing Key (KSK):** Used to sign the DNSKEY record set
   - **Zone Signing Key (ZSK):** Used to sign your actual DNS records (like A, MX, etc.)

    Both keys are published as DNSKEY records, but the KSK is the one trusted by the parent zone.

1. **Create the DS record**
    A cryptographic digest (hash) is generated from your domain's KSK. This becomes the DS record. It includes details about the algorithm and digest type used, but it does not expose your full key.

1. **Publish the DS record in the parent zone**
    The DS record is submitted to your domain registrar who publishes it through the domain registry (like .com, or .org).
Once the DS record is live in the parent zone, it links your domain to the rest of the DNSSEC trust chain.

1. **Resolver validates the Chain of Trust**
    When a DNSSEC-aware resolver queries your domain, it:
    - Retrieves the DS record from the parent zone
    - Fetches the DNSKEY from your domain zone
    - Compares the DS digest to your DNSKEY

The resolver creates a digest of the DNSKEY using the same hash algorithm and digest type specified in the DS record. Even though the DS record doesn't contain the full public key, it includes a cryptographic hash of it. By hashing the DNSKEY locally and comparing it to the digest in the DS record, the resolver can confirm the two are linked.
If the created digest matches the DS record, the resolver trusts your DNSKEY and the DNS records it signs. If they don't match — for example, if you've rotated your KSK but haven't updated the DS record — resolvers won't trust your domain's DNSSEC signatures, and your domain may become unreachable.

## DS-data vs. KEY-data

DNSKEY records contain a zone's public KSK and ZSK. DS records contain a digest of the public KSK. The contents of these records are stored in different formats:
    - DNSKEY records store public keys in KEY-data format
    - DS records store public keys in DS-data format

However, when setting up DNSSEC on a child zone, registries can require you to provide your zone's public KSK in either format. 

Here's how they work:

### KEY-data format

The KEY-data format refers to the actual public key information stored in DNSKEY resource records, which forms the foundation of DNSSEC's cryptographic authentication system. 
The DNSKEY RDATA consists of:

**Flags**
    Set to either 257 to indicate it's a Key-Signing Key, or 256 to indicate it's a Zone-Signing Key

**Protocol**
    Always 3, indicating DNSSEC.

**Algorithm**
    Indicates the cryptographic algorithm used to generate the key. In DNSimple, this is typically 8 (RSA/SHA-256).

**Public Key**
    The full public DNSKEY. This is used to derive the digest and validate signatures.

For example, a DNS query for DNSKEY records could provide an answer like this:

`dig DNSKEY howdnssec.works +short`

`256 3 8 AwEAAb57dtsfnAQbw/s6/TB3AgUb9Hwx50jnwKupuG8DdsR4xVgBD2h4 XwZu4nqQdE2kGC/oUOXd1tnUsmeJVaYTo5VygpzjpXQFePfrheJl5fxT Yevq0oRHqNI50+HmUaGn2VDUu3qSEOhU2KGfYoKGMpUudvEb5TUIMuQ7 8QKjYkpZ
257 3 8 AwEAAaOEmo0CkiSqMlFl9loKET/3zUFB9h/ZcBJ1JhAoiiqYGlGf4yxV kUHRz/oZqIyv4D1xzDhMtIMP0q0/hL/QoqProvfLGayY71MZaxAZuSyW vxe/ktpZdMA9a5crSGl41gde62ztbUiq6fJfpIzi4l6kWMwINB39egP2 H+PFfoiRW0JfqX4YEf6NNhyNcWPFlsvEFLcs3oc3fLQ2YBsQS40=`

In this answer, we can see that the howdnssec.works zone has two DNSKEY records with the following RDATA:
KSK - Flags: 257, Protocol: 3, Algorithm: 8, Public key: `AwEAAaO...BsQS40=`
ZSK - Flags: 256, Protocol: 3, Algorithm: 8, Public key: `AwEAAb5...QKjYkpZ`

### DS-data format

The DS-data format represents a cryptographic digest (hash) of a DNSKEY record, specifically designed to establish trust between parent and child zones in the DNS hierarchy. The DS RDATA consists of:

**Key Tag**
    A short numeric identifier that helps locate the corresponding DNSKEY.

**Algorithm**
    Indicates the cryptographic algorithm used to generate the key. In DNSimple, this is typically 8 (RSA/SHA-256).

**Digest Type**
    Specifies the hash algorithm used to generate the digest. Commonly 2 (SHA-256).

**Digest**
    A hash (digest) of the public part of the KSK. This is what the parent zone publishes.

If we check the DS record for the same domain, here's what we might see:

`dig DS howdnssec.works +short`

`48170 8 2 1D4DE33C436CE4DFB10315AC91E8A03D604AC649702D3C018A7B8A00 1BE678D4`

In this answer, we can see that the howdnssec.works zone has a DS record with the following RDATA:
Key Tag: 48170, Algorithm: 8, Digest type: 2, Digest: `1D4DE33...BE678D4`
