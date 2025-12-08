---
title: Troubleshooting Domain Resolution Issues
excerpt: This article contains instructions to check and debug domain resolution issues.
meta: Explore this comprehensive guide to debug and resolve domain resolution issues effectively, ensuring your website is accessible and functioning properly.
categories:
- DNS
---

# Troubleshooting Domain Resolution Issues

To use our [DNS hosting service](/articles/dns-hosting/), the domain should resolve with DNSimple.

The resolution status is displayed in your DNSimple account:

- If the domain is registered with DNSimple, open the domain page and check the **Delegation card** under the **Registration tab** to see which name servers are currently set.
- If the domain is registered elsewhere, you can confirm delegation using `dig` or a [WHOIS lookup](https://dnsimple.com/whois) (see below).

The following is a list of common issues to check if a domain isn't resolving correctly.

## Check the domain with `+trace`

The `+trace` option from `dig` shows exactly how the name is delegated.

It executes a recursive query against each of the name servers in the chain, starting from the root name servers. It's useful for debugging delegation issues.

```
$ dig NS example.com +trace
```

The delegated name servers should match [DNSimple name servers](/articles/dnsimple-nameservers/).

If they don't, update the name servers to [point to DNSimple](/articles/pointing-domain-to-dnsimple/). 

If you recently switched, the update may be in progress. See [Check name server list in the WHOIS response](/articles/domain-resolution-issues/#check-name-server-list-in-the-whois-response) and [Check name server propagation delay](/articles/troubleshoot-dnsimple-name-servers/#name-server-propagation-delay/).

## Check that the domain is using *all* DNSimple name servers

DNSimple provides four name servers. All four should be listed to ensure redundancy and availability, so DNS will continue to resolve if one server is temporarily unavailable due to maintenance or an incident.

**DNSimple name servers are**:

`ns1.dnsimple.com` 
`ns2.dnsimple-edge.net`  
`ns3.dnsimple.com` 
`ns4.dnsimple-edge.org`

## Check that the domain is using *only* DNSimple name servers

In some cases, a misconfiguration may result in DNSimple name servers listed along with third party name servers.

Problematic configuration example:

```
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple-edge.net.
ns3.dnsimple.com.
ns4.dnsimple-edge.org.
ns1.thirdparty.com.
ns2.thirdparty.com.
```

This configuration may lead to random DNS resolution issues, especially if you're using DNSimple DNS custom features like ALIAS or URL records, and/or the two DNS services aren't in sync.

<note>
When you have Secondary DNS enabled, your domain should not point only to DNSimple name servers; both DNSimple name servers and your Secondary DNS provider's name servers should be listed.
</note>

## Check name server list in the WHOIS response

Use a [WHOIS service](https://dnsimple.com/whois) to run a whois query for the domain. The majority of domain registries include the name server list in the WHOIS response.

```
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
```

The name server should match DNSimple name servers and the response returned from `dig`. If it doesn't, make sure to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple/).

If you recently updated the domain, see the **Name server change propagation** section in [Troubleshooting DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/).

## Check for missing A or AAAA records at the apex domain

If you receive an error like "No address associated with hostname" when using `ping` or other tools, it typically means the domain is properly delegated to DNSimple, but there's no [A record](/articles/a-record/) or [AAAA record](/articles/aaaa-record/) configured for the apex domain (the root domain, e.g., `example.com`).

This can happen when:
- You have DNS records for subdomains (like `www.example.com`) but not for the root domain
- You only have [MX records](/articles/mx-record/) for email but no A record for web traffic
- The domain was recently set up and the A record hasn't been added yet
- You have a wildcard record (like `*.example.com`) but no explicit record for the apex domain

<warning>
**Important:** Wildcard DNS records (e.g., `*.example.com`) do **not** match the apex domain (`example.com`). If you have a wildcard ALIAS or CNAME record for subdomains, you must also add a separate record for the apex domain itself if you want the root domain to resolve.
</warning>

### How to check

Use `dig` to query for A and AAAA records at the apex domain:

```
$ dig example.com A +short
$ dig example.com AAAA +short
```

If both commands return no results, you need to add an A or AAAA record for the apex domain.

### How to fix

1. **If you want to point the apex domain to a specific IP address:** Add an [A record](/articles/a-record/) (for IPv4) or [AAAA record](/articles/aaaa-record/) (for IPv6) with the **Name** field left blank or set to `@`.

2. **If you want to point the apex domain to a hostname (like a cloud service):** Add an [ALIAS record](/articles/alias-record/) with the **Name** field left blank or set to `@`. This is necessary because [CNAME records cannot be used at the apex domain](/articles/cname-record/) if you have other records like MX records.

3. **If you want to redirect the apex domain to another URL:** Add a [URL record](/articles/url-record/) with the **Name** field left blank or set to `@`.

<note>
If you're using tools like `ping` to test your domain, keep in mind that `ping` requires an A or AAAA record. Even if your domain is properly configured for web traffic (via ALIAS or URL records), `ping` may still show "No address associated with hostname" if there's no direct A record. This doesn't necessarily mean your website won't work—web browsers will resolve ALIAS and URL records correctly.
</note>

## Ensure the DS record is removed

If you switched DNS providers and had DNSSEC enabled, you must [remove the previous DS record first](/articles/ds-records-changing-dns/).

If you transferred your domain from another registrar where you had DNSSEC enabled, you may need to [contact us](https://dnsimple.com/contact) to have the DS record removed.

## Have more questions?   
If you have additional questions or need any assistance with your domain resolution, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.   
