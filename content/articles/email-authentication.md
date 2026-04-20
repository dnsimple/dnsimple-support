---
title: How to Set Up Email Authentication for Your Domain (SPF, DKIM & DMARC)
excerpt: How to set up SPF, DKIM, and DMARC for your domain to authenticate your email and protect against spoofing.
meta: Set up email authentication (also called email validation) for your domain using SPF, DKIM, and DMARC DNS records. Step-by-step instructions for configuring all three protocols.
categories:
- Emails
---

# How to Set Up Email Authentication for Your Domain (SPF, DKIM & DMARC)

### Table of Contents {#toc}

* TOC
{:toc}

---

Email authentication uses three DNS protocols - [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) - to verify that emails sent from your domain are legitimate. Setting up all three protects your domain from [spoofing](/articles/protecting-your-domain-from-email-spoofing/) and improves [email deliverability](/articles/understanding-email-deliverability/).

Since February 2024, Google and Yahoo require SPF, DKIM, and DMARC for bulk email senders. Microsoft Outlook enforced similar requirements starting May 2025.

## Before starting

You will need:

- Access to your domain's DNS records in DNSimple
- Access to your email service provider's admin panel to retrieve SPF includes and DKIM keys
- A list of every service that sends email using your domain in the `From:` address (email provider, transactional email, marketing platforms, support tools, your application)

## Step 1: Set up SPF {#step-1}

An [SPF record](/articles/spf-record/) is a TXT record that lists every server authorized to send email for your domain.

Create a single SPF record that includes all your sending services. Example for Google Workspace and Postmark:

```
v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
```

Key rules:

- Your domain must have exactly **one** SPF record. Multiple SPF records cause all SPF checks to fail.
- SPF allows a maximum of **10 DNS lookups**. Each `include:` counts as at least one. See the [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/) for details.
- Start with `~all` (soft fail). Move to `-all` (hard fail) after confirming all services are included.

For full setup instructions in DNSimple, see [Set Up SPF Records](/articles/setting-up-spf/).

## Step 2: Set up DKIM {#step-2}

A [DKIM record](/articles/dkim-record/) publishes a public key as a TXT record at a selector subdomain. Your email provider signs each outgoing message with the corresponding private key.

Each service uses its own selector:

| Provider | Selector |
|---|---|
| Google Workspace | `google._domainkey` |
| Microsoft 365 | `selector1._domainkey`, `selector2._domainkey` |
| Mailchimp | `k1._domainkey` |
| SendGrid | `s1._domainkey`, `s2._domainkey` |

Add a DKIM record for every service on your list. If you use more than one, see [Manage Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

> [!TIP]
> Wait 15 to 30 minutes after adding a DKIM record before testing. DNS propagation means the record may not be visible immediately.

For full setup instructions in DNSimple, see [Set Up DKIM](/articles/set-up-dkim/).

## Step 3: Set up DMARC {#step-3}

A [DMARC record](/articles/dmarc-record/) is a TXT record at `_dmarc.yourdomain.com` that tells receiving servers what to do when SPF and DKIM checks fail.

Start with a monitoring-only policy:

```
v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com
```

Leave `p=none` in place for two to four weeks while you review the aggregate reports. Once all legitimate email passes authentication, gradually tighten the policy to `p=quarantine` and then `p=reject`. See [Implement a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) for the rollout process.

For setup instructions in DNSimple, see [Set Up DMARC](/articles/set-up-dmarc/).

## Step 4: Verify your records {#step-4}

After adding all three records, confirm they are published correctly:

```bash
dig +short TXT yourdomain.com | grep "v=spf1"
dig +short TXT selector._domainkey.yourdomain.com
dig +short TXT _dmarc.yourdomain.com
```

Send a test email to a Gmail address. Open the message, select "Show original," and check the `Authentication-Results` header. All three should show `pass`:

```
spf=pass
dkim=pass
dmarc=pass
```

For detailed verification steps, see [Verify SPF](/articles/verifying-spf/), [Verify DKIM](/articles/verify-dkim/), and [Verify DMARC](/articles/verifying-dmarc/).

## Common mistakes {#common-mistakes}

### Multiple SPF records on one domain {#multiple-spf}

Adding a second TXT record starting with `v=spf1` instead of modifying the existing one causes all SPF checks to fail. Your domain must have exactly one SPF record.

### DKIM record on the wrong selector or domain {#wrong-dkim}

DKIM records must be at the exact selector subdomain your email provider specifies. A typo in the selector name or adding the record to the wrong domain means receiving servers cannot find the public key.

### Exceeding the SPF 10-lookup limit {#spf-lookups}

Each `include:` triggers at least one DNS lookup. Some providers chain to additional lookups internally. Google's `_spf.google.com` alone can consume three to four lookups. Audit your total with [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx).

### DMARC stuck at p=none {#dmarc-none}

A DMARC record with `p=none` provides monitoring but no protection. Treat it as a temporary state and move to enforcement after reviewing your reports.

### Forgetting to authenticate all sending services {#missing-services}

If a service is missing from your SPF record or does not have DKIM configured, emails from that service will fail authentication. This is especially common with CRM tools, billing systems, and marketing platforms.

For more diagnostic steps, see [Troubleshoot Email Authentication](/articles/troubleshooting-email-authentication/).

## Frequently asked questions {#faq}

### Do I need SPF, DKIM, and DMARC, or is one enough? {#faq-all-three}

You need all three. SPF alone fails on forwarded email. DKIM alone has no enforcement policy. DMARC depends on SPF and DKIM to function. Google, Yahoo, and Microsoft all require or strongly recommend all three.

### What happens if email authentication fails? {#faq-fails}

The result depends on your DMARC policy. With `p=none`, failing emails are delivered normally. With `p=quarantine`, they go to spam. With `p=reject`, they are blocked entirely.

### How long does it take to set up? {#faq-how-long}

The DNS changes take minutes. The DMARC monitoring period (reviewing reports before enforcing) typically takes two to six weeks.

### Does email authentication prevent all spam and phishing? {#faq-prevent-spam}

It prevents unauthorized senders from using your domain. It does not stop spam or phishing from other domains. It also does not guarantee inbox placement - [sender reputation and content](/articles/understanding-email-deliverability/) also affect delivery.

### What about domains that do not send email? {#faq-non-sending}

Non-sending domains still need protection. Configure `v=spf1 -all` (authorize no senders), a DMARC record with `p=reject`, and a [null MX record](/articles/what-are-null-mx-records/) to declare the domain does not accept email.

## Have more questions?

If you have any questions about email authentication, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
