---
title: Discontinuation of Legacy IP Addresses
excerpt: DNSimple will no longer support legacy IP addresses starting November 20, 2024. Affected customers will be notified via email.
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

As part of our commitment to providing streamlined and reliable DNS management services, we are modernizing our name server infrastructure and discontinuing the use of legacy IP addresses for all plans. We will begin disabling the IP addresses on November 20, 2024.

The following IP addresses were used by our first generation network infrastructure. They were superseded in 2016, and they are now officially deprecated in favor of the current [DNSimple name servers and IPs](/articles/dnsimple-nameservers/):

- 198.241.10.53
- 198.241.11.53
- 50.31.242.53
- 50.31.243.53
- 2620:111:8000::53
- 2620:111:8001::53
- 2620:111:8002::53
- 2620:111:8003::53

As part of our recent [cache edge network expansion](https://blog.dnsimple.com/2024/10/expanding-cache-edge-network/), the current DNSimple name servers and IP addresses are able to take advantage of enhanced caching mechanisms at the edge to reduce the authoritative origin query volume and response times while also providing additional DDoS protection.

## Who's impacted?

Accounts with records using the deprecated IP addresses will be impacted.

## What's changing and how it will impact your domains

If you have affected domains, you have until November 20, 2024 to take action. After that date, any requests sent to deprecated IP addresses will stop responding.

## What do you need to do?

* Review any domains you own, either at DNSimple or any third-party registrar, and update/adequate any DNS records pointing to the deprecated IP addresses to use the current  list of suggested IP addresses.

* For domains in your DNSimple account that are using vanity name servers but are not registered with DNSimple, change the delegation to the default DNSimple name servers at your current registrar, and disable the vanity name servers feature.

## Have more questions?

If you have any questions about this discontinuation or the action you need to take, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
