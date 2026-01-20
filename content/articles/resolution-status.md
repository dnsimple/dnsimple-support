---
title: What Is Resolution Status?
excerpt: The resolution status component in the domain page shows if the domain is currently resolving with DNSimple.
meta: Understand DNS resolution status and how to check if your domain is resolving with DNSimple. Learn about name server delegation and domain configuration.
categories:
- DNS
---

# What Is Resolution Status?

The **resolution status** of a domain refers to the [name servers](/articles/dnsimple-nameservers/) currently configured for it at the domain registry. These name servers are the authoritative servers responsible for answering all DNS queries for your domain. The resolution status is a foundational part of your domain's functionality, because it tells the internet where to go to find your domain's records.

## Resolution status in your DNSimple account

The resolution status you see in DNSimple depends on where your domain is registered:

### Domains registered with DNSimple

If you registered the domain directly with us, we will set the name servers to DNSimple by default. You can view these name servers and the delegation status by visiting the **Registration** tab for your domain and looking at the **Delegation** card.

![list of nameservers for a domain](/files/nameserver-list.png)

If you update the name servers to another provider, those will be reflected here. 

If you transfer a domain to us, **we don't automatically change the name servers**, so you'll need to manually switch them to DNSimple if you want us to host your DNS.

![list of external nameservers](/files/external-nameservers.png)

### Domains registered with another registrar

If your domain is registered with a third-party registrar and you are using DNSimple only for DNS hosting, the DNSimple interface will typically not show you the name servers currently configured at your registrar. In this case, you must check your domain's delegation status at your registrar's control panel. 

## Next steps and troubleshooting

Understanding your domain's resolution status is the first step in ensuring your DNS is configured correctly.

- To learn how to check your domain's resolution status, see [Check Resolution Status](/articles/check-resolution-status/).
- To learn how to point a domain's name servers to DNSimple when it's registered with us, view [this article](/articles/delegating-dnsimple-registered/).
- To learn how to delegate your domain that is registered at another provider to DNSimple, please refer to these [detailed instructions](/articles/delegating-dnsimple-hosted/). 

If you're experiencing issues with domain resolution, see [Troubleshooting Domain Resolution Issues](/articles/domain-resolution-issues/) or [Troubleshooting DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/) for comprehensive troubleshooting guidance.

## Have more questions?
If you have any questions about resolution status or pointing your name servers to DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
