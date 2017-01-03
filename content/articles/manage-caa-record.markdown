---
title: Add, Update, and Remove a CAA records
excerpt: Instructions to add, update, and remove a CAA record in DNSimple.
categories:
- DNS
---

# Manage CAA records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CAA records](/articles/caa-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assumes you are familiar with the [CAA record format](/articles/caa-record#caa-record-format) and usage.


## Standard mode vs Custom mode

The DNSimple interface allows you to manage CAA records using two different modes:

- the standard mode provides a pre-populated interface to help enter the appropriate values for the CAA record. <label>Provider</label> allows you to create a CAA record to whitelist a certificate authority. <label>Reports</label> allows you to create a CAA record to specify the email for reporting policy violations.
- the custom mode (<label>Custom</label>) allows you to modify the CAA record tag/value values directly.

We currently do not support the ability to specify via interface the destructured CAA record value representation; in other words you cannot enter the following text:

    0 issue "letsencrypt.com"


## Add a CAA record

<div class="section-steps" markdown="1">
#### To add a CAA record to whitelist a Certificate Authority

1.  In the record editor, click <label>Add</label> and select <label>CAA</label> to add a new CAA record.

    ![](/files/record-caa-create-select.png)

1.  Select the <label>Provider</label> tab.

1.  Enter the CAA record information.

    ![](/files/record-caa-create-new.png)

    - The _Name_ is the subdomain you want to create the record for, without the domain name. For example, if you want to represent `wwww.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - The _Provider_ is the Certificate Authority you want to allow.
    - The _Certificate type_ is the type you want to allow.

    As any other DNS record, you can configure:

    - The _TTL_ is the record time-to-live.

    Once ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and will be visible in the record list.

    ![](/files/record-caa-item.png)

</div>


## Update a CAA record

<div class="section-steps" markdown="1">
#### To update a CAA record

1.  In the record editor, search the record and click on the Pencil icon to edit it.

    ![](/files/record-caa-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Remove a CAA record

<div class="section-steps" markdown="1">
#### To remove a CAA record

1.  In the record editor, search the record and click on the Trash icon to delete it.

    ![](/files/record-url-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
