---
title: Integrated DNS Providers
excerpt: Link an integrated DNS provider to your DNSimple account to manage zones at other authoritative DNS providers within DNSimple.
categories:
- DNS
- Integrations
---

# Integrated DNS Providers

DNSimple supports the ability to view and manage zones that are deployed in other DNS providers external to DNSimple. DNSimple calls such providers "integrated DNS providers" and zones ["integrated zones"](/articles/managing-integrated-zones).

## Supported Features

- **Import integrated zones**: When you link an integrated DNS provider to your DNSimple account, all the zones hosted on that integrated DNS provider will be imported into DNSimple and listed on the [Zones](/articles/managing-integrated-zones) page.
- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Deployment Editor](/articles/deployment-editor). (Note: The list of supported record types differs based on the provider)
- **2-way Syncing of Records**: Sync your zone records from the integrated zone to DNSimple, or from DNSimple to the integrated zone, with the [Deployment Editor](/articles/deployment-editor#record-syncing).

## Supported Integrated DNS Providers

To manage [integrated zones](/articles/managing-integrated-zones) from DNSimple, you first have to link an integrated DNS provider to your DNSimple account.

DNSimple supports the management of zones from the authoritative DNS providers listed below.

### Amazon Route 53

DNSimple supports [Amazon Route 53](https://aws.amazon.com/route53/) as an integrated DNS provider.

#### Prerequisites for linking Amazon Route 53 as an integrated DNS provider

To link [Amazon Route 53](https://aws.amazon.com/route53/) as an integrated DNS provider, you need:

- An [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for an AWS user with permission to manage public hosted zones at Route 53, including these permissions:
  - route53:ListHostedZones
  - route53:ListHostedZonesByName
  - route53:CreateHostedZone
  - route53:ListResourceRecordSets
  - route53:ChangeResourceRecordSets
  - route53:GetHostedZone
  - route53:DeleteHostedZone
- Administrator access to a DNSimple account

## Supported record types {#supported-record-types}

Records of supported record types can be [synced](/articles/deployment-editor#record-syncing) from/to DNSimple to/from an integrated DNS provider.
However, record fields not supported by DNSimple or the destination provider will be ignored. For example, record fields, like [record notes](/articles/record-notes) and [regional record](/articles/regional-records) information, are only supported in DNSimple records. They will not be synced to the integrated DNS provider.

#### Supported Route 53 record types

The following Route 53 record types are supported for syncing and management at DNSimple:

- A
- AAAA
- CNAME
- MX
- NS
- PTR
- SOA
- SPF
- SRV
- TXT
- URL

<note>
As [URL records](/articles/url-record) are a custom DNSimple record type and do not have an equivalent in Route 53, when synced from DNSimple to Route 53, an A record will be created to simulate a URL record. The simulated URL record will support [redirection](/articles/redirector) only when there is an equivalent URL record at DNSimple.
</note>

## Linking an Integrated DNS Provider to your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Add an integrated DNS provider<label>, click the link button for the integrated DNS provider you want to link to your DNSimple account.
![Link an integrated DNS provider](/files/account-integrated-provider-link.png)
1. Fill in the necessary credentials for your account at the integrated DNS provider and a nickname to identify this provider.
![Enter integrated DNS provider credentials](/files/account-external-provider-link-credentials.png)
1. After successfully linking the integrated DNS provider, you will arrive back on the DNSimple Integrated Providers page with the integrated DNS provider newly linked to your account, listed under "Linked providers". You can view the imported integrated zones from the [Zones](/articles/managing-integrated-zones) page, and manage and sync integrated zone records from the [Deployment Editor](/articles/deployment-editor).
![Account integrated providers list](/files/account-integrated-providers.png)

## Unlinking an Integrated DNS Provider from your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Linked providers<label>, click the <label>Remove</label> button for the integrated DNS provider you want to unlink from your DNSimple account. This will remove the ability to view and manage zones and their DNS records at the linked provider via DNSimple.
![Unlink an integrated DNS provider](/files/account-integrated-provider-unlink.png)
