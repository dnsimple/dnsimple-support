---
title: Getting Started with SSL Certificates
excerpt: Everything you need to choose, order, validate, and install an SSL certificate with DNSimple.
meta: Complete guide to SSL certificates at DNSimple. Learn how to choose between Sectigo and Let's Encrypt, order and validate your certificate, install it on your server, and manage renewals.
categories:
- SSL Certificates
---

# Getting Started with SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

An [SSL certificate](/articles/ssl-certificates/) enables HTTPS on your site, encrypting the connection between a browser and your server to protect sensitive data like passwords and payment details. DNSimple provides domain-validated certificates from two certificate authorities — [Sectigo](/articles/ssl-certificates/#sectigo-singlename) and [Let's Encrypt](/articles/letsencrypt/) — that you can order, validate, and install from your account dashboard. This page covers the full process and links to detailed guides at every step.

## How SSL certificates work {#how-ssl-works}

When someone visits your site over HTTPS, the browser verifies the SSL certificate, negotiates an encrypted connection, and displays the padlock icon. The protocol used is technically TLS (Transport Layer Security), though the industry still refers to it as SSL. For a closer look at the encryption process, see [How HTTPS Works](/articles/how-https-works/).

Every certificate goes through a lifecycle: you order it, a [certificate authority (CA)](/articles/what-is-certificate-authority/) validates your domain ownership, the CA issues the certificate, you install it on your server, and eventually it expires and needs replacement. The [SSL Certificate Lifecycle](/articles/ssl-certificate-lifecycle/) article explains each stage in detail.

**Key concepts you may encounter along the way:**

- [Certificate Authority (CA)](/articles/what-is-certificate-authority/) — the trusted organization that issues your certificate
- [Certificate chain](/articles/what-is-ssl-certificate-chain/) — the chain of trust from your certificate through intermediate certificates to the [root certificate](/articles/what-is-ssl-root-certificate/)
- [CSR (Certificate Signing Request)](/articles/what-is-csr/) — the encoded request sent to the CA when you apply for a certificate
- [Private key](/articles/ssl-private-keys/) — the secret key that pairs with your certificate to enable encryption
- [SAN (Subject Alternative Name)](/articles/what-is-ssl-san/) — an extension that allows one certificate to cover multiple hostnames

For a comprehensive list of SSL terminology, see the [SSL Certificate Glossary](/articles/ssl-certificates-glossary/).

## DNSimple certificate products {#products}

DNSimple offers four certificate products, all [domain-validated](/articles/ssl-certificates-types/). No organization validation or extended validation is required.

| Product | CA | Covers | Cost | Validity |
|---|---|---|---|---|
| [Sectigo Single-Name](/articles/ssl-certificates/#sectigo-singlename) | Sectigo | One hostname (+ root for www) | $20/year | 200 days |
| [Sectigo Wildcard](/articles/ssl-certificates/#sectigo-wildcard) | Sectigo | All single-level subdomains + root | $100/year | 200 days |
| [Let's Encrypt SAN](/articles/ssl-certificates/#letsencrypt) | Let's Encrypt | Multiple specified hostnames | Free | 90 days |
| [Let's Encrypt Wildcard](/articles/ssl-certificates/#letsencrypt-wildcard) | Let's Encrypt | All single-level subdomains | Free | 90 days |

For a detailed feature comparison including validation methods, CSR support, and plan requirements, see [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/). For full technical specifications of each product, see [SSL Certificate Product Specifications](/articles/ssl-certificate-product-specs/).

Both CAs are globally recognized. For details on each authority, including root certificates and trust store information, see [SSL Certificate Authorities Used by DNSimple](/articles/ssl-certificate-authorities/).

> [!NOTE]
> Starting March 15, 2026, Sectigo certificates are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity). See [SSL Certificate Validity Changes (2026-2029)](/articles/announcement-ssl-certificate-validity-changes/) for the full timeline.

## Choose your certificate {#choose}

### Choose the certificate type {#choose-type}

Your choice depends on what you need to secure and how you want to manage the certificate:

- **One hostname** (e.g., `www.example.com`) — Sectigo Single-Name or Let's Encrypt SAN
- **All subdomains** (e.g., `*.example.com`) — Sectigo Wildcard or Let's Encrypt Wildcard
- **Multiple specific hostnames** on the same domain — Let's Encrypt SAN (on supported plans)

If your domain resolves with DNSimple, both Sectigo and Let's Encrypt certificates are available. If your domain resolves elsewhere, only Sectigo certificates can be ordered. You do not need to transfer or host your domain with DNSimple to purchase a Sectigo certificate.

For help deciding between the two CAs, see [Sectigo vs Let's Encrypt — Which is right for me?](/articles/standard-vs-letsencrypt/#whichone). For a broader look at certificate categories (single-name, wildcard, multi-domain, and validation levels), see [SSL Certificate Types](/articles/ssl-certificates-types/).

### Choose the certificate names {#choose-names}

The names on your certificate determine which hostnames it secures. Before ordering, decide which hostnames you need covered — including whether you need the root domain, a specific subdomain, or both. Read [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/) for guidance on how root domains and www subdomains work with different certificate types.

## Before you order {#before-you-order}

Before starting the order process:

1. **Verify server access.** Confirm you have access to your web server configuration or hosting panel to install a custom certificate.
1. **Check CSR requirements.** Most users do not need a custom CSR — DNSimple generates one automatically. If your web server requires a specific CSR, generate it before starting the order. See [What is the CSR?](/articles/what-is-csr/) for details.
1. **Understand private key handling.** When DNSimple generates the CSR, it also generates and stores the [private key](/articles/ssl-private-keys/). Our [private key policy](https://dnsimple.com/private-key-policy) explains how keys are created and stored. If you provide a custom CSR, you are responsible for storing the private key securely.

> [!WARNING]
> If you provide a custom CSR, store the [private key](/articles/ssl-private-keys/) safely. Without it, the certificate cannot be used. Custom CSRs are not supported for Let's Encrypt certificates.

## Order the certificate {#order}

The ordering process varies by certificate type:

- [Ordering a Sectigo Single-Name certificate](/articles/ordering-standard-certificate/)
- [Ordering a Sectigo Wildcard certificate](/articles/ordering-wildcard-certificate/)
- [Ordering a Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/)

If you have an expiring certificate that was previously purchased through DNSimple, you can [renew it](/articles/renewing-ssl-certificate/) instead of placing a new order. DNSimple will carry over your previous settings.

## Validate the certificate {#validate}

After placing an order, the certificate authority must verify you control the domain before issuing the certificate.

### Let's Encrypt validation {#validate-letsencrypt}

Let's Encrypt validates automatically using DNS-based challenges, provided your domain resolves with DNSimple. No manual action is required. If the certificate is not issued within 20 minutes of ordering, [contact support](https://dnsimple.com/feedback) to investigate. For common causes of Let's Encrypt failures, see [Troubleshooting Let's Encrypt Certificate Failures](/articles/troubleshooting-lets-encrypt-failures/).

### Sectigo validation {#validate-sectigo}

Sectigo uses [email-based domain validation](/articles/ssl-certificates-email-validation/). During the order process, you select an approval email address. Sectigo sends a verification email to that address, and you click the link to approve the certificate.

The approval email must be sent to a working mailbox at the domain. Check your spam or junk folder if the email does not arrive. For details on choosing or changing the validation email, see [Selecting a different validation email](/articles/how-to-different-ssl-domain-validation-email/). If the email does not arrive at all, see [Troubleshooting Email Validation for SSL Certificates](/articles/troubleshooting-ssl-email-validation/).

> [!NOTE]
> [It may take some time](/articles/how-long-to-issue-ssl-certificate/) to issue a certificate after validation is complete. If it takes longer than expected, see [Troubleshooting SSL Certificate Issuance Delays](/articles/troubleshooting-ssl-issuance-delays/) or [contact support](https://dnsimple.com/feedback).

## Install the certificate {#install}

Once the certificate is issued, download it from the certificate page in your DNSimple account. You will find the certificate file, the [private key](/articles/ssl-private-keys/) (if DNSimple generated the CSR), and the intermediate [certificate chain](/articles/what-is-ssl-certificate-chain/).

![SSL certificate page](/files/ssl-certificate-page.png)

Follow the [general installation instructions](/articles/installing-ssl-certificate/), or use one of our platform-specific guides:

- [Apache](/articles/ssl-certificate-with-apache/)
- [NGINX](/articles/ssl-certificate-with-nginx/)
- [Heroku](/articles/ssl-certificate-with-heroku/)
- [Microsoft Azure](/articles/ssl-certificate-with-azure/)
- [Microsoft Windows IIS](/articles/ssl-certificate-with-microsoft-iis/)
- [Windows](/articles/ssl-certificate-with-windows/)

If the browser reports certificate errors after installation, see [Troubleshooting SSL Certificate Errors](/articles/troubleshooting-ssl-certificate-errors/). For issues with missing or incorrectly ordered intermediate certificates, see [Troubleshooting SSL Certificate Chain Errors](/articles/troubleshooting-ssl-chain-errors/).

## Manage your certificates {#manage}

### Renewals {#renewals}

SSL certificates expire. When a certificate nears expiration, DNSimple sends [expiration notifications](/articles/expiring-product-email-notifications/) to alert you. You will need to order a replacement and install it on your server.

- [How does SSL certificate renewal work?](/articles/how-certificate-renewal-works/) — why "renewal" is technically a new certificate
- [Renewing an SSL certificate](/articles/renewing-ssl-certificate/) — general renewal steps
- [Renewing a Sectigo certificate](/articles/renewing-standard-ssl-certificate/)
- [Renewing a Let's Encrypt certificate](/articles/renewing-lets-encrypt-ssl-certificate/)

> [!TIP]
> For Let's Encrypt certificates, enable [auto-renewal](/articles/letsencrypt/#auto-renewal) so your certificate is automatically renewed before it expires. You'll still need to install the renewed certificate on your server.

### Reissuing a certificate {#reissuing}

If you need to replace the private key or CSR on an existing certificate, you can [reissue it](/articles/reissuing-ssl-certificate/) without purchasing a new one.

### Certificate validity changes {#validity}

Maximum certificate validity periods are decreasing due to CA/Browser Forum requirements. See [SSL Certificate Validity Changes (2026-2029)](/articles/announcement-ssl-certificate-validity-changes/) for the current and upcoming limits, and how they affect your renewal schedule.

## Troubleshooting {#troubleshooting}

- [Troubleshooting SSL Certificate Errors](/articles/troubleshooting-ssl-certificate-errors/) — browser warnings, domain mismatches, mixed content, expired certificates
- [Troubleshooting SSL Certificate Issuance Delays](/articles/troubleshooting-ssl-issuance-delays/) — pending validation, CAA record blocks, extended CA review
- [Troubleshooting Email Validation for SSL Certificates](/articles/troubleshooting-ssl-email-validation/) — wrong email address, spam filters, missing mailboxes, MX record issues
- [Troubleshooting Let's Encrypt Certificate Failures](/articles/troubleshooting-lets-encrypt-failures/) — DNS delegation, secondary DNS conflicts, CAA blocks, DNSSEC issues
- [Troubleshooting SSL Certificate Chain Errors](/articles/troubleshooting-ssl-chain-errors/) — missing intermediate certificates, wrong chain order
- [Troubleshooting Heroku SSL errors](/articles/heroku-error-ssl/)

## FAQ and reference {#faq}

- [SSL Certificates Frequently Asked Questions](/articles/faq-ssl-certificates/)
- [SSL Certificate Glossary](/articles/ssl-certificates-glossary/) — definitions of 30 common SSL terms
- [SSL Certificate Product Specifications](/articles/ssl-certificate-product-specs/) — side-by-side comparison of all DNSimple certificate products
- [SSL Certificate Authorities Used by DNSimple](/articles/ssl-certificate-authorities/)
- [Do you support ECC certificates?](/articles/can-elliptic-curve-key-ssl-certificates/)
- [Do you support EV certificates?](/articles/can-ev-ssl-certificates/)
- [Do you support multi-year certificates?](/articles/can-multi-year-ssl-certificates/)
- [Can I upgrade a single-name certificate to wildcard?](/articles/can-upgrade-single-hostname-ssl-certificate-to-wildcard/)
- [I got an ECC-signed certificate but want RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/)
- [SHA-2 SSL certificates](/articles/sha-2-ssl-certificates/)

## Have more questions?

If you have any questions about SSL certificates, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
