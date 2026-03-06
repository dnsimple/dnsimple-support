---
title: How does an SSL Certificate Renewal work?
excerpt: SSL certificate renewal is actually the issuance of a new certificate to replace an expiring one, requiring re-validation and re-installation.
meta: Understand how SSL certificate renewal works, why it requires a new certificate, and what happens during the renewal process.
categories:
- SSL Certificates
---

# How does an SSL Certificate Renewal work?

The lifecycle of an SSL certificate is different from domain registration. Unlike domains, an issued SSL certificate cannot have its expiration date extended.

This happens because the certificate’s expiration date is included in the cryptographic data that the certificate authority signs when the certificate is issued. If the expiration date were modified, the certificate signature would no longer be valid, and browsers would reject the certificate.

> [!NOTE]
> The term *renewal* can be misleading. An SSL certificate cannot be extended. Renewal always results in a new certificate being issued to replace the existing one.

Instead of extending the existing certificate, renewal results in a new certificate request being submitted to the certificate authority. Once the request is validated, the certificate authority issues a replacement certificate with a new validity period.

The newly issued certificate must then replace the expiring certificate on the server so that browsers continue to trust the secure connection.

## Why renewal creates a new certificate

SSL certificate "renewal" is actually the issuance of a completely new certificate, not an extension of the existing one. This is because SSL certificates contain an expiration date that is cryptographically signed by the [certificate authority](/articles/what-is-certificate-authority/). The expiration date cannot be changed without invalidating the certificate's signature.

When you renew a certificate, you're requesting a new certificate with a new expiration date. The new certificate will have:
- A new serial number
- A new expiration date
- A new issuance date
- Potentially a new private key (unless you reuse the same [CSR](/articles/what-is-csr/))

## Validation during renewal

Renewal does not bypass the validation rules required by certificate authorities. Each time a certificate is issued, the certificate authority must confirm that the requester still controls the domain names included in the certificate.

This requirement exists to prevent certificates from being issued for domains that the requester no longer controls.

For certificates issued by traditional certificate authorities such as Sectigo, this confirmation usually takes the form of **email-based domain validation**.

For [Let's Encrypt certificates](/articles/letsencrypt/), domain validation is performed using automated DNS challenges. When auto-renewal is enabled, DNSimple automatically completes this validation to obtain a replacement certificate before the existing one expires.

Regardless of the certificate provider, the purpose of validation during renewal is the same: to ensure that the entity requesting the certificate still has control over the domain.

## What happens when a certificate expires

If a replacement certificate is not issued and installed before the current certificate expires, browsers will treat the certificate as invalid.

When this happens, visitors attempting to access the site will see security warnings indicating that the connection is not trusted. These warnings typically block access to the site unless the visitor explicitly chooses to bypass the warning.

> [!WARNING]
> If the existing certificate expires before a replacement certificate is installed, browsers will display security warnings and may block access to the site.

Because browsers strictly enforce certificate expiration, there is no grace period once a certificate reaches its expiration date.

For Let's Encrypt certificates that use automatic renewal, DNSimple attempts to obtain a replacement certificate before expiration. However, the replacement certificate must still be installed on the server for the secure connection to continue working normally.

## Shorter certificate lifetimes starting March 2026 {#shorter-lifetimes}

Starting March 15, 2026, Sectigo certificates are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity).

You will need to request a new certificate before the current one expires to maintain uninterrupted coverage. Each new certificate requires completing [domain validation](/articles/ssl-certificates-email-validation/) again.

## What happens if renewal isn't completed

If the renewal process isn't completed, or if the new certificate isn't installed before the old certificate expires, browsers will display security warnings when users visit your site. The old certificate becomes invalid once it expires, and there's no grace period.

For Let's Encrypt certificates with auto-renewal enabled, DNSimple automatically handles the renewal process, but you still need to install the new certificate on your server once it's issued.

## Taking action

If you need to request or install a replacement certificate, see the following guides:

- [Renewing an SSL Certificate](/articles/renewing-ssl-certificate/)
- [Renewing a Sectigo SSL Certificate](/articles/renewing-standard-ssl-certificate/)
- [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/)
- [Installing an SSL Certificate](/articles/installing-ssl-certificate/)


## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/)
- [How long does it take to issue an SSL certificate?](/articles/how-long-to-issue-ssl-certificate/)
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/)
- [Let's Encrypt and DNSimple](/articles/letsencrypt/)


## Have more questions?

If you have additional questions or need any assistance with how SSL certificate renewals work, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
