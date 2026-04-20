---
title: How to Set Up Email Authentication for Your Domain (SPF, DKIM & DMARC)
excerpt: What email authentication is, how SPF, DKIM, and DMARC work together, and how to set them up for your domain.
meta: Email authentication (also called email validation) uses SPF, DKIM, and DMARC DNS records to verify that emails sent from your domain are legitimate. Learn how these protocols work together and how to set them up.
categories:
- Emails
---

# How to Set Up Email Authentication for Your Domain (SPF, DKIM & DMARC)

### Table of Contents {#toc}

* TOC
{:toc}

---

Email authentication (also called email validation) is a set of DNS-based protocols that verify emails sent from your domain are legitimate. The three protocols - [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) - work together to prove to receiving mail servers that a message was authorized by the domain owner and was not altered in transit.

Without email authentication, anyone can send email claiming to come from your domain. Mailbox providers like Gmail, Outlook, and Yahoo have no way to distinguish legitimate messages from forgeries, so they are more likely to filter your email as spam or reject it outright.

## What is email authentication? {#what-is}

Email authentication is the process of verifying that an email message was sent by an authorized sender and was not tampered with during delivery. It solves a fundamental problem with email: the SMTP protocol, designed in the early 1980s, has no built-in way to verify sender identity. Any server can send email claiming to be from any domain.

Three DNS-based protocols address this gap:

- **SPF** verifies that the sending server is authorized to send email for the domain.
- **DKIM** verifies that the message content was not altered after sending, using a cryptographic signature.
- **DMARC** ties SPF and DKIM together with a policy that tells receiving servers what to do when authentication fails.

These protocols are sometimes grouped under the term "email validation" because they validate that the sender is who they claim to be.

## How SPF, DKIM, and DMARC work together {#how-it-works}

Each protocol covers a gap the others leave open:

| Protocol | What it verifies | Limitation |
|---|---|---|
| [SPF](/articles/spf-record/) | The sending server's IP is authorized for the domain | Fails when email is forwarded, because the forwarding server's IP is not in the original sender's SPF record |
| [DKIM](/articles/dkim-record/) | The message was signed by the domain owner and was not modified | Does not tell receiving servers what to do if verification fails |
| [DMARC](/articles/dmarc-record/) | SPF or DKIM passed and the domain in the `From:` header matches (alignment) | Depends on SPF and DKIM to function |

A domain with only SPF will have forwarded emails fail authentication. A domain with SPF and DKIM but no DMARC leaves enforcement up to each receiving server. All three together give receiving servers clear proof of legitimacy and clear instructions for handling failures.

For a deeper explanation of how alignment works across the three protocols, see [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/).

## Why email authentication matters {#why-it-matters}

### Inbox placement

Mailbox providers use authentication results as a primary signal when deciding whether to deliver email to the inbox or the spam folder. Missing or failing authentication is one of the most common reasons email lands in spam. See [Email Deliverability](/articles/understanding-email-deliverability/) for more on how authentication affects inbox placement.

### Protection against spoofing

Without authentication records, attackers can send phishing emails that appear to come from your domain. SPF, DKIM, and DMARC make spoofing significantly harder. See [Protecting Your Domain from Email Spoofing](/articles/protecting-your-domain-from-email-spoofing/) for details.

### Compliance with sender requirements

Since February 2024, Google and Yahoo require SPF, DKIM, and DMARC for all bulk email senders (5,000+ messages per day to their users). Microsoft Outlook enforced similar requirements starting May 2025. Even below those thresholds, having all three configured improves deliverability with every major mailbox provider.

## How to set up email authentication {#setup}

### Step 1: Identify all services that send email as your domain {#step-1}

Before configuring any DNS records, list every service that sends email using your domain in the `From:` address:

- Primary email provider (Google Workspace, Microsoft 365, Fastmail)
- Transactional email services (SendGrid, Postmark, Amazon SES)
- Marketing platforms (Mailchimp, HubSpot, ConvertKit)
- Support tools (Zendesk, Intercom, Help Scout)
- Your application, if it sends email directly (password resets, notifications)

Every service on this list needs to be authorized in your SPF record and configured with DKIM signing.

### Step 2: Set up SPF {#step-2}

An [SPF record](/articles/spf-record/) is a TXT record on your domain that lists every server authorized to send email on your behalf.

Example for a domain using Google Workspace and Postmark:

```
v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
```

Key rules:

- Your domain must have exactly **one** SPF record. Multiple SPF records cause all SPF checks to fail.
- SPF allows a maximum of **10 DNS lookups**. Each `include:` counts as at least one. See the [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/) for details.
- Start with `~all` (soft fail), then move to `-all` (hard fail) after confirming all services are included.

For full setup instructions, see [Set Up SPF Records](/articles/setting-up-spf/).

### Step 3: Set up DKIM {#step-3}

A [DKIM record](/articles/dkim-record/) publishes a public key as a TXT record at a specific selector subdomain (e.g., `google._domainkey.yourdomain.com`). Your email provider signs each outgoing message with the corresponding private key, and receiving servers verify the signature against the public key in DNS.

Each email service uses its own selector:

| Provider | Selector |
|---|---|
| Google Workspace | `google._domainkey` |
| Microsoft 365 | `selector1._domainkey`, `selector2._domainkey` |
| Mailchimp | `k1._domainkey` |
| SendGrid | `s1._domainkey`, `s2._domainkey` |

If you use more than one email service, each needs its own DKIM record. See [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

For full setup instructions, see [Set Up DKIM](/articles/set-up-dkim/).

### Step 4: Set up DMARC {#step-4}

A [DMARC record](/articles/dmarc-record/) is a TXT record at `_dmarc.yourdomain.com` that tells receiving servers what to do when SPF and DKIM checks fail, and where to send authentication reports.

Start with a monitoring-only policy:

```
v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com
```

This lets you see authentication results without affecting delivery. After reviewing reports for two to four weeks and confirming all legitimate email passes, gradually tighten the policy from `p=none` to `p=quarantine` to `p=reject`. See [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) for the full rollout process.

For setup instructions, see [Set Up DMARC](/articles/set-up-dmarc/).

### Step 5: Verify your records {#step-5}

After adding all three records, verify they are published correctly:

```bash
dig +short TXT yourdomain.com | grep "v=spf1"
dig +short TXT selector._domainkey.yourdomain.com
dig +short TXT _dmarc.yourdomain.com
```

Send a test email to a Gmail address, open it, and select "Show original" to check the `Authentication-Results` header. All three should show `pass`:

```
spf=pass
dkim=pass
dmarc=pass
```

For detailed verification steps, see [Verify SPF](/articles/verifying-spf/), [Verify DKIM](/articles/verify-dkim/), and [Verify DMARC](/articles/verifying-dmarc/).

## Common email authentication mistakes {#common-mistakes}

### Multiple SPF records on one domain {#multiple-spf}

Adding a second TXT record starting with `v=spf1` instead of modifying the existing one causes all SPF checks to fail. Your domain must have exactly one SPF record that combines all authorized senders.

### DKIM record on the wrong selector or domain {#wrong-dkim}

DKIM records must be published at the exact selector subdomain your email provider specifies. A typo in the selector name, or adding the record to the wrong domain, means receiving servers cannot find the public key.

> [!TIP]
> Wait 15 to 30 minutes after adding a DKIM record before testing. DNS propagation means the record may not be visible immediately.

### Exceeding the SPF 10-lookup limit {#spf-lookups}

Each `include:` in your SPF record triggers at least one DNS lookup, and some providers chain to additional lookups internally. Google's `_spf.google.com` alone can consume three to four lookups. If you use multiple services, audit your total with a tool like [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx).

### DMARC stuck at p=none {#dmarc-none}

A DMARC record with `p=none` provides monitoring but no protection. It does not prevent spoofing or improve deliverability signals. Treat `p=none` as a temporary state and move to enforcement after reviewing your DMARC reports.

### Forgetting to authenticate all sending services {#missing-services}

If one of your services is missing from your SPF record or does not have DKIM configured, emails from that service will fail authentication. This is especially common with CRM tools, billing systems, and marketing platforms that send email on your behalf.

For more diagnostic steps, see [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/).

## Frequently asked questions {#faq}

### Do I need SPF, DKIM, and DMARC, or is one enough? {#faq-all-three}

You need all three. SPF alone fails on forwarded email. DKIM alone has no enforcement policy. DMARC depends on SPF and DKIM to function. Google, Yahoo, and Microsoft all require or strongly recommend all three.

### What happens if email authentication fails? {#faq-fails}

The result depends on your DMARC policy. With `p=none`, nothing happens (the email is delivered normally). With `p=quarantine`, failing emails are sent to the spam folder. With `p=reject`, failing emails are blocked entirely.

### How long does it take to set up email authentication? {#faq-how-long}

The DNS changes take minutes. The DMARC monitoring period (starting at `p=none` and reviewing reports before enforcing) typically takes two to six weeks, depending on how many services send email from your domain.

### Does email authentication prevent all spam and phishing? {#faq-prevent-spam}

It prevents unauthorized senders from using your domain. It does not stop spam or phishing that uses other domains. It also does not guarantee inbox placement - other factors like [sender reputation and content](/articles/understanding-email-deliverability/) also affect delivery.

### What about domains that do not send email? {#faq-non-sending}

Non-sending domains still need protection. Without authentication records, attackers can spoof them for phishing. Configure `v=spf1 -all` (authorize no senders), a DMARC record with `p=reject`, and a [null MX record](/articles/what-are-null-mx-records/) to declare the domain does not accept email.

## Have more questions?

If you have any questions about email authentication, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
