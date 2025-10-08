---
title: SOA Record Reference
excerpt: The structure and canonical representation of an SOA record
meta: Learn more about the structure of SOA records, their components, and key technical details.
categories:
- DNS
---

# SOA Record Reference
This article serves as a reference for the formal structure, components, and key technical details of an [SOA (Start of Authority) record](https://support.dnsimple.com/articles/soa-record/) .

## SOA record format
An SOA record is a mandatory administrative record that must exist in every DNS zone. It is defined in [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035) and has a type code of 6.

The record's data section (RDATA) is composed of several fields that provide vital administrative information about the zone:

```
<name> <TTL> IN SOA <mname> <rname> (
  <serial>
  <refresh>
  <retry>
  <expire>
  <minimum-ttl>
)
```

- `mname`: The primary name server for the zone.
- `rname`: The email address of the person responsible for the zone.
- `serial`: The serial number of the zone file.
- `refresh`: The refresh interval in seconds.
- `retry`: The retry interval in seconds.
- `expire`: The expire limit in seconds.
- `minimum-ttl`: The minimum TTL for the zone.

## SOA record components and behavior
- `mname` (**master name**): This is the hostname of the primary name server for the zone. All updates to the zone should originate here.

- `rname` (**responsible person**): This is the email address of the person responsible for the zone, with the `@` replaced by a `.` (e.g., `admin@example.com` becomes `admin.example.com`).

- `serial`: This is a version number for the zone file. **It must be updated every time a record in the zone changes**. This is used by secondary name servers to determine if they need to request a new copy of the zone data.

- `refresh`: This tells secondary name servers how often (in seconds) to check the primary server's SOA record for a new serial number.

- `retry`: If a secondary server fails to connect to the primary during a refresh, this value tells it how long (in seconds) to wait before retrying.

- `expire`: This is the upper limit (in seconds) after which a secondary server should stop responding authoritatively for the zone if it cannot refresh the data.

- `minimum-ttl`: This specifies how long (in seconds) a DNS resolver should cache a negative response (e.g., for a non-existent record) before retrying the query.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
