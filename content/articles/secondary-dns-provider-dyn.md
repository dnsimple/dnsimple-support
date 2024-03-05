---
meta: Secondary DNS can be complicated to set up. We simplify it with provider specific settings for Dyn.
title: Add Dyn as a secondary DNS server
excerpt: Secondary DNS can be complicated to set up. We simplify it with provider specific settings for Dyn.
categories:
- Secondary DNS
---

# Add Dyn as a secondary DNS server

For an overview of Secondary DNS, have a look at [our introduction article](/articles/secondary-dns).

## Requirements

* An active account with [Dyn](http://dyn.com/). Your secondary DNS Setup will vary depending on whether you use _Dyn Standard_ or _Dyn Managed DNS_ service.
* Your domain [is pointing to the DNSimple name servers](/articles/pointing-domain-to-dnsimple).

You can get started with Secondary DNS from the DNS section of the domain management page.

![DNS management page](/files/setup-secondary-dns.png)

## Setting up for Dyn Standard

First, set up secondary DNS at Dyn. Instructions for setting up Secondary DNS using Dyn Standard may be found on the [Dyn help site](https://help.dyn.com/standard-dns/dyn-secondary-dns-information/). When you set up your Secondary DNS configuration in Dyn, they'll provide you with a list of name server names in the format `nsx.mydyndns.org` or `nsxxxx.dns.dyn.com`. Enter these names when you enable your secondary DNS with us.

You may also want to wait an hour or two before enabling your secondary DNS in DNSimple. This gives Dyn time to deploy the configuration for secondary DNS on our side.

From DNSimple, select **Dyn Standard** as the provider and click *Enable* at the bottom of the form. The IP addresses Dyn is expecting are already filled in for you. You'll need to fill in the name servers using the name server names Dyn provided to you when you enabled Secondary DNS on their side.

A confirmation message will tell you Secondary DNS has been enabled from the DNSimple side.

![DNSimple configuration is successful](/files/secondary-dns-confirmation-message.png)

Congratulations, your secondary DNS should now be set up with **Dyn Standard**.

## Setting up for Dyn Managed

First, set up secondary DNS at Dyn. You can find instructions on the [Dyn help site](https://help.dyn.com/creating-a-secondary-zone/). When you set up your Secondary DNS configuration in Dyn, they'll provide you with a list of name server names in the format `nsx.mydyndns.org` or `nsxxxx.dns.dyn.com`. Enter these names when you enable your secondary DNS with us.

You may also want to wait an hour or two before enabling your secondary DNS in DNSimple. This gives Dyn time to deploy the configuration for secondary DNS on our side.

From DNSimple, select **Dyn Managed** as the provider and click *Enable* at the bottom of the form. The IP addresses Dyn is expecting are already filled in for you. You'll need to fill in the name servers using the name server names Dyn provided to you when you enabled Secondary DNS on their side.

A confirmation message will tell you Secondary DNS has been enabled from the DNSimple side.

![DNSimple configuration is successful](/files/secondary-dns-confirmation-message.png)

Congratulations, your secondary DNS should now be set up with **Dyn Managed**.
