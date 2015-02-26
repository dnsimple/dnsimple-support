---
title: Record Editor
excerpt: The Record Editor gives you the ability to view, create and manage the DNS records for a domain. Hosted DNS has never been this easy.
categories:
- DNS
---

# Record Editor

The **Record Editor** is the DNSimple DNS editor. The editor gives you the ability to view, create and manage the DNS records for a domain.

Any [supported DNS record type](/articles/supported-dns-records) can be managed from the record editor, except system records.

## Access the record editor

To access the record editor from the main domain list page, click on the *records* button at the end of the domain row.

![Record Editor from the domain list](http://cl.ly/image/2m143A0W3E1E/rec-editor-domain-list.png)

From the domain page, navigate to the DNS tab and then click on the *manage records* link

![Record Editor from the domain page](http://cl.ly/image/0F3f0f0F3q0G/rec-editor-dns-page.png)

## System records

System Records are special DNS records created by DNSimple when you add a domain to your account. They are necessary to resolve your domain and cannot be edited from the record editor because they are managed by the DNSimple system.

![System Records](http://cl.ly/image/3u0f1T1m0908/rec-editor-page.png)

The system records include a [SOA record](/articles/soa-record) and the [four name servers](/articles/ns-record), as long as the domain is resolving with DNSimple name servers.

## Create a record

From the *Add a Record* menu select a DNS record type and click on the type to enter the new record page. DNSimple supports [several different DNS record types](/articles/supported-dns-records).

![Select Record Type](http://cl.ly/image/202M2x3m3M1e/rec-editor-new-record.png)

The creation page varies depending on the record type you selected. In most cases, you will be asked to provide a **Name**, a content and a **TTL**.

![New Record Page](http://cl.ly/image/0E3r3I171i3E/rec-editor-add-new-cname.png)

- `Name`: This is the record hostname. Leave it blank to configure a record for the root domain. Otherwise, just enter the subdomain part for a different hostname. You can also enter an `*` for a wildcard record.

- `Alias for`: The content value and format changes depending on the selected record type. For instance, if you are creating an A record you will need to enter the IP address. For an ALIAS or CNAME record, the content will be the target fully-qualified domain name.

- `TTL`: TTL standard for Time-to-Live. It determines how long a DNS lookup for that record can be cached. The default value is 1 hour (3600 seconds), but you can adjust it selecting as different value from the select field.

Enter the required infomation and press *Add Record* to create the record.

## Edit a record

To modify a record, click on the edit icon at the end of the record row.

![Update Record](http://cl.ly/image/2o2R000H2B0Q/rec-editor-edit.png)

## Delete a record

To delete a record, click on the red cross icon at the end of the record row.

<warning>
Please note that there is no undo. The only way to restore a deleted record is to create it again.
</warning>

![Delete Record](http://cl.ly/image/2r1s141e363o/rec-editor-delete.png)
