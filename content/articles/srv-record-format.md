---
title: SRV Record Format and Components Reference
excerpt: The structure and canonical representation of an SRV record
meta: Learn more about the structure of SRV records, their canonical representation, and customizable elements in DNSimple.
categories:
- DNS
---

# SRV Record Format and Components Reference

An [SRV (Service) record](/articles/srv-record/) is a DNS record type that specifies the location of services, including the port number, hostname, and prioritization for contacting the service. This document details the formal structure and the components within an SRV record.
SRV record structure

An SRV record in a DNS zone file typically follows this structure:
`<name>` `<TTL>` `IN SRV` `<priority>` `<weight>` `<port>` `<target>`

 Element | Description |Constraints/Details|
|:--------|:------|:----|
| name | The symbolic name of the service and the transport protocol, followed by the domain name. This defines the specific service being located. | Format: `_service._proto.domain.name`. Both `_service` (e.g., `_sip`, `_ldap`) and _proto (e.g.,`_tcp`, `_udp`) must start with an underscore (_). |
| TTL | Time-To-Live. The amount of time (in seconds) that the record is allowed to be cached by a DNS resolver. | Integer. |
| IN | The DNS class, always "Internet" for standard DNS records. | Literal string `IN`. |
| SRV | The record type. | Literal string `SRV`. |
| priority | The priority of this target host. Lower values mean higher priority. | An unsigned 16-bit integer (0-65535). Clients will attempt to contact the target host with the lowest priority value first. |
| weight | A relative weight for records with the same priority. Higher values indicate a greater chance of being selected. | An unsigned 16-bit integer (0-65535). Used for load balancing among records of equal priority. If all records have the same priority, a client will distribute its attempts proportionally to the weight. |
| port | The TCP or UDP port number on which the service is found. | An unsigned 16-bit integer (0-65535). Defines the specific port for the service. |
| target | The domain name of the host on which the service is to be found. | A fully-qualified domain name (FQDN). **Must NOT be an IP address**. This target FQDN must have a corresponding A or AAAA record. |

## Example SRV records
Here's an example of two SRV records for a SIP (Session Initiation Protocol) service over TCP, demonstrating priority and weight in action:
```
_sip._tcp.example.com.  3600 IN  SRV 10  60  5060 bigbox.example.com.
_sip._tcp.example.com.  3600 IN  SRV 10  20  5060 smallbox1.example.com.
```

Example breakdown:

**`_sip._tcp.example.com.`**
- `_sip`: The service name.
- `_tcp`: The transport protocol.
- `example.com`: The domain for which the service is defined.
- `3600`: The TTL (1 hour).
- `IN SRV`: Standard class and record type.

**First record (`bigbox.example.com`)**
- `10` (**Priority**): This is a primary server.
- `60` (**Weight**): Among servers with priority 10, `bigbox.example.com` will receive 60/(60+20) = 75% of the traffic.
- `5060` (**Port**): The service runs on port 5060.
- `bigbox.example.com.` (**Target**): The server's hostname.

**Second record (`smallbox1.example.com`)**
- `10` (**Priority**): Also a primary server (same as `bigbox`).
- `20` (**Weight**): Among servers with priority 10, smallbox1.example.com will receive 20/(60+20) = 25% of the traffic.
- `5060` (**Port**): The service runs on port 5060.
- `smallbox1.example.com.` (**Target**): The server's hostname.

## Important considerations for SRV records
### Target must be an FQDN
The `target` field of an SRV record must always be a fully-qualified domain name (e.g., `server.example.com.`), not an IP address. The IP address for the target FQDN is resolved by a subsequent A or AAAA record lookup.
### Interaction of priority and weight
Clients will always attempt to connect to the lowest priority SRV records first. Only if there are multiple records with the same lowest priority will the weight values be used to distribute the load among them. If all lower priority records fail, the client then moves to the next highest priority group.
### Single-service per name
Each unique `_service._proto.name` combination defines one service location set. You can have multiple SRV records for the same service name and protocol, but they will be prioritized and weighted as described above.

## References
**RFC 2782**: A DNS RR for specifying the location of services (The primary specification for SRV records).

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
