---
title: Add DNSimple as a secondary DNS server
excerpt: Learn how to configure DNSimple as a secondary DNS provider.
categories:
- Secondary DNS
---

# Configure DNSimple as a Secondary DNS provider

For an overview of Secondary DNS, have a look at [our introduction article](/articles/secondary-dns).

#### Table of contents {#toc}

* TOC
{:toc}

---

<warning>
  You cannot set up Secondary DNS if you have DNSSEC enabled at your primary DNS server, as we do not import external RRSIG records. Please ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS. You can read more about why [here](/articles/dnssec-and-secondary-dns).
</warning>

#### Requirements

<info>
Adding DNSimple as a Secondary DNS provider is only available on [Professional and Business tier](https://dnsimple.com/pricing) or for [Master resellers](https://dnsimple.com/reseller). If you aren't subscribed to one of these plans, we'll prompt you to upgrade your plan.
</info>

#### Adding a Secondary Zone

Create a secondary zone by heading to the account dashboard and selecting the Secondary Zone tab.

![Seconary DNS tab](/files/secondary-dns-tab.png)

Proceed to add a secondary zone entering the domain name for which you want to set DNsimple as secondary DNS provider.

![Secondary Zone form](/files/secondary-zone-form.png)

#### Adding a Primary Server

In case you haven't already added your primary servers IP, you can do so by filling out the form with an alias name, the IP of the primary DNS server from which to carry out zone transfers via AXFR, and the port which is usually 53.

![Primary Server form](/files/primary-server-form.png)

#### Adding a primary server to a secondary zone

Open the secondary zone, by clicking on the zone name and proceed to select "Link primary server".

![Secondary Zone view](/files/secondary-zone-view.png)

Proceed to select the primary servers you wish to pull the zone file from, via zone transfers (AXFR).

![Link Secondary Zone to Primary Server](/files/link-secondary-zone-to-primary.png)

At this point, we will try to carry out a zone transfer via AXFR. This could take a moment, especially if you have just added our AXFR clients IP in your primary DNS provider.

<info>
If it has been more then 10 minutes since you configured DNSimple as secondary DNS, and no records are being shown, you should check that our AXFR clients IP has been added to the Access-control list (ACL) at your primary DNS provider, allowing us to carry out zone transfer via AXFR. After confirming the IP is present, unlink and link back the primary server, allowing again for 10 minutes for the intial zone transfer to occur. If still experiencing problems, please [contact support](https://dnsimple.com/contact).
</info>

#### Configuring DNSimple as secondary at the Primary DNS provider

There are two requirements to ensure DNSimple is both able to sync the zone via zone transfers (AXFR) and serve incoming traffic.

Ensure that our AXFR client's IP is in the Access-control list (ACL) at your primary DNS provider.

**AXFR client IP**:
  - *Production:* `3.12.234.2`
  - *Sandbox:* `3.142.158.214`

Ensure that some of [our name servers](/articles/dnsimple-nameservers/) are added to the domain's delegation at your registrar.

Example of how name server may look like:

  - `ns1.primary.com`
  - `ns2.primary.com`
  - `ns3.primary.com`
  - `ns4.primary.com`
  - `ns1.dnsimple.com`
  - `ns2.dnsimple.com`
