---
title: Creating and Deleting Email Forwards
excerpt: Step-by-step instructions for creating, editing, and deleting email forwarding rules in DNSimple.
meta: Complete how-to guide with step-by-step instructions for managing email forwards in DNSimple, including catch-all forwarding and best practices.
categories:
- Emails
---

# Creating and Deleting Email Forwards

This article provides step-by-step instructions for creating, editing, and deleting email forwarding rules in DNSimple. If you're looking for a visual guide to the email forwarding interface, see [Email Forwarding Management in DNSimple](/articles/email-forwarding-management/).

### Table of Contents {#toc}

* TOC
{:toc}

---

## Creating an email forward

You can create email forwards from either the domain's Email Forwarding page or directly from the Dashboard.

### Adding an email forward from the domain page

1. Use the **account switcher** at the top of the page to select the appropriate account.
1. In your **Domain Names** list, click the name of the domain where you want to create an email forward.
1. Click the **Email Forwarding** tab on the left side.
1. Click **Add email forward** or the **+** button.
1. Enter the email forward details:
   - **From:** Enter the local part (the part before the @) of the email address you want to forward from (e.g., `hello` for `hello@yourdomain.com`). Do not include the domain name.
   - **To:** Enter the full email address where you want emails to be forwarded (e.g., `yourname@gmail.com`).
1. Click **Add email forward**.

![screenshot of new email forwarding](/files/new-email-forward.png)

### Adding an email forward from the dashboard

1. If you have more than one account, select the relevant one from the account switcher at the top-right corner of the screen.
1. Click **Add** from the Dashboard, and choose **Email forward** from the provided options.
  ![Adding an email forward](/files/add-button-email-forward.png)
1. Select the domain (zone) to apply the forward to in the **From** field. Note that only zones resolving through DNSimple will be included in the list.
1. Enter the local part in the **From** field (e.g., `hello`).
1. Enter the full destination email address in the **To** field.
1. Click **Add email forward**.

<info>
  When adding an email forward from the dashboard, select the zone to apply it to in the **From** field. Note that only zones resolving through DNSimple will be included in the list.
</info>

## Creating a catch-all email forward

A catch-all email forward forwards emails sent to any address at your domain that doesn't have a specific forwarding rule. This is useful if you want to receive emails sent to any address at your domain.

To create a catch-all address, follow the instructions to create an email forward. In the email forward form, select the **Catch-all** option. Alternatively, you can enter the following wildcard expression in the **From** field:

```
(.*)
```

The expression is represented as a period followed by an asterisk within parentheses. **The parentheses are required.** The UI also supports the format `.*` (without parentheses) for backward compatibility, but `(.*)` is the recommended format.

<info>
When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply. This ensures each email is forwarded just once, avoiding duplicates and helping protect your privacy.
</info>

## Viewing your email forwards

To view all email forwards for a domain:

1. Navigate to the domain's **Email Forwarding** tab.
1. All configured email forwards are listed in the **Current Email Forwards** section.
1. Each forward displays:
   - The source address (From)
   - The destination address (To)
   - Options to edit or delete the forward

For a visual guide to the email forwarding interface, see [Email Forwarding Management in DNSimple](/articles/email-forwarding-management/).

## Editing an email forward

To modify an existing email forward:

1. Navigate to the domain's **Email Forwarding** tab.
1. Find the email forward you want to edit in the **Current Email Forwards** section.
1. Click **Edit** (or the pencil icon).
1. Modify the **From** or **To** fields as needed.
1. Click **Save** to apply the changes.

## Deleting an email forward

To remove an email forward from your domain:

1. Navigate to the domain's **Email Forwarding** tab.
1. Locate the email forwarding configuration that you want to delete under the **Current Email Forwards** section.
1. Click **Delete** (or the trash can icon).
1. Confirm the deletion when prompted.

![Email forwarding creation](/files/email-forwarding-removal.png)

The email forwarding will be deleted immediately, and you will no longer receive emails through this configuration.

<warning>
Deleting an email forward is permanent. Once deleted, emails sent to that address will bounce unless you create a new forward or set up email hosting.
</warning>

## Best practices

**Use descriptive addresses:** Create email forwards with clear, descriptive names (e.g., `contact@yourdomain.com`, `support@yourdomain.com`) to make it easier to identify the purpose of each forward.

**Organize by function:** Consider forwarding different addresses to different destinations based on their purpose (e.g., `sales@yourdomain.com` to your sales team, `support@yourdomain.com` to your support team).

**Monitor catch-all forwards:** If you use a catch-all forward, monitor your destination inbox for spam or unwanted emails, as catch-all forwards can receive emails sent to misspelled or random addresses.

**Test after changes:** After creating, editing, or deleting email forwards, test them by sending a test email to ensure everything is working as expected.

## Have more questions?

If you have additional questions or need any assistance with managing email forwards, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


