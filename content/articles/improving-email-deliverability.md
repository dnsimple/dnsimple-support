---
title: Improve Email Deliverability
excerpt: How to improve email deliverability by configuring DNS-based authentication and managing sender reputation.
meta: Improve email deliverability with SPF, DKIM, and DMARC configuration, sender reputation management, list hygiene, domain warm-up, and content fixes.
categories:
- Emails
---

# Improve Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Most deliverability problems trace back to missing or misconfigured DNS records and poor sender reputation. This guide walks through the changes you can make in DNSimple (and alongside your email provider) to improve inbox placement.

For background on what deliverability is and why it matters, see [Email Deliverability](/articles/understanding-email-deliverability/).

## Before starting

You will need:

- Access to your domain's DNS records in DNSimple (or the ability to request changes from whoever manages DNS)
- Access to your email service provider's settings to retrieve SPF includes, DKIM keys, and DMARC preferences
- A list of every service that sends email on your domain's behalf (corporate email, transactional, marketing, etc.)

## Set up email authentication {#authentication}

Proper [email authentication](/articles/email-authentication/) is the single most impactful thing you can do for deliverability. Mailbox providers use SPF, DKIM, and DMARC to decide whether incoming mail is legitimate.

### Configure SPF {#spf}

An [SPF record](/articles/spf-record/) tells receiving servers which IPs and services are authorized to send email for your domain.

<div class="section-steps" markdown="1">
##### Add or update your SPF record

1. Gather the SPF `include:` values from every service that sends email for your domain (e.g., `_spf.google.com` for Google Workspace, `spf.mtasv.net` for Postmark).
1. In DNSimple, open the [Record Editor](/articles/record-editor/) for your domain.
1. Add a TXT record (or edit the existing SPF record) with all includes combined into a single record. Example:
   ```
   v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
   ```
1. Verify the record is published: see [Verify SPF](/articles/verifying-spf/).
</div>

> [!WARNING]
> SPF allows a maximum of 10 DNS lookups. Each `include:` counts as at least one. Exceeding this limit causes SPF to fail entirely. Use `ip4:` or `ip6:` for direct IPs when possible, and remove services you no longer use.

For full setup details, see [Set Up SPF Records](/articles/setting-up-spf/).

### Configure DKIM {#dkim}

A [DKIM record](/articles/dkim-record/) publishes a public key that receiving servers use to verify the cryptographic signature your email provider attaches to each outgoing message.

<div class="section-steps" markdown="1">
##### Add a DKIM record

1. In your email provider's dashboard, locate the DKIM settings and copy the selector name and public key value.
1. In DNSimple, open the [Record Editor](/articles/record-editor/) for your domain.
1. Add a TXT record at `selector._domainkey.yourdomain.com` with the public key value from your provider.
1. Verify the record is published: see [Verify DKIM](/articles/verify-dkim/).
</div>

Repeat this for each service that sends email on your behalf. Each service typically uses its own selector. See [Manage Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/) if you have more than one.

For full setup details, see [Set Up DKIM](/articles/set-up-dkim/).

### Configure DMARC {#dmarc}

A [DMARC record](/articles/dmarc-record/) tells receiving servers what to do when SPF or DKIM checks fail, and where to send authentication reports.

<div class="section-steps" markdown="1">
##### Add a DMARC record

1. In DNSimple, open the [Record Editor](/articles/record-editor/) for your domain.
1. Add a TXT record at `_dmarc.yourdomain.com`.
1. Start with a monitoring-only policy: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`
1. Review the aggregate reports you receive over the following weeks. Fix any authentication failures before tightening the policy.
1. Gradually move to `p=quarantine`, then `p=reject`. See [Implement a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).
1. Verify the record is published: see [Verify DMARC](/articles/verifying-dmarc/).
</div>

> [!TIP]
> DMARC aggregate reports are XML files that are difficult to read raw. Services like [dmarcian](https://dmarcian.com/) and [Postmark DMARC](https://dmarc.postmarkapp.com/) parse them into readable dashboards for free.

For alignment requirements between SPF, DKIM, and DMARC, see [SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/).

## Manage sender reputation {#reputation}

Even with correct authentication, poor reputation can push your email to spam. Reputation is tied to your domain and sending IP.

### Check your current reputation {#check-reputation}

Use these free tools to assess where you stand:

- [Google Postmaster Tools](https://postmaster.google.com/) - Gmail-specific reputation, spam rate, and authentication data. Requires domain verification.
- [Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) - Outlook/Hotmail IP reputation and complaint data.
- [Sender Score](https://www.senderscore.org/) - General reputation score (0-100) based on sending history.

### Check blacklists {#blacklists}

If your domain or sending IP is on a blacklist, deliverability drops significantly:

- Use [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx) to scan multiple blacklists at once.
- If listed, follow the delisting process provided by the blacklist operator. Most require you to fix the underlying issue (e.g., compromised account, spam complaints) and submit a removal request.

### Reduce bounce rates {#bounces}

High [bounce rates](/articles/understanding-email-bounces/) are one of the fastest ways to damage sender reputation. Keep your overall bounce rate below 2% and hard bounces below 0.5%.

- Investigate persistent soft bounces (mailbox full, server temporarily unavailable). If an address soft-bounces repeatedly, treat it as a hard bounce.
- See [Clean your email list](#list-hygiene) for practices that prevent bounces from accumulating.

### Reduce spam complaints {#complaints}

Mailbox providers weigh spam complaints heavily. Keep your complaint rate below 0.1%.

- Only send to recipients who opted in.
- Make the unsubscribe link easy to find and honor it immediately.
- If you see a spike in complaints after a specific campaign, review what changed.

## Clean your email list {#list-hygiene}

Sending to invalid or unengaged addresses inflates bounce rates and spam complaints, which directly damage sender reputation.

- **Use double opt-in** for new subscribers. This confirms valid addresses and reduces the chance of spam trap hits.
- **Remove hard-bounce addresses immediately.** These are permanent failures that will never succeed. Most email service providers do this automatically.
- **Sunset inactive subscribers.** If a recipient has not opened or clicked in 6 to 12 months, remove them or move them to a re-engagement campaign.
- **Never use purchased or scraped email lists.** These contain invalid addresses and spam traps that will damage your reputation quickly.

## Warm up new domains and IPs {#warm-up}

New domains and IP addresses have no sending history. Mailbox providers treat unknown senders with caution and are more likely to filter their email as spam.

Ramp up sending volume gradually:

- Start with your most engaged recipients (people who regularly open and click).
- Increase daily volume by 20-50% per week.
- Monitor bounce rates and spam complaints at each stage. Pause if either spikes.
- Ensure [email authentication](/articles/email-authentication/) is fully configured before sending the first message.

A warm-up period typically takes two to four weeks for a new domain and four to eight weeks for a new dedicated IP.

## Fix content and sending patterns {#content}

Content is less impactful than authentication and reputation, but can still cause spam filtering.

- **Include a visible unsubscribe link** in every marketing email. Google and Yahoo require one-click unsubscribe for bulk senders.
- **Avoid sudden volume spikes.** If you need to send a large campaign, spread it over multiple days.
- **Use a consistent `From:` name and address** so recipients recognize your email.
- **Test before sending.** Tools like [Mail Tester](https://www.mail-tester.com/) check your message against common spam filters and flag content-level issues.

## Troubleshoot common problems {#troubleshooting}

### Emails going to spam despite authentication passing

If SPF, DKIM, and DMARC all pass but email still lands in spam:

1. Check your domain and IP reputation with the tools listed in [Check your current reputation](#check-reputation).
2. Check blacklist status with [MXToolbox](https://mxtoolbox.com/blacklists.aspx).
3. Review email content for spam triggers (excessive images, misleading subject lines, URL shorteners).
4. Verify your DMARC policy is not still set to `p=none` - some providers treat unenforced DMARC as a weaker signal.

### Authentication failing intermittently

If authentication passes for some messages but fails for others:

1. Verify all sending services are included in your SPF record. A forgotten service (e.g., a CRM that sends on your behalf) causes SPF failures for those messages.
2. Check that DKIM is configured for each sending service, not just your primary email provider.
3. Review DMARC aggregate reports to identify which source IPs or services are failing. See [Monitor Email Deliverability](/articles/monitoring-email-deliverability/) for guidance on interpreting reports.

### High bounce rates on a new domain

See [Warm up new domains and IPs](#warm-up). New domains have no sending history, so mailbox providers are more likely to filter or reject messages. Ramp volume gradually and start with engaged recipients.

## Have more questions?

If you have additional questions or need assistance with improving email deliverability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
