---
title: Delegating a Domain registered with another Registrar to DNSimple
excerpt: How to delegate a domain registered with a different registrar to DNSimple name servers.
categories:
- Name Servers
---

# Delegating a Domain registered with another Registrar to DNSimple

Pointing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="section-steps" markdown="1">
##### To change the name servers to DNSimple

1.  Log into your registrar account.
1.  Find the place on your domain registrar's web site where you can enter our name servers.
1.  Enter the [DNSimple name servers](/articles/dnsimple-nameservers):

    - ns1.dnsimple.com
    - ns2.dnsimple.com
    - ns3.dnsimple.com
    - ns4.dnsimple.com
</div>

<note>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</note>

### How to set custom name servers at some common registrars

- [GoDaddy](https://uk.godaddy.com/help/set-custom-nameservers-for-domains-registered-with-us-12317)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)
