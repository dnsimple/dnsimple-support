---
title: Integrating Microsoft 365 with DNSimple
excerpt: Step-by-step guide to integrating Microsoft 365 (Office 365) email with DNSimple DNS management.
meta: Complete guide to setting up Microsoft 365 email with DNSimple, including DNS configuration and verification steps.
categories:
- Emails
- Services
---

# Integrating Microsoft 365 with DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Microsoft 365 (formerly Office 365) provides professional email hosting with Outlook, along with Office applications and collaboration tools. This guide will help you integrate Microsoft 365 with DNSimple for seamless DNS management.

## Overview

Integrating Microsoft 365 with DNSimple involves:

1. Setting up your Microsoft 365 account
2. Configuring DNS records in DNSimple
3. Verifying domain ownership with Microsoft
4. Testing email delivery

<info>
**One-click service:** DNSimple offers a [one-click service](/articles/office-365-service/) that automatically configures most DNS records for Microsoft 365. This is the easiest way to set up Microsoft 365 integration.
</info>

## Prerequisites

Before integrating Microsoft 365 with DNSimple:

1. **Microsoft 365 account:** You need an active Microsoft 365 subscription
2. **Domain in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone
3. **Domain access:** You need access to manage DNS records for your domain
4. **Microsoft 365 setup:** Complete initial Microsoft 365 setup and domain verification

## Step 1: Set up Microsoft 365

1. **Sign up for Microsoft 365:**
   - Visit [microsoft.com/microsoft-365](https://www.microsoft.com/microsoft-365)
   - Choose a plan and sign up
   - Enter your domain name during signup

2. **Complete initial setup:**
   - Follow Microsoft's setup wizard
   - Create your first user account
   - Proceed to domain setup

3. **Get DNS record information:**
   - Microsoft will provide MX records, TXT records for verification, and other DNS records
   - Save this information for the next step
   - You'll need these records for DNSimple configuration

## Step 2: Configure DNS records in DNSimple

You can configure DNS records manually or use DNSimple's one-click service.

### Option 1: Using the one-click service (recommended)

The easiest way to integrate Microsoft 365 is using DNSimple's one-click service:

1. **Navigate to your domain:**
   - Use the account switcher to select the appropriate account
   - Click on your domain name from the Domain Names list
   - Click the **DNS** tab

2. **Add the one-click service:**
   - Scroll down to the **One-click services** section
   - Click **Add**
   - Select the **Productivity** tab
   - Find **Office 365** and click **Add**

3. **Enter Microsoft 365 records:**
   - Enter the TXT and MX records provided by Microsoft
   - Click **Complete Office 365 Setup**

4. **Complete setup:**
   - The service automatically configures required DNS records
   - Follow any additional prompts

<info>
The one-click service automatically configures MX records, TXT records, and other necessary DNS records for Microsoft 365.
</info>

### Option 2: Manual DNS configuration

If you prefer to configure DNS records manually:

1. **Get required DNS records from Microsoft:**
   - Log into your Microsoft 365 admin center
   - Go to **Settings** > **Domains**
   - Select your domain
   - Click **DNS records** or **Setup**
   - Note all required DNS records (MX, TXT, CNAME, etc.)

2. **Remove existing email forwarding (if applicable):**
   - If you're using DNSimple's email forwarding, you'll need to disable it first
   - Go to your domain's **Email Forwarding** tab
   - Delete all email forwards (this removes email forwarding MX records)

3. **Add MX records in DNSimple:**
   - Navigate to your domain's **DNS** tab
   - Open the **Record Editor**
   - Add the MX record provided by Microsoft:
     - Click **Add record** and select **MX**
     - Leave the **Name** field blank (or enter `@`) for the root domain
     - Enter the priority value from Microsoft (typically 0)
     - Enter the mail server hostname from Microsoft (typically `yourdomain-com.mail.protection.outlook.com`)
     - Click **Add record**

4. **Add verification TXT record:**
   - Microsoft requires a TXT record for domain verification
   - Add the TXT record in the Record Editor:
     - Click **Add record** and select **TXT**
     - Enter the name provided by Microsoft (often `@` or blank)
     - Enter the verification string from Microsoft
     - Click **Add record**

5. **Add other required records:**
   - Microsoft may require additional records:
     - **CNAME records:** For Autodiscover and other services
     - **TXT records:** For SPF and other configurations
   - Add these records as provided by Microsoft

## Step 3: Verify domain ownership

Microsoft requires domain verification to activate Microsoft 365:

1. **In Microsoft 365 admin center:**
   - Go to **Settings** > **Domains**
   - Select your domain
   - Click **Verify** or **Setup**

2. **Wait for verification:**
   - DNS changes may take time to propagate
   - Microsoft will automatically detect the verification record
   - Verification typically completes within a few hours

3. **Complete verification:**
   - Once verified, Microsoft will confirm domain ownership
   - You can proceed with Microsoft 365 setup

## Step 4: Configure email authentication (recommended)

For better email deliverability, configure SPF, DKIM, and DMARC:

### Set up SPF

Microsoft 365 requires SPF records. The one-click service should configure this, but you can verify:

1. **Check SPF record:**
   - Use `dig +short yourdomain.com TXT | grep "v=spf1"`
   - Should include `include:spf.protection.outlook.com`

2. **Add SPF if missing:**
   - See [Setting Up SPF Records](/articles/setting-up-spf/) for instructions
   - Use: `v=spf1 include:spf.protection.outlook.com ~all`

### Set up DKIM

1. **In Microsoft 365 admin center:**
   - Go to **Settings** > **Domains**
   - Select your domain
   - Click **DKIM**
   - Enable DKIM if not already enabled

2. **Get DKIM records:**
   - Microsoft will provide DKIM selectors and public keys
   - Typically two selectors (e.g., `selector1` and `selector2`)
   - Note each selector and its corresponding public key

3. **Add DKIM records in DNSimple:**
   - For each DKIM selector, add a TXT record:
     - **Name:** `selector1._domainkey` (replace `selector1` with your selector)
     - **Content:** The DKIM public key from Microsoft
   - Repeat for all DKIM selectors

4. **Verify DKIM:**
   - Use `dig +short selector1._domainkey.yourdomain.com TXT` (replace with your selector)
   - Send a test email and check headers for DKIM signature

<info>
For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/).
</info>

### Set up DMARC (optional but recommended)

1. **Create DMARC record:**
   - See [Setting Up DMARC](/articles/set-up-dmarc/) for instructions
   - Start with `p=none` for monitoring

2. **Add DMARC record:**
   - Add a TXT record at `_dmarc.yourdomain.com`
   - Use: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`

## Step 5: Configure additional services (optional)

Microsoft 365 may require additional DNS records for other services:

### Autodiscover

Microsoft 365 uses Autodiscover to automatically configure email clients:

1. **Add Autodiscover CNAME:**
   - Add a CNAME record:
     - **Name:** `autodiscover`
     - **Value:** `autodiscover.outlook.com`
   - This helps email clients automatically configure

### Skype for Business (if applicable)

If you're using Skype for Business:

1. **Add required records:**
   - Microsoft will provide specific DNS records
   - Add SRV records and other records as provided

## Step 6: Test email delivery

After configuring DNS records:

1. **Wait for DNS propagation:**
   - Allow time for DNS changes to propagate (typically a few minutes to a few hours)
   - Use [whatsmydns.net](https://www.whatsmydns.net/#MX) to check MX record propagation

2. **Verify MX records:**
   - Use `dig +short yourdomain.com MX` to verify MX records
   - Should show Microsoft 365's MX record

3. **Send test emails:**
   - Send emails to addresses at your domain
   - Verify emails are delivered to Microsoft 365 mailboxes
   - Test sending emails from Microsoft 365

4. **Test email clients:**
   - Configure Outlook or other email clients
   - Test sending and receiving emails
   - Verify Autodiscover works (if configured)

## Common configuration scenarios

### Migrating from email forwarding

If you're migrating from DNSimple's email forwarding to Microsoft 365:

1. **Set up Microsoft 365 first:**
   - Complete Microsoft 365 setup
   - Get MX records from Microsoft

2. **Remove email forwarding:**
   - Go to your domain's **Email Forwarding** tab
   - Delete all email forwards
   - This automatically removes email forwarding MX records

3. **Add Microsoft 365 MX records:**
   - Add Microsoft's MX records as described above
   - Wait for DNS propagation

4. **Test and verify:**
   - Test email delivery
   - Update email clients with new Microsoft 365 settings

### Using Microsoft 365 with existing email

If you already have email configured:

1. **Back up existing emails:**
   - Export important emails before migration
   - Note any email forwarding rules

2. **Plan the migration:**
   - Coordinate with your team
   - Schedule migration during low-traffic period if possible

3. **Follow migration steps:**
   - Set up Microsoft 365
   - Configure DNS records
   - Migrate email data (Microsoft provides migration tools)
   - Update email clients

## Troubleshooting

### MX records not working

**Problem:** Emails aren't being delivered to Microsoft 365.

**Solutions:**
1. **Verify MX records:** Use `dig +short yourdomain.com MX` to check MX records
2. **Check DNS propagation:** Wait for DNS changes to propagate
3. **Verify records in DNSimple:** Ensure MX records are correctly configured
4. **Check for conflicts:** Ensure no other email services are using MX records
5. **Verify hostname:** Ensure the MX record hostname matches exactly what Microsoft provided

### Domain verification failing

**Problem:** Microsoft can't verify domain ownership.

**Solutions:**
1. **Check TXT record:** Verify the verification TXT record exists and is correct
2. **Wait for propagation:** DNS changes can take time to propagate
3. **Verify record format:** Ensure the TXT record matches exactly what Microsoft provided
4. **Check for multiple records:** Ensure there's only one verification record

### Email authentication issues

**Problem:** SPF, DKIM, or DMARC not working.

**Solutions:**
1. **Verify SPF:** Check SPF record includes `include:spf.protection.outlook.com`
2. **Verify DKIM:** Ensure DKIM records are at correct subdomains with correct keys
3. **Test authentication:** Send test emails and check headers
4. **See troubleshooting guides:** [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/)

### Autodiscover not working

**Problem:** Email clients can't automatically configure.

**Solutions:**
1. **Verify CNAME:** Check Autodiscover CNAME record exists and is correct
2. **Check DNS propagation:** Wait for DNS changes to propagate
3. **Test Autodiscover:** Use Microsoft's Autodiscover test tool
4. **Manual configuration:** Configure email clients manually if needed

## Best practices

- ✅ Use the one-click service for easiest setup
- ✅ Configure SPF, DKIM, and DMARC for better deliverability
- ✅ Test email delivery after configuration
- ✅ Configure Autodiscover for easier email client setup
- ✅ Monitor email deliverability regularly
- ✅ Keep DNS records updated if Microsoft changes requirements
- ✅ Document your configuration for future reference

## Related topics

- [Office 365 One-click Service](/articles/office-365-service/) - Using the one-click service
- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX record setup guide
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF configuration
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM configuration
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC configuration
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting

## Have more questions?

If you have additional questions or need any assistance with integrating Microsoft 365 with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

