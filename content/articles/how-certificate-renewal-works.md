---
title: How does an SSL Certificate Renewal work?
excerpt: SSL certificate renewal is actually the issuance of a new certificate to replace an expiring one, requiring re-validation and re-installation.
meta: Understand how SSL certificate renewal works, why it requires a new certificate, and what happens during the renewal process.
categories:
- SSL Certificates
---

# How does an SSL Certificate Renewal work?

### Table of Contents {#toc}

* TOC
{:toc}

---

Unlike domain registration, an issued SSL certificate cannot have its expiration date extended. The certificate's expiration date is included in the cryptographic data that the [certificate authority](/articles/what-is-certificate-authority/) signs when the certificate is issued. If the expiration date were modified, the certificate signature would no longer be valid, and browsers would reject the certificate.

> [!NOTE]
> The term *renewal* can be misleading. An SSL certificate cannot be extended. Renewal always results in a new certificate being issued to replace the existing one.

Instead of extending the existing certificate, renewal results in a new certificate request being submitted to the certificate authority. Once the request is validated, the certificate authority issues a replacement certificate with a new validity period. The new certificate will have:

- A new serial number
- A new expiration date
- A new issuance date
- A new private key (unless you reuse the same [CSR](/articles/what-is-csr/))

The newly issued certificate must then replace the expiring certificate on the server so that browsers continue to trust the secure connection.

## Validation during renewal {#validation}

Renewal does not bypass the validation rules required by certificate authorities. Each time a certificate is issued -- including renewals -- the certificate authority must confirm that the requester still controls the domain names included in the certificate. The specific validation method depends on the certificate type: Sectigo uses email-based validation, while Let's Encrypt uses automated DNS challenges.

For a detailed comparison of validation methods and how they work, see [Domain Validation Methods for SSL Certificates](/articles/ssl-domain-validation-methods/).

## What happens when a certificate expires {#expiration}

If a replacement certificate is not issued and installed before the current certificate expires, browsers will treat the certificate as invalid. Visitors will see security warnings indicating that the connection is not trusted, which typically block access to the site unless the visitor explicitly chooses to bypass the warning.

> [!WARNING]
> Browsers strictly enforce certificate expiration. There is no grace period once a certificate reaches its expiration date.

For Let's Encrypt certificates with auto-renewal enabled, DNSimple automatically handles the renewal process, but you still need to install the new certificate on your server once it is issued.

## Shorter certificate lifetimes starting March 2026 {#shorter-lifetimes}

Starting March 15, 2026, Sectigo certificates are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity).

You will need to request a new certificate before the current one expires to maintain uninterrupted coverage. Each new certificate requires completing [domain validation](/articles/ssl-certificates-email-validation/) again.

## Taking action {#taking-action}

If you need to request or install a replacement certificate, see the following guides:

- [Renewing an SSL Certificate](/articles/renew-ssl-certificate/)
- [Renewing a Sectigo SSL Certificate](/articles/renew-sectigo-ssl-certificate/)
- [Renewing a Let's Encrypt SSL Certificate](/articles/renew-lets-encrypt-ssl-certificate/)
- [Installing an SSL Certificate](/articles/install-ssl-certificate/)

## Related reading {#related}

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/)
- [How long does it take to issue an SSL certificate?](/articles/how-long-to-issue-ssl-certificate/)
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/)
- [Let's Encrypt: Free SSL Certificates with DNSimple](/articles/letsencrypt/)

## Have more questions?

If you have additional questions or need any assistance with how SSL certificate renewals work, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
