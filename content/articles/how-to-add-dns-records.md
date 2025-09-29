---
title: How To Add Common DNS Records
excerpt: How to add common DNS records to your domains.
meta: Learn more about how to add common DNS records in DNSimple.
categories:
- DNS
---

# How To Add Common DNS Records

You can use the same process in DNSimple to add several common DNS record types. These record types share the same interface and general steps in our system:
[**A**](/articles/a-record/)

[**AAAA**](/articles/aaaa-record/)

[**CNAME**](/articles/cname-record/)

[**ALIAS**](/articles/alias-record/)

[**TXT**](/articles/txt-record/)

[**URL**](/articles/url-record/)

[**NS**](/articles/ns-record/) (when added inside a zone, not the ones that delegate the domain to external providers.)

### Steps to add a DNS record

1. Use the **account switcher** at the top of the page to select the appropriate account.
1. From your **Domains** tab, click on the domain you want to manage.
1. Click the **DNS** tab on the left side.
1. Scroll to the DNS records section and click **Add/Manage**.
1. Click **Add Record**.
1. Select the record type from the dropdown menu.
1. Fill out the **Name** and **Content** fields (or **Destination**, depending on the record).
1. Click **Add Record** to save it.

<note>
Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
- In DNSimple, **Name** = what others might call _Host._
- In DNSimple, **Content** = what others might call _Value._
- For **URL records**, the destination is entered in the **Content** field.
</note>

| Record Type | Name (host) | Content (value)| Example|
|:------------|:------------|:---------------|:-------|
| A | Subdomain (e.g., www, blog) or leave blank for root (@) |**IPv4** address|93.184.216.34|
|AAAA|Same as A record|**IPv6** address	| 2606:2800:220:1:248:1893:25c8:1946|
|CNAME|Subdomain (e.g., app)|Domain name|app-host.example.com|
|ALIAS|Root domain (blank), or subdomain|Hostname to resolve dynamically|example.com|
|TXT|Varies — often @, _acme-challenge, or subdomain|Verification string or SPF rule|"google-site-verification=abc123"|
|URL|Subdomain you want to redirect (e.g., shop)|**Destination URL**|https://store.example.com|
|NS|Subdomain to delegate (e.g., blog)|**Name server address**|ns1.otherdns.com|

## Helpful tips
- Use @ in the **Name** field to refer to the root domain.
- All domain names in the **Content** field should end with a dot (.) to avoid resolution issues.
- **A CNAME record cannot** coexist with any other record type using the same name (subdomain).
- For **URL records**, the destination must be a full URL (including http:// or https://).
- If you're copying a DNS record from another provider, always double-check how they name fields.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
