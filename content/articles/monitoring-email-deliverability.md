---
title: Monitoring Email Deliverability
excerpt: How to monitor email authentication, sender reputation, and deliverability using free tools and DMARC reports.
meta: Guide to monitoring email deliverability by tracking DMARC reports, sender reputation, blacklist status, and authentication pass rates with free tools.
categories:
- Emails
---

# Monitoring Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Deliverability problems are easier to fix when you catch them early. Regular monitoring of authentication status, sender reputation, and bounce rates helps you identify issues before they damage your domain's reputation with mailbox providers.

For background on the factors that affect deliverability, see [Understanding Email Deliverability](/articles/understanding-email-deliverability/).

## Monitor authentication with DMARC reports {#dmarc-reports}

DMARC aggregate reports are the most direct way to see whether your email is passing authentication checks. When you publish a [DMARC record](/articles/dmarc-record/) with a `rua=` tag, mailbox providers send daily XML reports to that address.

### What aggregate reports tell you {#aggregate-reports}

Each report covers a specific time window (usually 24 hours) and includes:

- Which IP addresses sent email using your domain
- Whether each message passed or failed SPF and DKIM
- What DMARC policy was applied (none, quarantine, reject)
- The volume of messages from each source

This data helps you spot unauthorized senders, identify services missing from your [SPF record](/articles/spf-record/), and find [DKIM](/articles/dkim-record/) misconfigurations.

### Parse reports with a dashboard tool {#dmarc-tools}

Raw DMARC reports are XML files that are difficult to read manually. Use a parsing service to turn them into readable dashboards:

- [dmarcian](https://dmarcian.com/) - Free tier available. Shows authentication results, source IPs, and policy compliance over time.
- [Postmark DMARC](https://dmarc.postmarkapp.com/) - Free weekly digests. Good for low-volume domains that do not need real-time data.
- [Google Postmaster Tools](https://postmaster.google.com/) - Does not parse DMARC XML directly, but shows Gmail-specific authentication pass rates and spam rates for verified domains.

### What to look for {#dmarc-red-flags}

- **Unexpected source IPs** - These may indicate a service you forgot to authorize, or someone spoofing your domain. Cross-reference with your SPF record.
- **SPF failures from legitimate services** - A service sending on your behalf is missing from your SPF `include:` list. Add it. See [Set Up SPF Records](/articles/setting-up-spf/).
- **DKIM failures** - The sending service may not have DKIM enabled, or the DNS record may be missing or incorrect. See [Set Up DKIM](/articles/set-up-dkim/).
- **High failure rates after a policy change** - If you recently moved from `p=none` to `p=quarantine` or `p=reject`, failures you previously ignored now affect delivery. Review and fix before tightening further. See [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).

## Monitor sender reputation {#reputation}

Mailbox providers assign reputation scores to your domain and sending IPs. A declining reputation leads to more email landing in spam, even when authentication passes.

### Gmail: Google Postmaster Tools {#google-postmaster}

[Google Postmaster Tools](https://postmaster.google.com/) provides Gmail-specific data after you verify domain ownership:

- **Domain reputation** - Rated High, Medium, Low, or Bad. A drop from High to Medium warrants investigation.
- **Spam rate** - The percentage of your email that Gmail users marked as spam. Keep this below 0.1%.
- **Authentication** - SPF, DKIM, and DMARC pass rates for mail sent to Gmail.

Check weekly. If spam rate spikes or reputation drops, review recent sending changes and authentication status.

### Outlook: Microsoft SNDS {#microsoft-snds}

[Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) (Smart Network Data Services) provides Outlook and Hotmail data:

- IP reputation (green/yellow/red)
- Complaint rates
- Spam trap hits

Register your sending IPs to access the data.

### General: Sender Score {#sender-score}

[Sender Score](https://www.senderscore.org/) provides a 0-100 reputation score based on sending history across multiple mailbox providers. Scores below 70 indicate reputation problems.

## Monitor blacklists {#blacklists}

Blacklists are maintained by organizations that track IPs and domains associated with spam. Being listed can cause widespread delivery failures.

### Check your status {#check-blacklists}

[MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx) scans your domain or IP against dozens of blacklists simultaneously. Run this check:

- Immediately if you notice a sudden drop in delivery rates
- Monthly as a routine check
- After resolving any spam complaint or abuse incident

### If you are listed {#delisting}

1. Identify the root cause (compromised account, spam complaints, open relay, etc.) and fix it.
2. Visit the blacklist operator's website and follow their delisting process. Most require a removal request after the underlying issue is resolved.
3. Monitor after delisting to confirm the issue does not recur.

Major blacklists include [Spamhaus](https://www.spamhaus.org/lookup/), [Barracuda](https://www.barracudacentral.org/), and [SURBL](https://www.surbl.org/).

## Monitor bounce rates {#bounces}

High bounce rates damage sender reputation quickly. Your email service provider's dashboard is the primary place to track these.

### Thresholds to watch {#thresholds}

| Metric | Healthy | Investigate |
|---|---|---|
| Total bounce rate | Below 2% | 2% or higher |
| Hard bounce rate | Below 0.5% | 0.5% or higher |
| Spam complaint rate | Below 0.1% | 0.1% or higher |

A sudden increase in hard bounces usually means a batch of invalid addresses entered your list. A gradual increase in soft bounces may indicate recipient server issues or sending volume problems.

For more on bounce types and handling, see [Understanding Email Bounces](/articles/understanding-email-bounces/).

## Set up a monitoring routine {#routine}

Deliverability monitoring does not need to be time-consuming if you check the right things on a regular schedule:

**Weekly:**
- Review DMARC report summaries in your parsing tool
- Check Google Postmaster Tools for spam rate and reputation trends

**Monthly:**
- Run a blacklist check on your domain and primary sending IPs
- Review bounce rate trends in your email service provider's dashboard
- Verify authentication records have not changed unexpectedly (e.g., after a DNS migration or provider change)

**After any DNS or provider change:**
- Verify SPF, DKIM, and DMARC records are still correct. See [Verify SPF](/articles/verifying-spf/), [Verify DKIM](/articles/verify-dkim/), and [Verify DMARC](/articles/verifying-dmarc/).
- Send test emails to Gmail, Outlook, and Yahoo to confirm inbox placement
- Monitor DMARC reports closely for the following week

## Have more questions?

If you have additional questions or need assistance with monitoring email deliverability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
