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

1. When key rotation starts, we'll send you an email notification with the new DS record details. You will also see the DS record details in the DNSSEC tab while the key rotation is ongoing. At this point, your zone will be signed by two sets of DNSSEC keys.
1. You have 7 days to add the DS records at your registrar.
1. Once our system verifies the new DS record is fully present in the parent zone, we'll send you another email notification with the old DS record details.
1. You have 7 days to remove the DS records at your registrar.
1. Once our system verifies the old DS record is no longer present in the parent zone, we remove the old key set, and the key set rotation is completed.

> [!IMPORTANT]
> **TTL considerations:** After you add the DS records at your registrar, it can take up to 24 hours for the key rotation process to complete. This is because the TTL (Time-to-Live) for DS records is 24 hours, and our system needs to verify that the new DS records have fully propagated before proceeding with the rotation. The rotation will not complete until the TTL has expired and the new DS records are fully present in the parent zone.

## Automating key rotation

If your domain registrar offers an API for managing DS records, you can automate rotation for domains registered outside DNSimple.

To do this, use the `dnssec.rotation_start` and `dnssec.rotation_complete` webhook events to trigger the updates.

For details, refer to our [webhooks API documentation](https://developer.dnsimple.com/v2/webhooks/webhooks/).

## Learn more

To learn more about DNSSEC, see [What Is DNSSEC?](/articles/what-is-dnssec/). For information about DS records and how they work, see [What Are DS Records?](/articles/what-are-ds-records/). For step-by-step instructions on managing DS records, see [Adding and Removing DS Records](/articles/manage-ds-record/). To understand TTL and how it affects DNS record propagation, see [What Is Time-to-Live?](/articles/what-is-ttl/). For a complete overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

## Have more questions?
If you have any questions or need assistance rotating DNSSEC keys, [contact support](https://dnsimple.com/contact), and we'll be happy to help.

