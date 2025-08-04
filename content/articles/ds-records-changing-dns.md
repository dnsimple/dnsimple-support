---
title: Managing DS Records When Changing DNS
excerpt: Explains what to do if you use DNSSEC and change DNS services.
meta: Learn how to update your DS records when changing DNS services while using DNSSEC, ensuring your domain remains secure and properly configured.
categories:
- Domain Transfers
- DNS
- DNSSEC
---

# Managing DS Records When Changing DNS

If you use DNSSEC, when you switch from one DNS provider to another, you must take precautions to ensure your DNS resolution continues during the transition.

## Why this matters

Your [DS record](/articles/what-are-ds-records/) links your domain to a specific [DNSSEC key](/articles/types-of-dnssec-keys/) used to sign your zone. If you change DNS providers without updating or removing this record appropriately, your domain may become unreachable.

## What to do when changing DNS providers

### If you're moving to a provider that does not support DNSSEC

You must remove your DS record before switching. Keeping it in place will cause DNS validation to fail because no signed zone will exist at the new provider.

### If you're moving to a provider that supports DNSSEC

The same rule applies if you switch from one DNS provider with DNSSEC to another DNS provider with DNSSEC. You should [remove your DS record](/articles/manage-ds-record/#removing-a-ds-record) first, transition to the new DNS provider, and have them provide you with the new DS record for you to add to your domain's registry name servers.

For more information on adding and removing DS records, refer to this [support article](/articles/manage-ds-record/).

## Removing your DS record in DNSimple

If you're using DNSimple as your domain registrar and have previously set up your DS record with us, you can remove it by following the steps in our [Adding and Removing DS Records article](/articles/manage-ds-record/).

## Have more questions?
If you have questions or need assistance with your DS records, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
