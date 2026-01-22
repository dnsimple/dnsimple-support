---
title: Disabling DNSSEC
excerpt: Learn how to disable DNSSEC for your domain, including critical warnings about removing DS records to prevent DNS resolution issues.
meta: Learn how to disable DNSSEC for your domain at DNSimple. Understand critical warnings about removing DS records to prevent DNS resolution issues.
categories:
- DNSSEC
- Enterprise
---

# Disabling DNSSEC

1. Select the correct account in the **account switcher** at the top right.
  ![screenshot of switching accounts](/files/switch-account.png)
1. From your **Domain Names** list, click the name of the domain you want to disable DNSSEC on.
  ![screenshot of list of domain names](/files/dnssec-domain-names.png)
1. Click the **DNSSEC** tab on the left side.
  ![screenshot of dnssec in the navigation](/files/dnssec-menu.png)
1. On the **Disable DNSSEC** card, click **Disable DNSSEC**.
  ![screenshot of disabling dnssec](/files/dnssec-disable.png)
1. Enter the domain to verify, and click **Disable DNSSEC** again to remove the zone signing (and the DS record if it is present in DNSimple).
  ![screenshot of confirming disabling of dnssec](/files/dnssec-disable-confirm.png)


> [!NOTE]
> To learn how to disable DNSSEC with the API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#disableDomainDnssec).

## Important timing considerations

> [!TIP]
> TTL and propagation delays: When you disable DNSSEC, it can take 24 to 48 hours for the process to completely finish. This is because of TTL (Time-to-Live) values, which control how long DNS records are cached. During this time, our system ensures that all DNSSEC-related records are properly torn down so that your zone continues to resolve correctly. The complete disable process will not finish until the TTL has expired and all DNSSEC records have been fully removed from the DNS system.

If your domain is not registered with DNSimple, you must also remove the DS records at your domain registrar. The DS record removal at the registrar level is also subject to TTL propagation delays. For step-by-step instructions on removing DS records, see [Adding and Removing DS Records](/articles/manage-ds-record/).

## Troubleshooting

If you encounter issues after disabling DNSSEC, see [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance. For information about managing DS records when changing DNS providers, see [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/).

## Learn more

To learn more about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/). For information about enabling DNSSEC, see [Enabling DNSSEC](/articles/enabling-dnssec/). For information about DS records and how they work, see [What Are DS Records?](/articles/what-are-ds-records/). To understand TTL and how it affects DNS record propagation, see [What Is Time-to-Live?](/articles/what-is-ttl/). For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
If you have any questions or need assistance disabling your DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
