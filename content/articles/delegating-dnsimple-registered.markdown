---
title: Delegating a Domain registered with DNSimple to DNSimple
excerpt: 
categories:
- Name Servers
---

# Delegating a Domain registered with DNSimple to DNSimple

Swithing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="section-steps" markdown="1">
##### To change the name servers to DNSimple

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

    ![Domain Page link](http://cl.ly/image/3P2O3o2D0P15/dnsimple-domains-domain-link.png)

1.  On the right <label>Resolutions Status</label> sidebar, click <label>Switch to DNSimple name servers</label>.

    ![Change Name Servers link](http://cl.ly/image/0q113R0U2A2Q/dnsimple-switch-to-dnsimple.png)

</div>

<info>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</info>
