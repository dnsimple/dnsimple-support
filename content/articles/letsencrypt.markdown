---
title: Let's Encrypt and DNSimple
excerpt: The DNSimple Let's Encrypt integration allows you to request an SSL certificate for free, using the Let's Encrypt certification authority.
categories:
- SSL Certificates
- Integrations
---

# Let's Encrypt and DNSimple

<note>
This article describes a feature in Public Beta.
</note>

<note>
This article describes a feature that is only available to the [new plans](/articles/new-plans#newer-plans-only).
</note>

### Table of Contents {#toc}

* TOC
{:toc}

---

[Let's Encrypt](https://letsencrypt.org/) is a new [certificate authority](/articles/what-is-certificate-authority) that joined the scenes in late 2015, and became an official member of the CA/B forum in 2016.

Let's Encrypt is an innovative certificate authority from several point of views. The 3 most distinguishing characteristics, as listed on their homepage are _free_, _automated_, and _open_.

- free: Let's Encrypt SSL certificates are free; they don't charge per certificate
- automated: Let's Encrypt issuance process is fully automated. They developed a new issuance protocol called [ACME](https://letsencrypt.org/docs/acme-protocol-updates/) that is designed to be fully automated, with no manual intervention
- open: the source code of the Let's Encrypt certification authority is completely open source, and available in a [GitHub account](https://github.com/letsencrypt). This is by far the most unique characteristic of this CA.


## Differences between Let's Encrypt and Standard SSL certificates

The table below summarizes the most important differences between Let's Encrypt and Standard SSL certificates.

|               | Let's Encrypt | Standard      |
|---------------+---------------+---------------|
| Certificate Expiration | 90 days | Multi-year |
| Single names | Supported | Supported |
| Wildcard names | Supported | Supported |
| Multi-domain (via SAN) | Supported by default | Supported only by specific products |
| Max SAN domains | 100 | Depends on the [CA](/articles/what-is-certificate-authority) and product |
| [Validation type](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level) | DV only | DV, OV, EV |
| Cost | Free | Depends on the [CA](/articles/what-is-certificate-authority) and product |
| Limits | [Per-domain, Per-week limits](https://letsencrypt.org/docs/rate-limits/) | N/A |


## Let's Encrypt highlights

Let's Encrypt is quite different than most traditional certificate authorities. Here are a few relevant notes and limitations that you may want to keep in mind, before requesting one of their SSL certificates:

- Let's Encrypt only issues [domain-validated](/articles/ssl-certificates-types/) SSL certificates. There is no plan to support OV or EV certificates.
- Let's Encrypt supports both single-name and wildcard names.
- A single Let's Encrypt certificate can include up to 100 SAN names, names can be an enumeration of either single-name, wildcard names or both.
- Let's Encrypt certificates have fixed expiration period of 90 days. It's not possible to request a certificate with a longer expiration, therefore it won't be possible to obtain 1-year or [multi-year](/articles/can-multi-year-ssl-certificates) SSL certificates.
- Although Let's Encrypt is a new authority, their SSL certificates are [compatible with major browsers](https://letsencrypt.org/docs/certificate-compatibility/) and [trusted by all major root programs](https://letsencrypt.org/2018/08/06/trusted-by-all-major-root-programs.html).
- Let's Encrypt certificates are domain-validated. The most common validation mechanisms are DNS-based and HTTP-based. They do not support traditional [email-based validation](/articles/ssl-certificates-email-validation).
- Let's Encrypt is currently [rate-limiting](https://letsencrypt.org/docs/rate-limits/) requests. Make sure to understand their limits before requesting a large number of certificates.

Please note that some Let's Encrypt features may not be currently supported by DNSimple. Check the [limitations](/articles/letsencrypt/#limitations) section to know more about which features are supported.


## Integration

The DNSimple Let's Encrypt integration allows you to request an SSL certificate for free, using the Let's Encrypt certification authority.

<note>
In order to request an SSL certificate with Let's Encrypt, the domains **must be delegated and resolving with DNSimple**. The domain does not need to be registered with DNSimple.
</note>

The certificate validation is completely automated using a DNS challenge. Once issued, you will receive an email and [webhook notification](https://developer.dnsimple.com/v2/webhooks/) and the certificate will then be available to download from your DNSimple account.

The certificate expiration is 90 days. If auto-renewal is enabled, the certificate will automatically renew before the expiration. If a new validation is necessary, we will automatically re-validate the domain via DNS. Once renewed, you will receive an email and webhook notification. You will still need to install the newly issued certificate once renewed.

As suggested by Let's Encrypt, the renewal will happen at any time after 60 days (30 days before expiration).

<callout>
Although Let's Encrypt certificates can be installed manually, the entire process is designed to be fully automated. Therefore, we encourage you to use our [certificate API](https://developer.dnsimple.com/v2/certificates/) to fetch the certificate and install it programmatically.
</callout>


## Products

Let's Encrypt currently provides only one type of certificate: they issue only domain-validated, SAN certificates and the support both single-name and wildcard names.

Single-name certificates can be considered a special type of multi-name certificates, with a single name associated with it. Therefore, Let's Encrypt offering is both a multi-name and single-name.

<note>
The ability to customize the names associated with a Let's Encrypt certificate depends on the plan you are subscribed to. Please check the [plans and pricing page](https://dnsimple.com/pricing) to view all options.
</note>


## DNSimple Limitations

Note that not all Let's Encrypt features are currently supported by DNSimple. Some features will be incrementally introduced in the future, while others are not supported due to design decisions or limitations imposed by our system.

- We only support DNS-based validation. We don't plan to support the HTTP or TLS-SNI challenges.
- We do not currently support the ability to include names from different domains in the same certificate SAN. Instead, we only support same-domain names (subdomains).
- We do not currently support custom CSR or private key while requesting a new certificate. The CSR will be generated by DNSimple, based on the domains specified in the certificate order.
- We do not currently support Let's Encrypt wildcard certificates. We are currently investigating the changes required to support this feature.
- In order to use our Let's Encryot integration, the domain must be resolving with us as we will automatically create the DNS records required for the validation.

<callout>
If you are interested in a wildcard certificate, DNSimple [offers wildcard certificates](/articles/ssl-certificates/#standard-wildcard) using a different certificate authority.
</callout>


## DNSimple plan-specific features

Let's Encrypt feature support varies based on your [DNSimple subscription plan](https://dnsimple.com/pricing).

- You can request as many certificates as you want, as long as you stay within Let's Encrypt [rate limits](https://letsencrypt.org/docs/rate-limits/).
- Depending on your plan, you will be able to specify your custom subdomains, or it will be defaulted to www/root domain. Please view [plans and pricing page](https://dnsimple.com/pricing) to check which plans support certificates with subdomains.
- Depending on your plan, you can customize the certificate SAN with up to 100 extra names for a single certificate. Please view [plans and pricing page](https://dnsimple.com/pricing) to check which plans support certificates with SAN.
- Remember that Let's Encrypt doesn't support wildcard certificates, and we currently only support subdomains (it's not possible to add names from different domains).


## Testing

We currently do not support Let's Encrypt in our [sandbox environment](/articles/sandbox). We discourage the use of the production environment for heavy or automated testing purposes, as you may quickly hit Let's Encrypt [rate limits](https://letsencrypt.org/docs/rate-limits/).

If you have specific testing needs, you may want to consider using the Let's Encrypt [staging environment](https://letsencrypt.org/docs/staging-environment/) directly.


## Order certificate

To order a new certificate via Let's Encrypt using DNSimple, follow the instructions in the article [Ordering a Let's Encrypt SSL certificate](/articles/ordering-lets-encrypt-certificate).

If you already have a certificate and you want to renew it, follow the instructions for [Renewing an SSL certificate](/articles/renewing-ssl-certificate/). We also support [auto-renewals for Let's Encrypt certificates](#auto-renewal).


## Auto-renewal {#auto-renewal}

DNSimple supports auto-renewals for Let's Encrypt certificates. When the auto-renewal feature is turned on, we will automatically renew the certificate before expiration.

Once renewed, you will receive an email and [webhook notification](https://developer.dnsimple.com/v2/webhooks/), the certificate will then be available to download from your DNSimple account.

<callout>
Let's Encrypt certificates are automatically renewed **30 days before the expiration date**, as suggested by Let's Encrypt, with automatic failover attempts every day in case of temporary failures.
</callout>

The feature is available for free to all accounts. You can enable/disable auto-renewal for a certificate at any time from the SSL certificate page.

![Let's Encrypt SSL certificate auto-renewal](/files/certificate-letsencrypt-auto-renewal.png)
