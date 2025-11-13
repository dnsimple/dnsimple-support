---
title: Refreshing and Importing Integrated Zones
excerpt: How to view your DNSimple zones and zones from Integrated DNS Providers.
meta: Easily view your zones from DNSimple and Integrated DNS Providers. Streamline your DNS management across multiple authoritative providers such as Route53 and CoreDNS.
categories:
- DNS
---

# Refreshing and Importing Integrated Zones

From the **Domain Names** page, you can see both your DNSimple zones and zones from [Integrated DNS Providers](/articles/what-are-integrated-providers/). The page also keeps your integrated zones up to date by refreshing them automatically.

<div class="section-steps" markdown="1">
##### Accessing the Domain Names page

1.  On the top-nav menu, click the **Domain Names** tab.

    ![Domain Names Tab](/files/domain-names-tab.png)

1.  On the **Domain Names** page, you'll see:
    - Zones managed directly in DNSimple.
    - Zones imported from your connected Integrated DNS Providers.
    
    Each zone is listed under the **DNS Zones** column, with labels showing which [Integrated DNS Providers](/articles/what-are-integrated-providers/) it can be managed at. Click any zone to open it in the [Record Editor](https://support.dnsimple.com/articles/record-editor-integrated-zones/) and manage its records.

    ![Domain Names Integrated Zones Table](/files/domain-names-integrated-zones.png)
</div>

## Refreshing and importing integrated zones {#refreshing-and-importing-integrated-zones}

Loading the Domain Names page automatically [refreshes](/articles/record-editor-integrated-zones/#importing-integrated-zone-records) the current state of integrated zones and their records from connected Integrated DNS Providers that support zone imports. The zones and zone records will be refreshed in the background upon page load, and the Domain Names page will automatically update to reflect them once ready.

You can also manage the selection of [zones to import](/articles/integrated-dns-provider-zones/) by going to your **Account settings → Integrated Providers** page and updating the selection of zones.

## Have more questions?
If you have additional questions or need any assistance with Integrated DNS Providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
