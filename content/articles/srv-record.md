---
title: What Is an SRV Record?
excerpt: What an SRV record is and how they work on your domains.
meta: Learn how SRV records in DNSimple enhance your domain management for better service discovery and reliability.
categories:
- DNS
---

# SRV Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is an SRV record?
An SRV record (record type 33), short for Service record, is a type of DNS record that provides a standardized way to locate specific services on a domain. Unlike [A](/articles/a-record/) or [AAAA](/articles/aaaa-record/) records that map a domain name directly to an IP address, SRV records map a service name and protocol to the precise location (hostname and port number) and preferences for servers offering that service.

This capability is essential for service discovery, allowing client applications to find the correct server for a particular function without needing to be manually configured with IP addresses or ports. Common applications that use SRV records include Internet Telephony (like SIP for VoIP calls), instant messaging (like XMPP), and certain enterprise services (like Microsoft Teams or LDAP).

## How SRV records facilitate service discovery

An SRV record provides structured information about where a service can be found and how it should be prioritized and balanced among multiple available servers. It tells a client application everything it needs to know to connect:

**Service name and protocol:** SRV records always begin with a symbolic name for the service (e.g., `_sip` for Session Initiation Protocol) and the transport protocol used (e.g., `_tcp` for TCP or `_udp` for UDP). Both parts always start with an underscore, for example: `_sip._tcp.example.com`.

> [!NOTE]
> SRV records following the pattern `_service._protocol.example.com` may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) at intermediate names like `_tcp.example.com`. If you're using wildcard records, this may affect DNS resolution. Learn more about [wildcards and ENTs](/articles/empty-non-terminals/#wildcards-and-empty-non-terminals).

**Priority:** This value indicates the preference for using a server. Lower numbers mean higher priority. Clients will attempt to connect to servers with the lowest priority first.

**Weight:** For servers with the same priority, the weight value is used for load balancing. Higher weights indicate a greater proportion of connections should go to that server.

**Port:** This specifies the exact port number on the target server where the service is running.

**Target hostname:** This is the fully-qualified domain name (FQDN) of the server providing the service. This target hostname must then resolve to an IP address via an A or AAAA record.

### Example of an SRV record's purpose

Consider two SRV records for a SIP service:
```
_sip._tcp.example.com.   3600 IN    SRV 10   60   5060 bigbox.example.com.
_sip._tcp.example.com.   3600 IN    SRV 10   20   5060 smallbox1.example.com.
```
In this example, a client looking for the `_sip` service over `_tcp` on `example.com` would see:

- `bigbox.example.com` and `smallbox1.example.com` have the same priority (10). They are equally preferred as a first choice.
- However, `bigbox.example.com` has a weight of 60, while `smallbox1.example.com` has a weight of 20. This indicates `bigbox.example.com` should receive proportionally more traffic (3 times more in this case, 60/(60+20) vs 20/(60+20)) when both are available.
- Both services are available on port 5060.

This structure allows administrators to define flexible and robust service locations, ensuring high availability and efficient distribution of client connections.

The specification for the DNS SRV record is formally defined in [RFC 2782](https://datatracker.ietf.org/doc/html/rfc2782).

## Adding and managing SRV records
For step-by-step instructions on how to add an SRV record to your DNSimple zone using the record editor, please refer to our dedicated How-To Guide: [Adding an SRV Record](/articles/add-srv-record/). This guide covers inputting the service name, protocol, priority, weight, port, and target.

## SRV record format reference
For a comprehensive breakdown of the SRV record format, including detailed explanations of each field (priority, weight, port, target) and their specific behavior and constraints, consult our Reference Guide: [SRV Record Format and Components Reference](/articles/srv-record-format/). This guide includes additional examples.

## Have more questions?

If you have additional questions or need any assistance with your SRV records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
