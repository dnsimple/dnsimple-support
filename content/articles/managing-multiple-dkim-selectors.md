---
title: Managing Multiple DKIM Selectors
excerpt: Learn how to manage multiple DKIM selectors for different email services and ensure proper email authentication.
meta: Guide to managing multiple DKIM selectors when using different email services, ensuring proper authentication for all email sources.
categories:
- Emails
---

# Managing Multiple DKIM Selectors

### Table of Contents {#toc}

* TOC
{:toc}

---

When you use multiple email services or send emails from different sources, you may need to manage multiple DKIM selectors. This guide explains how to configure and manage multiple DKIM selectors in DNSimple.

## Understanding multiple DKIM selectors

Different email services use different DKIM selectors to sign emails. A DKIM selector is part of the DKIM record location in DNS:

- **Format:** `selector._domainkey.yourdomain.com`
- **Example:** `google._domainkey.yourdomain.com` (for Google Workspace)
- **Example:** `selector1._domainkey.yourdomain.com` (for Microsoft 365)

When you use multiple email services, each service may require its own DKIM selector and public key.

## When you need multiple DKIM selectors

You need multiple DKIM selectors when:

- **Using multiple email hosting providers:** Using both Google Workspace and Microsoft 365
- **Using transactional email services:** Using services like SendGrid, Mailgun, or Postmark
- **Using marketing platforms:** Using email marketing services like Mailchimp or Constant Contact
- **Using different subdomains:** Different subdomains may use different DKIM selectors
- **Migrating services:** During migration, you may temporarily need multiple selectors

<info>
**Multiple selectors are normal:** It's common and expected to have multiple DKIM selectors when using multiple email services.
</info>

## Getting DKIM information from services

Each email service provides its own DKIM information:

### Google Workspace

1. **Get DKIM selector:**
   - Log into Google Workspace admin console
   - Go to **Apps** > **Google Workspace** > **Gmail**
   - Click **Authenticate email**
   - Note the selector (typically `google` or `default`)

2. **Get DKIM public key:**
   - Google provides the complete public key
   - Copy the entire key value

### Microsoft 365

1. **Get DKIM selectors:**
   - Log into Microsoft 365 admin center
   - Go to **Settings** > **Domains**
   - Select your domain and click **DKIM**
   - Microsoft typically provides two selectors (e.g., `selector1` and `selector2`)

2. **Get DKIM public keys:**
   - Microsoft provides a public key for each selector
   - Copy each key separately

### Transactional email services

Each service provides DKIM information differently:

- **SendGrid:** Provides selector and public key in dashboard
- **Mailgun:** Provides selector and public key in domain settings
- **Postmark:** Provides selector and public key in sender signatures

**Check each service's documentation** for how to get DKIM information.

## Adding multiple DKIM selectors in DNSimple

### Step 1: Identify all DKIM selectors needed

1. **List all email services:**
   - Email hosting (Google Workspace, Microsoft 365, etc.)
   - Transactional email services
   - Marketing platforms
   - Any other services sending email

2. **Get DKIM information from each:**
   - Contact each service or check their documentation
   - Note the selector and public key for each

### Step 2: Add each DKIM record

For each DKIM selector:

1. **Navigate to your domain:**
   - Use the account switcher to select the appropriate account
   - Click on your domain name from the Domain Names list
   - Click the **DNS** tab and open the **Record Editor**

2. **Add DKIM TXT record:**
   - Click **Add record** and select **TXT**
   - In the **Name** field, enter: `selector._domainkey` (replace `selector` with your actual selector)
   - For example: `google._domainkey` or `selector1._domainkey`
   - In the **Content** field, enter the DKIM public key provided by the service
   - Click **Add record**

3. **Repeat for each selector:**
   - Add a separate TXT record for each DKIM selector
   - Each selector gets its own DNS record

<info>
**Record format:** Each DKIM selector requires its own TXT record at `selector._domainkey.yourdomain.com`.
</info>

## Example: Multiple DKIM selectors

Here's an example configuration with multiple selectors:

### Google Workspace
- **Selector:** `google`
- **Record location:** `google._domainkey.yourdomain.com`
- **Public key:** (provided by Google)

### Microsoft 365
- **Selector 1:** `selector1`
- **Record location:** `selector1._domainkey.yourdomain.com`
- **Public key:** (provided by Microsoft)

- **Selector 2:** `selector2`
- **Record location:** `selector2._domainkey.yourdomain.com`
- **Public key:** (provided by Microsoft)

### SendGrid
- **Selector:** `s1`
- **Record location:** `s1._domainkey.yourdomain.com`
- **Public key:** (provided by SendGrid)

Each of these would be separate TXT records in your DNS zone.

## Verifying multiple DKIM selectors

### Check each selector individually

Use `dig` to verify each DKIM selector:

```bash
# Google Workspace
dig +short google._domainkey.yourdomain.com TXT

# Microsoft 365 selector 1
dig +short selector1._domainkey.yourdomain.com TXT

# Microsoft 365 selector 2
dig +short selector2._domainkey.yourdomain.com TXT

# SendGrid
dig +short s1._domainkey.yourdomain.com TXT
```

Each should return the corresponding DKIM public key.

### Test email authentication

1. **Send test emails from each service:**
   - Send test emails from Google Workspace
   - Send test emails from Microsoft 365
   - Send test emails from transactional services

2. **Check email headers:**
   - Look for `DKIM-Signature` headers
   - Verify the `d=` tag matches your domain
   - Verify the selector matches what's configured

3. **Use online tools:**
   - Services like Mail-Tester can verify DKIM signatures
   - Check that all services are signing correctly

## Managing DKIM selectors

### Adding a new selector

When adding a new email service:

1. **Get DKIM information:**
   - Get selector and public key from the new service

2. **Add DKIM record:**
   - Add the new DKIM TXT record in DNSimple
   - Verify it's published correctly

3. **Test:**
   - Send a test email from the new service
   - Verify DKIM signature in headers

### Removing an old selector

When discontinuing an email service:

1. **Verify no longer in use:**
   - Confirm the service is no longer sending emails
   - Check DMARC reports to ensure no emails from that selector

2. **Remove DKIM record:**
   - Delete the DKIM TXT record from DNSimple
   - This frees up DNS space and reduces complexity

<warning>
**Don't remove too quickly:** Keep old selectors active for a few weeks after discontinuing a service to ensure no delayed emails are still using it.
</warning>

### Updating a selector

If an email service changes their DKIM selector:

1. **Add new selector:**
   - Add the new DKIM record
   - Keep the old record temporarily

2. **Verify new selector works:**
   - Test emails from the service
   - Verify DKIM signatures use new selector

3. **Remove old selector:**
   - After confirming new selector works
   - Remove the old DKIM record

## Common issues and solutions

### DKIM not working for one service

**Problem:** One email service's DKIM isn't working, but others are.

**Solutions:**
1. **Verify selector:** Check that the selector matches what the service expects
2. **Verify public key:** Ensure the public key is exactly as provided
3. **Check record location:** Verify the record is at the correct subdomain
4. **Test individually:** Send test emails and check headers for that specific service

### Too many DKIM selectors

**Problem:** You have many DKIM selectors and it's hard to manage.

**Solutions:**
1. **Document your selectors:** Keep a list of which selector is for which service
2. **Consolidate when possible:** Some services allow using the same selector
3. **Regular cleanup:** Remove selectors for services you no longer use
4. **Use subdomains:** Consider using subdomains for different email services

### DKIM alignment issues

**Problem:** DKIM passes but doesn't align for DMARC.

**Solutions:**
1. **Check domain in signature:** Verify the `d=` tag in DKIM signature matches your domain
2. **Use subdomain:** Consider using a subdomain for the email service that matches the DKIM domain
3. **Configure service:** Some services allow configuring the DKIM domain

## Best practices

- ✅ Document which selector is for which service
- ✅ Keep a list of all DKIM selectors and their purposes
- ✅ Regularly review and remove unused selectors
- ✅ Test each service's DKIM after configuration
- ✅ Monitor DMARC reports for DKIM issues
- ✅ Update selectors when services change requirements
- ✅ Use consistent naming when possible

## Related topics

- [Setting Up DKIM](/articles/set-up-dkim/) - Initial DKIM setup
- [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC configuration

## Have more questions?

If you have additional questions or need any assistance with managing multiple DKIM selectors, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
