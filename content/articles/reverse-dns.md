---
title: Reverse DNS Zones
excerpt: We support reverse DNS zones.
meta: Article on how to set up Reverse DNS zone. Reverse lookup zone is an authoritative DNS zone that is used primarily to resolve IP addresses to network resource names.
categories:
- DNS
---

# Reverse DNS Zones

> [!NOTE]
> This article describes a feature only available on certain plans. [See the differences between plans](/articles/dnsimple-plans/).
> This feature is not available on our Legacy Plans. Click [here](/articles/changing-plans/) to change your plan, and unlock this feature.

DNSimple supports reverse DNS entries (i.e. PTR records). This feature is available on certain plans. [See the differences between plans](/articles/dnsimple-plans/). Please ensure you can delegate the portion of the subnet you want us to respond to for reverse DNS queries.

Depending on your DNS host, you may not have control over your subnet. In that case, you'll need to ask your hosting company to set up the reverse DNS entries you require.
