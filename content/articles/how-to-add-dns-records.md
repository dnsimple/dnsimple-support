---
title: How To Add DNS Records
excerpt: How to add common DNS records to your domains.
meta: Learn more about how to add common DNS records in DNSimple.
categories:
- DNS
---

# How To Add DNS Records

You can use the same process in DNSimple to add several common DNS record types. These record types share the same interface and general steps in our system:
[**A**](/articles/a-record/)

[**AAAA**](/articles/aaaa-record/)

[**CNAME**](/articles/cname-record/)

[**ALIAS**](/articles/alias-record/)

[**TXT**](/articles/txt-record/)

[**URL**](/articles/url-record/)

[**NS**](/articles/ns-record/) (when added inside a zone, not the ones that delegate the domain to external providers.)

### Steps to add a DNS record

1. Use the account switcher at the top of the page to select the appropriate account.
1. From your Domains tab, click on the domain you want to manage
1. Click the **DNS** tab on the left side.
1. Scroll to the DNS records section and click **Add/Manage**.
1. Click **Add Record**
1. Select the record type from the dropdown menu
1. Fill out the **Name** and **Content** fields (or **Destination**, depending on the record)
1. Click **Add Record** to save it

<note>
Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
- In DNSimple, **Name** = what others might call _Host._
- In DNSimple, **Content** = what others might call _Value._
- For **URL records**, the destination is entered in the **Content** field
</note>

| Record Type | Name (host) | Content (value)| Example|
|:----------------|:-------------------|:---------------------|:----------------------|
| A | Subdomain (e.g., www, blog) or leave blank for root (@) |IPv4 address|93.184.216.34|

