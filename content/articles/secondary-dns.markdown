---
title: Secondary DNS
excerpt: This page provides information about secondary DNS configuration with DNSimple.
categories:
- Advanced DNS
---

# Secondary DNS

### Table of Contents {#toc}

* TOC
{:toc}

---

## Getting started

Before setting up Secondary DNS with our systems it will be necessary for you to choose, activate, and gather information for the secondary DNS provider you will be using. At this moment, we simplify this process by providing pre-configurations and step-by-step guide for 2 providers: [DNSMadeEasy](/articles/secondary-dns-provider-dns-made-easy/) and [EasyDNS](/articles/secondary-dns-provider-easy-dns/). We plan to offer pre-configurations for other providers in the near future. Note that you can configure Secondary DNS with any provider by choosing the custom option. Once you know which provider you are going to use and have a made the necessary configuration on their side, you should continue with this guide.

It is possible to configure Secondary DNS on all domains whether they delegate to us or not, but if you have pointed delegation elsewhere you will need to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple/) before the configuration will take effect.

Also, if you do not have your domain registered with us, you will need to update the delegation of your domain at your registrar to use the secondary name servers you have chosen. If you set up the secondary name servers `ns1.secondary.com` and `ns2.secondary.com` delegation at your registrar will need to change from:

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

Remember that you will need to revert this step if you ever disable Secondary DNS for your domain.


## Enable Secondary DNS

Getting started with Secondary DNS is possible from the DNS section of the domain management page.

![DNS management page](/files/setup-secondary-dns.jpg)

You will then be presented with a page where you can choose your secondary provider. If your provider is either DNSMadeEasy or EasyDNS, you are one click away from completing the configuration. Otherwise, select the custom option. You will then be presented with a page for providing the names for NS records as well as the IP addresses which should be allowed to have access for the zone transfer. These details should be retrieved from your secondary DNS provider.

![Configure Secondary DNS Form](/files/secondary-dns-step-1.png)

Selecting a pre-configuration will prepopulate the correct values for you. Just click on the "Enable" button at the bottom of the page.

![Configuration with provider](/files/secondary-dns-provider-conf.png)

If you choose the custom option, you'll be prompted to enter the NS records as well as the IP address for the zone transfer.

![Configuration with custom](/files/secondary-dns-custom-conf.png)

Once you submit the form with the proper details, you will be redirected to the domain management page with updated details.

![Updated DNS management page](/files/secondary-dns-configured.jpg)

<warning>
If your domain is registered with us, we will replace whatever delegation you have set for the domain with our name servers and the secondary name servers you've configured. This means if you are delegating to another provider for your DNS, the values at the registry will be updated to match the NS set on the apex zone of your domain as represented in our record editor.
</warning>

### Behind the Scenes

Once Secondary DNS has been correctly setup for a particular domain every zone change will be replicated on the Secondary DNS provider. All existing records will be copied over.Including not only standard records but also DNSimple custom records like `ALIAS` and `URL`. These will be resolved and the resulting value will be pushed to the secondary.

Until Secondary DNS is disabled for a particular domain all record changes that you make on DNSimple will be synchronized to your Secondary DNS provider automatically.


## Edit Secondary DNS Configuration

Once you have set up Secondary DNS, it may be necessary to tweak details about your configuration. This is accomplished from the same link as initial setup.

![Reconfigure Secondary DNS](/files/reconfigure-secondary-dns.jpg)

From here you will see details regarding the current configuration. Click the <label>Edit configuration</label> link and submit the form once you have modified the values as needed.

![Edit Secondary DNS Configuration](/files/secondary-dns-edit.png)


## Disable Secondary DNS

If you no longer wish to use Secondary DNS via AXFR, you can simply visit the configuration page for Secondary DNS and choose the <label>Delete secondary DNS configuration</label> button

![Delete Secondary DNS Configuration](/files/secondary-dns-delete.png)


## AXFR Name Server Details

In order to setup your secondary provider, you will need to give them the server which will respond to AXFR queries (also known as DNS zone transfer). Some providers will ask for a host name while others will ask for an IP address. The host name will consistently remain **axfr.dnsimple.com**. Presently the IP address on that node is 50.31.225.92; however that value is subject to change.

## Frequently Asked Questions

<div class="section-faq" markdown="1">
1.  #### Can DNSimple serve as a secondary DNS provider?

    No. At this time, DNSimple can serve only as the authoritative source for DNS but does offer the ability to have a secondary provider configured via AXFR.

1.  #### How can I check that my secondary DNS configuration is correct?

    If you are using one of the secondary DNS providers for which we provide prepared configuration, please [let us know](https://dnsimple.com/contact) if you experience trouble. Otherwise, you should be able to find the proper values with in your provider's documentation and should also be able to test the configuration on their end.

1.  #### How can I test that secondary DNS is working?

    Once you've added the proper configuration and verified with your secondary provider that they are able to make AXFR queries and receive zone transfers, you should be able to make a query to one or all of the secondary name servers with `dig` by pointing it at the secondary name servers. For example, if you wanted to check the resolution for `yourdomain.com` and had added `ns5.dnsmadeeasy.com` as a secondary DNS server, you could execute `dig @ns5.dnsmadeeasy.com yourdomain.com` to check the records you'd set with DNSimple on the apex domain. If there is any difference between the response and what you get from DNSimple, you've likely misconfigured something.

1.  #### Is the order of the name servers relevant?

    The order of name servers in your registrar, whois record, NS record set, or secondary DNS configuration does not matter at all. Resolvers will make requests against the name servers in your whois record by randomly selecting one or multiple name servers provided there and the order does not matter.
</div>
