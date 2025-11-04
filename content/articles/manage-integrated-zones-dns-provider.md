---
title: Managing Integrated Zones for an Integrated DNS Provider
excerpt: How to manage integrated zones for Integrated DNS Providers in DNSimple.
categories:
- DNS
- Integrations
---

# Managing Integrated Zones for an Integrated DNS Provider

After connecting an Integrated DNS Provider to your DNSimple account, you can view, add to, or delete the imported zones.

When you add a zone, it will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones/) page.

When you [delete a zone](/articles/integrated-dns-provider-delete-zone/), it will remain both in DNSimple and at the provider. Removal will not delete the zone or its records. However, you will no longer be able to:
- [Synchronize](link Syncing integrated zone records between DNS providers) changes in the zone between DNSimple and the provider
- Make record changes to the zone on the provider's end via DNSimple.

To manage the zone selection for an Integrated DNS Provider, follow these steps:

1. If you have multiple accounts, use the **account switcher** at the top-right corner to select the correct account.
1. From the account switcher, click **Account settings**.
1. In **Account settings**, click the **Integrated Providers** tab

    ![Manage Integrated Zones for an Integrated DNS Provider](/files/account-integrated-provider-manage-integrated-zones.png)

1.  You will see the list of zones that have been imported into DNSimple from the Integrated DNS Provider.

    ![View imported Integrated Zones](/files/account-integrated-provider-view-zones.png)

1.  To add or remove zones, click **Manage Integrated Zones**. You can then update the selection of integrated zones that should be imported into DNSimple.

    ![Add or remove Integrated Zones](/files/account-integrated-provider-add-remove-zones.png)

 1.  Click **Apply changes** to save the new selection.
