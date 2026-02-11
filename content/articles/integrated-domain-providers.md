---
title: Integrated Domain Providers at DNSimple
excerpt: Link an Integrated Domain Provider to your DNSimple account to manage domains at other domain providers, from within DNSimple.
meta: Learn how to link integrated domain providers to manage domains registered elsewhere through DNSimple, including supported features and limitations.
categories:
- Domains and Transfers
- Integrations
---

# Integrated Domain Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to manage domains that are registered with other domain providers external to DNSimple. DNSimple calls such providers "Integrated Domain Providers".

## Why integrated domain providers exist

Integrated Domain Providers allow you to manage domains registered elsewhere through the DNSimple interface, providing a unified management experience. This is useful when you have domains registered with multiple providers but want to manage DNS, certificates, and other services from a single location. However, it's important to understand that integration does not transfer domain registration to DNSimple. The domain remains registered with the original provider, and certain operations must still be performed through that provider's system.

## Supported features

- **Import integrated domains**: When you link an Integrated Domain Provider to your DNSimple account, domains registered via that Integrated Domain Provider will be imported into DNSimple and listed on the Domain Names page.
- **View and manage integrated domains**: View the expiry date, delegation name servers, domain registration contact, and DNSSEC information of your integrated domains from DNSimple. You can also manage your domain's WHOIS Privacy, renewal, name servers from the DNSimple dashboard.
- **Transfer your domain to DNSimple easily**: Read more about [transferring](/articles/integrated-domain-provider-transfer-domain/) your domains.
- **Domain expiration notices**: Get email notifications when your integrated domains are near expiry.

## Limitations of integrated domains

While integrated domains can be managed through DNSimple, they remain registered with the original provider. This means billing for registration, renewal, and certain domain services is handled by the original provider, not DNSimple. Some operations may require you to access the original provider's interface, and the availability of features may vary depending on what the integrated provider's API supports. DNSimple can only manage what the integrated provider's API allows, so some advanced features available for domains registered directly with DNSimple may not be available for integrated domains.

## Supported Integrated Domain Providers

To manage integrated domains from DNSimple, you first have to link an Integrated Domain Provider to your DNSimple account.

DNSimple supports domain integration with the providers listed below.

- [GoDaddy](/articles/integrated-domain-provider-godaddy/)

## Linking an Integrated Domain Provider to your account {#linking-integrated-domain-provider}

Linking an Integrated Domain Provider requires providing credentials for your account at that provider. Once linked, domains registered with that provider are imported into DNSimple and can be managed through the DNSimple interface. The integration uses the provider's API to read domain information and perform management operations.

![Link an Integrated Domain Provider](/files/account-integrated-domain-provider-link.png)

![Enter Integrated Domain Provider credentials](/files/account-integrated-domain-provider-link-credentials.png)

![Domain Names page](/files/domain-names.png)

## Unlinking an Integrated Domain Provider from your account

Unlinking an Integrated Domain Provider removes the connection between DNSimple and that provider's account. Once unlinked, DNSimple can no longer refresh the state of domains from that provider, though previously imported domain information may remain visible until manually refreshed or removed.

![Unlink an Integrated Domain Provider](/files/account-integrated-domain-provider-unlink.png)
