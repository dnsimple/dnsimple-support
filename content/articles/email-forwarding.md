---
title: Email Forwarding
excerpt: This article explains the email forwarding service provided by DNSimple.
meta: Learn how to set up and manage email forwarding with DNSimple, ensuring seamless communication by directing emails from one address to another effortlessly.
categories:
- Emails
---

# Email Forwarding

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding is enabled and billed monthly on a per-domain basis.

The number of forwarded messages and email forwards allowed per month is based on your plan. [See the differences between plans](https://dnsimple.com/pricing).

## Enabling email forwarding

You must be [subscribed to a plan](https://dnsimple.com/pricing) to enable email forwarding.

To enable email forwarding, visit a domain's manage page and click on the **Email forwarding** menu on the sidebar.
1. If you have more than one account, select the relevant one from the account switcher at the top-right corner of the screen.
2. Choose the relevant domain from your Domain List.
3. Click the **Email Forwarding** tab on the left side.
    ![screenshot of email forwarding tab](/files/forwarding-tab.png)

4. Create an email forward to enable the service.

When you enable email forwarding, DNSimple will automatically add the various DNS records needed to support forwarding.

## Creating an email forward

<div class="section-steps" markdown="1">
##### Adding an email forward from the dashboard

1.  If you have more than one account, select the relevant one.
1.  Click <label>Add</label> from the Dashboard, and choose <label>Email forward</label> from the provided options.
  ![Adding an email forward](/files/add-button-email-forward.png)
</div>

To create an email forward, specify the **From** and **To** fields.
![screenshot of new email forwarding](/files/new-email-forward.png)

The **From** field is used to match an email address to forward from. Enter a specific name (e.g. `test`) without the domain.

In the **To** field, enter the full email address that you want to forward the email to.

<info>
  When adding an email forward from the dashboard, select the zone to apply it to in the **From** field. Note that only zones resolving through DNSimple will be included in the list.
</info>

### Catch-all emails {#catch-all-emails}

<info>
Currently, emails addressed to non-catch-all email forwards created for the domain are also forwarded to the catch-all destination. We are removing this behavior in the near future to align with industry-standard expectations for catch-all email forwarding.
</info>

To create a catch-all address, follow the instructions to create an email, and enter the following wildcard expression in the **From** field:

    (.*)

The expression is represented as a period followed by an asterisk. **The parenthesis are required**.

<note>
When you use email forwarding on a domain, you cannot use any other email service providers (e.g. Google Apps).
</note>

## Deleting an email forward

To remove an email forward from your domain:

1. Locate the email forwarding configuration that you want to delete under the **Current Email Forwards** section.
2. Click **Delete**.

![Email forwarding creation](/files/email-forwarding-removal.png)

The email forwarding will be deleted immediately, and you will no longer receive emails through this configuration.

## Internationalized Domain Names (IDN) support {#idna}

Our email forwarding provider does not support International Domain Names (domains with non-standard characters). You cannot use an email address with an IDN domain as a destination or to configure email forwards for an IDN domain.

## Have more questions?

For additional questions, or if you need any assistance with email forwards, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
