---
title: Email Hosting Support
excerpt: DNSimple does not provide email hosting, but you can use a third-party email hosting provider and manage your DNS records through DNSimple.
meta: DNSimple does not provide email hosting. Learn how to use third-party email hosting providers like Google Workspace, Microsoft 365, and FastMail with DNSimple DNS management.
categories:
- DNSimple
- Emails
---

# Email Hosting Support

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple does not provide email hosting. Our primary focus is domain management services, including DNS hosting, domain registration, and SSL certificates. You can use a third-party email hosting provider and manage all your DNS records through DNSimple. For forwarding, authentication records, and provider setup guides, see [Email Services at DNSimple](/articles/emails/).

## What is an email hosting service? {#what-is}

Email hosting services run mail servers that let you send and receive email using a custom address at your domain (e.g., `hello@yourdomain.com`). Professional hosting services offer more storage, better spam filters, and higher sending limits compared to free email services like Gmail and Yahoo.

## Email hosting options with DNSimple {#options}

If you need email hosting for a domain managed by DNSimple, you have several options:

- **[Google Workspace](/articles/google-workspace-service/):** Professional email with Gmail, Calendar, and Drive. DNSimple provides a one-click service for quick DNS setup.
- **[Microsoft 365](/articles/office-365-service/):** Professional email with Outlook, plus Office applications. DNSimple provides a one-click service for quick DNS setup.
- **[FastMail](/articles/fastmail-service/):** Privacy-focused email hosting. DNSimple provides a one-click service.
- **[Pobox](/articles/pobox-service/):** Email forwarding and hosting. DNSimple provides a one-click service.
- **[Rackspace Email](/articles/rackspace-email-service/):** Business email hosting. DNSimple provides a one-click service.
- **[Mailgun](/articles/mailgun-service/):** Transactional email delivery. DNSimple provides a one-click service.
- **[Postmark](/articles/postmark-service/):** Transactional email delivery. DNSimple provides a one-click service.
- **[Atmail](/articles/atmail-service/):** Email hosting and webmail. DNSimple provides a one-click service.
- **Other providers (Zoho, ProtonMail, etc.):** You can use any email hosting provider by manually adding their required DNS records.

See the full list of [one-click services for email](/articles/services/#email).

## Setting up a third-party email provider {#setup}

Integrating any email hosting provider with DNSimple follows the same general process:

<div class="section-steps" markdown="1">
##### Set up a third-party email provider

1. Sign up with your chosen email hosting provider and add your domain.
1. Get DNS records from the provider. They will typically provide [MX records](/articles/mx-record/) for email delivery, TXT records for domain verification, and possibly CNAME records for services like Autodiscover.
1. Configure DNS in DNSimple. Use a [one-click service](/categories/services/) if available for your provider, or add records manually in the [Record Editor](/articles/record-editor/).
1. Verify your domain with the email provider if required.
1. Test email delivery by sending a test message to an address at your domain.
</div>

> [!WARNING]
> If you are currently using DNSimple [email forwarding](/articles/email-forwarding/), you must disable it before setting up email hosting. Email forwarding and email hosting use different MX records and cannot run simultaneously on the same domain.

## Configuring email authentication {#authentication}

Regardless of which email provider you choose, set up email authentication to improve deliverability and protect against spoofing:

- **[SPF](/articles/spf-record/):** Specifies which mail servers are authorized to send email from your domain.
- **[DKIM](/articles/dkim-record/):** Adds a cryptographic signature to outgoing email. Your email provider will supply the DKIM key.
- **[DMARC](/articles/dmarc-record/):** Tells receiving servers what to do with messages that fail SPF or DKIM checks.

Your email provider's documentation will include the specific values for each of these records.

## Email forwarding as an alternative {#forwarding}

If you do not need full email hosting (sending, receiving, and storing messages), DNSimple's [email forwarding](/articles/email-forwarding/) service can redirect mail sent to addresses at your domain to an existing email account. Email forwarding is billed at $2 per month, per domain. Message limits and maximum number of email forwards are based on your [plan type](https://dnsimple.com/pricing).

## Have more questions?

If you have questions about setting up email hosting or using our one-click services, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
