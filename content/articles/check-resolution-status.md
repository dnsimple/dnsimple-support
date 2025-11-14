---
title: Check Resolution Status
excerpt: How to check if your domain is currently resolving with DNSimple.
categories:
- DNS
---

# Check Resolution Status

The [resolution status](/articles/resolution-status/) shows the name servers currently configured at the registry. Name servers are responsible for answering DNS queries for your domain. They are essential for your domain to function correctly.

## Domains registered with DNSimple

If you registered the domain with us, we automatically set the name servers to DNSimple. To find this information:

1. From the **Domain Names** list, click the domain you want to view.  
2. Click the **Registration** tab on the left side.  
3. The name servers are listed in the **Delegation** card.

![list of nameservers for a domain](/files/nameserver-list.png)

If you updated the name servers to another provider, those will appear as well.

![list of external nameservers](/files/external-nameservers.png)

<warning>
If you transferred the domain to us, we don't automatically switch your name servers, but you can [switch the name servers to DNSimple](/articles/delegating-dnsimple-registered/).
</warning>

## Domains registered with another registrar

If the domain is registered with another registrar and you're using DNSimple only for DNS hosting, we currently don't display the name servers for your domain. However, you can check the name servers by accessing the public [WHOIS](https://dnsimple.com/whois).

 If you would like to transfer the domain registration to us, [follow these instructions](/articles/domain-transfer/).

## Have more questions?

If you have any questions about resolution status or pointing your name servers to DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
