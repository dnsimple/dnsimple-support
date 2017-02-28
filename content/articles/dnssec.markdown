---
title: DNSSEC
excerpt: DNSimple provides full support for DNSSEC in our authoritative name servers, including signing of zones that are registered outside of DNSimple.
categories:
- DNS
---

# DNSSEC

### Table of Contents {#toc}

* TOC
{:toc}

---

## DNSSEC Scenarios

We currently support DNSSEC in the following ways:

- If your domain is registered through DNSimple and you are using our authoritative name servers, then you may sign zones and insertion and rotation of your DS record is handled automatically.
- If your domain is registered through DNSimple but host your DNS with another authoritative DNS provider, then you may add DS records for DNSSEC-enabled zones.
- If your domain DNS is hosted through DNSimple, but your domain is registered elsewhere, then you may sign zones in our name servers, but you will be required to handle the creation and rotation of DS records.

We do not support DNSSEC for zones using secondary DNS at this time.

## Managing DNSSEC

DNSSEC is applied on a per-domain basis. You may manage DNSSEC by going to a domain's management page and using the DNSSEC tab.

![Access DNSSEC through the DNSSEC tab on your domain management page](/files/dnssec-tab.png)

## Enable DNSSEC

To enable DNSSEC, click on the "Configure DNSSEC" link once you're on the DNSSEC management page for a domain.

![Configure DNSSEC](/files/dnssec-configure.png)

Then click on the "Enable DNSSEC" button.

![Enable DNSSEC](/files/dnssec-enable.png)

If your domain is registered with DNSimple, and using our name servers, then the zone will be signed and the DS record will be created in the appropriate domain registry.

If your domain is registered with us but delegated elsewhere, then you will need to provide the DS record information from your DNS provider.

![DNSSEC DS record](/files/dnssec-configuration-dsrecord.png)

## Disable DNSSEC

Warning: If your domain is registered with another domain registrar, then you should remove the DS record from that registrar *before* removing the zone signing from DNSimple.

To disable DNSSEC, go to the DNSSEC tab for the domain, and click on the Configure DNSSEC link again.

![DNSSEC configured](/files/dnssec-configured.png)

Click on the Delete DNSSEC Configuration button to remove the zone signing and the DS record if it is present.

![DNSSEC disable](/files/dnssec-disable.png)

## Key Rotation

DNSimple currently rotates both key signing keys and zone signing keys every 90 days.

As stated above, if your domain is both registered with us and uses our authoritative name servers, then we will handle rotation of keys automatically. If not, then you will receive an email notification whenever key rotation starts, with the new DS record, which you will need add through your domain registrar.

Warning: please consider carefully whether you are able and willing to rotate DS records at your registrar if your domain is not registered with DNSimple. It is essential that DS records are updated whenever DNSSEC keys are rotated in your DNSimple zone. If you do not update your DS record when your keys change, then your domain will fail to resolve through resolvers that verify DNSSEC keys, including Google's Public DNS. This will result in failed DNS resolution for your domains.

## Troubleshooting DNSSEC configurations

The following tools may be helpful in troubleshooting DNSSEC configuration issues:

- [Verisign DNSSEC Debugger](http://dnssec-debugger.verisignlabs.com/)
- [DNSViz](http://dnsviz.net/)

You may also [contact DNSimple support](https://dnsimple.com/contact) if you have additional questions.
