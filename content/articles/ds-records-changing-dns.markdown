---
title: Managing DS Records When Changing DNS
excerpt: This article explains what to do if you use DNSSEC and change DNS services.
categories:
- Domain Transfers
- DNS
---

# Managing DS Records When Changing DNS

If you use DNSSEC, when you switch from one DNS provider to another you must take precautions to ensure your DNS resolution continues during the transition.

Your DS record is tied to the specific DNSSEC key that's used to sign your zone. If you move from a DNSSEC provider to a provider that does not support DNSSEC, you must remove your DS record before switching.

The same rule applies if you switch from one DNS provider with DNSSEC to another DNS provider with DNSSEC. You should remove your DS record first, transition to the new DNS provider, and have them provide you with the new DS record you to add to your domain's registry name servers.

## Removing your DS record in DNSimple

If you're using DNSimple as your domain registrar and have previously set up your DS record with us, you can remove the record by going to your domain's management page and using the Delete DS Record button at the bottom of the page.

![Delete DS Record](/files/dnsimple-ds-record.png)
