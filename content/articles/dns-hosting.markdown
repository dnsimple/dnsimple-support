---
title: DNS Hosting
excerpt: DNSimple provides robust DNS hosting using a global Anycast network.
categories:
- DNS
---

# DNS Hosting

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides robust DNS hosting using a [global Anycast network](/articles/anycast).


## Using DNSimple as a DNS hosting provider

If you want to use DNSimple to manage the DNS of an existing domain, you have two options:

1.  **Keep the domain registration at your current registrar and transfer the DNS management to us.**

    To use DNSimple to host your DNS for a domain, follow these instructions to [point your domain to our name servers](/articles/delegating-dnsimple-hosted).

1.  **Transfer the domain registration and DNS management to us.**

    If you want DNSimple to act as your domain registrar, follow these instructions to [transfer your domain to DNSimple](/articles/transferring-domain).

If you don't have a domain yet, you can [register a domain](https://dnsimple.com/tlds) with us, and subscribe to a DNS hosting plan to manage the domain with us.

To use our DNS hosting service, the account must be subscribed to a valid plan. Each plan provides different levels of services and has a specific number of DNS zones (domains) included in the subscription fee. You can selectively enable/disable the DNS hosting service for a single domain, depending on whether you need to use our DNS hosting feature or not.


## Adding the domain

To use our DNS hosting services, you need to [add the domain to a DNSimple account](/articles/adding-domain). If you also want to use DNSimple as registrar, you may need to register or [transfer](/articles/transferring-domain) the domain to us.


## Configuring the domain records

You manage your domain DNS records (also called DNS zone) using the [DNS record editor](/articles/record-editor). From the record editor, you can create, delete, and update the DNS records that represent the DNS zone of your domain.


## Enabling DNS hosting

<info>
This section describes a feature only available on [newer plans](/articles/new-plans/#newer-plans-only).
</info>

You can enable the DNS hosting service for a previously disabled domain from the domain DNS tab.

<div class="section-steps" markdown="1">
##### To enable DNS hosting

1.  Log in to DNSimple with your user credentials.
1.  If you have multiple accounts, select your account in the navigation bar.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.
1.  Switch to the <label>DNS</label> tab.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Find the <label>DNS Hosting</label> card, and follow the instructions to enable DNS hosting.

    ![Enable DNS hosting](/files/domain-dns-hosting-enable.png)

</div>

Each new domain added to an account has DNS hosting enabled by default, whether you register/transfer the domain or simply add it.


## Disabling DNS hosting

<div class="section-steps" markdown="1">
##### To disable the DNS hosting

1.  Log in to DNSimple with your user credentials.
1.  If you have multiple accounts, select your account in the navigation bar.
1.  Click the <label>Domains</label> tab, and locate the relevant domain name to access the domain page.
1.  Switch to the <label>DNS</label> tab.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  Find the <label>DNS Hosting</label> card and follow the instructions to disable the DNS hosting.

    ![Disable DNS hosting](/files/domain-dns-hosting-disable.png)

</div>

If a domain is delegated to our name servers, disabling the DNS hosting for a domain will cause the domain to immediately stop resolving, regardless of whether the domain is registered or just hosted with us.

If the domain is registered with us but delegated to another DNS provider, disabling the DNS hosting won't change the delegation. The domain will continue to resolve with the other DNS provider.


## Use cases

There are a few cases where you may want to turn off the DNS hosting for a domain:

- You added the domain just to purchase an SSL certificate, but the domain is not delegated to us and it isn't resolving with DNSimple.
- You wanted to register a domain with us, but you'll be using a different DNS hosting provider.
- You wanted to register a domain with us, but you aren't actively using the domain (e.g the domain is just reserved for future use or parked).

When you disable a domain, the domain will no longer count against the number of active zones in your subscription fee. If you have 20 domains in your account, but only 15 have DNS hosting enabled, we'll only bill you for 15 domains.
