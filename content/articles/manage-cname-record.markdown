---
title: Managing CNAME records
excerpt: Instructions to add, update, and remove an CNAME record in DNSimple.
categories:
- DNS
---

# Managing CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CNAME records](/articles/cname-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [CNAME record format](/articles/cname-record#record-format) and usage.


## Adding a CNAME record

<div class="section-steps" markdown="1">
#### To add a CNAME record

1.  In the record editor, click <label>Add</label> and select <label>CNAME</label> to add a new CNAME record.

    ![](/files/record-cname-create-select.png)

1.  Enter the CNAME record information.

    ![](/files/record-cname-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - _Content_: the target host name this host will point to. It must be a host name (e.g. foo.bar.com) and not a URL (e.g. http://foo.bar.com or http://foo.bar.com/foo are invalid).

    As with any other DNS record, you can configure:

    - _TTL_: the record time-to-live.

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

    ![](/files/record-cname-item.png)

</div>


## Updating a CNAME record

<div class="section-steps" markdown="1">
#### To update a CNAME record

1.  In the record editor, search for the record and click on the _pencil_ icon to edit it.

    ![](/files/record-cname-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Removing a CNAME record

<div class="section-steps" markdown="1">
#### To remove a CNAME record

1.  In the record editor, search for the record and click on the _trash_ icon to delete it.

    ![](/files/record-cname-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>


## Common CNAME errors

### Cannot add a new record where a CNAME exists

To understand the error, it's important to understand a CNAME points a whole subdomain to another name in the domain name system. If you have another record on that subdomain, you can't add a CNAME, as that CNAME would render the other records useless. Let's look at an example:

Let's assume there's an MX record on email.example.com, and you try to add a CNAME on that exact subdomain (email.example.com). If you added the CNAME, it would override the subdomain (email.example.com) and render the MX record useless, leading to a lot of potential confusion when email stops. To counter this potential confusion, the domain name system doesn't allow other records alongside a CNAME.

You can achive a similar behavior as a CNAME with a ALIAS record. If you want a sub-domain to always resolve to the IP address of another domain, you can use a ALIAS record pointing to that domain. You should only do this if you absolutely need it, as the ALIAS record has a small amount of additional overhead when compared to A and CNAME records.
