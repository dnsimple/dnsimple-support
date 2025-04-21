---
title: What is Time-to-live
excerpt: In DNS, resource records are held in cache on a resolver for an amount of time specified by time-to-live (TTL).
meta: Learn what Time-to-live is TTL, and how to manage it in your DNSimple domain DNS settings to control caching of your DNS records lookup.
---


# What is Time-to-live?

In DNS, resource records are held in cache on a resolver for an amount of time specified by time-to-live (TTL). This is a numeric value stored as a 32-bit signed integer and represents the amount of time in seconds that the record’s content can be considered valid.

## Record Lifetime
When a client tries to connect to a domain, the resolver contacts the authoritative DNS server and receives the resource record associated with the domain. The record is received, and a timestamp is recorded. Using the timestamp in conjunction with the TTL value of the record, an effective TTL value is calculated as follows:

```
TTLeffective = TTLinitial − elapsedTime
```

The record is kept in cache on the resolver and is served to clients that request the same record while the effective TTL is non-zero. If the effective TTL reaches zero, the record expires and is destroyed from the resolver’s cache. The next time a client communicates with the resolver for that record, a fresh copy of the record is requested from the authoritative DNS server.

## Record Forwarding

In some setups, one resolver might get a record forwarded to it from another resolver. In this case, the TTL value that is forwarded is the current effective TTL, and not the initial TTL value.
TTL in DNSimple

DNSimple’s default TTL value is 1 hour, or 3600 seconds, but supports TTL values from 1 minute up to 3 days. When changes are anticipated, lowering a record’s TTL value helps it propagate faster but results in worse performance for clients. After changes are made, we recommend increasing the TTL back to at least 1 hour to ensure more efficient cache results.
![screenshot of configuring TTL for a DNS record](/files/ttl-configure.png)

TTL values in DNSimple can be set up in the dashboard when you create a record:
![screenshot of how to manage TTL for DNS records](/files/ttl-manage.png)

And can be edited when changing a record in the dashboard:
![screenshot of editing your TTL for existing DNS record](/files/ttl-regions.png)



