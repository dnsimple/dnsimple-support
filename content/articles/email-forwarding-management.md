---
title: Email Forwarding Management in DNSimple
excerpt: An illustrated guide to email forwarding management in DNSimple.
meta: Learn how to effectively manage email forwarding in DNSimple with our comprehensive illustrated guide, ensuring your email forwarding is configured correctly.
categories:
- Emails
---

# Email Forwarding Management in DNSimple

### Table of Contents {#toc}
* TOC
 {:toc}
---

Email forwarding is applied on a per-domain basis.

 ![screenshot of UI for email forwarding on a domain](/files/forwarding-tab.png)

1. **Email Forwarding** tab - Email forwarding management options for the domain.
1. **Add email forward** button - Create a new email forward.
1. **Current Email Forwards** section - List of all configured email forwards.

## View email forwarding configuration

![screenshot of viewing email forwarding configuration](/files/new-email-forward.png)

1. **From** field - The local part of the email address to forward from (e.g., `hello` for `hello@yourdomain.com`).
1. **To** field - The full email address where emails should be forwarded.
1. **Add email forward** button - Creates the email forward.

## Manage email forwards

![screenshot of managing email forwards](/files/email-forwarding-removal.png)

1. **Current Email Forwards** section - Lists all configured email forwards for the domain.
1. **Edit** button (pencil icon) - Modify an existing email forward.
1. **Delete** button (trash can icon) - Remove an email forward.

## Create email forward from dashboard

![Adding an email forward](/files/add-button-email-forward.png)

1. **Add** button - Opens the menu to add new resources.
1. **Email forward** option - Select to create a new email forward.
1. **Domain selector** - Choose the domain to create the forward for (only zones resolving through DNSimple are shown).

## Catch-all email forwarding

To create a catch-all email forward, select the **Catch-all** option when creating a new email forward. This will forward emails sent to any address at your domain that doesn't have a specific forwarding rule.

<info>
When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply.
</info>

## Email forwarding limits

Email forwarding is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

## Internationalized Domain Names (IDN) support

Our email forwarding provider does not support International Domain Names (domains with non-standard characters). You cannot use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Have more questions?

If you have any questions or need assistance with your email forwarding management, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


