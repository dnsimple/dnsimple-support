---
title: What is Secondary DNS?
excerpt: What secondary DNS is, how zone transfers work, and how outbound and inbound secondary DNS differ at DNSimple.
meta: Secondary DNS uses a primary and secondary provider so more than one set of name servers can answer for your domain. At DNSimple you can run outbound AXFR, inbound AXFR, or multi-provider sync without transfers.
categories:
- Secondary DNS
---

# What is Secondary DNS?

### Table of Contents {#toc}

* TOC
{:toc}

---

Secondary DNS means more than one DNS provider can answer queries for your domain. A **primary** holds the zone you edit. One or more **secondaries** receive that data (usually with a zone transfer) and serve it on their own name servers. If one provider has an outage, resolvers can still get answers from the other.

## Primary and secondary roles {#roles}

- The **primary** is the source of truth for the zone. You create and update records there.
- A **secondary** copies zone data from the primary and answers queries using its own name servers.
- Public delegation at the registrar usually lists name servers from both providers so resolvers can use either set.

Secondary DNS is an extra layer on top of the resilience DNSimple already provides with [Anycast DNS](/articles/why-anycast-dns/). Many domains do not need it. Use it when you need multi-provider DNS for uptime or compliance. See [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/) to choose an approach.

## Zone transfers (AXFR and IXFR) {#zone-transfers}

Most secondary DNS setups use **zone transfers**:

- **AXFR** transfers the full zone.
- **IXFR** transfers incremental changes when both sides support it.

The primary allows the secondary's IP addresses (and often a hostname such as `axfr.dnsimple.com` when DNSimple is primary). When records change, the primary notifies secondaries so they can pull an update.

Zone transfers do not move private DNSSEC signing keys. That is why [DNSSEC and secondary DNS](/articles/dnssec-and-secondary-dns/) need careful planning.

## Outbound secondary DNS (DNSimple as primary) {#outbound}

With **outbound** secondary DNS, DNSimple is the primary (the UI calls this DNSimple as **leader**). You manage records in DNSimple. DNSimple transfers the zone to another provider over AXFR.

- Configure it from the domain <label>DNS</label> page in the <label>Secondary DNS</label> card, or from <label>Add</label> → <label>Secondary DNS zone (with DNSimple as leader)</label>.
- Built-in provider options include EasyDNS, DNS Made Easy, Dyn Standard, Dyn Managed, plus Custom and Name Server Set.
- Outbound secondary DNS is not limited to the same plan feature that gates inbound secondary DNS.

Setup: [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).

## Inbound secondary DNS (DNSimple as secondary) {#inbound}

With **inbound** secondary DNS, another system is the primary and DNSimple is the secondary (the UI calls this DNSimple as **follower**). You manage Secondary Zones and Primary Servers in your account. DNSimple pulls the zone over AXFR and answers on DNSimple name servers.

- Available on plans that include the DNSimple as secondary DNS feature (typically Professional and higher; Solo does not include it).
- Not compatible with enabling DNSSEC on that zone in DNSimple, because inbound transfers do not import external RRSIG records.

Setup: [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/). For a primary that is not listed in public NS records, see [Add DNSimple as Secondary DNS with a Hidden Primary](/articles/secondary-dns-dnsimple-with-hidden-primary/).

API: [Secondary DNS API](https://developer.dnsimple.com/v2/secondary-dns/).

## Multi-provider DNS without zone transfers {#without-axfr}

You can also run DNSimple next to another provider **without** AXFR. You keep both zones in sync yourself with the record editor, zone import, the API, or tools such as Terraform. That is not secondary DNS via zone transfer. See [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/).

## Related topics {#related}

- [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/) - outbound ALIAS handling
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/)
- [Empty Non-Terminals](/articles/empty-non-terminals/) - keep ENT behavior consistent across providers

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
