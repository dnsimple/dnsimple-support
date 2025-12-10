---
title: Troubleshooting Email Forwarding with Other Providers
excerpt: Guide to troubleshooting email forwarding issues with email providers other than Gmail.
meta: Step-by-step guide to diagnosing and fixing email forwarding issues with various email providers.
categories:
- Emails
---

# Troubleshooting Email Forwarding with Other Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

This guide helps troubleshoot email forwarding issues with email providers other than Gmail, including Outlook, Yahoo, and other providers.

## Common issues by provider

### Outlook/Hotmail

**Common issues:**
- Emails going to spam/junk folder
- Emails not arriving
- Delivery delays

**Solutions:**
1. **Check junk folder:**
   - Look in Junk Email folder
   - Mark as "Not Junk" if legitimate

2. **Add to safe senders:**
   - Add forwarding service to Safe Senders list
   - This helps with future delivery

3. **Check mailbox limits:**
   - Verify mailbox isn't full
   - Clear space if needed

4. **Check spam filters:**
   - Review spam filter settings
   - Adjust filters if needed

### Yahoo Mail

**Common issues:**
- Emails in spam folder
- Delivery delays
- Not receiving emails

**Solutions:**
1. **Check spam folder:**
   - Look in Spam folder
   - Mark as "Not Spam" if legitimate

2. **Add to contacts:**
   - Add forwarding service to contacts
   - This can improve delivery

3. **Check filters:**
   - Review email filters
   - Ensure filters aren't blocking forwards

4. **Check mailbox status:**
   - Verify mailbox isn't full
   - Check account status

### Other providers

**General solutions:**
1. **Check spam/junk folders:**
   - Always check spam folders first
   - Mark as legitimate if needed

2. **Add to contacts:**
   - Add forwarding service to contacts
   - This helps with delivery

3. **Check provider settings:**
   - Review email provider settings
   - Check for blocking or filtering rules

4. **Contact provider:**
   - If issues persist, contact email provider support
   - They may have specific requirements

## General troubleshooting

### Verify email forwarding configuration

1. **Check email forwards:**
   - Verify "From" field is correct
   - Verify "To" (destination) field is correct
   - Check for typos

2. **Test destination:**
   - Send email directly to destination
   - Verify destination mailbox works

3. **Check MX records:**
   - Verify MX records: `dig +short yourdomain.com MX`
   - Should show email forwarding MX records

### Test email delivery

1. **Send test emails:**
   - Send from external email account
   - Send to forwarded address
   - Check if email arrives

2. **Check different times:**
   - Test at different times
   - Check for delivery delays

3. **Test from different senders:**
   - Test from different email providers
   - Verify delivery works consistently

## Provider-specific tips

### Outlook/Hotmail

- Check Junk Email folder regularly
- Add to Safe Senders list
- Check mailbox storage limits
- Review spam filter settings

### Yahoo Mail

- Check Spam folder
- Add to contacts
- Review email filters
- Check account status

### Apple Mail/iCloud

- Check Junk folder
- Review Mail settings
- Check iCloud storage
- Verify account status

### Other providers

- Check spam/junk folders
- Add to contacts or safe senders
- Review provider settings
- Contact provider support if needed

## Best practices

- ✅ Check spam folders first
- ✅ Add forwarding service to contacts
- ✅ Test email delivery regularly
- ✅ Keep email forwards updated
- ✅ Monitor for delivery issues

## Related topics

- [Troubleshooting Email Forwarding with Gmail](/articles/troubleshooting-email-forwarding-gmail/) - Gmail-specific troubleshooting
- [Troubleshooting Email Forwarding Delivery Issues](/articles/troubleshooting-email-forwarding-delivery-issues/) - General delivery issues
- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - Email forwarding overview

## Have more questions?

If you have additional questions or need any assistance with troubleshooting email forwarding with other providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
