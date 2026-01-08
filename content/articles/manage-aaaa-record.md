---
title: Managing AAAA Records
excerpt: Instructions to add, update, and remove an AAAA record in DNSimple.
meta: Learn how to easily manage your AAAA records in DNSimple with our step-by-step guide. Add, update, or remove records to optimize your domain's performance.
categories:
- DNS
---

# Managing AAAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [AAAA records](/articles/aaaa-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [AAAA record format](/articles/aaaa-record/#record-format) and usage.

## Adding an AAAA record

<div class="section-steps" markdown="1">
#### To add an AAAA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click <label>Add record</label> and select <label>AAAA</label> from the dropdown menu to add a new AAAA record.
  ![screenshot: add AAA record](/files/aaa-record-add.png)
1. Enter the AAAA record information.
  ![screenshot: Showing the form for creating a new AAAA record](/files/record-aaaa-create-new.png)

      - **Name**: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
      - **IP Address**: the IPv6 address the record will resolve to.
      - **TTL**: the record [time-to-live](/articles/what-is-ttl/).
      - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
      - **Notes**: Optionally include a [record note](/articles/record-notes/).

1. Click <label>Add Record</label> to confirm and create the record.

The record is created and will be visible in the record list.
  ![screenshot: AAA record created](/files/aaa-record-created.png)
</div>

> [!NOTE]
> Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
> - In DNSimple, **Name** = what others might call _Host._
> - In DNSimple, **Content** = what others might call _Value._

## Updating an AAAA record

<div class="section-steps" markdown="1">
#### To update an AAAA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the AAAA record you want to update in the list.
1. Click the edit icon (🖊️) on the right side of the row to edit it.
  ![screenshot: edit an AAA record](/files/aaa-record-edit.png)

1. Update the information, and click <label>Update Record</label> to save the record.
</div>

## Removing an AAAA record

<div class="section-steps" markdown="1">
#### To remove an AAAA record

  1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the AAAA record you want to remove in the list.
1. Click the _trash_ icon on the right side of the row to delete it.
  ![screenshot: delete aaa record](/files/aaa-record-delete.png)
1. Confirm the dialog to delete the record.
</div>

## Have more questions?

If you have any questions or need assistance adding AAAA records to your domain, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
