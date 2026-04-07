---
title: Handling Email Bounces with Email Forwarding
excerpt: How email bounces work with email forwarding and how to handle them.
meta: Guide to understanding and handling email bounces when using email forwarding services.
categories:
- Emails
---

# Handling Email Bounces with Email Forwarding

### Table of Contents {#toc}

* TOC
{:toc}

---

When using email forwarding, bounces are handled differently than with direct email delivery. DNSimple's email forwarding service handles bounces from the final destination internally -- bounces are not forwarded back to the original sender.

## How bounces work with email forwarding {#how-bounces-work}

### Email forwarding flow

When an email is forwarded:

1. **Email arrives:** Email arrives at the forwarding service
2. **Forwarding:** Email is forwarded to the destination address
3. **Delivery attempt:** Forwarding service attempts to deliver to destination
4. **Bounce (if applicable):** If delivery fails, a bounce may occur

### Bounce behavior at DNSimple

DNSimple's email forwarding service handles bounces internally. If the destination address bounces, the bounce goes to the forwarding service — it is not forwarded back to the original sender. This means original senders will not know if a forwarded email failed to deliver.

## Types of bounces with forwarding {#bounce-types}

### Hard bounces

Hard bounces indicate permanent delivery failures to the forwarded destination.

**Common causes:**
- Invalid destination email address
- Destination domain does not exist
- Destination mailbox does not exist

**What happens:**
- The forwarding service receives the bounce
- The bounce is handled by the forwarding service
- The original sender typically does not receive the bounce

**Action:**
- Update the destination email address if it is invalid
- Remove the email forward if the destination no longer exists

### Soft bounces

Soft bounces indicate temporary delivery failures to the forwarded destination.

**Common causes:**
- Destination mailbox is full
- Destination server is temporarily unavailable
- Message size exceeds limits

**What happens:**
- The forwarding service may retry delivery
- The bounce may be temporary
- If persistent, it may become a hard bounce

**Action:**
- Monitor soft bounces
- Contact the destination if mailbox is full
- Update destination if issues persist

## Managing bounces with email forwarding {#managing-bounces}

### Monitor forwarded email delivery

**Check delivery:**
- Send test emails to forwarded addresses
- Verify emails arrive at destinations
- Monitor for delivery issues

**Check destination mailboxes:**
- Ensure destination mailboxes are active
- Check for full mailboxes
- Verify destination addresses are correct

### Update email forwards

If bounces occur:

1. **Verify destination:**
   - Check that the destination email address is correct
   - Confirm the destination mailbox exists
   - Test sending directly to the destination

2. **Update the forward:**
   - Correct any typos in destination addresses
   - Update to new destination if needed
   - Delete forwards with invalid destinations

3. **Test after changes:**
   - Send test emails after updating
   - Verify delivery works correctly

### Handle persistent bounces

If a destination consistently bounces:

1. **Investigate:**
   - Check if destination address is valid
   - Verify destination mailbox status
   - Contact destination if needed

2. **Take action:**
   - Update destination if it changed
   - Remove forward if destination is invalid
   - Consider alternative destinations

## Best practices {#best-practices}

### Verify destinations

- Verify destination email addresses are correct when creating forwards
- Test destinations before relying on forwarding
- Keep destination addresses updated

### Monitor regularly

- Send test emails periodically to verify forwarding works
- Check destination mailboxes are active
- Monitor for delivery issues

### Update promptly

- Update email forwards when destinations change
- Remove forwards with invalid destinations
- Fix any issues immediately

### Document configuration

- Keep a list of all email forwards and destinations
- Document any changes to forwards
- Note any bounce-related issues

## Common scenarios {#scenarios}

### Scenario 1: Destination mailbox full

**Problem:** Destination mailbox is full, causing soft bounces.

**Solution:**
- Contact the destination to clear the mailbox
- Monitor for resolution
- Consider alternative destination if persistent

### Scenario 2: Invalid destination address

**Problem:** Destination email address does not exist, causing hard bounces.

**Solution:**
- Verify the correct destination address
- Update the email forward with correct address
- Remove forward if destination is truly invalid

### Scenario 3: Destination domain does not exist

**Problem:** Destination domain does not exist, causing hard bounces.

**Solution:**
- Verify destination domain is correct
- Update forward if domain changed
- Remove forward if domain no longer exists

## Limitations {#limitations}

### Bounce forwarding

Most email forwarding services, including DNSimple, do not forward bounces back to the original sender. The forwarding service handles bounces internally.

**Impact:**
- Original senders may not know if forwarded emails bounce
- You need to monitor forwarded email delivery yourself
- Test emails periodically to verify forwarding works

### Bounce notifications

You may not receive notifications about bounces from forwarded emails.

**Solution:**
- Monitor forwarded email delivery yourself
- Send test emails periodically
- Check destination mailboxes regularly
- Update forwards when destinations change

## Troubleshooting {#troubleshooting}

### Emails not arriving at destination

**Problem:** Emails sent to forwarded addresses are not arriving at destinations.

**Possible causes:**
- Destination email address is incorrect
- Destination mailbox is full
- Destination server is rejecting emails
- Email forwarding configuration issue

**Solutions:**
1. Verify destination email address is correct
2. Check destination mailbox status
3. Send test email directly to destination
4. Check email forwarding configuration
5. [Contact support](https://dnsimple.com/feedback) if issues persist

### Bounces from forwarded emails

**Problem:** You are receiving bounces from emails sent to forwarded addresses.

**Possible causes:**
- Destination is bouncing emails
- Destination address is invalid
- Destination server is rejecting emails

**Solutions:**
1. Verify destination email address
2. Check destination mailbox status
3. Update or remove email forward if needed
4. Contact destination if appropriate

## Have more questions?

If you have additional questions or need any assistance with handling email bounces with email forwarding, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
