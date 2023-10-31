---
title: Troubleshooting Domain Resolution Issues
excerpt: This article contains instructions to check and debug domain resolution issues.
categories:
- DNS
---

# Troubleshooting Domain Resolution Issues

To use our [DNS hosting service](/articles/dns-hosting), the domain should resolve with DNSimple.

You can check the domain resolution status using [Is It DNSimple?](http://isitdnsimple.com/). The resolution status is also displayed on the domain page in your DNSimple account.

The following is a checklist of common issues to help you if a domain isn't resolving correctly.


## Name server propagation delay

If you recently pointed the domain to DNSimple and the domain still isn't resolving, remember it may take up to 24 hours for a name server change to propagate.

You can check if the update was successful by inspecting the WHOIS response for the domain as described in the section *Check name server list in the WHOIS response*.

The WHOIS response usually updates within a few minutes.

If after 24 hours the domain still isn't resolving, make sure the update was successfully confirmed by your current domain registrar, and see the other sections in this page.


## Check that the domain is using the DNSimple name servers

Ensure the domain is using [DNSimple name servers](/articles/dnsimple-nameservers).

If not, update the name server to [point to DNSimple](/articles/pointing-domain-to-dnsimple).

You can use `dig` or any other DNS tool to get the name servers for the domain.

~~~
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple-edge.net.
ns3.dnsimple.com.
ns4.dnsimple-edge.org.
~~~

The order of the name servers is irrelevant.


## Check the domain with +trace

The `+trace` option from `dig` shows exactly how the name is delegated.

It executes a recursive query against each of the name servers in the chain, starting from the root name servers. It's useful for debugging delegation issues.

~~~
$ dig NS example.com +trace
~~~

The delegated name servers should match [DNSimple name servers](/articles/dnsimple-nameservers).

If not, update the name servers to [point to DNSimple](/articles/pointing-domain-to-dnsimple). If you recently switched, the update may be in progress. See the sections *Check name server list in the WHOIS response* and *Check name server propagation delay*.


## Check that the domain is using *all* DNSimple name servers

DNSimple provides four name servers. You should include all the name servers to make sure DNS will resolve if one name server is temporarily unavailable due to maintenance, etc.


## Check that the domain is using *only* DNSimple name servers

In some cases, a misconfiguration may result in DNSimple name servers listed along with third party name servers.

~~~
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple-edge.net.
ns3.dnsimple.com.
ns4.dnsimple-edge.org.
ns1.thirdparty.com.
ns2.thirdparty.com.
~~~

This configuration may lead to random DNS resolution issues, especially if you're using DNS custom features like ALIAS or URL records, and/or the two DNS services aren't in sync.

<note>
When you have Secondary DNS enabled, your domain **should not** point only to DNSimple name servers: both DNSimple name servers and your Secondary DNS provider's name servers should be listed.
</note>


## Check name server list in the WHOIS response

Use a WHOIS service to run a whois query for the domain. The majority of domain registries include the name server list in the WHOIS response.

~~~
$ whois dnsimple.com

Domain Name: DNSIMPLE.COM
Registrar: ENOM, INC.
Whois Server: whois.enom.com
Referral URL: http://www.enom.com
Name Server: NS1.DNSIMPLE.COM
Name Server: NS2.DNSIMPLE-EDGE.NET
Name Server: NS3.DNSIMPLE.COM
Name Server: NS4.DNSIMPLE-EDGE.ORG
Status: clientTransferProhibited
Updated Date: 13-jun-2013
Creation Date: 07-apr-2010
Expiration Date: 07-apr-2018
~~~

The name server should match DNSimple name servers and the response returned from `dig`. If not, make sure to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple).

If you recently updated the domain, see the section *Name server change propagation*.

## Ensure the DS record is removed

If you switched DNS providers and had DNSSEC enabled, you must [remove the previous DS record first](/articles/ds-records-changing-dns).

If you transferred your domain from another registrar where you had DNSSEC enabled, you may need to [contact us](https://dnsimple.com/contact) to have the DS record removed.

## Contact us

If the problem isn't in this list, or you have other questions, please [contact us](https://dnsimple.com/contact).
