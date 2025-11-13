---
title: Syncing Integrated Zone Records Between DNS Providers
excerpt: Synchronize the DNS records of a zone at DNSimple across Integrated DNS Providers.
categories:
- DNS
---

# Syncing Integrated Zone Records Between DNS Providers

If your zone is out of sync across its [Integrated DNS Providers](/articles/what-are-integrated-providers/), a warning message will appear at the top of the Record Editor page. You can use the **Synchronize DNS records** feature to bring the records back in sync.

![Record Editor Integrated Records Out of Sync](/files/record-editor-integrated-zones-out-of-sync.png)

## Syncing zone records

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the Record Editor, click **Synchronize DNS records**.

    ![Record Editor Sync Records button](/files/record-editor-integrated-zones-sync-button.png)

1. In the pop-up, select the DNS provider that will be the source of the zone records.
1. Select the DNS provider that will be the destination.
1. Confirm the synchronization.

    ![Record Editor Delete Integrated Record](/files/record-editor-integrated-zones-sync-records.png)

## What happens during the sync
When you synchronize, records in the destination zone can be created, updated, and deleted to make the records in the destination zone match those in the source zone. Only record types supported at both providers will be affected, and only record field information supported at DNSimple (e.g., record TTL) will be preserved.

## Have more questions? 
If you have additional questions or need any assistance with your integrated zone records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
