---
title: Manage Multiple DKIM Selectors
excerpt: How to manage multiple DKIM selectors for different email services and ensure proper email authentication.
meta: Guide to managing multiple DKIM selectors when using different email services, ensuring proper authentication for all email sources.
categories:
- Emails
---

# Manage Multiple DKIM Selectors

### Table of Contents {#toc}

* TOC
{:toc}

---

When you use multiple email services or send emails from different sources, you may need to manage multiple DKIM selectors. This guide explains how to configure and manage multiple DKIM selectors in DNSimple.

## Understanding multiple DKIM selectors {#understanding}

Different email services use different DKIM selectors to sign emails. A DKIM selector is part of the DKIM record location in DNS:

- **Format:** `selector._domainkey.yourdomain.com`
- **Example:** `google._domainkey.yourdomain.com` (for Google Workspace)
- **Example:** `selector1._domainkey.yourdomain.com` (for Microsoft 365)

When you use multiple email services, each service may require its own DKIM selector and public key.

## When you need multiple DKIM selectors {#when-needed}

You need multiple DKIM selectors when:

- **Using multiple email hosting providers:** Using both Google Workspace and Microsoft 365
- **Using transactional email services:** Using services like SendGrid, Mailgun, or Postmark
- **Using marketing platforms:** Using email marketing services like Mailchimp or Constant Contact
- **Using different subdomains:** Different subdomains may use different DKIM selectors
- **Migrating services:** During migration, you may temporarily need multiple selectors

> [!NOTE]
> It is common and expected to have multiple DKIM selectors when using multiple email services.

## Getting DKIM information from services {#getting-info}

Each email service provides its own DKIM information:

### Google Workspace

1. **Get DKIM selector:**
   - Log into Google Workspace admin console
   - Go to <label>Apps</label> > <label>Google Workspace</label> > <label>Gmail</label>
   - Click <label>Authenticate email</label>
   - Note the selector (typically `google` or `default`)

2. **Get DKIM public key:**
   - Google provides the complete public key
   - Copy the entire key value

### Microsoft 365

1. **Get DKIM selectors:**
   - Log into Microsoft 365 admin center
   - Go to <label>Settings</label> > <label>Domains</label>
   - Select your domain and click <label>DKIM</label>
   - Microsoft typically provides two selectors (e.g., `selector1` and `selector2`)

2. **Get DKIM public keys:**
   - Microsoft provides a public key for each selector
   - Copy each key separately

### Transactional email services

Each service provides DKIM information differently:

- **SendGrid:** Provides selector and public key in dashboard
- **Mailgun:** Provides selector and public key in domain settings
- **Postmark:** Provides selector and public key in sender signatures

Check each service's documentation for how to get DKIM information.

## Adding multiple DKIM selectors in DNSimple {#adding}

### Step 1: Identify all DKIM selectors needed {#identify}

1. **List all email services:**
   - Email hosting (Google Workspace, Microsoft 365, etc.)
   - Transactional email services
   - Marketing platforms
   - Any other services sending email

2. **Get DKIM information from each:**
   - Contact each service or check their documentation
   - Note the selector and public key for each

### Step 2: Add each DKIM record {#add-records}

For each DKIM selector:

<div class="section-steps" markdown="1">
##### Add a DKIM TXT record

1. Use the account switcher to select the appropriate account.
1. Click on your domain name from the <label>Domain Names</label> list.
1. Click the <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Click <label>Add record</label> and select **TXT**.
1. In the <label>Name</label> field, enter `selector._domainkey` (replace `selector` with your actual selector, e.g., `google._domainkey` or `selector1._domainkey`).
1. In the <label>Content</label> field, enter the DKIM public key provided by the service.
1. Click <label>Add record</label>.
1. Repeat for each additional DKIM selector.
</div>

> [!NOTE]
> Each DKIM selector requires its own TXT record at `selector._domainkey.yourdomain.com`.

## Example: Multiple DKIM selectors {#example}

Here is an example configuration with multiple selectors:

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

## Verifying multiple DKIM selectors {#verifying}

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
   - Verify the selector matches what is configured

3. **Use online tools:**
   - Services like Mail-Tester can verify DKIM signatures
   - Check that all services are signing correctly

## Managing DKIM selectors {#managing}

### Adding a new selector

When adding a new email service:

1. **Get DKIM information:** Get selector and public key from the new service.
2. **Add DKIM record:** Add the new DKIM TXT record in DNSimple.
3. **Verify:** Send a test email from the new service and verify the DKIM signature in headers.

### Removing an old selector

When discontinuing an email service:

1. **Verify no longer in use:** Confirm the service is no longer sending emails. Check DMARC reports to ensure no emails from that selector.
2. **Remove DKIM record:** Delete the DKIM TXT record from DNSimple. This frees up DNS space and reduces complexity.

> [!WARNING]
> Do not remove selectors too quickly. Keep old selectors active for a few weeks after discontinuing a service to ensure no delayed emails are still using them.

### Updating a selector

If an email service changes their DKIM selector:

1. **Add new selector:** Add the new DKIM record. Keep the old record temporarily.
2. **Verify new selector works:** Test emails from the service. Verify DKIM signatures use the new selector.
3. **Remove old selector:** After confirming the new selector works, remove the old DKIM record.

## Common issues and solutions {#issues}

### DKIM not working for one service

**Problem:** One email service's DKIM is not working, but others are.

**Solutions:**
1. **Verify selector:** Check that the selector matches what the service expects
2. **Verify public key:** Ensure the public key is exactly as provided
3. **Check record location:** Verify the record is at the correct subdomain
4. **Test individually:** Send test emails and check headers for that specific service

### Too many DKIM selectors

**Problem:** You have many DKIM selectors and they are hard to manage.

**Solutions:**
1. **Document your selectors:** Keep a list of which selector is for which service
2. **Consolidate when possible:** Some services allow using the same selector
3. **Regular cleanup:** Remove selectors for services you no longer use
4. **Use subdomains:** Consider using subdomains for different email services

### DKIM alignment issues

**Problem:** DKIM passes but does not align for DMARC.

**Solutions:**
1. **Check domain in signature:** Verify the `d=` tag in DKIM signature matches your domain
2. **Use subdomain:** Consider using a subdomain for the email service that matches the DKIM domain
3. **Configure service:** Some services allow configuring the DKIM domain

## Best practices {#best-practices}

- Document which selector is for which service
- Keep a list of all DKIM selectors and their purposes
- Regularly review and remove unused selectors
- Test each service's DKIM after configuration
- Monitor DMARC reports for DKIM issues
- Update selectors when services change requirements
- Use consistent naming when possible

## Related articles {#related}

- [Set Up DKIM](/articles/set-up-dkim/) - Initial DKIM setup
- [SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements
- [Set Up DMARC](/articles/set-up-dmarc/) - DMARC configuration

## Have more questions?

If you have additional questions or need any assistance with managing multiple DKIM selectors, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
