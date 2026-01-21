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

 ![screenshot of UI for email forwarding on a domain](/files/forwarding-tab-reference.png)

1. **Email Forwarding** tab - Email forwarding management options for the domain.
2. Email Forwards section - Explains what an email forward is used for.
3. **Continue** button - Create a new email forward.

## Email forward creation form

![screenshot of viewing email forwarding configuration](/files/new-email-forward-reference.png)

When creating a new email forward, you'll see the following fields and options:

1. **New email forward** form - Used to enter the information for the email forward.
2. **Catch-all** option - Check this box to create a catch-all forward that captures emails to any address at your domain.
3. **Single email address** field - Enter the local part of the email address to forward from (e.g., `hello` for `hello@yourdomain.com`). Do not include the domain name.
4.  **To** field - Enter the full email address where emails should be forwarded (e.g., `yourname@gmail.com`).
5. **Create forward** button - Click to create the email forward.

For detailed step-by-step instructions, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Email forwards list

![screenshot of managing email forwards](/files/email-forward-reference.png)

The **Email Forwards** section displays all configured email forwards for the domain. Each forward shows:

1. **Email Forwarding** tab - Email forwarding management options for the domain.
2. **Email Forwarding** card - Interface for all of the email forwarding options. 
3. **Destination address (To)** - The full email address where emails are forwarded.
4. **Edit** button (pencil icon) - Click to modify an existing email forward's destination address.
5. **Delete** button (trash can icon) - Click to remove an email forward permanently.
6. **Add** button - Click to add another email forward on the domain.

For step-by-step instructions on editing and deleting forwards, see [Creating and Deleting Email Forwards](/articles/managing-email-forwards/).

## Email forwarding limits

Email forwarding is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

For detailed information about limits and quotas, see [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/).

## Internationalized Domain Names (IDN) support

Our email forwarding provider does not support International Domain Names (domains with non-standard characters). You cannot use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Related articles

- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - Step-by-step instructions for managing email forwards.
- [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/) - Detailed information about limits and billing.

## Have more questions?

If you have any questions or need assistance with your email forwarding management, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
