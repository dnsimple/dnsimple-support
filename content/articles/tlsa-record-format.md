---
title: TLSA Record Format and Components Reference
excerpt: The structure and canonical representation of a TLSA record
meta: Learn more about the structure of TLSA records, their canonical representation, and customizable elements in DNSimple.
categories:
- DNS
---
# TLSA Record Format and Components Reference

A [Transport Layer Security Authentication (TLSA) record](/articles/tlsa-record/) is a DNS record type that associates a TLS server certificate or public key with a domain name, enabling **[DNS-Based Authentication of Named Entities (DANE)](/articles/what-is-dane/)**. This document details the formal structure and the components within a TLSA record.

## TLSA record structure

A TLSA record in a DNS zone file typically follows this structure:
`<name>` `<TTL>` `IN TLSA` `<usage>` `<selector>` `<matching type>` `<certificate association data>`

| Element | Description | Constraints/Details |
|:--------|:------|:----|
| name | The service name, port, and protocol, followed by the domain name. This defines the specific service and port for which the certificate association applies. | Format: `_port._protocol.hostname` or `_port._protocol.domain.name`. Both `_port` (e.g., `_443`, `_25`) and `_protocol` (e.g., `_tcp`, `_udp`) must start with an underscore (_). The port number must be specified as a decimal number. |
| TTL | Time-To-Live. The amount of time (in seconds) that the record is allowed to be cached by a DNS resolver. | Integer. |
| IN | The DNS class, always "Internet" for standard DNS records. | Literal string `IN`. |
| TLSA | The record type. | Literal string `TLSA`. |
| usage | The usage field indicates how the TLSA record should be used in certificate validation. | An unsigned 8-bit integer (0-3). See [Usage Field Values](#usage-field-values) below for details. |
| selector | The selector field specifies which part of the certificate to match. | An unsigned 8-bit integer (0-1). See [Selector Field Values](#selector-field-values) below for details. |
| matching type | The matching type field defines how the certificate data is represented in the record. | An unsigned 8-bit integer (0-2). See [Matching Type Field Values](#matching-type-field-values) below for details. |
| certificate association data | The certificate data or hash value that should be matched against the server's certificate. | The format depends on the matching type. Can be the full certificate, a SHA-256 hash, or a SHA-512 hash, represented as hexadecimal. |

## Usage field values

The usage field determines how the TLSA record is used in the certificate validation process:

| Value | Name | Description |
|:------|:-----|:------------|
| 0 | PKIX-TA (CA constraint) | The certificate association data represents a trust anchor (CA certificate) that must appear in the server's certificate chain. The client must validate the server's certificate using the traditional PKIX (Public Key Infrastructure X.509) validation, and the specified CA must be present in the chain. |
| 1 | PKIX-EE (service certificate constraint) | The certificate association data represents the end-entity (server) certificate that must match the server's certificate. The client must validate the server's certificate using PKIX validation, and the end-entity certificate must match the one specified in the TLSA record. |
| 2 | DANE-TA (trust anchor assertion) | The certificate association data represents a trust anchor that must appear in the server's certificate chain. Unlike usage 0, PKIX validation is not required; the client trusts the specified CA based solely on the TLSA record. |
| 3 | DANE-EE (domain-issued certificate) | The certificate association data represents the end-entity certificate that must match the server's certificate. Unlike usage 1, PKIX validation is not required; the client trusts the certificate based solely on the TLSA record. |

## Selector field values

The selector field specifies which part of the certificate should be used for matching:

| Value | Name | Description |
|:------|:-----|:------------|
| 0 | Full certificate | The entire certificate (including the signature) is used for matching. |
| 1 | SubjectPublicKeyInfo | Only the SubjectPublicKeyInfo structure (the public key and its algorithm identifier) from the certificate is used for matching. |

## Matching type field values

The matching type field defines how the certificate data is represented in the TLSA record:

| Value | Name | Description |
|:------|:-----|:------------|
| 0 | Full certificate data | The certificate association data contains the complete certificate or public key data, represented as hexadecimal. |
| 1 | SHA-256 hash | The certificate association data contains a SHA-256 hash of the certificate or public key, represented as 64 hexadecimal characters (32 bytes). |
| 2 | SHA-512 hash | The certificate association data contains a SHA-512 hash of the certificate or public key, represented as 128 hexadecimal characters (64 bytes). |

## Example TLSA records

### Example 1: HTTPS service with SHA-256 hash of full certificate

For an HTTPS service on port 443 using TCP, with a TLSA record that matches the full certificate using a SHA-256 hash:

```
_443._tcp.example.com.  3600  IN  TLSA  3  0  1  a1b2c3d4e5f6...
```

**Example breakdown:**

**`_443._tcp.example.com.`**
- `_443`: The port number (HTTPS).
- `_tcp`: The transport protocol (TCP).
- `example.com`: The domain for which the certificate association applies.
- `3600`: The TTL (1 hour).
- `IN TLSA`: Standard class and record type.

**Record fields:**
- `3` (**Usage**): DANE-EE (domain-issued certificate), meaning the certificate is trusted based solely on the TLSA record.
- `0` (**Selector**): Full certificate is used for matching.
- `1` (**Matching Type**): SHA-256 hash of the certificate.
- `a1b2c3d4e5f6...` (**Certificate Association Data**): The SHA-256 hash of the certificate (64 hexadecimal characters).

### Example 2: SMTP service with SHA-256 hash of public key

For an SMTP service on port 25 using TCP, with a TLSA record that matches the public key using a SHA-256 hash:

```
_25._tcp.mail.example.com.  3600  IN  TLSA  1  1  1  f9e8d7c6b5a4...
```

**Example breakdown:**

**`_25._tcp.mail.example.com.`**
- `_25`: The port number (SMTP).
- `_tcp`: The transport protocol (TCP).
- `mail.example.com`: The hostname for the mail server.
- `3600`: The TTL (1 hour).
- `IN TLSA`: Standard class and record type.

**Record fields:**
- `1` (**Usage**): PKIX-EE (service certificate constraint), meaning the certificate must match and pass PKIX validation.
- `1` (**Selector**): SubjectPublicKeyInfo (only the public key) is used for matching.
- `1` (**Matching Type**): SHA-256 hash of the public key.
- `f9e8d7c6b5a4...` (**Certificate Association Data**): The SHA-256 hash of the public key (64 hexadecimal characters).

## Important considerations for TLSA records

### DNSSEC requirement

TLSA records provide security benefits only when used in conjunction with **DNSSEC (DNS Security Extensions)**. Without DNSSEC, an attacker could modify TLSA records to point to their own certificates, negating the security benefits. DNSimple supports DNSSEC; see [Enabling DNSSEC](/articles/enabling-dnssec/) for more information.

### Service name format

The service name in a TLSA record must follow the format `_port._protocol.hostname`. Both the port and protocol must start with an underscore. Common examples include:
- `_443._tcp` for HTTPS
- `_25._tcp` for SMTP
- `_993._tcp` for IMAPS
- `_465._tcp` for SMTPS

### Certificate association data format

The certificate association data must be represented as hexadecimal characters. The length depends on the matching type:
- **Matching type 0 (Full)**: Variable length, representing the complete certificate or public key.
- **Matching type 1 (SHA-256)**: Exactly 64 hexadecimal characters (32 bytes).
- **Matching type 2 (SHA-512)**: Exactly 128 hexadecimal characters (64 bytes).

### Multiple TLSA records

A domain can have multiple TLSA records for the same service, allowing for certificate rollover or multiple valid certificates. Clients will accept a connection if any of the TLSA records match the server's certificate.

## References

**[RFC 6698](https://datatracker.ietf.org/doc/html/rfc6698)**: The DNS-Based Authentication of Named Entities (DANE) Transport Layer Security (TLS) Protocol: TLSA (The primary specification for TLSA records).

## Have more questions?

If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

