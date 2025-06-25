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


1.  Select the correct account in the **account switcher** at the top right.
1.  From your **Domain Names** list, click the name of the domain you want to disable DNSSEC on.
1.  Click the **DNSSEC** tab on the left side.
1.  On the **Disable DNSSEC** card, click **Disable DNSSEC**.
1   Enter the domain to verify, and click **Disable DNSSEC** again to remove the zone signing (and the DS record if it is present in DNSimple).
1.  When you click **Disable DNSSEC** for a domain that is registered with another domain registrar, you will see a reminder message to remove the DS record within 48 hours to prevent DNSSEC validation failures.

## Have more questions?
If you have any questions or need assistance disabling your DNSSEC, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
