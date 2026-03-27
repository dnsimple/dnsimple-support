---
title: SSL Certificate Product Specifications
excerpt: A side-by-side comparison of all DNSimple SSL certificate products, including pricing, validity, validation methods, and features.
meta: Compare DNSimple SSL certificate products side by side. Covers Sectigo single-name, Sectigo wildcard, Let's Encrypt SAN, and Let's Encrypt wildcard certificates with pricing, validity, and features.
categories:
- SSL Certificates
---

# SSL Certificate Product Specifications

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple offers four SSL certificate products issued by two [certificate authorities](/articles/ssl-certificate-authorities/): Sectigo and Let's Encrypt. Use the table below to compare features and determine which product fits your needs.

## Product Comparison {#comparison}

|                                   | Sectigo Single-Name            | Sectigo Wildcard                     | Let's Encrypt SAN              | Let's Encrypt Wildcard              |
| --------------------------------- | ------------------------------ | ------------------------------------ | ------------------------------ | ----------------------------------- |
| Certificate authority             | Sectigo                        | Sectigo                              | Let's Encrypt                  | Let's Encrypt                       |
| Price                             | $20/year                       | $100/year                            | Free                           | Free                                |
| Maximum validity                  | 200 days (as of March 2026)    | 200 days (as of March 2026)          | 90 days                        | 90 days                             |
| Hostnames covered                 | 1 hostname + root (for `www`)  | All single-level subdomains + root   | Up to 100 SAN names            | All single-level subdomains         |
| Covers root domain                | Only for `www` hostname        | Yes                                  | If included in SAN list        | No                                  |
| Validation method                 | Email                          | Email                                | DNS (automatic)                | DNS (automatic)                     |
| Auto-renewal                      | No                             | No                                   | Yes                            | Yes                                 |
| Custom CSR support                | Yes                            | Yes                                  | No                             | No                                  |
| Default key algorithm             | ECDSA (prime256v1)             | ECDSA (prime256v1)                   | ECDSA                          | ECDSA                               |
| RSA key available                 | Yes                            | Yes                                  | Yes                            | Yes                                 |
| DNSimple subscription required    | No                             | No                                   | Yes                            | Yes                                 |
| Domain must resolve with DNSimple | No                             | No                                   | Yes                            | Yes                                 |
| Plan restrictions                 | None                           | None                                 | SAN name count varies by plan  | Available on certain plans only     |

> [!NOTE]
> Sectigo certificate validity is changing due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity). The maximum drops to 100 days in March 2027 and 47 days in March 2029.

## Ordering and Validation {#ordering}

- **Sectigo certificates** require [email-based domain validation](/articles/ssl-certificates-email-validation/). You select a validation email address during the ordering process and receive a confirmation link from the CA.
- **Let's Encrypt certificates** are validated automatically using DNS challenges. Your domain must resolve with DNSimple for the validation to succeed.

For step-by-step ordering instructions, see:

- [Ordering a Sectigo Certificate](/articles/ordering-standard-certificate/)
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/)

## Renewal and Expiration {#renewal}

| Behavior                 | Sectigo                                                        | Let's Encrypt                                  |
| ------------------------ | -------------------------------------------------------------- | ---------------------------------------------- |
| Renewal method           | Manual - purchase a new certificate before expiration         | Automatic - [auto-renewal](/articles/letsencrypt/#auto-renewal) renews before expiration |
| Renewal reminder emails  | Yes - sent at 60, 30, 14, 7, and 3 days before expiration    | Yes - if auto-renewal is disabled             |
| Installation after renewal | Manual - download and install the new certificate on your server           | Manual - download and install the renewed certificate on your server |

For details on how renewals work, see [How Does an SSL Certificate Renewal Work?](/articles/how-certificate-renewal-works/).

## Key Algorithms {#algorithms}

All DNSimple certificates default to [ECDSA](/articles/can-elliptic-curve-key-ssl-certificates/) keys using the `prime256v1` curve. ECDSA keys are smaller and faster than RSA keys at equivalent security levels.

If you need an RSA key for compatibility with older systems, you can select RSA as the signature algorithm during ordering. The certificate configuration page includes a radio toggle to choose between ECDSA and RSA for all certificate products.

Sectigo certificates also support [custom CSRs](/articles/what-is-csr/) if you need to provide your own key pair. Custom CSRs are not supported for Let's Encrypt certificates.

**Learn more:** [How to Switch From an ECC-Signed Certificate to RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/)

## Certificate Names and Hostnames {#names}

The number and type of hostnames a certificate covers depends on the product:

- **Single-name** - Covers exactly one hostname. If the hostname is `www`, Sectigo also covers the root domain.
- **Wildcard** - Covers all single-level subdomains (`*.example.com`). Sectigo wildcards include the root domain; Let's Encrypt wildcards do not.
- **SAN (Let's Encrypt)** - Covers up to 100 hostnames specified at order time. The number of customizable names depends on your plan.

For guidance on choosing the right hostnames, see [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/).

## Have More Questions?

If you have any questions about SSL certificate products, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
