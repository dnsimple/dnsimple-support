---
title: Setting the Name Servers for a Domain
excerpt: To set the name servers, your domain must be registered with DNSimple. If that's not the case, use the control panel of your current domain registrar to update the name servers.
categories:
- Name Servers
---

# Setting the Name Servers for a Domain Name

### Table of Contents {#toc}

* TOC
{:toc}

---

To set the name servers, your domain must be registered with DNSimple. If that's not the case, use the control panel of your current domain registrar to update the name servers.

You can set the name servers of a domain registered with DNSimple from your domain page.

## Pointing the name servers to another provider

Pointing the name servers to another provider will cause the domain to resolve using the DNS records configured at the other DNS provider. The DNS records in your DNSimple account will be ignored.

<div class="section-steps" markdown="1">
##### To point the name servers to another provider

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  Switch to the <label>DNS</label> tab.

    ![Domain DNS tab link](/files/domain-tab-dns-link.png)

1.  On the <label>Name severs</label> card, click <label>Change name servers</label>.

    ![Change Name Servers link](/files/dnsimple-domain-tab-change-nameserver-link.png)

1.  Enter the names of the name servers you would like to use and click <label>Change Name Servers</label> to complete the change.

    ![Complete name server change](/files/complete-name-server-change.png)

</div>

<note>
While this will change the NS records on your domain, our listing of records will continue to display the records our name servers would respond with, thus it will still show our NS records.
</note>

## Pointing the name servers to DNSimple

Pointing the name servers to DNSimple provider will cause the domain to resolve using the DNS records configured in your DNSimple account.

To change the name servers to DNSimple you can follow the steps in the previous section and use the DNSimple domains. However, we provide a more convenient one-click feature to [switch a DNSimple registered to DNSimple name servers](/articles/delegating-dnsimple-registered).
