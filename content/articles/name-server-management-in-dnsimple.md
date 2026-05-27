---
title: Name Server Management at DNSimple
excerpt: Learn about name servers, manage delegation, configure vanity name servers, and troubleshoot resolution issues with DNSimple.
meta: Guide to name server management at DNSimple, covering delegation, vanity name servers, name server sets, glue records, and troubleshooting.
categories:
- Name Servers
---

# Name Server Management at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides full control over name server delegation for domains registered or hosted with us. This guide organizes all name server documentation to help you find exactly what you need.

## DNSimple name servers {#dnsimple-name-servers}

- [DNSimple Name Servers](/articles/dnsimple-nameservers/) - The authoritative name server hostnames and IP addresses for DNSimple DNS hosting.

## Understanding name servers {#understanding-name-servers}

- [What is a name server?](/articles/what-is-a-nameserver/) - What authoritative name servers are and how they fit into DNS resolution.
- [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/) - How delegation, name servers, and DNS hosting fit together, and which guide matches your situation.
- [What Is Domain Delegation?](/articles/what-is-domain-delegation/) - How delegation works and what it means to point a domain at a DNS provider.
- [Recursive vs Authoritative DNS Resolvers](/articles/recursive-vs-authoritative-dns-resolvers/) - The difference between resolvers that look up answers and servers that hold them.
- [What Are Vanity Name Servers?](/articles/what-are-vanity-name-servers/) - What vanity name servers are, why they exist, and when glue records are required.
- [What Are Glue Records?](/articles/what-are-glue-records/) - How glue records prevent circular lookups for in-bailiwick name servers.
- [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/) - Why delegation changes take time to propagate and how caching affects them.

## Pointing a domain to DNSimple {#pointing-a-domain}

- [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) - Overview of the delegation process depending on where your domain is registered.
- [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/) - How to set DNSimple as the DNS provider for a domain you registered with us.
- [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/) - How to update delegation at an external registrar to use DNSimple name servers.

## Changing delegation {#changing-delegation}

- [Change delegation to another DNS provider](/articles/setting-name-servers/) - How to point a DNSimple-registered domain at a different DNS provider.
- [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/) - How to delegate a subdomain to a separate set of name servers.
- [Zone NS Records](/articles/zone-ns-records/) - How to update the NS records published at the apex of your zone.

## Name server sets and vanity name servers {#name-server-sets-and-vanity}

- [Name Server Sets](/articles/name-server-sets/) - How to create and use reusable groups of name server hostnames.
- [Manage Vanity Name Servers](/articles/vanity-nameservers/) - How to enable, configure, and disable vanity name servers on your domain.

## Troubleshooting {#troubleshooting}

- [Troubleshoot DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/) - Steps to confirm delegation is correct and resolve common resolution issues.
- [Troubleshoot Email or Subdomains After Delegation Changes](/articles/troubleshoot-email-subdomains-after-delegation-changes/) - How to diagnose email or subdomain failures after changing name servers.
- [Troubleshoot Domain Resolution Issues](/articles/domain-resolution-issues/) - Broader resolution troubleshooting covering WHOIS, propagation delays, and dig verification.

## Reference {#reference}

- [Name Server Delegation Checklist](/articles/name-server-delegation-checklist/) - Quick-reference targets, verification commands, and related flows for delegation.
- [Name Servers Glossary](/articles/name-servers-glossary/) - Definitions for delegation, glue records, registrar, registry, vanity name servers, and other name server terms.
- [NS Record Format](/articles/ns-record-format/) - The RDATA structure, canonical zone file representation, and DNSimple fields for NS records.
- [DNSimple Interface Reference for Name Server Management](/articles/name-servers-interface-reference/) - Reference for the Edit Delegation, Name Server Sets, Vanity Name Servers, and Zone NS Records interfaces.

## Have more questions?

If you have any questions about name server management at DNSimple, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
