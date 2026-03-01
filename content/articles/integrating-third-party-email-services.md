---
title: Integrating Third-Party Email Services
excerpt: General guide to integrating email hosting services with DNSimple DNS management.
meta: Step-by-step guide to integrating third-party email hosting services with DNSimple, including DNS configuration and best practices.
categories:
- Emails
- Services
---

# Integrating Third-Party Email Services

### Table of Contents {#toc}

* TOC
{:toc}

---

Many email hosting providers can be integrated with DNSimple for DNS management. This guide provides a general approach to integrating third-party email services, applicable to providers like FastMail, Rackspace, Zoho, and others.

## Overview

Integrating a third-party email service with DNSimple typically involves:

1. Setting up your email hosting account
2. Getting DNS record information from your email provider
3. Configuring DNS records in DNSimple
4. Verifying domain ownership (if required)
5. Testing email delivery

<info>
**One-click services:** DNSimple offers one-click services for some popular email providers (Google Workspace, Microsoft 365). Check if your provider has a one-click service available in the [Services category](/categories/services/).
</info>

## Prerequisites

Before integrating a third-party email service:

1. **Email hosting account:** You need an active account with your email hosting provider
2. **Domain in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone
3. **DNS record information:** Get required DNS records from your email provider
4. **Provider documentation:** Have access to your email provider's setup documentation

## Step 1: Set up your email hosting account

1. **Sign up with email provider:**
   - Choose and sign up for an email hosting service
   - Complete initial account setup
   - Add your domain to the account

2. **Complete provider setup:**
   - Follow your email provider's setup wizard
   - Create email accounts as needed
   - Note any domain verification requirements

3. **Get DNS record information:**
   - Your email provider will provide required DNS records
   - Common records include:
     - **MX records:** For email delivery
     - **TXT records:** For verification and SPF
     - **CNAME records:** For Autodiscover or other services
   - Save all DNS record information

## Step 2: Get DNS records from your provider

Different email providers require different DNS records. Common records include:

### MX records

**Purpose:** Direct email delivery to your email provider's mail servers.

**What you need:**
- Priority values
- Mail server hostnames

**Example:**
- Priority: 10
- Mail server: `mail.example-provider.com`

### TXT records

**Purpose:** Domain verification, SPF, and other authentication.

**Common TXT records:**
- **Domain verification:** TXT record with verification string
- **SPF:** TXT record with SPF policy (e.g., `v=spf1 include:example-provider.com ~all`)

### CNAME records

**Purpose:** Autodiscover, webmail, or other services.

**Common CNAME records:**
- **Autodiscover:** `autodiscover` → provider's Autodiscover server
- **Webmail:** `webmail` → provider's webmail server

### Other records

Some providers may require:
- **SRV records:** For specific services
- **Additional TXT records:** For additional verification or configuration

<info>
**Provider-specific requirements:** Each email provider has specific DNS requirements. Always refer to your provider's documentation for exact record values.
</info>

## Step 3: Configure DNS records in DNSimple

### Remove existing email services

If you're switching from another email service:

1. **Remove email forwarding (if applicable):**
   - Go to your domain's **Email Forwarding** tab
   - Delete all email forwards
   - This removes email forwarding MX records

2. **Remove old MX records:**
   - If you have old MX records from a previous provider, remove them
   - Go to your domain's **DNS** tab
   - Open the **Record Editor**
   - Delete old MX records

### Add MX records

1. **Navigate to DNS records:**
   - Go to your domain's **DNS** tab
   - Open the **Record Editor**

2. **Add each MX record:**
   - Click **Add record** and select **MX**
   - Leave the **Name** field blank (or enter `@`) for the root domain
   - Enter the priority value from your email provider
   - Enter the mail server hostname from your email provider
   - Click **Add record**
   - Repeat for all MX records provided

<warning>
**Priority values:** Lower numbers indicate higher priority. Ensure you enter priority values exactly as provided by your email provider.
</warning>

### Add TXT records

1. **Domain verification TXT record (if required):**
   - Click **Add record** and select **TXT**
   - Enter the name provided by your email provider (often `@` or blank)
   - Enter the verification string exactly as provided
   - Click **Add record**

2. **SPF TXT record:**
   - Click **Add record** and select **TXT**
   - Leave the **Name** field blank (or enter `@`) for the root domain
   - Enter the SPF record from your email provider
   - Ensure it starts with `v=spf1`
   - Click **Add record**

<warning>
**One SPF record:** A domain should have only one SPF record. If you already have an SPF record, modify it to include your email provider rather than creating a new one.
</info>

### Add CNAME records (if required)

1. **Autodiscover CNAME:**
   - Click **Add record** and select **CNAME**
   - Enter `autodiscover` in the **Name** field
   - Enter the Autodiscover hostname from your email provider
   - Click **Add record**

2. **Other CNAME records:**
   - Add any other CNAME records as provided by your email provider
   - Follow the same process

### Add other records (if required)

Add any additional records (SRV, etc.) as provided by your email provider, following the same process.

## Step 4: Verify domain ownership

Many email providers require domain verification:

1. **In your email provider's admin panel:**
   - Navigate to domain settings or verification
   - Initiate domain verification

2. **Wait for verification:**
   - DNS changes may take time to propagate
   - Your email provider will check for the verification record
   - Verification typically completes within a few hours

3. **Complete verification:**
   - Once verified, your email provider will confirm
   - You can proceed with email setup

## Step 5: Configure email authentication (recommended)

For better email deliverability, configure SPF, DKIM, and DMARC:

### SPF

Most email providers include SPF in their setup instructions. Ensure your SPF record includes your email provider:

```
v=spf1 include:your-provider.com ~all
```

<info>
For detailed SPF setup, see [Setting Up SPF Records](/articles/setting-up-spf/).
</info>

### DKIM

1. **Get DKIM information:**
   - Contact your email provider or check their documentation
   - Obtain DKIM selector and public key

2. **Add DKIM record:**
   - Add a TXT record at `selector._domainkey.yourdomain.com`
   - Enter the DKIM public key from your provider

<info>
For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/).
</info>

### DMARC

1. **Create DMARC record:**
   - Add a TXT record at `_dmarc.yourdomain.com`
   - Start with `p=none` for monitoring

<info>
For detailed DMARC setup, see [Setting Up DMARC](/articles/set-up-dmarc/).
</info>

## Step 6: Test email delivery

After configuring DNS records:

1. **Wait for DNS propagation:**
   - Allow time for DNS changes to propagate (typically a few minutes to a few hours)
   - Use [whatsmydns.net](https://www.whatsmydns.net/#MX) to check MX record propagation

2. **Verify MX records:**
   - Use `dig +short yourdomain.com MX` to verify MX records
   - Should show your email provider's MX records

3. **Send test emails:**
   - Send emails to addresses at your domain
   - Verify emails are delivered to your email provider's mailboxes
   - Test sending emails from your email accounts

4. **Test email clients:**
   - Configure email clients (Outlook, Apple Mail, etc.)
   - Test sending and receiving emails
   - Verify Autodiscover works (if configured)

## Common email providers

### FastMail

**DNS records typically needed:**
- MX records (provided by FastMail)
- SPF TXT record
- DKIM TXT records (if using custom domain)

**One-click service:** Available in DNSimple

### Rackspace

**DNS records typically needed:**
- MX records (provided by Rackspace)
- SPF TXT record
- CNAME records for webmail

**One-click service:** Available in DNSimple

### Zoho Mail

**DNS records typically needed:**
- MX records (provided by Zoho)
- TXT record for verification
- SPF TXT record
- DKIM TXT records

### Other providers

For other email providers:
- Check provider's documentation for exact DNS requirements
- Follow the general process outlined in this guide
- Contact your email provider's support if you need assistance

## Troubleshooting

### MX records not working

**Problem:** Emails aren't being delivered to your email provider.

**Solutions:**
1. **Verify MX records:** Use `dig +short yourdomain.com MX` to check MX records
2. **Check DNS propagation:** Wait for DNS changes to propagate
3. **Verify records in DNSimple:** Ensure MX records are correctly configured
4. **Check for conflicts:** Ensure no other email services are using MX records
5. **Contact your email provider:** They can help verify your configuration

### Domain verification failing

**Problem:** Your email provider can't verify domain ownership.

**Solutions:**
1. **Check TXT record:** Verify the verification TXT record exists and is correct
2. **Wait for propagation:** DNS changes can take time to propagate
3. **Verify record format:** Ensure the TXT record matches exactly what your provider provided
4. **Contact your email provider:** They can help troubleshoot verification issues

### Email authentication issues

**Problem:** SPF, DKIM, or DMARC not working.

**Solutions:**
1. **Verify SPF:** Check SPF record includes your email provider
2. **Verify DKIM:** Ensure DKIM records are at correct subdomains with correct keys
3. **Test authentication:** Send test emails and check headers
4. **See troubleshooting guides:** [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/)

## Best practices

- ✅ Follow your email provider's documentation exactly
- ✅ Configure SPF, DKIM, and DMARC for better deliverability
- ✅ Test email delivery after configuration
- ✅ Keep DNS records updated if your provider changes requirements
- ✅ Document your configuration for future reference
- ✅ Monitor email deliverability regularly

## Related topics

- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX record setup guide
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF configuration
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM configuration
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC configuration
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting
- [Services](/categories/services/) - One-click services available in DNSimple

## Have more questions?

If you have additional questions or need any assistance with integrating third-party email services, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
