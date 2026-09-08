---
title: Secondary DNS Glossary
excerpt: Definitions for secondary DNS terms including zone transfers, AXFR, NOTIFY, SOA serials, leader and follower, and the objects you configure at DNSimple.
meta: Secondary DNS glossary with definitions for zone transfers, AXFR, IXFR, NOTIFY, SOA serials, hidden primary, leader and follower, primary servers, and secondary zones at DNSimple.
categories:
- Secondary DNS
---

# Secondary DNS Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

A reference for secondary DNS terminology. For the entry point to this category, see [Secondary DNS at DNSimple](/articles/secondary-dns-at-dnsimple/). For broader DNS terms, see the [DNS Glossary](/articles/dns-glossary/), and for delegation terms see the [Name Servers Glossary](/articles/name-servers-glossary/).

## Roles and directions {#roles-and-directions}

### Primary

The DNS provider that holds the zone you edit. The primary is the source of truth: records are created and changed there, and other providers copy from it.

Learn more:

- [What is Secondary DNS?](/articles/what-is-secondary-dns/)

### Secondary

A DNS provider that copies zone data from the primary and answers queries for the zone using its own name servers. A secondary does not accept record edits.

Learn more:

- [Secondary DNS](/articles/name-servers-glossary/#secondary-dns) in the Name Servers Glossary

### Leader

The wording DNSimple uses for the primary role. The account Add menu offers "Secondary DNS zone (with DNSimple as leader)", meaning DNSimple holds the zone and another provider copies it.

### Follower

The wording DNSimple uses for the secondary role. The account Add menu offers "Secondary DNS zone (with DNSimple as follower)", meaning another provider holds the zone and DNSimple copies it.

### Outbound secondary DNS

DNSimple as primary. You edit the zone at DNSimple and your other provider transfers it out. Configured from the Secondary DNS card on the domain DNS page.

Learn more:

- [Add a secondary DNS server to DNSimple](/articles/secondary-dns/)

### Inbound secondary DNS

DNSimple as secondary. Another provider holds the zone and DNSimple transfers it in. Configured from Secondary Zones and Primary Servers in your account.

Learn more:

- [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/)

### Hidden primary

A topology where the authoritative primary is not listed in the public delegation. Resolvers only ever see the secondary name servers, while the primary sits out of sight and serves transfers to them. This is a way of arranging inbound secondary DNS rather than a separate DNSimple product.

Learn more:

- [Add DNSimple as Secondary DNS with a Hidden Primary](/articles/secondary-dns-dnsimple-with-hidden-primary/)

## Zone transfers {#zone-transfers}

### Zone transfer

The mechanism that copies zone data from a primary to a secondary. Zone transfers move records only. They do not move private DNSSEC signing keys, which is why DNSSEC and secondary DNS need planning.

Learn more:

- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/)

### AXFR

A full zone transfer. The secondary requests the zone and the primary sends every record. AXFR is the standard mechanism for secondary DNS and the one DNSimple uses in both directions.

Learn more:

- [RFC 5936](https://datatracker.ietf.org/doc/html/rfc5936)

### IXFR

An incremental zone transfer. Where AXFR sends the whole zone, IXFR sends only what changed since a given serial, when both the primary and the secondary support it.

Learn more:

- [RFC 1995](https://datatracker.ietf.org/doc/html/rfc1995)

### NOTIFY

A message from a primary telling its secondaries that the zone changed, so they can request a transfer instead of waiting for their refresh timer. Without NOTIFY a secondary still updates, but only when its own timer expires.

Learn more:

- [RFC 1996](https://datatracker.ietf.org/doc/html/rfc1996)
- [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/)

### SOA serial

A version number in the zone's SOA record. It increases whenever the zone changes, and it is how a secondary knows whether the copy it holds is current. Comparing serials across providers is the quickest way to tell whether a transfer happened.

Learn more:

- [SOA Record](/articles/soa-record/)
- [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/)

### Refresh interval

A value in the SOA record telling a secondary how often to check the primary for a new serial. It is the fallback that keeps a zone updating when no NOTIFY arrives. DNSimple compares the refresh value as well as the serial when deciding whether a secondary is in sync.

## What you configure at DNSimple {#what-you-configure}

### Secondary DNS configuration

The outbound setup on a domain: which name servers your secondary provider will answer from, and which addresses may transfer the zone. One configuration per domain.

Learn more:

- [Secondary DNS Field Reference](/articles/secondary-dns-field-reference/)

### Secondary zone

The inbound object representing a zone DNSimple copies from somewhere else. A secondary zone answers queries only after it is linked to a primary server and a transfer has completed.

### Primary server

The inbound object describing where DNSimple transfers from: a name, a public address, and a port. A primary server is defined once for the account and can be linked to more than one secondary zone.

Learn more:

- [Secondary DNS Field Reference](/articles/secondary-dns-field-reference/)

### Whitelisted IPs

The addresses allowed to transfer your zone out of DNSimple. They serve a second purpose as well: they are the addresses DNSimple sends NOTIFY to, so a provider missing from this list may never be told the zone changed.

### Transfer endpoint

The host your secondary provider transfers from, `axfr.dnsimple.com`. Some providers ask for the host name and others for its addresses.

Learn more:

- [Secondary DNS Field Reference](/articles/secondary-dns-field-reference/#outbound-endpoint)

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
