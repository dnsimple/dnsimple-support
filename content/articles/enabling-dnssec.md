---
title: Enabling DNSSEC
excerpt: Enable DNSSEC for your domain. Understand the prerequisites, follow the configuration steps, and know what to expect after activation.
categories:
  - DNSSEC
---

# Enabling DNSSEC

## Prerequisites
You cannot enable DNSSEC if you have set up [Secondary DNS](/articles/secondary-dns/). They will not work in conjunction. Ensure you are not currently using Secondary DNS, or disable Secondary DNS before using DNSSEC. You can read more about why [in this article](/articles/dnssec-and-secondary-dns/).

## Enable DNSSEC
1. Use the **account switcher** at the top of the page to select the appropriate account.
  ![screenshot of switching accounts](/files/switch-account.png)
1. In your **Domain Names** list, click the name of the domain you want to enable DNSSEC on.
  ![screenshot of list of domain names](/files/dnssec-domain-names.png)
1. Click the **DNSSEC** tab on the left side.
  ![screenshot of dnssec in the navigation](/files/dnssec-menu.png)
1. On the **Configure DNSSEC** card, click **Configure**.
  ![screenshot of disabled dnssec for a domain](/files/dnssec-disabled.png)
1. Click **Enable DNSSEC** to start the configuration.
  ![screenshot of enabling dnssec for a domain](/files/dnssec-enable.png)

## What Happens Next?
**If the domain is registered with DNSimple and using DNSimple name servers:**
- The zone will be signed automatically.
- The DS record will be provisioned directly at the registry. No additional action is needed.

**If the domain is registered elsewhere but using DNSimple for DNS hosting:**
- Once the zone is signed, a DS record will be generated.
- You'll need to manually copy and add this DS record to your domain registrar to complete the setup.
- DNSSEC key rotation occurs every 90 days. You must update the DS record at your registrar as we automatically rotate both zone signing keys and key signing keys.
![screenshot of dnssec keys](/files/dnssec-keys.png)

## Common warnings
A warning may be shown to highlight potential issues with enabling DNSSEC.

For example:
- The authoritative name servers for the zone are not all returning the same DNSKEY records.
- The authoritative name servers for the zone are not returning DNSKEY records that match up with the DS record or zone signing data.
- The DS record has not yet been provisioned at the registrar.

<info>
The warning does not necessarily mean that any action is needed on your part. The issues may resolve on their own after changes from enabling DNSSEC have been propagated.
</info>

![screenshot of dnssec configured](/files/dnssec-configured.png)

## Have more questions?
If you have any questions or need assistance enabling DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
