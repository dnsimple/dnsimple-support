---
title: Resolution Status
excerpt: The resolution status component in the domain page shows if the domain is currently resolving with DNSimple.
categories:
- DNS
---

# Resolution Status

The resolution status component in the domain page shows if the domain is currently resolving with the [DNSimple name servers](/articles/dnsimple-nameservers). It indicates if the DNS queries for your domain are being answered by us or an other provider.

The indicator uses our [Zone Vision](http://zone.vision/) service and displays real-time results. When you load the page, the indicator fetches the current name servers for the domains and compares them with the DNSimple name servers.

You can also click on the refresh button to refresh the indicator without reloading the page.

## Domain is resolving with DNSimple

If the domain is resolving with our name servers, you should see the following information along with the green check mark confirming your domain is resolving through us:

![Domain is resolving](/files/resolution-status-resolving.png)

This means any DNS change within this domain will take effect.

## Domain isn't resolving with DNSimple

Your domain might not resolve with us, which means any DNS update you perform through our UI will not take effect. We display the name servers so you know which other provider is responsible for answering your DNS queries.

Don't forget to read the [domain resolution issues](/articles/domain-resolution-issues) article. It contains common possible causes preventing your domain from resolving correctly.

### Domain registered with DNSimple

If you registered the domain with us, we'll set the name servers automatically to DNSimple. If you updated the name servers to another provider, we provide a link to [switch to DNSimple name servers](/articles/pointing-domain-to-dnsimple) without having to type them out.

![](/files/resolution-status-notresolving-maintained.png)

If you transferred the domain to us, we don't automatically switch your name servers. Follow the link available to point the domain to DNSimple.

### Domain registered with other registrar

If the domain is registered with another registrar, the indicator will provide a link to the support page that tells you [how to point the domain to DNSimple at your current registrar](/articles/delegating-dnsimple-hosted).

![](/files/resolution-status-notresolving-notmaintained.png)

### Domain expired or not responding

If your domain expired or isn't responding properly, the name servers won't appear in the list. If you know your domain isn't expired, we suggest reading [our domain resolution article](/articles/domain-resolution-issues).

![](/files/resolution-status-expired.png)
