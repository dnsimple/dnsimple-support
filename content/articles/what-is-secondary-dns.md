---
title: What is Secondary DNS?
excerpt: What secondary DNS is, why teams use it for multi-provider resilience, how zone transfers work, and how outbound and inbound setups differ at DNSimple.
meta: "Secondary DNS adds a second DNS provider so queries can still be answered during a provider outage. Learn primary vs secondary roles, AXFR, and outbound vs inbound secondary DNS at DNSimple."
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
- A **secondary** copies zone data from the primary and answers queries using its own name servers. You cannot edit records on the secondary; changes always go through the primary.
- Public delegation at the registrar usually lists name servers from both providers so resolvers can use either set.

## Why use secondary DNS? {#why}

Most people add secondary DNS so they have a backup if their primary DNS provider has an outage. If that provider cannot answer, nothing that depends on the domain can resolve, even when your website or mail servers are fine. With secondary DNS, a second provider already has a copy of the zone and is already in the public name server list, so resolvers can keep getting answers from the secondary while the primary is down.

During an outage the secondary does not invent new data. It keeps serving the **last good copy** of the zone it transferred from the primary, until the zone's SOA **expire** timer runs out. A primary that is dark for an hour is usually fine. A primary that stays dark for days may pass that expire window, and the secondary can stop answering. That limit is why secondary DNS helps with short provider outages, and why you still need the primary (or another source of truth) back online for a long incident.

DNSimple already spreads each hosted zone across multiple name servers on independent networks with [Anycast DNS](/articles/why-anycast-dns/). That helps when a single DNSimple name server or network path has a problem. Secondary DNS covers a different risk: a wider outage or maintenance event that affects one provider as a whole.

Secondary DNS is also common when:

- The domain carries production traffic, and a DNS outage would hurt customers or revenue.
- A contract, security review, or compliance program requires DNS from more than one vendor.
- You want that warm standby already delegated, so you are not rushing a registrar change during an incident.
- You run a hidden primary (private master) and need a public provider such as DNSimple to serve the zone on the internet.

Secondary DNS does not fix bad records or replace careful TTL planning. It is there so that if one provider goes down, you still have DNS for a while. To compare secondary DNS with other multi-provider options at DNSimple, see [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/).

## Zone transfers (AXFR and IXFR) {#zone-transfers}

Most secondary DNS setups use **zone transfers**:

- **AXFR** transfers the full zone.
- **IXFR** transfers incremental changes when both sides support it.

When records change, the primary usually sends a **NOTIFY** message so the secondary knows to pull an update. The primary also limits who can transfer the zone, typically with an IP allow list, and sometimes with transfer authentication.

**Outbound** (DNSimple as primary): the other provider pulls from DNSimple's transfer endpoint, `axfr.dnsimple.com`. You allow-list that provider's IPs (or use a prepared provider option) so only those secondaries can transfer the zone.

**Inbound** (DNSimple as secondary): your external primary allows DNSimple's AXFR client IPs to pull the zone. DNSimple then answers on DNSimple name servers using the copy it transferred.

Zone transfers do not move private DNSSEC signing keys. That is why [DNSSEC and secondary DNS](/articles/dnssec-and-secondary-dns/) need careful planning. Providers can also differ in how they answer for [empty non-terminals](/articles/empty-non-terminals/), so confirm both sides behave the same way.

## Outbound secondary DNS (DNSimple as primary) {#outbound}

With **outbound** secondary DNS, DNSimple is the primary (the UI calls this DNSimple as **leader**). You manage records in DNSimple. DNSimple transfers the zone to another provider over AXFR.

- Configure it from the domain <label>DNS</label> page in the <label>Secondary DNS</label> card, or from <label>Add</label> → <label>Secondary DNS zone (with DNSimple as leader)</label>.
- Built-in provider options are EasyDNS, DNS Made Easy, Dyn Managed, and Dyn Standard. Use Custom or Name Server Set for any other provider that supports AXFR.
- Outbound secondary DNS is available on all DNSimple plans.
- ALIAS is a virtual record type and cannot transfer, so DNSimple resolves it to A and AAAA addresses first. See [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/).

Setup: [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).

## Inbound secondary DNS (DNSimple as secondary) {#inbound}

With **inbound** secondary DNS, another system is the primary and DNSimple is the secondary (the UI calls this DNSimple as **follower**). You manage <label>Secondary zones</label> and <label>Primary servers</label> in your account. DNSimple pulls the zone over AXFR and answers on DNSimple name servers.

- Available on the Teams plan or higher.
- Not compatible with enabling DNSSEC on that zone in DNSimple. See [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) for why.

Setup: [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/). For a primary that is not listed in public NS records, see [Add DNSimple as Secondary DNS with a Hidden Primary](/articles/secondary-dns-dnsimple-with-hidden-primary/).

API: [Secondary DNS API](https://developer.dnsimple.com/v2/secondary-dns/).

## Multi-provider DNS without zone transfers {#without-axfr}

You can also run DNSimple next to another provider **without** AXFR. You keep both zones in sync yourself with the record editor, zone import, the API, or tools such as Terraform. That is not secondary DNS via zone transfer. See [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/).

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
