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

## Connecting an Integrated DNS Provider to your account

1. Select the relevant account from the **account switcher** at the top-right corner of the screen.
1. From the account switcher, click **Account settings**, then click the **Integrated Providers** tab.
1. Under **Connect an Integrated Provider**, click Connect for the Integrated DNS Provider you want to link to your DNSimple account.
![Connect an Integrated DNS Provider](/files/account-integrated-provider-link.png)
1. Fill in any required parameters for the Integrated DNS Provider configuration.
1. Fill in any necessary credentials for your account at the Integrated DNS Provider.
![Enter Integrated DNS Provider credentials](/files/account-external-provider-link-credentials.png)
1. After successfully connecting the Integrated DNS Provider, you will be able to view a list of the zones that are at that provider *(except for CoreDNS, which does not list zones)*. Select the zones you want to import into DNSimple, and click **Add zones**.
![Add zones after connecting an Integrated DNS Provider](/files/account-integrated-dns-provider-connect-add-zones.png)
1. If you selected any zones to import into DNSimple, you will be redirected to the [Domain Names](/articles/managing-integrated-zones/) page where the zone import will start. When you visit the Integrated Providers page again, you will be able to see the newly connected Integrated DNS Provider listed under **Connected providers**. Click **Manage Integrated Zones** to add or remove from the selection of zones for import. Imported integrated zones will be listed on the [Domain Names](/articles/managing-integrated-zones/) page, and you can manage and sync integrated zone records from the [Record Editor](/articles/record-editor-integrated-zones/).

## Disconnecting an Integrated DNS Provider from your account

1. Select the relevant account from the **account switcher** at the top-right corner of the screen.
1. From the account switcher, click **Account settings**, then click the **Integrated Providers** tab.  
1. Under **Connected providers**, click **Disconnect** for the Integrated DNS Provider you want to disconnect from your DNSimple account. This will remove the ability to view and manage zones and their DNS records at the connected provider via DNSimple.
![Disconnect an Integrated DNS Provider](/files/account-integrated-provider-unlink.png)

## Have more questions?
If you have any questions about connecting Integrated DNS Providers, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
