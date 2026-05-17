---
title: Recursive vs Authoritative DNS Resolvers
excerpt: Recursive resolvers walk the DNS tree on behalf of clients; authoritative name servers publish the official answers for a zone you delegate.
meta: Recursive DNS resolvers query iteratively from root to authoritative servers. Authoritative name servers hold zone data and answer without forwarding for that zone.
categories:
- Name Servers
- DNS
---

# Recursive vs Authoritative DNS Resolvers

A **recursive resolver** (often called a DNS resolver or recursive name server) accepts a question from your laptop or phone, then performs whatever lookups are needed and returns a final answer or an error. An **authoritative name server** publishes DNS records for a zone you operate or delegate to; it answers only for names inside that zone (or from child zones it delegates). Confusion between the two roles is a common reason support tickets mention "my name server" when the reader actually means their ISP or Google Public DNS resolver.

### Table of Contents {#toc}

* TOC
{:toc}

---

## Recursive resolvers {#recursive-resolvers}

Recursive resolvers sit close to clients (for example your router, your ISP, `8.8.8.8`, or `1.1.1.1`). They cache responses to reduce load and latency. When you change a record or [delegation](/articles/what-is-domain-delegation/), recursive caches still serve old data until TTL expiration. See [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/).

## Authoritative name servers {#authoritative-name-servers}

Authoritative servers are the ones listed in delegation for your domain (for example [DNSimple name servers](/articles/dnsimple-nameservers/) after you [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple/)). They return the source-of-truth RRsets for your zone. For a fuller introduction, see [What is a name server?](/articles/what-is-a-nameserver/) and [What Is DNS?](/articles/what-is-dns/).

## How they work together {#how-they-work-together}

Typical lookup: the stub resolver on your device asks a recursive resolver; the recursive resolver follows referrals from root to TLD to your authoritative servers; the authoritative servers return answers; the recursive resolver caches and forwards the result to you.

## Have more questions?

If you want help interpreting resolver output or delegation, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
