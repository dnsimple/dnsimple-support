---
title: What Is Email Forwarding?
excerpt: Explains what email forwarding is and how it works at DNSimple.
meta: Learn what email forwarding is, how it works, and how it can help you manage email for your domains effectively.
categories:
- Emails
---

# What Is Email Forwarding?

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is email forwarding?

Email forwarding is a service that automatically redirects emails sent to one email address to another email address. When someone sends an email to an address at your domain (e.g., `hello@yourdomain.com`), the email is automatically forwarded to a different email address that you specify (e.g., `yourname@gmail.com`).

At DNSimple, email forwarding allows you to receive emails sent to addresses at your domain without needing a full email hosting service. This is particularly useful if you want to use a professional email address (like `contact@yourdomain.com`) but prefer to receive and manage emails through an existing email account like Gmail, Outlook, or another email provider.

## How email forwarding works

When you set up email forwarding at DNSimple:

1. **DNS configuration:** DNSimple automatically adds the necessary DNS records (primarily MX records) to your domain to enable email forwarding.

2. **Email reception:** When someone sends an email to an address at your domain, the email is received by DNSimple's email forwarding service.

3. **Automatic forwarding:** The email is then automatically forwarded to the destination email address you've configured.

4. **Delivery:** The forwarded email arrives in the inbox of your destination email address, appearing as if it was sent directly to that address.

## Key benefits of email forwarding

**Professional email addresses:** Use custom email addresses at your domain (like `info@yourdomain.com` or `support@yourdomain.com`) without the complexity of managing a full email server.

**Centralized management:** Forward multiple email addresses to a single inbox, making it easier to manage all your emails in one place.

**Flexibility:** Change where emails are forwarded without needing to update your email client or notify senders.

**Cost-effective:** Email forwarding is more affordable than full email hosting services, making it ideal for small businesses or personal projects.

**No email client setup required:** Since emails are forwarded to an existing email account, you don't need to configure email clients or manage email servers.

## Email forwarding vs. email hosting

It's important to understand the difference between email forwarding and email hosting:

- **Email forwarding:** Redirects emails to another address. You cannot send emails from the forwarded address directly; you can only receive and forward them.

- **Email hosting:** Provides full email functionality, including the ability to send and receive emails, store messages, and manage email accounts.

DNSimple provides email forwarding but not email hosting. If you need full email hosting capabilities, you can use email hosting services like Google Workspace, Microsoft 365, or other providers, and configure their DNS records using DNSimple.

## Catch-all email forwarding

DNSimple supports catch-all email forwarding, which forwards emails sent to any address at your domain that doesn't have a specific forwarding rule. This is useful if you want to receive emails sent to any address at your domain, even if you haven't explicitly created a forwarding rule for that specific address.

For example, with a catch-all forward configured, emails sent to `anything@yourdomain.com` would be forwarded to your specified destination address, even if you haven't created a specific forward for `anything@yourdomain.com`.

<info>
When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply. This ensures each email is forwarded just once, avoiding duplicates and helping protect your privacy.
</info>

## Email forwarding limits

Email forwarding at DNSimple is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

## Getting started with email forwarding

To start using email forwarding, you'll need to:

1. Have a domain managed in your DNSimple account with a primary (forward) zone. Email forwarding is not supported for secondary zones.
2. Be subscribed to a DNSimple plan that includes email forwarding.
3. Configure email forwarding rules for the addresses you want to forward.

<warning>
**Important:** When you enable email forwarding, any existing MX records for your domain will be automatically removed. If you're currently using another email service provider, that service will stop working.
</warning>

For step-by-step instructions, see [Enabling Email Forwarding](/articles/enabling-email-forwarding/).

## Have more questions?

If you have additional questions or need any assistance with email forwarding, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


