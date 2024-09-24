---
title: Discontinuation of Legacy IP Addresses
excerpt: DNSimple will no longer support legacy IP addresses starting [DATE]. Affected customers will be notified via email.
categories:
---

# Discontinuation of Legacy IP Addresses

<info>
This article contains information that is only relevant to customers with legacy configurations using outdated IP addresses. If you are impacted, you will receive an email from us asking you to take action.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our commitment to providing streamlined and reliable DNS management services, we are modernizing our name server infrastructure and discontinuing the use of legacy IP addresses for all plans. We will begin disabling the IP addresses on [DATE].

The following IP addresses were primarily used by Basic Reseller accounts to configure vanity name servers, and they are now officially deprecated in favor of the current [DNSimple name servers and IPs](/articles/dnsimple-nameservers/):

- 198.241.10.53
- 198.241.11.53
- 50.31.242.53
- 50.31.243.53
- 2620:111:8000::53
- 2620:111:8001::53
- 2620:111:8002::53
- 2620:111:8003::53

These IPs were replaced in 2016 and have since been removed from our public documentation. However, they were kept active due to some domains still actively using them.

As part of our recent [cahce edge improvements](https://blog.dnsimple.com/), the current DNSimple name servers and IP addresses are able to take advantage of enhanced caching mechanisms at the edge to reduce the authoritative origin query volume and reduce response times while also providing additional DDoS protection.

## Who's impacted?

Accounts subscribed to the Personal, Professional, Solo, or Teams plan will be impacted if they have any domains with records or vanity name servers using the deprecated IP addresses.

## What's changing and how it will impact your domains

If you have affected domains, you have until [DATE], 2024 to take action. After that date:

* Any requests sent to deprecated IP addresses will stop responding.
* Any vanity name servers configured with deprecated IP addresses will become obsolete.

## What do you need to do?

* Review any domains you own, either at DNSimple or any third party registrar, and update/adequate any DNS records pointing to the deprecated IP addresses to use the current suggested list of IP addresses.

* For domains in your DNSimple account that are using vanity name servers but are not registered with DNSimple, change the delegation to the default DNSimple name servers at your current registrar, and disable the vanity name servers feature.
