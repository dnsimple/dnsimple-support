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

The record editor is DNSimple's DNS editor. It gives you the ability to view, create, and manage the DNS records for a domain.

Any [supported DNS record type](/articles/supported-dns-records) can be managed from the record editor, except system records.

## Locating the record editor

1. Click the relevant domain name.
1. Click the DNS tab on the left side.
    ![dns tab link](/files/dns-tab.png)

## System records

System records are special DNS records created by DNSimple when you add a domain to your account. They're necessary to resolve your domain. They can't be edited from the record editor, because they're managed by the DNSimple system.

![custom vs system record](/files/custom-vs-system-record.png)

The system records include an [SOA record](/articles/soa-record) and the [four name servers](/articles/ns-record), as long as the domain is resolving with DNSimple's name servers.

## Adding a record

From the <label>Add a Record</label> menu select a DNS record type, and click on the type to enter the new record page. DNSimple supports [several different DNS record types](/articles/supported-dns-records).

![Select Record Type](/files/rec-editor-new-record.png)

<Info>
To make changes to records, you will need to have access to the account or have been given access to the specific domain. When adding a record, make sure the domain is delegating to us so the records propagate.
</Info>

## Simple editor

In most cases, you'll be asked to provide a **Name**, a **TTL**, and the content for the record.

- **Name**: This is the record hostname. Leave it blank to configure a record for the root domain. Otherwise, enter the subdomain part for a different hostname. You can also enter an `*` for a wildcard record.

- **TTL**: TTL stands for Time-to-Live. It determines how long a DNS lookup for that record can be cached. The default value is 1 hour (3600 seconds), but you can adjust it by selecting a different value from the select field.

Enter the required information, and click <label>Add Record</label> to create the record.

## Record fields editor

Some DNS record types count with a special form that breaks the record content's parts into separate fields. This form provides enhanced error messages to help address any issues.

You can always switch back to the simple editor using the tabs on top. This can be useful when pasting DNS record content from a third-party service provider.

![switch to simple record editor](/files/switch-to-simple-editor.png)

### Specific record instructions

- [A records](/articles/manage-a-record)
- [AAAA records](/articles/manage-aaaa-record)
- [CAA records](/articles/manage-caa-record)
- [CNAME records](/articles/manage-cname-record)
- [URL records](/articles/manage-url-record)


## Updating a record

To modify a record, click on the edit icon at the end of the record row.

![modify a record](/files/modify-record.png)

## Deleting a record

To delete a record, click on the trash icon at the end of the record row.

<warning>
There is no way to undo deleting a record. The only way to restore a deleted record is to create it again.
</warning>

![delete record](/files/delete-record.png)

## Managing integrated zone records

The Record Editor is also used to manage records for your integrated zones. Refer to [Record Editor for Integrated Zones](/articles/record-editor-integrated-zones) for more details.

## Have more questions?

If you have any questions or need assistance with the record editor, reach out to [support](https://dnsimple.com/feedback), and we'll be happy to help.
