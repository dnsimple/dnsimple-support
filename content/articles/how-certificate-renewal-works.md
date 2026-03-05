---
title: How does an SSL Certificate Renewal work?
excerpt: SSL certificate renewal is actually the issuance of a new certificate to replace an expiring one, requiring re-validation and re-installation.
meta: Understand how SSL certificate renewal works, why it requires a new certificate, and what happens during the renewal process.
categories:
- SSL Certificates
---

# How does an SSL Certificate Renewal work?

The SSL certificate lifecycle is different from domain registration. Once an SSL certificate is issued, there is no way to extend the expiration date of the existing certificate. Unlike domains, which can be renewed to extend their validity period, SSL certificates have fixed expiration dates that cannot be modified.

## Why renewal creates a new certificate

SSL certificate "renewal" is actually the issuance of a completely new certificate, not an extension of the existing one. This is because SSL certificates contain an expiration date that is cryptographically signed by the [certificate authority](/articles/what-is-certificate-authority/). The expiration date cannot be changed without invalidating the certificate's signature.

When you renew a certificate, you're requesting a new certificate with a new expiration date. The new certificate will have:
- A new serial number
- A new expiration date
- A new issuance date
- Potentially a new private key (unless you reuse the same [CSR](/articles/what-is-csr/))

## The renewal process

The renewal process involves several steps that mirror the initial certificate issuance:

1. **Request submission**: A new certificate request is submitted to the certificate authority
2. **Domain validation**: The certificate authority must re-validate domain ownership, just as with the initial certificate request
3. **Certificate issuance**: Once validated, the CA issues a new certificate
4. **Installation**: The new certificate and private key must be installed on your server, replacing the old certificate

## Why re-validation is required

Certificate authorities require re-validation for each certificate issuance, including renewals. This ensures that domain ownership hasn't changed and that the entity requesting the renewal still controls the domain. The validation process is the same whether it's a new certificate or a renewal.

For [Sectigo certificates](/articles/standard-vs-letsencrypt/), this typically means email-based validation. For [Let's Encrypt certificates](/articles/letsencrypt/), DNS-based validation is performed automatically if auto-renewal is enabled.

## What happens if renewal isn't completed

If the renewal process isn't completed, or if the new certificate isn't installed before the old certificate expires, browsers will display security warnings when users visit your site. The old certificate becomes invalid once it expires, and there's no grace period.

For Let's Encrypt certificates with auto-renewal enabled, DNSimple automatically handles the renewal process, but you still need to install the new certificate on your server once it's issued.

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand how CAs issue certificates
- [How long does it take to issue an SSL certificate?](/articles/how-long-to-issue-ssl-certificate/) - Learn about certificate issuance timelines
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare renewal processes between certificate types
- [Let's Encrypt and DNSimple](/articles/letsencrypt/) - Learn about automatic renewal for Let's Encrypt certificates

## Taking action

- [Renewing an SSL Certificate](/articles/renewing-ssl-certificate/) - Step-by-step guide to renewing your certificate
- [Renewing a standard SSL Certificate](/articles/renewing-standard-ssl-certificate/) - Renew a Sectigo certificate
- [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/) - Renew a Let's Encrypt certificate
- [Installing an SSL Certificate](/articles/installing-ssl-certificate/) - Learn how to install your renewed certificate
