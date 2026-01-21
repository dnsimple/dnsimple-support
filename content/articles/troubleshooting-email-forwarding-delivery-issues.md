---
title: Troubleshooting Email Forwarding Delivery Issues
excerpt: Guide to troubleshooting email delivery problems with email forwarding.
meta: Step-by-step guide to diagnosing and fixing email forwarding delivery issues.
categories:
- Emails
---

# Troubleshooting Email Forwarding Delivery Issues

### Table of Contents {#toc}

* TOC
{:toc}

---

If emails aren't being delivered through email forwarding, this guide will help you diagnose and fix the issue.

## Common issues

### Emails not arriving at destination

**Problem:** Emails sent to forwarded addresses aren't arriving at the destination.

**Possible causes:**
- Email forwarding not enabled
- Email forward not configured correctly
- Destination email address incorrect
- Destination mailbox issues
- DNS propagation delays

**Solutions:**
1. **Verify email forwarding is enabled:**
   - Check that email forwarding is enabled for the domain
   - Create a test email forward if needed

2. **Check email forward configuration:**
   - Verify the "From" field is correct
   - Verify the "To" (destination) field is correct
   - Check for typos in email addresses

3. **Test destination directly:**
   - Send an email directly to the destination address
   - Verify the destination mailbox is working

4. **Check DNS propagation:**
   - Verify MX records have propagated
   - Use `dig +short yourdomain.com MX` to check

5. **Check spam folders:**
   - Check if forwarded emails are in spam/junk folders
   - Add destination to contacts if needed

### Emails going to spam

**Problem:** Forwarded emails are going to spam folders.

**Possible causes:**
- Destination email provider filtering
- Sender reputation issues
- Missing email authentication
- Content triggers

**Solutions:**
1. **Check spam folder:**
   - Look in spam/junk folders
   - Mark as "not spam" if legitimate

2. **Add to contacts:**
   - Add the forwarding service to contacts
   - This can help with future delivery

3. **Check email authentication:**
   - Verify SPF, DKIM, and DMARC if applicable
   - Email forwarding services handle authentication

4. **Contact destination provider:**
   - If issues persist, contact the destination email provider
   - They may have specific filtering rules

### Email forwarding not working

**Problem:** Email forwarding service isn't working at all.

**Possible causes:**
- Email forwarding not enabled
- MX records not configured
- DNS issues
- Service issues

**Solutions:**
1. **Verify email forwarding is enabled:**
   - Check the Email Forwarding tab
   - Create a test forward if needed

2. **Check MX records:**
   - Verify MX records exist: `dig +short yourdomain.com MX`
   - Should show email forwarding MX records

3. **Check DNS:**
   - Verify DNS is resolving correctly
   - Check for DNS propagation issues

4. **Contact support:**
   - If issues persist, contact DNSimple support
   - Provide details about the issue

## Testing email forwarding

### Send test emails

1. **Send from external address:**
   - Send test emails from an external email account
   - Send to the forwarded address
   - Check if email arrives at destination

2. **Test different addresses:**
   - Test with different forwarded addresses
   - Test catch-all if configured
   - Verify all forwards work

3. **Check email headers:**
   - Review email headers for forwarding information
   - Look for forwarding service indicators

### Verify configuration

1. **Check email forwards:**
   - Review all configured email forwards
   - Verify "From" and "To" fields are correct
   - Check for any disabled forwards

2. **Check MX records:**
   - Verify MX records are correct
   - Ensure they point to email forwarding service

3. **Test DNS:**
   - Use `dig` to verify DNS records
   - Check DNS propagation

## Common solutions

### Fix typos in email addresses

- Check "From" field for typos
- Check "To" (destination) field for typos
- Verify email address format

### Update destination addresses

- Update email forwards with correct destinations
- Test after updating
- Verify delivery works

### Remove and recreate forwards

- Delete problematic email forwards
- Recreate with correct information
- Test after recreation

## Best practices

- ✅ Test email forwarding after setup
- ✅ Verify destination addresses are correct
- ✅ Monitor for delivery issues
- ✅ Check spam folders regularly
- ✅ Keep email forwards updated

## Related topics

- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - Email forwarding overview
- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - Managing forwards
- [Troubleshooting Email Forwarding with Gmail](/articles/troubleshooting-email-forwarding-gmail/) - Gmail-specific issues

## Have more questions?

If you have additional questions or need any assistance with troubleshooting email forwarding delivery issues, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
