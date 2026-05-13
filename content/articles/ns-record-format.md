---
title: NS Record Format
excerpt: The structure and canonical representation of an NS record.
meta: Reference for NS record format and structure. Covers the RDATA definition from RFC 1035, canonical zone file representation, and the customizable fields in DNSimple.
categories:
- DNS
---

# NS Record Format

The structure of an NS record follows the format defined in [RFC 1035, Section 3.3.11](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.11). The RDATA section is composed of one element:

| Element  | Description |
|:---------|:------------|
| NSDNAME  | A fully qualified domain name that specifies the authoritative name server for the delegated domain or zone. |

The canonical representation is:

```
NS <nsdname>
```

where `<nsdname>` is a fully qualified domain name such as `ns1.dnsimple-edge.com.`

A complete NS record in a zone file looks like:

```
example.com.  3600  IN  NS  ns1.dnsimple-edge.com.
```

For a deeper explanation of what NS records are and how they work, see [What Is an NS Record?](/articles/ns-record/)

## DNSimple fields {#dnsimple-fields}

In DNSimple, NS records for subdomains are represented by the following customizable elements:

| Element     | Description |
|:------------|:------------|
| Name        | The subdomain to delegate, without the apex domain name. DNSimple automatically appends the domain name. Use `@` to refer to the apex domain. |
| TTL         | The time-to-live in seconds. This is how long resolvers are permitted to cache the record. |
| Name Server | The fully qualified hostname of the authoritative name server. Must be a hostname, not an IP address. |

## Apex and subdomain NS records {#apex-and-subdomain}

NS records at the apex of a zone in DNSimple are system-managed and cannot be edited through the standard record editor. They reflect either the DNSimple edge name servers or your configured [vanity name servers](/articles/what-are-vanity-name-servers/). For information on updating apex zone NS records, see [Zone NS Records](/articles/zone-ns-records/).

NS records for subdomains can be created and managed through the record editor to delegate a subdomain to a separate set of name servers. See [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/) for step-by-step instructions.

## Have more questions?

If you have additional questions or need any assistance with your NS records, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.
