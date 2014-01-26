---
title: Troubleshooting Domain Resolution Issues
excerpt: 
categories:
- DNS
---

# Troubleshooting Domain Resolution Issues

In order to use DNSimple's managed DNS service your domain should resolve with DNSimple.

You can check domain resolution status using [Is It DNSimple?](http://isitdnsimple.com/). Resolution status is also displayed on the domain page in your DNSimple account.

Here's a checklist of common issues to help you in case a domain is not resolving correctly.


## Name server propagation delay

If you recently pointed the domain to DNSimple and the domain is still not resolving, please note that it may take up to 24 hours for a name server change to propagate.

You can check whether the update was successful by inspecting the WHOIS response for the domain as described in the section *Check name server list in the WHOIS response*.

The WHOIS response is normally updated in a few minutes.

If after 24 hours the domain is still not resolving, make sure the update was successfully confirmed by your current domain registrar and see the other sections in this page.


## Check the domain is using the DNSimple name servers

Ensure the domain is using [DNSimple name servers](/articles/dnsimple-nameservers).

If not, update the name server to [point to DNSimple](/articles/pointing-domain-to-dnsimple).

You can use `dig` or any other DNS tool to get the name servers for the domain.

```
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple.com.
ns3.dnsimple.com.
ns4.dnsimple.com.
```

The order of the name servers is irrelevant.


## Check the domain with +trace

The `+trace` option from `dig` shows exactly how the name is delegated.

It executes a recursive query against each of the name servers in the chain, starting from the root name servers. It's useful to debug delegation issues.

```
$ dig NS example.com +trace
```

The delegated name servers should match [DNSimple name servers](/articles/dnsimple-nameservers).

If not, update name servers to [point to DNSimple](/articles/pointing-domain-to-dnsimple). If you recently switched the update may be in progress. See the sections *Check name server list in the WHOIS response* and *Check name server propagation delay*.


## Check the domain is using *all* DNSimple name servers

DNSimple provides four name servers. You should include all the name servers to make sure DNS will resolve in case one name server temporarily unavailable for maintenance, etc.


## Check the domain is using *only* DNSimple name servers

In some cases a misconfiguration may result in DNSimple name servers listed along with third party name servers.

```
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple.com.
ns3.dnsimple.com.
ns4.dnsimple.com.
ns1.thirdparty.com.
ns2.thirdparty.com.
```

This configuration may lead to random DNS resolution issue, especially if you are using DNS custom features such as ALIAS or URL records and/or the two DNS services are not in sync. 


## Check name server list in the WHOIS response

Use a WHOIS service to run a whois query for the domain. The majority of domain registries include the name server list in the WHOIS response.

```
$ whois dnsimple.com

Domain Name: DNSIMPLE.COM
Registrar: ENOM, INC.
Whois Server: whois.enom.com
Referral URL: http://www.enom.com
Name Server: NS1.DNSIMPLE.COM
Name Server: NS2.DNSIMPLE.COM
Name Server: NS3.DNSIMPLE.COM
Name Server: NS4.DNSIMPLE.COM
Status: clientTransferProhibited
Updated Date: 13-jun-2013
Creation Date: 07-apr-2010
Expiration Date: 07-apr-2018
```

The name server should match DNSimple name servers and the response returned from `dig`. If not, make sure to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple).

If you recently updated the domain, see the section *Name server change propagation*.


## Contact us

Please be sure to check the common issues in this checklist to narrow down the problem.

If the problem is not in this list or you have any other questions, please [contact us](/contact).

