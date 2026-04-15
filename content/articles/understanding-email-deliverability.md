---
title: Understanding Email Deliverability
excerpt: What email deliverability is, why it matters, and the factors that affect whether your emails reach recipients' inboxes.
meta: Understand email deliverability and the factors that determine whether your emails successfully reach recipients' inboxes or end up in spam folders.
categories:
- Emails
---

# Understanding Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Email deliverability refers to the ability of emails to successfully reach recipients' inboxes rather than being filtered as spam, rejected, or lost in transit. Understanding email deliverability is crucial for anyone who sends email, whether through email hosting services, transactional email services, or marketing campaigns.

## What is email deliverability? {#what-is}

Email deliverability is the measure of how successfully emails are delivered to recipients' inboxes. It encompasses several factors:

- **Delivery rate:** The percentage of emails that successfully reach the recipient's mail server
- **Inbox placement:** Whether emails land in the inbox, spam folder, or are filtered out
- **Reputation:** Your domain's and IP address's reputation with email providers
- **Authentication:** How well your emails pass authentication checks (SPF, DKIM, DMARC)

> [!NOTE]
> **Deliverability vs. delivery:** Email delivery refers to whether an email reaches the recipient's mail server. Email deliverability refers to whether it reaches the inbox (not spam) and is a broader concept that includes reputation, authentication, and content factors.

## Why email deliverability matters {#why}

Poor email deliverability can have significant consequences:

- **Missed communications:** Important emails may not reach recipients
- **Reduced engagement:** Emails in spam folders are less likely to be read
- **Damaged reputation:** Poor deliverability can harm your domain's reputation
- **Wasted resources:** Time and money spent on emails that never reach recipients
- **Business impact:** Lost sales, missed opportunities, and damaged relationships

## Factors affecting email deliverability {#factors}

### Domain and IP reputation {#reputation}

Your domain's and IP address's reputation with email providers significantly impacts deliverability:

- **Sender reputation:** Email providers track how recipients interact with emails from your domain
- **IP reputation:** The IP address used to send emails also has a reputation
- **Historical performance:** Past sending behavior affects current deliverability
- **Blacklists:** Being on email blacklists can severely impact deliverability

### Email authentication {#authentication}

Proper email authentication is essential for good deliverability:

- **SPF (Sender Policy Framework):** Verifies that emails are sent from authorized servers
- **DKIM (DomainKeys Identified Mail):** Provides cryptographic authentication
- **DMARC (Domain-based Message Authentication, Reporting & Conformance):** Provides policy and reporting for SPF and DKIM

> [!NOTE]
> For more information about email authentication, see [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/).

### Content and formatting {#content}

Email content and formatting can affect deliverability:

- **Spam triggers:** Certain words, phrases, or formatting can trigger spam filters
- **HTML quality:** Poorly formatted HTML can reduce deliverability
- **Link quality:** Links to suspicious or blacklisted domains can hurt deliverability
- **Image-to-text ratio:** Emails with only images and no text may be flagged as spam
- **Attachments:** Large or suspicious attachments can reduce deliverability

### Recipient engagement {#engagement}

How recipients interact with your emails affects deliverability:

- **Open rates:** Higher open rates improve deliverability
- **Click rates:** Recipients clicking links indicates engagement
- **Spam complaints:** High spam complaint rates hurt deliverability
- **Bounce rates:** High bounce rates (especially hard bounces) reduce deliverability
- **Unsubscribe rates:** Very high unsubscribe rates can signal poor list quality

### List quality {#list-quality}

The quality of your email list impacts deliverability:

- **Valid addresses:** Lists with many invalid addresses hurt deliverability
- **Opt-in status:** Sending to recipients who did not opt in can damage reputation
- **List hygiene:** Regularly cleaning your list improves deliverability
- **Segmentation:** Sending relevant content to segmented lists improves engagement

### Sending practices {#sending}

How you send emails affects deliverability:

- **Sending volume:** Sudden spikes in volume can trigger spam filters
- **Sending frequency:** Too frequent sending can reduce engagement
- **Sending times:** Sending at appropriate times improves engagement
- **Warm-up:** Gradually increasing sending volume helps build reputation

## Email deliverability metrics {#metrics}

Key metrics to monitor for email deliverability:

### Delivery rate {#delivery-rate}

The percentage of emails that successfully reach the recipient's mail server (not bounced).

**Good:** 95% or higher
**Needs improvement:** Below 95%

### Inbox placement rate {#inbox-placement}

The percentage of delivered emails that reach the inbox (not spam folder).

**Good:** 85% or higher
**Needs improvement:** Below 85%

### Bounce rate {#bounce-rate}

The percentage of emails that bounce (could not be delivered).

**Good:** Less than 2%
**Needs improvement:** 2% or higher

### Spam complaint rate {#spam-complaints}

The percentage of recipients who mark emails as spam.

**Good:** Less than 0.1%
**Needs improvement:** 0.1% or higher

### Open rate {#open-rate}

The percentage of recipients who open emails.

**Varies by industry:** Typically 15-25% for marketing emails

### Click rate {#click-rate}

The percentage of recipients who click links in emails.

**Varies by industry:** Typically 2-5% for marketing emails

## Common deliverability issues {#issues}

### Emails going to spam

**Causes:**
- Poor sender reputation
- Missing or incorrect email authentication
- Spam-triggering content
- High spam complaint rates
- Being on blacklists

**Solutions:**
- Improve email authentication (SPF, DKIM, DMARC)
- Clean your email list
- Improve email content
- Monitor and improve sender reputation
- Check for blacklist status

### High bounce rates

**Causes:**
- Invalid email addresses
- Poor list hygiene
- Domain or server issues
- Recipient mailboxes full

**Solutions:**
- Regularly clean your email list
- Remove hard bounces immediately
- Verify email addresses before sending
- Monitor bounce rates and investigate issues

### Low engagement

**Causes:**
- Irrelevant content
- Poor subject lines
- Sending too frequently
- Poor list segmentation

**Solutions:**
- Improve email content and relevance
- Test and optimize subject lines
- Adjust sending frequency
- Better segment your email list

## Improving email deliverability {#improving}

To improve email deliverability:

1. **Set up email authentication:** Ensure SPF, DKIM, and DMARC are properly configured
2. **Monitor your reputation:** Regularly check your domain and IP reputation
3. **Maintain list quality:** Regularly clean your email list and remove invalid addresses
4. **Follow best practices:** Use proper sending practices and avoid spam triggers
5. **Monitor metrics:** Track deliverability metrics and address issues promptly
6. **Test regularly:** Send test emails and check deliverability

> [!NOTE]
> For detailed steps on improving email deliverability, see [Improving Email Deliverability](/articles/improving-email-deliverability/).

## Email deliverability and DNSimple {#dnsimple}

DNSimple is not a mailbox provider and does not send bulk or transactional mail for you, but DNSimple does help email reachability and authentication by managing DNS. That matters for deliverability because mailbox providers evaluate DNS-backed signals such as SPF, DKIM, and DMARC.

- **DNS management:** Proper DNS configuration is essential for email authentication
- **SPF records:** We help you configure SPF records correctly
- **DKIM records:** We support DKIM record configuration
- **DMARC records:** We help you set up DMARC records
- **MX records:** Proper MX record configuration ensures email delivery

> [!NOTE]
> For information about configuring email authentication records in DNSimple, see:
> - [Setting Up SPF Records](/articles/setting-up-spf/)
> - [Setting Up DKIM](/articles/set-up-dkim/)
> - [Setting Up DMARC](/articles/set-up-dmarc/)

## Related topics

- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Step-by-step guide to improving deliverability
- [Monitoring Email Deliverability](/articles/monitoring-email-deliverability/) - Tools and techniques for monitoring
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Guide to email authentication issues
- [SPF Records](/articles/spf-record/) - Information about SPF records
- [DKIM Records](/articles/dkim-record/) - Information about DKIM records
- [DMARC Records](/articles/dmarc-record/) - Information about DMARC records

## Have more questions?

If you have additional questions or need any assistance with email deliverability, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
