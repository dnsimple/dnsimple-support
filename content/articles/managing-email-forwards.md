---
title: Creating and Deleting Email Forwards
excerpt: Step-by-step instructions for creating, editing, and deleting email forwarding rules in DNSimple.
meta: Complete how-to guide with step-by-step instructions for managing email forwards in DNSimple, including catch-all forwarding and best practices.
categories:
- Emails
---

# Creating and Deleting Email Forwards

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwards let you redirect emails sent to addresses at your domain to other email addresses. You can create, edit, and delete individual forwards from the domain page or the dashboard. For a visual guide to the interface, see [Email Forwarding Management in DNSimple](/articles/email-forwarding-management/).

## Creating an email forward {#creating}

You can create email forwards from either the domain's Email Forwarding page or directly from the Dashboard.

### Adding an email forward from the domain page

<div class="section-steps" markdown="1">
##### Add an email forward from the domain page

1. Use the **account switcher** at the top of the page to select the appropriate account.
1. In your <label>Domain Names</label> list, click the name of the domain where you want to create an email forward.
1. Click the <label>Email Forwarding</label> tab on the left side.
1. Click <label>Add email forward</label> or the <label>Continue</label> button.
1. Enter the email forward details:
   - **From:** Enter the local part (the part before the @) of the email address you want to forward from (e.g., `hello` for `hello@yourdomain.com`). Do not include the domain name.
   - **To:** Enter the full email address where you want emails to be forwarded (e.g., `yourname@gmail.com`).
1. Click <label>Add email forward</label>.
</div>

![screenshot of new email forwarding](/files/new-email-forward.png)

### Adding an email forward from the dashboard

<div class="section-steps" markdown="1">
##### Add an email forward from the dashboard

1. If you have more than one account, select the relevant one from the account switcher at the top-right corner of the screen.
1. Click <label>Add</label> from the Dashboard, and choose <label>Email forward</label> from the provided options.
  ![Adding an email forward](/files/add-button-email-forward.png)
1. Select the domain (zone) to apply the forward to in the <label>From</label> field. Only zones resolving through DNSimple will be included in the list.
1. Enter the local part in the <label>From</label> field (e.g., `hello`).
1. Enter the full destination email address in the <label>To</label> field.
1. Click <label>Add email forward</label>.
</div>

## Creating a catch-all email forward {#catch-all}

A catch-all email forward forwards emails sent to any address at your domain that does not have a specific forwarding rule.

To create a catch-all address, follow the instructions to create an email forward. In the email forward form, select the <label>Catch-all</label> option. Alternatively, you can enter the following wildcard expression in the <label>From</label> field:

```
(.*)
```

The expression is represented as a period followed by an asterisk within parentheses. **The parentheses are required.** The UI also supports the format `.*` (without parentheses) for backward compatibility, but `(.*)` is the recommended format.

> [!NOTE]
> When you have a catch-all email forward, it only applies to emails sent to addresses that do not already have a specific email forward set up. If an email is sent to an address that has a matching email forward, only that email forward will handle it; the catch-all will not apply. This ensures each email is forwarded just once, avoiding duplicates and helping protect your privacy.

## Viewing your email forwards {#viewing}

To view all email forwards for a domain:

1. Navigate to the domain's <label>Email Forwarding</label> tab.
1. All configured email forwards are listed in the Current Email Forwards section.
1. Each forward displays:
   - The source address (From)
   - The destination address (To)
   - Options to edit or delete the forward

For a visual guide to the email forwarding interface, see [Email Forwarding Management in DNSimple](/articles/email-forwarding-management/).

## Editing an email forward {#editing}

<div class="section-steps" markdown="1">
##### Edit an existing email forward

1. Navigate to the domain's <label>Email Forwarding</label> tab.
1. Find the email forward you want to edit in the <label>Current Email Forwards</label> section.
1. Click <label>Edit</label> (the pencil icon).
1. Modify the <label>From</label> or <label>To</label> fields as needed.
1. Click <label>Save</label> to apply the changes.
</div>

## Deleting an email forward {#deleting}

<div class="section-steps" markdown="1">
##### Delete an email forward

1. Navigate to the domain's <label>Email Forwarding</label> tab.
1. Locate the email forwarding configuration that you want to delete under the Current Email Forwards section.
1. Click <label>Delete</label> (the trash can icon).
1. Confirm the deletion when prompted.
</div>

![Email forwarding removal](/files/email-forwarding-removal.png)

The email forward will be deleted immediately, and you will no longer receive emails through this configuration.

> [!WARNING]
> Deleting an email forward is permanent. Once deleted, emails sent to that address will bounce unless you create a new forward or set up email hosting.

## Best practices {#best-practices}

**Use descriptive addresses:** Create email forwards with clear, descriptive names (e.g., `contact@yourdomain.com`, `support@yourdomain.com`) to make it easier to identify the purpose of each forward.

**Organize by function:** Consider forwarding different addresses to different destinations based on their purpose (e.g., `sales@yourdomain.com` to your sales team, `support@yourdomain.com` to your support team).

**Monitor catch-all forwards:** If you use a catch-all forward, monitor your destination inbox for spam or unwanted emails, as catch-all forwards can receive emails sent to misspelled or random addresses.

**Test after changes:** After creating, editing, or deleting email forwards, test them by sending a test email to ensure everything is working as expected.

## Have more questions?

If you have additional questions or need any assistance with managing email forwards, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
