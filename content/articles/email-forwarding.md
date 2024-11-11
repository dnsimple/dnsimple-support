---
title: Email Forwarding
excerpt: This article explains the email forwarding service provided by DNSimple.
categories:
- Emails
---

# Email Forwarding

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding is enabled and billed monthly on a per-domain basis.

The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](/articles/dnsimple-plans/).

## Enabling email forwarding

To enable email forwarding, 

1. Choose the relevant domain from your Domain List.
2. Click the **Email Forwarding** tab on the left side. 

<!--- needs screenshot -->

3. Create an email forward to enable the service.

When you enable email forwarding, we will automatically add the various DNS records needed to support forwarding.

## Creating an email forward

<div class="section-steps" markdown="1">
##### Adding an email forward from the dashboard

1.  If you have more than one account, select the relevant one.
1.  Click <label>Add</label> from the Dashboard, and choose <label>Email forward</label> from the provided options.
  ![Adding an email forward](/files/add-button-email-forward.png)
</div>

To create an email forward, specify the **From** and **To** fields.

![Email forwarding creation](/files/email-forwarding-setup.png)

The **From** field is used to match an email address to forward from. Enter a specific name (like `test`, as shown) without the domain.

In the **To** field, enter the full email address that you want to forward the email to.

<info>
  When adding an email forward from the dashboard, select the zone to apply it to in the **From** field. Note that only zones resolving through DNSimple will be included in the list.
</info>

### Catch-all emails

To create a catch-all address, follow the instructions to create an email, and enter the following wildcard expression in the **From** field:

    (.*)

The expression is represented as a period followed by an asterisk. **The parenthesis are required**.

<note>
When you use email forwarding on a domain, you cannot use any other email service providers (like Google Apps).
</note>

## Deleting an email forward

To remove an email forward from your domain: 

1. Locate the email forwarding configuration that you want to delete under the **Current Email Forwards** section.
2. Click **Delete**. 

![Email forwarding creation](/files/email-forwarding-removal.png)

The email forwarding will be deleted immediately, and you will no longer receive emails through this configuration.

## Internationalized Domain Names (IDN) support {#idna}

Our email forwarding provider doesn't support International Domain Names (or domains with non-standard characters). It's not possible to use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Have more questions?

For additional questions, or if you need any assistance with email forwards, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help
