---
title: Managing URL records
excerpt: Instructions to add, update, and remove an URL record in DNSimple.
categories:
- DNS
---

# Managing URL records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [URL records](/articles/url-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [URL record format](/articles/url-record#record-format) and usage.


## Add a URL record

<div class="section-steps" markdown="1">
#### To add a URL record

1.  In the record editor, click <label>Add</label> and select <label>URL</label> to add a new URL record.

    ![](/files/record-url-create-select.png)

1.  Enter the URL record information.

    ![](/files/record-url-create-new.png)

    - _Name_: the subdomain you want to redirect, without the domain name. For example, if you want to redirect `www.example.com` enter `www`. Leave it blank to redirect the root domain `example.com`.
    - _Content_: the redirect target URL. It must be a URL (e.g. `https://foo.bar.com`). It can also contain a path, query and any other standard URL components (e.g. `http://foo.bar.com/path/to/site?redir=1`).

    As with any other DNS record, you can configure:

    - _TTL_: the record time-to-live.

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

    ![](/files/record-url-item.png)

</div>


## Update a URL record

<div class="section-steps" markdown="1">
#### To update a URL record

1.  In the record editor, search the record and click on the _pencil_ icon to edit it.

    ![](/files/record-url-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>


## Remove a URL record

<div class="section-steps" markdown="1">
#### To remove a URL record

1.  In the record editor, search the record and click on the _trash_ icon to delete it.

    ![](/files/record-url-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>
