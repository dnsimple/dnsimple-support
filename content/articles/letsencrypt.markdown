---
title: Let's Encrypt and DNSimple
excerpt:
categories:
- SSL Certificates
- Integrations
---

# Let's Encrypt and DNSimple

<note>
This article describes a feature in private beta. Please contact support to join the beta and get access to the feature.
</note>

### Table of Contents {#toc}

* TOC
{:toc}

---

[Let's Encrypt](https://letsencrypt.org/) is a new [certificate authority](/articles/what-is-certificate-authority) that joined the scenes in late 2015, and become an official member of the CA/B forum in 2016.

Let's Encrypt is innovative certificate authority under several point of views. The 3 most self-distinguishing characteristics, also listed in their homepage are: _free_, _automated_, and _open_.

- free: Let's Encrypt SSL certificates are free, they don't charge per certificate
- automated: Let's Encrypt issuance process is fully automated. They developed a new issuance protocol called [ACME](https://letsencrypt.org/docs/acme-protocol-updates/) that is designed to be fully automated, with no manual intervention
- open: the source code of the Let's Encrypt certification authority is completely open source, and available in a [GitHub account](http://github.com/letsencrypt). This is by far the most unique caracheristic of this CA.

## Let's Encrypt highlights

As mentioned before, Let's Encrypt is quite different than most of the traditional certificate authorities. Here's a few relevant information that you may want to keep in mind, before requesting an SSL certificates.

- Let's Encrypt only issues [domain-validated](/articles/ssl-certificates-types/) SSL certificates. There is no plan to support OV or EV certificates.
- Wildcard names are not supported, Let's Encrypt SSL certificates can only include explicit names.
- A single Let's Encrypt certificate can include up to 100 SAN names
- Let's Encrypt certificates have fixed expiration period of 90 days. It's not possible to request a certificate with a longer expiration, therefore it won't be possible to obtain 1-year or [multi-years](/articles/can-multi-year-ssl-certificates) SSL certificates.
- Although Let's Encrypt is a new authority, their SSL certificates are compatible with major browsers as their root certificate was cross-signed by an older certificate authority. For a complete list of supported platforms check out the [certificate compatibility](https://letsencrypt.org/docs/certificate-compatibility/) page.
- Let's Encrypt certificates are domain-validated. The most common validation mechanisms are DNS-based and HTTP-based. They don't support traditional [email-based validation](/articles/ssl-certificates-email-validation).
- Let's Encrypt is currently [rate-limiting](https://letsencrypt.org/docs/rate-limits/) requests. Make sure to understand their limits before requesting a large number of certificates.

## Let's Encrypt and DNSimple 

The DNSimple Let's Encrypt integration allows you to request an SSL certificate for free, using the Let's Encrypt certification authority.

<note>
In order to request an SSL certificate with Let's Encrypt, the domains **must be delegated and resolving with DNSimple**. The domain is not required to be registered with DNSimple.
</note>

The certificate validation is completed automated using the DNS challenge. Once issued, you will receive an email and [webhook notification](https://developer.dnsimple.com/v2/webhooks/), and the certificate will be available for download from your DNSimple account.

The certificate expiration is 90 days. If auto-renewal is enabled, the certificate will be automatically renewed before the expiration. If a new validation is necessary, we will automatically re-validate the domain via DNS. Once renewed, you will receive an email and webhook notification.

As suggested by Let's Encrypt, the renewal will happen at any time after 60 days (hence 30 days before expiration). 

<note>
Although Let's Encrypt certificates can be installed manually, the entire process is designed to be fully automated. Therefore, you are encouraged to use our [certificate API](/v2/domains/certificates/) to fetch the certificate and install it programmatically.
</note>

## Products

Let's Encrypt currently provides only one single product. They only issue domain-validated, SAN certificates. Also note Let's Encrypt doesn't support wildcard certificates.

DNSimple currently provides both single-name and multi-name (SAN) certificates via Let's Encrypt.

## Features

Let's Encrypt feature support varies based on your account subscription.

Also note that not all Let's Encrypt features are currently supported by DNSimple. Some features will be incrementally introduced in the future, others are not supported due to design decisions or limitations imposed by our system.

- You can request as many certificate as you want, as long as you stay within Let's Encrypt request [rate-limiting](https://letsencrypt.org/docs/rate-limits/).
- Depending on the plan, you can specify the hostname for the certificate, or it will be defaulted to www/root domain.
- Depending on the plan, you can specify up to 100 extra hostnames for a single certificate. Please note that Let's Encrypt doesn't support wildcard certificates, and we currently only support subdomains (it's not possible to add names from different domains).

## Limitations

- It's currently not possible to provide a custom CSR or private key while requesting a new certificate. The CSR will be generated by DNSimple, based on the domains specified in the certificate order.
- We only support DNS-based validation. It's not possible to use the HTTP or TLS-SNI challenges.
- The domain must be resolving with us, as we will automatically create the DNS records required for the validation.
- We don't currently support the ability to include names from different domains in the same certificate SAN. Instead, we only support same-domain names (subdomains). 

## Testing

We currently don't support Let's Encrypt in our [sandbox environment](/articles/sandbox). We discourage the use of the production environment for heavy or automated testing purposes, as you may quickly hit Let's Encrypt [rate limits](https://letsencrypt.org/docs/rate-limits/).

If you have specific testing needs, you may want to consider using the Let's Encrypt [staging environment](https://letsencrypt.org/docs/staging-environment/) directly.
