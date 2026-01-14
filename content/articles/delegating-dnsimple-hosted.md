---
title: Delegating a Domain registered with another Registrar to DNSimple
excerpt: How to delegate a domain registered with a different registrar to DNSimple's name servers.
meta: Learn how to delegate your domain to DNSimple's name servers when your domain is registered with another registrar, enabling DNS hosting with DNSimple.
categories:
- Name Servers
---

# Delegating a Domain registered with another Registrar to DNSimple

This article explains how to delegate your domain to DNSimple's name servers when your domain is registered with another registrar. Pointing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

> [!NOTE]
> If you need to delegate name servers to another provider (not DNSimple), see [Setting the Name Servers for a Domain](/articles/setting-name-servers/). To delegate name servers to another provider, you'll update your domain's name server delegation at your registrar.

## Delegating to another provider

If you need to delegate your domain to another provider (not DNSimple) or change your name servers to point away from DNSimple, see [Setting the Name Servers for a Domain](/articles/setting-name-servers/). That article covers how to delegate name servers to another provider when your domain is registered with DNSimple.

This article focuses on delegating a domain registered with another registrar to DNSimple's name servers. If you need to delegate name servers to another provider instead, follow the instructions in [Setting the Name Servers for a Domain](/articles/setting-name-servers/). When you delegate name servers to another provider, you're telling the DNS system to use that provider's name servers instead of DNSimple's.

<div class="section-steps" markdown="1">
##### To change the name servers to DNSimple

1.  Log into your registrar account.
1.  Find the place on your domain registrar's web site where you can enter our name servers.
1.  Enter the [DNSimple name servers](/articles/dnsimple-nameservers/):

    - ns1.dnsimple.com
    - ns2.dnsimple-edge.net
    - ns3.dnsimple.com
    - ns4.dnsimple-edge.org
</div>

> [!NOTE]
> #### Name server propagation
>
> Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).

### How to set custom name servers at some common registrars

- [GoDaddy](https://uk.godaddy.com/help/set-custom-nameservers-for-domains-registered-with-us-12317)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)

## Have more questions?

If you have additional questions about delegating your domain to DNSimple's name servers, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
