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
| Name servers | Yes | 6 entries | One per line. Each must be a valid host name |
| IPs to whitelist | Yes | 35 entries | One per line. IPv4 or IPv6 |

### Name servers {#outbound-name-servers}

These are the name servers your secondary provider will answer from. They are published in the zone alongside the DNSimple name servers.

- Enter one per line.
- Each entry must be a valid host name, at most 253 characters, with each label between 1 and 63 characters.
- Up to 6 entries.
- The whole list is stored in a single 255 character field, so 6 long host names may not fit even though the count is within the limit.
- Duplicate entries are removed automatically.
- DNSimple name servers are rejected. DNSimple is already serving the zone, so listing its own name servers here is not valid.

### IPs to whitelist {#outbound-ips}

These are the addresses your secondary provider transfers from.

- Enter one per line.
- IPv4 and IPv6 are both accepted.
- CIDR prefix notation is accepted, so a range such as `198.51.100.0/24` is valid as a single entry.
- Up to 35 entries.
- Duplicate entries are removed automatically.
- Required whenever DNSimple is acting as primary. Zone transfers are not open to everyone, so a configuration with no addresses is rejected.

> [!NOTE]
> These addresses do two jobs. They permit zone transfers, and they are also the addresses DNSimple notifies when the zone changes. A provider that transfers from one set of addresses but receives notifications on another needs both sets listed here. See [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/).

### Provider choices {#outbound-providers}

The first step of the form is choosing a provider. DNSimple ships settings for DNSMadeEasy, Dyn Managed, Dyn Standard, and EasyDNS, which prefill that provider's transfer addresses, and in some cases its name servers, so you do not have to look them up. Because those values come from the provider, use the prefilled settings rather than copying addresses from elsewhere.

Two further options are not providers:

- **Custom** - enter name servers and addresses by hand. Use this for any provider without a built-in option.
- **Choose from Name Server Set** - use a name server set already defined in your account.

### Transfer endpoint {#outbound-endpoint}

Your secondary provider transfers the zone from DNSimple at this endpoint. Some providers ask for a host name and others for an address.

| Host name | IP addresses |
|-----------|--------------|
| `axfr.dnsimple.com` | `18.189.127.127`, `2600:1f16:ae2:e902:6881:5f5e:c245:887e` |

## DNSimple as secondary {#inbound}

Configured from <label>Secondary Zones</label> and <label>Primary Servers</label> in your account. Another provider holds the zone and DNSimple transfers it.

This direction requires a plan that includes it. See [DNSimple Plans](/articles/dnsimple-plans/).

### Secondary zone fields {#inbound-zone}

| Field | Required | Notes |
|-------|----------|-------|
| Zone name | Yes | The zone DNSimple will transfer, such as `example.com` |

A secondary zone answers queries only once it is linked to at least one primary server and a transfer has completed.

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
