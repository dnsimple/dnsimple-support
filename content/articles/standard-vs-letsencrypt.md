---
title: Sectigo vs Let's Encrypt SSL Certificates
excerpt: Explains the key differences between Sectigo and Let's Encrypt SSL certificates to help you choose the right certificate type.
meta: Compare Sectigo and Let's Encrypt SSL certificates. Understand the differences in expiration, validation, cost, and features to select the best certificate for your needs.
categories:
- SSL Certificates
---

# Sectigo vs Let's Encrypt SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

Sectigo and Let's Encrypt are two different [certificate authorities](/articles/what-is-certificate-authority/) that issue SSL certificates through DNSimple. Understanding their differences helps you choose the certificate type that best fits your needs.

## Comparison: Let's Encrypt vs Sectigo SSL certificates

The table below summarizes the key differences between Let's Encrypt and Sectigo SSL certificates available through DNSimple. These differences reflect the current DNSimple offering and may help you decide which certificate type you need.

> [!NOTE]
> The table only reflects the status of the current DNSimple offering. Some features may be available at the Certificate Authority, but are currently not supported by DNSimple.

| | Let's Encrypt | Sectigo |
| --- | --- | --- |
| Certificate Expiration | 90 days | 1 year |
| Single names | Supported | Supported |
| Custom names | Supported (on certain plans) | Supported |
| Wildcard names | Supported (on certain plans) | Supported |
| Same-domain multi-names (SAN) | Supported (on certain plans) | Not Supported |
| Multi-domains (SAN) | Not Supported | Not Supported |
| [Validation type](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level) | DV via DNS only | DV via email only |
| Cost | Free | $20-$100 |
| Custom CSR | Not Supported | Supported |

## Understanding the differences

### Certificate expiration

**Let's Encrypt** certificates expire after 90 days. This shorter validity period is by design, encouraging automated renewal processes. Let's Encrypt certificates can be set to [auto-renew](/articles/letsencrypt/#auto-renewal) through DNSimple, which automatically renews certificates 30 days before expiration.

**Sectigo** certificates are valid for 1 year. This longer validity period means less frequent renewal cycles, but requires manual renewal or monitoring to ensure certificates don't expire.

### Validation methods

**Let's Encrypt** uses DNS-based validation exclusively. The domain must be resolving with DNSimple for Let's Encrypt validation to work, as DNSimple automatically creates the required DNS records for validation.

**Sectigo** uses email-based validation. The certificate authority sends a validation email to an administrative email address for the domain. You must approve the certificate request by clicking a link in the email.

### Custom Certificate Signing Requests (CSR)

**Let's Encrypt** does not support custom CSRs. DNSimple automatically generates the [CSR](/articles/what-is-csr/) and private key for Let's Encrypt certificates.

**Sectigo** supports custom CSRs, allowing you to use your own private key and specify certificate details. This is useful when you need to maintain control over your private keys or have specific certificate requirements.

### Cost and automation

**Let's Encrypt** certificates are free. The issuance and renewal process is fully automated when using DNSimple's auto-renewal feature.

**Sectigo** certificates cost between $20-$100 depending on the certificate type. Renewal requires manual action, including email approval and certificate installation.

## Choosing the right certificate

The following considerations may help you determine which certificate type best fits your needs:

| Requirement | Recommended Certificate |
| --- | --- |
| You want to secure a domain name. | **Let's Encrypt** or **Sectigo** |
| You want to provide a custom CSR | **Sectigo** |
| You want to use a custom private key. | **Sectigo** |
| You want to use a wildcard name. | **Let's Encrypt** or **Sectigo** |
| You want a longer expiration period. | **Sectigo** |
| You want to fully automate SSL certificate orders without manual intervention. | **Let's Encrypt** |
| Your domain is resolving exclusively with DNSimple. | **Let's Encrypt** or **Sectigo** |
| Your domain is resolving with both DNSimple and Secondary DNS. | **Sectigo** |
| Your domain is NOT resolving with DNSimple. | **Sectigo** |
| Your domain is NOT registered, but resolving with DNSimple. | **Let's Encrypt** or **Sectigo** |
| Your domain is NOT registered and NOT resolving with DNSimple. | **Sectigo** |
| You want to purchase a certificate with no subscription. | **Sectigo** |

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Learn about certificate authorities and their role in SSL certificates
- [SSL Certificate Types](/articles/ssl-certificates-types/) - Understand different SSL certificate classifications
- [Let's Encrypt and DNSimple](/articles/letsencrypt/) - Learn more about Let's Encrypt certificates at DNSimple
- [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/) - Understand the certificate renewal process

## Taking action

- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Step-by-step guide to ordering a Let's Encrypt certificate
- [Ordering a Standard SSL Certificate](/articles/ordering-standard-certificate/) - Step-by-step guide to ordering a Sectigo certificate
- [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/) - How to renew Let's Encrypt certificates
- [Renewing a standard SSL Certificate](/articles/renewing-standard-ssl-certificate/) - How to renew Sectigo certificates
