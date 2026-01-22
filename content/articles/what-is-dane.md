---
title: What Is DANE (DNS-based Authentication of Named Entities)?
excerpt: DANE is a security protocol that uses DNSSEC to publish and validate TLS certificate information in DNS records, enhancing the security of TLS connections.
meta: Learn about DANE and how it uses DNSSEC to authenticate TLS certificates through DNS records, providing an additional layer of security for encrypted connections.
categories:
- DNS
- DNSSEC
---

# What Is DANE?

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is DANE?

**DANE**, which stands for **DNS-based Authentication of Named Entities**, is a security protocol that uses [DNSSEC](/articles/what-is-dnssec/) to publish and validate [TLS/SSL certificate](/categories/ssl-certificates/) information within DNS records. This provides an additional layer of security for TLS connections by allowing clients to verify that the certificate presented by a server is authorized for that domain, as authenticated through the DNS infrastructure.

DANE addresses a fundamental security concern: the traditional Public Key Infrastructure (PKI) model relies on Certificate Authorities (CAs) to validate certificate ownership. While this system works well, DANE adds an extra verification layer by allowing domain owners to explicitly declare which certificates are valid for their domain through cryptographically signed DNS records.

## How DANE works

DANE leverages DNSSEC to create a cryptographically secure link between a domain name and its TLS certificates. Here's how the process works:

### Prerequisites

For DANE to function, your domain must have:

- **DNSSEC enabled**: DANE requires DNSSEC to be active on your domain because it relies on the cryptographic signatures that DNSSEC provides to ensure the integrity of DNS records. Without DNSSEC, DANE records cannot be trusted. Learn more about [enabling DNSSEC](/articles/enabling-dnssec/).

### TLSA records

DANE uses **TLSA records** (type 52) to publish certificate information in DNS. A TLSA record associates a TLS certificate (or its public key) with a specific service on a domain, such as HTTPS on port 443 or SMTP on port 25.

When a client connects to a service:

1. The client performs a DNS lookup for the TLSA record associated with the service (e.g., `_443._tcp.example.com` for HTTPS on port 443).
2. The client verifies the TLSA record using DNSSEC validation to ensure it hasn't been tampered with.
3. The client connects to the server and receives the TLS certificate.
4. The client compares the certificate (or its public key) against the information in the TLSA record.
5. If the certificate matches the TLSA record and DNSSEC validation passes, the connection proceeds. If not, the connection may be rejected or a warning may be issued, depending on the client's DANE policy.

### TLSA record usage types

TLSA records support different usage types that determine how the certificate information is used:

- **Usage type 0 (PKIX-TA)**: The TLSA record contains a trust anchor certificate. The server's certificate must chain to this trust anchor.
- **Usage type 1 (PKIX-EE)**: The TLSA record contains the end-entity certificate. The server must present this exact certificate.
- **Usage type 2 (DANE-TA)**: The TLSA record contains a trust anchor certificate that is trusted via DANE, not the traditional PKI.
- **Usage type 3 (DANE-EE)**: The TLSA record contains the end-entity certificate that is trusted via DANE, not the traditional PKI.

### Selector and matching types

TLSA records also specify:

- **Selector**: Whether the record contains the full certificate (selector 0) or just the public key (selector 1).
- **Matching type**: How the certificate data is represented—full (type 0), SHA-256 hash (type 1), or SHA-512 hash (type 2).

## Why DANE is important

DANE provides several security benefits:

### Enhanced certificate validation

DANE adds an additional verification step beyond traditional CA-based validation. Even if a CA is compromised or issues an unauthorized certificate, DANE can prevent its use if the certificate doesn't match the TLSA record published in DNS.

### Protection against certificate mis-issuance

By publishing authorized certificates in DNS, domain owners can prevent attackers from using fraudulently issued certificates, even if those certificates were issued by a legitimate CA through social engineering or other attacks.

### Support for self-signed certificates

DANE enables the use of self-signed certificates or certificates from private CAs by allowing domain owners to declare them as valid through TLSA records, without requiring trust in the traditional PKI system.

### Email security

DANE is particularly valuable for email security (SMTP), where it can be used to authenticate mail servers and prevent man-in-the-middle attacks on email transmission.

## DANE and DNSSEC

DANE is fundamentally dependent on DNSSEC. Without DNSSEC, TLSA records cannot be cryptographically verified, which means they could be spoofed or modified by attackers. DNSSEC provides the chain of trust that makes DANE records trustworthy.

If you're interested in implementing DANE, you must first [enable DNSSEC](/articles/enabling-dnssec/) on your domain. For more information about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/) and [DNSSEC at DNSimple](/articles/dnssec/).

## Limitations and considerations

While DANE provides valuable security enhancements, there are some important considerations:

- **DNSSEC requirement**: DANE only works when DNSSEC is enabled and properly configured. If DNSSEC is not available or fails, DANE validation cannot proceed.
- **Client support**: DANE requires client-side support. Not all browsers, email clients, or applications support DANE validation yet, though support is growing.
- **Certificate management**: Implementing DANE requires careful certificate management, as you must update TLSA records whenever certificates are renewed or changed.
- **Operational complexity**: DANE adds operational complexity, as you need to coordinate DNS record updates with certificate lifecycle management.

## Technical details

The DANE specification is formally defined in [RFC 6698](https://datatracker.ietf.org/doc/html/rfc6698): *The DNS-Based Authentication of Named Entities (DANE) Transport Layer Security (TLS) Protocol: TLSA*.

The TLSA record format and usage are further detailed in [RFC 7671](https://datatracker.ietf.org/doc/html/rfc7671): *The DNS-Based Authentication of Named Entities (DANE) Protocol: Updates and Operational Guidance*.

## Related topics

- [What Is DNSSEC?](/articles/what-is-dnssec/) - Learn about the DNS security extensions that DANE depends on
- [Enabling DNSSEC](/articles/enabling-dnssec/) - Step-by-step guide to enabling DNSSEC on your domain
- [DNSSEC at DNSimple](/articles/dnssec/) - Comprehensive overview of DNSSEC features
- [SSL/TLS Certificates](/categories/ssl-certificates/) - Learn about TLS certificates and how they work
- [DNS Glossary](/articles/dns-glossary/) - Definitions of DNS-related terms

## Have more questions?

If you have additional questions about DANE, DNSSEC, or how to secure your domain's TLS connections, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
