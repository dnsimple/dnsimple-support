---
title: What's an NS Record?
excerpt: What an NS record is, and how to create NS records with DNSimple.
meta: Learn what NS records are, their importance in DNS management, and how to easily create and manage them using DNSimple's user-friendly platform.
categories:
- DNS
---

# What's an NS Record?

An NS record delegates a subdomain to a set of name servers. Whenever you delegate a domain to DNSimple, the TLD authorities place NS records for your domain in the TLD name servers pointing to us. For example, there are the following entries delegating dnsimple.com to our name servers in the .com name servers:

~~~
dnsimple.com. 172800 IN NS ns1.dnsimple.com.
dnsimple.com. 172800 IN NS ns2.dnsimple-edge.net.
dnsimple.com. 172800 IN NS ns3.dnsimple.com.
dnsimple.com. 172800 IN NS ns4.dnsimple-edge.org.
~~~

We automatically publish NS records in our authoritative [name servers](/articles/dnsimple-nameservers/) for each domain we're authoritative for. These NS records will appear in the System Records section of each domain's Manage page, and will either be our default name servers, or your vanity name servers if you have vanity name servers.

If you want to delegate a registered domain name to a different DNS provider, you can do that through the domain's Manage page. You can't remove or change the NS records for your domain in the Advanced Editor page. Click [here](/articles/zone-ns-records/) to read about how to update NS records for the zone of a hosted domain.
