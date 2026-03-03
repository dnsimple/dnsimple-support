---
title: Migrating Email Forwarding from Another Provider
excerpt: Learn how to migrate email forwarding from another provider to DNSimple.
meta: Step-by-step guide to migrating email forwarding configuration from another provider to DNSimple, ensuring a smooth transition.
categories:
- Emails
---

# Migrating Email Forwarding from Another Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

If you're currently using email forwarding from another provider and want to migrate to DNSimple, this guide will help you make a smooth transition.

## Overview

Migrating email forwarding involves:
1. Documenting your current email forwarding configuration
2. Setting up email forwarding in DNSimple
3. Updating DNS records
4. Testing and verifying the migration
5. Canceling the old service

<warning>
**Important:** During the migration, there may be a brief period where emails could be delivered to either provider. Plan accordingly and monitor both services during the transition.
</warning>

## Prerequisites

Before migrating email forwarding to DNSimple:

1. **DNSimple account:** You need an active DNSimple account with your domain
2. **Plan with email forwarding:** Your DNSimple plan must include email forwarding
3. **Domain in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone
4. **Current configuration:** Document your current email forwarding setup from the old provider

## Step 1: Document your current configuration

Before making any changes, document your current email forwarding setup:

1. **List all email forwards:**
   - Write down each email forward (From → To)
   - Note any catch-all email forwards
   - Document any special configurations

2. **Note current MX records:**
   - Check what MX records your current provider uses
   - You can use `dig +short yourdomain.com MX` to see current MX records
   - This helps verify the migration later

3. **Identify dependencies:**
   - Note any services or applications that depend on your current email forwarding
   - Plan for updating those services after migration

<info>
**Documentation template:** Create a spreadsheet or document listing:
- Email address (From)
- Destination (To)
- Notes or special requirements
</info>

## Step 2: Set up email forwarding in DNSimple

Once you've documented your current configuration:

1. **Navigate to your domain:**
   - Use the account switcher to select the appropriate account
   - Click on your domain name from the Domain Names list
   - Click the **Email Forwarding** tab

2. **Create email forwards:**
   - For each email forward from your documentation:
     - Click **Add email forward**
     - Enter the local part in the **From** field (e.g., `hello` for `hello@yourdomain.com`)
     - Enter the full destination email address in the **To** field
     - Click **Add email forward**
   - Repeat for all email forwards

3. **Set up catch-all (if needed):**
   - If you have a catch-all email forward, create it in DNSimple
   - Select **Catch-all** or enter `(.*)` in the **From** field
   - Enter the destination email address
   - Click **Add email forward**

<info>
**First email forward:** When you create your first email forward, DNSimple automatically enables email forwarding and adds the necessary MX records.
</info>

## Step 3: Verify DNS configuration

After setting up email forwarding in DNSimple:

1. **Check MX records:**
   - Use `dig +short yourdomain.com MX` to verify new MX records
   - The MX records should point to DNSimple's email forwarding servers
   - Old MX records should be automatically removed when you enable email forwarding

2. **Verify DNS propagation:**
   - Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to check global DNS propagation
   - Wait for DNS changes to propagate (typically a few minutes to a few hours)

<warning>
**MX record conflict:** If your old provider's MX records are still present, email forwarding may not work correctly. DNSimple automatically removes existing MX records when you enable email forwarding, but verify this has happened.
</warning>

## Step 4: Test email forwarding

Before canceling your old service, thoroughly test the migration:

1. **Send test emails:**
   - Send test emails to each forwarded address
   - Verify emails arrive at the correct destination
   - Check that emails are being forwarded correctly

2. **Test catch-all (if applicable):**
   - Send test emails to addresses that don't have specific forwards
   - Verify catch-all forwarding works if configured

3. **Check email headers:**
   - Review email headers to confirm forwarding is working
   - Verify emails are coming from DNSimple's email forwarding service

4. **Monitor both services:**
   - During the transition period, check both old and new email forwarding
   - Forward any emails that arrive at the old provider
   - Monitor for a few days to ensure everything is working

## Step 5: Update dependent services

If you have services or applications that depend on email forwarding:

1. **Update configurations:**
   - Update any applications that send emails to forwarded addresses
   - Update any services that depend on email forwarding
   - Test these services after updating

2. **Notify users:**
   - If others use your email forwarding, notify them of the migration
   - Provide any necessary updates or instructions

## Step 6: Cancel old service

Once you've verified everything is working:

1. **Wait for full propagation:**
   - Allow sufficient time for DNS to fully propagate (at least 24-48 hours)
   - Verify emails are consistently going to DNSimple

2. **Cancel old service:**
   - Cancel your email forwarding service with the old provider
   - Follow their cancellation process
   - Keep any necessary records or confirmations

3. **Final verification:**
   - After canceling, send final test emails
   - Verify everything still works correctly
   - Monitor for any issues

## Common migration scenarios

### Scenario 1: Simple migration (few email forwards)

If you have just a few email forwards:

1. Document your current forwards
2. Set them up in DNSimple
3. Test thoroughly
4. Cancel old service

**Timeline:** Can typically be completed in a few hours to one day.

### Scenario 2: Complex migration (many email forwards)

If you have many email forwards or complex configurations:

1. Document everything carefully
2. Set up email forwards in DNSimple (consider using the API for bulk operations)
3. Test each email forward individually
4. Monitor for an extended period
5. Cancel old service after thorough verification

**Timeline:** May take several days to ensure everything is working correctly.

### Scenario 3: Migration with catch-all

If you're using catch-all email forwarding:

1. Document your catch-all configuration
2. Set up catch-all in DNSimple
3. Test with various email addresses
4. Verify catch-all behavior matches expectations
5. Cancel old service

**Timeline:** Similar to simple migration, but requires more testing.

## Troubleshooting migration issues

### Emails still going to old provider

**Problem:** After migration, emails are still being delivered to the old provider.

**Solutions:**
1. **Check MX records:** Verify DNSimple's MX records have propagated using `dig +short yourdomain.com MX`
2. **Wait for propagation:** DNS changes can take up to 48 hours to propagate globally
3. **Check for cached records:** Some mail servers cache MX records; wait for cache to expire
4. **Verify old MX records removed:** Ensure old provider's MX records are no longer present

### Emails not being forwarded

**Problem:** Emails aren't being forwarded after migration.

**Solutions:**
1. **Verify email forwarding enabled:** Check that email forwarding is enabled in DNSimple
2. **Check email forwards:** Verify all email forwards are configured correctly
3. **Test DNS:** Use `dig` to verify MX records point to DNSimple
4. **Check spam folders:** Check if forwarded emails are going to spam
5. **Contact support:** If issues persist, contact DNSimple support

### Some emails work, others don't

**Problem:** Some email forwards work, but others don't.

**Solutions:**
1. **Check each forward individually:** Test each email forward to identify which ones have issues
2. **Verify configuration:** Ensure each forward is configured correctly
3. **Check for typos:** Verify there are no typos in email addresses
4. **Test from different senders:** Some email providers may have different delivery behavior

## Best practices

**Plan ahead:** Document everything before starting the migration.

**Test thoroughly:** Don't cancel your old service until you're confident everything is working.

**Monitor during transition:** Keep an eye on both services during the migration period.

**Have a rollback plan:** Know how to revert to your old provider if needed (though this may be difficult once MX records change).

**Communicate changes:** Notify anyone who might be affected by the migration.

## Related topics

- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - Overview of email forwarding
- [Enabling Email Forwarding](/articles/enabling-email-forwarding/) - How to enable email forwarding
- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - How to create email forwards
- [Email Forwarding Management](/articles/email-forwarding-management/) - Guide to managing email forwarding

## Have more questions?

If you have additional questions or need any assistance with migrating email forwarding, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
