---
title: Managing A Records
excerpt: Instructions to add, update, and remove an A record in DNSimple.
categories:
- DNS
---

# Managing A Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [A records](/articles/a-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [A record format](/articles/a-record#record-format) and usage.


## Adding an A record

<div class="section-steps" markdown="1">
#### To add an A record

1.  In the record editor, click <label>Add</label> and select <label>A</label> to add a new A record.

    ![](/files/record-a-create-select.png)

1.  Enter the A record information.

    ![](/files/record-a-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.

    <note>
    Some providers may instruct you to name the record `@`. `@` denotes the current origin. In DNSimple, just leave it blank to represent the root domain `example.com`.
    </note>
    - _IP Address_: the IPv4 address the record will resolve to.

    As with any other DNS record, you can configure:

    - _TTL_: the record time-to-live.
    - _Respond From Regions_: Configure [Regional records](/articles/regional-records/) if desired.
    - _Notes_: Optionally include a [record note](/articles/record-notes/).

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

    ![](/files/record-a-item.png)

</div>


## Updating an A record

<div class="section-steps" markdown="1">
#### To update an A record

1.  In the record editor, search for the record and click on the _pencil_ icon to edit it.

    ![](/files/record-a-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Removing an A record

<div class="section-steps" markdown="1">
#### To remove an A record

1.  In the record editor, search for the record and click on the _trash_ icon to delete it.

    ![](/files/record-a-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
