---
title: What Are Integrated DNS Providers and Why Use Them?
excerpt: Connect an Integrated DNS Provider to your DNSimple account to synchronize, manage, and view zones at other authoritative DNS providers within DNSimple.
meta: Learn about Integrated DNS Providers and why to use them. Centralize DNS management for domains hosted on Route 53, Azure DNS, and CoreDNS from DNSimple.
categories:
- DNS
- Integrations
---

# What Are Integrated DNS Providers and Why Use Them?

### Table of Contents {#toc}

* TOC
{:toc}

---

Integrated DNS Providers are a feature from DNSimple that allows you to centralize the management of DNS zones that are hosted by providers external to DNSimple (such as [Amazon Route 53](/articles/integrated-dns-provider-amazon-route53/), [Azure DNS](/articles/integrated-dns-provider-azure-dns/), or [CoreDNS](/articles/integrated-dns-provider-coredns/)).

Connecting an external provider to your DNSimple account lets you manage, synchronize, and view DNS settings for all your domains—regardless of where they are hosted—from a single interface. This is ideal for users who have domains registered or managed on multiple platforms but want to leverage DNSimple's tools and features.

## Why use Integrated DNS Providers?
- **Centralized management**: Manage DNS settings for all your domains from a single interface, even if they are registered or hosted on other platforms.
- **Access DNSimple features**: Use DNSimple's advanced DNS management tools and features for domains hosted on other platforms.
- **Simplified migration**: The synchronization feature simplifies the migration process if you choose to transfer domains to DNSimple in the future.

## How it works
Once a provider is connected, DNSimple can perform a range of actions on integrated zones:
- **Zone synchronization**: You can synchronize zone records between DNSimple and an Integrated DNS Provider, ensuring that your records are consistent across platforms.
- **Importing zones**: When you [connect a provider](/articles/integrated-dns-providers/#connecting-an-integrated-dns-provider-to-your-account/), you can select which zones to import from the external provider and manage them from DNSimple.
- **Record management**: You can list, create, update, and delete records for your integrated zones directly from DNSimple's record editor.
- **Zone lifecycle management**: You can [add](/articles/integrated-dns-provider-zones/#adding-a-zone-to-an-integrated-dns-provider/), [remove](/articles/integrated-dns-provider-zones/#removing-integrated-zones-from-dnsimple/), or [delete](/articles/integrated-dns-provider-zones/#deleting-a-zone-from-an-integrated-dns-provider/) zones to or from the Integrated DNS Provider from within DNSimple.

## Supported Integrated DNS Providers
To manage integrated zones from DNSimple, you first have to connect an Integrated DNS Provider to your DNSimple account. DNSimple supports zone integration with the providers listed below:
- [Amazon Route 53](/articles/integrated-dns-provider-amazon-route53/)
- [Azure DNS](/articles/integrated-dns-provider-azure-dns/)
- [CoreDNS](/articles/integrated-dns-provider-coredns/)

<note>
The list of supported features and record types differs for each provider.
</note>

## Have more questions?
If you have any questions about Integrated DNS Providers or managing your integrated zones, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
