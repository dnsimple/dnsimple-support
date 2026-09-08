---
title: Using DNSimple alongside other DNS providers
excerpt: Run DNSimple next to another DNS provider without AXFR by keeping both zones in sync yourself.
meta: Use DNSimple with another DNS provider without zone transfers. Keep zones in sync with the record editor, zone import, API, or infrastructure-as-code tools.
categories:
- Secondary DNS
- Enterprise
---

# Using DNSimple alongside other DNS providers

### Table of Contents {#toc}

* TOC
{:toc}

---

You can run DNSimple next to another DNS provider **without** automatic zone transfers. You are responsible for keeping both zones in sync. This is not inbound or outbound secondary DNS via AXFR.

> [!WARNING]
> For automatic AXFR between DNSimple and another provider, use [Add a secondary DNS server to DNSimple](/articles/secondary-dns/) (DNSimple as primary) or [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) (DNSimple as secondary). See [What is Secondary DNS?](/articles/what-is-secondary-dns/) for the difference.

Ways to keep zones aligned:

- [Add records](/articles/record-editor/) manually in the DNSimple UI
- [Import a zone file](/articles/import-records-zone-file/) from your other provider
- Use the [DNSimple API](https://developer.dnsimple.com/v2/)
- Use infrastructure-as-code tools such as the [Terraform provider](/articles/terraform-provider/) ([registry docs](https://registry.terraform.io/providers/dnsimple/dnsimple/latest/docs)), [OctoDNS](https://github.com/octodns/octodns), or [DNSControl](https://github.com/StackExchange/dnscontrol)

This diagram shows how zone changes must be applied to both providers:

![Externally managed Secondary DNS diagram](/files/secondary_dns_externally_managed.jpg)

## Hosted domain {#hosted}

To publish name servers from both providers on a hosted zone, follow [Updating Zone NS Records for a Hosted Domain](/articles/zone-ns-records/).

## Registered domain {#registered}

To publish name servers from both providers for a domain registered with DNSimple, follow [Change delegation to another DNS provider](/articles/setting-name-servers/#pointing-the-name-servers-to-another-provider).

## Have more questions?

If you have questions about multi-provider DNS without AXFR, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
