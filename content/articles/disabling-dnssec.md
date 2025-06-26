---
title: Disabling DNSSEC
excerpt: Learn how to disable DNSSEC for your domain, including critical warnings about removing DS records to prevent DNSSEC validation failures.
categories:
- DNSSEC
---

# Disabling DNSSEC

<warning>
If your domain is registered with another registrar, you must remove the DS record from that registrar before you disable zone signing in DNSimple. If the DS record is not removed within 48 hours, your domain will experience DNSSEC validation failures and cease to resolve for DNSSEC-aware resolvers, making your domain unreachable.
</warning>


1. Select the correct account in the **account switcher** at the top right.
  [screenshot of switching accounts](/files/switch-account.png)
1. From your **Domain Names** list, click the name of the domain you want to disable DNSSEC on.
  ![screenshot of list of domain names](/files/dnssec-domain-names.png)
1. Click the **DNSSEC** tab on the left side.
  ![screenshot of dnssec in the navigation](/files/dnssec-menu.png)
1. On the **Disable DNSSEC** card, click **Disable DNSSEC**.
  ![screenshot of disabling dnssec](/files/dnssec-disable.png)
1. Enter the domain to verify, and click **Disable DNSSEC** again to remove the zone signing (and the DS record if it is present in DNSimple).
  ![screenshot of confirming disabling of dnssec](/files/dnssec-disable-confirm.png)
1. When you click **Disable DNSSEC** for a domain that is registered with another domain registrar, you will see a reminder message to remove the DS record within 48 hours to prevent DNSSEC validation failures.
  ![screenshot of confirming disabling of external domain dnssec](/files/dnssec-disable-external.png)

## Have more questions?
If you have any questions or need assistance disabling your DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
