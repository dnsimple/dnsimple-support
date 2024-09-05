---
title: Managing CNAME Records
excerpt: Instructions to add, update, and remove an CNAME record in DNSimple.
categories:
- DNS
---

# Managing CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [CNAME records](/articles/cname-record) in DNSimple using the [DNS record editor](/articles/record-editor).

The instructions in this article assume you're familiar with the [CNAME record format](/articles/cname-record#record-format) and usage.

## Adding a CNAME record

<div class="section-steps" markdown="1">
#### To add a CNAME record

1.  In the record editor, click <label>Add record</label> and select <label>CNAME</label> from the dropdown menu.

<!--- needs screenshot -->

1.  Enter the CNAME record information.

    ![screenshot: create new CNAME record form](/files/record-cname-create-new.png)

    - **Name**: the subdomain you want to create the record for, without the domain name. For example, if you want to represent `www.example.com` enter `www`. This field cannot be left blank. 
    - **Content**: the target host name this host will point to. It must be a host name (e.g. blog.dnsimple.com) and not a URL (e.g. http://blog.dnsimple.com or http://blog.dnsimple.com/foo are invalid).

    As with any other DNS record, you can configure:

    - **TTL**: the record time-to-live.
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Optionally include a [record note](/articles/record-notes/).

    Click **Add Record** to confirm and create the record.

1.  The record is created and visible in the record list.

<!--- needs screenshot -->

</div> 

<note>
**You cannot add a new record where a CNAME exists**. A CNAME record points a whole subdomain to another name in the domain name system. If you have another record on that subdomain, you can't add a CNAME, as that CNAME would render the other records useless. 
</note>

For example:

> There's an MX record on email.example.com, and you try to add a CNAME on that exact subdomain (email.example.com). If you added the CNAME, it would override the subdomain
> (email.example.com), and render the MX record useless, which stops your email. To counter this potential error, the domain name system doesn't allow other records alongside
> a CNAME.

You can achive similar behavior to CNAME records with an [ALIAS](/articles/alias-record/) record. If you want a sub-domain to always resolve to the IP address of another domain, you can use an ALIAS record pointing to that domain. You should only do this if you absolutely need it, as the ALIAS record has a small amount of additional overhead when compared to [A](/articles/a-record/) and CNAME records.

## Updating a CNAME record

<div class="section-steps" markdown="1">
#### To update a CNAME record

1.  In the record editor, search for the record and click on the _pencil_ icon to edit it.

<!--- needs screenshot -->

1.  Update the information and click <label>Update Record</label> to save the record.
</div>

## Removing a CNAME record

<div class="section-steps" markdown="1">
#### To remove a CNAME record

1.  In the record editor, search for the record and click on the _trash_ icon to delete it.

<!--- needs screenshot -->

1.  Confirm the dialog to delete the record.
</div>

## Have more questions?

If you have more questions or need assistance setting up CNAME records, just [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
