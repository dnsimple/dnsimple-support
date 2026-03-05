---
title: SSL Certificate Validity Changes (2026 - 2029)
excerpt: New CA/Browser Forum rules will shorten maximum SSL certificate validity. Certificates purchased before the changeover date keep their current validity period.
meta: Learn about the 2026 SSL certificate validity changes. Purchase before March 15, 2026 to receive a certificate with the current extended validity period.
categories:
- SSL Certificates
---

# SSL Certificate Validity Changes (2026 - 2029)

> [!NOTE]
> **Certificates purchased before each deadline** keep the **longer validity** in effect at that time. Purchase before **March 15, 2026** for up to one year; before **March 15, 2027** for up to 200 days; before **March 15, 2029** for up to 100 days. Only certificates issued on or after each date are subject to the new, shorter maximum for that phase.

### Table of Contents {#toc}

* TOC
{:toc}

---

The [CA/Browser Forum](https://cabforum.org/) approved [Ballot SC081v3: Introduce Schedule of Reducing Validity and Data Reuse Periods](https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/) in April 2025, establishing a phased reduction in the maximum allowed validity period for publicly trusted SSL/TLS certificates (from 398 days down to 47 days by March 2029). This change affects all Certificate Authorities, including Sectigo (the issuer of our paid SSL certificates). [Sectigo has published a detailed write-up](https://www.sectigo.com/resource-library/prepare-200-day-ssl-certificate-lifespans-automation) on the 200-day transition and how to prepare. The first phase (200 days in March 2026) does **not** affect [Let's Encrypt](/articles/letsencrypt/) certificates, which already use a 90-day validity period; however, Let's Encrypt certificates **will** be affected when the maximum drops to 47 days (March 2029), at which point their validity period will also shorten.

## What is the changeover date?

The first phase takes effect on **March 15, 2026**. From that date forward, any **newly issued** Sectigo certificate will have a maximum validity of **200 days**. Later phases will reduce the maximum further (see [Timeline](#timeline) below).

## If I purchase before a deadline, do I get the longer validity?

**Yes.** The same rule applies at each phase: certificates **issued before** the deadline keep the **longer** maximum validity that was in effect at issuance.

- **Before March 15, 2026:** Certificates are issued with the current validity period (up to one year) and remain valid until their expiration date.
- **Before March 15, 2027:** Certificates issued after March 15, 2026 but before March 15, 2027 can still have up to **200 days** validity.
- **Before March 15, 2029:** Certificates issued after March 15, 2027 but before March 15, 2029 can still have up to **100 days** validity.
- **On or after March 15, 2029:** New certificates are limited to a maximum of **47 days** validity.

So if you want a longer validity period, purchase your Sectigo certificate before the deadline that applies to the validity you want. After each deadline, any newly issued certificate will be subject to the new, shorter maximum for that phase.

## Timeline {#timeline}

Under Ballot SC081v3, the CA/Browser Forum adopted the following phased reduction:

| Effective date | Maximum certificate validity |
|:--------------:|:----------------------------:|
| March 15, 2026 | 200 days                     |
| March 15, 2027 | 100 days                     |
| March 15, 2029 | 47 days                      |

This applies to all publicly trusted SSL/TLS certificates issued on or after each date. Certificates issued before the relevant date keep their longer validity and remain valid until their original expiration.

## What do I need to do?

- **If you want a certificate with a longer validity:** Purchase your Sectigo certificate **before the deadline** that matches the validity you want (March 15, 2026 for up to one year; March 15, 2027 for up to 200 days; March 15, 2029 for up to 100 days). Once issued, it will be valid until its expiration date.
- **After each deadline:** New certificates will be subject to the shorter maximum for that phase. Plan to purchase a new certificate before it expires to maintain uninterrupted coverage. You will receive [expiration notifications](/articles/product-expiration-notification/) before your certificate expires. Each new certificate requires [domain validation](/articles/ssl-certificates-email-validation/) to be completed again.

For more detail on the validity rules and how they affect renewals, see [Do you support multi-year SSL certificates?](/articles/can-multi-year-ssl-certificates/#shorter-validity) and [SSL Certificates Frequently Asked Questions](/articles/faq-ssl-certificates/). If you use Let's Encrypt certificates, [auto-renewal](/articles/ssl-auto-renewal/) can help you manage more frequent renewals automatically.

## Have more questions?

If you have additional questions or need assistance, [contact support](https://dnsimple.com/feedback).
