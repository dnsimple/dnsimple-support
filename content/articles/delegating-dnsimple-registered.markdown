---
title: Delegating a Domain registered with DNSimple to DNSimple
excerpt: 
categories:
- Name Servers
---

# Delegating a Domain registered with DNSimple to DNSimple

Swithing the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="steps" markdown="1">
##### To switch the name servers to DNSimple

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click <label>Manage</label>.

    ![Manage](http://f.cl.ly/items/22072R2m1o2I3z0u0P0I/Image%202013.11.29%209%3A30%3A26%20AM.png)

1.  On the right <label>Resolutions Status</label> sidebar, click <label>Switch to DNSimple name servers</label>.

    ![Change Name Servers link](http://cl.ly/image/0q113R0U2A2Q/dnsimple-switch-to-dnsimple.png)

</div>

<info>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</info>
