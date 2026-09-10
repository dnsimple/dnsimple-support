---
title: Add DNSimple as a secondary DNS server
meta: Configure inbound secondary DNS so DNSimple pulls your zone from an external primary over AXFR and answers on DNSimple name servers.
excerpt: Set up DNSimple as a secondary DNS provider with Secondary Zones and Primary Servers.
categories:
- Secondary DNS
- Enterprise
---

# Add DNSimple as a secondary DNS server

### Table of Contents {#toc}

* TOC
{:toc}

---

This guide covers **inbound** secondary DNS: an external primary holds the zone, and DNSimple is the secondary (follower). For concepts, see [What is Secondary DNS?](/articles/what-is-secondary-dns/). If your primary should stay off public NS records, see [Add DNSimple as Secondary DNS with a Hidden Primary](/articles/secondary-dns-dnsimple-with-hidden-primary/).

For the opposite direction (DNSimple as primary), see [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).

## Video walk-through {#video}

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/NPlkDqLL2Vo" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Requirements {#requirements}

1. A primary DNS system that supports AXFR.
1. A DNSimple account on a plan that includes DNSimple as secondary DNS (Teams or Enterprise).
1. Ability to allow DNSimple's AXFR client IPs on your primary provider ACL.
1. Ability to change domain delegation at your registrar if you want both providers in the public NS set.

> [!WARNING]
> Do not add DNSimple as a secondary DNS server for zones that need DNSSEC in DNSimple. DNSimple does not import external RRSIG records, which produces resolution failures for DNSSEC-aware resolvers. See [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/).

## Add a secondary zone {#add-zone}

<div class="section-steps" markdown="1">
##### Create a secondary zone

1. Log in to DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. Open the <label>Domain Names</label> tab.
  ![Secondary DNS tab](/files/domain-names-tab.png)
1. Click <label>Add</label> (or <label>Add new</label>), then choose <label>Secondary DNS zone (with DNSimple as follower)</label>.
  ![Add new Secondary DNS Zone](/files/add-new-button-secondary-dns-with-dnsimple-as-follower.png)
1. Enter the domain name for which you want DNSimple as the secondary DNS provider.
  ![Secondary Zone form](/files/secondary-zone-form.png)
1. Create the zone.
</div>

## Add a primary server {#add-primary}

Primary server entries can be reused across secondary zones. Each entry needs an alias name plus the IP address and port from your primary DNS provider.

<div class="section-steps" markdown="1">
##### Create a primary server

1. Open the secondary zone you created.
1. Add a primary server.
1. Enter an alias name, IP address, and port.
  ![Primary Server form](/files/primary-server-form.png)
1. Save the primary server.
</div>

## Configure AXFR at your primary DNS provider {#axfr-acl}

Allow DNSimple's AXFR client IPs on your primary provider ACL **before** you link the zone. Zone transfers fail until the ACL allows these clients.

#### Production

- `3.12.234.2`
- `2600:1f16:ae2:e900:f05c:9438:865f:64a0`

> [!NOTE]
> Confirm these client IPs still match production before relying on them in a change window. If a transfer fails after ACL updates, [contact support](https://dnsimple.com/feedback).

API documentation: [Secondary DNS API](https://developer.dnsimple.com/v2/secondary-dns/).

## Link a secondary zone to a primary server {#link}

Linking enables AXFR so DNSimple stays in sync with your primary.

<div class="section-steps" markdown="1">
##### Link a primary server

1. Open the secondary zone.
1. Select <label>Link primary server</label>.
  ![Secondary Zone view](/files/secondary-zone-view.png)
1. Choose one or more primary servers to pull from.
  ![Link Secondary Zone to Primary Server](/files/link-secondary-zone-to-primary.png)
</div>

DNSimple attempts the first zone transfer after linking. This can take a few minutes, especially if you just updated the ACL.

> [!NOTE]
> If more than 10 minutes have passed and no records appear, confirm DNSimple AXFR client IPs are on the access-control list (ACL) at your primary. Then unlink and link the primary server again. If it still fails, [contact support](https://dnsimple.com/feedback).

## Delegate through both providers {#delegation}

### Update the NS set at your primary {#ns-at-primary}

Include some of [DNSimple's name servers](/articles/dnsimple-nameservers/) in the zone NS set at the primary, for example:

- `NS example.com ns1.primary.com`
- `NS example.com ns2.primary.com`
- `NS example.com ns3.primary.com`
- `NS example.com ns1.dnsimple-edge.com`
- `NS example.com ns2.dnsimple-edge.net`
- `NS example.com ns3.dnsimple-edge.io`
- `NS example.com ns4.dnsimple-edge.org`

### Update registrar delegation {#registrar}

Update registrar delegation to a mix of primary and [DNSimple](/articles/dnsimple-nameservers/) name servers that matches the NS set. Queries are then answered by either provider.

Example:

- `ns1.primary.com`
- `ns2.primary.com`
- `ns3.primary.com`
- `ns1.dnsimple-edge.com`
- `ns2.dnsimple-edge.net`
- `ns3.dnsimple-edge.io`
- `ns4.dnsimple-edge.org`

## Remove an inbound secondary zone {#remove}

If you created a secondary zone by mistake, or you no longer want DNSimple as a secondary for that domain, remove it in two steps: unlink the primary, then delete the zone.

<div class="section-steps" markdown="1">
##### Unlink and delete a secondary zone

1. Open the secondary zone from the <label>Domain Names</label> tab.
1. Unlink any linked primary servers so DNSimple stops transferring the zone.
1. Delete the secondary zone from your account (same flow as deleting a domain or zone you no longer need).
1. If your registrar delegation listed DNSimple name servers for this domain, update delegation so it no longer points at DNSimple for that zone.
1. Optionally remove the primary server entry from your account if no other secondary zones use it.
</div>

After you delete the secondary zone, DNSimple no longer answers queries for that zone. Resolution continues on whatever name servers remain in the public delegation and at your primary.

Outbound secondary DNS (DNSimple as primary) uses a different teardown path, including a staged wait before zone transfers stop. See [Disable secondary DNS](/articles/secondary-dns/#disable) in [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).

## Have more questions?

If you have any questions about inbound secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
