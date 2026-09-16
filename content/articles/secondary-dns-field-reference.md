---
title: Secondary DNS Field Reference
excerpt: Every field in a secondary DNS configuration at DNSimple, in both directions, with its limits and accepted formats.
meta: "Reference for DNSimple secondary DNS: configuration fields and limits for DNSimple as primary and as secondary, accepted address formats, and the AXFR transfer endpoint."
categories:
- Secondary DNS
---

# Secondary DNS Field Reference

### Table of Contents {#toc}

* TOC
{:toc}

---

Secondary DNS at DNSimple has two directions, and each has its own form and its own limits. This page lists every field in both, with the values DNSimple accepts.

For what secondary DNS is, see [What is Secondary DNS?](/articles/what-is-secondary-dns/). For setting it up, see [Add a secondary DNS server to DNSimple](/articles/secondary-dns/) or [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/).

## DNSimple as primary {#outbound}

Configured from the <label>Secondary DNS</label> card on the domain DNS page. DNSimple holds the zone and your other provider transfers it.

### Configuration fields {#outbound-fields}

| Field | Required | Limit | Notes |
|-------|----------|-------|-------|
| Zone Name | Yes | - | Only asked when you start from the account rather than from a domain |
| Name servers | Yes | 6 entries | One per line. Each must be a valid hostname that already resolves. Can be lower for domains registered with DNSimple |
| IPs to whitelist | Yes | 35 entries | One per line. IPv4 or IPv6 |

### Name servers {#outbound-name-servers}

These are the name servers your secondary provider will answer from. DNSimple publishes them as NS records in the zone alongside the DNSimple name servers. If the domain is registered with DNSimple, DNSimple also adds them to the domain delegation at the registry.

- Enter one per line.
- Each entry must be a valid hostname, at most 253 characters, with each label between 1 and 63 characters.
- Each entry must already resolve. DNSimple looks up every name server when you save, and rejects any that is not delegated or has no A record.
- Up to 6 entries.
- For a domain registered with DNSimple, the limit can be lower. The registry sets a maximum number of name servers for each TLD, and the DNSimple name servers count toward it.
- The whole list is stored in a single 255 character field, so 6 long hostnames may not fit even though the count is within the limit.
- Duplicate entries are removed automatically.
- DNSimple name servers are rejected, and so is any name server already listed as an NS record in the zone. DNSimple is already serving the zone from those name servers.

### IPs to whitelist {#outbound-ips}

These are the addresses your secondary provider transfers from.

- Enter one per line.
- IPv4 and IPv6 are both accepted.
- CIDR prefix notation, such as `198.51.100.0/24`, is accepted as a single entry and permits transfers from the whole range. DNSimple sends change notifications to individual addresses, not to ranges, so list the addresses your provider receives notifications on individually.
- Up to 35 entries.
- Duplicate entries are removed automatically.
- Required whenever DNSimple is acting as primary. Zone transfers are not open to everyone, so a configuration with no addresses is rejected.

> [!NOTE]
> These addresses do two jobs. They permit zone transfers, and they are also the addresses DNSimple notifies when the zone changes. A provider that transfers from one set of addresses but receives notifications on another needs both sets listed here. See [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/).

### Provider choices {#outbound-providers}

The first step of the form is choosing a provider. The built-in provider options, such as DNSMadeEasy and EasyDNS, prefill that provider's transfer addresses, and in some cases its name servers, so you do not have to look them up. Because those values come from the provider, use the prefilled settings rather than copying addresses from elsewhere.

Two further options are not providers:

- **Custom** - enter name servers and addresses by hand. Use this for any provider without a built-in option.
- **Choose from Name Server Set** - use a name server set already defined in your account.

### Transfer endpoint {#outbound-endpoint}

Your secondary provider transfers the zone from DNSimple at this endpoint. Some providers ask for a hostname and others for an address.

| Hostname | IP addresses |
|----------|--------------|
| `axfr.dnsimple.com` | `18.189.127.127`, `2600:1f16:ae2:e902:6881:5f5e:c245:887e` |

## DNSimple as secondary {#inbound}

Another provider holds the zone and DNSimple transfers it. Create the secondary zone from <label>Domain Names</label> > <label>Add new</label> > <label>Secondary DNS zone (with DNSimple as follower)</label>. Primary servers are added and linked from inside the secondary zone.

This direction is available on plans that include Secondary DNS (DNSimple as secondary). See the plan comparison in [DNSimple Plans](/articles/dnsimple-plans/).

### Secondary zone fields {#inbound-zone}

| Field | Required | Notes |
|-------|----------|-------|
| Zone name | Yes | The zone DNSimple will transfer, such as `example.com` |

A new secondary zone has no records until it is linked to at least one primary server and a transfer completes.

### Primary server fields {#inbound-primary-server}

A primary server is defined once for the account and can be linked to more than one secondary zone.

| Field | Required | Limit | Notes |
|-------|----------|-------|-------|
| Name | Yes | 254 characters | A label for your own reference, such as the provider name |
| IPv4 or IPv6 address | Yes | - | Must be a public address |
| Port number | Yes | 1 to 65535 | Defaults to 53 |

**The address must be publicly routable.** Addresses in private ranges are rejected, because DNSimple transfers from the public internet and cannot reach them. A primary on a private network needs a publicly reachable address before DNSimple can use it.

**The port defaults to 53.** Change it only if your primary offers zone transfers on another port.

## Related topics {#related}

- [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/) - what to check when a transfer stops working
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) - constraints that are not expressed as form fields
- [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/) - why the transferred zone can differ from the zone you edit

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
