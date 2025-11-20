---
title: DNS Glossary
excerpt: Defines terms related to DNS.
meta: Explore our comprehensive DNS glossary, featuring essential definitions and terms to enhance your understanding of DNS and its critical components.
categories:
- DNS
---
# DNS Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

## Core Concepts

### DNS 

The Domain Name System (DNS) is a hierarchical and distributed naming system for computers, services, or any resource connected to the internet or a private network. It translates human-readable domain names (like `example.com`) into machine-readable IP addresses (like `192.0.2.1`), allowing users to access websites and other online resources without memorizing complex numerical addresses. It's often referred to as the phonebook of the internet.

Learn more: 

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)  
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)  
- [What Is DNS?](/articles/what-is-dns/)

### Domain Name 

A human-readable label used to identify a website or resource on the internet (e.g., `example.com`). Domain names are registered and managed through a hierarchical system with various levels (top-level domains; second-level domains; subdomains). 

Learn more: 

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)

### IP Address 

An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IP addresses serve two main functions: host or network interface identification and location addressing. There are two main versions: IPv4 and IPv6. 

Learn more: 

- [RFC 791 (IPv4)](https://datatracker.ietf.org/doc/html/rfc791)  
- [RFC 8200 (IPv6)](https://datatracker.ietf.org/doc/html/rfc8200)

### DNS Query 

A request sent from a client (like a web browser or operating system) to a DNS server to retrieve specific DNS records associated with a domain name, typically to resolve a domain name to an IP address. Queries can be recursive or iterative. 

Learn more: 

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.7.1)  
- [Iterative vs recursive queries](/articles/what-is-dns/#iterative-vs-recursive-queries)

### DNS Zone

A contiguous portion of the DNS namespace for which a specific DNS server or set of servers is authoritative. A DNS zone contains all the resource records for the domain(s) it manages. It allows for the delegation of administrative control over a part of the DNS hierarchy.

Learn more: 

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-4.1)

### Zone File 

A plain text file that contains all the DNS resource records for a specific DNS zone. This file is managed by an authoritative DNS server and defines how domain names within that zone map to IP addresses and other services.

Learn more: 

- [Domain Zone Files](/articles/zone-files/)

## Server Types & Resolution

### DNS Resolver (Recursive DNS Server/Caching DNS Server) 

The first stop in a DNS query, typically provided by your Internet Service Provider (ISP) or a public DNS service (e.g., Google Public DNS). A recursive resolver receives a DNS query from a client and performs the necessary steps (querying root, TLD, and authoritative name servers) to find the requested IP address. It also caches results to speed up future queries for the same domain. 

Learn more: 

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)  
- [DNS Resolution: step-by-step](/articles/what-is-dns/#dns-resolution-step-by-step)

### Root Name Server 

The highest level in the DNS hierarchy. There are 13 logical root name servers (though many more physical instances globally using Anycast). They don't know specific IP addresses for domains but direct recursive resolvers to the appropriate Top-Level Domain (TLD) name server based on the domain's extension. 

Learn more: 

- [IANA Root Zone Management](https://www.iana.org/domains/root/servers)  
- [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/)  
- [DNSimple Anycast DNS Service](/articles/anycast/)

### TLD Name Server

A DNS server that manages all domain names under a specific Top-Level Domain (TLD), like `.com`, `.org`, `.net`, or country-code TLDs like `.ca`. After being directed by a root name server, a recursive resolver queries a TLD name server to find the authoritative name server for the specific domain being looked up. 

Learn more:

- [IANA TLD Database](https://www.iana.org/domains/root/db)  
- [DNS Resolution: step-by-step](/articles/what-is-dns/#dns-resolution-step-by-step)

### Authoritative Name Server 

The DNS server that holds the definitive and most up-to-date DNS records for a specific domain name (a DNS zone). It provides the final answer to a DNS query, delivering the IP address or other requested information directly to the recursive resolver.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-4.3.1)  
- [DNS Resolution: step-by-step](/articles/what-is-dns/#dns-resolution-step-by-step)

### DNS Propagation 

The process by which changes made to DNS records for a domain are updated across all DNS servers globally. Due to caching and the distributed nature of DNS, propagation can take anywhere from a few minutes to 48 hours for changes to be fully reflected worldwide.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)  
- [How Long Does It Take for a New Record to Resolve for My Domain?](/articles/how-long-does-it-take-for-a-new-record-to-resolve-for-my-domain/) 

## DNS Record Types

### DNS Record (Resource Record/RR)

A fundamental data element in the Domain Name System. Each record contains information about a specific aspect of a domain, like its IP address, mail server, or other service locations. Records are stored in zone files on authoritative DNS servers.

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034#section-3.6)  
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.2)

### A Record 

A (Address) records map a domain name or subdomain to an IPv4 address. This is the most common type of DNS record, essential for directing web traffic to a server. 

*Example: `example.com. IN A 192.0.2.1`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.4.1)  
- [What Is an A Record?](/articles/a-record/)

### AAAA Record 

An AAAA (IPV6 address) record maps a domain name or subdomain to an IPv6 address. Similar to an A record, but for the newer IPv6 protocol. 

*Example: `example.com. IN AAAA 2001:0db8::1`* 

Learn more: 

- [RFC 3596](https://datatracker.ietf.org/doc/html/rfc3596)  
- [What Is an AAAA Record?](/articles/aaaa-record/)

### CNAME Record 

CNAME (Canonical Name) records create an alias from one domain name to another canonical (true) domain name. It's often used to point subdomains (e.g., `www.example.com`) to the root domain (`example.com`) or to external services. A CNAME cannot exist at the root domain. 

*Example: `www.example.com. IN CNAME example.com.`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.1)  
- [What Is a CNAME Record?](/articles/cname-record/)

### MX Record 

MX (Mail Exchange) records specify the mail servers responsible for receiving email on behalf of a domain. MX records include a preference value, indicating the order in which mail servers should be tried. 

*Example: `example.com. IN MX 10 mail.example.com.`*

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9)  
- [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321)  
- [What Is an MX Record?](/articles/mx-record/)

### NS Record 

NS (Name Server) records identify the authoritative name servers for a domain or subdomain. NS records are crucial for delegating control of a DNS zone to specific servers. 

*Example: `example.com. IN NS ns1.dnsimple.com.`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.11)  
- [What Is an NS Record?](/articles/ns-record/)

### PTR Record 

PTR (Pointer) records perform a reverse DNS lookup, mapping an IP address back to a domain name. Primarily used for email validation, spam filtering, and network troubleshooting. PTR records are configured by the IP address owner (often an ISP or hosting provider). 

*Example: `1.2.0.192.in-addr.arpa. IN PTR example.com.`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.12)  
- What's a PTR Record? 

### SOA Record 

SOA (Start Of Authority) records provide essential administrative information about a DNS zone, including the primary name server, the email address of the domain administrator, the zone's serial number (indicating when the zone file was last updated), and various timers for refresh, retry, and expiry. Every zone file must have one SOA record. 

*Example: `example.com. IN SOA ns1.dnsimple.com. hostmaster.example.com. ( 2025071101 7200 3600 1209600 3600 )`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.13)  
- [What Is an SOA Record?](/articles/soa-record/)

### SRV Record

SRV (Service) records locate specific services (like SIP for VoIP or XMPP for instant messaging) within a domain. SRV records specify the host and port number where a service can be found, along with priority and weight values for load balancing. 

*Example: `_sip._tcp.example.com. IN SRV 10 0 5060 sip.example.com.`* 

Learn more: 

- [RFC 2782](https://datatracker.ietf.org/doc/html/rfc2782)  
- [What Is an SRV Record?](/articles/srv-record/)

### TXT Record 

TXT (Text) records allow domain administrators to store arbitrary human-readable text information in DNS. TXT records are commonly used for various purposes, including:

- **DKIM (DomainKeys Identified Mail):** Provides a way for email senders to cryptographically sign outgoing emails, allowing recipients to verify the email's authenticity and integrity.
- **Domain verification:** Many services use TXT records to verify domain ownership.
    - *Example: `example.com. IN TXT "v=spf1 include:_spf.example.com ~all"`* 

Learn more: 

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035) (general TXT)  
- [RFC 6376](https://datatracker.ietf.org/doc/html/rfc6376) (DKIM)  
- [What Is a TXT Record?](/articles/txt-record/)

### CAA Record 

CAA (Certificate Authority Authorization) records allow domain owners to specify which **Certificate Authorities** (CAs) are authorized to issue **SSL/TLS certificates** for their domain. This helps prevent unauthorized certificate issuance and improves security. 

*Example: `example.com. IN CAA 0 issue "letsencrypt.org"`* 

Learn more: 

- [RFC 6844](https://datatracker.ietf.org/doc/html/rfc6844)  
- [What Is a CAA Record?](/articles/caa-record/)

## Privacy & Transport

### DANE 

DANE (DNS-based Authentication of Named Entities) Uses DNSSEC to publish and validate TLS certificate information within DNS records, enhancing the security of TLS connections.

Learn more: [RFC 6698](https://datatracker.ietf.org/doc/html/rfc6698)

### DNS over TLS (DoT)

Encrypts DNS queries and responses over a dedicated TLS connection, typically on port 853, to enhance privacy and prevent eavesdropping.

Learn more: [RFC 8310](https://datatracker.ietf.org/doc/html/rfc8310)

### TSIG

TSIG (Transaction Signature) is a DNS security mechanism using shared-secret keys and HMAC to authenticate and integrity-protect DNS messages, commonly used for zone transfers and dynamic updates.

Learn more: [RFC 8945](https://datatracker.ietf.org/doc/html/rfc8945)

## Caching & Resolution

### DNS Resolver Cache

A temporary storage area where a DNS resolver stores the results of recent DNS queries to speed up future lookups.

Learn more: 

- [RFC 9520](https://datatracker.ietf.org/doc/html/rfc9520#name-caching)  
- [What Is DNS?](/articles/what-is-dns/)

### TTL

A numeric value in DNS resource records that specifies how long a resolver is permitted to cache the record before re-querying the authoritative server.

Learn more:

- [RFC 8767](https://datatracker.ietf.org/doc/html/rfc8767#name-introduction)  
- [What Is Time-to-Live?](/articles/what-is-ttl/)
