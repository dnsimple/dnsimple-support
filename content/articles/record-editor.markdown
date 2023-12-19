---
title: Record Editor
excerpt: The Record Editor gives you the ability to view, create, and manage the DNS records for a domain.
categories:
- DNS
---

# Record Editor

### Table of Contents {#toc}

* TOC
{:toc}

---

The **Record Editor** is the DNSimple DNS editor. The editor gives you the ability to view, create, and manage the DNS records for a domain.

Any [supported DNS record type](/articles/supported-dns-records) can be managed from the record editor, except system records.


## Locating the record editor

To access the record editor from the domain page, click on the records icon.

![Record Editor from the domain page](/files/rec-editor-domain-page.png)


## System records

System Records are special DNS records created by DNSimple when you add a domain to your account. They're necessary to resolve your domain. They can't be edited from the record editor, because they're managed by the DNSimple system.

![System Records](/files/rec-editor-page.png)

The system records include a [SOA record](/articles/soa-record) and the [four name servers](/articles/ns-record), as long as the domain is resolving with DNSimple name servers.

## Adding a record

From the <label>Add a Record</label> menu select a DNS record type, and click on the type to enter the new record page. DNSimple supports [several different DNS record types](/articles/supported-dns-records).

![Select Record Type](/files/rec-editor-new-record.png)

## Simple editor

In most cases, you'll be asked to provide a _Name_, a _TTL_, and the content for the record.

- _Name_: This is the record hostname. Leave it blank to configure a record for the root domain. Otherwise, enter the subdomain part for a different hostname. You can also enter an `*` for a wildcard record.

- _TTL_: TTL stands for Time-to-Live. It determines how long a DNS lookup for that record can be cached. The default value is 1 hour (3600 seconds), but you can adjust it by selecting a different value from the select field.

Enter the required infomation and press <label>Add Record</label> to create the record.

## Record fields editor

Some DNS record types count with a special form that breaks the record content's parts into separate fields. This form provides enhanced error messages to help address any issues.

You can always switch back to the simple editor using the tabs on top. This can be useful when pasting DNS record content from a third-party service provider.

![Simple editor tab](/files/rec-editor-simple-editor-tab.png)

### Specific record instructions

- [A records](/articles/manage-a-record)
- [AAAA records](/articles/manage-aaaa-record)
- [CAA records](/articles/manage-caa-record)
- [CNAME records](/articles/manage-cname-record)
- [URL records](/articles/manage-url-record)


## Updating a record

To modify a record, click on the edit icon at the end of the record row.

![Update Record](/files/rec-editor-edit.png)


## Deleting a record

To delete a record, click on the trash icon at the end of the record row.

<warning>
Please note there's no undo. The only way to restore a deleted record is to create it again.
</warning>

![Delete Record](/files/rec-editor-delete.png)
