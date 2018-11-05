---
title: Managing CAA records
excerpt: Instructions to add, update, and remove a CAA record in DNSimple.
categories:
- DNS
---

# Managing CAA records

### Table of Contents {#toc}

* TOC
{:toc}

---

<note>
This article describes a feature that is only available to the [new plans](/articles/new-plans#newer-plans-only).
</note>

You can manage [CAA records](/articles/caa-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [CAA record format](/articles/caa-record#record-format) and usage.

<note>
CAA records are only supported on the DNSimple primary name servers (ns1.dnsimple.com through ns4.dnsimple.com). We do not support transferring CAA records to secondary name servers.
</note>


## Standard mode vs Custom mode

The DNSimple interface allows you to manage CAA records using two different modes:

- the standard mode provides a pre-populated interface to help enter the appropriate values for the CAA record. <label>Provider</label> allows you to create a CAA record to whitelist a certificate authority. <label>Reports</label> allows you to create a CAA record to specify the email for reporting policy violations.
- the custom mode (<label>Custom</label>) allows you to modify the CAA record tag/value values directly.

We do not support the ability to specify via interface the destructured CAA record value representation. In other words, you cannot enter the following text:

```
0 issue "letsencrypt.com"
```


## Add a CAA record

<div class="section-steps" markdown="1">
#### To add a CAA record to whitelist a Certificate Authority

1.  In the record editor, click <label>Add</label> and select <label>CAA</label> to add a new CAA record.

    ![](/files/record-caa-create-select.png)

1.  Select the <label>Provider</label> tab.

1.  Enter the CAA record information.

    ![](/files/record-caa-create-new.png)

    - _Name_: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
    - _Provider_: the Certificate Authority you want to allow.
    - _Certificate type_: the type you want to allow.

    As with any other DNS record, you can configure:

    - _TTL_: the record time-to-live.

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

    ![](/files/record-caa-item.png)

</div>


## Update a CAA record

<div class="section-steps" markdown="1">
#### To update a CAA record

1.  In the record editor, search the record and click on the _pencil_ icon to edit it.

    ![](/files/record-caa-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Remove a CAA record

<div class="section-steps" markdown="1">
#### To remove a CAA record

1.  In the record editor, search the record and click on the _trash_ icon to delete it.

    ![](/files/record-caa-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
