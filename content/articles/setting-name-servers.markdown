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

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  On the Domain delegation card, click <label>Edit delegation</label>.

    ![Domain Delegation card](/files/domain-delegation-card.png)

1.  Enter the names of the name servers you want to use.

    ![Enter name servers](/files/complete-name-server-change.png)

1. Instead of manually keying in the name server names, you can also click on <label>Add a name server set</label> to select a [name server set](/articles/name-server-sets).

    ![Add a name server set](/files/domain-delegation-add-name-server-set.png)

   If the name server has glue IP address(es) associated with it in the [name server set](/articles/name-server-sets), and is a child zone of the domain which is having the delegation updated, glue records will be created for the domain at the registry. For instance, if "ns1.example.com" is being configured as a name server for the domain "example.com", and "ns1.example.com" has glue IP address(es) associated with it in the name server set it belongs to, the glue records needed to resolve "ns1.example.com" to its associated IP address(es) will be created at the registry.

1. Click <label>Change Name Servers</label> to apply the name server changes.

</div>

<info>
DNSimple's listing of NS records for the domain will be updated to match the name server changes.
</info>

## Pointing the name servers to DNSimple

Pointing the name servers to DNSimple provider will cause the domain to resolve using the DNS records configured in your DNSimple account.

To change the name servers to DNSimple, follow the steps in the previous section, and use the [DNSimple name servers](/articles/dnsimple-nameservers).

## Glue records

If you are adding a name server that is a child of the domain, glue records are required. In this case, you will be prompted to add the glue upon clicking <label>Change Name Servers</label>.

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/m_RaPIRNxFs?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

### What are glue records?

DNS glue records are used when a domain name uses name servers that are children of the domain name itself.

Let's say you own the domain name example.com that uses the name servers ns1.example.com and ns2.example.com. When a DNS resolver asks the TLD name server for example.com, it would respond with ns1.example.com and ns2.example.com, but we don't know which IP addresses these names correspond to. Without an IP address, the resolver can't establish a connection to the name server to ask for the IP address.

To solve this problem, TLD domain name servers let you specify IP addresses for the name servers directly in the TLD name servers. When you ask a TLD name server for the name servers of example.com, you not only get back ns1.example.com and ns2.example.com, you also get A records for ns1.example.com and ns2.example.com as part of the response. DNS resolvers then know where to go for the rest of the details.
