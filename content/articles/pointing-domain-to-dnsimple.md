---
title: Pointing a Domain to DNSimple
excerpt: How to point a domain to DNSimple's name servers for DNS hosting.
meta: How to delegate your domain to DNSimple's name servers so DNSimple provides DNS resolution, whether the domain is registered with DNSimple or another registrar.
categories:
- Name Servers
---

# Pointing a Domain to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Pointing a domain to DNSimple means updating the domain's [name server delegation](/articles/what-is-domain-delegation/) so DNS queries are answered by [DNSimple's name servers](/articles/dnsimple-nameservers/). Once delegated, the domain resolves using the DNS records configured in your DNSimple account.

This is required to use DNSimple as your [DNS hosting provider](/articles/dns-hosting/).

## DNSimple name servers {#dnsimple-name-servers}

Set your domain's name servers to:

- ns1.dnsimple.com
- ns2.dnsimple-edge.net
- ns3.dnsimple.com
- ns4.dnsimple-edge.org

Use all four name servers for full [redundancy](/articles/name-server-redundancy/).

## Domain registered with DNSimple {#registered-with-dnsimple}

If the domain is registered with DNSimple, you can update the delegation directly from your DNSimple account. Follow the steps in [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).

Domains registered through DNSimple are typically already pointed to DNSimple's name servers. If you previously changed them to a different provider, use the delegation instructions to switch back.

## Domain registered with another registrar {#registered-elsewhere}

If the domain is registered with another registrar (GoDaddy, Namecheap, etc.), you will need to update the name servers through that registrar's control panel. Follow the steps in [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

> [!TIP]
> Before switching name servers, make sure your DNS records are configured in DNSimple. Use [Auto-Import](/articles/auto-import-dns/) to copy records from your current provider, or see the full [DNS migration guide](/articles/migrating-dns-to-dnsimple/) for a step-by-step process.

## What to expect after changing name servers {#after-changing}

Name server changes can take up to 24 hours to propagate globally. During this period, some DNS queries may still be answered by your previous provider.

You can check propagation progress by:

- Running `dig NS example.com +short` to see which name servers are responding
- Using a [WHOIS lookup](https://dnsimple.com/whois) to confirm the registrar has accepted the change

The WHOIS response typically updates within a few minutes, even though full DNS propagation takes longer.

If your domain is not resolving after 24 hours, see [Troubleshooting Domain Resolution Issues](/articles/domain-resolution-issues/).

## Have more questions? {#have-more-questions}

If you have any questions about pointing your domain to DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
