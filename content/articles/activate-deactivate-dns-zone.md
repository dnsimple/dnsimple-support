---
title: Activate and Deactivate a DNS Zone
excerpt: How to activate or deactivate zones in your DNSimple account.
meta: Activate or deactivate DNS zones in your DNSimple account to control DNS hosting for your domains. Inactive zones stop resolving and billing.
categories:
- DNS
---

# Activate and Deactivate a DNS Zone
You can activate the DNS hosting service for a domain from the domain **DNS** tab.

## Activating a DNS zone {#activating-a-dns-zone}

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


> [!NOTE]
> New domains, whether registered, transferred, or manually added, will have DNS hosting disabled by default until you activate the zone.


## Deactivating a DNS zone {#deactivating-a-dns-zone}

<div class="section-steps" markdown="1">
### To deactivate a DNS zone

1. If you have multiple accounts, select the relevant account from the **account switcher** at the top-right corner of the screen.
1. From the **Domain Names** list, click the domain you want to manage.
1. Click the **DNS** tab on the left side
  ![tab for link to dns settings](/files/dns-tab.png)

1. On the **DNS zone is active** card, click **Deactivate zone**.
  ![Enable DNS hosting](/files/domain-dns-hosting-enable.png)

</div>

> [!WARNING]
> If a domain is delegated to our name servers, deactivating the DNS zone will immediately cause the domain to stop resolving. This applies whether the domain is registered or just hosted with us.
> If the domain is registered with DNSimple but delegated to another DNS provider, deactivating the DNS zone will not change the delegation settings. The domain will continue to resolve through the other DNS provider as usual.

> [!NOTE]
> Active zones are billed monthly. Deactivating a zone stops the recurring charge. If you are seeing charges for zones you are not using, check whether they are still active and deactivate them if they are no longer needed. See [Understanding Your Invoice](/articles/understanding-invoice/#active-zones) for more details.

## Use cases {#use-cases}
There are a few cases where you may want to deactivate a zone:

- You wanted to register a domain with us, but you will be using a different DNS hosting provider.
- You wanted to register a domain with us, but you are not actively using the domain (e.g., the domain is just reserved for future use or parked).
- You added the domain just to purchase an SSL certificate, but the domain is not delegated to us, and it is not resolving with DNSimple.

## Have more questions?
If you have any questions or need assistance activating or deactivating a DNS zone, contact support, and we will be happy to help.
