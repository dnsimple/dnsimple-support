---
title: Add DNSimple as a secondary DNS server
excerpt: Learn how to configure DNSimple as a secondary DNS provider.
categories:
- Secondary DNS
---

# Add DNSimple as a secondary DNS server

For an overview of Secondary DNS, have a look at [our introduction article](/articles/secondary-dns).

#### Table of contents {#toc}

* TOC
{:toc}

---

<warning>
  Don't add DNSimple as a secondary DNS server to domains with DNSSEC. We do not import external RRSIG records, which will produce resolution failures in DNSSEC aware resolutors.

  Please ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS. You can read more about why [here](/articles/dnssec-and-secondary-dns).
</warning>

## Video tour

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/NPlkDqLL2Vo" class="aspect-ratio--object" frameborder="0" allow="accelero    meter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Requirements

Adding DNSimple as a Secondary DNS provider is available for an additional fee on the [Professional, Business](https://dnsimple.com/pricing), and [Master reseller](https://dnsimple.com/reseller) plans. If you aren't subscribed to one of these plans, and want to add DNSimple as secondary DNS, we'll prompt you to upgrade your plan.

## Adding a Secondary Zone

Create a secondary zone by heading to the account dashboard. Select the Secondary Zones tab.

![Seconary DNS tab](/files/secondary-dns-tab.png)

Enter the domain name for which you want to set DNsimple as secondary DNS provider.

![Secondary Zone form](/files/secondary-zone-form.png)

## Adding a Primary Server

Primary Server entries can be reused across all the secondary zones you set up. If you need to add a new entry, fill in the form with an alias name, and the IP address and port number provided by your primary DNS service provider.

![Primary Server form](/files/primary-server-form.png)

## Linking a Secondary Zone to a Primary Server

Linking a Secondary Zone to a Primary Server will enable zone transfers (AXFR) that will keep your domain at DNSimple in sync with your primary DNS service provider.

Open the secondary zone by clicking on the zone name. Select "Link primary server".

![Secondary Zone view](/files/secondary-zone-view.png)

Choose the primary server you want to pull the zone file from. You can choose more than one Primary Server.

![Link Secondary Zone to Primary Server](/files/link-secondary-zone-to-primary.png)

We'll try to carry out the first zone transfer to sync up your zone with new DNS records. This could take a moment, especially if you've just added our AXFR clients IP in your primary DNS provider.

<info>
If it's been more then 10 minutes since you configured DNSimple as secondary DNS, and no records are being shown, you should check that our AXFR clients IP has been added to the Access-control list (ACL) at your primary DNS provider. This allows us to carry out zone transfer via AXFR. After confirming the IP is present, unlink and link back the primary server. Allow another 10 minutes for the initial zone transfer to occur. If there are still problems, please [contact support](https://dnsimple.com/contact).
</info>

## Configuring AXFR at your Primary DNS provider

Ensure that our AXFR client's IP is in the Access-Control List (ACL) at your primary DNS provider.

These are our AXFR client IPs:
- Production: `3.12.234.2`
- Sandbox: `3.142.158.214`

## Ensuring the domain is delegated through both providers for greater redundancy

### 1. Update the NS record set at your Primary DNS provider

Ensure that some of [our name servers](/articles/dnsimple-nameservers/) are among the set of NS records present at the zone.

Example of what the set of NS records may look like:

- `NS example.com ns1.primary.com`
- `NS example.com ns2.primary.com`
- `NS example.com ns3.primary.com`
- `NS example.com ns1.dnsimple.com`
- `NS example.com ns2.dnsimple.com`
- `NS example.com ns3.dnsimple.com`

### 2. Delegate the domain through both DNS providers at your domain's registrar

The domain name's owner must update the delegation at the domain registrar with a mix of name servers from both your primary DNS provider [and DNSimple](/articles/dnsimple-nameservers/). The list of name servers should match those used for the NS record set (see previous step).

Once this is in place, DNS queries for that domain will be randomly answered by any of the two providers, effectively achieving greater redundancy.

Example of what the name servers may look like:
- `ns1.primary.com`
- `ns2.primary.com`
- `ns3.primary.com`
- `ns1.dnsimple.com`
- `ns2.dnsimple.com`
- `ns3.dnsimple.com`


