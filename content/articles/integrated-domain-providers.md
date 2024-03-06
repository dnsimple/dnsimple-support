---
meta: Link an Integrated Domain Provider to your DNSimple account to manage domains at other domain providers, from within DNSimple.
title: Integrated Domain Providers at DNSimple
excerpt: Link an Integrated Domain Provider to your DNSimple account to manage domains at other domain providers, from within DNSimple.
categories:
- Domains
- Integrations
---

# Integrated Domain Providers

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple supports the ability to manage domains that are registered with other domain providers external to DNSimple. DNSimple calls such providers "Integrated Domain Providers".

## Supported features

- **Import integrated domains**: When you link an Integrated Domain Provider to your DNSimple account, domains registered via that Integrated Domain Provider will be imported into DNSimple and listed on the Domain Names page.
- **View and manage integrated domains**: View the expiry date, delegation name servers, domain registration contact, and DNSSEC information of your integrated domains from DNSimple. You can also manage your domain's WHOIS Privacy, renewal, name servers from the DNSimple dashboard.
- **Register domains via DNSimple**: Learn how to [register](/articles/registering-domain) a domain on your Integrated Provider via DNSimple.
- **Transfer your domain to DNSimple easily**: Read more about [transferring](/articles/integrated-domain-provider-transfer-domain) your domains.
- **Domain expiration notices**: Get email notifications when your integrated domains are near expiry.

## Supported Integrated Domain Providers

To manage integrated domains from DNSimple, you first have to link an Integrated Domain Provider to your DNSimple account.

DNSimple supports domain integration with the providers listed below.

- [GoDaddy](/articles/integrated-domain-provider-godaddy)

## Linking an Integrated Domain Provider to your account {#linking-integrated-domain-provider}

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Add an Integrated Provider<label>, click the link button for the Integrated Domain Provider you want to link to your DNSimple account.
![Link an Integrated Domain Provider](/files/account-integrated-domain-provider-link.png)
1. Fill in any necessary information and credentials for your account at the Integrated Domain Provider.
![Enter Integrated Domain Provider credentials](/files/account-integrated-domain-provider-link-credentials.png)
1. After successfully linking the Integrated Domain Provider, you will be redirected to the Domain Names page, where you can [manage your integrated domains](/articles/managing-integrated-domains).
![Domain Names page](/files/domain-names.png)

## Unlinking an Integrated Domain Provider from your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Integrated Providers</label> tab.
1. Under <label>Linked providers<label>, click the <label>Remove</label> button for the Integrated Domain Provider you want to unlink from your DNSimple account. This will disable the ability to refresh the state of the imported domains from the linked provider via DNSimple.
![Unlink an Integrated Domain Provider](/files/account-integrated-domain-provider-unlink.png)
