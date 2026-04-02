---
title: Troubleshooting Email Forwarding with Gmail
excerpt: How to diagnose and resolve common email forwarding issues when Gmail is your destination.
meta: Troubleshoot email forwarding issues with Gmail, including missing emails, spam filtering, and self-send suppression.
categories:
- Emails
---

# Troubleshooting Email Forwarding with Gmail

### Table of Contents {#toc}

* TOC
{:toc}

---

Gmail handles forwarded email differently than other providers. If forwarded messages are not appearing in your Gmail inbox, use this guide to diagnose the issue.

## Test emails not appearing {#self-send}

Gmail silently discards messages it determines were sent and received by the same account. This applies even when the message is routed through a forwarding address at a different domain.

To test email forwarding to a Gmail address, always send from a completely separate email account -- one that is not associated with the Gmail address receiving the forwarded messages.

> [!TIP]
> Use a different email provider (like Outlook or Yahoo) for testing, or ask a colleague to send a test email. Sending from the same Gmail account, or from a Google Workspace alias on the same account, will not work.

## Forwarded emails going to spam {#spam}

**Problem:** Emails arrive but land in Gmail's Spam folder instead of the inbox.

Gmail applies strict filtering to forwarded messages. Because the forwarding server's IP address differs from the original sender's, Gmail may flag the message as suspicious.

**Solutions:**

1. **Check the Spam folder** and mark legitimate messages as "Not spam." This trains Gmail's filter for future messages.

2. **Add the forwarding address to your contacts.** Create a contact entry for the address that forwards to you (e.g., `hello@yourdomain.com`). Gmail is less likely to filter messages associated with contacts.

3. **Create a Gmail filter** to prevent forwarded messages from being flagged:
   - In Gmail, click the search bar, then click **Show search options**.
   - In the **To** field, enter your forwarded address (e.g., `hello@yourdomain.com`).
   - Click **Create filter**, then check **Never send it to Spam**.

4. **Check the original sender's authentication.** If the sender's domain lacks [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), or [DMARC](/articles/dmarc-record/) records, Gmail is more likely to classify forwarded messages as spam.

## Emails not arriving at all {#not-arriving}

**Problem:** Forwarded emails do not appear in the inbox or the Spam folder.

**Possible causes:**

- Gmail's self-send suppression (see [above](#self-send))
- The email forward is not configured correctly in DNSimple
- DNS records have not propagated yet
- Gmail is rejecting the message at the server level

**Solutions:**

1. **Verify the email forward exists** in the [Email Forwarding](/articles/email-forwarding/) tab for your domain. Confirm the <label>From</label> and <label>To</label> fields are correct.

2. **Check DNS propagation.** After enabling email forwarding, MX record changes can take up to 24 hours to propagate. Verify with:
   ```
   dig +short yourdomain.com MX
   ```

3. **Check email headers** if you received the email in another account. Look for `X-Forwarded-To` or `Received` headers that confirm the forwarding path. If the headers show the message was forwarded but Gmail did not deliver it, the issue is on Gmail's side.

4. **Send from a different provider.** If test emails from one sender consistently fail, try sending from a different email provider to isolate whether the issue is sender-specific.

## Delayed delivery {#delays}

Forwarded emails may arrive with a delay of a few minutes to several hours. Common causes:

- **DNS propagation:** If you recently enabled email forwarding or changed DNS records, allow up to 24 hours for full propagation.
- **Gmail's processing queue:** Gmail occasionally delays delivery of messages it needs to evaluate for spam or authentication. This is normal behavior and usually resolves within minutes.
- **Greylisting:** Some sending servers retry delivery after an initial temporary rejection. This can add a delay of 5-30 minutes.

If delays persist beyond 24 hours, verify your MX records are correct and [contact support](https://dnsimple.com/feedback).

## Related articles

- [Troubleshooting Email Forwarding Delivery Issues](/articles/troubleshooting-email-forwarding-delivery-issues/) -- general delivery troubleshooting
- [Troubleshooting Email Forwarding with Other Providers](/articles/troubleshooting-email-forwarding-with-other-providers/) -- provider-specific troubleshooting for Outlook, Yahoo, and others
- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) -- how email forwarding works at DNSimple

## Have more questions?

If you have additional questions or need assistance troubleshooting email forwarding with Gmail, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
