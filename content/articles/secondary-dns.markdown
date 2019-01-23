---
title: Secondary DNS
excerpt: This page provides information about secondary DNS configuration with DNSimple.
categories:
- Secondary DNS
---

# Secondary DNS

### Table of Contents {#toc}

* TOC
{:toc}

---

## Getting started

Before setting up Secondary DNS with our systems, you need to choose, activate, and gather information for the secondary DNS provider you'll be using.

We provide pre-configurations and step-by-step guides for 3 providers:

- [Dyn](/articles/secondary-dns-provider-dyn)
- [DNSMadeEasy](/articles/secondary-dns-provider-dns-made-easy)
- [EasyDNS](/articles/secondary-dns-provider-easy-dns).

You can configure Secondary DNS with any provider by choosing the custom option. Once you know which provider you're going to use and have made the necessary configuration on their side, continue with this guide.

You can configure Secondary DNS on all domains whether they delegate to us or not. But if you've pointed delegation elsewhere, you'll need to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple) before the configuration will take effect.

If you don't have your domain registered with us, update the delegation of your domain at your registrar to use the secondary name servers you have chosen. If you set up the secondary name servers `ns1.secondary.com` and `ns2.secondary.com`, delegation at your registrar will need to change from:

- `ns1.dnsimple.com`
- `ns2.dnsimple.com`
- `ns3.dnsimple.com`
- `ns4.dnsimple.com`

to

- `ns1.dnsimple.com`
- `ns2.dnsimple.com`
- `ns3.dnsimple.com`
- `ns4.dnsimple.com`
- `ns1.secondary.com`
- `ns2.secondary.com`

Revert this step if you ever disable Secondary DNS for your domain.


## Enable Secondary DNS

You can get started with Secondary DNS from the DNS section of the domain management page.

![DNS management page](/files/setup-secondary-dns.png)

You'll see a page where you can choose your secondary provider. If your provider is Dyn, DNSMadeEasy, or EasyDNS, you're one click away from completing the configuration. Otherwise, select the custom option. You'll see a page for providing the names for NS records and the IP addresses that should be allowed access for the zone transfer. Retrieve these details from your secondary DNS provider.

Selecting a pre-configuration will prepopulate the correct values for you. Click on "Enable" at the bottom of the page.

If you choose the custom option, you'll be prompted to enter the NS records and the IP address for the zone transfer.

Once you submit the form with the proper details, you'll be redirected to the domain management page with updated details.

![Updated DNS management page](/files/secondary-dns-configured.png)

<warning>
If your domain is registered with us, we will replace whatever delegation you have set for the domain with our name servers and the secondary name servers you've configured. If you are delegating to another provider for your DNS, the values at the registry will be updated to match the NS set on the apex zone of your domain as represented in our record editor.
</warning>

### Behind the Scenes

Once Secondary DNS has been correctly set up for a particular domain, every zone change will be replicated on the Secondary DNS provider. All existing records will be copied over, including standard records and DNSimple custom records like `ALIAS` and `URL`. These will be resolved and the resulting value will be pushed to the secondary.

Until Secondary DNS is disabled for a particular domain, all record changes you make on DNSimple will be automatically synchronized to your Secondary DNS provider.

## Edit Secondary DNS Configuration

Once you have set up Secondary DNS, you might need to tweak details about your configuration. Do this from the same link as the initial setup.

![Reconfigure Secondary DNS](/files/reconfigure-secondary-dns.png)

## Disable Secondary DNS

If you don't want to use Secondary DNS via AXFR, you can click the <label>Delete secondary DNS configuration</label> button

![Delete Secondary DNS Configuration](/files/reconfigure-secondary-dns.png)


## AXFR Name Server Details

To set up your secondary provider, give them the server that will respond to AXFR queries (also known as DNS zone transfer). Some providers will ask for a host name, others will ask for an IP address.

The host name for the DNSimple AXFR server is **axfr.dnsimple.com**. The IP address on that node is 50.31.225.92. Please prefer the host name whenever possible. If the IP address should change, we'll inform you in advance using your account email.


## Frequently Asked Questions

<div class="section-faq" markdown="1">
1.  #### What is Secondary DNS and why do I want it?

    Secondary DNS is when you use a special protocol called AXFR to automatically transfer your zones to a secondary DNS provider whenever they change. This allows you to use DNSimple's nameservers and another DNS provider's nameservers at the same time.

    This lets you have an active redundancy in your domain name resolution. If an issue came up with DNSimple, you'd still have active resolution with your other provider. This disaster prevention is very valuable to any products that need high uptime. When secondary DNS is enabled, those nameservers may be used at any time by resolvers – not just when an issue arises resolving names through our nameservers.

1.  #### Can DNSimple serve as a secondary DNS provider?

    DNSimple can't synchronize zone changes from other name servers using AXFR. But you can combine our secondary DNS feature with our API or UI to have zone redundancy with other DNS providers. See [DNSimple as a Secondary DNS provider](/articles/secondary-dnsimple).

1.  #### How can I check that my secondary DNS configuration is correct?

    If you're using one of the secondary DNS providers for which we provide prepared configuration, please [let us know](https://dnsimple.com/contact) if you experience trouble. Otherwise, you should be able to find the proper values in your provider's documentation. You should also be able to test the configuration on their end.

1.  #### How can I test that secondary DNS is working?

    Once you've added the proper configuration and verified with your secondary provider that they can make AXFR queries and receive zone transfers, you should be able to query one or all of the secondary name servers with `dig` by pointing it at the secondary name servers. If you wanted to check the resolution for `yourdomain.com`, and had added `ns5.dnsmadeeasy.com` as a secondary DNS server, you could execute `dig @ns5.dnsmadeeasy.com yourdomain.com` to check the records you set with DNSimple on the apex domain. If there's any difference between the response and what you get from DNSimple, something is likely misconfigured.

1.  #### Is the order of the name servers relevant?

    No. The order of name servers in your registrar, whois record, NS record set, or secondary DNS configuration doesn't matter. Resolvers will make requests against the name servers in your whois record by randomly selecting one or multiple name servers provided.
</div>
