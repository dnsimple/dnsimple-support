---
title: Managing CAA Records
excerpt: Instructions to add, update, and remove a CAA record in DNSimple.
meta: Learn how to effectively manage CAA records in DNSimple with our step-by-step guide. Add, update, or remove records to enhance your domain's security.
categories:
- DNS
---

# Managing CAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CAA records](/articles/caa-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [CAA record format](/articles/caa-record-format/) and usage.

<note>
CAA records are only supported on the [DNSimple name servers](/articles/dnsimple-nameservers/). We don't support transferring CAA records to secondary name servers.
</note>

## Standard mode vs custom mode

The DNSimple interface allows you to manage CAA records using two different modes:

- The standard mode provides a pre-populated interface to help enter the appropriate values for the CAA record.
    - **Provider** allows you to create a CAA record to allow a certificate authority.
    - **Reports** allows you to create a CAA record to specify the email for reporting policy violations.
- The custom mode (**Custom**) allows you to modify the CAA record tag/value values directly.

We don't support the ability to specify via interface the destructured CAA record value representation. You **cannot** enter the following text:

```
0 issue "letsencrypt.com"
```

## Adding a CAA record

<div class="section-steps" markdown="1">
#### To add a CAA record to allow a Certificate Authority

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add**, and select **CAA** to add a new CAA record.
1. Select the **Provider** tab.
1. Enter the CAA record information.
    ![screenshot: Showing create new CAA record form](/files/record-caa-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - _Provider_: the Certificate Authority you want to allow.
    - _Certificate type_: the type you want to allow.

    As with any other DNS record, you can configure:

    - _TTL_: the record [time-to-live](/articles/what-is-ttl/).
    - _Respond From Regions_: Configure [Regional Records](/articles/regional-records/) if desired.
    - _Notes_: Optionally include a [record note](/articles/record-notes/).

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

    ![screenshot: Showing a CAA record](/files/record-caa-item.png)

</div>

<note>
Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
- In DNSimple, **Name** = what others might call _Host._
</note>

## Updating a CAA record

<div class="section-steps" markdown="1">
#### To update a CAA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the CAA record you want to update in the list.
1. Click the edit icon (🖊️) at the end of the record row to edit it.

    ![screenshot: Showing button for edit CAA record](/files/record-caa-item-edit.png)

1.  Update the information and click **Update Record** to save the record.
</div>


## Removing a CAA record

<div class="section-steps" markdown="1">
#### To remove a CAA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the CAA record you want to remove in the list.
1. Click the _trash_ icon at the end of the row to delete it.

    ![screenshot: showing delete button for CAA record](/files/record-caa-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>

## Have more questions?
If you have additional questions or need any assistance with your CAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
