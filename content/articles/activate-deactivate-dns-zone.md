---
title: Activating and Deactivating a DNS zone
excerpt: How to activate or deactivate zones in your DNSimple account.
meta: DNSimple provides a simple interface for activating and deactivating your DNS zones.
categories:
- DNS
---

# Activating and Deactivating a DNS zone
You can activate the DNS hosting service for a domain from the domain **DNS** tab.

## Activating a DNS zone

<div class="section-steps" markdown="1">
### To activate a DNS zone

  1. If you have multiple accounts, select the relevant account from the account switcher at the top-right corner of the screen.
1. Click the relevant domain name to access the domain page.
1. On the left side, click the **DNS** tab.
    ![tab for link to dns settings](/files/dns-tab.png)

1. On the **DNS zone is inactive** card, click **Activate zone**.
    ![activate dns zone](/files/inactive-zone.png)

</div>

The DNS zone is automatically inactive for each new domain or zone added to an account, whether you register/transfer the domain or simply add it.


<info>
New domains, whether registered, transferred, or manually added, will have DNS hosting disabled by default until you activate the zone.
</info>


## Deactivating a DNS zone

<div class="section-steps" markdown="1">
### To deactivate a DNS zone

1. If you have multiple accounts, select the relevant account from the **account switcher** at the top-right corner of the screen.
1. From the **Domain Names** list, click the domain you want to manage.
1. Click the **DNS** tab on the left side
  ![tab for link to dns settings](/files/dns-tab.png)

1. On the **DNS zone is active** card, click **Deactivate zone**.
  ![Enable DNS hosting](/files/domain-dns-hosting-enable.png)

</div>

<warning>
If a domain is delegated to our name servers, deactivating the DNS zone will immediately cause the domain to stop resolving. This applies whether the domain is registered or just hosted with us.

If the domain is registered with DNSimple but delegated to another DNS provider, deactivating the DNS zone won't change the delegation settings. The domain will continue to resolve through the other DNS provider as usual.
</warnning>

## Use cases
There are a few cases where you may want to deactivate a zone:

- You wanted to register a domain with us, but you'll be using a different DNS hosting provider.
- You wanted to register a domain with us, but you aren't actively using the domain (e.g., the domain is just reserved for future use or parked).
- You added the domain just to purchase an SSL certificate, but the domain is not delegated to us, and it isn't resolving with DNSimple.

## Have more questions?
If you have any questions or need assistance activating or deactivating a DNS zone, contact support, and we'll be happy to help.
