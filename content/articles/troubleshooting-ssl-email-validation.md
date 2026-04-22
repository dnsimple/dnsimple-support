---
title: Troubleshooting Email Validation for SSL Certificates
excerpt: Not receiving the domain validation email for your Sectigo SSL certificate? Learn the common causes and how to fix them.
meta: Fix SSL certificate email validation issues. Covers wrong email address, spam filters, WHOIS email deprecation, missing MX records, and resending validation.
categories:
- SSL Certificates
---

# Troubleshooting Email Validation for SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

Sectigo certificates require [email-based domain validation](/articles/ssl-certificates-email-validation/). The certificate authority sends a verification email to an administrative address at the domain, and someone must click the approval link. If you are not receiving the validation email, check the following.

## Wrong Email Address Selected {#wrong-email}

The validation email is sent to the address you selected during the certificate order. Only standard administrative addresses are accepted:

- `admin@example.com`
- `administrator@example.com`
- `hostmaster@example.com`
- `postmaster@example.com`
- `webmaster@example.com`

**Fix:** If you selected the wrong address, you can [change the validation email](/articles/ssl-certificates-email-validation/#select-email) from the certificate page in DNSimple and resend the approval request.

## Email Caught by Spam Filters {#spam}

Validation emails from Sectigo may be caught by spam filters, especially in organizations with strict email security policies.

**Check:**

1. Look in the spam/junk folder of the mailbox for the selected address.
2. Check with your email administrator for quarantined messages from Sectigo or `@trust-provider.com`.
3. Whitelist `@trust-provider.com` and `@sectigo.com` if your organization uses aggressive spam filtering.

## Mailbox Does Not Exist {#no-mailbox}

The validation email address must be a working mailbox that receives email. If `admin@example.com` does not exist as a mailbox, the email will bounce and you will not receive it.

**Fix:**

- Create the required mailbox at your email provider, or set up a forward from one of the accepted addresses to a mailbox you monitor.
- Alternatively, select a different accepted address that has an active mailbox.

## Missing or Incorrect MX Records {#mx-records}

If the domain does not have MX records configured (or they point to the wrong server), email to that domain will not be delivered.

**Check:** Verify the domain has working MX records. You can check this in your DNSimple DNS records or by running `dig example.com MX` from a terminal.

## WHOIS Email Addresses No Longer Accepted {#whois}

As of June 2025, WHOIS-based email addresses are no longer accepted for domain validation. If you previously used a WHOIS contact email, you must now select one of the standard administrative addresses listed above.

## Resending the Validation Email {#resend}

If you need to resend the validation email:

1. Go to the certificate page in your DNSimple account.
2. If the certificate is still in a pending state, you will see an option to resend the approval email.
3. Verify the selected email address is correct before resending.

For the full process, see [SSL Certificate Email-Based Domain Validation](/articles/ssl-certificates-email-validation/).

## Have more questions?

If you have any questions about email validation, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
