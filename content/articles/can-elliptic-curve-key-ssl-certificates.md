---
title: Do You Support Elliptic Curve Cryptography (ECC) SSL Certificates?
excerpt: All DNSimple SSL certificates use ECDSA keys by default. Custom CSRs with RSA keys are also supported for Sectigo certificates.
meta: DNSimple issues all SSL certificates with ECDSA (ECC) keys using prime256v1 by default. Supports custom CSRs with ECDSA prime256v1, secp384r1, or RSA keys for Sectigo certificates.
categories:
- SSL Certificates
---

# Do You Support Elliptic Curve Cryptography (ECC) SSL Certificates?

All DNSimple SSL certificates are issued with ECDSA keys using the `prime256v1` curve by default. ECDSA keys are smaller and faster than RSA keys at equivalent security levels.

## Supported Key Algorithms {#supported}

| Algorithm | Curve / Size | Default | Notes |
| --------- | ------------ | ------- | ----- |
| ECDSA     | `prime256v1` | Yes     | Default for all certificate products |
| ECDSA     | `secp384r1`  | No      | Supported via custom CSR (Sectigo only) |
| RSA       | 2048+ bits   | No      | Supported via custom CSR (Sectigo only) |

Custom CSRs are supported only for [Sectigo certificates](/articles/ssl-certificates/). Let's Encrypt certificates always use the DNSimple-generated ECDSA key.

## Switching to RSA {#rsa}

If your platform or integration requires an RSA key, you can provide a custom [CSR](/articles/what-is-csr/) with an RSA key when ordering a Sectigo certificate. See [I Got an ECC-Signed Certificate but Want RSA](/articles/ssl-got-ecc-want-rsa/) for step-by-step instructions.

## Have More Questions?

If you have any questions about key algorithms, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.