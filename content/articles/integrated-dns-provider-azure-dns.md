---
title: Azure DNS
excerpt: Link your Azure account to manage Azure DNS zones at DNSimple.
categories:
- DNS
- Integrations
---

# Azure DNS

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to view and manage DNS zones that are deployed at [Azure DNS](https://azure.microsoft.com/en-us/products/dns).

## Supported features

<warning>
Azure record set [tags](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records#tags) and [metadata](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records#metadata) will not be retained and will be <strong>lost</strong> when using this integration.
</warning>

- **Import integrated zones**: When you link Azure DNS to your DNSimple account, all the zones hosted on Azure will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones) page.
- **Adding and deleting integrated zones**: When you link an Integrated DNS Provider to your DNSimple account, you can [add](/articles/integrated-dns-providers#adding-a-zone-to-an-integrated-dns-provider) or [delete](/articles/integrated-dns-providers#deleting-a-zone-from-an-integrated-dns-provider) zones to/from the Integrated DNS Provider, from within DNSimple.
- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Deployment Editor](/articles/deployment-editor). (See: [Supported record types for Azure DNS](/articles/integrated-dns-provider-azure-dns#supported-record-types))
- **2-way Syncing of Records**: Sync your zone records from Azure to DNSimple, or from DNSimple to Azure, with the [Deployment Editor](/articles/deployment-editor#record-syncing).

## Prerequisites

To link [Azure DNS](https://azure.microsoft.com/en-us/products/dns) as an [Integrated DNS Provider](/articles/integrated-dns-providers), you need:

- [Azure Subscription Id](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription)
- [Tenant Id](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-microsoft-entra-tenant)
- [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal#what-is-a-resource-group) name
- Client Id, i.e. the id of your Azure [app registration](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- [Client Secret](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app#add-a-client-secret) of your Azure [app registration](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- Administrator access to a DNSimple account

![Linking Azure DNS as an Integrated DNS Provider](/files/integrated-dns-provider-azure.png)

## Supported record types {#supported-record-types}

The following Azure DNS record types are supported for syncing and management at DNSimple:

- A
- AAAA
- CNAME
- MX
- NS
- PTR
- SOA
- SRV
- TXT
- URL

<note>
[URL records](/articles/url-record) are a custom DNSimple record type and do not have an equivalent in Azure DNS. When synced from DNSimple to Azure, a URL record will be translated into an A record that points to our [redirector](/articles/redirector).
</note>
