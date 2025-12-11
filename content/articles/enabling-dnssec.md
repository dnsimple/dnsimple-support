---
title: Enabling DNSSEC
excerpt: Enable DNSSEC for your domain. Understand the prerequisites, follow the configuration steps, and know what to expect after activation.
meta: Learn how to enable DNSSEC for your domain at DNSimple. Understand prerequisites, follow step-by-step configuration, and know what to expect after activation.
categories:
  - DNSSEC
  - Enterprise
---

# Enabling DNSSEC

If you're new to DNSSEC, start with [What Is DNSSEC?](/articles/what-is-dnssec/) to understand what DNSSEC is and how it works. For a comprehensive overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

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

<info>
To see how to enable DNSSEC with the API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#enableDomainDnssec). 
</info>

## What Happens Next?
**If the domain is registered with DNSimple and using DNSimple name servers:**
- The zone will be signed automatically.
- The DS record will be provisioned directly at the registry. No additional action is needed.

**If the domain is registered elsewhere but using DNSimple for DNS hosting:**
- Once the zone is signed, a DS record will be generated.
- You'll need to manually copy and add this DS record to your domain registrar to complete the setup. For step-by-step instructions, see [Adding and Removing DS Records](/articles/manage-ds-record/). To learn more about DS records, see [What Are DS Records?](/articles/what-are-ds-records/).
- DNSSEC key rotation occurs every 90 days. You must update the DS record at your registrar as we automatically rotate both zone signing keys and key signing keys. For more information, see [Rotate DNSSEC Keys](/articles/rotate-dnssec-key/).
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

![screenshot of dnssec configured](/files/dnssec-configured-warning.png)

## Troubleshooting

If you encounter issues after enabling DNSSEC, see [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance on diagnosing and resolving common DNSSEC problems.

## Have more questions?
If you have any questions or need assistance enabling DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
