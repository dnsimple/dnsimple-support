---
title: Zone NS Records
excerpt: How to update NS records for the zone of a hosted domain
categories:
- DNS
---

# Updating NS Records for the Zone of a Hosted Domain

You can configure [NS records](/articles/ns-record/) at the apex of a zone of a hosted domain. If you would like to configure NS records for a subdomain, please click [here](/articles/add-ns-records-for-subdomain/) instead.

<div class="section-steps" markdown="1">
##### Updating NS records for a zone

1.  Log in to DNSimple with your user credentials.
1.  If you have multiple accounts, select your account in the navigation bar.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.
1.  Switch to the <label>DNS</label> tab.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)
1. Scroll down to locate the Zone NS records section.
1. Click on <label>Edit zone NS records</label>

    ![Zone NS records](/files/zone-ns-records.png)
1. Enter the hostnames of the name servers you would like to set for the NS records in the zone.

    ![Apply NS records](/files/zone-ns-records-update.png)
1. Optionally, instead of typing in name server hostnames, you can also choose to add them from one or more [name server sets](/articles/name-server-sets).

    ![Apply NS records from name server sets](/files/zone-ns-records-name-server-set.png)
1. Click on <label>Apply NS records</label> to apply the changes.
</div>

<info>
#### Hosted domain must be delegated to DNSimple

The zone NS record changes will only take effect if the domain is [delegated to DNSimple](/articles/delegating-dnsimple-hosted)
</info>
