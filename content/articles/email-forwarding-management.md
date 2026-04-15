---
title: Email Forwarding Management in DNSimple
excerpt: Visual reference guide to the email forwarding interface in DNSimple with annotated screenshots.
meta: Illustrated guide to understanding the email forwarding management interface in DNSimple, including UI elements and their functions.
categories:
- Emails
---

# Email Forwarding Management in DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

This article provides a visual reference guide to the email forwarding interface in DNSimple.

## Email forwarding tab {#email-forwarding-tab}

Email forwarding is applied on a per-domain basis. The following sections explain the different parts of the email forwarding interface.

![screenshot of UI for email forwarding on a domain](/files/forwarding-tab.png)

1. <label>Email Forwarding</label> tab - Email forwarding management options for the domain.
2. Email Forwards section - Explains what an email forward is used for.
3. <label>Continue</label> button - Create a new email forward.

## Email forward creation form {#creation-form}

![screenshot of viewing email forwarding configuration](/files/new-email-forward-reference.png)

When creating a new email forward, you will see the following fields and options:

1. **New email forward** form - Used to enter the information for the email forward.
2. <label>Catch-all</label> option - Check this box to create a catch-all forward that captures emails to any address at your domain.
3. **Single email address** field - Enter the local part of the email address to forward from (e.g., `hello` for `hello@yourdomain.com`). Do not include the domain name.
4. <label>To</label> field - Enter the full email address where emails should be forwarded (e.g., `yourname@gmail.com`).
5. <label>Create forward</label> button - Click to create the email forward.

For step-by-step instructions on enabling email forwarding, see [Enabling Email Forwarding](/articles/enabling-email-forwarding/).

## Email forwards list {#forwards-list}

![screenshot of managing email forwards](/files/email-forward-reference.png)

The <label>Email Forwards</label> section displays all configured email forwards for the domain. Each forward shows:

1. <label>Email Forwarding</label> tab - Email forwarding management options for the domain.
2. <label>Email Forwarding</label> card - Interface for all of the email forwarding options.
3. **Destination address (To)** - The full email address where emails are forwarded.
4. <label>Edit</label> button (pencil icon) - Click to modify an existing email forward's destination address.
5. <label>Delete</label> button (trash can icon) - Click to remove an email forward permanently.
6. <label>Add</label> button - Click to add another email forward on the domain.

## Email forwarding limits {#limits}

Email forwarding is billed monthly on a per-domain basis. The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

## Internationalized Domain Names (IDN) support {#idn-support}

The email forwarding provider does not support International Domain Names (domains with non-standard characters). You cannot use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Have more questions?

If you have any questions or need assistance with your email forwarding management, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
