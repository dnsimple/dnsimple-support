---
title: Managing CNAME Records
excerpt: Instructions to add, update, and remove an CNAME record in DNSimple.
meta: Learn how to efficiently manage your CNAME records in DNSimple with our step-by-step guide for adding, updating, and removing records with ease.
categories:
- DNS
---

# Managing CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CNAME records](/articles/cname-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [CNAME record format](ADD NEW LINK) and usage.

## Adding a CNAME record

<div class="section-steps" markdown="1">
#### To add a CNAME record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click **Add record**, and select **CNAME** from the dropdown menu.  
![screenshot: add cname record](/files/cname-add-record.png)
1. Enter the CNAME record information.
  ![screenshot: create new CNAME record form](/files/record-cname-create-new.png)

  - **Name**: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. This field cannot be left blank.
  - **Content**: the target host name this host will point to. It must be a host name (e.g. `blog.dnsimple.com`) and not a URL (e.g. `http://blog.dnsimple.com` or `http://blog.dnsimple.com/post` are invalid).

  As with any other DNS record, you can configure:

  - **TTL**: the record [time-to-live](/articles/what-is-ttl/).
  - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
  - **Notes**: Optionally include a [record note](/articles/record-notes/).

<note>
Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
- In DNSimple, **Name** = what others might call _Host._
- In DNSimple, **Content** = what others might call _Value._
</note>

6. Click **Add Record** to confirm and create the record.

7. The record is created and visible in the record list.
  ![screenshot: new cname record shown](/files/cname-record-visible.png)

</div>

### Attempting to add a new record where a CNAME exists

You cannot add another record type on a subdomain where a **CNAME record** already exists.

A CNAME points the entire subdomain to another hostname, so it overrides any other records on that subdomain. Because of this, the DNS system blocks you from adding a CNAME alongside other records.

**Examples:**
- If `email.example.com` already has an MX record, and you try to add a CNAME to that exact subdomain (`email.example.com`), the [MX record](/articles/mx-record/) would stop working. The CNAME would override the subdomain (`email.example.com`), rendering the MX record useless, which stops your email. To counter this potential error, the Domain Name System doesn't allow other records alongside a CNAME.  
- You also can't add a CNAME at the root domain (like `example.com`). The root already requires other records (e.g., [NS](/articles/ns-record/) and [SOA](/articles/soa-record/)). Trying to create a CNAME there will return an error:
```
Another record already exists for example.com, cannot add a CNAME.
```
You can achieve a similar behavior to CNAME records with an ALIAS record. If you want a sub-domain to always resolve to the IP address of another domain, you can use an ALIAS record pointing to that domain. You should only do this if absolutely necessary, as the ALIAS record has a small amount of additional overhead compared to [A and CNAME records](/articles/differences-between-a-cname-alias-url/).

## Updating a CNAME record

<div class="section-steps" markdown="1">
#### To update a CNAME record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the CNAME record you want to update in the list.
1. Click the edit icon (🖊️) at the end of the record row to edit it.
  ![screenshot: edit cname record](/files/cname-record-edit.png)

1. Update the information, and click **Update Record** to save the record.
</div>

## Removing a CNAME record

<div class="section-steps" markdown="1">
#### To remove a CNAME record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the CNAME record you want to remove in the list
1. Click the trash icon at the end of the row to delete it.
  ![screenshot: delete cname record](/files/cname-record-delete.png)

1. Confirm the dialog to delete the record.
</div>

## Have more questions?

If you have more questions or need assistance setting up CNAME records, just [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
