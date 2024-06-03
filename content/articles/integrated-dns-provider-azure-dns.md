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

DNSimple supports the ability to view and manage public DNS zones that are deployed at [Azure DNS](https://azure.microsoft.com/en-us/products/dns).

## Prerequisites

To link [Azure DNS](https://azure.microsoft.com/en-us/products/dns) as an [Integrated DNS Provider](/articles/integrated-dns-providers), you need:

- [Azure Subscription ID](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription)
- [Tenant ID](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-microsoft-entra-tenant)
- [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal#what-is-a-resource-group) name
- Client ID, i.e. the ID of your Azure [app registration](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- [Client Secret](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app#add-a-client-secret) of your Azure [app registration](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- [Full access](/articles/domain-access-control/#full-access) to a DNSimple account

![Linking Azure DNS as an Integrated DNS Provider](/files/integrated-dns-provider-azure.png)

## Supported features

<warning>
Azure record set [tags](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records#tags) and [metadata](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records#metadata) will not be retained and will be <strong>lost</strong> when using this integration.
</warning>

- **Import integrated zones**: When you link Azure DNS to your DNSimple account, all the zones hosted on Azure will be imported into DNSimple and listed on the [Domain Names](/articles/managing-integrated-zones) page.
- **Adding and deleting integrated zones**: [Add](/articles/integrated-dns-providers#adding-a-zone-to-an-integrated-dns-provider) or [delete](/articles/integrated-dns-providers#deleting-a-zone-from-an-integrated-dns-provider) zones to/from the Integrated DNS Provider, from within DNSimple.
- **Management of integrated zone records**: List, create, update, and delete integrated zone records from DNSimple using the [Record Editor](/articles/record-editor-integrated-zones). (See: [Supported record types for Azure DNS](/articles/integrated-dns-provider-azure-dns#supported-record-types))
- **2-way Syncing of Records**: Sync your zone records from Azure to DNSimple, or from DNSimple to Azure, with the [Record Editor](/articles/record-editor-integrated-zones#record-syncing).

## Supported record types {#supported-record-types}

The following Azure DNS record types are supported for syncing and management at DNSimple:

- [A](/articles/a-record)
- [AAAA](/articles/aaaa-record)
- [CNAME](/articles/cname-record)
- [MX](/articles/mx-record)
- [NS](/articles/ns-record)
- PTR
- [SOA](/articles/soa-record)
- [SRV](/articles/srv-record)
- [TXT](/articles/txt-record)
- [URL](/articles/url-record)

<note>
The NS records at the zone's apex must include the [Azure DNS name servers](https://learn.microsoft.com/en-us/azure/dns/dns-operations-recordsets-portal#modify-ns-records-at-the-zone-apex) assigned to the zone by Azure.

Syncing from DNSimple to Azure will retain the Azure NS records at the zone's apex, while adding any NS records present at DNSimple. 
</note>

<note>
[URL records](/articles/url-record) are a custom DNSimple record type and do not have an equivalent in Azure DNS. When synced from DNSimple to Azure, a URL record will be represented in Azure as an A record that points to our [redirector](/articles/redirector).
</note>
