---
title: Managing Integrated DNS Providers
excerpt: Connect an Integrated DNS Provider to your DNSimple account to synchronize, manage, and view zones at other authoritative DNS providers within DNSimple.
categories:
- DNS
- Integrations
---

# Managing Integrated DNS Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

## Connecting an Integrated DNS Provider to your account {#connecting-an-integrated-dns-provider}

1. At DNSimple, select the relevant account from the account switcher at the top-right corner of the screen, then click **Account settings**.
1. Click the **Integrated Providers** tab.
1. Under **Connect an Integrated Provider**, click **Connect** for the Integrated DNS Provider you want to link to your DNSimple account.
![Connect an Integrated DNS Provider](/files/account-integrated-provider-link.png)
1. Fill in any required parameters for the Integrated DNS Provider configuration.
1. Fill in any necessary credentials for your account at the Integrated DNS Provider.
![Enter Integrated DNS Provider credentials](/files/account-external-provider-link-credentials.png)
1. After successfully connecting the Integrated DNS Provider, you will be able to view a list of the zones that are at that provider *(This does not apply to the CoreDNS provider)*. Select the zones you want to import into DNSimple, and click **Add zones**.
![Add zones after connecting an Integrated DNS Provider](/files/account-integrated-dns-provider-connect-add-zones.png)
1. If you selected any zones to import into DNSimple, you will be redirected to the [Domain Names](/articles/managing-integrated-zones/) page where the zone import will start. When you visit the Integrated Providers page again, you will be able to see the newly connected Integrated DNS Provider listed under **Connected providers**. Click **Manage Integrated Zones** to add or remove from the selection of zones for import. Imported integrated zones will be listed on the [Domain Names](/articles/managing-integrated-zones/) page, and you can manage and sync integrated zone records from the [Record Editor](/articles/record-editor-integrated-zones/).

## Disconnecting an Integrated DNS Provider from your account {#disconnecting-an-integrated-dns-provider}

1. At DNSimple, select the relevant account from the account switcher at the top-right corner of the screen, then click **Account settings**.
1. Click the **Integrated Providers** tab.
1. Under **Connected providers**, click **Disconnect** for the Integrated DNS Provider you want to disconnect from your DNSimple account. This will remove the ability to view and manage zones and their DNS records at the connected provider via DNSimple.
![Disconnect an Integrated DNS Provider](/files/account-integrated-provider-unlink.png)


## Managing integrated zones for an Integrated DNS Provider {#managing-integrated-zone-selection}

After connecting an Integrated DNS Provider to your DNSimple account, you can view, add to, or remove the imported zones.

When you add a zone, it will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones/) page.

When you remove a zone, it will remain both in DNSimple and at the provider. Removal will not delete the zone or its records. However, you will no longer be able to [synchronize](/articles/record-editor-integrated-zones/#record-syncing) changes in the zone between DNSimple and the provider, or make record changes to the zone on the provider's end via DNSimple.

To manage the zone selection for an Integrated DNS Provider, follow these steps:

1. At DNSimple, select the relevant account from the account switcher at the top-right corner of the screen, then click **Account settings**.

1. Click the **Integrated Providers** tab.

1.  Under **Connected providers**, click **Manage Integrated Zones** for the appropriate Integrated DNS Provider.

    ![Manage Integrated Zones for an Integrated DNS Provider](/files/account-integrated-provider-manage-integrated-zones.png)

1.  You will see the list of zones that have been imported into DNSimple from the Integrated DNS Provider.

    ![View imported Integrated Zones](/files/account-integrated-provider-view-zones.png)

1.  To add or remove zones, click **Manage Integrated Zones**. You can then update the selection of integrated zones that should be imported into DNSimple.

    ![Add or remove Integrated Zones](/files/account-integrated-provider-add-remove-zones.png)

1.  Click **Apply changes** to save the new selection.

## Adding a zone to an Integrated DNS Provider {#adding-a-zone-to-an-integrated-dns-provider}

If you have an existing domain in DNSimple, you can also add it to an Integrated DNS Provider from the DNS section of the domain management page. If the Integrated DNS Provider is not [connected](/articles/integrated-dns-providers/#connecting-an-integrated-dns-provider) to your DNSimple account, you will be prompted to connect it.

1.  Click the **DNS** tab on the domain's management page.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the DNS Zone Providers card, click **Add** on the relevant Integrated DNS Provider.

    ![Adding a Zone from DNS Zone Providers](/files/dns-zone-providers-add-zone.png)

1.  If the Integrated DNS Provider is already connected to the DNSimple account, select the desired one and click **Add** to add the zone to the provider.

    ![Adding a Zone to an already connected DNS Provider](/files/dns-zone-providers-add-to-linked-provider.png)

    For example, if the provider is Azure, the zone will be created at Azure and imported into DNSimple. If the zone already exists at Azure, zone creation will be skipped, and the zone will be imported into DNSimple.

1.  The Integrated DNS Provider must be connected to the DNSimple account before the zone can be added to the provider. Setup guides can be found in each provider's [support article](/articles/integrated-dns-providers/#supported-integrated-dns-providers). Once the provider is connected, the zone will be added to the provider, or simply imported into DNSimple if the zone already existed at the provider.

    ![Adding a Zone to a DNS Provider that has not yet been connected](/files/dns-zone-providers-add-to-unlinked-provider.png)

## Removing integrated zones from DNSimple {#removing-integrated-zones-from-DNSimple}

If you've imported a zone into DNSimple from an Integrated DNS Provider, you can use the DNS Zone Providers card to remove the zone from DNSimple without deleting it. This retains the zone and its records at both DNSimple and at the Integrated DNS Provider. However, you will no longer be able to [synchronize](/articles/record-editor-integrated-zones/#record-syncing) changes in the zone between DNSimple and the provider, or make record changes to the zone hosted by the provider via DNSimple.

1.  Click the **DNS** tab on the domain's management page.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the DNS Zone Providers card, click **Remove** on the relevant Integrated DNS Provider.

    ![Remove integrated zone](/files/dns-zone-providers-remove.png)

1.  Click **OK** in the confirmation dialog popup to proceed with the removal. The zone will remain in both DNSimple and at the Integrated DNS Provider, but you will no longer be able to synchronize or manage the zone at the provider via DNSimple.

    ![Confirm integrated zone removal](/files/dns-zone-providers-remove-zone-confirmation.png)

## Deleting a zone from an Integrated DNS Provider {#deleting-a-zone-from-an-integrated-dns-provider}

If you've imported a zone into DNSimple from an Integrated Provider, you can use the DNS Zone Providers card to delete the zone at the provider. This retains the zone and its records at DNSimple, but deletes them from the provider.

<warning>
In the case of CoreDNS, the CoreDNS configuration for the zone will be deleted, causing DNS changes for the zone to no longer sync with the CoreDNS cluster.
</warning>

1.  Click the **DNS** tab on the domain's management page.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the DNS Zone Providers card, click **Delete** on the relevant integrated DNS Provider.

    ![Deleting a Zone from the DNS Zone Providers card](/files/dns-zone-providers-delete.png)

1.  Enter the name of the zone to confirm deletion from the Integrated DNS Provider, and click **Delete**. The zone will be deleted from the Integrated DNS Provider, but will still be available at DNSimple.

    ![Deleting a Zone from a DNS provider](/files/dns-zone-providers-delete-zone.png)

## Have more questions?
If you have any questions about Integrated DNS Providers or managing your integrated zones, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
