---
title: Microsoft 365 (formerly Office 365) Service
excerpt: How to set up Microsoft 365 DNS using DNSimple's one-click service or manual configuration.
meta: Set up Microsoft 365 email with DNSimple using the one-click service or manual DNS configuration, including MX records, domain verification, and email authentication.
categories:
- Services
- Emails
---

# Microsoft 365 Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[Microsoft 365](https://www.microsoft.com/microsoft-365) (formerly Office 365) provides professional email hosting with Outlook, along with Office applications and collaboration tools. You can configure the required DNS records in DNSimple using the one-click service or by adding records manually.

## Prerequisites {#prerequisites}

Before configuring Microsoft 365 DNS in DNSimple:

1. You need an active [Microsoft 365](https://www.microsoft.com/microsoft-365) subscription.
2. Your domain must be in your DNSimple account with a primary (forward) zone.
3. Complete the initial Microsoft 365 domain setup and note the TXT and MX records Microsoft provides.

> [!WARNING]
> If you are currently using DNSimple [email forwarding](/articles/email-forwarding/), you must disable it before setting up Microsoft 365. Email forwarding and email hosting cannot be used simultaneously because both rely on [MX records](/articles/mx-record/).

## Setting up with the one-click service (recommended) {#one-click}

<div class="section-steps" markdown="1">
##### Add Microsoft 365 with the one-click service

1. From the domain list, click on the domain name you want to update.
1. Click the <label>DNS</label> tab on the left side.
1. Scroll down to the <label>One-click services</label> card, and click <label>Add</label>.
    ![Add One Click Service](/files/add-one-click-service.png)
1. Select the <label>Productivity</label> tab, and scroll down to the Office 365 service. Click <label>Add</label>.
    ![Add Service](/files/services-office-365.png)
1. Enter the TXT and MX records provided by Microsoft, then click <label>Complete Office 365 Setup</label>.
</div>

The one-click service automatically configures MX records and other required DNS records. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).

## Setting up with manual DNS configuration {#manual}

If you prefer to configure DNS records manually:

1. Get the required DNS records from the Microsoft 365 admin center under <label>Settings</label> > <label>Domains</label> > your domain > <label>DNS records</label>.

2. Microsoft typically provides an MX record like:

| Priority | Mail Server |
|:---|:---|
| 0 | `yourdomain-com.mail.protection.outlook.com` |

<div class="section-steps" markdown="1">
##### Add MX records manually

1. Navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records if you are switching from email forwarding or another provider.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value from Microsoft (typically 0).
1. Enter the mail server hostname from Microsoft.
1. Click <label>Add record</label>.
</div>

Microsoft may also require additional records:

- **TXT record** for domain verification
- **CNAME record** for Autodiscover (`autodiscover` pointing to `autodiscover.outlook.com`)
- **Additional CNAME or TXT records** for other Microsoft 365 services

Add these records as provided by the Microsoft 365 admin center.

## Verifying your domain with Microsoft {#verify}

Microsoft requires domain verification to activate Microsoft 365. After adding the DNS records:

1. In the Microsoft 365 admin center, go to <label>Settings</label> > <label>Domains</label> and select your domain.
2. Click <label>Verify</label>. Microsoft will check for the verification TXT record. This typically completes within a few hours.

## Configuring email authentication {#authentication}

For better email deliverability, set up [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), and [DMARC](/articles/dmarc-record/) for your domain.

**SPF:** Your SPF record should include `include:spf.protection.outlook.com`. See [What Is an SPF Record?](/articles/spf-record/) for details.

**DKIM:** Enable DKIM in the Microsoft 365 admin center under <label>Settings</label> > <label>Domains</label> > your domain > <label>DKIM</label>. Microsoft provides two DKIM selectors (`selector1` and `selector2`) with corresponding CNAME or TXT records to add in DNSimple. See [Set Up DKIM](/articles/set-up-dkim/) for instructions.

**DMARC:** Add a DMARC record to monitor and protect against spoofing. See [Set Up DMARC](/articles/set-up-dmarc/) for instructions.

## Troubleshooting {#troubleshooting}

**Emails not being delivered:** Verify MX records are correctly configured with `dig +short yourdomain.com MX`. Check [whatsmydns.net](https://www.whatsmydns.net/#MX) for propagation status. Ensure no conflicting MX records or email forwarding is still active.

**Domain verification failing:** Confirm the TXT verification record matches exactly what Microsoft provided. DNS changes can take up to a few hours to propagate.

**Autodiscover not working:** Verify the `autodiscover` CNAME record points to `autodiscover.outlook.com`. If automatic configuration fails, configure email clients manually using Microsoft's server settings.

**Email authentication failures:** Verify your SPF record includes `include:spf.protection.outlook.com`. Check DKIM records are at the correct subdomains. For setup details, see [SPF records](/articles/spf-record/), [Set Up DKIM](/articles/set-up-dkim/), and [Set Up DMARC](/articles/set-up-dmarc/).

## Have more questions?

If you have additional questions or need any assistance setting up Microsoft 365 with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
