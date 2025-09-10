---
title: Managing A Records
excerpt: Instructions to add, update, and remove an A record in DNSimple.
meta: Learn how to efficiently manage your A records in DNSimple with our step-by-step guide. Add, update, or remove DNS records effortlessly for optimal domain performance.
categories:
- DNS
---

# Managing A Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [A records](/articles/a-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [A record format](/articles/a-record/#record-format) and usage.

## Adding an A record

<div class="section-steps" markdown="1">
#### To add an A record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add record**, and select **A** from the dropdown menu to add a new A record.
    ![screenshot: select A record from record type](/files/select-a-record.png)

1. Enter the A record information.
    ![screenshot: Showing form for creating an A record for a domain](/files/record-a-create-new.png)

    - **Name**: The subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.

    <note>
    Some providers may instruct you to name the record `@` to denote the current origin. In DNSimple, leave it blank to represent the root domain `example.com`.
    </note>

    - **IP Address**: The IPv4 address the record will resolve to.
    - **TTL**: The record's [time-to-live](/articles/what-is-ttl/).
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Include a [record note](/articles/record-notes/) (optional).

1. Once you're ready, click <label>Add Record</label> to confirm and create the record.

1. The record is created and visible in the record list.
   ![screenshot: a record added](/files/a-record-created.png)

</div>

<note>
Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
In DNSimple, **Name** = what others might call _Host_.
In DNSimple, **Content** = what others might call _Value_.
</note>

## Updating an A record

<div class="section-steps" markdown="1">
#### To update an A record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the A record you want to update in the list.
1. Click the **edit icon** on the right side.
  ![screenshot: edit an A record](/files/a-record-edit.png)
1. Update the information, and click <label>Update Record</label> to save the record.
</div>

## Removing an A record

<div class="section-steps" markdown="1">
#### To remove an A record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the A record you want to remove in the list
1. Click the **trash icon** on the right side to delete it.
  ![screenshot: delete A record](/files/a-record-delete.png)
1. Confirm the dialog to delete the record.
</div>

## Need more help?

If you have any questions or need assistance adding A records to your domain, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
