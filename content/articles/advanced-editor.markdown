---
title: Record Editor
excerpt: The Record Editor gives you the ability to view, create and manage the DNS records for a domain.
categories:
- DNS
---

# Record Editor

The **Record Editor** is the DNSimple DNS editor. The editor gives you the ability to view, create and manage the DNS records for a domain.

Any [supported DNS record type](/articles/supported-dns-records) can be managed from the record editor, except system records.

## Access the record editor

To access the record editor from the main domain list page, click on the grey gear icon at the end of the domain row.

![Record Editor from the domain list](http://f.cl.ly/items/2D1k2P1V0H3L0c1x3j1e/dnsimple-editor-from-list.png)

From the domain page, click on the *Advanced Editor* button at the top of the page.

![Record Editor from the domain page](http://f.cl.ly/items/0H423p0w2S340P0K3D1H/dnsimple-editor-from-show.png)

## System records

System Records are special DNS records created by DNSimple when you add a domain to your account. They are necessary to resolve your domain and cannot be edited from the record editor because they are managed by the DNSimple system.

System Records are displayed in light grey in the record editor.

![System Records](http://f.cl.ly/items/0F3x1q181e0g1U1e1a0y/dnsimple-system-records.png)

The system records include a [SOA record](/articles/soa-record) and the [four name servers](/articles/ns-record), as long as the domain is resolving with DNSimple name servers.

## Create a record

From the *Add a Record* menu select a DNS record type and click on the type to enter the new record page. DNSimple supports [several different DNS record types](/articles/supported-dns-records).

![Select Record Type](http://f.cl.ly/items/0K1b3C0s0R072x2W0p3u/dnsimple-record-select.png)

The creation page varies depending on the record type you selected. In most cases, you will be asked to provide a **Name**, a content and a **TTL**.

![New Record Page](http://f.cl.ly/items/1c2l2a2N0u0s1E1V1Q3Y/dnsimple-record-new.png)

- `Name`: This is the record hostname. Leave it blank to configure a record for the root domain. Otherwise, just enter the subdomain part for a different hostname. You can also enter an `*` for a wildcard record.

- `Content`: The content value and format changes depending on the selected record type. For instance, if you are creating an A record you will need to enter the IP address. For an ALIAS or CNAME record, the content will be the target fully-qualified domain name.

- `TTL`: TTL standard for Time-to-Live. It determines how long a DNS lookup for that record can be cached. The default value is 1 hour (3600 seconds), but you can adjust it selecting as different value from the select field.

Enter the required infomation and press *Add Record* to create the record.

![Create Record](http://f.cl.ly/items/1g3w130v0q0k0Z1Y0N1a/dnsimple-record-create.png)

## Edit a record

To modify a record, click on the edit icon at the end of the record row.

![Update Record](http://f.cl.ly/items/1z1P0W2W0X0f2c1f3W2Y/dnsimple-record-update.png)

## Delete a record

To delete a record, click on the red cross icon at the end of the record row.

<warning>
Please note that there is no undo. The only way to restore a deleted record is to create it again.
</warning>

![Delete Record](http://f.cl.ly/items/0D2R2a0l0b3Y1H3U3c0Y/dnsimple-record-delete.png)
