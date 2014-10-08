---
title: What is a NS Record?
excerpt: 
categories:
- DNS
---

# What is a NS Record?

An NS record is used to delegate a subdomain to a set of name servers. Whenever you delegate a domain to DNSimple the TLD authorities place NS records for your domain in the TLD name servers pointing to us. For example, in the com name servers there are the following entries delegating dnsimple.com to our name servers:

~~~
dnsimple.com. 172800 IN NS ns1.dnsimple.com.
dnsimple.com. 172800 IN NS ns2.dnsimple.com.
dnsimple.com. 172800 IN NS ns3.dnsimple.com.
dnsimple.com. 172800 IN NS ns4.dnsimple.com.
~~~

We also automatically publish NS records in our authoritative name servers for each domain we are authoritative for. These NS records will appear in the System Records section of each domain's Manage page, and will either be our default name servers (ns1.dnsimple.com through ns4.dnsimple.com) or your vanity name servers if you have vanity name servers.

If you would like to delegate a registered domain name to a different DNS provider, then you can do that through the domain's Manage page. You cannot remove or change the NS records for your domain in the Advanced Editor page.
