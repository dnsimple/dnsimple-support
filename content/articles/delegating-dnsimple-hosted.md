---
title: Delegate a Domain from Another Registrar to DNSimple
excerpt: Point your domain's name servers to DNSimple when the domain is registered at another registrar.
meta: Delegate a domain registered at another registrar to DNSimple by updating the name servers at your registrar to the DNSimple name server hostnames shown on the DNSimple Name Servers page.
categories:
- Name Servers
---

# Delegating a Domain registered with another Registrar to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when your domain is **not** registered at DNSimple and you want DNSimple to host DNS. You update name servers at your **current registrar** (not in DNSimple). For a hub that covers both registration cases, see [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/). For the full name server documentation index, see [Name Server Management at DNSimple](/articles/name-server-management-in-dnsimple/).

Pointing the [name servers](/articles/what-is-a-nameserver/) to DNSimple makes the domain resolve using the DNS records configured in your DNSimple account.

## Update name servers at your registrar {#update-name-servers-at-your-registrar}

<div class="section-steps" markdown="1">
##### Change the name servers to DNSimple

1. Log in to your registrar account.
1. Find the place in your registrar's control panel where you can set custom name servers for the domain.
1. Enter the [DNSimple name servers](/articles/dnsimple-nameservers/):

    - ns1.dnsimple-edge.com
    - ns2.dnsimple-edge.net
    - ns3.dnsimple-edge.io
    - ns4.dnsimple-edge.org
</div>

> [!NOTE] Name server propagation
> Name server changes can take up to 24 hours to propagate. A WHOIS lookup is often a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/). For why delays happen, see [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/).

## Registrar documentation links {#registrar-documentation-links}

These links point to registrar help for setting custom name servers:

- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)

For a preflight list before you change delegation, see the [Name Server Delegation Checklist](/articles/name-server-delegation-checklist/).

## Have more questions?

If you have questions about delegating your domain to DNSimple, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
