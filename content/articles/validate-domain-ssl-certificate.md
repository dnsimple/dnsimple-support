---
title: How to Validate Your Domain for an SSL Certificate
excerpt: Learn how to complete domain validation for your SSL certificate using email-based or DNS-based validation methods in DNSimple.
meta: Understand the domain validation methods available for SSL certificates in DNSimple, with step-by-step instructions for email-based (Sectigo) and DNS-based (Let's Encrypt) validation.
categories:
- SSL Certificates
---

# How to Validate Your Domain for an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

Before a [Certificate Authority](/articles/what-is-certificate-authority/) issues an SSL certificate, it must verify that you control the domain listed on the certificate. This process is called **domain validation**.

DNSimple supports two validation methods, depending on the type of certificate you ordered:

| | Email-Based Validation | DNS-Based Validation |
| --- | --- | --- |
| **Certificate type** | Sectigo | Let's Encrypt |
| **How it works** | Certificate Authority emails an admin contact at the domain | DNSimple creates DNS challenge records automatically |
| **Manual steps required** | Click approval link in email | None (fully automated) |
| **Requirements** | Working admin email at the domain | Domain resolving with DNSimple's name servers |

## Email-Based Validation (Sectigo Certificates) {#email-validation}

Email-based validation is used for all Sectigo certificates. The Certificate Authority sends a verification email to an approved administrative address at the domain.

<div class="section-steps" markdown="1">
##### Steps to complete email-based validation

1. After ordering a [Sectigo SSL certificate](/articles/ordering-standard-certificate/), you will be shown a list of approved email addresses for your domain.
1. Select one of the following administrative email addresses:

    - `admin@yourdomain.com`
    - `administrator@yourdomain.com`
    - `hostmaster@yourdomain.com`
    - `postmaster@yourdomain.com`
    - `webmaster@yourdomain.com`

1. Click <label>Send Approver Email</label> to submit the certificate for validation.
1. Check the inbox for the email address you selected. You will receive a verification email from the Certificate Authority containing a unique approval link.
1. Click the approval link in the email to validate and approve the certificate.
1. Once approved, the Certificate Authority will issue your certificate. You will receive an email and webhook notification from DNSimple when it is ready.

</div>

> [!NOTE]
> The email must be a working mailbox or forwarding address. You cannot use a personal email or your DNSimple account email. See [email requirements for domain validation](/articles/ssl-certificates-email-validation/#requirements) for the full list of accepted addresses.

> [!WARNING]
> WHOIS email addresses are no longer supported for domain validation. As of June 15, 2025, you must use one of the administrative email addresses listed above. See [WHOIS email deprecation](/articles/ssl-certificates-email-validation/#whois-deprecation) for details.

### What if My Email Is Not in the List?

If none of the listed email addresses work for you, you will need to configure one at your domain before proceeding. See [How to Select a Different SSL Certificate Domain Validation Email](/articles/how-to-different-ssl-domain-validation-email/) for detailed instructions.

### Resending the Validation Email

If you did not receive the validation email, you can request it to be resent. See [Resend the Validation Email](/articles/ssl-certificates-email-validation/#resend-email) for instructions.

## DNS-Based Validation (Let's Encrypt Certificates) {#dns-validation}

DNS-based validation is used for all Let's Encrypt certificates. DNSimple handles the entire process automatically using DNS challenge records.

<div class="section-steps" markdown="1">
##### Steps to complete DNS-based validation

1. After ordering a [Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/), DNSimple automatically creates the required ACME challenge DNS records for your domain.
1. DNSimple verifies that the DNS records are resolving correctly.
1. Once the DNS challenge is verified, Let's Encrypt issues the certificate automatically.
1. You will receive an email and [webhook notification](https://developer.dnsimple.com/v2/webhooks/) when the certificate is issued.
1. Download and [install the certificate](/articles/installing-ssl-certificate/) on your server.

</div>

> [!NOTE]
> DNS-based validation requires that your domain is **delegated to and resolving exclusively with DNSimple's name servers**. If the domain uses Secondary DNS or is not delegated to DNSimple, the DNS challenge will fail.

> [!NOTE]
> ACME challenge records (e.g., `_acme-challenge.subdomain.example.com`) may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) in your DNS zone. If you use wildcard records, this may affect DNS resolution for intermediate domain names. Learn more about [wildcards and ENTs](/articles/empty-non-terminals/#the-acme-challenge-example).

## Validation Frequency {#frequency}

Domain validation must be completed every time a new certificate is issued, including renewals. Starting March 2026, [Sectigo certificates are valid for 200 days](/articles/can-multi-year-ssl-certificates/#shorter-validity), which means you will need to complete email-based validation at least twice per year. This frequency will increase as maximum certificate lifetimes continue to decrease through 2029.

For Let's Encrypt certificates, validation is automatic with each renewal, so no additional action is needed if auto-renewal is enabled.

## Troubleshooting Validation Issues {#troubleshooting}

### Email-Based Validation Not Working

- **Not receiving the email**: Verify the email address has a working mailbox or forwarding rule. Check spam and junk folders. You can [resend the validation email](/articles/ssl-certificates-email-validation/#resend-email).
- **No acceptable email addresses**: Set up one of the administrative email addresses at your domain. Use [DNSimple email forwarding](/articles/email-forwarding/) if needed.
- **Certificate stuck in submitted state**: The most common cause is that the approval email was never clicked. Check the inbox and approve the certificate.

### DNS-Based Validation Not Working

- **Domain not resolving with DNSimple**: Verify your domain is delegated to DNSimple's name servers.
- **Secondary DNS configured**: Let's Encrypt certificates are not compatible with Secondary DNS. DNSimple must be the sole DNS provider.
- **Rate limits**: Let's Encrypt enforces [rate limits](https://letsencrypt.org/docs/rate-limits/) on certificate issuance. Wait and retry if you have recently requested many certificates.

## Have more questions?

If you have additional questions or need any assistance with domain validation, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

## Related Reading {#related}

- [SSL Certificate Email-Based Domain Validation](/articles/ssl-certificates-email-validation/) -- Detailed reference on email validation
- [How to Select a Different SSL Certificate Domain Validation Email](/articles/how-to-different-ssl-domain-validation-email/) -- Use an alternative email
- [Let's Encrypt and DNSimple](/articles/letsencrypt/) -- DNS-based validation integration details
- [How Does an SSL Certificate Renewal Work?](/articles/how-certificate-renewal-works/) -- Understand why validation is needed for renewals
- [SSL Certificate Validity Changes (2026-2029)](/articles/announcement-ssl-certificate-validity-changes/) -- Impact on validation frequency
