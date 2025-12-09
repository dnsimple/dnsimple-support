---
title: Rotate DNSSEC Keys
excerpt: Guides DNSSEC key rotation for DNSimple users, detailing auto-rotation and essential manual steps to maintain domain security.
meta: Learn about DNSSEC key rotation at DNSimple. Understand automatic key rotation, manual DS record updates, and how to maintain domain security.
categories:
- DNS
- DNSSEC
- Enterprise
---

# Rotate DNSSEC Keys

The [key signing keys and zone signing key](/articles/types-of-dnssec-keys/) rotation period starts 83 days after they're created and can last between 2 and 14 days. DNSSEC key set rotation is automatic and mandatory. It cannot be disabled.

Here is what you need to do, depending on how your domain is set up.

## If your domain is registered with us

In this scenario, DNSSEC is fully managed by DNSimple, which includes the management of the DS records in the parent zone. There is nothing you need to do.

## If your domain is not registered with us

You will need to manually manage your DS records at your domain registrar.

**How it works:**

1. When key rotation starts, we'll send you an email notification with the new DS record details. At this point, your zone will be signed by two sets of DNSSEC keys.
1. You have 7 days to add the DS records at your registrar.
1. Once our system verifies the new DS record is fully present in the parent zone, we'll send you another email notification with the old DS record details.
1. You have 7 days to remove the DS records at your registrar.
1. Once our system verifies the old DS record is no longer present in the parent zone, we remove the old key set, and the key set rotation is completed.

## Automating key rotation

If your domain registrar offers an API for managing DS records, you can automate rotation for domains registered outside DNSimple.

To do this, use the `dnssec.rotation_start` and `dnssec.rotation_complete` webhook events to trigger the updates.

For details, refer to our [webhooks API documentation](https://developer.dnsimple.com/v2/webhooks/webhooks/).

## Have more questions?
If you have any questions or need assistance rotating DNSSEC keys, [contact support](https://dnsimple.com/contact), and we'll be happy to help.

