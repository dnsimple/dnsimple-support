---
title: POOL Record Reference
excerpt: Structure, implementation, and key characteristics of DNSimple's proprietary POOL record
meta: Learn more about the structure of POOL records, their key characteristics, and technical implementation.
categories:
- DNS
---
# POOL Record Reference
This article serves as a reference for the structure, implementation, and key characteristics of DNSimple's proprietary [POOL record](/articles/pool-record/).

## POOL record format
A POOL record is a proprietary record type developed by DNSimple and is not defined by any standard RFC. It is a virtual record that is dynamically resolved by DNSimple's name servers.

In the DNSimple record editor, a POOL record is represented by the following configurable elements:

| Element | Description | 
|:---|:---|
| Name | The host name for the record, without the domain name. This is generally referred to as "subdomain". |
| TTL | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver. |
| Content | The fully-qualified domain name (FQDN) that the POOL record maps to. |

## Technical implementation
When a DNS resolver queries a domain with a POOL record, DNSimple's [name servers](/articles/dnsimple-nameservers/) randomly select one of the target hostnames defined within your POOL record. It then returns this randomly chosen hostname to the requesting resolver as if it were a standard CNAME record.

From the perspective of the resolver, the domain appears to have a CNAME record. The proprietary nature of the POOL record is transparent to the rest of the internet's DNS infrastructure.

## Key characteristics
**Proprietary record**: The POOL record is a DNSimple-specific record type and is not supported by other DNS hosting providers.

**Random selection**: When a DNS resolver queries a domain with a POOL record, DNSimple's name servers randomly select one of the target hostnames you've defined within your POOL record.

**Dynamic resolution**: The IP address that the POOL record resolves to is not static. It is determined dynamically by DNSimple's name servers each time the record is queried, reflecting any changes to the target hostname's IP address.

## Have more questions?
If you have additional questions or need any assistance with your TXT records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
