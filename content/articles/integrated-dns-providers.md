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

## Linking an Integrated DNS Provider to your account

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
