---
title: SSHFP Record Reference
excerpt: Learn the structure, format, and technical details of SSHFP records for SSH key verification. Understand algorithms, fingerprint types, and how SSHFP enhances security.
meta: Learn more about the structure, format, and key technical details of SSHFP records.
categories:
- DNS
---
# SSHFP Record Reference
This article serves as a reference for the formal structure, format, and key technical details of an [SSHFP (SSH Fingerprint) record](/articles/sshfp-records/).

## SSHFP record format
An SSHFP record has a type code of 44 and is defined in [RFC 4255](https://datatracker.ietf.org/doc/html/rfc4255). The record's data section consists of three primary components:

`<name>` `<TTL>` `IN SSHFP` `<algorithm>` `<fingerprint-type>` `<fingerprint>`
- **`algorithm`**: The public key algorithm used. Values include: `1` (RSA), `2` (DSA), `3` (ECDSA), `4` (ED25519)
- **`fingerprint-type`**: The algorithm used to generate the fingerprint. Values include: `1` (SHA-1), `2` (SHA-256)
- **`fingerprint`**: The public key fingerprint. A hexadecimal string.

In the DNSimple record editor, an SSHFP record is represented by the following customizable elements:
- **Name**: The host name for the record, without the domain name.
- **Algorithm**: The algorithm of the public key.
- **Fingerprint Type**: The algorithm used to generate the fingerprint.
- **Fingerprint**: The public key fingerprint.
- **TTL**: The time-to-live in seconds.

## Example SSHFP record
A single SSH host can have multiple SSHFP records, each for a different algorithm or fingerprint type.
```
server.example.com. IN SSHFP 1 1 82f6f59c25f4c478cf39943343460395c2df11c8 server.example.com. IN SSHFP 4 2 24d27e907a972c72b22f98cb0422f7902d25081f964ce2a2202613d90236a29f
```

The first record is for an RSA key (`1`) with a SHA-1 fingerprint (`1`).
The second record is for an ED25519 key (`4`) with a SHA-256 fingerprint (`2`).

## How it's used
When an SSH client connects to a host, it can perform a DNS lookup for the corresponding SSHFP record. The client then compares the fingerprint of the host's public key with the one in the DNS record. If they match, the connection is trusted.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

