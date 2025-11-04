---
title: Deleting a Zone From an Integrated DNS Provider
excerpt: How to delete zones from an Integrated DNS Provider in your DNSimple account.
categories:
- DNS
- Integrations
---

# Deleting a Zone From an Integrated DNS Provider

If you imported a zone into DNSimple from an Integrated Provider, you can use the DNS Zone Providers card to delete the zone at the provider. This retains the zone and its records at DNSimple, but deletes them from the provider.

<warning>
In the case of CoreDNS, the CoreDNS configuration for the zone will be deleted, causing DNS changes for the zone to no longer sync with the CoreDNS cluster.
</warning>

1. If you have multiple accounts, use the **account switcher** at the top-right corner of the screen to select the correct account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click DNS at the top-right of the screen.
1. Inside the DNS Zone Providers card, click **Delete** on the relevant integrated DNS Provider.

    ![Deleting a Zone from the DNS Zone Providers card](/files/dns-zone-providers-delete.png)

3.  Enter the name of the zone to confirm deletion from the Integrated DNS Provider, and click **Delete**. The zone will be deleted from the Integrated DNS Provider, but will still be available at DNSimple.

    ![Deleting a Zone from a DNS provider](/files/dns-zone-providers-delete-zone.png)

## Have more questions?

If you have any questions about Integrated DNS Providers or managing your integrated zones, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
