---
title: Setting up DMARC
excerpt: How to set up DMARC in your DNSimple account.
meta: Learn how to set up DMARC and what to expect from your email provider.
categories:
- DNS
- Emails
---

# Setting up DMARC

[DMARC](/articles/dmarc-record/) requires the addition of public keys into your DNS zone. The key is often provided to you by the organization that is sending your email, for example [SendGrid](https://sendgrid.com/en-us/blog/what-is-dmarc), [Postmark](https://postmarkapp.com/guides/dmarc?utm_source=dmarc&utm_medium=web&utm_campaign=nav#how-do-i-implement-dmarc-on-my-domain), or [Google Apps](https://support.google.com/a/answer/2466563). The key will be inserted directly into your zone as a [TXT record](/articles/txt-record/).

## Steps to set up DMARC

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain where you want to set up DMARC.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click **Add record**, and select **TXT** as the record type.
1. Enter the record information provided by your email service:
 - **Content:** Insert the string you were given into the **Content** field. If you're given a string representing the DKIM, it often looks like this:
```
"v=DMARC1;p=reject;pct=100;rua=mailto:postmaster@dmarcdomain.com"
```
- **Name field:** Your provider will also give you a specific hostname to use, like: `_dmarc.hostname.com`
Enter the subdomain part of the hostname in the **Name** field. The subdomain is everything to the left of your domain name.

> [!TIP]
> Your subdomain should be `_dmarc`. The leading underscore character is required

## Quotes and slashes
If your provider gave you the DMARC record, and it included double quotes around the record, or backslashes before semi-colons in the record, you can safely remove them. The quotes are handled automatically by our name servers, and the semicolons will automatically be escaped if necessary.

Sometimes there will be forward slashes or other unusual characters in the DMARC record. Don't modify those. If you have any questions, [contact support](https://dnsimple.com/feedback).

## Managing DMARC records
DMARC records are added as TXT records. To update or remove them, follow the instructions in the [Record Editor](/articles/record-editor/) guide.

## Have more questions?
If you have additional questions or need any assistance with your DMARC records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
