---
title: PTR Record Reference
excerpt: Learn the structure, format, and technical details of PTR records for reverse DNS lookups. Understand how PTR records work for email verification and security.
meta: Learn more about the structure, restrictions, and technical details for PTR records.
categories:
- DNS
---

# PTR Record Reference
This article serves as a reference for the formal structure, format, and key technical details of a [PTR (Pointer)](/articles/reverse-dns-ptr-records/) record.

## PTR record format
A PTR record is a type of DNS record that facilitates a reverse DNS lookup. It has a type code of **12** and is defined in RFC 1035. Unlike most DNS records that live in a domain's forward zone, PTR records are stored in special reverse lookup zones (`in-addr.arpa` for IPv4 and `ip6.arpa` for IPv6).

The name of a PTR record is not a domain name but a specially formatted IP address.
- **IPv4**: The address is reversed, and `.in-addr.arpa` is appended (e.g., `192.0.2.5` becomes `5.2.0.192.in-addr.arpa`).
- **IPv6**: Each hexadecimal digit is reversed, separated by dots, and `.ip6.arpa` is appended.

The core data of a PTR record, its **RDATA** (Resource Data) section, contains a single value:

| Element | Description |
|:--------|:-----|
| `domain-name` | The fully-qualified domain name (FQDN) that corresponds to the IP address. |

The canonical representation of a PTR record is:
```
<reversed_ip_address> IN PTR <domain-name>
```

## PTR record behavior and examples
PTR records are critical for several internet operations, primarily for security, trust, and logging.

**Email anti-spam verification**: Many mail servers perform a reverse DNS lookup on an incoming email's IP address. If the IP address does not resolve to a hostname via a PTR record, or if the resolved hostname does not match the forward DNS record, the email may be flagged as spam or rejected.

**Forward-confirmed reverse DNS (FCrDNS)**: This is a security practice where a PTR record is configured to point to a domain name, and the A/AAAA record for that domain name points back to the original IP address. This two-way verification is often used to establish trust, especially for mail servers.

**Logging and analytics**: Server logs often record connecting IP addresses. A reverse DNS lookup allows administrators to display human-readable hostnames in these logs instead of just raw IP addresses, making analysis and troubleshooting easier.

**Example in a zone file:**
If a server at IP address `192.0.2.5` has the hostname `mail.example.com`, its PTR record might appear in a DNS zone file as:
```
5.2.0.192.in-addr.arpa. IN PTR mail.example.com.
```
For an IPv6 address like 2001:db8::1, its PTR record would resolve:
```
1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa. IN PTR ipv6host.example.com.
```

## PTR record management
You cannot create or manage PTR records for your domain's IP address within a standard DNS hosting service like DNSimple. PTR records are managed by the owner of the IP address block, which is typically your:
- Internet Service Provider (ISP)
- Cloud provider (e.g., AWS, GCP, Azure)
- Hosting company

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
