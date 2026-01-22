---
title: Name Servers Glossary
excerpt: Defines terms related to name servers and domain delegation.
meta: Explore our comprehensive name servers glossary, featuring essential definitions and terms to enhance your understanding of name servers and domain delegation.
categories:
- Name Servers
---

# Name Servers Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

## Core Concepts

### Name Server

A name server is a specialized server that responds to DNS queries and provides authoritative information about domain names. Name servers translate human-readable domain names (like `example.com`) into machine-readable IP addresses (like `192.0.2.1`), enabling computers to locate and connect to websites, email servers, and other internet services.

**Learn more:**
- [What Is a Name Server?](/articles/what-is-a-nameserver/)
- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)

### Authoritative Name Server

An authoritative name server is a name server that holds the "official" DNS records for a domain. It is the final source of truth for a domain's DNS information. When you delegate your domain to DNSimple, DNSimple's name servers become authoritative for your domain.

**Learn more:**
- [What Is a Name Server?](/articles/what-is-a-nameserver/)
- [How Name Server Delegation Works](/articles/how-name-server-delegation-works/)

### Recursive Name Server (Resolver)

A recursive name server, also called a DNS resolver, performs DNS lookups on behalf of clients. It queries authoritative name servers and caches the results to improve performance. Your internet service provider typically provides recursive name servers.

**Learn more:**
- [What Is DNS?](/articles/what-is-dns/)

### Delegation

Delegation is the process of assigning authority for a portion of the DNS namespace to a specific set of name servers. When you register a domain, the Top-Level Domain (TLD) registry delegates authority for your domain to the name servers you specify.

**Learn more:**
- [How Name Server Delegation Works](/articles/how-name-server-delegation-works/)
- [Delegating a Domain Registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/)

### NS Record

An NS (Name Server) record is a DNS record type that specifies which name servers are authoritative for a domain or subdomain. NS records are published at both the parent zone level (to establish delegation) and within the child zone itself (to confirm authority).

**Learn more:**
- [What Is an NS Record?](/articles/ns-record/)
- [RFC 1035, Section 3.3.11](https://datatracker.ietf.org/doc/html/rfc1035/)

### Glue Record

A glue record is a special type of DNS record that provides the IP addresses (A or AAAA records) for name servers that are subdomains of the domain they serve. Glue records solve the circular dependency problem that occurs when a domain's authoritative name servers are part of that same domain.

**Learn more:**
- [What Are Glue Records?](/articles/what-are-glue-records/)
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)

### Vanity Name Server

A vanity name server, also called a private name server or custom name server, is a name server that uses your own domain name instead of generic hostnames provided by your DNS hosting provider. For example, instead of `ns1.dnsimple.com`, you might use `ns1.yourcompany.com`.

**Learn more:**
- [What Are Vanity Name Servers?](/articles/what-are-vanity-name-servers/)
- [Managing Vanity Name Servers](/articles/vanity-nameservers/)

### Name Server Set

A name server set is a reusable group of name server records that can be applied to domain name server delegation, secondary DNS configuration, and zone NS records. Name server sets speed up configuration and reduce errors.

**Learn more:**
- [Name Server Sets](/articles/name-server-sets/)

## Advanced Concepts

### Root Name Server

Root name servers are at the top of the DNS hierarchy and are the first stop in the DNS resolution process. They direct queries to Top-Level Domain (TLD) name servers. There are 13 root name server clusters worldwide.

**Learn more:**
- [What Is DNS?](/articles/what-is-dns/)

### Top-Level Domain (TLD) Name Server

TLD name servers manage information for top-level domains like `.com`, `.org`, and `.net`. They provide information about authoritative name servers for specific domain names and delegate authority to second-level domains.

**Learn more:**
- [What Is DNS?](/articles/what-is-dns/)
- [How Name Server Delegation Works](/articles/how-name-server-delegation-works/)

### Subdomain Delegation

Subdomain delegation is the process of delegating a subdomain (like `subdomain.example.com`) to different name servers than the parent domain. This is accomplished by adding NS records for the subdomain.

**Learn more:**
- [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/)

### Zone File

A zone file is a text file that contains DNS records for a domain. It includes all the DNS records (A, AAAA, MX, NS, etc.) that define how the domain resolves. DNSimple automatically manages zone files for domains hosted with us.

**Learn more:**
- [What Is a Zone File?](/articles/what-is-zone-file/)

### Propagation

Propagation refers to the time it takes for DNS changes (like name server updates) to spread across the internet's DNS infrastructure. Name server changes can take up to 24-48 hours to fully propagate globally.

**Learn more:**
- [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/)
- [Verifying Name Server Delegation](/articles/verifying-name-server-delegation/)

## Have more questions?

If you want to explore more name server terms or need assistance with name server configuration, take a look at our [Name Servers category](/categories/name-servers/). If you have further questions, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.

