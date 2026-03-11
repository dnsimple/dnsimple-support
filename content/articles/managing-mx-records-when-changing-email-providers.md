---
title: Managing MX Records When Changing Email Providers
excerpt: How to update MX records when migrating from one email hosting provider to another.
meta: Step-by-step guide to managing MX records when changing email providers, ensuring a smooth transition with minimal downtime.
categories:
- Emails
- DNS
---

# Managing MX Records When Changing Email Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

When you change email hosting providers, you need to update your MX records to point to the new provider's mail servers. Proper planning minimizes email delivery issues during the migration.

## Understanding the migration process {#understanding}

Changing email providers involves updating your domain's MX records to point to the new provider's mail servers. During this transition:

- **Old provider:** Will continue receiving emails until DNS changes propagate
- **New provider:** Will start receiving emails once DNS changes propagate
- **Transition period:** There may be a brief period where emails could be delivered to either provider

## Prerequisites {#prerequisites}

Before changing email providers:

1. **Set up your new email provider account:** Complete the setup process with your new email hosting provider.
2. **Get new MX record information:** Obtain the specific MX records from your new email provider.
3. **Back up email data:** Export or back up important emails from your old provider before migration.
4. **Plan the migration:** Schedule the migration during a low-traffic period if possible.

> [!WARNING]
> If you are currently using DNSimple's email forwarding service, you need to disable it before setting up email hosting. Email forwarding and email hosting cannot be used simultaneously.

## Step-by-step migration process {#migration}

### Step 1: Prepare your new email provider {#prepare}

1. **Complete setup with new provider:**
   - Sign up for the new email hosting service
   - Verify your domain ownership (usually via TXT record)
   - Create email accounts for all users
   - Configure any necessary settings

2. **Get MX record information:**
   - Note the exact MX records provided by your new provider
   - Record the priority values and mail server hostnames
   - Save this information for the next step

### Step 2: Update MX records in DNSimple {#update-mx}

<div class="section-steps" markdown="1">
##### Update MX records for the new provider

1. Use the account switcher to select the appropriate account.
1. Click on your domain name from the <label>Domain Names</label> list.
1. Click the <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Find all existing MX records and delete each one (click the delete/trash icon and confirm).
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value from your new provider.
1. Enter the mail server hostname from your new provider.
1. Click <label>Add record</label>.
1. Repeat for all MX records provided by your new provider.
</div>

> [!NOTE]
> If you are using DNSimple's one-click services for your old provider, you can remove the service, which will automatically remove the associated DNS records. See [Removing Services](/articles/services/#removing-services) for instructions.

### Step 3: Verify the changes {#verify}

1. **Check DNS propagation:**
   - Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to verify your new MX records are propagating
   - Check from multiple locations if possible

2. **Verify with dig:**
   ```
   dig +short yourdomain.com MX
   ```
   This should show your new MX records.

3. **Test email delivery:**
   - Send a test email to an address at your domain
   - Verify it arrives at the new email provider
   - Check both old and new inboxes during the transition period

### Step 4: Monitor and finalize {#finalize}

1. **Monitor email delivery:**
   - Check both old and new email accounts for a few days
   - Forward any emails that arrive at the old provider
   - Update email clients and devices to use the new provider

2. **Update email clients:**
   - Configure email clients (Outlook, Apple Mail, etc.) with new server settings
   - Update mobile devices with new email account settings
   - Test sending and receiving from all devices

3. **Cancel old service:**
   - Once you have confirmed all emails are being delivered to the new provider
   - Once you have verified no important emails are stuck at the old provider
   - Cancel your subscription with the old email provider

## Migration strategies {#strategies}

### Strategy 1: Direct cutover (recommended for most cases)

This is the simplest approach: remove old MX records and add new ones immediately.

**Pros:**
- Simple and straightforward
- Fast transition
- No duplicate record management

**Cons:**
- Brief period where emails might be delivered to either provider
- Requires quick DNS propagation

**Best for:** Most migrations, especially when both providers are reliable.

### Strategy 2: Gradual transition (for critical email)

For critical business email, you might use a gradual approach with overlapping MX records.

**Note:** This approach is complex and not typically recommended. Most email providers recommend a direct cutover.

**Pros:**
- Provides redundancy during transition
- Allows testing before full cutover

**Cons:**
- Complex to manage
- Risk of email delivery issues
- Requires careful priority management

**Best for:** Only when absolutely necessary and with careful planning.

## Common migration scenarios {#scenarios}

### Migrating from email forwarding to email hosting

If you are migrating from DNSimple's email forwarding to a full email hosting service:

1. **Disable email forwarding:**
   - Go to your domain's <label>Email Forwarding</label> tab
   - Delete all email forwards
   - This will automatically remove the email forwarding MX records

2. **Set up email hosting:**
   - Follow your new email provider's setup instructions
   - Add the new MX records as described above

### Migrating between email hosting providers

When moving from one email hosting provider to another:

1. **Set up new provider first:**
   - Complete setup with the new provider
   - Get MX record information

2. **Update MX records:**
   - Remove old MX records
   - Add new MX records
   - Verify propagation

3. **Migrate email data:**
   - Export emails from old provider
   - Import to new provider (if supported)
   - Update email clients

### Migrating from email hosting to email forwarding

If you want to switch from email hosting to DNSimple's email forwarding:

1. **Remove email hosting MX records:**
   - Delete all MX records from your email hosting provider
   - Remove the one-click service if you used it

2. **Enable email forwarding:**
   - Go to your domain's <label>Email Forwarding</label> tab
   - Create your first email forward
   - This will automatically add the email forwarding MX records

> [!WARNING]
> When switching from email hosting to email forwarding, you will lose access to emails stored on the hosting provider's servers. Back up important emails before making this change.

## Troubleshooting migration issues {#troubleshooting}

### Emails still going to old provider

**Problem:** Emails are still being delivered to your old email provider after updating MX records.

**Solutions:**
1. **Check DNS propagation:** Use online tools to verify your new MX records have propagated globally.
2. **Verify MX records:** Use `dig` to confirm your new MX records are published correctly.
3. **Wait longer:** DNS propagation can take up to 48 hours, though it is typically much faster.
4. **Check for cached records:** Some mail servers cache MX records. Wait for cache to expire.

### Emails not being delivered

**Problem:** Emails are not being delivered to either provider after migration.

**Solutions:**
1. **Verify MX records exist:** Use `dig +short yourdomain.com MX` to check if MX records are published.
2. **Check priority values:** Ensure priority values are correct.
3. **Verify hostnames:** Ensure mail server hostnames are exactly as provided by your email provider.
4. **Check for syntax errors:** Ensure there are no typos in mail server hostnames.
5. **Contact your new provider:** They can help verify your MX record configuration is correct for their service.

### Duplicate email delivery

**Problem:** Emails are being delivered to both old and new providers.

**Solutions:**
1. **This is normal during transition:** Some emails may be delivered to both providers during DNS propagation.
2. **Monitor both inboxes:** Check both old and new email accounts during the transition period.
3. **Forward emails:** Set up forwarding from old provider to new provider if possible.
4. **Wait for full propagation:** Once DNS fully propagates, emails should only go to the new provider.

## Best practices {#best-practices}

**Plan ahead:** Schedule migrations during low-traffic periods when possible.

**Test first:** Send test emails before and after migration to verify everything works.

**Keep old account active:** Keep your old email account active for a few weeks after migration to catch any missed emails.

**Update all devices:** Update email clients on all devices (computers, phones, tablets) with new settings.

**Notify contacts:** Consider notifying important contacts about your email migration.

**Back up data:** Always back up important emails before migration.

## Related topics

- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX record setup guide
- [What Is an MX Record?](/articles/mx-record/) - General information about MX records
- [Email Forwarding](/articles/email-forwarding/) - Information about DNSimple's email forwarding service

## Have more questions?

If you have additional questions or need any assistance with managing MX records when changing email providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
