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

Email forwarding can be enabled on a domain-by-domain basis. The cost is $2 per month per domain. The number of messages per month is based on your subscription type:

- Personal plans: up to 1,000 messages forwarded per month per domain.
- Professional plans: up to 10,000 messages forwarded per month per domain.
- Business plans: unlimited number of messages forwarded per month per domain.

For reseller plans, please contact us for information about your limits.

For any plan that is not covered above, the limit is 1,000 messages per month.

## Enabling email forwarding

To enable email forwarding visit a domain's manage page and follow the **Manage Email forwards** at the bottom of the page on the **Domain** tab.

![Email forwarding](/files/email-forwarding.png)

Create an email forward to enable the service.

When you enable email forwarding we will automatically add the various DNS records needed to support forwarding.


## Creating an email forward

To create an email forward you need to specify the **From** and **To** fields.

![Email forwarding creation](/files/email-forwarding-setup.png)

The **From** field is used to match an email address to forward from. Enter either a specific name (such as `support`) without the domain.

In the **To** field enter the email address you would like as the recipient of the email. You can use a Gmail address or any other email address.

### Catch-all emails

To create a catch-all address follow the instructions to create an email and enter the following wildcard expression in the **To** field:

    (.*)

The expression represents is a period followed by an asterisk. The parenthesis are required.


<note>
When you use email forwarding on a domain you cannot use any other email service providers (such as Google Apps).
</note>

