---
title: Setting up DKIM
excerpt: How to set up DKIM on your domains.
meta: Learn how to set up DKIM by using a specially formatted DNS text record storing a public key.
categories:
- DNS
- Emails
---

# Setting Up DKIM

[DKIM](/articles/dkim-record/) (DomainKeys Identified Email) provides a way to validate that an organization delivering an email has permission to do so.

DKIM requires the addition of public keys into your DNS zone. The key is often provided to you by the organization that is sending your email &mdash; e.g., [SendGrid](https://sendgrid.com/en-us), [Postmark](https://postmarkapp.com), or [Google Workspace](https://workspace.google.com). The key will either be inserted directly into your zone as a [TXT record](/articles/txt-record/), or it will be a [CNAME](/articles/cname-record/) pointing to the key in your provider's DNS.

## Steps to set up DKIM
1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain where you want to set up DKIM.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click **Add record**, and select either **TXT** or **CNAME** depending on what your provider gave you.
1. Enter the record information provided by your email service:

- **TXT record:**
    - Insert the string you were given into the **Content** field.
    - If you're given a string representing the DKIM, it usually looks like this:
      
```
k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGMjj8MVaESl30KSPYdLaEreSYzvOVh15u9YKAmTLgk1ecr4BCRq3Vkg3Xa2QrEQWbIvQj9FNqBYOr3XIczzU8gkK5Kh42P4C3DgNiBvlNNk2BlA5ITN/EvVAn/ImjoGq5IrcO+hAj2iSAozYTEpJAKe0NTrj49CIkj5JI6ibyJwIDAQAB
```

- **Name field:**
    - Your provider will also give you a specific subdomain to use (e.g., `something._domainkey`).

> [!WARNING]
> If your provider gives you a fully-qualified name that ends with your domain name, **DO NOT** include your domain name in the **Name** field when you add the TXT record. For example, if you're given `pm._domainkey.yourdomain.com`, only enter `pm._domainkey` in the **Name** field.

## Quotes and slashes
If your provider gave you the DKIM record and it included double quotes around the record, or backslashes before semi-colons in the record, you can safely remove them. The quotes are handled automatically by our name servers, and the semi-colons will automatically be escaped if necessary.

Sometimes there will be forward slashes or other unusual characters in the DKIM record. Don't modify those. If you have any questions or concerns, [contact support](https://dnsimple.com/feedback).

## Managing DKIM records
DKIM records are added as TXT or sometimes CNAME records. To update or remove them, follow the instructions in the [Record Editor guide](/articles/record-editor/).

## Have more questions?
If you have additional questions or need any assistance with your DKIM records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
