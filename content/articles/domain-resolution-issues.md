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

The following is a list of common issues to check if a domain is not resolving correctly.

## Check the domain with `+trace` {#check-the-domain-with-trace}

The `+trace` option from `dig` shows exactly how the name is delegated.

It executes a recursive query against each of the name servers in the chain, starting from the root name servers. It is useful for debugging delegation issues.

```
$ dig NS example.com +trace
```

The delegated name servers should match [DNSimple name servers](/articles/dnsimple-nameservers/).

If they do not, update the name servers to [point to DNSimple](/articles/pointing-domain-to-dnsimple/). 

If you recently switched, the update may be in progress. See [Check name server list in the WHOIS response](/articles/domain-resolution-issues/#check-name-server-list-in-the-whois-response) and [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/) for propagation details.

## Check that the domain is using *all* DNSimple name servers {#check-that-the-domain-is-using-all-dnsimple-name-servers}

DNSimple provides four name servers. All four should be listed to ensure [redundancy and availability](/articles/name-server-redundancy/), so DNS will continue to resolve if one server is temporarily unavailable due to maintenance or an incident.

**DNSimple name servers are**:

`ns1.dnsimple.com` 
`ns2.dnsimple-edge.net`  
`ns3.dnsimple.com` 
`ns4.dnsimple-edge.org`

## Check that the domain is using *only* DNSimple name servers {#check-that-the-domain-is-using-only-dnsimple-name-servers}

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

This configuration may lead to random DNS resolution issues, especially if you are using DNSimple DNS custom features like ALIAS or URL records, and/or the two DNS services are not in sync.

> [!NOTE]
> When you have Secondary DNS enabled, your domain should not point only to DNSimple name servers; both DNSimple name servers and your Secondary DNS provider's name servers should be listed.

## Check name server list in the WHOIS response {#check-name-server-list-in-the-whois-response}

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

The name server should match DNSimple name servers and the response returned from `dig`. If it does not, make sure to [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple/).

If you recently updated the domain, see [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/) for information about propagation delays.

## DNSSEC considerations {#dnssec-considerations}

If you switched DNS providers recently, please read our [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/) article to understand how DNSSEC may impact on your domain's DNS resolution.

If you transferred your domain from another registrar, check our suggestions at the [Preparing DNS Before Transferring a Domain Into DNSimple > DNSSEC considerations](/articles/before-transferring-domain/#dnssec-considerations) article to pinpoint potential issues.

> [!INFO]
> **If your domain is properly delegated to DNSimple but specific records are not resolving**, see [Troubleshooting Record Resolution Issues](/articles/record-resolution-issues/) for information about:
> - Querying DNSimple name servers directly to bypass caching
> - DNS propagation delays and TTL values
> - Verifying records exist in our system
> - Troubleshooting specific record types
> - Checking for missing A or AAAA records at the apex domain


## Common error messages and what they mean {#common-error-messages-and-what-they-mean}

When troubleshooting domain resolution, you may encounter specific error messages. Here is what they typically indicate:

**"No address associated with hostname" or "Name or service not known"**
- Usually means there is no A or AAAA record for the queried hostname
- Check if the record exists in your DNSimple account
- Verify you are querying the correct hostname (e.g., `www.example.com` vs `example.com`)

**"NXDOMAIN" or "Non-existent domain"**
- The domain or hostname does not exist in DNS
- Verify the domain is properly delegated to DNSimple
- Check that you are using the correct domain name (typos are common)

**"SERVFAIL" or "Server failure"**
- Often indicates a DNSSEC validation failure
- Check if DNSSEC is enabled and properly configured
- Verify DS records are correct if using DNSSEC
- See [Troubleshooting DNSSEC Configurations](/articles/troubleshooting-dnssec-configurations/) for more details

**"REFUSED"**
- The DNS server refused to answer the query
- Usually indicates a configuration issue with the name servers
- Verify the domain is properly delegated

**"Timeout"**
- The DNS query did not receive a response in time
- May indicate network issues or name server problems
- Try querying a different DNSimple name server
- Check [DNSimple's status page](https://dnsimple.statuspage.io) for known issues

## Have more questions? {#have-more-questions}
If you have additional questions or need any assistance with your domain resolution, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.   
