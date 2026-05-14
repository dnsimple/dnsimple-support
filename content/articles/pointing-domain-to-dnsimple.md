---
title: Pointing a Domain to DNSimple
excerpt: Pick the right delegation guide when you want DNSimple to answer DNS for your domain.
meta: Point your domain to DNSimple name servers by choosing the path for DNSimple-registered domains versus domains registered elsewhere, then follow the linked how-to steps.
categories:
- Name Servers
---

# Pointing a Domain to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this hub when you want DNSimple to host DNS for your domain and you need to point the domain's [name servers](/articles/what-is-a-nameserver/) to DNSimple. That process is also called delegating the domain. After delegation, the domain resolves using the DNS records in your DNSimple account.

For how registration, delegation, and DNS hosting fit together, read [Domain Delegation and Name Servers Explained](/articles/domain-delegation-and-name-servers/). For propagation timing, read [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/). Before you change delegation, you can use the [Name Server Delegation Checklist](/articles/name-server-delegation-checklist/).

## Domain registered with DNSimple {#domain-registered-with-dnsimple}

Follow [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).

## Domain registered with another provider {#domain-registered-with-another-provider}

Follow [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

> [!NOTE] Name server propagation
> Name server changes can take up to 24 hours to propagate. A WHOIS lookup is often a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).

## Have more questions?

If you have questions about pointing your domain to DNSimple, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
