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

The instructions in this article assume you're familiar with the [AAAA record format](/articles/aaaa-record#record-format) and usage.


## Adding an AAAA record

<div class="section-steps" markdown="1">
#### To add an AAAA record

1. In the record editor, click <label>Add record</label> and select <label>AAAA</label> from the dropdown menu to add a new AAAA record.
  ![screenshot: add AAA record](/files/aaa-record-add.png)
1. Enter the AAAA record information.
  ![screenshot: Showing the form for creating a new AAAA record](/files/record-aaaa-create-new.png)

  - **Name**: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.
  - **IP Address**: the IPv6 address the record will resolve to.

    As with any other DNS record, you can configure:

  - **TTL**: the record time-to-live.
  - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
  - **Notes**: Optionally include a [record note](/articles/record-notes/).

Click <label>Add Record</label> to confirm and create the record.

The record is created and will be visible in the record list.
  ![screenshot: AAA record created](/files/aaa-record-created.png)
</div>

## Updating an AAAA record

<div class="section-steps" markdown="1">
#### To update an AAAA record

1. In the record editor, search for the record, and click the _pencil_ icon to edit it.
  ![screenshot: edit an AAA record](/files/aaa-record-edit.png)

1. Update the information, and click <label>Update Record</label> to save the record.
</div>


## Removing an AAAA record

<div class="section-steps" markdown="1">
#### To remove an AAAA record

1. In the record editor, search for the record, and click the _trash_ icon to delete it.
  ![screenshot: delete aaa record](/files/aaa-record-delete.png)
1. Confirm the dialog to delete the record.
</div>

## Need more help?

If you have any questions or need assistance adding AAAA records to your domain, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
