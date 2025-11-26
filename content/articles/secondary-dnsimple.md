---
title: Using DNSimple alongside other DNS providers
excerpt: How to use DNSimple along with other DNS providers.
meta: Learn how to seamlessly integrate DNSimple as a secondary DNS provider, along with your primary DNS provider for enhanced domain redundancy.
categories:
- Secondary DNS
---

# Using DNSimple alongside other DNS providers

<warning>
  If you want to set up automatic zone transfers (AXFR) between DNSimple and another DNS service provider, head to the [Add a secondary DNS server to DNSimple](/articles/secondary-dns/) and [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) articles.
</warning>

You can use our API or UI to have zone redundancy with other DNS providers. You're responsible for keeping the zones in sync between other DNS providers and DNSimple. There are several ways to do this:

- [Adding the records](/articles/record-editor/) manually through our UI.
- [Importing a zone file](/articles/import-records-zone-file/) from your primary provider.
- [Using our API](https://developer.dnsimple.com/v2/).
- Use "infrastructure as code" tools such as [Terraform](https://registry.terraform.io/providers/dnsimple/dnsimple/latest/docs), [OctoDNS](https://github.com/octodns/octodns), and [DNSControl](https://github.com/StackExchange/dnscontrol)

This diagram shows how zone changes are propagated to both DNS service providers:

![Externally managed Secondary DNS diagram](/files/secondary_dns_externally_managed.jpg)

## Configuring DNSimple alongside another DNS provider (hosted domain)

To set up zone redundancy with another DNS provider on your zone, follow the steps detailed in [Updating NS Records for the Zone of a Hosted Domain](/articles/zone-ns-records/).


## Configuring DNSimple alongside another DNS provider (registered domain)

To set up zone redundancy with another DNS provider on your domain, follow the steps detailed in [Setting the Name Servers for a Domain Name](/articles/setting-name-servers/#pointing-the-name-servers-to-another-provider).

## Have more questions?

If you have additional questions or need assistance setting up zone redundancy, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
