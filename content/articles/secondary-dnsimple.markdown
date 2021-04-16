---
title: Using DNSimple along other DNS providers
excerpt: How to use DNSimple along with other DNS providers
categories:
- Secondary DNS
---

# Using DNSimple along other DNS providers

<warning>
  If you want to set up automatic zone transfers (AXFR) between DNSimple and another DNS service provider, then you should head to the [Add a secondary DNS server to DNSimple](/articles/secondary-dns/) and [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) articles
</warning>

You can combine our secondary DNS feature with our API or UI to have zone redundancy with other DNS providers. You're responsible for keeping the zones in sync between other DNS providers and DNSimple. There are several ways to do this:

- [Adding the records](/articles/record-editor/) manually through our UI.
- [Importing a zone file](/articles/zone-files/#importing-records-from-a-zone-file) from your primary provider.
- [Using our API](https://developer.dnsimple.com/v2).
- Use "infrastructure as code" tools such as [Terraform](https://registry.terraform.io/providers/dnsimple/dnsimple/latest/docs), [OctoDNS](https://github.com/octodns/octodns), and [DNSControl](https://github.com/StackExchange/dnscontrol)

This diagram shows how zone changes are propagated to both DNS service providers:

<img alt="Externally managed Secondary DNS diagram" src="/files/secondary_dns_externally_managed.jpg" width="300"/>

## Configuring DNSimple along another DNS provider

To set up zone redundancy with another DNS provider:

- If you don't have the domain in your DNSimple account, [add it with "use DNSimple services"](/articles/adding-domain/).
- Go to the domain page and click on the DNS in the menu.
- Under the Secondary DNS card, click on <label>Use DNSimple along another DNS provider</label>.

  ![Change you Secondary DNS configuration](/files/secondary-dnsimple-1.png)

- Enter the name servers of your primary DNS provider in the <label>Name servers</label> field.

  ![Configure primary DNS provider name servers](/files/secondary-dnsimple-2.png)

- Click on <label>Save</label>.
