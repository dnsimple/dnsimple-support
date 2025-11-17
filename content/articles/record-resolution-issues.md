---
title: Troubleshooting Record Resolution Issues
excerpt: This article contains instructions to check record resolution issues.
categories:
- DNS
---

# Troubleshooting Record Resolution Issues

The following is checklist of common issues to check if a record isn't resolving correctly.

## Check the domain resolution status

To use our [DNS hosting service](/articles/dns-hosting/), the domain should resolve with DNSimple. Check [this list of common domain resolution errors](/articles/domain-resolution-issues/) to determine if the domain is resolving with DNSimple.

## Check the record with +trace

The `+trace` option from `dig` shows exactly how the name is delegated.

It executes a recursive query against each of the name servers in the chain, starting from the root name servers. It's useful for debugging delegation issues.

~~~
$ dig CNAME www.dnsimple.com +trace

;; global options: +cmd
.           6438    IN  NS  k.root-servers.net.
.           6438    IN  NS  l.root-servers.net.
...
;; Received 717 bytes from 1.1.1.1#53(1.1.1.1) in 42 ms

com.            172800  IN  NS  j.gtld-servers.net.
com.            172800  IN  NS  g.gtld-servers.net.
...
;; Received 1176 bytes from 199.9.14.201#53(b.root-servers.net) in 86 ms

dnsimple.com.       172800  IN  NS  ns1.dnsimple.com.
dnsimple.com.       172800  IN  NS  ns2.dnsimple-edge.net.
dnsimple.com.       172800  IN  NS  ns3.dnsimple.com.
dnsimple.com.       172800  IN  NS  ns4.dnsimple-edge.org.
...
;; Received 842 bytes from 192.33.14.30#53(b.gtld-servers.net) in 38 ms

www.dnsimple.com.   3600    IN  CNAME   dnsimple.com.
;; Received 59 bytes from 162.159.27.4#53(ns4.dnsimple.com) in 34 ms
~~~

In the resulting query chain, you can see each hop to resolve the CNAME. 

1. The root name servers are queried. 
1. The query is passed along to the `.com` name servers.
1. The query reaches [DNSimple's name servers](/articles/dnsimple-nameservers/). 
1. DNSimple returns the CNAME record. 

If DNSimple's name servers are not present in this trace, you need to [point to DNSimple](/articles/pointing-domain-to-dnsimple/).

## Check the record propagation delay

If you recently changed a record, it may take a while for the change to propagate. This is especially true if the record has been cached by your local ISP.

You usually can bypass a propagation delay by passing a custom name server in the `dig` call.

The following command checks the DNS record against the `ns1.dnsimple.com` name server:

```
$ dig www.dnsimple.com @ns1.dnsimple.com
```

If you get the expected response, the record has been updated in our system, but the changes still need to propagate. They should be visible after the TTL period.

You can check it against any of [DNSimple's name servers](/articles/dnsimple-nameservers/).

## Check the record update delay

When you change a record in our system, the changes are published almost immediately.

Our update queue may sometimes take a bit longer. Wait a few minutes and check again.

Follow our status page or X account for updates. We publish status updates when there's a known issue with our update queue.

## Have more questions?   
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
