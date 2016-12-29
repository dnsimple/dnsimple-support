---
title: What is a URL record?
excerpt: What is an URL record and how to add an URL record in DNSimple.
categories:
- DNS
---

# URL records?

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a URL record?

The **URL** record is a [special DNSimple record](/articles/supported-dns-records). URL records can be used to redirect a host name to another URL using our [redirector](/articles/redirector).

This feature can be used, for example, to redirect the www version of a domain the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain, without pointing it to any web hosting service.

For more information about the service, supported redirect types, and limitations visit the [redirector](/articles/redirector) article.


## Manage URL records

You can manage the URL records (redirects) for a domain from the [record editor](/articles/record-editor).

<div class="section-steps" markdown="1">
#### To add an URL record {#create}

1.  In the record editor, click <label>Add</label> and select <label>URL</label> to add a new URL record.

    ![](/files/record-url-create-select.png)

1.  Enter the URL record information.

    ![](/files/record-url-create-new.png)

    - The _Name_ is the subdomain you want to redirect, without the domain name. For example, if you want to redirect `wwww.example.com` enter `www`. Leave it blank to redirect the root domain `example.com`.

    - The _Destination URL_ is the URL where the domain will be redirected. It can be also be a subdirectory of a site or a single page.

    Once ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and will be visible in the record list.

    ![](/files/record-url-item.png)

</div>

<div class="section-steps" markdown="1">
#### To update an URL record {#update}

1.  In the record editor, search the record and click on the Pencil icon to edit it.

    ![](/files/record-url-item-edit.png)

1.  Update the information and click <label>Update Record</label> to save the record.
</div>

<div class="section-steps" markdown="1">
#### To remove an URL record {#delete}

1.  In the record editor, search the record and click on the Trash icon to delete it.

    ![](/files/record-url-item-delete.png)

1.  Confirm the dialog to delete the record.
</div>


## HTTPS redirects

The redirector doesn't support HTTPS, therefore you cannot redirect an HTTPS request.

Take a look at the article [redirector and HTTPS](/articles/redirector-https) for additional information and a list of possible of alternative solutions.
