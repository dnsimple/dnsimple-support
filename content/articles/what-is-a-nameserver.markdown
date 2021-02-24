---
title: What is a name server?
excerpt: An explanation of what name servers are, why they're important, and how to set them up.
categories:
- Name Servers
---

# What is a Name Server?

In the simplest terms, name servers work as a directory that translates domain names (human
-readable words) into IP addresses (computer-readable numbers). With billions of websites out there, and more being created every day, we need name servers to make things easy to find across the Internet.

Without name servers, you'd almost never find what you were looking for unless you knew the exact IP address. That's where a DNS service provider, like DNSimple, comes in.

When you type a domain name into the search bar of your browser (Chrome, Safari, etc.), the domain name hits the name server, which translates the domain name into the IP address so the browser can locate it. Once it's found the domain name in the name server, your web browser uses the IP address to connect to the server and load the site you request.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/2WdF1zT01HY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<info>
Please keep in mind that "name server", "nameserver", and other variants refer to the same thing. We choose "name server" in the interest of consistency.
</info>

## How do I change the name servers?

For security purposes, we do not make these changes on your behalf. If you purchase your domain with a registrar like DNSimple and keep it there forever, you don't have to do anything with the name servers.

If you transfer your domain to DNSimple to manage your DNS, you'll need to update the name servers. Luckily, the name servers are easy to change and easy to remember.

<div class="section-steps" markdown="1">
##### To change the name servers to DNSimple

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  On the Domain delegation card, click <label>Edit delegation</label>.

    ![Domain Delegation card](/files/domain-delegation-card.png)

1.  Enter the [DNSimple name servers](/articles/dnsimple-nameservers) then click **Change name servers**:
  - ns1.dnsimple.com
  - ns2.dnsimple.com
  - ns3.dnsimple.com
  - ns4.dnsimple.com

    ![Change name servers](/files/change-name-servers.jpg)

</div>

<note>
#### Check your name servers

Make sure to [check your nameservers](/articles/pointing-domain-to-dnsimple/). If your domain isn't delegated to DNSimple, then [changes you make to DNS records](/articles/record-editor/) won't resolve.

If you would like to know which name servers your domain is using, take a look at [zone.vision](https://zone.vision/#/) to do a DNS Lookup.
</note>
