---
title: SSL Certificate Lifecycle
excerpt: An SSL certificate goes through several stages from purchase to expiration. Understanding each stage helps you keep your site secured without interruption.
meta: Learn how SSL certificates move through ordering, validation, issuance, installation, and renewal — and what happens at each stage.
categories:
- SSL Certificates
---

# SSL Certificate Lifecycle

### Table of Contents {#toc}

* TOC
{:toc}

---

An SSL certificate is not a one-time purchase. It has a defined validity period and goes through several stages during its life. Understanding these stages — and how they connect — helps you keep your site secured without interruption and plan for upcoming [validity changes](/articles/announcement-ssl-certificate-validity-changes/).

## Overview of the stages {#overview}

Every SSL certificate follows the same general path:

1. **Choose** a certificate product
2. **Order** the certificate
3. **Validate** domain ownership
4. **Issue** the certificate
5. **Install** the certificate on your server
6. **Monitor** the certificate for upcoming expiration
7. **Renew** (or **reissue**) before expiration
8. **Expire** — if the certificate is not renewed in time

The specifics at each stage differ depending on whether you use a [Sectigo certificate or a Let's Encrypt certificate](/articles/ssl-certificates/), but the overall path is the same.

## Choose {#choose}

Before ordering, decide which certificate product fits your situation. DNSimple offers four products — Sectigo single-name, Sectigo wildcard, Let's Encrypt single-name/SAN, and Let's Encrypt wildcard — each with different trade-offs around cost, automation, and [name coverage](/articles/ssl-certificate-names/).

If you are unsure which product to choose, review the [SSL/TLS Certificates](/articles/ssl-certificates/) overview and the [comparison between Sectigo and Let's Encrypt](/articles/standard-vs-letsencrypt/) to understand the differences. You may also want to review the different [SSL certificate types](/articles/ssl-certificates-types/) to understand validation levels and secured-domain options.

## Order {#order}

Ordering creates a certificate request with the [certificate authority](/articles/what-is-certificate-authority/) (CA). During the order, you select the host names the certificate will cover and, for Sectigo certificates, choose a signature algorithm (ECDSA or RSA).

- [Ordering a Sectigo certificate](/articles/buy-sectigo-ssl-certificate/)
- [Ordering a Let's Encrypt certificate](/articles/get-lets-encrypt-certificate/)
- [Ordering a wildcard certificate](/articles/buy-wildcard-ssl-certificate/)

If you are renewing an expiring certificate, DNSimple's renewal interface reuses most of the settings from the previous certificate to simplify this step. See [Renewing an SSL Certificate](/articles/renew-ssl-certificate/).

## Validate {#validate}

Before a CA will issue a certificate, it must confirm that the requester controls the domain. This process is called [domain validation](/articles/ssl-domain-validation-methods/).

The validation method depends on the certificate type:

- **Sectigo certificates** use [email-based validation](/articles/ssl-certificates-email-validation/). The CA sends a verification email to an administrative address at the domain (e.g., `admin@example.com`), and the domain owner must click a link in that email to approve the certificate.
- **Let's Encrypt certificates** use DNS-based validation. DNSimple automatically creates the required DNS records and submits the challenge to Let's Encrypt — no manual action is needed, provided the domain [resolves with DNSimple](/articles/letsencrypt/#integration).

> [!WARNING]
> Validation must be completed for every new certificate, including renewals. If you don't complete validation, the certificate will not be issued.

## Issue {#issue}

Once validation succeeds, the CA issues the certificate. [Issuance time](/articles/how-long-to-issue-ssl-certificate/) varies:

- **Let's Encrypt:** Typically 30–60 minutes, because validation is automated.
- **Sectigo:** Typically about an hour after email approval, though delays of up to several days can occur if there are issues with the domain configuration or [CAA records](/articles/caa-records-ssl-certificates/).

When the certificate is issued, DNSimple sends an email notification. If you use [webhooks](https://developer.dnsimple.com/v2/webhooks/), a webhook event is also triggered.

## Install {#install}

An issued certificate must be installed on your web server (or hosting platform) before it can secure traffic. Installation involves downloading the certificate, the [intermediate certificate chain](/articles/what-is-ssl-certificate-chain/), and — if DNSimple generated the [CSR](/articles/what-is-csr/) — the [private key](/articles/ssl-private-keys/). These files come in [different formats](/articles/ssl-certificate-files-and-formats/) depending on your platform and are then configured on your server.

DNSimple provides an [installation wizard](/articles/install-ssl-certificate/) with platform-specific instructions for Heroku, Azure, NGINX, Apache, and Microsoft IIS.

> [!NOTE]
> Issuing a certificate does not automatically secure your site. The certificate must be installed on your server for HTTPS to work.

## Monitor {#monitor}

After installation, the certificate is active and securing traffic. DNSimple sends [expiration notifications](/articles/product-expiration-notification/) as the certificate approaches its expiration date, giving you time to renew.

For Let's Encrypt certificates with [auto-renewal](/articles/ssl-auto-renewal/) enabled, DNSimple automatically handles renewal 30 days before expiration. For Sectigo certificates, you will need to renew manually.

## Renew {#renew}

SSL certificate renewal is effectively a new certificate purchase. There is no way to extend the validity of an existing certificate — a completely new certificate is issued, validated, and installed in place of the old one. DNSimple's renewal interface simplifies this by reusing settings from the expiring certificate.

For a detailed explanation of how renewal works, see [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/).

- [Renewing a Sectigo certificate](/articles/renew-sectigo-ssl-certificate/)
- [Renewing a Let's Encrypt certificate](/articles/renew-lets-encrypt-ssl-certificate/)

If a certificate's [private key](/articles/ssl-private-keys/) has been compromised or lost, you may need to [reissue](/articles/reissue-ssl-certificate/) rather than renew. Reissuing generates a new key and CSR while keeping the certificate's validity period.

## Expire {#expire}

If a certificate is not renewed before its expiration date, it becomes invalid. Browsers will display a security warning to visitors, and HTTPS connections will fail.

Expiration dates depend on the certificate type and when it was issued:

- **Let's Encrypt certificates** are valid for 90 days.
- **Sectigo certificates** issued on or after March 15, 2026 are valid for a maximum of 200 days. This maximum will [continue to decrease](/articles/announcement-ssl-certificate-validity-changes/) to 100 days (March 2027) and 47 days (March 2029).

## Sectigo vs. Let's Encrypt Lifecycle Differences {#differences}

The lifecycle stages are the same for both certificate types, but the specifics differ at each stage -- particularly around validation, automation, and validity periods. For a full side-by-side comparison of features, pricing, and capabilities, see [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/).

The most significant lifecycle difference is automation: Let's Encrypt certificates support DNS-based validation and [auto-renewal](/articles/letsencrypt/#auto-renewal), making the entire renewal cycle hands-off. Sectigo certificates require [email-based validation](/articles/ssl-certificates-email-validation/) each time, so every renewal involves manual action.

## Shorter Validity, Faster Cycles {#shorter-validity}

As certificate lifetimes continue to shrink under [CA/Browser Forum rules](/articles/can-multi-year-ssl-certificates/#shorter-validity), the full lifecycle — order, validate, issue, install — will repeat more frequently. Automation becomes increasingly important: consider enabling [auto-renewal](/articles/ssl-auto-renewal/) for Let's Encrypt certificates, and using the [DNSimple API](https://developer.dnsimple.com/v2/certificates/) to automate installation.

## Have more questions?

If you have any questions about the SSL certificate lifecycle or need assistance with your certificates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
