---
title: Troubleshooting SSL Certificate Errors
excerpt: Common SSL certificate errors in browsers and how to resolve them.
meta: Fix common SSL certificate errors like "Not Secure" warnings, expired certificates, domain name mismatches, incomplete chains, and mixed content issues.
categories:
- SSL Certificates
---

# Troubleshooting SSL Certificate Errors

### Table of Contents {#toc}

* TOC
{:toc}

---

When an SSL certificate is misconfigured or expired, browsers display security warnings that block or discourage visitors from accessing your site. This article covers the most common errors and how to resolve them.

## "Not Secure" or "Your Connection Is Not Private" {#not-secure}

**What you see:** The browser address bar shows "Not Secure" or displays a full-page warning with `NET::ERR_CERT_AUTHORITY_INVALID`, `ERR_CERT_DATE_INVALID`, or similar error codes.

**Common causes:**

- **Expired certificate.** Check the certificate expiration date on your certificate page in DNSimple. If expired, [order a new certificate](/articles/getting-started-ssl-certificates/) or ensure [auto-renewal](/articles/letsencrypt/#auto-renewal) is enabled for Let's Encrypt certificates.
- **Certificate not installed.** Issuing a certificate does not automatically secure your site. You must [install the certificate](/articles/installing-ssl-certificate/) on your web server.
- **Self-signed or untrusted certificate.** The certificate was not issued by a trusted [certificate authority](/articles/what-is-certificate-authority/). All certificates from DNSimple are signed by [Sectigo or Let's Encrypt](/articles/ssl-certificate-authorities/), which are trusted by all major browsers.

## Domain Name Mismatch {#name-mismatch}

**What you see:** `NET::ERR_CERT_COMMON_NAME_INVALID` or a warning that the certificate does not match the domain.

**Common causes:**

- **Wrong hostname on the certificate.** The certificate was issued for `www.example.com` but the site is accessed at `example.com` (or vice versa). Check which names your certificate covers on the certificate detail page in DNSimple. See [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/) to understand hostname coverage.
- **Subdomain not covered.** A single-name certificate only covers one hostname. If you need to cover multiple subdomains, consider a [wildcard certificate](/articles/ssl-certificates/).
- **Certificate installed on the wrong server.** Verify the certificate is installed on the server that handles requests for the domain in question.

## Incomplete Certificate Chain {#incomplete-chain}

**What you see:** `ERR_CERT_AUTHORITY_INVALID` or "certificate not trusted" errors, even though the certificate itself is valid and not expired.

**Cause:** The [intermediate certificate](/articles/what-is-ssl-certificate-chain/) is missing from your server configuration. Browsers need the full chain -- from your server certificate through the intermediate(s) to the root -- to verify trust.

**Fix:** Download the intermediate certificate bundle from your certificate page in DNSimple and install it alongside your server certificate. See [Troubleshooting Certificate Chain Errors](/articles/troubleshooting-ssl-chain-errors/) for detailed steps.

## Mixed Content Warnings {#mixed-content}

**What you see:** The padlock icon is missing or shows a warning, even though the page loads over HTTPS. The browser console shows "Mixed Content" errors.

**Cause:** The page loads some resources (images, scripts, stylesheets, fonts) over plain HTTP instead of HTTPS. Even one HTTP resource on an HTTPS page triggers a mixed content warning.

**Fix:**

1. Open your browser's developer tools (F12) and check the Console tab for mixed content warnings. Each warning identifies the HTTP resource.
2. Update all resource URLs to use `https://` or protocol-relative paths (`//`).
3. If the resources are from a third-party service, verify that the service supports HTTPS.

## Expired Certificate {#expired}

**What you see:** `NET::ERR_CERT_DATE_INVALID` or a warning that the certificate has expired.

**Fix:**

- For **Let's Encrypt certificates** with auto-renewal enabled, check whether the renewal failed. See [Troubleshooting Let's Encrypt Certificate Failures](/articles/troubleshooting-lets-encrypt-failures/) for common causes.
- For **Sectigo certificates**, [order a new certificate](/articles/ordering-standard-certificate/) or [renew](/articles/renewing-ssl-certificate/) the expiring one. Sectigo certificates do not support auto-renewal.
- After obtaining the new certificate, [install it](/articles/installing-ssl-certificate/) on your server. The old certificate remains active until its expiration date, but browsers will reject it once it expires.

DNSimple sends [expiration notifications](/articles/product-expiration-notification/) at 60, 30, 14, 7, and 3 days before a certificate expires.

## Have More Questions?

If you have any questions about SSL certificate errors, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
