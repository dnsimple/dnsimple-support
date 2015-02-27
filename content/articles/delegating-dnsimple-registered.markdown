---
title: Delegating a Domain registered with DNSimple to DNSimple
excerpt: Welcome to DNSimple. This page is about delegating domains registered with DNSimple to DNSimple. Hosted DNS has never been this easy.
categories:
- Name Servers
---

# Delegating a Domain registered with DNSimple to DNSimple

Swithing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="section-steps" markdown="1">
##### To change the name servers to DNSimple

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

    ![Domain Page link](/files/dnsimple-domains-domain-link.png)

1.  Switch to the <label>DNS</label> tab.

    ![Domain DNS tab link](/files/dnsimple-domain-tab-dns-link.png)

1.  On the <label>Name severs</label> card, click <label>Switch to the DNSimple name servers</label>.

    ![Switch Name Servers link](/files/dnsimple-domain-tab-switch-nameserver-link.png)

</div>

<info>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</info>
