---
title: Integrating Google Workspace with DNSimple
excerpt: Step-by-step guide to integrating Google Workspace email with DNSimple DNS management.
meta: Complete guide to setting up Google Workspace email with DNSimple, including DNS configuration and verification steps.
categories:
- Emails
- Services
---

# Integrating Google Workspace with DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Google Workspace (formerly G Suite) provides professional email hosting with Gmail, Calendar, Drive, and other productivity tools. Integrating it with DNSimple gives you seamless DNS management for your email configuration.

## Overview {#overview}

Integrating Google Workspace with DNSimple involves:

1. Setting up your Google Workspace account
2. Configuring DNS records in DNSimple
3. Verifying domain ownership with Google
4. Testing email delivery

> [!TIP]
> DNSimple offers a [one-click service](/articles/google-workspace-service/) that automatically configures most DNS records for Google Workspace. This is the easiest way to set up Google Workspace integration.

## Prerequisites {#prerequisites}

Before integrating Google Workspace with DNSimple:

1. **Google Workspace account:** You need an active Google Workspace account
2. **Domain in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone
3. **Domain access:** You need access to manage DNS records for your domain
4. **Google Workspace setup:** Complete initial Google Workspace setup and domain verification

## Step 1: Set up Google Workspace {#setup-google}

1. **Sign up for Google Workspace:**
   - Visit [workspace.google.com](https://workspace.google.com)
   - Choose a plan and sign up
   - Enter your domain name during signup

2. **Complete initial setup:**
   - Follow Google's setup wizard
   - Create your first user account
   - Note any DNS records Google provides

3. **Get DNS record information:**
   - Google will provide MX records, TXT records for verification, and other DNS records
   - Save this information for the next step

## Step 2: Configure DNS records in DNSimple {#configure-dns}

You can configure DNS records manually or use DNSimple's one-click service.

### Option 1: Using the one-click service (recommended) {#one-click}

The easiest way to integrate Google Workspace is using DNSimple's one-click service:

<div class="section-steps" markdown="1">
##### Add Google Workspace with the one-click service

1. Use the account switcher to select the appropriate account.
1. Click on your domain name from the <label>Domain Names</label> list.
1. Click the <label>DNS</label> tab.
1. Scroll down to the <label>One-click services</label> section and click <label>Add</label>.
1. Select the <label>Productivity</label> tab.
1. Find <label>Google Workspace</label> and click <label>Add</label>.
1. Follow any additional prompts.
</div>

> [!NOTE]
> The one-click service automatically configures MX records and other necessary DNS records for Google Workspace.

### Option 2: Manual DNS configuration {#manual}

If you prefer to configure DNS records manually:

1. **Get required DNS records from Google:**
   - Log into your Google Workspace admin console
   - Navigate to <label>Apps</label> > <label>Google Workspace</label> > <label>Gmail</label>
   - Click <label>Set up email (MX records)</label>
   - Note the MX records provided

2. **Remove existing email forwarding (if applicable):**
   - If you are using DNSimple's email forwarding, you need to disable it first
   - Go to your domain's <label>Email Forwarding</label> tab
   - Delete all email forwards (this removes email forwarding MX records)

<div class="section-steps" markdown="1">
##### Add MX records manually

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value from Google.
1. Enter the mail server hostname from Google.
1. Click <label>Add record</label>.
1. Repeat for all MX records provided by Google.
</div>

4. **Add verification TXT record (if needed):**
   - Google may require a TXT record for domain verification
   - In the Record Editor, click <label>Add record</label> and select **TXT**
   - Enter the name provided by Google (often `@` or blank)
   - Enter the verification string from Google
   - Click <label>Add record</label>

5. **Add other required records:**
   - Google may require additional records (CNAME, TXT) for other services
   - Add these records as provided by Google

## Step 3: Verify domain ownership {#verify}

Google requires domain verification to activate Google Workspace:

1. **In Google Workspace admin console:**
   - Go to <label>Domains</label> in the admin console
   - Click <label>Verify domain ownership</label>
   - Google will check for the verification TXT record

2. **Wait for verification:**
   - DNS changes may take time to propagate
   - Google will automatically detect the verification record
   - Verification typically completes within a few hours

3. **Complete verification:**
   - Once verified, Google will confirm domain ownership
   - You can proceed with Google Workspace setup

## Step 4: Configure email authentication (recommended) {#authentication}

For better email deliverability, configure SPF, DKIM, and DMARC:

### Set up SPF

Google Workspace requires SPF records. The one-click service should configure this, but you can verify:

1. **Check SPF record:**
   - Use `dig +short yourdomain.com TXT | grep "v=spf1"`
   - Should include `include:_spf.google.com`

2. **Add SPF if missing:**
   - See [Setting Up SPF Records](/articles/setting-up-spf/) for instructions
   - Use: `v=spf1 include:_spf.google.com ~all`

### Set up DKIM

1. **In Google Workspace admin console:**
   - Go to <label>Apps</label> > <label>Google Workspace</label> > <label>Gmail</label>
   - Click <label>Authenticate email</label>
   - Generate a DKIM key if not already generated

2. **Get DKIM record:**
   - Google will provide a DKIM selector and public key
   - Note the selector (e.g., `google`) and the public key

3. **Add DKIM record in DNSimple:**
   - In the Record Editor, add a TXT record:
     - **Name:** `google._domainkey` (replace `google` with your selector)
     - **Content:** The DKIM public key from Google
   - Click <label>Add record</label>

4. **Verify DKIM:**
   - Use `dig +short google._domainkey.yourdomain.com TXT` (replace `google` with your selector)
   - Send a test email and check headers for DKIM signature

> [!NOTE]
> For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/).

### Set up DMARC (optional but recommended)

1. **Create DMARC record:**
   - See [Setting Up DMARC](/articles/set-up-dmarc/) for instructions
   - Start with `p=none` for monitoring

2. **Add DMARC record:**
   - Add a TXT record at `_dmarc.yourdomain.com`
   - Use: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`

## Step 5: Test email delivery {#test}

After configuring DNS records:

1. **Wait for DNS propagation:**
   - Allow time for DNS changes to propagate (typically a few minutes to a few hours)
   - Use [whatsmydns.net](https://www.whatsmydns.net/#MX) to check MX record propagation

2. **Verify MX records:**
   - Use `dig +short yourdomain.com MX` to verify MX records
   - Should show Google's MX records

3. **Send test emails:**
   - Send emails to addresses at your domain
   - Verify emails are delivered to Google Workspace mailboxes
   - Test sending emails from Google Workspace

4. **Use Google's MX checker:**
   - Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx)
   - Use it to verify your DNS configuration

## Common configuration scenarios {#scenarios}

### Migrating from email forwarding

If you are migrating from DNSimple's email forwarding to Google Workspace:

1. **Set up Google Workspace first:**
   - Complete Google Workspace setup
   - Get MX records from Google

2. **Remove email forwarding:**
   - Go to your domain's <label>Email Forwarding</label> tab
   - Delete all email forwards
   - This automatically removes email forwarding MX records

3. **Add Google Workspace MX records:**
   - Add Google's MX records as described above
   - Wait for DNS propagation

4. **Test and verify:**
   - Test email delivery
   - Update email clients with new Google Workspace settings

### Using Google Workspace with existing email

If you already have email configured:

1. **Back up existing emails:**
   - Export important emails before migration
   - Note any email forwarding rules

2. **Plan the migration:**
   - Coordinate with your team
   - Schedule migration during low-traffic period if possible

3. **Follow migration steps:**
   - Set up Google Workspace
   - Configure DNS records
   - Migrate email data (if needed)
   - Update email clients

## Troubleshooting {#troubleshooting}

### MX records not working

**Problem:** Emails are not being delivered to Google Workspace.

**Solutions:**
1. **Verify MX records:** Use `dig +short yourdomain.com MX` to check MX records
2. **Check DNS propagation:** Wait for DNS changes to propagate
3. **Verify records in DNSimple:** Ensure MX records are correctly configured
4. **Check for conflicts:** Ensure no other email services are using MX records
5. **Use Google's MX checker:** Use Google's tool to verify configuration

### Domain verification failing

**Problem:** Google cannot verify domain ownership.

**Solutions:**
1. **Check TXT record:** Verify the verification TXT record exists and is correct
2. **Wait for propagation:** DNS changes can take time to propagate
3. **Verify record format:** Ensure the TXT record matches exactly what Google provided
4. **Check for multiple records:** Ensure there is only one verification record

### Email authentication issues

**Problem:** SPF, DKIM, or DMARC not working.

**Solutions:**
1. **Verify SPF:** Check SPF record includes `include:_spf.google.com`
2. **Verify DKIM:** Ensure DKIM record is at correct subdomain with correct key
3. **Test authentication:** Send test emails and check headers
4. **See troubleshooting guides:** [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/)

## Best practices {#best-practices}

- Use the one-click service for easiest setup
- Configure SPF, DKIM, and DMARC for better deliverability
- Test email delivery after configuration
- Monitor email deliverability regularly
- Keep DNS records updated if Google changes requirements
- Document your configuration for future reference

## Related topics

- [Google Workspace One-click Service](/articles/google-workspace-service/) - Using the one-click service
- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX record setup guide
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF configuration
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM configuration
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC configuration
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting

## Have more questions?

If you have additional questions or need any assistance with integrating Google Workspace with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
