---
title: What Happens When a Domain Expires?
excerpt: What happens when a domain expires, how to recover it, and understanding the associated fees.
categories:
 - Domains
---

# What Happens When a Domain Expires?

When a domain expires it becomes inactive immediately and all the services attached to it cease to function. You can't make any updates to the domain while it is expired. The domain will remain available for reactivation at your regular domain rate under your list of Expired Domains.

## Why domains expire

Domain registrations are time-limited contracts between you and the domain registry. When the registration period ends, the domain expires unless it has been renewed. This expiration mechanism ensures that abandoned or unused domains can eventually return to the available pool for others to register. The expiration process also protects registrants by providing recovery periods before a domain is permanently released.

To reactivate an expired domain, take a look at our [article on how to renew a domain](/articles/renewing-domain/).

> [!WARNING]
> Certain domain names are [auto-renew only](/articles/domain-auto-renewal/) and cannot be renewed manually. For these domains there is no grace period. Once they've expired it's not possible to recover them.

## ICANN TLDs

### Grace period

After a domain expires, it enters a grace period. In this period, the domain is disabled but it's still possible to renew it from the DNSimple account at no extra cost.

Our registrar partners may offer a non-guaranteed 29-day grace period for renewal for most generic top-level domains (gTLDs). There is no guaranteed grace period. Once a domain expires, our registrar partners may dispose of it at any time according to the registration agreement. After the grace period elapses, the domain may go into a redemption grace period.

The grace period exists to give registrants a chance to recover domains that expired unintentionally, such as due to payment issues or missed renewal reminders. During this period, DNS resolution typically stops working because the domain is disabled at the registry level. This means websites, email, and other services that depend on the domain will not function until the domain is renewed.

Renewal years are always added to the end of the current registration period (i.e., the new expiration date is the same whether you renew two months early or the day before expiration), so you will never lose time on your domain by renewing early.

#### Transferring away expired domain

ICANN's rules and regulations permit expired generic top-level domains to be transferred to another registrar, provided the domain is still in its [grace period](#grace-period). Transfers must complete before the domain falls into its [redemption period](#redemption-period).

If you need to transfer an expired domain away, please contact us at [support@dnsimple.com](mailto:support@dnsimple.com), or through the [contact page](https://dnsimple.com/contact), and we'll help you through the process.

> [!WARNING]
> These rules do not apply to [country code TLDs (ccTLDs)](#non-icann-tlds).

### Redemption period

After a domain has passed through any applicable expiration grace period, the domain may go into redemption status.

A redemption grace period is provided after the registrar has issued a delete request to the registry. Only the previous registrant can recover the domain during this time, and it must be retrieved through the previous registrar. The Redemption grace period is named differently for some TLDs. The .org equivalent, for example, is "Pending Delete - Restorable."

The redemption period is a final safety mechanism that prevents accidental permanent loss of a domain. During redemption, the domain cannot be transferred to another registrar or registered by anyone else. Recovery during this period requires a restoration fee, which is higher than standard renewal fees because it involves reversing the deletion process at the registry level. This fee compensates for the additional administrative work required to restore a domain that has been marked for deletion.

Domains in our system can go into either Redemption Grace Period or Extended Redemption Grace Period.

To reactivate a domain in redemption status, please take a look at our [article on how to restore a domain](/articles/restoring-domain/).

### Deletion period

"Pending Delete" refers to the 5-day time frame after redemption. During this time the registry holds the domain and it cannot be recovered. Once the Registry deletes the domain it's available on a first-come first-served basis for anyone to purchase as a new domain.

The deletion period is the final stage before a domain is permanently released. This period allows registries to process the deletion and update their systems. Once a domain enters this period, there is no way to recover it, even by the original registrant. After deletion, the domain becomes available for registration by anyone, and there is no guarantee that the previous owner will be able to register it again.

## Non-ICANN TLDs

TLDs outside ICANN regulations, such as `.UK`, `.IO`, `.SH`, etc. may not follow the rules mentioned above. They may or may not provide a grace period and a redemption period. If they do, the length of the period may be different.

Country code top-level domains (ccTLDs) are managed by their respective country registries, not ICANN. Each registry sets its own policies regarding expiration, grace periods, and redemption. Some ccTLDs have more lenient recovery periods, while others may delete domains immediately upon expiration. This variation exists because each country's registry operates under different legal frameworks and business models.

> [!WARNING]
> ccTLDs have special renewal rules and will be renewed before their expiry if our auto renew feature is being used.

Moreover, some TLDs have no additional periods after the expiration and they are immediately deleted.
