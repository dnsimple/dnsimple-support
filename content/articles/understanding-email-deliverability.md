---
title: Understanding Email Deliverability
excerpt: What email deliverability is, why it matters, and how DNS-based authentication affects whether your emails reach recipients' inboxes.
meta: Understand email deliverability and the DNS-based factors - SPF, DKIM, DMARC, and sender reputation - that determine whether your emails reach recipients' inboxes or end up in spam folders.
categories:
- Emails
---

# Understanding Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Email deliverability is the measure of how successfully emails reach recipients' inboxes rather than being filtered as spam, rejected, or lost in transit. It depends on several DNS-backed signals that mailbox providers evaluate when deciding where to place incoming mail.

## Deliverability vs. delivery {#deliverability-vs-delivery}

These two terms are often confused:

- **Email delivery** refers to whether an email reaches the recipient's mail server at all (i.e., it was not bounced).
- **Email deliverability** refers to whether it reaches the inbox rather than the spam folder. Deliverability is the broader concept and includes reputation, authentication, and content factors.

A high delivery rate (few bounces) does not guarantee good deliverability. Emails can be delivered to the mail server but still land in spam.

## Factors that affect deliverability {#factors}

### Email authentication {#authentication}

Mailbox providers check whether incoming email passes DNS-based authentication. Three protocols work together:

- **[SPF (Sender Policy Framework)](/articles/spf-record/)** - A TXT record that lists which servers are authorized to send email for your domain. Receiving servers compare the sending IP against this list.
- **[DKIM (DomainKeys Identified Mail)](/articles/dkim-record/)** - A TXT record containing a public key. The sending server signs each message with the corresponding private key, and the receiving server verifies the signature.
- **[DMARC (Domain-based Message Authentication, Reporting & Conformance)](/articles/dmarc-record/)** - A TXT record that tells receiving servers what to do when SPF or DKIM checks fail and where to send reports about authentication results.

When all three are configured correctly and [aligned](/articles/understanding-spf-dkim-dmarc-alignment/), mailbox providers have strong evidence that the email is legitimate.

> [!NOTE]
> For a walkthrough of configuring all three protocols, see [Email Authentication Best Practices](/articles/email-authentication-best-practices/).

### Sender reputation {#reputation}

Mailbox providers (Gmail, Outlook, Yahoo, etc.) assign a reputation score to your domain and sending IP based on historical behavior:

- **Bounce rates** - A high rate of [hard bounces](/articles/understanding-email-bounces/) signals a poorly maintained list and lowers reputation.
- **Spam complaints** - Recipients marking your email as spam directly hurts reputation. Most providers consider anything above 0.1% (1 per 1,000 emails) problematic.
- **Engagement** - Whether recipients open, click, or reply to your messages also factors in. Low engagement can push future messages toward spam.
- **Blacklists** - If your domain or sending IP appears on a public blacklist (e.g., Spamhaus, Barracuda), deliverability drops significantly.

### Content and sending patterns {#content}

These factors are outside the scope of DNS, but they interact with authentication and reputation:

- Spam-triggering words, excessive images, or broken HTML can hurt inbox placement even when authentication passes.
- Sudden spikes in sending volume can trigger spam filters, especially from a new or low-volume domain.
- Sending to invalid addresses inflates bounce rates, which damages reputation over time.

## How DNSimple helps with deliverability {#dnsimple}

DNSimple is not a mailbox provider and does not send email on your behalf, but deliverability depends heavily on DNS records that DNSimple manages:

- **SPF records** - Use the [Record Editor](/articles/record-editor/) to publish a TXT record listing your authorized senders. See [Setting Up SPF Records](/articles/setting-up-spf/).
- **DKIM records** - Add the public key your email provider gives you as a TXT record at the appropriate selector. See [Setting Up DKIM](/articles/set-up-dkim/).
- **DMARC records** - Publish a policy record at `_dmarc.yourdomain.com` to control how authentication failures are handled. See [Setting Up DMARC](/articles/set-up-dmarc/).
- **MX records** - Correct MX configuration ensures mail is routed to the right servers in the first place.

> [!TIP]
> If you use multiple services that send email on your behalf (e.g., Google Workspace for corporate mail and Postmark for transactional email), each one needs to be authorized in your SPF record and may require its own DKIM selector. See [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

## Next steps {#next-steps}

- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Actionable steps to configure authentication and improve sender reputation.
- [Monitoring Email Deliverability](/articles/monitoring-email-deliverability/) - Tools and techniques for tracking authentication status and reputation.

## Have more questions?

If you have additional questions or need assistance with email deliverability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
