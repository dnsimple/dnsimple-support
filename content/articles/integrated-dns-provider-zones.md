---
title: Managing Integrated Zones for Integrated DNS Providers
excerpt: Learn how to synchronize, manage, and view zones at other authoritative DNS providers within DNSimple.
categories:
- DNS
- Integrations
---

# Managing Integrated Zones for Integrated DNS Providers

### Table of Contents {#toc}

* TOC
{:toc}

---
## Managing integrated zones for an Integrated DNS Provider

After connecting an Integrated DNS Provider to your DNSimple account, you can view, add, remove, or delete the imported zones.

- When you **add** a zone, it will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones/) page.
-  When you **remove** a zone, it will remain both in DNSimple and at the provider. Removal will not delete the zone or its records. However, you will no longer be able to
    - [Synchronize](/articles/record-editor-integrated-zones/#record-syncing) changes in the zone between DNSimple and the provider.
    - Make record changes to the zone on the provider's end via DNSimple.
- When you **delete** a zone, this retains the zone and its records at DNSimple, but deletes them from the provider.
  
**Steps to manage the zone selection for an Integrated DNS Provider:**

1. If you have multiple accounts, use the **account switcher** at the top-right corner to select the correct account.  
1. From the account switcher, click **Account settings**.  
1. In Account settings, click the **Integrated Providers** tab  
1. Under **Connected providers**, find the provider you want to manage and click **Manage Integrated Zones**.  
    ![Manage Integrated Zones for an Integrated DNS Provider](/files/account-integrated-provider-manage-integrated-zones.png)
   
1.  You will see the list of zones that have been imported into DNSimple from the Integrated DNS Provider.

    ![View imported Integrated Zones](/files/account-integrated-provider-view-zones.png)
    
1.  To add or remove zones, click **Manage Integrated Zones**. You can then update the selection of integrated zones that should be imported into DNSimple.

    ![Add or remove Integrated Zones](/files/account-integrated-provider-add-remove-zones.png)

1.  Click **Apply changes** to save the new selection.

## Adding a zone to an Integrated DNS Provider

If you have an existing domain in DNSimple, you can also add it to an Integrated DNS Provider from the DNS section of the domain management page. If the Integrated DNS Provider is not [connected](/articles/integrated-dns-providers/) to your DNSimple account, you will be prompted to connect it.

**Steps to add a zone to an Integrated Provider**

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.  
1. Click the **DNS** tab on the left side.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the **DNS Zone Providers** card, click **Add** on the relevant Integrated DNS Provider.

    ![Adding a Zone from DNS Zone Providers](/files/dns-zone-providers-add-zone.png)

1.  If the Integrated DNS Provider is already connected to the DNSimple account, select the desired one and click **Add** to add the zone to the provider.

    ![Adding a Zone to an already connected DNS Provider](/files/dns-zone-providers-add-to-linked-provider.png)

    For example, if the provider is Azure, the zone will be created at Azureand imported into DNSimple. If the zone already exists at Azure, zone creation will be skipped, and the zone will be imported into DNSimple.

## Connection requirement

The Integrated DNS Provider must be connected to the DNSimple account before the zone can be added to the provider. 

Setup guides are available for each supported provider:

- [Amazon Route 53](/articles/integrated-dns-provider-amazon-route53/)
- [Azure DNS](/articles/integrated-dns-provider-azure-dns/)
- [CoreDNS](/articles/integrated-dns-provider-coredns/)

Once the provider is connected, the zone will be added to the provider or just imported into DNSimple if the zone already existed at the provider.

![Adding a Zone to a DNS Provider that has not yet been connected](/files/dns-zone-providers-add-to-unlinked-provider.png)

## Removing integrated zones from DNSimple

If you imported a zone into DNSimple from an Integrated DNS Provider, you can use the **DNS Zone Providers** card to remove the zone from DNSimple without deleting it. 

This retains the zone and its records at both DNSimple and at the Integrated DNS Provider. However, you will no longer be able to [synchronize](/articles/record-editor-integrated-zones/#record-syncing) changes in the zone between DNSimple and the provider, or make record changes to the zone hosted by the provider via DNSimple.

**Steps to remove an integrated provider zone**

1. If you have multiple accounts, use the **account switcher** at the top-right corner of the screen to select the correct account.
1. From the **Domain Names** list, click the domain you want to manage.
1. Click the **DNS** tab on the left side.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the **DNS Zone Providers** card, click **Remove** on the relevant Integrated DNS Provider.

    ![Remove integrated zone](/files/dns-zone-providers-remove.png)

1.  Click **OK** in the confirmation dialog popup to proceed with the removal. The zone will remain in both DNSimple and at the Integrated DNS Provider, but you will no longer be able to synchronize or manage the zone at the provider via DNSimple.

    ![Confirm integrated zone removal](/files/dns-zone-providers-remove-zone-confirmation.png)

## Deleting a zone from an Integrated DNS Provider

If you imported a zone into DNSimple from an Integrated Provider, you can use the DNS Zone Providers card to delete the zone at the provider. **This retains the zone and its records at DNSimple, but deletes them from the provider.**

<warning>
In the case of CoreDNS, the CoreDNS configuration for the zone will be deleted, causing DNS changes for the zone to no longer sync with the CoreDNS cluster.
</warning>

**Steps to delete a zone from an Integrated Provider**

1. If you have multiple accounts, use the **account switcher** at the top-right corner of the screen to select the correct account.
2. From the **Domain Names** list, click the domain you want to manage.
3. Click the **DNS** tab on the left side.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the **DNS Zone Providers** card, click **Delete** on the relevant integrated DNS Provider.

    ![Deleting a Zone from the DNS Zone Providers card](/files/dns-zone-providers-delete.png)

1.  Enter the name of the zone to confirm deletion from the Integrated DNS Provider, and click **Delete**. The zone will be deleted from the Integrated DNS Provider, but will still be available at DNSimple.

    ![Deleting a Zone from a DNS provider](/files/dns-zone-providers-delete-zone.png)

## Have more questions?

If you have any questions about Integrated DNS Providers or managing your integrated zones, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
