---
title: What Is Email Forwarding?
excerpt: Explains what email forwarding is and how it works at DNSimple.
meta: Learn what email forwarding is, how it works, and how it compares to email hosting. Covers email redirect, catch-all forwarding, and email alias use cases.
categories:
- Emails
---

# What Is Email Forwarding?

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding is a service that automatically redirects emails sent to one address to another. When someone sends an email to an address at your domain (e.g., `hello@yourdomain.com`), the email is forwarded to a destination address you specify (e.g., `yourname@gmail.com`). At DNSimple, email forwarding lets you use professional addresses at your domain without a full email hosting service.

## How email forwarding works {#how-it-works}

When you set up email forwarding at DNSimple:

1. **DNS configuration:** DNSimple automatically adds the necessary DNS records (primarily MX records) to your domain to enable email forwarding.

2. **Email reception:** When someone sends an email to an address at your domain, DNSimple's email forwarding service receives it.

3. **Automatic forwarding:** The email is forwarded to the destination email address you configured.

4. **Delivery:** The forwarded email arrives in the inbox of your destination email address.

## Why use email forwarding {#benefits}

**Professional email addresses:** Use custom email addresses at your domain (like `info@yourdomain.com` or `support@yourdomain.com`) without the complexity of managing a full email server.

**Centralized management:** Forward multiple email addresses to a single inbox, making it easier to manage all your emails in one place.

**Flexibility:** Change where emails are forwarded without updating your email client or notifying senders.

**Cost-effective:** Email forwarding is more affordable than full email hosting services, making it ideal for small businesses or personal projects.

**No email client setup required:** Emails are forwarded to an existing email account, so you do not need to configure email clients or manage email servers.

## Email forwarding vs. email hosting: which do you need {#forwarding-vs-hosting}

Email forwarding and email hosting serve different purposes:

- **Email forwarding:** Redirects emails to another address. You cannot send emails from the forwarded address directly; you can only receive and forward them.

- **Email hosting:** Provides full email functionality, including the ability to send and receive emails, store messages, and manage email accounts.

DNSimple provides email forwarding but not email hosting. If you need full email hosting capabilities, you can use services like Google Workspace, Microsoft 365, or other providers, and configure their DNS records using DNSimple.

## Catch-all email forwarding {#catch-all}

DNSimple supports catch-all email forwarding, which forwards emails sent to any address at your domain that does not have a specific forwarding rule. With a catch-all forward configured, emails sent to `anything@yourdomain.com` are forwarded to your specified destination address, even if you have not created a specific forward for that address.

> [!NOTE]
> When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply. This ensures each email is forwarded just once, avoiding duplicates and helping protect your privacy.

## Email forwarding limits {#limits}

Email forwarding at DNSimple is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

## Getting started {#getting-started}

To start using email forwarding, you will need:

1. A domain managed in your DNSimple account with a primary (forward) zone. Email forwarding is not supported for secondary zones.
2. A DNSimple plan that includes email forwarding.
3. Email forwarding rules configured for the addresses you want to forward.

> [!WARNING]
> When you enable email forwarding, any existing MX records for your domain will be automatically removed. If you are currently using another email service provider, that service will stop working.

For step-by-step instructions, see [How to Set Up Email Forwarding](/articles/set-up-email-forwarding/).

## Have more questions?

If you have additional questions or need any assistance with email forwarding, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
