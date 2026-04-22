---
title: Email Bounces
excerpt: About email bounces, the different types of bounces, and what causes them.
meta: Understand hard bounces, soft bounces, and DSN codes. Identify causes of email delivery failures and reduce bounce rates effectively.
categories:
- Emails
---

# Email Bounces

### Table of Contents {#toc}

* TOC
{:toc}

---

An email bounce (also called a bounce message or non-delivery report) is a notification that an email could not be delivered to its intended recipient. Bounces are returned to the sender (or the Return-Path address) by the receiving mail server.

## What is an email bounce? {#what-is}

An email bounce occurs when an email cannot be delivered to its recipient. The receiving mail server sends a bounce message back to the sender explaining why delivery failed.

## Types of email bounces {#types}

### Hard bounces

Hard bounces are permanent delivery failures. These indicate that the email will never be delivered to the recipient.

**Common causes:**
- **Invalid email address:** The email address does not exist
- **Domain does not resolve or does not exist:** The recipient's domain is not registered or has no valid DNS records.
- **Blocked domain:** The recipient's domain blocks all emails
- **Recipient mailbox does not exist:** The mailbox was deleted or never existed

**Characteristics:**
- Permanent failure
- Should be removed from email list immediately
- High hard bounce rates can damage sender reputation
- Cannot be retried (will always fail)

**Example bounce messages:**
- "550 5.1.1 User unknown"
- "550 5.1.2 Host unknown"
- "550 5.4.1 Recipient address rejected"

### Soft bounces

Soft bounces are temporary delivery failures. These indicate that the email might be deliverable in the future.

**Common causes:**
- **Mailbox full:** The recipient's mailbox is full
- **Server temporarily unavailable:** The recipient's mail server is down or busy
- **Message too large:** The email exceeds size limits
- **Temporary block:** The recipient's server temporarily blocked the email
- **Greylisting:** The server is using greylisting (delayed delivery)

**Characteristics:**
- Temporary failure
- May be retried by the sending server
- Should be monitored but not immediately removed from list
- Can become hard bounces if persistent

**Example bounce messages:**
- "452 4.2.2 Mailbox full"
- "451 4.3.0 Temporary server error"
- "552 5.2.2 Mailbox full"

## Bounce categories {#categories}

### Delivery status notification (DSN) codes

Bounces include DSN codes that indicate the type of failure:

**5.1.x - Addressing errors:**
- 5.1.1: Bad destination mailbox address
- 5.1.2: Bad destination system address
- 5.1.3: Bad destination mailbox address syntax

**5.2.x - Mailbox errors:**
- 5.2.1: Mailbox disabled
- 5.2.2: Mailbox full
- 5.2.3: Message length exceeds administrative limit

**5.3.x - Mail system errors:**
- 5.3.1: Mail system full
- 5.3.2: System not accepting network messages
- 5.3.3: Mail system not capable of features

**5.4.x - Network errors:**
- 5.4.1: Host not found
- 5.4.2: Bad connection
- 5.4.3: Routing server failure

**5.5.x - Protocol errors:**
- 5.5.1: Invalid command
- 5.5.2: Syntax error
- 5.5.3: Too many recipients

**5.7.x - Security/Policy errors:**
- 5.7.1: Delivery not authorized
- 5.7.2: Mailing list expansion prohibited
- 5.7.3: Security conversion required

> [!NOTE]
> The first digit (5) indicates permanent failure, while (4) indicates temporary failure. The second digit indicates the category of failure.

## Understanding bounce messages {#bounce-messages}

### Bounce message structure

Bounce messages typically include:

1. **Original message:** The original email that could not be delivered
2. **Bounce reason:** Explanation of why delivery failed
3. **DSN or SMTP status:** Status code indicating the type of failure
4. **Diagnostic information:** Additional details about the failure

### Reading bounce messages

**Subject line:** Often contains "Delivery Status Notification" or "Undelivered Mail"

**Body:** Contains:
- The reason for the bounce
- DSN codes
- The original email (or headers)
- Diagnostic information

**Headers:** May contain additional information about the bounce

## Common bounce scenarios {#common-scenarios}

### Invalid email address

**Scenario:** Email address does not exist

**Bounce message:** "550 5.1.1 User unknown"

**Action:** Remove from email list (hard bounce)

### Mailbox full

**Scenario:** Recipient's mailbox is full

**Bounce message:** "552 5.2.2 Mailbox full"

**Action:** Retry later (soft bounce), remove if persistent

### Domain does not exist

**Scenario:** Recipient's domain does not exist

**Bounce message:** "550 5.1.2 Host unknown"

**Action:** Remove from email list (hard bounce)

### Server temporarily unavailable

**Scenario:** Recipient's mail server is down

**Bounce message:** "451 4.3.0 Temporary server error"

**Action:** Retry later (soft bounce)

### Message rejected by recipient

**Scenario:** Recipient's server rejected the email

**Bounce message:** "550 5.7.1 Delivery not authorized"

**Action:** Investigate why, may need to remove from list

## Impact of bounces on deliverability {#impact}

### High bounce rates

High bounce rates can:

- **Damage sender reputation:** High bounce rates indicate poor list quality
- **Trigger spam filters:** ISPs may flag high bounce rates as spam
- **Get you blacklisted:** Very high bounce rates can result in blacklisting
- **Reduce deliverability:** Poor reputation reduces inbox placement

### Best practices for bounce rates

- **Hard bounces:** Keep below 0.5%
- **Soft bounces:** Keep below 2%
- **Total bounce rate:** Keep below 2%

## Handling bounces {#handling}

### For hard bounces

1. **Remove immediately:** Remove hard bounces from your email list immediately
2. **Do not retry:** Do not attempt to resend to hard bounce addresses
3. **Monitor rate:** Keep track of hard bounce rates
4. **Investigate:** If hard bounce rate is high, investigate list quality

### For soft bounces

1. **Retry:** Allow your email service to retry soft bounces
2. **Monitor:** Monitor soft bounces to see if they become hard bounces
3. **Remove if persistent:** Remove addresses that consistently soft bounce
4. **Investigate:** If many soft bounces, investigate recipient servers

### Best practices

- Remove hard bounces immediately
- Monitor bounce rates regularly
- Use double opt-in to reduce bounces
- Validate email addresses before sending
- Clean your email list regularly
- Monitor bounce trends

## Bounces and email forwarding {#forwarding}

When using email forwarding:

### Bounces from forwarded emails

**Scenario:** An email is forwarded, but the final destination bounces

**What happens:**
- The bounce may come back to the forwarding service
- The bounce may come back to the original sender
- Behavior depends on the forwarding configuration

**Considerations:**
- Bounces cannot be forwarded to the original sender in most cases
- The forwarding service may handle bounces
- Check your email forwarding service's bounce handling

> [!NOTE]
> For more information about handling bounces with email forwarding, see [Email Forwarding and Bounced Emails](/articles/email-forwarding-bounces/).

## Reducing bounces {#reducing}

### List hygiene

- **Validate addresses:** Use email validation services
- **Double opt-in:** Require confirmation for new subscribers
- **Regular cleaning:** Remove inactive addresses periodically
- **Monitor bounces:** Track and remove bounces promptly

### Email practices

- **Respect size limits:** Keep emails under size limits
- **Follow best practices:** Follow email sending best practices
- **Monitor reputation:** Keep sender reputation high
- **Test before sending:** Test emails before sending to large lists

## Monitoring bounces {#monitoring}

### Track bounce rates

- **Hard bounce rate:** Percentage of hard bounces
- **Soft bounce rate:** Percentage of soft bounces
- **Total bounce rate:** Combined bounce rate
- **Bounce trends:** Track changes over time

### Set up alerts

- **High bounce rate alerts:** Get notified when bounce rates exceed thresholds
- **Hard bounce alerts:** Get notified of hard bounces immediately
- **Trend alerts:** Get notified of unusual bounce patterns

## Have more questions?

If you have additional questions or need any assistance with understanding email bounces, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
