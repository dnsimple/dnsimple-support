---
title: Pointing a Domain at Another Registrar to DNSimple
excerpt: 
categories:
- DNS
---

# Pointing a Domain at Another Registrar to DNSimple

First, find the place on your domain registrar's web site where you can enter our name servers.

To switch to our DNS Anycast network, enter the [DNSimple name servers](/articles/dnsimple-nameservers):

- ns1.dnsimple.com
- ns2.dnsimple.com
- ns3.dnsimple.com
- ns4.dnsimple.com

## Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).

