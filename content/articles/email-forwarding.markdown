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

Email forwarding is enabled and billed on a per-domain basis. The cost is $2 per-domain per-month, which totals $24 per-domain per-year on a yearly subscription plan.

The number of forwarded messages allowed per-month is based on your subscription type:

- Personal plans: up to 1,000 messages forwarded per month per domain.
- Professional plans: up to 10,000 messages forwarded per month per domain.
- Business plans: unlimited number of messages forwarded per month per domain.

For reseller plans, please contact us for information about your limits.

For any plan that is not covered above, the limit is 1,000 messages per month.

In addition to message limits, there is also a limit to the number of individual email forwards any particular domain may have:

- Personal plans: up to 10 email forwards per domain.
- Professional plans: up to 25 email forwards per domain.
- Business plans: up to 100 email forwards per domain.

If you are on the Business plan and need more email forwards per domain than provided, please contact us to discuss your needs.

## Enabling email forwarding

To enable email forwarding, visit a domain's manage page and click on the **Email forwarding** menu on the sidebar.

![Email forwarding](/files/email-forwarding.png)

Create an email forward to enable the service.

When you enable email forwarding, we will automatically add the various DNS records needed to support forwarding.


## Creating an email forward

To create an email forward you need to specify the **From** and **To** fields.

![Email forwarding creation](/files/email-forwarding-setup.png)

The **From** field is used to match an email address to forward from. Enter a specific name (such as `support`) without the domain.

In the **To** field, enter the full email address that you want to forward the email to.

### Catch-all emails

To create a catch-all address, follow the instructions to create an email, and enter the following wildcard expression in the **From** field:

    (.*)

The expression is represented as a period followed by an asterisk. The parenthesis are required.

<note>
When you use email forwarding on a domain, you cannot use any other email service providers (such as Google Apps).
</note>

## Deleting an email forward

To remove an email forward from your domain, locate the email forwarding configuration that you want to delete under the **Current Email Forwards** section, and click on **Delete**. The Email forwarding will be deleted immediately, and you will no longer receive emails through this configuration.

![Email forwarding creation](/files/email-forwarding-removal.png)

## Internationalized Domain Names (IDN) support {#idna}

Our email forwarding provider doesn't support International Domain Names (or domains with non-standard characters). It's not possible to use an email address with an IDN domain as a destination, or to configure email forwards for an IDN domain.
