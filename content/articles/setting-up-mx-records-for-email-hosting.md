---
title: Setting Up MX Records for Email Hosting
excerpt: How to configure MX records for email hosting providers like Google Workspace, Microsoft 365, and other email services.
meta: Step-by-step guide to setting up MX records for email hosting providers, ensuring proper email delivery for your domain.
categories:
- Emails
- DNS
---

# Setting Up MX Records for Email Hosting

### Table of Contents {#toc}

* TOC
{:toc}

---

MX records tell other mail servers where to deliver emails sent to addresses at your domain. When you use an email hosting service like Google Workspace, Microsoft 365, or another provider, you need to configure MX records to point to that service's mail servers.

## Understanding MX records for email hosting {#understanding}

[MX records](/articles/mx-record/) specify which mail servers are responsible for accepting email messages for your domain. Each MX record includes:

- **Priority value:** A number indicating the preference order (lower numbers = higher priority)
- **Mail server hostname:** The domain name of the mail server (e.g., `aspmx.l.google.com`)

When you configure email hosting, your email provider will give you specific MX records to add to your DNS zone. These records direct incoming email to your provider's mail servers.

## Prerequisites {#prerequisites}

Before setting up MX records for email hosting:

1. **Have a domain managed in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone.
2. **Choose an email hosting provider:** Select a service like Google Workspace, Microsoft 365, FastMail, or another email hosting provider.
3. **Get MX record information:** Your email provider will provide the specific MX records you need to configure.

> [!WARNING]
> If you are currently using DNSimple's email forwarding service, enabling email hosting will require removing the email forwarding MX records. Email forwarding and email hosting cannot be used simultaneously because both use MX records, and a domain can only have one set of MX records.

## Setting up MX records for Google Workspace {#google-workspace}

Google Workspace provides specific MX records that you need to add to your DNS zone.

### Using the one-click service (recommended)

The easiest way to set up Google Workspace is using DNSimple's [one-click service](/articles/google-workspace-service/):

<div class="section-steps" markdown="1">
##### Set up Google Workspace with the one-click service

1. Navigate to your domain's <label>DNS</label> tab.
1. Scroll to the <label>One-click services</label> section and click <label>Add</label>.
1. Select <label>Google Workspace</label> from the Productivity tab.
1. Follow the setup instructions.
</div>

The one-click service automatically configures all required DNS records, including MX records.

### Manual MX record configuration

If you prefer to configure MX records manually:

1. Get the MX records from Google Workspace. Google typically provides these MX records:

| Priority | Mail Server |
|:---|:---|
| 1 | `aspmx.l.google.com` |
| 5 | `alt1.aspmx.l.google.com` |
| 5 | `alt2.aspmx.l.google.com` |
| 10 | `aspmx2.googlemail.com` |
| 10 | `aspmx3.googlemail.com` |

<div class="section-steps" markdown="1">
##### Add MX records manually

1. In DNSimple, navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records (if you are switching from email forwarding or another provider).
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value.
1. Enter the mail server hostname.
1. Click <label>Add record</label>.
1. Repeat for all MX records provided by Google.
</div>

> [!TIP]
> Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) to verify your DNS configuration.

## Setting up MX records for Microsoft 365 {#microsoft-365}

Microsoft 365 (formerly Office 365) also provides specific MX records for email hosting.

### Using the one-click service (recommended)

The easiest way to set up Microsoft 365 is using DNSimple's [one-click service](/articles/office-365-service/):

<div class="section-steps" markdown="1">
##### Set up Microsoft 365 with the one-click service

1. Complete the setup of your custom domain with Microsoft and note the provided TXT and MX records.
1. Navigate to your domain's <label>DNS</label> tab.
1. Scroll to the <label>One-click services</label> section and click <label>Add</label>.
1. Select <label>Office 365</label> from the Productivity tab.
1. Enter the provided TXT and MX records.
1. Click <label>Complete Office 365 Setup</label>.
</div>

### Manual MX record configuration

If you prefer to configure MX records manually:

1. Get the MX records from Microsoft 365. Microsoft typically provides MX records like:

| Priority | Mail Server |
|:---|:---|
| 0 | `yourdomain-com.mail.protection.outlook.com` |

<div class="section-steps" markdown="1">
##### Add Microsoft 365 MX records manually

1. In DNSimple, navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value (typically 0 for Microsoft 365).
1. Enter the mail server hostname provided by Microsoft.
1. Click <label>Add record</label>.
</div>

## Setting up MX records for other email providers {#other-providers}

For other email hosting providers (FastMail, Rackspace, etc.):

<div class="section-steps" markdown="1">
##### Add MX records for other providers

1. Get MX record information from your email provider or their documentation.
1. In DNSimple, navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records if you are switching providers.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value provided by your email provider.
1. Enter the mail server hostname provided by your email provider.
1. Click <label>Add record</label>.
1. Repeat for all MX records provided by your email provider.
</div>

## Verifying MX records {#verifying}

After configuring MX records, verify they are working correctly:

1. **Check DNS propagation:** Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to verify your MX records have propagated globally.
2. **Use dig command:** Test MX records using the `dig` command:
   ```
   dig +short yourdomain.com MX
   ```
3. **Test email delivery:** Send a test email to an address at your domain to verify delivery is working.
4. **Check with your provider:** Many email providers offer verification tools (like Google's MX checker) to confirm your configuration.

## Common considerations {#considerations}

**DNS propagation:** After adding or modifying MX records, it may take time for changes to propagate globally. This typically takes a few minutes to a few hours.

**Email service transition:** When switching from one email provider to another, plan for a transition period. Emails may be delivered to the old provider until DNS fully propagates.

**Multiple MX records:** Most email providers use multiple MX records with different priorities for redundancy. Always add all MX records provided by your email provider.

**Priority values:** Lower priority numbers indicate higher preference. Mail servers will try to deliver to the lowest priority server first.

## Troubleshooting {#troubleshooting}

If emails are not being delivered after setting up MX records:

1. **Verify MX records are published:** Use `dig` or online tools to confirm your MX records are visible.
2. **Check priority values:** Ensure priority values match what your email provider specified.
3. **Verify hostnames:** Ensure mail server hostnames are exactly as provided by your email provider.
4. **Check for conflicts:** Ensure you do not have conflicting MX records or email forwarding enabled.
5. **Wait for propagation:** Allow time for DNS changes to propagate (up to 48 hours, though typically much faster).

For more information, see [Managing MX Records When Changing Email Providers](/articles/managing-mx-records-when-changing-email-providers/).

## Have more questions?

If you have additional questions or need any assistance with setting up MX records for email hosting, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
