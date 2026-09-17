---
title: Enable DNSSEC
excerpt: Enable DNSSEC for your domain. Understand the prerequisites, follow the configuration steps, and know what to expect after activation.
meta: Learn how to enable DNSSEC for your domain at DNSimple. Understand prerequisites, follow step-by-step configuration, and know what to expect after activation.
categories:
  - DNSSEC
  - Enterprise
---

# Enable DNSSEC

To enable DNSSEC in DNSimple, open the DNSSEC tab for your domain and follow the configuration wizard. DNSimple signs the zone automatically and, for domains registered with DNSimple, provisions the DS record at the registry with no additional steps required.

If you are new to DNSSEC, start with [What Is DNSSEC?](/articles/what-is-dnssec/) to understand what DNSSEC is and how it works. For a comprehensive overview of DNSSEC at DNSimple, see [DNS Security Extensions (DNSSEC) at DNSimple](/articles/dnssec/).

## Prerequisites {#prerequisites}

- The DNS resolution service must be enabled for your zone.
- DNSimple as Secondary DNS cannot be enabled on the zone. You can read more about it in our [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/).
- DNSSEC is applied to the whole zone, with signing keys published at the domain apex. DS records for [subdomains delegated with NS records](/articles/add-ns-records-for-subdomain/) (zone cuts) are not supported. See [DNSSEC Compatibility With Other DNSimple Features](/articles/dnssec-compatibility/).

## Enable DNSSEC {#enable}
1. Use the **account switcher** at the top of the page to select the appropriate account.
  ![screenshot of switching accounts](/files/switch-account.png)
1. In your **Domain Names** list, click the name of the domain you want to enable DNSSEC on.
  ![screenshot of list of domain names](/files/dnssec-domain-names.png)
1. Click the **DNSSEC** tab on the left side.
  ![screenshot of dnssec in the navigation](/files/dnssec-menu.png)
1. On the **Configure DNSSEC** card, click **Configure**.
  ![screenshot of disabled dnssec for a domain](/files/dnssec-disabled.png)
1. Follow the wizard instructions

> [!NOTE]
> To see how to enable DNSSEC with the API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#enableDomainDnssec).

## What Happens Next? {#next}
**If the domain is registered with DNSimple:**
- The zone will be signed automatically.
- The DS record will be provisioned directly at the registry. No additional action is needed.

**If the domain is registered elsewhere:**
- The zone will be signed automatically.
- You will receive an email containing the DS record in both DS-data and KEY-data format. Follow its instructions to provision the record with your domain's registrar. Keep the email until the DS record is live.
- The **DNSSEC** tab shows a summary of your active key set: algorithm, key tag, creation date, and next scheduled rotation. It does not display the full DS record during initial setup. Use the values from the email.

> [!WARNING]
> The email includes a deadline for provisioning the DS record. If the DS record is not in place at your registrar by that date, DNSSEC is disabled on the domain.

## Troubleshooting {#troubleshooting}

If you encounter issues after enabling DNSSEC, see [Troubleshoot DNSSEC](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance on diagnosing and resolving common DNSSEC problems.

## Have more questions?
If you have any questions or need assistance enabling DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
