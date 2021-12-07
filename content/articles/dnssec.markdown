---
title: DNSSEC
excerpt: DNSimple provides full support for DNSSEC in our authoritative name servers, including signing of zones registered outside DNSimple.
categories:
- DNS
- DNSSEC
---

# DNSSEC

<warning>
  You cannot enable DNSSEC if you have set up [Secondary DNS enabled](/articles/secondary-dns), as they will not work in conjunction. Please ensure that you are not currently using Secondary DNS, or disable Secondary DNS before using DNSSEC. You can read more about why [here](/articles/dnssec-and-secondary-dns).
</warning>

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSSEC provides a way to cryptographically build a chain of trust from the root name servers to authoritative name servers. Authenticating resolvers may verify this chain of trust to ensure the DNS results weren't tampered with while in transit.

## DNSSEC scenarios

We support DNSSEC in the following ways:

- If your domain is registered through DNSimple, and you're using our authoritative name servers, you can sign zones, and provision and rotation of your DS record is handled automatically.
- If your domain is registered through DNSimple, but you host your DNS with another authoritative DNS provider, you can [manage the DS records](/articles/manage-ds-record/) for DNSSEC-enabled zones.
- If your domain DNS is hosted through DNSimple, but your domain is registered elsewhere, you can sign zones in our name servers, but you're required to provision and rotate DS records by yourself.

## Managing DNSSEC

DNSSEC is applied on a per-domain basis. You can manage DNSSEC by using the DNSSEC tab on a domain's management page.

![Access DNSSEC through the DNSSEC tab on your domain management page](/files/dnssec-tab.png)

## Enabling DNSSEC

To enable DNSSEC, click on the "Configure" link on the DNSSEC management page.

![Configure DNSSEC](/files/dnssec-configure.png)

Click on the "Enable DNSSEC" button.

![Enable DNSSEC](/files/dnssec-enable.png)

If your domain is registered with DNSimple and using our name servers, the zone is signed and the DS record is provisioned in the appropriate domain registry.

If your domain is registered with us but delegated elsewhere, you need to [provide the DS record](#manual-key-rotation) information from your DNS provider.

If your domain is hosted with us but registered elsewhere, you need to provide the DS record we give you once your zone is signed to your domain registrar. You also need to update your DS record with your domain registrar once every 90 days, as we automatically rotate both zone signing keys and key signing keys.

![DNSSEC DS record](/files/dnssec-configuration-dsrecord.png)

## Disabling DNSSEC

<warning>
If your domain is registered with another domain registrar, you must remove the DS record from that registrar *before* removing the zone signing from DNSimple. Failure to remove the DS record first will result in DNSSEC validation failures and will stop your domain from resolving with all DNSSEC-aware resolvers.
</warning>

To disable DNSSEC, go to the DNSSEC tab for the domain, and find the "Disable DNSSEC" card.

![DNSSEC configured](/files/dnssec-configured.png)

Click on the "Disable DNSSEC" button to remove the zone signing and the DS record if it is present.

![DNSSEC disable](/files/dnssec-disable.png)

## Managing DS records

Whether the TLD of the domain requires the DS records to be set up with the DS-Data interface or the KEY-Data interface, you'll be able to manage your records. More details on how to add and remove DS records can be found in this [support article](/articles/manage-ds-record/).

## Key rotation

DNSimple rotates key signing keys and zone signing keys every 90 days. Auto-rotation is mandatory. You can't disable it.

- If your domain is registered with us and uses our authoritative name servers: we handle rotation of keys automatically.
- If your domain is NOT registered with us or DOES NOT uses our authoritative name servers: you'll receive an email notification with the new DS record whenever key rotation starts, **and you'll need to rotate the DS records (remove the old record and add the new record) at your domain registrar within 7 days**.

<warning>
#### Failure to update the DS record at your registrar will result in downtime

If your domain isn't registered with DNSimple, carefully consider whether you're willing and able to rotate DS records at your registrar. DS records MUST be updated whenever DNSSEC keys are rotated in your DNSimple zone. If you don't update your DS record when your keys change, your domain will fail to resolve through resolvers that verify DNSSEC keys, including Google's Public DNS. This will result in failed DNS resolution for your domains.
</warning>

During the key rotation, old and new keys are attached to your zone for 7 days (the duration of the key rotation period). At the end of the rotation period, our system removes the old key, leaving only the new key in place.

### Automating key rotation

If your domain registrar provides an API for managing DS records, you can automate rotation for domains registered outside DNSimple. To do this, use the `dnssec.rotation_start` and `dnssec.rotation_complete` webhook events. You can find more information in [our developer documentation](https://developer.dnsimple.com/v2/webhooks/).

### Manual key rotation

If your registrar requires the DNSKEY or other additional details, you can view your full DNSSEC configuration. First, find the "DNSSEC Configuration" card on the DNSSEC tab of a domain's management page.

Click on the "View Configuration" button.

![Access DNSSEC through the DNSSEC tab on your domain management page](/files/dnssec-configured.png)


![DNSSEC Configuration](/files/dnssec-configuration.png)

## CDS/CDNSKEY

CDS and CDNSKEY are two record types that can be used to automatically provision and deprovision DS records at parent name servers. The parent name server provider must support CDS and/or CDNSKEY for these records to be used to automatically provision and deprovision DS records.

CDS and CDNSKEY record types are automatically generated for all DNSimple zones signed after January 1st, 2019, and for all new DNSSEC DNSKEY records created after January 1st, 2019. CDS and CDNSKEY records are managed by DNSimple. These records are not meant to be added or removed manually.

You can find details about how CDS/CDNSKEY work in [RFC 8078](https://tools.ietf.org/html/rfc8078).

## Troubleshooting DNSSEC configurations

These tools are helpful for troubleshooting DNSSEC configuration issues:

- [Verisign DNSSEC Debugger](http://dnssec-debugger.verisignlabs.com/)
- [DNSViz](http://dnsviz.net/)

You can also [contact DNSimple support](https://dnsimple.com/contact) with additional questions.

### DS records without a corresponding DNSKEY

When a DS record is present at your domain registrar, but there's no corresponding DNSKEY in your zone, DNSSEC-aware resolvers will fail to resolve your domain. For example, with Google Public DNS this will result in a SERVFAIL. Clients using a non-DNSSEC-aware resolver will still be able to resolve your domain.

To fix this issue, [remove the DS record](/articles/manage-ds-record/#removing-a-ds-record) from your registrar. This won't immediately fix resolution for some clients, as they'll see the cached DS record. DS record time-to-live values are set by domain registries and may be set to values of 12 hours or more.
