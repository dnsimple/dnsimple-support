---
title: What Is an SOA Record?
excerpt: What an SOA record is and how to add SOA records in DNSimple.
meta: Learn about DNS SOA records, their importance in DNS management, and how to easily add and configure them in DNSimple for optimal domain performance.
categories:
- DNS
---

# DNS SOA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is an SOA record?
An **SOA** record (record type 6), which stands for **Start of Authority** record, is a mandatory DNS record that must be present in every DNS zone. It acts as the definitive administrative blueprint for the zone, providing essential meta-information about the zone itself and how it should be handled by other DNS servers and resolvers.

The SOA record marks the exact cutover point where authority for a domain is delegated from its parent domain. For example, if `mycompany.com` is delegated to DNSimple's name servers, we must include an SOA record for `mycompany.com` in our authoritative DNS records. This record declares that DNSimple is the primary authoritative source for all information within the `mycompany.com` zone.

## DNSimple's role in SOA management
For every domain you add to DNSimple, we automatically create and manage its SOA record. This record is visible to you as a [System Record](/articles/system-records/) in your domain's zone, indicating its fundamental, system-managed nature.

## Dissecting the SOA record: key administrative details
The SOA record contains several vital pieces of information that govern how the zone behaves across the internet.

An example breakdown of the typical components in an SOA record:

```
ns1.dnsimple.com admin.dnsimple.com 2013022001 86400 7200 604800 300
```

### Examining each element:
**Primary name server (MNAME - master name**):
- `ns1.dnsimple.com` (or the first name server in your vanity name server list).
- This specifies the primary authoritative name server for this zone. All updates to the zone should originate here.

**Responsible party (RNAME - responsible person):**
- `admin.dnsimple.com` (representing `admin@dnsimple.com`).
- This is the email address of the person responsible for the domain's zone. The `@` symbol in the email address is replaced with a `.` in the SOA record format.

**Serial number (SERIAL):**
`2013022001`
- This is a version number for the zone file. It's a timestamp (or a simple incrementing number) that must be updated every time any record in the zone changes. This is crucial for secondary DNS servers, as they compare this serial number to determine if they need to request a fresh copy of the zone data (a zone transfer).

**Refresh interval (REFRESH):**
- `86400` seconds (1 day)
- This value tells secondary name servers how frequently they should check the primary name server's SOA record for a new serial number.

**Retry interval (RETRY):**
- `7200` seconds (2 hours)
- If a secondary server fails to connect to the primary during a refresh attempt, this value specifies how long it should wait before retrying the refresh.

**Expire limit (EXPIRE):**
- `604800` seconds (1 week)
- If a secondary server repeatedly fails to refresh the zone after the RETRY interval, this is the upper limit, in seconds, after which the secondary server should stop responding authoritatively for the zone. This prevents stale data from being served indefinitely.

**Negative result TTL (MINIMUM TTL):**
- `300` seconds (5 minutes)
- This value, also known as the minimum TTL, specifies how long a DNS resolver should cache a negative response (e.g., if a requested record or subdomain does not exist) before retrying the query. This prevents excessive queries for non-existent records.

## Why SOA records are crucial for zone health
SOA records are fundamental because they provide the necessary operational parameters for zone transfers, cache management, and error handling across the global DNS infrastructure. They ensure all DNS servers serving your domain's information are properly synchronized and behave predictably.

Because of their critical and administrative nature, the values within your SOA record are typically system-managed by DNSimple. They cannot be configured through the standard record editor. This ensures optimal settings and consistent operation for your domain's DNS.

The DNS SOA record is specified by [RFC 1035, Section 3.3.13](https://datatracker.ietf.org/doc/html/rfc1035%23section-3.3.13). Further details regarding negative caching are found in [RFC 2308](https://datatracker.ietf.org/doc/html/rfc2308).

## Managing SOA records in DNSimple
As SOA records are essential for the proper functioning and synchronization of your DNS zone, DNSimple automatically configures and manages these records for every domain hosted with us. The specific values are optimized for performance and reliability.

You cannot manually configure the individual fields of the SOA record in the record editor. DNSimple handles all necessary updates automatically, like incrementing the serial number whenever you make changes to your domain's DNS records.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
