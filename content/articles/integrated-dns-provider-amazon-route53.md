---
title: Amazon Route 53
excerpt: Link your Amazon Route 53 account to manage zones at DNSimple.
categories:
- DNS
- Integrations
---

# Amazon Route 53

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to view and manage zones that are deployed at [Amazon Route 53](https://aws.amazon.com/route53/).

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/4LsTT0pgBaQ" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Supported features

- **Import integrated zones**: When you link Route 53 to your DNSimple account, all the zones hosted on Route 53 will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones) page.
- **Adding and deleting integrated zones**: When you link an Integrated DNS Provider to your DNSimple account, you can [add](/articles/integrated-dns-providers#adding-a-zone-to-an-integrated-dns-provider) or [delete](/articles/integrated-dns-providers#deleting-a-zone-from-an-integrated-dns-provider) zones to/from the Integrated DNS Provider, from within DNSimple.
- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Deployment Editor](/articles/deployment-editor). (See: The list of supported record types for Route 53)
- **2-way Syncing of Records**: Sync your zone records from Route 53 to DNSimple, or from DNSimple to Route 53, with the [Deployment Editor](/articles/deployment-editor#record-syncing).

## Prerequisites

To link [Amazon Route 53](https://aws.amazon.com/route53/) as an Integrated DNS Provider, you need:

- An [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for an AWS user with permission to manage public hosted zones at Route 53, including these permissions:
  - route53:ListHostedZones
  - route53:ListHostedZonesByName
  - route53:CreateHostedZone
  - route53:ListResourceRecordSets
  - route53:ChangeResourceRecordSets
  - route53:GetHostedZone
  - route53:DeleteHostedZone
- Administrator access to a DNSimple account

## Supported record types

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
[URL records](/articles/url-record) are a custom DNSimple record type and do not have an equivalent in Route 53. When synced from DNSimple to Route 53, a URL record will be translated into an A record that points to our [redirector](/articles/redirector).
</note>
