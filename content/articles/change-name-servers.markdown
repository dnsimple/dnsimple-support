---
title: Changing a Domain Name Servers
excerpt: 
categories:
- Name Servers
---

# Changing a Domain Name Servers

### Table of Contents {#toc}

* TOC
{:toc}

---

To change your name servers to another DNS provider, your domain must be registered with DNSimple. If that's not the case, use the control panel of your current domain registrar to update the name servers.

You can change the name servers of a domain registered with DNSimple from your domain page.

## Pointing the name servers to another DNS provider

Pointing the name servers to another provider will cause the domain to resolve using the DNS records configured at the other DNS provider. The DNS records in your DNSimple account will be ignored.

<div class="steps" markdown="1">
##### To point the name servers to another provider

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

    ![Domain Page link](http://cl.ly/image/3P2O3o2D0P15/dnsimple-domains-domain-link.png)

1.  On the right <label>Registration Status</label> sidebar, click <label>Change Name Servers</label>.

    ![Change Name Servers link](http://f.cl.ly/items/3i0Q3N3K1N1L1I3o011F/Image%202013.11.29%209%3A32%3A24%20AM.png)

1.  Enter the names of the name servers you would like to use and click "Change Name Servers" to complete the change.

    ![Complete name server change](http://f.cl.ly/items/0R0Z1l3B1K34473a3I3P/Image%202013.11.29%209%3A33%3A23%20AM.png)

</div>

## Pointing the name servers to DNSimple

Pointing the name servers to DNSimple provider will cause the domain to resolve using the DNS records configured in your DNSimple account.

To change the name servers to DNSimple you can follow the steps in the previous section and use the DNSimple domains. However, we provide a more convenient one-click feature to [switch a DNSimple registered to DNSimple name servers](/articles/delegating-dnsimple-registered/).
