---
title: Managing DS Records When Changing DNS
excerpt: Explains what to do if you use DNSSEC and change DNS services.
meta: Learn how to update your DS records when changing DNS services while using DNSSEC, ensuring your domain remains secure and properly configured.
categories:
- Domains
- DNS
- DNSSEC
---

# Managing DS Records When Changing DNS

If you use DNSSEC, when you switch from one DNS provider to another, you must take precautions to ensure your DNS resolution continues during the transition.

## Why this matters

Your [DS record](/articles/what-are-ds-records/) links your domain to a specific [DNSSEC key](/articles/types-of-dnssec-keys/) used to sign your zone. If you change DNS providers without updating or removing this record appropriately, your domain may become unreachable.

## What to do when changing DNS providers

### If you're moving to a provider that does not support DNSSEC

You must disable DNSSEC and ensure your DS record is no longer present in the parent zone before switching. Keeping it in place will cause DNS validation to fail because no signed zone will exist at the new provider.

### If you're moving to a provider that supports DNSSEC

You must enable DNSSEC on the new provider, and ensure the other provider's DS record is provisioned and propagated in the parent zone before switching. Then, after switching, you can remove the old provider's DS record from the parent zone. This ensures a zero-downtime transition both in the DNS resolution and DNSSEC aspects.

For more information on adding and removing DS records, refer to this [support article](/articles/manage-ds-record/).

## Managing your DS records in DNSimple

If you're using DNSimple as your domain registrar, you can manage your DS records by following the steps in our [Adding and Removing DS Records article](/articles/manage-ds-record/).

## Have more questions?
If you have questions or need assistance with your DS records, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
