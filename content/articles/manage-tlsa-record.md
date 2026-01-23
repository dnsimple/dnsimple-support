---
title: Managing TLSA Records
excerpt: Instructions to add, update, and remove a TLSA record in DNSimple.
meta: Learn how to effectively manage TLSA records in DNSimple with our step-by-step guide. Add, update, or remove records to enhance your domain's TLS security.
categories:
- DNS
---

# Managing TLSA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [TLSA records](/articles/tlsa-record/) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [TLSA record format](/articles/tlsa-record-format/) and usage.

> [!NOTE]
> TLSA records are only supported on the [DNSimple name servers](/articles/dnsimple-nameservers/). We don't support transferring TLSA records to secondary name servers.

> [!IMPORTANT]
> TLSA records provide security benefits only when used in conjunction with **DNSSEC (DNS Security Extensions)**. Without DNSSEC, an attacker could modify TLSA records to point to their own certificates, negating the security benefits. Before adding TLSA records, ensure that [DNSSEC is enabled](/articles/enabling-dnssec/) for your domain.

## Adding a TLSA record

<div class="section-steps" markdown="1">
#### To add a TLSA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add**, and select **TLSA** to add a new TLSA record.
1. Enter the TLSA record information.

    - _Name_: the service name and port you want to create the record for, following the format `_port._protocol.hostname`. For example, for HTTPS on port 443, you would enter `_443._tcp`. For SMTP on port 25, you would enter `_25._tcp`. Leave the hostname portion blank to represent the root domain, or specify a subdomain.
    - _Usage_: the usage field value (0-3) that indicates how the TLSA record should be used.
    - _Selector_: the selector field value (0-1) that specifies which part of the certificate to match.
    - _Matching Type_: the matching type field value (0-2) that defines how the certificate data is represented.
    - _Certificate Association Data_: the certificate data or hash value that should be matched.

    As with any other DNS record, you can configure:

    - _TTL_: the record [time-to-live](/articles/what-is-ttl/).
    - _Respond From Regions_: Configure [Regional Records](/articles/regional-records/) if desired.
    - _Notes_: Optionally include a [record note](/articles/record-notes/).

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1.  The record is created and visible in the record list.

</div>

> [!NOTE]
> Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
> - In DNSimple, **Name** = what others might call _Host._
> - In DNSimple, **Content** = what others might call _Value._

## Updating a TLSA record

<div class="section-steps" markdown="1">
#### To update a TLSA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the TLSA record you want to update in the list.
1. Click the edit icon (🖊️) at the end of the record row to edit it.

1.  Update the information and click **Update Record** to save the record.
</div>


## Removing a TLSA record

<div class="section-steps" markdown="1">
#### To remove a TLSA record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the TLSA record you want to remove in the list.
1. Click the _trash_ icon at the end of the row to delete it.

1.  Confirm the dialog to delete the record.
</div>

## Have more questions?

If you have additional questions or need any assistance with your TLSA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

