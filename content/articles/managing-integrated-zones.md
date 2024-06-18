---
title: Managing Integrated Zones
excerpt: We support managing zones at other authoritative DNS providers.
categories:
- DNS
---

# Managing Integrated Zones

From the Domain Names page, you can view the refreshed state of your DNSimple zones alongside zones from [Integrated DNS Providers](/articles/integrated-dns-providers).

<div class="section-steps" markdown="1">
##### Accessing the Domain Names page

1.  On the top-nav menu, click the <label>Domain Names</label> tab.

    ![Domain Names Tab](/files/domain-names-tab.png)

1.  On the <label>Domain Names</label> page, the zones in your DNSimple account and zones from [Integrated DNS Providers](/articles/integrated-dns-providers) will be listed. Click any connected zone to enter the [Record Editor](/articles/record-editor-integrated-zones) and manage the zone's records. The labels under the DNS Zones column indicate which DNS provider(s) the zone can be managed at.

    ![Domain Names Integrated Zones Table](/files/domain-names-integrated-zones.png)
</div>

## Refreshing and importing integrated zones {#refreshing-and-importing-integrated-zones}

Loading the Domain Names page automatically [refreshes](/articles/record-editor-integrated-zones#importing-integrated-zone-records) the current state of integrated zones and their records from connected Integrated DNS Providers that support zone imports. The zones and zone records will be refreshed in the background upon page load, and the Domain Names page will automatically update to reflect them once ready.

You can [manage the selection of zones to import](/articles/integrated-dns-providers#managing-integrated-zone-selection) from the Integrated Providers page.
