---
title: Resolution Status
excerpt: The resolution status component in the domain page shows if the domain is currently resolving with DNSimple.
categories:
- DNS
---

# Resolution Status

The resolution status shows the name servers currently configured at the registry. Name servers are responsible for answering DNS queries for your domain, and they're important to your domain functioning.

## Domains registered with DNSimple

If you registered the domain with us, we'll set the name servers automatically to DNSimple. To find this information: 

1. Click the relevant domain in your Domain List. 
2. Click the **Registration** tab on the left side.
3. You'll see the name servers listed in the **Delegation** card. 

<!--- needs screenshot -->

If you updated the name servers to another provider, those will appear as well.

<!--- needs screenshot -->

If you transferred the domain to us, we don't automatically switch your name servers, but you can [switch the name servers to DNSimple](/articles/delegating-dnsimple-registered/).

## Domains registered with another registrar

If the domain is registered with another registrar, and you're using DNSimple only for DNS hosting, we currently don't show the name servers for your domain. If you want to point the name servers to us, [follow these instructions](/articles/delegating-dnsimple-hosted).

## Have more questions? 

If you have any questions about resolution status or pointing your name servers to DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
