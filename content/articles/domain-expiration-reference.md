---
title: Domain Expiration Reference
excerpt: The formal structure, periods, and key technical details of domain expiration and recovery.
meta: Learn more about the structure, periods, and technical details for domain expiration, grace periods, redemption, and recovery.
categories:
- Domains and Transfers
---

# Domain Expiration Reference

This article serves as a reference for the formal structure, periods, and key technical details of domain expiration and recovery.

For a deeper explanation of what happens when a domain expires and how to recover it, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/).

## Domain expiration overview

When a domain expires, it becomes inactive immediately and all services attached to it cease to function. You cannot make any updates to the domain while it is expired. The domain will remain available for reactivation at your regular domain rate under your list of Expired Domains.

> [!WARNING]
> Certain domain names are [auto-renew only](/articles/domain-auto-renewal/) and cannot be renewed manually. For these domains there is no grace period. Once they've expired, it's not possible to recover them.

## ICANN TLD expiration periods

For domains under registries contracted with ICANN, including all generic top-level domains (gTLDs), new gTLDs, and potentially some country code TLDs (ccTLDs), the expiration process follows standardized periods.

### Grace period

**Duration:** Our registrar partners may offer a non-guaranteed 29-day grace period for renewal for most generic top-level domains (gTLDs). There is no guaranteed grace period. Once a domain expires, our registrar partners may dispose of it at any time according to the registration agreement.

**Status:** During the grace period, the domain is disabled but it's still possible to renew it from the DNSimple account at no extra cost.

**Renewal timing:** Renewal years are always added to the end of the current registration period (i.e., the new expiration date is the same whether you renew two months early or the day before expiration), so you will never lose time on your domain by renewing early.

**Transferring expired domains:** ICANN's rules and regulations permit expired generic top-level domains to be transferred to another registrar, provided the domain is still in its grace period. Transfers must complete before the domain falls into its redemption period.

### Redemption period

**Duration:** After a domain has passed through any applicable expiration grace period, the domain may go into redemption status. The redemption grace period is provided after the registrar has issued a delete request to the registry.

**Status:** Only the previous registrant can recover the domain during this time, and it must be retrieved through the previous registrar. The redemption grace period is named differently for some TLDs. The `.org` equivalent, for example, is "Pending Delete - Restorable."

**Types:** Domains in our system can go into either Redemption Grace Period or Extended Redemption Grace Period.

**Recovery:** To reactivate a domain in redemption status, you must restore the domain. This process takes up to a day to complete and requires a mandatory restore fee plus the domain's renewal fee. Upon completion, your domain's registration will be automatically extended by the registry's minimum renewal period (usually 1 year).

For step-by-step instructions, see [Restoring a Domain](/articles/restoring-domain/).

### Deletion period

**Duration:** "Pending Delete" refers to the 5-day time frame after redemption.

**Status:** During this time the registry holds the domain and it cannot be recovered. Once the Registry deletes the domain, it's available on a first-come first-served basis for anyone to purchase as a new domain.

## Non-ICANN TLDs

**Variations:** TLDs outside ICANN regulations, such as `.UK`, `.IO`, `.SH`, etc., may not follow the rules mentioned above. They may or may not provide a grace period and a redemption period. If they do, the length of the period may be different.

> [!WARNING]
> ccTLDs have special renewal rules and will be renewed before their expiry if our auto-renew feature is being used.

**Immediate deletion:** Some TLDs have no additional periods after the expiration and they are immediately deleted.

## Expiration timeline summary

For ICANN-regulated TLDs, the typical expiration timeline is:

1. **Expiration date:** Domain becomes inactive immediately
2. **Grace period (up to 29 days, non-guaranteed):** Domain can be renewed at no extra cost
3. **Redemption period (varies):** Domain can be restored for a restore fee plus renewal fee
4. **Deletion period (5 days):** Domain cannot be recovered
5. **Deletion:** Domain is deleted and available for registration by anyone

## Expiration notifications

### DNSimple notifications

DNSimple sends email notifications about expiring domains to help you avoid expiration:

- **Expiring Domain Email Notifications:** Sent to alert you when domains are approaching expiration
- **Expiring Product Email Notifications:** Sent for all expiring products, including domains
- **Product Expiring Tomorrow Notification:** Final reminder sent the day before expiration

You can [disable expiration notifications](/articles/disabling-expiration-notifications/) if desired, though this is not recommended.

### ICANN-required notifications

[ICANN](https://www.icann.org/en/resources/registrars/consensus-policies/errp) requires notifications to be sent about domains that will expire soon. These notifications come directly from our upstream partners and are sent to the [registrant email address](/articles/contact-management/) for the domain. You may receive these emails up to three times for each expiring domain, even if [domain auto-renewal](/articles/domain-auto-renewal/) is enabled. These ICANN-required notifications cannot be disabled.

For more information, see [Expiring Domain Email Notifications](/articles/expiring-domain-email-notifications/).

## Auto-renewal

**Recommendation:** We recommend [enabling auto-renewal](/articles/domain-auto-renewal/) whenever possible to avoid your domain expiring. Auto-renewal ensures your domain is automatically renewed before expiration, preventing service interruption.

**Auto-renew only domains:** Some domains are auto-renew only and cannot be renewed manually. For these domains, there is no grace period, and once they've expired, it's not possible to recover them.

## Have more questions?

If you have additional questions or need any assistance with domain expiration and recovery, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
