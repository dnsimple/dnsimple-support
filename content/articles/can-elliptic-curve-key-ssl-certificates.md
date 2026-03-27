---
title: Do You Support Elliptic Curve Cryptography (ECC) SSL Certificates?
excerpt: All DNSimple SSL certificates use ECDSA keys by default. RSA is available as an alternative for all certificate products.
meta: DNSimple issues all SSL certificates with ECDSA (ECC) keys using prime256v1 by default. RSA is available for all products via the signature algorithm selector. Sectigo certificates also support custom CSRs with ECDSA secp384r1 or RSA keys.
categories:
- SSL Certificates
---

# Do You Support Elliptic Curve Cryptography (ECC) SSL Certificates?

All DNSimple SSL certificates are issued with ECDSA keys using the `prime256v1` curve by default. ECDSA keys are smaller and faster than RSA keys at equivalent security levels.

## Supported Key Algorithms {#supported}

| Algorithm | Curve / Size | Default | Available for | Notes |
| --------- | ------------ | ------- | ------------- | ----- |
| ECDSA     | `prime256v1` | Yes     | All products  | Default for all certificate products |
| ECDSA     | `secp384r1`  | No      | Sectigo only  | Requires a custom CSR |
| RSA       | 2048+ bits   | No      | All products  | Selectable via the signature algorithm radio toggle during ordering |

All certificate products — Sectigo and Let's Encrypt — support both ECDSA and RSA through the signature algorithm selector on the certificate configuration page. Sectigo certificates also accept [custom CSRs](/articles/ssl-certificates/) for additional flexibility, such as using the `secp384r1` curve or providing your own key pair.

## Switching to RSA {#rsa}

If your platform or integration requires an RSA key, select RSA as the signature algorithm when ordering or renewing any certificate. The certificate configuration page includes a radio toggle to switch between ECDSA and RSA.

For Sectigo certificates, you can also provide a custom [CSR](/articles/what-is-csr/) with an RSA key if you need to use your own key pair.

See [How to Switch From an ECC-Signed Certificate to RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/) for step-by-step instructions.

## Have More Questions?

If you have any questions about key algorithms, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.