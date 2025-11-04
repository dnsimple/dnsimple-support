---
title: Adding a Zone to an Integrated DNS Provider
excerpt: How to delete zones from an Integrated DNS Provider in your DNSimple account.
categories:
- DNS
- Integrations
---

# Adding a zone to an Integrated DNS Provider

If you have an existing domain in DNSimple, you can also add it to an Integrated DNS Provider from the DNS section of the domain management page. If the Integrated DNS Provider is not [connected](/articles/integrated-dns-providers/#connecting-an-integrated-dns-provider) to your DNSimple account, you will be prompted to connect it.

**Steps to add a zone to an Integrated Provider**

1.  Click the **DNS** tab on the domain's management page.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Inside the DNS Zone Providers card, click **Add** on the relevant Integrated DNS Provider.

    ![Adding a Zone from DNS Zone Providers](/files/dns-zone-providers-add-zone.png)

1.  If the Integrated DNS Provider is already connected to the DNSimple account, select the desired one and click **Add** to add the zone to the provider.

    ![Adding a Zone to an already connected DNS Provider](/files/dns-zone-providers-add-to-linked-provider.png)

    For example, if the provider is Azure, the zone will be created at Azure and imported into DNSimple. If the zone already exists at Azure, zone creation will be skipped, and the zone will be imported into DNSimple.

1.  The Integrated DNS Provider must be connected to the DNSimple account before the zone can be added to the provider. Setup guides can be found in each provider's [support article](/articles/integrated-dns-providers/#supported-integrated-dns-providers). Once the provider is connected, the zone will be added to the provider, or simply imported into DNSimple if the zone already existed at the provider.

    ![Adding a Zone to a DNS Provider that has not yet been connected](/files/dns-zone-providers-add-to-unlinked-provider.png)
