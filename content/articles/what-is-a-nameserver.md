---
title: What is a name server?
excerpt: What authoritative name servers are, how they fit into DNS resolution, and how delegation at your registrar relates to the hostnames you publish.
meta: Name servers are the authoritative DNS servers for a zone. Resolvers query them to resolve hostnames. Your registrar's delegation points to them.
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

That registrar-level change is separate from editing DNS records inside your zone at your DNS host (for example [adding NS records for a child zone](/articles/add-ns-records-for-subdomain/)). Both involve NS records in the broad sense, but delegation at the registry defines who is authoritative for your apex domain; NS records in your zone can delegate subdomains.

DNSimple does not change delegation on your behalf without your action. To point a domain at DNSimple's DNS:

- If the domain is registered with DNSimple, see [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).
- If the domain is registered elsewhere, see [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/).
- If the domain is registered with DNSimple and you want to use another DNS provider, see [Setting the Name Servers for a Domain](/articles/setting-name-servers/).

For a general overview of pointing a domain to DNSimple, see [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/). The hostnames and addresses you delegate to are listed in [DNSimple Name Servers](/articles/dnsimple-nameservers/). For the full index of name server guides, see [Name Server Management at DNSimple](/articles/name-server-management-in-dnsimple/).

> [!TIP]
> If your domain is not delegated to DNSimple name servers, [changes you make in the record editor](/articles/record-editor/) will not be used for public resolution. To verify what the world sees, use [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) or an external lookup tool such as [zone.vision](https://zone.vision/#/).

## Have more questions?

If you are not sure which steps apply to your domain, see [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/) for how registration, delegation, and DNS hosting fit together, and for links to the right How-to guides.

> [!NOTE] Check your name servers
> Make sure to [check your nameservers](/articles/pointing-domain-to-dnsimple/). If your domain isn't delegated to DNSimple, then [changes you make to DNS records](/articles/record-editor/) won't resolve.
> If you want to know which name servers your domain is using, you can use [zone.vision](https://zone.vision/#/) to do a DNS Lookup.
If you have any questions about name servers or delegation, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
