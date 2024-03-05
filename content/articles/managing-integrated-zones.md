---
meta: We support managing zones at other authoritative DNS providers.
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

1.  On the <label>Domain Names</label> page, the zones in your DNSimple account and zones from [Integrated DNS Providers](/articles/integrated-dns-providers) will be listed. Click any linked zone to enter the [Deployment Editor](/articles/deployment-editor) and manage the zone's records. The labels under the DNS Zones column indicate which DNS provider(s) the zone can be managed at.

    ![Domain Names Integrated Zones Table](/files/domain-names-integrated-zones.png)
</div>

## Refreshing and importing integrated zones {#refreshing-and-importing-integrated-zones}

Loading the Domain Names page automatically [refreshes](/articles/deployment-editor#refreshing-integrated-zone-records) the current state of integrated zones and imports any new zones and their records from linked Integrated DNS Providers that support import. The new zones and zone records will be fetched in the background upon page load, and the Domain Names page will automatically update to reflect them once ready.
