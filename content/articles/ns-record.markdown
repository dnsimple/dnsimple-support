---
title: What's an NS record?
excerpt: What an NS record is, and how to create NS records with DNSimple.
categories:
- DNS
---

# What's an NS record?

An NS record delegates a subdomain to a set of name servers. Whenever you delegate a domain to DNSimple, the TLD authorities place NS records for your domain in the TLD name servers pointing to us. For example, there are the following entries delegating dnsimple.com to our name servers in the .com name servers:

~~~
dnsimple.com. 172800 IN NS ns1.dnsimple.com.
dnsimple.com. 172800 IN NS ns2.dnsimple.com.
dnsimple.com. 172800 IN NS ns3.dnsimple.com.
dnsimple.com. 172800 IN NS ns4.dnsimple.com.
~~~

We automatically publish NS records in our authoritative [name servers](../dnsimple-nameservers/) for each domain we're authoritative for. These NS records will appear in the System Records section of each domain's Manage page, and will either be our default name servers (ns1.dnsimple.com through ns4.dnsimple.com), or your vanity name servers if you have vanity name servers.

If you want to delegate a registered domain name to a different DNS provider, you can do that through the domain's Manage page. You can't remove or change the NS records for your domain in the Advanced Editor page.
