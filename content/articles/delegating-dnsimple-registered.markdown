---
title: Delegating a Domain registered with DNSimple to DNSimple
excerpt: How to delegate a domain registered with DNSimple to DNSimple's name servers.
categories:
- Name Servers
---

# Delegating a Domain registered with DNSimple to DNSimple

Switching the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="section-steps" markdown="1">
##### Changing the name servers to DNSimple

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  On the Domain delegation card, click <label>Edit delegation</label>.

    ![Domain Delegation card](/files/domain-delegation-card-2.png)

1.  Enter the [DNSimple name servers](/articles/dnsimple-nameservers)
  - ns1.dnsimple.com
  - ns2.dnsimple.com
  - ns3.dnsimple.com
  - ns4.dnsimple.com

    ![Change name servers](/files/change-name-servers.jpg)

1. Alternatively, instead of manually keying in DNSimple's name servers, you can also click on <label>Add a name server set</label> and select a DNSimple system [name server set](/articles/name-server-sets) to add the DNSimple name servers.

    ![Add a name server set](/files/domain-delegation-add-name-server-set.png)

1. Click <label>Change name servers</label> to apply the delegation changes.

</div>

<note>
#### Name server propagation

It can take up to 24 hours for a name server change to propagate. The WHOIS response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</note>
