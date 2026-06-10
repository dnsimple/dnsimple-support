---
title: Name Servers Glossary
excerpt: Definitions for name server terms including delegation, glue records, registrar, registry, vanity name servers, and DNSimple-specific name server features.
meta: Name servers glossary with definitions for delegation, apex delegation, glue records, registrar, registry, vanity name servers, name server sets, edge name servers, points of presence, and other DNS delegation terms used at DNSimple.
categories:
- Name Servers
---

# Name Servers Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

A reference for name server and delegation terminology. For how-to guides, troubleshooting, and the full documentation index, see [Name Server Management at DNSimple](/articles/name-server-management-in-dnsimple/). For broader DNS terms, see the [DNS Glossary](/articles/dns-glossary/).

## Name Servers and Resolution {#name-servers-and-resolution}

### Authoritative Name Server

A DNS server that holds the definitive records for a zone and answers queries for that zone directly. Resolvers query authoritative name servers at the end of the delegation chain to get the final answer. DNSimple operates authoritative name servers for all domains delegated to it.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [What is a name server?](/articles/what-is-a-nameserver/)
- [Recursive vs Authoritative DNS Resolvers](/articles/recursive-vs-authoritative-dns-resolvers/)

### Recursive Resolver

A DNS server that performs the full resolution process on behalf of a client, querying root, TLD, and authoritative name servers in sequence until it obtains the requested record. Results are cached according to each record's TTL to speed up future lookups. Also called a recursive DNS server or caching resolver.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [Recursive vs Authoritative DNS Resolvers](/articles/recursive-vs-authoritative-dns-resolvers/)

### Root Name Server

One of 13 logical DNS servers at the top of the global DNS hierarchy. Root name servers do not hold records for individual domains - they direct resolvers to the correct TLD name servers based on a domain's extension.

Learn more:

- [IANA Root Zone Management](https://www.iana.org/domains/root/servers)
- [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/)

### TLD Name Server

A DNS server authoritative for all domains under a specific top-level domain (TLD), such as `.com`, `.org`, or `.uk`. TLD name servers hold the NS delegation records for second-level domains registered under that TLD, directing resolvers to the correct authoritative name servers.

Learn more:

- [IANA TLD Database](https://www.iana.org/domains/root/db)

### Edge Name Server

DNSimple's globally distributed authoritative name servers, built on Anycast infrastructure. The four current edge name server hostnames are `ns1.dnsimple-edge.com`, `ns2.dnsimple-edge.net`, `ns3.dnsimple-edge.io`, and `ns4.dnsimple-edge.org`. Each hostname routes queries to the nearest available point of presence.

Learn more:

- [DNSimple Name Servers](/articles/dnsimple-nameservers/)
- [DNSimple Points of Presence](/articles/anycast/)
- [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/)

### Point of Presence (PoP)

A physical location, or data center, where DNSimple operates edge name servers that answer DNS queries. DNSimple's Anycast network spans multiple points of presence around the world, and every zone is served from all of them by default. When a query is sent, Anycast routes it to the nearest available PoP. The regional records feature lets you restrict an individual record to a subset of these locations.

Learn more:

- [DNSimple Points of Presence](/articles/anycast/)
- [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/)
- [Regional Records Explained](/articles/regional-records/)

## Delegation {#delegation}

### Delegation

The mechanism by which a parent zone passes authority for a child zone to a specific set of name servers. Delegation is expressed through NS records at the parent. For a registered domain, delegation is set by the registrar at the registry and published in the TLD zone.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/)
- [What Is Domain Delegation?](/articles/what-is-domain-delegation/)

### Apex Delegation

Delegation for a registered domain at the registrar level - the NS records published in the TLD zone for your domain's apex (for example, `example.com`). Apex delegation is managed through your domain registrar, not through a DNS record editor. Changing apex delegation updates which name servers the TLD zone lists for your domain.

Learn more:

- [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/)
- [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/)

### Zone Delegation

Delegation of a subdomain within a DNS zone, configured by adding NS records inside the parent zone for that subdomain. Zone delegation is set in the DNS record editor and does not require registrar involvement.

*Example: Adding NS records for `sub.example.com` inside the `example.com` zone delegates DNS authority for that subdomain to a different set of name servers.*

Learn more:

- [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/)

### Registry

The organization responsible for maintaining the authoritative database of registered domain names under a TLD. The registry stores and publishes the delegation records for each domain in that TLD. Registrants interact with the registry indirectly through a registrar.

*Example: Verisign operates the `.com` registry.*

Learn more:

- [IANA TLD Database](https://www.iana.org/domains/root/db)

### Registrar

A company accredited to register domain names on behalf of customers and submit delegation records to the registry on their behalf. The registrar is the correct place to update apex delegation (name servers) for a domain. DNSimple is both a registrar and a DNS hosting provider.

Learn more:

- [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/)

## Glue Records and Vanity Name Servers {#glue-records-and-vanity-name-servers}

### Glue Record

An A or AAAA record for a name server hostname stored by the parent zone alongside the NS delegation records. Glue records are required when a name server hostname falls inside the zone being delegated (in-bailiwick), preventing a circular lookup.

*Example: If `example.com` is delegated to `ns1.example.com`, the `.com` zone stores an A record for `ns1.example.com` as glue so resolvers can reach it without first querying `example.com`.*

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [What Are Glue Records?](/articles/what-are-glue-records/)

### In-Bailiwick

A name server hostname is in-bailiwick when it falls within the zone being delegated. In-bailiwick name servers require glue records at the parent zone to avoid a circular dependency.

*Example: `ns1.example.com` is in-bailiwick for `example.com`.*

Learn more:

- [What Are Glue Records?](/articles/what-are-glue-records/)

### Out-of-Bailiwick

A name server hostname is out-of-bailiwick when it falls outside the zone being delegated. Out-of-bailiwick name servers can be resolved independently without glue records at the parent.

*Example: `ns1.dnsimple-edge.com` is out-of-bailiwick for `example.com`.*

Learn more:

- [What Are Glue Records?](/articles/what-are-glue-records/)

### Vanity Name Server

A name server that uses a custom hostname within the domain owner's own domain (for example, `ns1.example.com`) instead of the DNS provider's default hostnames. Vanity name servers are in-bailiwick and require glue records at the registrar. At DNSimple, vanity name servers are an Enterprise feature.

Learn more:

- [What Are Vanity Name Servers?](/articles/what-are-vanity-name-servers/)
- [Manage Vanity Name Servers](/articles/vanity-nameservers/)

## DNSimple Features {#dnsimple-features}

### Name Server Set

A reusable group of name server hostnames stored in a DNSimple account. Name server sets can be applied to domain delegation, secondary DNS configuration, and zone NS records to ensure consistency and reduce manual entry errors. There are two types: system name server sets and account name server sets.

Learn more:

- [Name Server Sets](/articles/name-server-sets/)

### System Name Server Set

A pre-defined name server set provided by DNSimple that contains the four current edge name server hostnames. System name server sets cannot be modified and are not listed on the Account Name Server Sets page.

Learn more:

- [Name Server Sets](/articles/name-server-sets/)

### Account Name Server Set

A user-defined name server set stored in a DNSimple account. Account name server sets can contain any name server hostnames, including those of third-party DNS providers. Users with full account access can create, update, and delete account name server sets.

Learn more:

- [Name Server Sets](/articles/name-server-sets/)

### Secondary DNS

A configuration where a second DNS provider also serves authoritative records for your zone, typically via zone transfer (AXFR). When secondary DNS is active, delegation at the registrar lists both DNSimple's name servers and the secondary provider's name servers so queries can be answered by either provider.

Learn more:

- [Add a secondary DNS server to DNSimple](/articles/secondary-dns/)
- [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/)

## Timing and Propagation {#timing-and-propagation}

### NS TTL

The time-to-live value on NS records, which controls how long recursive resolvers cache delegation information before re-querying. NS records at the apex of a zone in DNSimple are system-managed with a fixed TTL of 3600 seconds.

Learn more:

- [What Is Time-to-Live?](/articles/what-is-ttl/)
- [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/)

### Delegation Caching

The caching of NS records by recursive resolvers after a successful delegation lookup. Because resolvers cache delegation, changes to name servers at the registrar do not take immediate effect everywhere - existing cached delegations continue to direct traffic to the previous name servers until the TTL expires.

Learn more:

- [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/)

### Propagation

The process by which changes to delegation or DNS records spread across all resolvers globally as cached entries expire. Propagation time for delegation changes depends on the TTL of the existing NS records, typically between a few minutes and 48 hours.

Learn more:

- [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/)
- [How Long Does a New DNS Record Take to Resolve?](/articles/how-long-does-it-take-for-a-new-record-to-resolve-for-my-domain/)

## Have more questions?

If you have any questions about name server terminology or delegation, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
