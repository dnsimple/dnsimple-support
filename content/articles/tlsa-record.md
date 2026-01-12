---
title: What Is a TLSA Record?
excerpt: A Transport Layer Security Authentication (TLSA) record is used to associate a TLS server certificate or public key with a domain name, enhancing TLS connection security.
meta: Learn about TLSA records and how they enhance TLS security by binding certificates to domain names through DNS-Based Authentication of Named Entities (DANE).
categories:
- DNS
---

# TLSA Records

### Table of Contents {#toc}

* TOC
{:toc}

---
## What is a TLSA record?

A **Transport Layer Security Authentication (TLSA) record** (record type 52) is a type of DNS record that provides a mechanism for associating a TLS server certificate or public key with the domain name where the record is found. TLSA records are part of the **DNS-Based Authentication of Named Entities (DANE)** protocol, which enables domain owners to specify which certificates should be trusted for their domain's TLS connections.

The primary purpose of a TLSA record is to enhance the security of TLS connections by allowing domain owners to publish certificate associations in DNS. This capability helps mitigate risks associated with misissued or compromised certificates by providing an additional layer of certificate validation beyond the traditional certificate authority (CA) trust model.

## How TLSA records enhance TLS security

TLSA records work in conjunction with DNSSEC to provide authenticated certificate information. When a client connects to a TLS service, it can query DNS for TLSA records associated with the service's hostname and port. The client then compares the certificate presented by the server against the certificate or public key specified in the TLSA record.

### The DANE protocol

DANE (DNS-Based Authentication of Named Entities) is the protocol framework that defines how TLSA records are used. DANE enables domain owners to:

- **Specify trusted certificates**: Domain owners can explicitly declare which certificates or certificate authorities should be trusted for their domain.
- **Reduce reliance on CAs**: By publishing certificate associations in DNS, domain owners can reduce their dependence on the traditional CA trust model.
- **Prevent certificate misissuance**: TLSA records help prevent unauthorized or misissued certificates from being accepted for a domain.

### DNSSEC requirement

For TLSA records to provide meaningful security benefits, they must be used in conjunction with **DNSSEC (DNS Security Extensions)**. DNSSEC provides cryptographic authentication for DNS data, ensuring that TLSA records cannot be tampered with or spoofed. Without DNSSEC, an attacker could potentially modify TLSA records to point to their own certificates, negating the security benefits.

## TLSA record usage patterns

TLSA records are typically used in the following scenarios:

- **Email security (SMTP)**: TLSA records can be used to authenticate TLS connections for email transmission, helping prevent man-in-the-middle attacks on email servers.
- **Web security (HTTPS)**: TLSA records can authenticate TLS certificates for web servers, providing an additional layer of certificate validation.
- **Other TLS services**: TLSA records can be used for any service that uses TLS, including XMPP, LDAP, and other application-layer protocols.

## TLSA record structure

A TLSA record contains several components that specify how the certificate association should be interpreted:

- **Usage field**: Indicates how the TLSA record should be used (e.g., to authenticate the end-entity certificate, intermediate CA certificate, or trust anchor).
- **Selector field**: Specifies which part of the certificate to match (the full certificate or just the public key).
- **Matching type field**: Defines how the certificate data is represented (full certificate, SHA-256 hash, SHA-512 hash).
- **Certificate association data**: The actual certificate data or hash that should be matched.

## Setting up and understanding TLSA record details

For step-by-step instructions on how to add a TLSA record to your DNSimple zone, please refer to our dedicated How-To Guide: [Managing TLSA Records](/articles/manage-tlsa-record/).

For a detailed explanation of the TLSA record format, including the usage, selector, matching type fields, and certificate association data, consult our Reference Guide: [TLSA Record Format and Components Reference](/articles/tlsa-record-format/).

## Technical details

The specification for the DNS TLSA record is formally defined in [RFC 6698](https://datatracker.ietf.org/doc/html/rfc6698): The DNS-Based Authentication of Named Entities (DANE) Transport Layer Security (TLS) Protocol: TLSA.

## Have more questions?

If you have additional questions or need any assistance with your TLSA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

