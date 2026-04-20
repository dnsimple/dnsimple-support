---
title: "Email Deliverability: How to Get Your Emails to the Inbox"
excerpt: What email deliverability is, why emails end up in spam, and how to fix it through DNS authentication, sender reputation, and list management.
meta: Email deliverability is the ability to land emails in recipients' inboxes rather than spam folders. Learn how DNS authentication (SPF, DKIM, DMARC), sender reputation, list hygiene, and sending patterns determine inbox placement.
categories:
- Emails
---

# Email Deliverability: How to Get Your Emails to the Inbox

### Table of Contents {#toc}

* TOC
{:toc}

---

Email deliverability is the ability to land emails in recipients' inboxes rather than spam folders. It is not the same as email delivery (whether the message reached the mail server at all). An email can be successfully delivered to a mail server and still end up in spam. Deliverability is determined by DNS authentication, sender reputation, list quality, and sending patterns.

## What is email deliverability? {#what-is}

Email deliverability measures how consistently your emails reach the inbox instead of being filtered as spam, rejected, or lost. Mailbox providers like Gmail, Outlook, and Yahoo evaluate every incoming message against a set of signals before deciding where to place it.

### Delivery vs. deliverability {#delivery-vs-deliverability}

These two terms describe different things:

- **Email delivery** - Whether the email reached the recipient's mail server. A delivery failure is a [bounce](/articles/understanding-email-bounces/) (the server rejected the message entirely).
- **Email deliverability** - Whether the email reached the inbox rather than the spam folder. A delivered email can still have poor deliverability if it lands in spam.

A 99% delivery rate means almost no bounces. It says nothing about how many of those delivered emails actually reached the inbox.

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

Emails land in spam for specific, diagnosable reasons. The most common causes, in order of impact:

### Missing or broken email authentication {#spam-authentication}

If your domain does not have [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) records configured, or if they are misconfigured, mailbox providers have no way to verify that your email is legitimate. This is the single most common cause of deliverability problems for domains managed through DNS.

Since February 2024, Google and Yahoo require SPF, DKIM, and DMARC for bulk senders. Microsoft Outlook enforced similar requirements starting May 2025. Missing records can result in outright rejection, not just spam placement.

See [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/) for the full setup process.

### Poor sender reputation {#spam-reputation}

Mailbox providers assign a reputation score to your domain and sending IP based on historical behavior. Factors that damage reputation:

- High bounce rates (sending to invalid addresses)
- Spam complaints from recipients
- Sending to spam trap addresses
- Sudden volume spikes from a domain with little sending history
- Appearing on a public blacklist (e.g., Spamhaus, Barracuda)

### Dirty email lists {#spam-list}

Sending to outdated, purchased, or unverified email lists inflates bounce rates and spam complaints, which directly damages reputation.

### Content triggers {#spam-content}

Spam-triggering content is less impactful than authentication and reputation, but can still cause problems:

- Excessive images with little text
- Misleading subject lines
- URL shorteners (often associated with phishing)
- Broken HTML
- Missing unsubscribe link

## How to improve email deliverability {#improve}

Address these areas in priority order. DNS authentication is the foundation - fix it first.

### 1. Set up email authentication {#improve-authentication}

Configure all three DNS-based authentication protocols:

- **[Set Up SPF Records](/articles/setting-up-spf/)** - Authorize every service that sends email for your domain in a single TXT record.
- **[Set Up DKIM](/articles/set-up-dkim/)** - Add a DKIM public key for each sending service at its designated selector subdomain.
- **[Set Up DMARC](/articles/set-up-dmarc/)** - Publish a policy record and enable reporting. Start with `p=none` (monitoring), then move to enforcement.

For a full walkthrough of the authentication setup process, see [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/).

### 2. Check and protect sender reputation {#improve-reputation}

Use these free tools to assess your current standing:

- [Google Postmaster Tools](https://postmaster.google.com/) - Gmail-specific reputation, spam rate, and authentication data.
- [Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) - Outlook/Hotmail IP reputation and complaint data.
- [Sender Score](https://www.senderscore.org/) - General reputation score (0-100) across multiple providers.
- [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx) - Scan your domain against dozens of blacklists.

If your domain or IP is on a blacklist, fix the underlying issue (compromised account, spam complaints, poor list hygiene), then submit a removal request to the blacklist operator.

### 3. Clean your email list {#improve-list}

- Remove hard-bounce addresses immediately. These are permanent failures that will never succeed.
- Use double opt-in for new subscribers to confirm valid addresses.
- Sunset inactive subscribers who have not opened or clicked in 6 to 12 months.
- Never use purchased or scraped email lists.

### 4. Warm up new domains and IPs {#improve-warmup}

New domains and IP addresses have no sending history. Mailbox providers treat unknown senders with caution. Ramp up sending volume gradually over several weeks:

- Start with your most engaged recipients (people who regularly open and click).
- Increase daily volume by 20-50% per week.
- Monitor bounce rates and spam complaints at each stage. Pause if either spikes.
- Ensure authentication is fully configured before sending the first message.

### 5. Fix content and sending patterns {#improve-content}

- Include a visible, functional unsubscribe link in every marketing email. Google and Yahoo require one-click unsubscribe for bulk senders.
- Avoid sudden volume spikes. If you need to send a large campaign, spread it over multiple days.
- Use a consistent `From:` name and address so recipients recognize your email.
- Test emails with a tool like [Mail Tester](https://www.mail-tester.com/) to catch content-level issues before sending.

For detailed, step-by-step implementation, see [Improving Email Deliverability](/articles/improving-email-deliverability/).

## How to measure email deliverability {#measure}

### Monitor authentication results {#measure-authentication}

Publish a [DMARC record](/articles/dmarc-record/) with a `rua=` reporting address. Mailbox providers will send daily aggregate reports showing which IPs sent email as your domain and whether they passed SPF and DKIM.

Raw DMARC reports are XML files. Services like [dmarcian](https://dmarcian.com/) and [Postmark DMARC Digests](https://dmarc.postmarkapp.com/) parse them into readable dashboards.

### Track reputation over time {#measure-reputation}

Check Google Postmaster Tools weekly for:

- **Domain reputation** trending (High, Medium, Low, Bad)
- **Spam rate** (keep below 0.1%)
- **Authentication pass rates** for SPF, DKIM, and DMARC

### Watch bounce and complaint rates {#measure-bounces}

Your email service provider's dashboard shows bounce rates and complaint rates. A sudden increase in hard bounces usually means invalid addresses entered your list. A spike in complaints often follows a content or frequency change.

For a full monitoring routine with schedules and tool recommendations, see [Monitoring Email Deliverability](/articles/monitoring-email-deliverability/).

## Common email deliverability problems {#problems}

### Why are my emails going to spam even though authentication passes? {#problem-spam-despite-auth}

Authentication is necessary but not sufficient. If SPF, DKIM, and DMARC all pass but email still lands in spam, check:

1. Domain and IP reputation with [Google Postmaster Tools](https://postmaster.google.com/) and [MXToolbox](https://mxtoolbox.com/blacklists.aspx).
2. Spam complaint rate. Anything above 0.1% is problematic.
3. Email content for spam triggers (excessive images, misleading subjects, missing unsubscribe link).
4. Whether your DMARC policy is still `p=none`. Some providers treat unenforced DMARC as a weaker trust signal.

### Why did my deliverability drop suddenly? {#problem-sudden-drop}

Common causes of a sudden drop:

- A sending service was removed from or never added to your SPF record.
- A DKIM key was rotated by your email provider but the DNS record was not updated.
- Your domain or IP was added to a blacklist after a spam complaint spike.
- A large send to a stale list caused a bounce rate spike.

### Does email forwarding affect deliverability? {#problem-forwarding}

Yes. When email is forwarded, the forwarding server's IP replaces the original sender's IP. This causes SPF to fail because the forwarding server is not in the original sender's SPF record. DKIM signatures survive forwarding (they are part of the message itself), which is one reason DKIM is essential alongside SPF.

For forwarding-specific issues, see [Email Forwarding Not Working](/articles/email-forwarding-not-working/).

### Does DNS affect email deliverability? {#problem-dns}

DNS is where email deliverability starts. SPF, DKIM, and DMARC are all DNS TXT records. MX records route email to the correct servers. Incorrect, missing, or slow-to-propagate DNS records are behind a large share of deliverability problems. DNSimple manages these records alongside everything else your domain needs.

## Frequently asked questions {#faq}

### What is the difference between email delivery and email deliverability? {#faq-delivery-vs}

Email delivery is whether the message reached the recipient's mail server (not bounced). Email deliverability is whether it reached the inbox rather than the spam folder. You can have high delivery rates and poor deliverability at the same time.

### How long does it take to fix deliverability problems? {#faq-how-long}

DNS authentication changes (SPF, DKIM, DMARC) take effect within minutes to hours after the records propagate. Reputation recovery takes longer - typically two to four weeks of consistent, clean sending after fixing the underlying issue. Severe reputation damage or blacklisting can take longer.

### Do I need a dedicated IP address for good deliverability? {#faq-dedicated-ip}

Not necessarily. Shared IPs from reputable email service providers (Google Workspace, Postmark, SendGrid) carry the provider's collective reputation, which is usually good. Dedicated IPs make sense for high-volume senders (100,000+ emails per month) who want full control over their IP reputation, but they require proper warm-up.

### Can email content alone cause deliverability problems? {#faq-content}

Content is a factor, but it is rarely the primary cause. Authentication failures and poor sender reputation have a much larger impact than content. Fix authentication and reputation first, then address content triggers if problems persist.

### Does DNSimple send email? {#faq-dnsimple}

DNSimple does not provide email hosting or send email on your behalf. DNSimple manages the DNS records (SPF, DKIM, DMARC, MX) that email authentication and routing depend on. Your email service provider handles the actual sending.

## Have more questions?

If you have any questions about email deliverability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
