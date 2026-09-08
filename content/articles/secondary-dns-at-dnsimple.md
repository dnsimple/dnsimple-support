---
title: Secondary DNS at DNSimple
excerpt: Starting point for Secondary DNS documentation at DNSimple, from concepts to outbound, inbound, and multi-provider setups.
meta: Secondary DNS at DNSimple covers outbound and inbound zone transfers and multi-provider DNS without AXFR. Start here for guides and concepts.
categories:
- Secondary DNS
---

# Secondary DNS at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Secondary DNS lets more than one DNS provider answer for your domain. At DNSimple you can run **outbound** secondary DNS (DNSimple as primary), **inbound** secondary DNS (DNSimple as secondary), or keep multiple providers in sync **without** zone transfers. This page is the starting point for Secondary DNS documentation.

## Understand secondary DNS {#understand}

New to secondary DNS? Start with the first article below.

- [What is Secondary DNS?](/articles/what-is-secondary-dns/) - Primary vs secondary roles, AXFR, and inbound vs outbound at DNSimple.
- [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/) - When to add multi-provider DNS and which approach to choose.
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) - Compatibility considerations when combining DNSSEC with secondary DNS.
- [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/) - How ALIAS records are resolved before a zone transfer.

## Set up DNSimple as primary {#outbound}

Outbound AXFR: DNSimple holds the zone; another provider is secondary.

- [Add a secondary DNS server to DNSimple](/articles/secondary-dns/)
- [Adding Dyn as a Secondary DNS Server](/articles/secondary-dns-provider-dyn/)
- [Add DNSMadeEasy as a secondary DNS server](/articles/secondary-dns-provider-dns-made-easy/)
- [Adding EasyDNS as a Secondary DNS Server](/articles/secondary-dns-provider-easy-dns/)

## Set up DNSimple as secondary {#inbound}

Inbound AXFR: an external primary holds the zone; DNSimple is the secondary. Plan-gated.

- [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/)
- [Add DNSimple as Secondary DNS with a Hidden Primary](/articles/secondary-dns-dnsimple-with-hidden-primary/)
- [Secondary DNS API](https://developer.dnsimple.com/v2/secondary-dns/)

## Multi-provider without zone transfers {#without-axfr}

- [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/)

## Related {#related}

- [Empty Non-Terminals](/articles/empty-non-terminals/)
- [DNSimple name servers](/articles/dnsimple-nameservers/)
- [Why Anycast DNS](/articles/why-anycast-dns/)

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
