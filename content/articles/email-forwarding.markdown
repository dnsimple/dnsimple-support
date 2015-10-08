---
title: Email Forwarding
excerpt: Welcome to DNSimple. This page is about email forwarding. Hosted DNS has never been this easy.
categories:
- Emails
---

# Email Forwarding

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding can be enabled on a domain-by-domain basis. The cost is $2 per month per domain for up to 1000 messages delivered.


## Enabling email forwarding

To enable email forwarding visit a domain's manage page and follow the **Manage Email forwards** at the bottom of the page on the **Domain** tab.

![Email forwarding](/files/email-forwarding.png)

Create an email forward to enable the service.

When you enable email forwarding we will automatically add the various DNS records needed to support forwarding.


## Creating an email forward

To create an email forward you need to specify the **From** and **To** fields.

![Email forwarding creation](/files/email-forwarding-setup.png)

The **From** field is used to match an email address to forward from. Enter either a specific name (such as "support") without the domain.

To create a catch-all address use a wildcard expression which is a period followed by an asterisk `(.*)`.

In the **To** field enter the email address you would like as the recipient of the email. You can use a Gmail address or any other email address.


<note>
When you use email forwarding on a domain you cannot use any other email service providers (such as Google Apps).
</note>

