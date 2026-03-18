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
| Certificate Expiration | 90 days | 200 days (as of March 2026) |
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

**Sectigo** certificate validity depends on when the certificate is issued. Certificates issued before March 15, 2026, may be valid for up to one year. Beginning March 15, 2026, newly issued Sectigo certificates are limited to a maximum of 200 days, with additional reductions scheduled in later phases.

The difference in validity periods will narrow over time as the maximum allowed lifetime for publicly trusted certificates continues to decrease. For more details, see [SSL Certificate Validity Changes (2026 - 2029)](/articles/announcement-ssl-certificate-validity-changes/).

### Validation methods

**Let's Encrypt** uses DNS-based validation exclusively. The domain must be resolving with DNSimple for Let's Encrypt validation to work, as DNSimple automatically creates the required DNS records for validation.

**Sectigo** uses email-based validation. The certificate authority sends a validation email to an administrative email address for the domain. You must approve the certificate request by clicking a link in the email.

> [!NOTE]
> Validation emails are only sent to specific addresses (for example, admin@ or hostmaster@). For more details, see [Approved email addresses for SSL validation](/articles/ssl-certificates-email-validation/).

You must approve the certificate request by clicking the link in the email.

### Custom Certificate Signing Requests (CSR)

**Let's Encrypt** does not support custom CSRs. DNSimple automatically generates the [CSR](/articles/what-is-csr/) and private key for Let's Encrypt certificates.

**Sectigo** supports custom CSRs, allowing you to use your own private key and specify certificate details. This is useful when you need to maintain control over your private keys or have specific certificate requirements.

### Cost and automation

**Let's Encrypt** certificates are free. DNSimple automates issuance and renewal when auto-renewal is enabled. Once a new certificate is issued, you still need to install it on your server.

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
| You want to fully automate SSL certificate **orders** without manual intervention. | **Let's Encrypt** |
| Your domain is resolving exclusively with DNSimple. | **Let's Encrypt** or **Sectigo** |
| Your domain is resolving with both DNSimple and Secondary DNS. | **Sectigo** |
| Your domain is NOT resolving with DNSimple. | **Sectigo** |
| Your domain is NOT registered, but resolving with DNSimple. | **Let's Encrypt** or **Sectigo** |
| Your domain is NOT registered and NOT resolving with DNSimple. | **Sectigo** |
| You want to purchase a certificate with no subscription. | **Sectigo** |

> [!NOTE]
> *Sectigo certificates currently have a longer maximum validity period than Let's Encrypt certificates. However, industry changes are reducing certificate lifetimes over time, and this difference will become smaller in future phases. For more details, see [SSL Certificate Validity Changes (2026 - 2029)](/articles/announcement-ssl-certificate-validity-changes/).

## Taking action

- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Step-by-step guide to ordering a Let's Encrypt certificate
- [Ordering a Standard SSL Certificate](/articles/ordering-standard-certificate/) - Step-by-step guide to ordering a Sectigo certificate
- [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/) - How to renew Let's Encrypt certificates
- [Renewing a standard SSL Certificate](/articles/renewing-standard-ssl-certificate/) - How to renew Sectigo certificates

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Learn about certificate authorities and their role in SSL certificates
- [SSL Certificate Types](/articles/ssl-certificates-types/) - Understand different SSL certificate classifications
- [Let's Encrypt and DNSimple](/articles/letsencrypt/) - Learn more about Let's Encrypt certificates at DNSimple
- [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/) - Understand the certificate renewal process



## Have more questions?

If you have additional questions or need any assistance with choosing between Sectigo and Let's Encrypt, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
