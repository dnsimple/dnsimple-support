---
title: Resolution Status
excerpt: The resolution status component in the domain page shows if the domain is currently resolving with DNSimple.
categories:
- DNS
---

# Resolution Status

The resolution status component in the domain page shows if the domain is currently resolving with the [DNSimple name servers](/articles/dnsimple-nameservers). This is important because it indicates if the DNS queries for your domain are being answered by us or an other provider.

The indicator uses our [Zone Vision](http://zone.vision/) service and displays real-time results. When you load the page, the indicator fetches the current name servers for the domains and compares them with the DNSimple name servers.

You can also click on the refresh button to refresh the indicator without reloading the page.

## Domain is resolving with DNSimple

If the domain is resolving with our name servers, you should see the following information along with the green check mark that confirm that your domain is resolving through us.

![Domain is resolving](/files/resolution-status-resolving.png)

This means that any DNS change within this domain will take effect.

## Domain is not resolving with DNSimple

Your domain might not resolve with us, which means that any DNS update that you perform through our UI will not take effect. We display the name servers so you know which other provider is responsible to answer your DNS queries.

Don't forget to read the [domain resolution issues](/articles/domain-resolution-issues) article, it contains some common causes that could prevent your domain from resolving correctly.

### Domain registered with DNSimple

If you registered the domain with us, we will set the name servers automatically to DNSimple. If you updated the name servers to another provider, we provide a link to [switch to DNSimple name servers](/articles/pointing-domain-to-dnsimple) without having to type them out.

![](/files/resolution-status-notresolving-maintained.png)

If you transferred the domain to us, please note we don't automatically switch your name servers and you will need to follow the link available to point the domain to DNSimple.

### Domain registered with other registrar

If the domain is registered with another registrar, the indicator will provide a link to the support page that tells you [how to point the domain to DNSimple at your current registrar](/articles/delegating-dnsimple-hosted).

![](/files/resolution-status-notresolving-notmaintained.png)

### Domain expired or not responding

If your domain expired or is not responding properly, the name servers will not appear in the list. If you are certain that your domain is not expired, we suggest that you have a look at [our domain resolution article](/articles/domain-resolution-issues).

![](/files/resolution-status-expired.png)
