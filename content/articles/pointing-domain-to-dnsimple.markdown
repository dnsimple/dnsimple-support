---
title: Pointing a Domain to DNSimple
excerpt: How to point a domain to DNSimple's name servers.
categories:
- Name Servers
---

# Pointing a Domain to DNSimple

Pointing a domain name servers to DNSimple is required if you want to use DNSimple as your [DNS hosting](https://dnsimple.com) provider. This task is also known as "delegating" a domain.

Pointing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

## Domain registered with DNSimple

Follow these instructions to [delegate a domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered).

## Domain registered with another provider

Follow these instructions to [delegate a domain registered with another registrar to DNSimple](/articles/delegating-dnsimple-hosted).

<note>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</note>
