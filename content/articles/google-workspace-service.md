---
title: Google Workspace (formerly G Suite) Service
excerpt: How to set up Google Workspace DNS using DNSimple's one-click service or manual configuration.
meta: Set up Google Workspace email with DNSimple using the one-click service or manual DNS configuration, including MX records, domain verification, and email authentication.
categories:
- Services
- Emails
---

# Google Workspace Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[Google Workspace](https://workspace.google.com) provides cloud-based email with Gmail, calendars, Drive, and other productivity tools. You can configure the required DNS records in DNSimple using the one-click service or by adding records manually.

## Prerequisites {#prerequisites}

Before configuring Google Workspace DNS in DNSimple:

1. You need an active [Google Workspace](https://workspace.google.com) account.
2. Your domain must be in your DNSimple account with a primary (forward) zone.
3. Complete initial Google Workspace setup and note the DNS records Google provides.

> [!WARNING]
> If you are currently using DNSimple [email forwarding](/articles/email-forwarding/), you must disable it before setting up Google Workspace. Email forwarding and email hosting cannot be used simultaneously because both rely on [MX records](/articles/mx-record/).

## Setting up with the one-click service (recommended) {#one-click}

<div class="section-steps" markdown="1">
##### Add Google Workspace with the one-click service

1. From the domain list, click on the domain name you want to update.
1. Click the <label>DNS</label> tab on the left side.
1. Scroll down to the <label>One-click services</label> card, and click <label>Add</label>.
    ![Add One Click Service](/files/add-one-click-service.png)
1. Select the <label>Productivity</label> tab, and scroll down to the Google Workspace service. Click <label>Add</label>.
    ![Add Service](/files/services-google-apps.png)
</div>

The one-click service automatically configures MX records and other required DNS records. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).

## Setting up with manual DNS configuration {#manual}

If you prefer to configure DNS records manually, or if you need to customize the configuration:

1. Get the required DNS records from the Google Workspace admin console under <label>Apps</label> > <label>Google Workspace</label> > <label>Gmail</label> > <label>Set up email (MX records)</label>.

2. Google typically provides these MX records:

| Priority | Mail Server |
|:---|:---|
| 1 | `aspmx.l.google.com` |
| 5 | `alt1.aspmx.l.google.com` |
| 5 | `alt2.aspmx.l.google.com` |
| 10 | `aspmx2.googlemail.com` |
| 10 | `aspmx3.googlemail.com` |

<div class="section-steps" markdown="1">
##### Add MX records manually

1. Navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records if you are switching from email forwarding or another provider.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value from Google.
1. Enter the mail server hostname from Google.
1. Click <label>Add record</label>.
1. Repeat for each MX record.
</div>

If Google requires a TXT record for domain verification, add it as a TXT record at the root of your domain (`@`).

## Verifying your domain with Google {#verify}

Google requires domain verification to activate Google Workspace. After adding the DNS records:

1. In the Google Workspace admin console, go to <label>Domains</label> and click <label>Verify domain ownership</label>.
2. Google will check for the verification TXT record. This typically completes within a few hours.

## Verifying MX records {#verify-mx}

Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) that verifies your DNS configuration and suggests improvements with links to relevant support articles.

You can also verify MX records with `dig`:

```
dig +short yourdomain.com MX
```

## Configuring email authentication {#authentication}

For better email deliverability, set up [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) for your domain.

**SPF:** The one-click service configures an SPF record automatically. If you set up manually, your SPF record should include `include:_spf.google.com`. See [What Is an SPF Record?](/articles/spf-record/) for details.

**DKIM:** Generate a DKIM key in the Google Workspace admin console under <label>Apps</label> > <label>Google Workspace</label> > <label>Gmail</label> > <label>Authenticate email</label>, then add the DKIM TXT record in DNSimple. See [Setting Up DKIM](/articles/set-up-dkim/) for instructions.

**DMARC:** Add a DMARC record to monitor and protect against spoofing. See [Setting Up DMARC](/articles/set-up-dmarc/) for instructions.

## Troubleshooting {#troubleshooting}

**Emails not being delivered:** Verify MX records are correctly configured with `dig +short yourdomain.com MX`. Check [whatsmydns.net](https://www.whatsmydns.net/#MX) for propagation status. Ensure no conflicting MX records or email forwarding is still active.

**Domain verification failing:** Confirm the TXT verification record matches exactly what Google provided. DNS changes can take up to a few hours to propagate.

<!-- Link depends on PR #1704 (Email Troubleshooting - Authentication) -->
**Email authentication failures:** Verify your SPF record includes `include:_spf.google.com`. Check DKIM records are at the correct subdomain. See [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) for more help.

## Have more questions?

If you have additional questions or need any assistance setting up Google Workspace with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
