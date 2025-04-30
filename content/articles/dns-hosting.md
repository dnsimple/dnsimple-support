---
title: DNS Hosting
excerpt: DNSimple provides robust DNS hosting using a global Anycast network.
meta: DNSimple provides robust DNS hosting using a global Anycast network. Experience reliable DNS hosting for fast, secure domain resolution and exceptional uptime.
categories:
- DNS
---

# DNS Hosting

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides robust DNS hosting using a [global Anycast network](/articles/anycast).

To use our DNS hosting service, the account must be subscribed to a [valid plan](https://dnsimple.com/pricing). Each plan provides different levels of services. You can selectively enable/disable the DNS hosting service for a single domain, depending on whether you need to use our DNS hosting feature or not.

## Using DNSimple as a DNS hosting provider

If you want to use DNSimple to manage the DNS of an existing domain, you have two options:

1.  **Keep the domain registration at your current registrar, and transfer the DNS management to us.**

    To use DNSimple to host your DNS for a domain, follow these instructions to [point your domain to our name servers](/articles/delegating-dnsimple-hosted).

1.  **Transfer the domain registration and DNS management to us.**

    If you want DNSimple to act as your domain registrar, follow these instructions to [transfer your domain to DNSimple](/articles/transferring-domain).

    If you don't have a domain yet, you can [sign up](https://dnsimple.com/pricing) or log in to [register a domain](https://dnsimple.com/tlds), and activate the zone       to manage your DNS with us.

## Adding the domain

To use our DNS hosting services, you need to [add the domain to a DNSimple account](/articles/adding-domain). If you also want to use DNSimple as registrar, you may need to register or [transfer](/articles/transferring-domain) the domain to us.

## Adding DNS records to your domain

Once you've added your domain, you can configure the DNS records using the following options:

- [Auto-importing](https://support.dnsimple.com/articles/auto-import-dns/) existing DNS records if your zone is resolving with another DNS provider.
- Configuring [connectors](https://support.dnsimple.com/categories/connectors/). With two-way connections, both sides of the service are configured and monitored automatically.
- Adding [one-click services](https://support.dnsimple.com/categories/services/). Our ready-to-use DNS snippets create the DNS configuration needed for web pages, email, and more.
- Manually entering DNS records in the DNS [record editor](https://support.dnsimple.com/articles/record-editor/).

After configuring your records, you'll be prompted to activate the DNS zone, making it ready to receive traffic.

## Configuring the domain records

You can manage your domain DNS records (also called a DNS zone) using the [DNS record editor](/articles/record-editor). From the record editor, you can create, delete, and update the DNS records that represent the DNS zone of your domain.

## Activating a DNS zone

You can activate the DNS hosting service for a domain from the domain DNS tab.

<div class="section-steps" markdown="1">
##### To activate a DNS zone

1. If you have multiple accounts, select the relevant account in the navigation bar.
1. Click the relevant domain name to access the domain page.
1. On the left side, click the <label>DNS</label> tab.
    ![tab for link to dns settings](/files/dns-tab.png)

1. On the <label>DNS zone is inactive</label> card, click **Activate zone**.
    ![activate dns zone](/files/inactive-zone.png)

</div>

The DNS zone is automatically inactive for each new domain or zone added to an account, whether you register/transfer the domain or simply add it.

## Deactivating a DNS zone

<div class="section-steps" markdown="1">
##### To deactivate a DNS zone

1. If you have multiple accounts, select the relevant account in the navigation bar.
1. Click the relevant domain name to access the domain page.
1. On the left side, click the <label>DNS</label> tab.
  ![tab for link to dns settings](/files/dns-tab.png)

1. On the <label>DNS zone is active</label> card, click **Deactivate zone**.
  ![Enable DNS hosting](/files/domain-dns-hosting-enable.png)

</div>

If a domain is delegated to our name servers, deactivating a DNS zone for a domain will cause the domain to immediately stop resolving, regardless of whether the domain is registered or just hosted with us.

If the domain is registered with us but delegated to another DNS provider, deactivating the DNS zone won't change the delegation. The domain will continue to resolve with the other DNS provider.

## Use cases

There are a few cases where you may want to deactivate a zone:

- You wanted to register a domain with us, but you'll be using a different DNS hosting provider.
- You wanted to register a domain with us, but you aren't actively using the domain (e.g the domain is just reserved for future use or parked).
- You added the domain just to purchase an SSL certificate, but the domain is not delegated to us and it isn't resolving with DNSimple.

## Have more questions?

If you have any questions or need assistance activating or deactivating a DNS zone, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
