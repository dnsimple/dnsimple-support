---
title: Export Zone File
excerpt: This article explains how to export zone text files in DNSimple.
meta: Learn how to export your DNS zone file from DNSimple. Create backups and transfer DNS records to other systems using standard zone file format.
categories:
- DNS
---

# Export Zone File

## Exporting records from a zone file

You can export your domain's records into a [zone file](/articles/what-is-zone-file/) using the [Record Editor](/articles/record-editor/).

The resulting zone file will allow you to copy over all the domain's records to a third-party system. You can also keep the zone file as a backup of your domain's records. To import records from a zone file, see [Import Zone File](/articles/import-records-zone-file/).

> [!NOTE]
> Non-standard records, like [ALIAS](/articles/alias-record/) and [POOL](/articles/pool-record/), will be commented out in the resulting file.

<div class="section-steps" markdown="1">
##### How to export your domain's records to a zone file

1. Use the **account switcher** at the top of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage
1. Click the **DNS** tab on the left.
1. Click the **Export** link inside the **Zones** card located on the right-hand panel. This creates a text file that you can save on your computer.

    ![Export zone link](/files/export-zone.png)
</div>

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
