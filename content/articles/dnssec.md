---
title: DNSSEC
excerpt: DNSimple provides full support for DNSSEC in our authoritative name servers, including signing of zones registered outside DNSimple.
categories:
- DNS
- DNSSEC
---

# DNSSEC

<warning>
  DNSimple does not support [Secondary DNS](/articles/secondary-dns) if you have DNSSEC enabled. They will not work in conjunction. Please ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS. You can read more about the complexities of multi-signer DNSSEC models in [RFC 8901](https://datatracker.ietf.org/doc/html/rfc8901).
</warning>

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSSEC provides a way to cryptographically build a chain of trust from the root name servers to authoritative name servers. Authenticating resolvers may verify this chain of trust to ensure the DNS results weren't tampered with while in transit.

## DNSSEC scenarios

There are a variety of scenarios that DNSimple facilitates to ensure that your zone is signed. Use the scenarios below to understand how to configure your domain/zone.

### Scenario: Registered *&* DNS-hosted at DNSimple

1. [Enable DNSSEC](#enabling-dnssec) for *automatic* zone signing, provisioning, and [key rotation](#key-rotation).

### Scenario: Registered at DNSimple, but DNS-hosted elsewhere

1. Set up DNSSEC through your DNS provider. 
1. When you have the DNSSEC details, add them to your domain's registrar using our [DS management page](/articles/manage-ds-record/).

### Scenario: Registered elsewhere, but DNS-hosted at DNSimple

1. [Enable DNSSEC](#enabling-dnssec) to sign your zone. This initiates automatic [key rotation](#key-rotation). 
1. After enabling, copy the DS record details over to your domain's registrar. 
1. When the [key rotates](#key-rotation) every three months, we'll send you an email with the details, which you'll need to supply to your domain's registrar.

## Managing DNSSEC

DNSSEC is applied on a per-domain basis. You can manage DNSSEC by using the DNSSEC tab on a domain's management page.

![Access DNSSEC through the DNSSEC tab on your domain management page](/files/dnssec-tab.png)

## Enabling DNSSEC

To enable DNSSEC, click on the "Configure" link on the DNSSEC management page.

![Configure DNSSEC](/files/dnssec-configure.png)

Click on the "Enable DNSSEC" button.

![Enable DNSSEC](/files/dnssec-enable.png)

If your domain is registered with DNSimple and using our name servers, the zone is signed, and the DS record will be provisioned in the appropriate domain registry.

If your domain is hosted with us but registered elsewhere, you need to provide the DS record we give you once your zone is signed to your domain registrar. You also need to update your DS record with your domain registrar once every 90 days, as we automatically rotate both zone signing keys and key signing keys.

![DNSSEC DS record](/files/dnssec-configuration-dsrecord.png)

A warning message may be shown to highlight potential issues with DNSSEC enablement, such as:
- The authoritative name servers for the zone are not all returning the same DNSKEY records.
- The authoritiatve name servers for the zone are not returning DNSKEY records that match up with the DS record or zone signing data.
- The DS record has not yet been provisioned at the registrar.

The warning does not necessarily mean that any action is needed on your part, because the issues may resolve on their own after changes from enabling DNSSEC have been propagated.

![DNSSEC Enablement warning](/files/dnssec-enable-warning.png)

## Disabling DNSSEC

<warning>
If your domain is registered with another domain registrar, you should ideally remove the DS record from that registrar *before* removing the zone signing from DNSimple. Failure to remove the DS record within 48 hours of disabling DNSSEC will result in DNSSEC validation failures and will stop your domain from resolving with all DNSSEC-aware resolvers.
</warning>

To disable DNSSEC, go to the DNSSEC tab for the domain, and find the "Disable DNSSEC" card.

![DNSSEC configured](/files/dnssec-configured.png)

Click on the "Disable DNSSEC" button to remove the zone signing and the DS record if it is present.

![DNSSEC disable](/files/dnssec-disable.png)

Note: When you click on the "Disable DNSSEC" button for a domain that is registered with another domain registrar, you will also see a reminder message to remove the DS record within 48 hours to prevent DNSSEC validation failures.

![DNSSEC disable for hosted domains](/files/dnssec-disable-hosted.png)

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
