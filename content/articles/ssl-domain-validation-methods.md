---
title: Domain Validation Methods for SSL Certificates
excerpt: Before issuing an SSL certificate, a Certificate Authority must verify that the requester controls the domain. This article explains the different validation methods and how they compare.
meta: Learn about the domain validation methods used by Certificate Authorities — email-based, DNS-based, and HTTP-based — and which ones DNSimple supports.
categories:
- SSL Certificates
---

# Domain Validation Methods for SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

Before a [Certificate Authority](/articles/what-is-certificate-authority/) (CA) will issue an SSL certificate, it must verify that the person requesting the certificate actually controls the domain. This process is called **domain validation** (also referred to as **Domain Control Validation**, or **DCV**).

Domain validation exists to prevent certificates from being issued for domains the requester does not own. Without it, anyone could obtain a certificate for any domain and use it to intercept traffic or impersonate a website.

## Validation levels {#validation-levels}

SSL certificates are classified into three [validation levels](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level):

- **Domain Validated (DV)** — Confirms the requester controls the domain. This is the most common type and the only type DNSimple provides.
- **Organization Validated (OV)** — Confirms domain control plus verifies the organization's legal identity. DNSimple does not provide OV certificates.
- **Extended Validation (EV)** — Requires the most rigorous checks, including legal existence and operational status of the organization. DNSimple does not provide EV certificates. See [Do you support Extended Validation (EV) SSL certificates?](/articles/can-ev-ssl-certificates/) for more information.

All three levels provide the same cryptographic security. The difference is in how much the CA verifies about the certificate requester's identity before issuing the certificate.

The rest of this article focuses on domain validation (DV), the level used by all certificates DNSimple offers.

## Domain validation methods {#methods}

CAs use several methods to confirm domain control. The three most common are email-based, DNS-based, and HTTP-based validation.

### Email-based validation {#email}

Email-based validation is the traditional method used by most commercial CAs, including Sectigo. The CA sends a verification email to a predefined administrative address at the domain being validated. The domain owner clicks a link in the email to prove they control the domain.

The allowed email addresses are limited to standard administrative addresses such as:

- `admin@example.com`
- `administrator@example.com`
- `hostmaster@example.com`
- `postmaster@example.com`
- `webmaster@example.com`

The CA will not send the validation email to an arbitrary address, such as a personal email or the email on your DNSimple account. The goal is to ensure that only someone with administrative access to the domain can approve the certificate.

> [!NOTE]
> WHOIS-based email addresses are [no longer accepted](/articles/ssl-certificates-email-validation/#whois-deprecation) for domain validation as of June 2025.

For the full process — including how to select, change, or resend the validation email — see [SSL Certificate email-based Domain Validation](/articles/ssl-certificates-email-validation/).

### DNS-based validation {#dns}

DNS-based validation (known as the **DNS-01 challenge** in the [ACME protocol](https://letsencrypt.org/docs/acme-protocol-updates/)) works by requiring the domain owner to create a specific DNS record (typically a TXT record under `_acme-challenge.example.com`) that the CA checks to confirm domain control.

This method is well-suited to automation because the DNS record can be created and removed programmatically. It is the method used by [Let's Encrypt](/articles/letsencrypt/).

When you order a Let's Encrypt certificate through DNSimple, the DNS records are created and verified automatically — no manual action is required, provided the domain [resolves with DNSimple's name servers](/articles/letsencrypt/#integration).

### HTTP-based validation {#http}

HTTP-based validation (known as the **HTTP-01 challenge**) works by requiring the domain owner to place a specific file at a known URL path on the web server (typically `http://example.com/.well-known/acme-challenge/<token>`). The CA makes an HTTP request to that URL to confirm the file is present.

This method requires the domain to be pointing to a web server the requester controls. It is commonly used by organizations running their own ACME clients (such as [Certbot](https://certbot.eff.org/)).

> [!NOTE]
> DNSimple does not support HTTP-based validation. Sectigo certificates use [email-based validation](#email), and Let's Encrypt certificates use [DNS-based validation](#dns).

## Which methods does DNSimple support? {#dnsimple-support}

| Certificate type | Validation method | Manual action required? |
|-----------------|-------------------|------------------------|
| Sectigo (single-name and wildcard) | [Email-based](#email) | Yes — you must click the approval link in the validation email |
| Let's Encrypt (single-name and wildcard) | [DNS-based](#dns) | No — DNSimple handles the DNS challenge automatically |

The validation method is determined by the certificate type. You do not need to choose a validation method separately.

## Validation frequency {#frequency}

Domain validation must be completed every time a new certificate is issued, including renewals. Because SSL certificate "renewal" is technically a [new certificate purchase](/articles/how-certificate-renewal-works/), the CA must re-verify domain control each time.

As maximum certificate lifetimes continue to [decrease](/articles/announcement-ssl-certificate-validity-changes/), validation will happen more frequently:

- **Let's Encrypt** certificates are valid for 90 days. With [auto-renewal](/articles/ssl-auto-renewal/) enabled, validation is handled automatically every ~60 days.
- **Sectigo** certificates issued after March 15, 2026 are valid for a maximum of [200 days](/articles/can-multi-year-ssl-certificates/#shorter-validity). Each renewal requires completing email validation again — at least twice per year initially, and more frequently as the maximum continues to shrink.

## CAA records and validation {#caa}

[CAA records](/articles/caa-record/) are DNS records that specify which CAs are authorized to issue certificates for a domain. If CAA records are present and the CA is not listed, the CA will refuse to issue the certificate — even if domain validation succeeds.

If you use CAA records, make sure the appropriate CA is authorized before ordering a certificate. See the [SSL Certificates FAQ](/articles/faq-ssl-certificates/) for details on configuring CAA records for Sectigo and Let's Encrypt.

## Have more questions?

If you have any questions about domain validation or need assistance with your certificate order, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
