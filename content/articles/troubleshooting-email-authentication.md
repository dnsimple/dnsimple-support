---
title: Troubleshooting Email Authentication
excerpt: How to diagnose SPF, DKIM, and DMARC failures using email headers and DNS verification.
meta: Diagnose email authentication failures by reading email headers, identifying SPF, DKIM, and DMARC issues, and resolving common problems like alignment failures and missing records.
categories:
- Emails
---

# Troubleshooting Email Authentication

### Table of Contents {#toc}

* TOC
{:toc}

---

When email authentication fails, messages may be rejected, sent to spam, or flagged as suspicious. The fastest way to find the root cause is to check the email headers, identify which protocol is failing, then verify the corresponding DNS record.

## Reading email headers {#headers}

Email headers contain the authentication verdict for every message. They tell you exactly what passed, what failed, and why.

To view headers in Gmail, open the message, click the three-dot menu, and select **Show original**. In Outlook, open the message properties. Other mail clients have similar options.

Look for the `Authentication-Results` header. It reports the status for each protocol:

```
Authentication-Results: mx.google.com;
       spf=pass (domain of sender@yourdomain.com designates 1.2.3.4 as permitted sender);
       dkim=pass header.d=yourdomain.com;
       dmarc=pass (p=REJECT) header.from=yourdomain.com
```

A failure looks like this:

```
Authentication-Results: mx.google.com;
       spf=fail (domain of sender@yourdomain.com does not designate 5.6.7.8 as permitted sender);
       dkim=neutral (no signature);
       dmarc=fail (p=NONE) header.from=yourdomain.com
```

Use the failing protocol to jump to the relevant section below.

## SPF failures {#spf}

The headers show `spf=fail` or `spf=softfail`. Common causes:

- **Sending server not listed** - The IP that sent the message is not in your [SPF record](/articles/spf-record/). This happens when you add a new email service (marketing platform, ticketing system, transactional sender) without updating SPF.
- **Multiple SPF records** - A domain must have exactly one SPF record. Two TXT records starting with `v=spf1` can cause receiving servers to reject both. Merge them into a single record.
- **Too many DNS lookups** - SPF allows a maximum of 10 DNS lookups. Each `include:`, `a`, `mx`, and `redirect` mechanism counts toward this limit. Exceeding it causes a `permerror` and SPF fails for all messages. The [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/) explains each mechanism and the lookup limit.
- **Syntax errors** - A missing colon (`include_spf.google.com` instead of `include:_spf.google.com`) or a typo silently breaks the record.

To confirm your SPF record is published and valid, see [Verifying SPF with dig and Online Tools](/articles/verifying-spf/). To update your record, see [Setting Up SPF Records](/articles/setting-up-spf/).

## DKIM failures {#dkim}

The headers show `dkim=fail`, `dkim=neutral`, or `dkim=none`. Common causes:

- **No signature present** - The sending service is not signing messages. This is a configuration issue on the sending side, not in DNS. Check your email provider's DKIM settings.
- **Wrong selector or subdomain** - The DKIM public key must be published at `selector._domainkey.yourdomain.com`. If the selector in DNS does not match the selector the sending service uses, verification fails.
- **Key mismatch** - The public key in DNS does not match the private key used to sign. This happens if you regenerated keys on the provider side without updating DNS.
- **Truncated key** - Some DNS interfaces silently truncate long TXT records. If the public key is cut off, signature verification fails. Confirm the full key is present in your DNS record.

To confirm your DKIM record is published correctly, see [Verifying DKIM with dig and Online Tools](/articles/verify-dkim/). To add or update DKIM, see [Setting Up DKIM](/articles/set-up-dkim/).

## DMARC failures {#dmarc}

The headers show `dmarc=fail`. DMARC fails when neither SPF nor DKIM passes **with alignment**. The individual protocol result is only part of the picture - alignment is what matters for DMARC.

### What alignment means {#alignment}

[DMARC alignment](/articles/understanding-spf-dkim-dmarc-alignment/) requires that the domain in the `From` header matches the domain verified by SPF or DKIM:

- **SPF alignment** - The `Return-Path` domain (checked by SPF) must match the `From` header domain.
- **DKIM alignment** - The `d=` domain in the DKIM signature must match the `From` header domain.

Third-party senders (marketing platforms, CRMs, ticketing systems) often send from their own servers using their own `Return-Path` and DKIM domains. Even if SPF and DKIM pass for the sender's domain, DMARC fails because nothing aligns with your `From` domain. The fix is to configure each service to use your domain for DKIM signing or to set the `Return-Path` to your domain.

### Policy and its effect {#policy}

The impact of a DMARC failure depends on your published policy:

- `p=none` - Messages are delivered normally. Failures appear only in DMARC reports.
- `p=quarantine` - Failing messages are sent to spam.
- `p=reject` - Failing messages are blocked entirely.

If legitimate email is being blocked or sent to spam, your DMARC policy may be stricter than your authentication setup supports. See [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) for how to move safely from `p=none` to `p=reject`.

To confirm your DMARC record is published correctly, see [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/).

## Quick-reference checklist {#checklist}

When authentication is failing and you are not sure where to start:

- Check email headers for `Authentication-Results` to identify which protocol is failing
- Verify each DNS record is published and syntactically valid: [SPF](/articles/verifying-spf/), [DKIM](/articles/verify-dkim/), [DMARC](/articles/verifying-dmarc/)
- Confirm only one SPF record exists and it has 10 or fewer DNS lookups
- Confirm the DKIM selector matches what the sending service expects
- Confirm the full DKIM public key is present (not truncated)
- Check DMARC alignment - the `From` domain must match the SPF or DKIM domain
- If you use third-party senders, verify each one is configured for alignment with your domain
- Allow time for DNS propagation if records were recently changed

## Have more questions?

If you have additional questions or need assistance troubleshooting email authentication, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
