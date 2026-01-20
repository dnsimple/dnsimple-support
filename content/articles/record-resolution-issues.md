---
title: Troubleshooting Record Resolution Issues
excerpt: This article contains instructions to check record resolution issues.
meta: Troubleshoot DNS record resolution issues. Learn how to check domain resolution status, use dig +trace, and diagnose common DNS record problems.
categories:
- DNS
---

# Troubleshooting Record Resolution Issues

The following is a list of common issues to check if a record isn't resolving correctly.

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

Check our [status page](https://dnsimple.statuspage.io) for updates. We publish status updates when there's a known issue with our update queue.

## Check for missing A or AAAA records at the apex domain

If you receive an error like "No address associated with hostname" when using `ping` or other tools, it typically means the domain is properly delegated to DNSimple, but there's no [A record](/articles/a-record/) or [AAAA record](/articles/aaaa-record/) configured for the apex domain (the root domain, e.g., `example.com`).

This can happen when:

- You have DNS records for subdomains (like `www.example.com`) but not for the root domain

- You only have [MX records](/articles/mx-record/) for email but no A record for web traffic

- The domain was recently set up and the A record hasn't been added yet

- You have a wildcard record (like `*.example.com`) but no explicit record for the apex domain

> [!WARNING]**Important:**
> Wildcard DNS records (e.g., `*.example.com`) do **not** match the apex domain (`example.com`). If you have a wildcard ALIAS or CNAME record for subdomains, you must also add a separate record for the apex domain itself if you want the root domain to resolve.


### How to check

Use `dig` to query for A and AAAA records at the apex domain:

```
$ dig example.com A +short

$ dig example.com AAAA +short
```

If both commands return no results, you need to add an A or AAAA record for the apex domain.

You can also query DNSimple's name servers directly to verify the record doesn't exist in our system:

```
$ dig example.com A @ns1.dnsimple.com +short

$ dig example.com AAAA @ns1.dnsimple.com +short
```

### How to fix

1. **If you want to point the apex domain to a specific IP address:** Add an [A record](/articles/a-record/) (for IPv4) or [AAAA record](/articles/aaaa-record/) (for IPv6) with the **Name** field left blank or set to `@`.

2. **If you want to point the apex domain to a hostname (like a cloud service):** Add an [ALIAS record](/articles/alias-record/) with the **Name** field left blank or set to `@`. This is necessary because [CNAME records cannot be used at the apex domain](/articles/cname-record/) or if you have other records like MX records.

3. **If you want to redirect the apex domain to another URL:** Add a [URL record](/articles/url-record/) with the **Name** field left blank or set to `@`.

> [!NOTE]
> If you're using tools like `ping` to test your domain, keep in mind that `ping` requires an A or AAAA record for IP address resolution. Both ALIAS records and URL records resolve to A and/or AAAA records, so `ping` will work correctly with these record types.

   > **ALIAS records**: DNSimple's name servers dynamically resolve ALIAS records to A and/or AAAA records at query time. From the resolver's perspective, the domain appears to have standard A or AAAA records, so `ping` will work as expected.

   > **URL records**: URL records automatically configure underlying A and AAAA records that point to DNSimple's redirector service IP addresses. These A/AAAA records enable DNS resolution, while the HTTP redirect happens at the HTTP/HTTPS layer.

> The DNS standard requires A or AAAA records for IP address resolution (RFC 1035), and both ALIAS and URL records provide these records. However, the redirector service blocks ICMP traffic (used by `ping`), so URL records cannot be tested with `ping`. For more information, see [What Is an ALIAS Record?](/articles/alias-record/) and [Differences Among A, CNAME, ALIAS, and URL Records](/articles/differences-between-a-cname-alias-url/).

## Have more questions?   
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
