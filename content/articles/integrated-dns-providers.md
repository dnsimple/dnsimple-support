---
title: Integrated DNS Providers at DNSimple
excerpt: Link an Integrated DNS Provider to your DNSimple account to synchronize, manage, and view zones at other authoritative DNS providers within DNSimple.
categories:
- DNS
- Integrations
---

# Integrated DNS Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to synchronize, manage, and view zones that are deployed in other DNS providers external to DNSimple. DNSimple calls these providers "Integrated DNS Providers" and zones ["integrated zones"](/articles/managing-integrated-zones).

## Supported features

- **Import integrated zones**: When you link an Integrated DNS Provider to your DNSimple account, zones hosted on that Integrated DNS Provider will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones) page.
- **Adding and deleting integrated zones**: When you link an Integrated DNS Provider to your DNSimple account, you can [add](/articles/integrated-dns-providers#adding-a-zone-to-an-integrated-dns-provider) or [delete](/articles/integrated-dns-providers#deleting-a-zone-from-an-integrated-dns-provider) zones to/from the Integrated DNS Provider, from within DNSimple.
- **Manage integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Deployment Editor](/articles/deployment-editor).
- **Sync integrated zone records**: Sync your zone records from the integrated zone to DNSimple, or from DNSimple to the integrated zone, with the [Deployment Editor](/articles/deployment-editor#record-syncing).

<info>
The list of supported features and record types differs for each Integrated Provider. See the provider page for more information.
</info>

## Supported Integrated DNS Providers

To manage [integrated zones](/articles/managing-integrated-zones) from DNSimple, you first have to link an Integrated DNS Provider to your DNSimple account.

DNSimple supports zone integration with the providers listed below.

- [Amazon Route 53](/articles/integrated-dns-provider-amazon-route53)
- [Azure DNS](/articles/integrated-dns-provider-azure-dns)
- [CoreDNS](/articles/integrated-dns-provider-coredns)

## Supported record types {#supported-record-types}

Supported record types can be [synced](/articles/deployment-editor#record-syncing) from/to DNSimple to/from an Integrated DNS Provider.
However, record fields not supported by DNSimple or the destination provider may be ignored. For example, record fields, like [record notes](/articles/record-notes) and [regional records](/articles/regional-records) information, may not be supported depending on the Integrated DNS Provider.

## Linking an Integrated DNS Provider to your account {#linking-an-integrated-dns-provider}

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Add an Integrated Provider<label>, click the link button for the Integrated DNS Provider you want to link to your DNSimple account.
![Link an Integrated DNS Provider](/files/account-integrated-provider-link.png)
1. Fill in any required paramaters for the Integrated DNS Provider configuration.
1. Fill in any necessary credentials for your account at the Integrated DNS Provider.
![Enter Integrated DNS Provider credentials](/files/account-external-provider-link-credentials.png)
1. After successfully linking the Integrated DNS Provider, you will arrive back on the DNSimple Integrated Providers page with the Integrated DNS Provider newly linked to your account, listed under "Linked providers". You can view the imported integrated zones from the [Domain Names](/articles/managing-integrated-zones) page, and manage and sync integrated zone records from the [Deployment Editor](/articles/deployment-editor).
![Account integrated providers list](/files/account-integrated-providers.png)

## Unlinking an Integrated DNS Provider from your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Linked providers<label>, click the <label>Remove</label> button for the Integrated DNS Provider you want to unlink from your DNSimple account. This will remove the ability to view and manage zones and their DNS records at the linked provider via DNSimple.
![Unlink an Integrated DNS Provider](/files/account-integrated-provider-unlink.png)


## Adding a zone to an Integrated DNS Provider {#adding-a-zone-to-an-integrated-dns-provider}

If you have an existing domain name in DNSimple, you can also add it to an Integrated DNS provider from the DNS section of the domain management page. If the Integrated DNS provider has not yet been [linked](/articles/integrated-dns-providers#linking-an-integrated-dns-provider) to your DNSimple account, you will be prompted to do so.

1.  Log in to DNSimple with your user credentials.
1.  Select the relevant account.
1.  On the header, click the <label>Domain Names</label> tab.
1.  Locate the relevant domain, and click the name to access the domain page.
1.  Go to the DNS section by clicking the <label>DNS</label> link on the left.
1.  Click the <label>Add</label> link corresponding to the desired Integrated DNS Provider inside the <label>DNS Zone Providers</label> card.

    ![Adding a Zone from DNS Zone Providers](/files/dns-zone-providers-add-zone.png)

1.  If the Integrated DNS Provider is already linked to the DNSimple account, select the desired one (if there is more than one from the same provider type, e.g. Azure), and click <label>Add</label> to add the zone to the provider. For instance, if the provider is Azure, the zone will be added to Azure.

    ![Adding a Zone to an already linked DNS Provider](/files/dns-zone-providers-add-to-linked-provider.png)
1.  If the Integrated DNS Provider is not already linked to the DNSimple account, you will have to input any necessary details to link it to the account before the zone can be added to the provider. The Integrated DNS Provider will be linked to the DNSimple account, and the zone will then be added to the provider.

    ![Adding a Zone to a DNS Provider that has not yet been linked](/files/dns-zone-providers-add-to-unlinked-provider.png)


## Deleting a zone from an Integrated DNS Provider {#deleting-a-zone-from-an-integrated-dns-provider}

You can delete a zone previously imported from an Integrated DNS Provider into DNSimple. This will retain the zone and its records at DNSimple, but delete the zone and all its records from the Integrated DNS Provider. In the case of [CoreDNS](/articles/integrated-dns-provider-coredns), the CoreDNS configuration for the zone will be deleted, causing DNS changes for the zone to no longer sync with the CoreDNS cluster.

1.  Log in to DNSimple with your user credentials.
1.  Select the relevant account.
1.  On the header, click on the <label>Domain Names</label> tab.
1.  Locate the relevant domain, and click on the name to access the domain page.
1.  Go to the DNS section by clicking the <label>DNS</label> link on the left.
1.  Click on the <label>Delete</label> link corresponding to the desired Integrated DNS Provider inside the <label>DNS Zone Providers</label> card.

    ![Deleting a Zone from the DNS Zone Providers card](/files/dns-zone-providers-delete.png)

1.  Confirm the deletion of the zone from the Integrated DNS Provider by entering the name of the zone and clicking on the <label>Delete</label> button. The zone will be deleted from the Integrated DNS Provider, but will still be available at DNSimple.

    ![Deleting a Zone from a DNS provider](/files/dns-zone-providers-delete-zone.png)
