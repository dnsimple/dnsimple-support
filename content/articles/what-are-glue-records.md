---
title: What Are Glue Records?
excerpt: Glue records are address data for in-zone name servers, stored at the delegating parent so resolvers can bootstrap delegation without a circular lookup.
meta: Glue records are A or AAAA data for in-zone authoritative name servers. The parent zone serves them alongside NS delegation to avoid circular lookups.
categories:
  - DNS
  - Name Servers
---

# What Are Glue Records?

### Table of Contents {#toc}

* TOC
{:toc}

---

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/m_RaPIRNxFs?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

> [!NOTE]
> The above video also demonstrates adding missing glue records directly from the Edit delegation page. However, this is no longer supported. Glue records can only be added via applying [name server sets](/articles/name-server-sets/#creating-an-account-name-server-set) that contain the necessary glue records.

Glue records are the IP addresses, stored as A or AAAA records, for authoritative name servers when those name server hostnames live inside the domain being delegated. For example, if example.com uses ns1.example.com as one of its name servers, the parent zone, often the TLD, must publish the IP address for ns1.example.com together with the NS delegation.

Resolvers need those IP addresses so they can reach the authoritative name servers before querying the child zone. This prevents the lookup from circling back on itself. For general context on authoritative servers, see [What is a name server?](/articles/what-is-a-nameserver/).

## The circular dependency problem {#circular-dependency}

Imagine example.com is delegated to ns1.example.com and ns2.example.com. That pattern is common with [vanity name servers](/articles/what-are-vanity-name-servers/). To talk to ns1.example.com, the resolver needs its IP address. The obvious next step is to look up data for example.com and follow delegation. But delegation already says that example.com is answered by ns1.example.com. You cannot resolve ns1.example.com by asking example.com first without going in a circle.
Glue fixes that. The parent zone (above example.com) publishes the IP addresses for ns1.example.com and ns2.example.com together with the NS records. The resolver gets the IPs from the parent and moves forward without asking the child zone first.

## How the parent zone publishes glue {#parent-zone}

Authoritative data for your zone lives on your name servers, but glue is not ordinary zone content served from the child. It is extra address data the parent returns with delegation. In practice you submit the server names and their addresses to your registrar; the registry stores them so the parent (often the TLD) can answer with both NS and glue for those in-bailiwick names.

Wording matters: some registrars label screens "glue" or "host records," but the authoritative copy consumers rely on is coordinated through the registration system for your TLD, not a private setting visible only to one ISP.

**Typical resolution outline:**

1. A resolver needs an answer for `www.yourdomain.com`.
1. It follows referrals from the root to the TLD for `yourdomain.com`.
1. The TLD responds with NS records for `yourdomain.com` pointing at `ns1.yourdomain.com` and related hosts.
1. If those names are under `yourdomain.com`, the TLD response also includes glue (A/AAAA) for those hosts so the resolver can open TCP/UDP to them immediately.
1. The resolver queries those authoritative servers for `www.yourdomain.com`.

Without glue for in-zone server names, many resolvers cannot complete the chain.

## NS records, A/AAAA records, and glue {#relationship-to-other-records}

NS records at the parent state which hosts are authoritative for the child zone. When those hosts are out-of-zone (for example `ns1.dnsimple.com` for `example.com`), the resolver can resolve `ns1.dnsimple.com` without glue from the `example.com` parent. When they are in-zone, glue at the parent carries the bootstrap addresses.

The addresses in glue match what you would express as A or AAAA for those hosts, but they are served from the delegation context at the parent, not retrieved only from the child zone.

## Glue records at DNSimple {#glue-at-dnsimple}

If DNSimple is your registrar for the domain that owns the vanity hostnames, glue is coordinated through DNSimple when you set up vanity name servers. If registration lives elsewhere, you enter matching glue at that registrar so the registry still receives the correct addresses.

Operational steps are covered in [Manage Vanity Name Servers](/articles/vanity-nameservers/). IP addresses for DNSimple appear in [DNSimple Name Servers](/articles/dnsimple-nameservers/).

## Have more questions?

If you have additional questions about glue records or vanity name servers, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
