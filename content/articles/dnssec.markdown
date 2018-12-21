---
title: DNSSEC
excerpt: DNSimple provides full support for DNSSEC in our authoritative name servers, including signing of zones that are registered outside of DNSimple.
categories:
- DNS
---

# DNSSEC

<info>
This article describes a feature in Public Beta.
</info>

<info>
This article describes a feature that is only available with [new plans](/articles/new-plans#newer-plans-only).
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSSEC provides a way to cryptographically build a chain of trust from the root name servers all the way through to authoritative name servers. Authenticating resolvers may then verify this chain of trust to ensure the DNS results were not tampered with while in transit.

## DNSSEC scenarios

We support DNSSEC in the following ways:

- If your domain is registered through DNSimple and you're using our authoritative name servers, then you may sign zones, and insertion and rotation of your DS record is handled automatically.
- If your domain is registered through DNSimple but you host your DNS with another authoritative DNS provider, then you may add DS records for DNSSEC-enabled zones.
- If your domain DNS is hosted through DNSimple, but your domain is registered elsewhere, then you may sign zones in our name servers, but you're required to handle the creation and rotation of DS records.

<note>
We do not support DNSSEC for zones using our outbound secondary DNS feature.
</note>

## Managing DNSSEC

DNSSEC is applied on a per-domain basis. You may manage DNSSEC by going to a domain's management page and using the DNSSEC tab.

![Access DNSSEC through the DNSSEC tab on your domain management page](/files/dnssec-tab.png)

## Enabling DNSSEC

To enable DNSSEC, click on the "Configure DNSSEC" link once you're on the DNSSEC management page for a domain.

![Configure DNSSEC](/files/dnssec-configure.png)

Then click on the "Enable DNSSEC" button.

![Enable DNSSEC](/files/dnssec-enable.png)

If your domain is registered with DNSimple, and using our name servers, then the zone is signed and the DS record is created in the appropriate domain registry.

If your domain is registered with us but delegated elsewhere, then you need to provide the DS record information from your DNS provider.

If your domain is hosted with us but registered elsewhere, then you need to provide the DS record we give you once your zone is signed to your domain registrar. You also need to update your DS record with your domain registrar once every 90 days, as we automatically rotate both zone signing keys and key signing keys.

![DNSSEC DS record](/files/dnssec-configuration-dsrecord.png)

## Disabling DNSSEC

<warning>
If your domain is registered with another domain registrar, you must remove the DS record from that registrar *before* removing the zone signing from DNSimple. Failure to remove the DS record first will result in DNSSEC validation failures and will stop your domain from resolving with all DNSSEC-aware resolvers.
</warning>

To disable DNSSEC, go to the DNSSEC tab for the domain, and click on the Configure DNSSEC link again.

![DNSSEC configured](/files/dnssec-configured.png)

Click on the Delete DNSSEC Configuration button to remove the zone signing and the DS record if it is present.

![DNSSEC disable](/files/dnssec-disable.png)

## Key rotation

DNSimple rotates both key signing keys and zone signing keys every 90 days. Auto-rotation is mandatory, and you can't disable it.

- If your domain is registered with us and uses our authoritative name servers: we handle rotation of keys automatically.
- If your domain is NOT registered with us or DOES NOT uses our authoritative name servers: you'll receive an email notification with the new DS record whenever key rotation starts, **and you'll need to rotate the DS records (remove the old record and add the new record) at your domain registrar within 3 days**.

<warning>
#### Failure to update the DS record at your registrar will result in downtime

Please carefully consider whether you're able and willing to rotate DS records at your registrar if your domain is not registered with DNSimple. DS records MUST be updated whenever DNSSEC keys are rotated in your DNSimple zone. If you don't update your DS record when your keys change, your domain will fail to resolve through resolvers that verify DNSSEC keys, including Google's Public DNS. This will result in failed DNS resolution for your domains.
</warning>

During the key rotation, both the old and new keys are attached to your zone for 3 days (the duration of the key rotation period). At the end of the rotation period our system removes the old key, leaving only the new key in place.

### Automating key rotation

If your domain registrar provides an API for managing DS records, you can automate rotation for domains registered outside DNSimple. To do this, you must use the `dnssec.rotation_start` and `dnssec.rotation_complete` webhook events. More information is available in [our developer documentation](https://developer.dnsimple.com/v2/webhooks/).

## DS records without a corresponding DNSKEY

When a DS record is present at your domain registrar, but there is no corresponding DNSKEY in your zone, resolvers that are DNSSEC-aware will fail to resolve your domain. For example, with Google Public DNS this will result in a SERVFAIL. Clients using a non-DNSSEC-aware resolver will still be able to resolve your domain. To fix this issue, you must remove the DS record from your registrar. However, this won't immediately fix resolution for some clients, as they will see the cached DS record. DS record time-to-live values are set by domain registries and may be set to values of 12 hours or more.

## Troubleshooting DNSSEC configurations

The following tools may be helpful in troubleshooting DNSSEC configuration issues:

- [Verisign DNSSEC Debugger](http://dnssec-debugger.verisignlabs.com/)
- [DNSViz](http://dnsviz.net/)

You may also [contact DNSimple support](https://dnsimple.com/contact) if you have additional questions.
