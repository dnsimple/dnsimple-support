---
title: "Email Deliverability: How to Get Your Emails to the Inbox"
excerpt: What email deliverability is, why emails end up in spam, and the factors that determine inbox placement.
meta: Email deliverability is the ability to land emails in inboxes, not spam. Learn how SPF, DKIM, DMARC, sender reputation, and list hygiene affect inbox placement.
categories:
- Emails
---

# Email Deliverability: How to Get Your Emails to the Inbox

### Table of Contents {#toc}

* TOC
{:toc}

---

Email deliverability is the ability to land emails in recipients' inboxes rather than spam folders. An email can be successfully delivered to a mail server and still end up in spam. Deliverability depends on DNS authentication, sender reputation, list quality, and sending patterns.

## What is email deliverability? {#what-is}

Email deliverability measures how consistently your emails reach the inbox instead of being filtered as spam, rejected, or lost. Mailbox providers like Gmail, Outlook, and Yahoo evaluate every incoming message against a set of signals before deciding where to place it.

### Delivery vs. deliverability {#delivery-vs-deliverability}

These two terms describe different things:

- **Email delivery** - Whether the email reached the recipient's mail server. A delivery failure is a [bounce](/articles/understanding-email-bounces/) (the server rejected the message entirely).
- **Email deliverability** - Whether the email reached the inbox rather than the spam folder.

A 99% delivery rate means almost no bounces. It says nothing about how many of those delivered emails reached the inbox.

### What is a good deliverability rate? {#good-rate}

Industry benchmarks vary, but general thresholds are:

| Metric | Healthy | Needs attention |
|---|---|---|
| Inbox placement rate | Above 90% | Below 85% |
| Spam complaint rate | Below 0.1% | 0.1% or higher |
| Hard bounce rate | Below 0.5% | 0.5% or higher |
| Total bounce rate | Below 2% | 2% or higher |

Most email service providers show delivery and bounce rates in their dashboards. Inbox placement rate requires additional tools like [Google Postmaster Tools](https://postmaster.google.com/) or seed-list testing.

## Why emails end up in spam {#why-spam}

Emails land in spam for specific, diagnosable reasons. These are the most common causes, in order of impact.

### Missing or broken email authentication {#spam-authentication}

If your domain does not have [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) configured correctly, mailbox providers have no way to verify that your email is legitimate. This is the single most common cause of deliverability problems for domains managed through DNS.

Since February 2024, Google and Yahoo require SPF, DKIM, and DMARC for bulk senders. Microsoft Outlook enforced similar requirements starting May 2025. Missing records can result in outright rejection.

To configure authentication, see [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/).

### Poor sender reputation {#spam-reputation}

Mailbox providers assign a reputation score to your domain and sending IP based on historical behavior. Factors that damage reputation:

- High bounce rates from sending to invalid addresses
- Spam complaints from recipients
- Sending to spam trap addresses
- Sudden volume spikes from a domain with little sending history
- Appearing on a public blacklist (Spamhaus, Barracuda)

### Dirty email lists {#spam-list}

Sending to outdated, purchased, or unverified email lists inflates bounce rates and spam complaints. Both directly damage sender reputation.

### Content triggers {#spam-content}

Spam-triggering content is less impactful than authentication and reputation, but can still cause problems:

- Excessive images with little text
- Misleading subject lines
- URL shorteners (often associated with phishing)
- Broken HTML
- Missing unsubscribe link

### Email forwarding {#spam-forwarding}

When email is forwarded, the forwarding server's IP replaces the original sender's IP. This causes SPF to fail because the forwarding server is not in the original sender's SPF record. DKIM signatures survive forwarding (they are part of the message), which is one reason DKIM is essential alongside SPF.

For forwarding-specific issues, see [Email Forwarding Not Working](/articles/email-forwarding-not-working/).

## How DNS affects email deliverability {#dns}

DNS is where email deliverability starts. Every authentication signal that mailbox providers check is a DNS record:

- **[SPF records](/articles/spf-record/)** tell receiving servers which IPs are authorized to send for your domain.
- **[DKIM records](/articles/dkim-record/)** publish the public keys that verify message signatures.
- **[DMARC records](/articles/dmarc-record/)** define the policy for handling authentication failures.
- **[MX records](/articles/mx-record/)** route email to the correct servers.

Incorrect, missing, or slow-to-propagate DNS records are behind a large share of deliverability problems. A common pattern: a domain owner adds a new email service but forgets to update the SPF record. Emails from that service fail authentication, deliverability drops, and the symptom is "my emails are going to spam."

DNSimple manages these records alongside everything else your domain needs.

## Common email deliverability problems {#problems}

### Why are my emails going to spam even though authentication passes? {#problem-spam-despite-auth}

Authentication is necessary but not sufficient. If SPF, DKIM, and DMARC all pass but email still lands in spam, the cause is usually reputation or content. Check your domain reputation with [Google Postmaster Tools](https://postmaster.google.com/), scan for blacklisting with [MXToolbox](https://mxtoolbox.com/blacklists.aspx), and review your spam complaint rate.

### Why did my deliverability drop suddenly? {#problem-sudden-drop}

Common causes:

- A sending service was removed from or never added to your SPF record
- A DKIM key was rotated by your email provider but the DNS record was not updated
- Your domain or IP was added to a blacklist after a spam complaint spike
- A large send to a stale list caused a bounce rate spike

### Do I need a dedicated IP address for good deliverability? {#problem-dedicated-ip}

Not necessarily. Shared IPs from reputable email service providers carry the provider's collective reputation, which is usually good. Dedicated IPs make sense for high-volume senders (100,000+ emails per month) who want full control over their IP reputation, but they require proper warm-up.

## Frequently asked questions {#faq}

### What is the difference between email delivery and email deliverability? {#faq-delivery-vs}

Email delivery is whether the message reached the recipient's mail server (not bounced). Email deliverability is whether it reached the inbox rather than the spam folder. You can have high delivery rates and poor deliverability at the same time.

### How long does it take to fix deliverability problems? {#faq-how-long}

DNS authentication changes take effect within minutes to hours after the records propagate. Reputation recovery takes longer - typically two to four weeks of consistent, clean sending after fixing the underlying issue.

### Can email content alone cause deliverability problems? {#faq-content}

Content is a factor, but it is rarely the primary cause. Authentication failures and poor sender reputation have a much larger impact. Fix authentication and reputation first.

### Does DNSimple send email? {#faq-dnsimple}

DNSimple does not provide email hosting or send email on your behalf. DNSimple manages the DNS records that email authentication and routing depend on. Your email service provider handles the actual sending.

## Next steps {#next-steps}

- [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/) - Configure SPF, DKIM, and DMARC
- [Improve Email Deliverability](/articles/improving-email-deliverability/) - Step-by-step actions to improve inbox placement
- [Monitor Email Deliverability](/articles/monitoring-email-deliverability/) - Tools and routines for tracking deliverability over time

## Have more questions?

If you have any questions about email deliverability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
