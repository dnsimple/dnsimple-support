---
title: Managing AAAA records
excerpt: Instructions to add, update, and remove an AAAA record in DNSimple.
categories:
- DNS
---

# Managing AAAA records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [AAAA records](/articles/aaaa-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [AAAA record format](/articles/aaaa-record#record-format) and usage.


## Add an AAAA record

<div class="section-steps" markdown="1">
#### To add an AAAA record

1.  In the record editor, click <label>Add</label> and select <label>AAAA</label> to add a new AAAA record.

    ![](/files/record-aaaa-create-select.png)

1.  Enter the AAAA record information.

    ![](/files/record-aaaa-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - _IP Address_: the IPv6 address the record will resolve to.

    As with any other DNS record, you can configure:

    - _TTL_: the record time-to-live.

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and will be visible in the record list.

    ![](/files/record-aaaa-item.png)

</div>


## Update an AAAA record

<div class="section-steps" markdown="1">
#### To update an AAAA record

1.  In the record editor, search the record and click on the _pencil_ icon to edit it.

    ![](/files/record-aaaa-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Remove an AAAA record

<div class="section-steps" markdown="1">
#### To remove an AAAA record

1.  In the record editor, search the record and click on the _trash_ icon to delete it.

    ![](/files/record-aaaa-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
