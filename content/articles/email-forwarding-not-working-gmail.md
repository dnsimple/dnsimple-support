---
title: Email Forwarding Not Working with Gmail
excerpt: Diagnose and fix email forwarding problems with Gmail, including spam filtering, missing test emails, and delayed delivery.
meta: Fix email forwarding issues with Gmail, including forwarded emails going to spam, test emails not appearing, security warnings, and delayed delivery.
categories:
- Emails
---

# Email Forwarding Not Working with Gmail

### Table of Contents {#toc}

* TOC
{:toc}

---

Gmail handles forwarded email differently from most providers. If forwarded messages are not arriving, are going to spam, or are triggering security warnings, the sections below cover the most common causes and fixes.

For issues with other email providers, see [Email Forwarding Not Working with Outlook, Yahoo, and Other Providers](/articles/email-forwarding-not-working-outlook-yahoo/). For general delivery issues, see [Email Forwarding Not Working](/articles/email-forwarding-not-working/).

## Test emails not appearing {#test-emails-not-appearing}

When testing email forwarding, use a completely separate email account from the Gmail account that receives the forwarded messages.

> [!WARNING]
> Google silently discards messages it determines were sent and received by the same account. If you send a test email from `you@gmail.com` to `hello@yourdomain.com`, and that address forwards back to `you@gmail.com`, Google drops the message without any bounce or error. The email will not appear in your inbox, spam folder, or anywhere else.

To test correctly:

1. Use a different email account (another Gmail account, Outlook, Yahoo, or any other provider) to send the test message.
1. Send to the forwarded address at your domain.
1. Check the Gmail inbox of the destination account for the forwarded message.

## Forwarded emails going to spam {#going-to-spam}

Gmail may route forwarded messages to the spam folder if the original sender has a poor reputation or if email authentication checks fail during forwarding.

**Common causes:**

- The original sender does not have [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), or [DMARC](/articles/dmarc-record/) configured.
- SPF fails because the forwarding server IP is not in the original sender's SPF record. This is expected behavior with email forwarding.
- The message content triggers Gmail spam filters.

**What to do:**

1. Check your Gmail spam folder and mark legitimate messages as "Not spam". This trains Gmail to accept future messages from the same sender.
1. Add the forwarded address or the original sender's domain to your Gmail contacts. This can improve delivery for future messages.
1. Create a Gmail filter to prevent specific forwarded messages from going to spam: go to **Settings** > **Filters and Blocked Addresses** > **Create a new filter**, match by sender or the forwarded address, and select **Never send it to Spam**.

> [!NOTE]
> SPF failures on forwarded mail are common and not something you can fix from the DNSimple side. The forwarding server relays the message on behalf of the original sender, so the forwarding server's IP will not be listed in the original sender's SPF record. DKIM signatures, when present, survive forwarding and help Gmail identify legitimate messages.

## Security warnings on forwarded messages {#security-warnings}

Gmail may display a warning banner like "This message seems dangerous" or "Be careful with this message" on forwarded emails. This typically happens when:

- The original message fails authentication checks (SPF and DKIM).
- The message comes from a sender Gmail does not recognize.
- The content resembles known phishing patterns.

If you trust the sender and the message content, you can disregard the warning. Marking the message as "Not spam" or "Looks safe" helps Gmail learn your preferences.

## Delayed delivery {#delayed-delivery}

Forwarded messages may take longer to arrive in Gmail than direct messages. Possible causes:

- **Greylisting:** Gmail may temporarily reject messages from unfamiliar senders and accept them on a subsequent delivery attempt. This can add a delay of several minutes.
- **DNS propagation:** If you recently enabled email forwarding or changed MX records, allow up to 24 hours for DNS changes to propagate. Verify your MX records are correct using [Query MX Records](/articles/query-mx-records/).
- **Gmail processing:** Gmail may hold messages briefly for additional spam and security analysis.

If messages are consistently delayed by more than a few hours, [contact support](https://dnsimple.com/feedback) with the details.

## Have more questions?

If you have additional questions or need assistance with email forwarding to Gmail, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
