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

## Troubleshooting

If you encounter issues after disabling DNSSEC, see [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for comprehensive guidance. For information about managing DS records when changing DNS providers, see [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/).

## Have more questions?
If you have any questions or need assistance disabling your DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
