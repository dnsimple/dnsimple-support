---
title: Differences Between HTTPS and ALIAS Records
excerpt: Understanding the differences between HTTPS records and ALIAS records for domain aliasing and service binding.
meta: Compare HTTPS records and ALIAS records to understand when to use each for apex domain aliasing, service binding, and hostname resolution.
categories:
- DNS
---

# Differences Between HTTPS and ALIAS Records

HTTPS records and ALIAS records both enable apex domain aliasing (pointing your root domain to another hostname), but they serve different purposes and operate through different mechanisms. Understanding these distinctions is crucial for selecting the right record type for your specific needs, whether it's service binding information or simple hostname resolution.

## Core distinctions: service binding vs. hostname resolution

The primary difference between HTTPS records and ALIAS records lies in their purpose and the information they provide:

**HTTPS records (RFC 9460):**
- **Service binding information:** HTTPS records provide service binding information specifically for HTTP/HTTPS services, delivering configuration details and parameters to clients before they establish a connection.
- **Protocol optimization:** HTTPS records can specify supported protocols (HTTP/2, HTTP/3), ports, and other connection parameters.
- **Standard DNS record:** HTTPS records are a standard DNS record type defined in RFC 9460, supported by any compliant DNS provider.

**ALIAS records (DNSimple proprietary):**
- **Hostname resolution:** ALIAS records dynamically resolve a hostname to IP addresses ([A](/articles/a-record/) and [AAAA records](/articles/aaaa-record/)) at query time, appearing as standard A or AAAA records to resolvers.
- **Simple aliasing:** ALIAS records provide [CNAME](/articles/cname-record/)-like functionality for apex domains without the CNAME restrictions.
- **DNSimple proprietary:** ALIAS records are a DNSimple-specific record type that works with DNSimple's name servers.

## Understanding the differences in action

### HTTPS records

HTTPS records operate in two modes:

**AliasMode (Priority 0):** Functions like a [CNAME](/articles/cname-record/) but can be used at the apex domain. Provides service binding information that redirects queries to another domain name for HTTPS services.

**Example:**
```
example.com.  3600  IN  HTTPS  0  myapp.herokuapp.com.
```

**ServiceMode (Priority > 0):** Provides information about alternative endpoints where the HTTPS service is available, along with associated service parameters like protocol support.

**Example:**
```
example.com.  3600  IN  HTTPS  1  example.com.  alpn=h2,h3  port=443
```

**Key characteristics:**
- Standard DNS record type (RFC 9460)
- Provides service binding information for HTTP/HTTPS services
- Can specify protocol support (HTTP/2, HTTP/3) and connection parameters
- Works with any RFC 9460-compliant DNS provider
- Learn more: [What Are Service Binding Records (SVCB and HTTPS)?](/articles/service-binding-records/)

### ALIAS records

ALIAS records dynamically resolve a target hostname to IP addresses in real-time. When a DNS resolver queries your domain:

1. **Dynamic resolution:** DNSimple's name servers perform a real-time lookup of the target hostname specified in the ALIAS record.
2. **IP extraction:** The system extracts the resulting [A](/articles/a-record/) and [AAAA records](/articles/aaaa-record/) from the target hostname.
3. **Response:** These IP addresses are returned to the resolver as if they were static A or AAAA records on your domain.

**Example:**
```
example.com.  ALIAS  myapp.herokuapp.com.
```

When queried, this ALIAS record dynamically resolves `myapp.herokuapp.com` to its current IP addresses and returns them as [A](/articles/a-record/) and [AAAA records](/articles/aaaa-record/) for `example.com`.

**Key characteristics:**
- DNSimple proprietary record type
- Dynamically resolves target hostname to IP addresses
- Appears as [A](/articles/a-record/) and [AAAA records](/articles/aaaa-record/) to resolvers
- Can coexist with other record types (unlike [CNAME](/articles/cname-record/))
- Works only with DNSimple's name servers
- Learn more: [What Is an ALIAS Record?](/articles/alias-record/)

## When to use which

### Use HTTPS records when:

- You want to provide **service binding information** for HTTP/HTTPS services
- You need to specify **protocol support** (e.g., HTTP/2, HTTP/3) or connection parameters
- You want **standard DNS record types** that work with any RFC 9460-compliant DNS provider
- You need to provide **alternative endpoints** with different priorities for load balancing or failover
- You want clients to receive **connection optimization information** before establishing a connection
- You're implementing **modern service binding** features per RFC 9460

### Use ALIAS records when:

- You need **simple hostname aliasing** at the apex domain
- You want **dynamic IP resolution** that automatically updates when the target hostname's IP changes
- You need to **coexist with other record types** (like [MX records](/articles/mx-record/)) on the same hostname
- You're using **DNSimple's DNS hosting** exclusively
- You want **[CNAME](/articles/cname-record/)-like behavior** without CNAME restrictions
- You don't need to specify protocol or connection parameters

## Key differences summary

| Aspect | HTTPS Records | ALIAS Records |
|:-------|:--------------|:--------------|
| **Purpose** | Service binding information | Hostname resolution to IP addresses |
| **Standard** | RFC 9460 (standard) | DNSimple proprietary |
| **Information provided** | Service endpoints, protocols, connection parameters | IP addresses ([A](/articles/a-record/) and [AAAA records](/articles/aaaa-record/)) |
| **Protocol specification** | Can specify HTTP/2, HTTP/3, ports, etc. | Not applicable |
| **Provider support** | Any RFC 9460-compliant provider | DNSimple name servers only |
| **Dynamic resolution** | No (static DNS record) | Yes (resolves target hostname dynamically) |
| **Coexists with other records** | Yes (can have [MX](/articles/mx-record/), [TXT](/articles/txt-record/), etc.) | Yes (can have [MX](/articles/mx-record/), [TXT](/articles/txt-record/), etc.) |
| **Apex domain support** | Yes (AliasMode) | Yes |
| **Use case** | Service discovery and optimization | Simple hostname aliasing |

## Practical examples

### Example 1: Apex domain pointing to Heroku

**Scenario:** You want `example.com` to point to your Heroku app at `myapp.herokuapp.com`.

- **HTTPS record (AliasMode):** `example.com. IN HTTPS 0 myapp.herokuapp.com.`
  - Provides service binding information that `example.com` should be treated as an alias for `myapp.herokuapp.com` for HTTPS services
  - Clients receive information about how to connect to the service
  - Works with any RFC 9460-compliant DNS provider

- **ALIAS record:** `example.com ALIAS myapp.herokuapp.com`
  - Dynamically resolves `myapp.herokuapp.com` to its current IP addresses
  - Returns A/AAAA records for `example.com` pointing to those IPs
  - Works only with DNSimple's name servers
  - Automatically updates when Heroku changes the app's IP addresses

### Example 2: Apex domain with email

**Scenario:** You want `example.com` to point to a CDN hostname but also need MX records for email.

- **HTTPS record:** `example.com. IN HTTPS 0 cdn.example.net.`
  - Can coexist with MX records
  - Provides service binding information for HTTPS services
  - Standard DNS record type

- **ALIAS record:** `example.com ALIAS cdn.example.net`
  - Can coexist with [MX records](/articles/mx-record/) (key advantage over [CNAME](/articles/cname-record/))
  - Dynamically resolves to IP addresses
  - DNSimple proprietary

Both work in this scenario, but HTTPS records provide additional service binding information while ALIAS records provide simple IP resolution.

## Relationship to other record types

Both HTTPS and ALIAS records solve the apex domain aliasing problem that [CNAME records](/articles/cname-record/) cannot address. However:

- **HTTPS records** are part of the standard service binding mechanism (RFC 9460) and provide rich service information
- **ALIAS records** are DNSimple's proprietary solution for simple hostname aliasing with dynamic IP resolution

For HTTP/HTTPS services, HTTPS records are generally preferred when you need service binding information and want standard DNS record types. ALIAS records are ideal when you need simple hostname aliasing with automatic IP updates and are using DNSimple's DNS hosting.

## Related articles

- [What Are Service Binding Records (SVCB and HTTPS)?](/articles/service-binding-records/) - Learn more about HTTPS records and service binding
- [What Is an ALIAS Record?](/articles/alias-record/) - Learn more about ALIAS records and hostname resolution
- [Managing Service Binding Records (SVCB and HTTPS)](/articles/manage-service-binding-records/) - Step-by-step guide to managing HTTPS records
- [Differences Between HTTPS and URL Records](/articles/differences-between-https-and-url-records/) - Compare HTTPS records with URL records
- [Differences Among A, CNAME, ALIAS, and URL Records](/articles/differences-between-a-cname-alias-url/) - Comprehensive comparison of A, CNAME, ALIAS, and URL records

## Have more questions?

If you have additional questions or need any assistance choosing between HTTPS and ALIAS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
