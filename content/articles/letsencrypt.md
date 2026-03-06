---
title: Let's Encrypt and DNSimple
excerpt: Let's Encrypt is a free, automated, and open certificate authority that DNSimple integrates with to provide SSL certificates at no cost.
meta: Learn about Let's Encrypt, how DNSimple integrates with it, and what makes Let's Encrypt certificates different from traditional certificate authorities.
categories:
- SSL Certificates
- Integrations
---

# Let's Encrypt and DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

[Let's Encrypt](https://letsencrypt.org/) is a [certificate authority](/articles/what-is-certificate-authority/) (CA) that was launched in late 2015 and became an official member of the CA/Browser Forum in 2016. Let's Encrypt revolutionized the SSL certificate landscape by making certificates free and easily accessible.

## What makes Let's Encrypt different

Let's Encrypt's three distinguishing characteristics are _free_, _automated_, and _open_:

- **Free**: Let's Encrypt SSL certificates are free. They don't charge per certificate, making SSL encryption accessible to everyone.
- **Automated**: Let's Encrypt's issuance process is fully automated. They developed an issuance protocol called [ACME](https://letsencrypt.org/docs/acme-protocol-updates/) (Automated Certificate Management Environment) that's designed to work without manual intervention.
- **Open**: The source code of Let's Encrypt's certification authority is completely open source and available in a [GitHub account](https://github.com/letsencrypt), promoting transparency and community involvement.

## Differences between Let's Encrypt and Sectigo SSL certificates

This table summarizes the most important differences between Let's Encrypt and Sectigo SSL certificates:

| | Let's Encrypt | Sectigo |
| --- | --- | --- |
| Certificate Expiration | 90 days | 200 days |
| Single names | Supported | Supported |
| Wildcard names | Supported | Supported |
| Multi-domain (via SAN) | Supported by default | Supported only by specific products |
| Max SAN domains | 100 | Depends on the [CA](/articles/what-is-certificate-authority/) and product |
| [Validation type](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level) | <acronym title="Domain Validated">DV</acronym> only | <acronym title="Domain Validated">DV</acronym>, <acronym title="Organization Validated (not supported by DNSimple)">OV</acronym>, <acronym title="Extended Validation (not supported by DNSimple)">EV</acronym> |
| Cost | Free | Depends on the [CA](/articles/what-is-certificate-authority/) and product |
| Limits | [Per-domain, Per-week limits](https://letsencrypt.org/docs/rate-limits/) | N/A |


## Let's Encrypt highlights

Let's Encrypt is different from most traditional CAs. Here are a few notes and limitations to keep in mind before requesting one of their SSL certificates:

- Let's Encrypt only issues [domain-validated](/articles/ssl-certificates-types/) SSL certificates. There's no plan to support <acronym title="Organization Validated">OV</acronym> or <acronym title="Extended Validation">EV</acronym> certificates.
- Let's Encrypt supports single-name and wildcard names.
- A single Let's Encrypt certificate can include up to 100 SAN names. Names can be single-name, wildcard names, or both.
- Let's Encrypt certificates have a fixed expiration period of 90 days. You can't request a certificate with a longer expiration, though most other CAs will issue certificates valid for up to one year.
- Let's Encrypt's SSL certificates are [compatible with major browsers](https://letsencrypt.org/docs/certificate-compatibility/) and [trusted by all major root programs](https://letsencrypt.org/2018/08/06/trusted-by-all-major-root-programs.html).
- Let's Encrypt certificates are domain-validated. The most common validation mechanisms are DNS-based and HTTP-based. They don't support traditional [email-based validation](/articles/ssl-certificates-email-validation/).
- Let's Encrypt [rate-limits](https://letsencrypt.org/docs/rate-limits/) requests. Understand their limits before requesting a large number of certificates.

Some Let's Encrypt features may not be supported by DNSimple. Check the [limitations](/articles/letsencrypt/#limitations) section to learn which features are supported.

## DNSimple's Let's Encrypt integration

DNSimple integrates with Let's Encrypt to provide free SSL certificates.

DNSimple automates certificate issuance and renewal, but certificate installation is still completed separately after the certificate is issued.

### Requirements for Let's Encrypt certificates

To request an SSL certificate with Let's Encrypt through DNSimple, the domain **must be delegated to and exclusively resolving with DNSimple**. Let's Encrypt certificates are not compatible with Secondary DNS configurations because DNSimple needs to create DNS records for validation. The domain doesn't need to be registered with DNSimple, only resolving with it.

### Automated validation process

The certificate validation is completely automated using DNS-based challenges. DNSimple automatically creates the required DNS records (ACME challenge records) for validation. Once the certificate is issued, you'll receive an email and [webhook notification](https://developer.dnsimple.com/v2/webhooks/). The certificate is then available to download from your DNSimple account.

> [!NOTE]
> ACME challenge records (e.g., `_acme-challenge.subdomain.example.com`) may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) in your DNS zone. If you're using wildcard records, this may affect DNS resolution for intermediate domain names. Learn more about [wildcards and ENTs](/articles/empty-non-terminals/#the-acme-challenge-example).

### Certificate expiration and auto-renewal

Let's Encrypt certificates expire after 90 days. DNSimple supports automatic renewal for Let's Encrypt certificates. When auto-renewal is enabled, the certificate automatically renews before expiration. If re-validation is necessary, DNSimple automatically re-validates the domain via DNS. Once renewed, you'll receive an email and webhook notification.

As recommended by Let's Encrypt, renewal happens any time after 60 days (30 days before expiration), with automatic retry attempts if renewal fails.

The automated nature of Let's Encrypt certificates makes them ideal for environments where manual certificate management would be burdensome. The entire process—from initial issuance to renewal—can be fully automated using DNSimple's API and auto-renewal features.


## Let's Encrypt certificate features

Let's Encrypt provides only one type of certificate: domain-validated certificates that use the [Subject Alternative Name (SAN) extension](/articles/what-is-ssl-san/). They support both single-name and wildcard names, and even certificates that protect only one hostname still use the SAN extension.

### Certificate features

Let's Encrypt certificates have several distinctive features:

- **Domain-validated only**: Let's Encrypt issues only domain-validated certificates. They don't offer organization-validated or extended-validation certificates.
- **DNS-based validation**: Let's Encrypt uses DNS-based validation exclusively. They don't support email-based validation like traditional certificate authorities.
- **90-day expiration**: All Let's Encrypt certificates expire after 90 days, encouraging automated renewal processes.
- **Browser compatibility**: Let's Encrypt certificates are [compatible with major browsers](https://letsencrypt.org/docs/certificate-compatibility/) and [trusted by all major root programs](https://letsencrypt.org/2018/08/06/trusted-by-all-major-root-programs.html).
- **Rate limits**: Let's Encrypt [rate-limits](https://letsencrypt.org/docs/rate-limits/) certificate requests to prevent abuse and ensure fair resource usage.

## DNSimple's Let's Encrypt implementation

DNSimple's integration with Let's Encrypt has specific features and limitations:

### Supported features

- **DNS-based validation**: DNSimple supports only DNS-based validation for Let's Encrypt certificates. HTTP or TLS-SNI challenges are not supported.
- **Same-domain SAN**: DNSimple supports including multiple names from the same domain in a certificate's SAN. Names from different domains cannot be included in the same certificate.
- **Automatic CSR generation**: DNSimple automatically generates the [CSR](/articles/what-is-csr/) and private key for Let's Encrypt certificates. Custom CSRs are not supported.
- **Plan-based features**: The ability to customize certificate names and SAN entries depends on your DNSimple plan. Higher-tier plans support more customization options.

### Limitations

DNSimple doesn't support all Let's Encrypt features. Some limitations exist due to design decisions or system constraints:

- Custom CSRs and private keys are not supported for Let's Encrypt certificates
- Only same-domain names (subdomains) can be included in certificate SANs
- The domain must be resolving with DNSimple for validation to work
- Let's Encrypt is not available in DNSimple's sandbox environment for testing


## Taking action

- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Step-by-step guide to ordering a Let's Encrypt certificate
- [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/) - Learn how to renew Let's Encrypt certificates
- [Renewing an SSL Certificate](/articles/renewing-ssl-certificate/) - General renewal process information

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand the role of CAs in certificate issuance
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare Let's Encrypt with traditional certificate authorities
- [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/) - Learn about the renewal process
- [How long does it take to issue an SSL certificate?](/articles/how-long-to-issue-ssl-certificate/) - Understand issuance timelines
- [SSL Certificate Types](/articles/ssl-certificates-types/) - Explore different certificate classifications

## Have more questions?

If you have additional questions or need any assistance with Let's Encrypt certificates in DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
