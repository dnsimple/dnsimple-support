---
title: Rotate DNSSEC Keys
excerpt: Guides DNSSEC key rotation for DNSimple users, detailing auto-rotation and essential manual steps to maintain domain security
categories:
- DNS
- DNSSEC
---

# Rotate DNSSEC Keys

DNSimple automatically rotates key signing keys and zone signing keys every 90 days. Auto-rotation is mandatory. It cannot be disabled.
Here is what you need to do, depending on how your domain is set up.

## If your domain is registered with us and uses our authoritative name servers
There is nothing you need to do. We handle the key rotation automatically for you.
If your domain is not registered with us or does not use our authoritative name servers
You will need to manually rotate your DS record at your domain registrar.

How it works:

1. When key rotation starts, we'll send you an email notification with the new DS record details.
1. You have 7 days to update the DS records at your registrar and from there you will need to:
  - Remove the old DS record.
  - Add the new DS record provided in the email.
1. During the key rotation,  both old and new keys are attached to your zone for 7 days (the duration of the key rotation period).
1. At the end of the rotation period, our system removes the old key, leaving only the new key in place.

<warning>
#### Failure to update the DS record at your registrar will result in downtime
If your domain isn't registered with DNSimple, carefully consider whether you're willing and able to rotate DS records at your registrar. DS records MUST be updated whenever DNSSEC keys are rotated in your DNSimple zone. If you don't update your DS record when your keys change, your domain will fail to resolve through resolvers that verify DNSSEC keys, including Google's Public DNS. **This will result in failed DNS resolution for your domains.**
</warning>

## Automating key rotation
If your domain registrar offers an API for managing DS records, you can automate rotation for domains registered outside DNSimple.

To do this, use the `dnssec.rotation_start` and `dnssec.rotation_complete` webhook events to trigger the updates.

For details, refer to our [webhooks API documentation](https://developer.dnsimple.com/v2/webhooks/webhooks/).

## Manual key rotation
If your registrar requires the DNSKEY or other additional details, you can view your full DNSSEC configuration.

1. Use the **account switcher** at the top of the page to select the correct account.
1. In the **Domain Names list**, click the name of the domain you want to check.
1. Click the **DNSSEC** tab on the left side.
  ![screenshot: edit dnssec link](/files/dnssec-tab-location.png)
1. In the **DNSSEC Configuration** card, click **View Configuration** to see your current DNSSEC details.
  ![screenshot: showing dnssec key set](/files/dnssec-key-set.png)


### Next steps:
- Copy the DNSSEC details provided.
- Log in to your domain registrar's management portal.
- Locate the section for managing DNSSEC or DS records.
- Update or add the DS record or DNSKEY information as needed, based on the details from DNSimple.

If you're rotating keys, remember to remove any old DS records, and replace them with the new one from your DNSimple configuration.

## Have more questions?
If you have any questions or need assistance rotating DNSSEC keys, [contact support](https://dnsimple.com/contact), and we'll be happy to help.

