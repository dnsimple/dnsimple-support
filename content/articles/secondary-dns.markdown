---
title: Secondary DNS
excerpt:
categories:
- Advanced DNS
---

# Secondary DNS

<info>
We have begun providing Secondary DNS support on a private beta testing basis. We will be launching general availability shortly.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

## Getting started

Before setting up AXFR with our systems it will be necessary for you to choose, activate, and gather information for the secondary DNS provider you will be using. Once you have a secondary provider configured, you should continue with this guide.

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

![DNS management page](http://cl.ly/image/3r3d162n0W2A/SetUpSecondaryDNS.jpg)

You will then be presented with a page for providing the names for NS records as well as the IP addresses which should be allowed to have access for AXFR. These details should be retrieved from your secondary DNS provider.

![Configure Secondary DNS Form](http://cl.ly/image/3Z052D3x0B3y/ConfigureSecondaryDNSForm.jpg)

Once you submit the form with the proper details, you will be redirected to the domain management page with updated details.

![Updated DNS management page](http://cl.ly/image/0j2y0v3r0N0O/SecondaryDNSConfigured.jpg)

<info>
**What happens once Secondary DNS is enabled?**

Once Secondary DNS has been correctly setup for a particular domain every zone change will be replicated on the Secondary DNS provider. All existing records will be copied over.Including not only standard records but also DNSimple custom records like `ALIAS` and `URL`. These will be resolved and the resulting value will be pushed to the secondary.

Until Secondary DNS is disabled for a particular domain all record changes that you make on DNSimple will be synchronized to your Secondary DNS provider automatically.
</info>

## Edit Secondary DNS Configuration

Once you have set up Secondary DNS, it may be necessary to tweak details about your configuration. This is accomplished from the same link as initial setup.

![Reconfigure Secondary DNS](http://cl.ly/image/1o2j3n2V3a0I/ReconfigureSecondaryDNS.jpg)

From here you will see details regarding the current configuration. Click the <label>Edit configuration</label> link and submit the form once you have modified the values as needed.

![Edit Secondary DNS Configuration](http://cl.ly/image/0w2Z1Q3a1T3T/EditSecondaryDNSConfiguration.jpg)


## Disable Secondary DNS

If you no longer wish to use Secondary DNS via AXFR, you can simply visit the configuration page for Secondary DNS and choose the <label>Delete secondary DNS configuration</label> button

![Delete Secondary DNS Configuration](http://cl.ly/image/3e0M2r1N1b3G/DeleteSecondaryDNSConfiguration.jpg)


## AXFR Name Server Details

In order to setup your secondary provider, you will need to give them the server which will respond to AXFR queries. Some providers will ask for a host name while others will ask for an IP address. The host name will consistently remain **axfr.dnsimple.com**. Presently the IP address on that node is 50.31.225.90; however that value is subject to change.
