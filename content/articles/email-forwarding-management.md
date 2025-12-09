---
title: Email Forwarding Management in DNSimple
excerpt: Visual reference guide to the email forwarding interface in DNSimple with annotated screenshots.
meta: Illustrated guide to understanding the email forwarding management interface in DNSimple, including UI elements and their functions.
categories:
- Emails
---

# Email Forwarding Management in DNSimple

This article provides a visual reference guide to the email forwarding interface in DNSimple, with annotated screenshots showing where to find different features and settings. For step-by-step instructions on creating and managing email forwards, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

### Table of Contents {#toc}
* TOC
 {:toc}
---

## Overview

Email forwarding is applied on a per-domain basis. The following sections explain the different parts of the email forwarding interface.

 ![screenshot of UI for email forwarding on a domain](/files/forwarding-tab.png)

1. **Email Forwarding** tab - Email forwarding management options for the domain.
1. **Add** button - Create a new email forward.
1. Current Email Forwards section - List of all configured email forwards.

## Email forward creation form

![screenshot of viewing email forwarding configuration](/files/new-email-forward.png)

When creating a new email forward, you'll see the following fields and options:

1. **From** field - Enter the local part of the email address to forward from (e.g., `hello` for `hello@yourdomain.com`). Do not include the domain name.
1. **To** field - Enter the full email address where emails should be forwarded (e.g., `yourname@gmail.com`).
1. **Catch-all** option - Check this box to create a catch-all forward that captures emails to any address at your domain.
1. **Add email forward** button - Click to create the email forward.

For detailed step-by-step instructions, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Email forwards list

![screenshot of managing email forwards](/files/email-forwarding-removal.png)

The **Current Email Forwards** section displays all configured email forwards for the domain. Each forward shows:

1. **Source address (From)** - The local part of the email address being forwarded.
1. **Destination address (To)** - The full email address where emails are forwarded.
1. **Edit** button (pencil icon) - Click to modify an existing email forward's destination address.
1. **Delete** button (trash can icon) - Click to remove an email forward permanently.

For step-by-step instructions on editing and deleting forwards, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Creating email forwards from the dashboard

![Adding an email forward](/files/add-button-email-forward.png)

You can also create email forwards directly from the Dashboard:

1. **Add** button - Located on the Dashboard, opens a menu to add new resources.
1. **Email forward** option - Select this option from the menu to create a new email forward.
1. **Domain selector** - In the form, choose the domain to create the forward for. Note that only zones resolving through DNSimple are shown in the list.

For complete step-by-step instructions, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Catch-all email forwarding

The catch-all option allows you to forward emails sent to any address at your domain that doesn't have a specific forwarding rule. When creating a new email forward, you can select the **Catch-all** option in the form.

<info>
When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply.
</info>

For step-by-step instructions on creating catch-all forwards, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Email forwarding limits

Email forwarding is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

For detailed information about limits and quotas, see [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/).

## Internationalized Domain Names (IDN) support

Our email forwarding provider does not support International Domain Names (domains with non-standard characters). You cannot use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Related articles

- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - Step-by-step instructions for managing email forwards
- [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/) - Detailed information about limits and billing

## Have more questions?

If you have any questions or need assistance with your email forwarding management, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


