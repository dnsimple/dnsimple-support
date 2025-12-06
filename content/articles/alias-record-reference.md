---
title: ALIAS Record Reference
excerpt: Learn the structure, implementation, and technical details of DNSimple's ALIAS records. Understand how ALIAS records work, when to use them instead of CNAME, and dynamic resolution.
meta: Learn more about the structure, restrictions, and technical details for ALIAS records.
categories:
- DNS
---

# ALIAS Record Reference

This article serves as a reference for the structure, implementation, and key characteristics of DNSimple's proprietary [ALIAS record](/articles/alias-record/).

## ALIAS record format
The ALIAS record is a proprietary record type developed by DNSimple and is not defined by any standard RFC. It is a "virtual" record that is dynamically resolved by DNSimple's name servers.

In the DNSimple record editor, an ALIAS record is represented by the following configurable elements:


| Element | Description |
|:--------|:-------------------------------------------------------|
|Name| The host name for the record, without the domain name. This is generally referred to as a "subdomain".|
|TTL| The [time-to-live](/articles/what-is-ttl/) in seconds. This is the amount of time the record is allowed to be cached by a resolver.|
|Content| The fully-qualified domain-name (FQDN) that the ALIAS record maps to.|


## Technical implementation

When a DNS resolver queries a domain with an ALIAS record, DNSimple's name servers perform a dynamic, real-time lookup of the hostname specified in the **Content** field. They then return the resulting [A](/articles/a-record/) (IPv4) or [AAAA](/articles/aaaa-record/) (IPv6) records to the resolver.

From the resolver's perspective, the domain appears to have standard A or AAAA records. The proprietary nature of the ALIAS record is transparent to the rest of the Internet's DNS infrastructure.

## Key characteristics

**Coexists with other records:** Unlike a [CNAME record](/articles/cname-record/), an ALIAS record can coexist with other record types (e.g., [MX](/articles/mx-record/), [TXT](/articles/txt-record/), [NS](/articles/ns-record/) records) on the same hostname.

**Apex domain support:** The ALIAS record is primarily used to provide CNAME-like functionality on the root domain (or apex zone), like `example.com`, which is not possible with standard CNAME records. Learn more about the [differences among A, CNAME, ALIAS, and URL records](/articles/differences-between-a-cname-alias-url/) in our documentation. 

**Dynamic resolution:** The IP address that the ALIAS record resolves to is not static. It is determined dynamically by DNSimple's name servers each time the record is queried, reflecting any changes to the target hostname's IP address.

## Have more questions?
If you have additional questions or need any assistance with your ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
