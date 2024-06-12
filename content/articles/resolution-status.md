---
title: Resolution Status
excerpt: The resolution status component in the domain page shows if the domain is currently resolving with DNSimple.
categories:
- DNS
---

# Resolution Status

The resolution status in the domain page shows the name servers currently resolving for your domain configured at the registrar. Name servers are responsible for answering DNS queries for your domain.

![Domain is resolving](/files/resolution-status-resolving.png)

## Domain registered with DNSimple

If you registered the domain with us, we'll set the name servers automatically to DNSimple. If you updated the name servers to another provider, those will appear as well.

If you transferred the domain to us, we don't automatically switch your name servers. [Switch the name servers to us, once you're ready](/articles/delegating-dnsimple-registered/).

## Domain registered with other registrar

If the domain is registered with another registrar, and you're using DNSimple only for DNS hosting, we currently don't show the name servers for your domain. If you want to point the name servers to us, [please follow these instructions](/articles/delegating-dnsimple-hosted).
