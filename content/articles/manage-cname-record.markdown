---
title: Add, Update, and Remove CNAME records
excerpt: Instructions to add, update, and remove an CNAME record in DNSimple.
categories:
- DNS
---

# Manage CNAME records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CNAME records](/articles/cname-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assumes you are familiar with the [CNAME record format](/articles/cname-record#record-format) and usage.


## Add a CNAME record

<div class="section-steps" markdown="1">
#### To add a CNAME record

1.  In the record editor, click <label>Add</label> and select <label>CNAME</label> to add a new CNAME record.

    ![](/files/record-cname-create-select.png)

1.  Enter the CNAME record information.

    ![](/files/record-cname-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - _Content_: the target host name this host will point to. It must be an host name (e.g. foo.bar.com) and not an URL (e.g. http://foo.bar.com or http://foo.bar.com/foo are invalid).

    As any other DNS record, you can configure:

    - _TTL_: the record time-to-live.

    Once ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and will be visible in the record list.

    ![](/files/record-cname-item.png)

</div>


## Update a CNAME record

<div class="section-steps" markdown="1">
#### To update a CNAME record

1.  In the record editor, search the record and click on the _pencil_ icon to edit it.

    ![](/files/record-cname-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Remove a CNAME record

<div class="section-steps" markdown="1">
#### To remove a CNAME record

1.  In the record editor, search the record and click on the _trash_ icon to delete it.

    ![](/files/record-cname-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
