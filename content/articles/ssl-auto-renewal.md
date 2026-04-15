---
title: How Auto-Renewal Works for SSL Certificates
excerpt: Auto-renewal automatically issues a new SSL certificate before the current one expires. This article explains how it works, which certificates support it, and what to do when it fails.
meta: Learn how SSL certificate auto-renewal works at DNSimple, which certificate types support it, and how to handle auto-renewal failures.
categories:
- SSL Certificates
---

# How Auto-Renewal Works for SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

SSL certificates have a fixed validity period and cannot be extended once issued. When a certificate is about to expire, a new one must be ordered, validated, and installed to maintain uninterrupted HTTPS coverage. **Auto-renewal** automates the ordering and validation steps, so you do not have to remember to renew manually.

## What auto-renewal does {#what-it-does}

Auto-renewal is not an extension of the existing certificate. Like all SSL certificate [renewals](/articles/how-certificate-renewal-works/), it is a **new certificate request**. When auto-renewal runs, DNSimple:

1. Creates a new certificate order using the same settings as the current certificate (host names, signature algorithm).
2. Submits the [domain validation](/articles/ssl-domain-validation-methods/) challenge automatically (DNS-based for Let's Encrypt).
3. Retrieves the newly issued certificate from the [Certificate Authority](/articles/what-is-certificate-authority/).
4. Sends an email and [webhook](https://developer.dnsimple.com/v2/webhooks/) notification to let you know the new certificate is ready.

After auto-renewal completes, the new certificate is available to download from your DNSimple account. You will still need to **install the new certificate** on your server — auto-renewal does not deploy the certificate for you.

> [!TIP]
> To fully automate the process, including installation, use the [DNSimple Certificates API](https://developer.dnsimple.com/v2/certificates/) to fetch and deploy the certificate programmatically.

## Which certificates support auto-renewal {#support}

| Certificate type | Auto-renewal supported | Why |
|-----------------|----------------------|-----|
| **Let's Encrypt** (single-name and wildcard) | Yes | Let's Encrypt uses DNS-based validation, which DNSimple can perform automatically because the domain resolves with our name servers. |
| **Sectigo** (single-name and wildcard) | No | Sectigo uses [email-based validation](/articles/ssl-certificates-email-validation/), which requires a human to click an approval link. This step cannot be automated. |

For Sectigo certificates, you will need to [renew manually](/articles/renewing-standard-ssl-certificate/) each time. DNSimple sends [expiration notifications](/articles/product-expiration-notification/) to remind you when renewal is due.

## When auto-renewal runs {#timeline}

Let's Encrypt certificates are valid for 90 days. DNSimple attempts auto-renewal **30 days before the expiration date**, as recommended by Let's Encrypt. This provides a comfortable window: even if the first attempt fails, there are 30 days of automatic retries before the certificate expires.

If the first attempt fails, DNSimple retries automatically **every day** until the renewal succeeds or the certificate expires.

## Enabling and disabling auto-renewal {#enable}

You can enable or disable auto-renewal from the SSL certificate page in your DNSimple account. The toggle is available both when ordering a new Let's Encrypt certificate and on the certificate detail page after issuance.

Auto-renewal is available to all DNSimple accounts at no additional cost. The certificate must not be expired to enable auto-renewal — if a certificate has already expired, you will need to [order a new one](/articles/ordering-lets-encrypt-certificate/).

## What happens after auto-renewal succeeds {#success}

When the new certificate is successfully issued:

1. You receive an **email notification** from DNSimple.
2. A **webhook event** is triggered (if you have webhooks configured).
3. The new certificate and its [private key](/articles/ssl-private-keys/) are available to download from your certificate page.
4. The previous certificate remains valid until its original expiration date.

> [!WARNING]
> The new certificate must be **installed on your server** to replace the old one. If you don't install it, your site will continue using the old certificate until it expires, at which point browsers will show a security warning.

## What happens when auto-renewal fails {#failure}

Auto-renewal can fail for several reasons. When a failure occurs, DNSimple retries daily, but if the underlying issue is not resolved, the certificate will eventually expire.

Common causes of auto-renewal failure:

- **Domain no longer resolving with DNSimple.** Let's Encrypt certificates require the domain to be delegated to and resolving with DNSimple's name servers. If the domain's delegation has changed (e.g., moved to another DNS provider), the DNS challenge will fail.
- **DNSSEC misconfiguration.** If [DNSSEC](/articles/dnssec/) is enabled for the domain but is misconfigured (e.g., stale DS records at the registrar), the DNS challenge may fail because the CA cannot securely resolve the validation record. See [Troubleshooting DNSSEC configurations](/articles/dnssec/#troubleshooting-dnssec-configurations).
- **Let's Encrypt rate limits.** Let's Encrypt enforces [rate limits](https://letsencrypt.org/docs/rate-limits/) on certificate issuance. If you have a large number of certificates for the same domain, you may temporarily hit these limits.
- **CAA records blocking issuance.** If [CAA records](/articles/caa-records-ssl-certificates/) are configured for the domain and Let's Encrypt is not listed as an authorized CA, the issuance will be denied.

If auto-renewal has failed and the daily retries are not resolving the issue, fix the underlying cause (delegation, DNSSEC, CAA records) and the next retry should succeed. If the certificate has already expired, [order a new Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/).

## Why auto-renewal matters more with shorter lifetimes {#shorter-lifetimes}

The CA/Browser Forum is [phasing in shorter maximum certificate lifetimes](/articles/can-multi-year-ssl-certificates/#shorter-validity) -- from 200 days in March 2026 down to 47 days by March 2029. As these lifetimes shrink, the full renewal cycle (order, validate, issue, install) repeats more frequently.

Let's Encrypt certificates (90-day validity) already require frequent renewal. Auto-renewal handles this automatically. When the maximum drops to 47 days in 2029, all certificate types will need very frequent renewal. Auto-renewal -- combined with automated installation via the [DNSimple API](https://developer.dnsimple.com/v2/certificates/) -- will be essential for maintaining uninterrupted HTTPS coverage.

Sectigo certificates do not currently support auto-renewal due to their email-based validation requirement. As validity periods shrink, the manual effort required to maintain Sectigo certificates will increase. If automation is a priority, [Let's Encrypt certificates](/articles/letsencrypt/) may be a better fit for your workflow.

## Have more questions?

If you have any questions about auto-renewal or need assistance with your SSL certificates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
