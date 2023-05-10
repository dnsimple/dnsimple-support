---
title: External Zones
excerpt: Link an external DNS provider to your DNSimple account to manage zones at other authoritative DNS providers, all within DNSimple.
categories:
- DNS
---

# External Zones

 DNSimple supports the ability to view and manage zones that are deployed in other DNS providers external to DNSimple. In DNSimple, we refer to such zones as ["External Zones"](/articles/managing-external-zones).

## Supported Features

- **Import external zones**: When you link an external DNS provider to your DNSimple account, all the zones hosted on that external DNS provider will be imported into DNSimple and listed on the [Zones](/articles/managing-external-zones) page.
- **Management of external zone records**: List, create, update and delete external zone records from DNSimple, using our Deployment Editor. (Note: The list of supported record types differ based on the provider)
- **2-way Syncing of Records**: Sync your external zone records from the external zone to DNSimple, or from DNSimple to the external zone.

## Supported External DNS Providers

Currently, DNSimple supports the management of zones from the following authoritative DNS providers, which we refer to as "External DNS Providers".

- [Amazon Route 53](https://aws.amazon.com/route53/)

In order to manage external zones from DNSimple, you first have to link an external DNS provider to your DNSimple account.

### Prerequisites for linking Amazon Route 53 as an external DNS provider

To proceed with linking [Amazon Route 53](https://aws.amazon.com/route53/) as an external DNS provider to your account, you must:

- Have an [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for an AWS user with permission to manage public hosted zones at Route 53.
- Have administrator access to a DNSimple account


## Linking an External DNS Provider to your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>External DNS Providers</label> tab.
1. Under <label>Add an external DNS provider<label>, click on the link button for the external DNS provider that you would like to link to your DNSimple account.
![Link an external DNS provider](/files/account-external-provider-link.png)
1. Fill in the necessary credentials for your account at the external DNS provider, as well as a nickname that will be used for identifying this provider.
![Enter external DNS provider credentials](/files/account-external-provider-link-credentials.png)
1. After successfully linking the external DNS provider, you will arrive back on the DNSimple External DNS Providers page with the external DNS provider newly linked to your account, listed under "Linked providers". You will be able to view the imported external zones from our [Zones](/articles/managing-external-zones) page, and manage and sync external zone records from the "Deployment Editor".
![Account external providers list](/files/account-external-providers.png)

## Unlinking an External DNS Provider from your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>External DNS Providers</label> tab.
1. Under <label>Linked providers<label>, click on the <label>Remove</label> button for the external DNS provider that you would like to unlink from your DNSimple account. This will remove the ability to view and manage zones and their DNS records at the linked provider via DNSimple.
![Unlink an external DNS provider](/files/account-external-provider-unlink.png)
