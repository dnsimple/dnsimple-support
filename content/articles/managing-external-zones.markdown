---
title: Managing External Zones
excerpt: We support managing zones at other authoritative DNS providers.
categories:
- DNS
---

# Managing External Zones

From the Zones page, you can view the refreshed state of your DNSimple zones alongside zones imported from [external DNS providers](/articles/external-dns-providers).

<div class="section-steps" markdown="1">
##### Accessing the Zones page

1.  On the top-nav menu, click the <label>Domains</label> tab.

1.  Click the menu icon next to the <label>Domains</label> heading.

    ![Zones link](/files/zones-domains-link.png)

1.  In the popup menu, click the <label>Zones</label> link to navigate to the <label>Zones</label> page.

    ![Zones link menu](/files/zones-domains-link-menu.png)

1.  On the <label>Zones</label> page, the zones in your DNSimple account as well as external zones imported from [external DNS providers](/articles/external-dns-providers) will be listed. You can click any linked zone to enter the [Deployment Editor](/articles/deployment-editor) and manage the zone's records. The labels under the Providers column indicate which DNS provider(s) the zone can be managed at.

    ![Zones page](/files/zones-page.png)
</div>

## Refreshing and importing external zones {#refreshing-and-importing-external-zones}

Loading the Zones page automatically [refreshes](/articles/deployment-editor#refreshing-external-zone-records) the current state of external zones and imports any new zones and their records from linked external DNS providers. The new zones and zone records will be fetched in the background upon page load, and the Zones page will automatically update to reflect them once ready.
