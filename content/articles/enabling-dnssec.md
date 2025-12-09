---
title: Enabling DNSSEC
excerpt: Enable DNSSEC for your domain. Understand the prerequisites, follow the configuration steps, and know what to expect after activation.
categories:
  - DNSSEC
  - Enterprise
---

# Enabling DNSSEC

## Prerequisites

- The DNS resolution service must be enabled for your zone.
- DNSimple as Secondary DNS cannot be enabled on the zone. You can read more about it in our [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/).

## Enable DNSSEC
1. Use the **account switcher** at the top of the page to select the appropriate account.
  ![screenshot of switching accounts](/files/switch-account.png)
1. In your **Domain Names** list, click the name of the domain you want to enable DNSSEC on.
  ![screenshot of list of domain names](/files/dnssec-domain-names.png)
1. Click the **DNSSEC** tab on the left side.
  ![screenshot of dnssec in the navigation](/files/dnssec-menu.png)
1. On the **Configure DNSSEC** card, click **Configure**.
  ![screenshot of disabled dnssec for a domain](/files/dnssec-disabled.png)
1. Follow the wizard instructions

<info>
To see how to enable DNSSEC with the API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#enableDomainDnssec). 
</info>

## What Happens Next?
**If the domain is registered with DNSimple:**
- The zone will be signed automatically.
- The DS record will be provisioned directly at the registry. No additional action is needed.

**If the domain is registered elsewhere:**
- The zone will be signed automatically.
- You'll receive an email with instructions to provision the DS record with your domain's registrar. This information will also be available on the **DNSSEC** tab during the setup process.

## Have more questions?
If you have any questions or need assistance enabling DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
