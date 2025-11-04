---
title: Removing Integrated Zones From DNSimple
excerpt: How to manage integrated zones for Integrated DNS Providers in DNSimple.
categories:
- DNS
- Integrations
---
# Removing Integrated Zones From DNSimple

If you imported a zone into DNSimple from an Integrated DNS Provider, you can use the DNS Zone Providers card to remove the zone from DNSimple without deleting it. This retains the zone and its records at both DNSimple and at the Integrated DNS Provider. However, you will no longer be able to [synchronize](/articles/record-editor-integrated-zones/#record-syncing) changes in the zone between DNSimple and the provider, or make record changes to the zone hosted by the provider via DNSimple.

**Steps to remove an integrated provider zone**

1.  Click the **DNS** tab on the domain's management page.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the DNS Zone Providers card, click **Remove** on the relevant Integrated DNS Provider.

    ![Remove integrated zone](/files/dns-zone-providers-remove.png)

1.  Click **OK** in the confirmation dialog popup to proceed with the removal. The zone will remain in both DNSimple and at the Integrated DNS Provider, but you will no longer be able to synchronize or manage the zone at the provider via DNSimple.

    ![Confirm integrated zone removal](/files/dns-zone-providers-remove-zone-confirmation.png)
