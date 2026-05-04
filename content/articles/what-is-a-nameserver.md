---
title: What is a name server?
excerpt: What authoritative name servers are, how they fit into DNS resolution, and how delegation at your registrar relates to the hostnames you publish.
meta: Name servers are the DNS servers that are authoritative for a zone. Resolvers query them to map hostnames to records. Delegation at the registrar points your domain at those servers.
categories:
- Name Servers
---

# What is a Name Server?

A name server is a DNS server that is authoritative for a zone. It answers queries for that zone with the records the operator of the zone has configured (for example A, AAAA, MX, and CNAME records). Without working authoritative name servers, hostnames in that zone cannot be resolved reliably.

When you request a site in a browser, your system does not contact your domain's name servers directly. A [DNS resolver](https://en.wikipedia.org/wiki/Domain_Name_System#Address_resolution_mechanism) follows a chain of lookups, eventually asking the authoritative name servers for your domain, which return the data your services need to be reached.

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/2WdF1zT01HY" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

> [!NOTE]
> "Name server", "nameserver", and other variants all refer to the same thing. For consistency, we refer to it here as a "name server".

### Table of Contents {#toc}

* TOC
{:toc}

---

## How resolvers use authoritative name servers {#resolvers-and-authority}

Resolvers start from the root and follow delegation until they reach the name servers that hold your zone data. Those authoritative servers are what people usually mean when they say "the name servers for the domain." They are distinct from [recursive resolvers](https://en.wikipedia.org/wiki/Domain_Name_System#Caching_name_server) (often run by ISPs or public DNS providers), which perform the full lookup on behalf of clients.

## Delegation and changing name servers {#delegation}

Delegation is the statement, stored at your domain's parent (typically via your [registrar](/articles/what-is-domain-delegation/)), that lists which hostnames are authoritative for your domain. When someone says they need to "change the name servers," they usually mean updating that delegation at the registrar so the rest of the Internet uses a new set of authoritative servers.

That registrar-level change is separate from editing DNS records inside your zone at a DNS host (for example [adding NS records for a child zone](/articles/add-ns-records-for-subdomain/)). Both involve NS records in the broad sense, but delegation at the registry defines who is authoritative for your apex domain; NS records in your zone can delegate subdomains.

DNSimple does not change delegation on your behalf without your action. To point a domain at DNSimple's DNS:

- If the domain is registered with DNSimple, see [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).
- If the domain is registered elsewhere, see [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

For an overview of both paths, see [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/). The hostnames and addresses you delegate to are listed in [DNSimple Name Servers](/articles/dnsimple-nameservers/).

> [!TIP]
> If delegation does not point at DNSimple, [changes you make in the record editor](/articles/record-editor/) will not be used for public resolution. To verify what the world sees, use [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) or an external lookup tool such as [zone.vision](https://zone.vision/#/).

## Have more questions?

If you have any questions about name servers or delegation, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
