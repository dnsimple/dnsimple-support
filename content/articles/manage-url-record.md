---
title: Managing URL Records
excerpt: Instructions to add, update, and remove a URL record in DNSimple.
meta: Learn how to easily manage your URL records in DNSimple with our step-by-step guide. Add, update, or remove records to optimize your domain's performance.
categories:
- DNS
---

# Managing URL Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [URL records](/articles/url-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [URL record format](/articles/url-record-format-details/) and usage.


## Adding a URL record

<div class="section-steps" markdown="1">
#### To add a URL record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add** and select **URL** to add a new URL record.

    ![screenshot: Selecting URL record from list of record types](/files/record-url-create-select.png)

1.  Enter the URL record information.

    ![screenshot: Create new URL record form](/files/record-url-create-new.png)

    - **Name**: The subdomain you want to redirect, without the domain name. For example, if you want to redirect `www.example.com` enter `www`. Leave it blank to redirect the root domain `example.com`.
    - **Content**: The redirect target URL. It must be a URL (e.g. `https://blog.example.com`). It can also contain a path, query and any other standard URL components (e.g. `http://blog.example.com/path/to/site?redir=1`).

    As with any other DNS record, you can configure:

    - **TTL**: The record [time-to-live](/articles/what-is-ttl/).
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Include a [record note](/articles/record-notes/) (optional).

    Once you're ready, click **Add Record** to confirm and create the record.

1.  The record is created and visible in the record list.

    ![screenshot: Showing new URL record form](/files/record-url-item.png)

</div>


## Updating a URL record

<div class="section-steps" markdown="1">
#### To update a URL record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the URL record you want to update in the list.
1. Click the **edit** icon (🖊️) at the end of the record row to edit it.

    ![screenshot: Showing button to edit an existing URL record](/files/record-url-item-edit.png)

1.  Update the information and click **Update Record** to save the record.
</div>

## Removing a URL record

<div class="section-steps" markdown="1">
#### To remove a URL record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the URL record you want to update in the list.
1. Click the **trash** icon on the right side of the row to delete it.

    ![Screenshot: Showing button for deleting a URL record](/files/record-url-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>

## Have more questions?
If you have any questions or need assistance managing URL records, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
