---
title: Do you support Elliptic Curve Cryptography (ECC) SSL certificates?
excerpt: Information about Elliptic Curve Cryptography (ECC) SSL certificate support at DNSimple.
categories:
- SSL Certificates
---

# Do you support Elliptic Curve Cryptography (ECC) SSL certificates?

At the time being, **we don't support elliptic curve keys**. Therefore, if you submit a custom CSR signed with an ECC key it will be rejected by our CA with an error message mentioning the key is too short.

We are aware of the advantages of ECC certificates and we hope to support them in the future.
