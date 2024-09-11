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

1. In the record editor, click <label>Add record</label> and select <label>A</label> from the dropdown menu to add a new A record.
    ![screenshot: select A record from record type](/files/select-a-record.png)

1. Enter the A record information.
    ![screenshot: Showing form for creating an A record for a domain](/files/record-a-create-new.png)

    - **Name**: The subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`.

    <note>
    Some providers may instruct you to name the record `@` to denote the current origin. In DNSimple, leave it blank to represent the root domain `example.com`.
    </note>

    - **IP Address**: The IPv4 address the record will resolve to.

    As with any other DNS record, you can configure:

    - **TTL**: The record time-to-live.
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Optionally include a [record note](/articles/record-notes/).

1. Once you're ready, click <label>Add Record</label> to confirm and create the record.

1. The record is created and visible in the record list.
   ![screenshot: a record added](/files/a-record-created.png)

</div>


## Updating an A record

<div class="section-steps" markdown="1">
#### To update an A record

1. In the record editor, search for the record, and click the _pencil_ icon to edit it.
  ![screenshot: edit an A record](/files/a-record-edit.png)
1. Update the information, and click <label>Update Record</label> to save the record.
</div>


## Removing an A record

<div class="section-steps" markdown="1">
#### To remove an A record

1. In the record editor, search for the record, and click the _trash_ icon to delete it.
  ![screenshot: delete A record](/files/a-record-delete.png)
1. Confirm the dialog to delete the record.
</div>

## Need more help?

If you have any questions or need assistance adding A records to your domain, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
