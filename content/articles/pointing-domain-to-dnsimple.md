---
title: Pointing a Domain to DNSimple
excerpt: How to point a domain to DNSimple's name servers.
meta: How to point your domain's name servers to DNSimple so your DNS records resolve through your DNSimple account.
categories:
- Name Servers
---

# Pointing a Domain to DNSimple

Pointing a domain name servers to DNSimple is required if you want to use DNSimple as your [DNS hosting](https://dnsimple.com) provider. This task is also known as "delegating" a domain.

Pointing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

> [!TIP]
> To delegate name servers to another provider instead, see [Setting the Name Servers for a Domain](/articles/setting-name-servers/).

## Domain registered with DNSimple

Follow these instructions to [delegate a domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).

## Domain registered with another provider

Follow these instructions to [delegate a domain registered with another registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

> [!NOTE]
> It may take up to 24 hours for a name server change to propagate. The WHOIS response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).
