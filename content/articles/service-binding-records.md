---
title: What Are Service Binding Records (SVCB and HTTPS)?
excerpt: SVCB and HTTPS records are DNS record types that provide service binding information, enabling performance improvements, protocol optimization, and apex domain aliasing.
meta: Learn about SVCB and HTTPS records, DNS record types that provide service binding information for network services, enabling better performance and protocol optimization.
categories:
- DNS
---

# Service Binding Records (SVCB and HTTPS)

### Table of Contents {#toc}

* TOC
{:toc}

---

## What are service binding records?

**Service Binding records** are a pair of DNS record types standardized in [RFC 9460](https://datatracker.ietf.org/doc/html/rfc9460) that provide service binding information for network services. They deliver configuration information and parameters to clients before they establish a connection to a service, enabling performance improvements, privacy benefits, and protocol optimization.

The two record types are:

- **SVCB records** (record type 64): Service Binding records for any service type
- **HTTPS records** (record type 65): Service Binding records specifically optimized for HTTP/HTTPS services

Both record types share **identical structure and behavior**; the primary difference is the naming format used to identify the service.

## How service binding records work

Service binding records provide clients with complete instructions for accessing network services. When a client queries for a service binding record, it receives information about:

- **Alternative endpoints** where the service is available
- **Transport protocol configurations** (e.g., supported protocols, ports)
- **Connection parameters** that optimize the connection process
- **Alias targets** for domain name redirection

This information allows clients to make more informed decisions about which server to connect to and how to establish the connection, reducing unnecessary connection attempts and improving overall performance.

## SVCB vs HTTPS: The key difference

The only significant difference between SVCB and HTTPS records is the **naming format**:

### SVCB Records (Type 64)

SVCB records require explicit service and protocol specification in the record name using the format:

`_service._protocol.domain.name`

Where:
- `_service` is a symbolic name for the service (e.g., `_example`, `_ldap`, `_custom`)
- `_protocol` is the transport protocol (e.g., `_tcp`, `_udp`)
- Both service and protocol names must start with an underscore
- `domain.name` is the domain for which the service is defined

**Example:**
```
_example._tcp.example.com.  3600  IN  SVCB  1  server.example.com.  port=8443
```

> [!NOTE]
> SVCB records following the pattern `_service._protocol.example.com` may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) at intermediate names like `_tcp.example.com`. If you're using wildcard records, this may affect DNS resolution. Learn more about [wildcards and ENTs](/articles/empty-non-terminals/#wildcards-and-empty-non-terminals).

### HTTPS Records (Type 65)

HTTPS records are implicitly associated with HTTP/HTTPS services and use a simpler naming format:

`domain.name`

Since the service (HTTP/HTTPS) and protocol (TCP) are implicit, no `_service._protocol` prefix is required.

**Example:**
```
example.com.  3600  IN  HTTPS  1  example.com.  alpn=h2,h3  port=443
```

### When to use which

- **Use HTTPS records** for HTTP/HTTPS services (most common use case). The simpler naming format makes them easier to configure and understand.
- **Use SVCB records** for:
  - Custom services that are not HTTP/HTTPS
  - Services that benefit from explicit service and protocol specification
  - Future extensibility as new service types are defined

For HTTP/HTTPS services, both record types provide the same functionality and can be used interchangeably, but HTTPS records are generally preferred for simplicity and clarity.

## Service binding record modes

Both SVCB and HTTPS records operate in two distinct modes based on the priority value:

### AliasMode (Priority 0)

When a service binding record has a priority value of 0, it operates in **AliasMode**. In this mode, the record functions similarly to a [CNAME record](/articles/cname-record/), redirecting the query to another domain name. However, unlike CNAME records, service binding records can be used at the apex domain (the root domain, e.g., `example.com`), which CNAME records cannot.

**HTTPS example:**
```
example.com.  3600  IN  HTTPS  0  example.net.
```

**SVCB example:**
```
_example._tcp.example.com.  3600  IN  SVCB  0  example.net.
```

Both records indicate that the source domain should be treated as an alias for `example.net` for the specified service.

### ServiceMode (Priority > 0)

When a service binding record has a priority value greater than 0, it operates in **ServiceMode**. In this mode, the record provides information about alternative endpoints where the service is available, along with associated service parameters.

**HTTPS example:**
```
example.com.  3600  IN  HTTPS  1  example.com.  alpn=h2,h3  port=443
```

**SVCB example:**
```
_example._tcp.example.com.  3600  IN  SVCB  1  server1.example.com.  port=8443
_example._tcp.example.com.  3600  IN  SVCB  2  server2.example.com.  port=8443
```

These records indicate alternative endpoints with different priorities. Clients will try endpoints in order of priority (lower numbers first).

## Service binding record structure

Both SVCB and HTTPS records contain three main components:

1. **SvcPriority**: A 16-bit priority value (0-65535). Lower values are preferred, similar to [MX records](/articles/mx-record/). A priority of 0 indicates AliasMode.
2. **TargetName**: The fully-qualified domain name (FQDN) of either an alias target (AliasMode) or alternative endpoint (ServiceMode). This must be a hostname, not an IP address.
3. **SvcParams**: Optional service parameters in key=value format that provide additional configuration information.

### Common service parameters

- `alpn`: Lists supported Application-Layer Protocol Negotiation (ALPN) protocols (e.g., `h2` for HTTP/2, `h3` for HTTP/3). Primarily used with HTTPS records.
- `port`: Specifies the port number for the service
- `ipv4hint`: Provides IPv4 address hints to avoid additional DNS lookups
- `ipv6hint`: Provides IPv6 address hints to avoid additional DNS lookups
- `mandatory`: Lists service parameters that must be understood by the client
- `ech`: Encrypted ClientHello configuration (for TLS)

## Benefits of service binding records

### Performance improvements

Service binding records allow clients to avoid connecting to suboptimal servers by providing information about alternative endpoints and their capabilities upfront. This reduces failed connection attempts and improves overall connection efficiency.

### Privacy benefits

By delivering configuration information through DNS, service binding records enable clients to make better decisions about connections without requiring multiple round trips or exposing connection patterns.

### Protocol optimization

Service binding records can specify supported transport protocols and connection parameters, allowing clients to select the most appropriate protocol and configuration for their needs. For HTTPS records, this enables HTTP-to-HTTPS upgrades and HTTP/3 support.

### Apex domain aliasing

Unlike [CNAME records](/articles/cname-record/), which cannot exist at the apex domain, service binding records in AliasMode can be used at the root domain. This enables apex domain aliasing, allowing domain owners to redirect their root domain to another domain for specific services.

### Service delegation

Service binding records provide a standardized mechanism for service delegation, allowing service providers to publish information about where services are available and how to connect to them, independent of the underlying IP addresses.

## Limitations and considerations

### Zone structures with multiple aliases

When designing zone structures that require multiple aliases (service binding records in AliasMode), it is recommended to keep the number of aliases in a chain to eight or fewer. Similar to [CNAME chains](/articles/cname-record/#key-characteristics-and-restrictions), each alias in a service binding record chain adds an additional DNS lookup, which can impact resolution performance.

If your zone structure requires more than eight aliases, consider alternative approaches such as:

- Restructuring your DNS zone to reduce the number of alias hops
- Using [A records](/articles/a-record/) or [AAAA records](/articles/aaaa-record/) for direct IP address mapping where possible
- Consolidating multiple aliases into a single target where appropriate

While DNAME record type implementation is not currently necessary for most use cases, zone structures requiring more than eight aliases should be carefully evaluated to ensure optimal DNS resolution performance.

## Use cases

### HTTPS records

HTTPS records are ideal for:
- HTTP/HTTPS websites and APIs
- Enabling HTTP/2 and HTTP/3 support
- Apex domain aliasing for HTTP/HTTPS services
- HTTP-to-HTTPS upgrades

### SVCB records

SVCB records are ideal for:
- Custom services that need service binding information but are not HTTP/HTTPS
- Protocol-specific services that benefit from explicit service and protocol specification
- Service discovery scenarios where clients need to find alternative endpoints
- Apex domain aliasing for non-HTTP services
- Future extensibility as new service parameters are defined

## Adding and managing service binding records

DNSimple provides comprehensive support for creating and managing SVCB and HTTPS records through the [Record Editor](/articles/record-editor/).

### Record Editor features

The Record Editor offers two modes for working with SVCB and HTTPS records:

- **Simple mode**: A content field where you can enter the complete record content in a single text field. This is useful for pasting records from other sources or for users familiar with the record format.
- **Advanced mode**: A field-specific editor that breaks down the record into separate fields for:
  - Priority (SvcPriority)
  - Target name (TargetName)
  - Service parameters (SvcParams)
  
  This mode provides guided input and validation to help ensure correct configuration.

### Validation

The Record Editor includes validation per RFC 9460 to ensure records are correctly formatted:

- **SvcPriority validation**: Ensures priority values are within the valid range (0-65535)
- **TargetName validation**: Validates that the target name is a valid hostname or `.`
- **SvcParams validation**: Validates service parameters, including:
  - Standard keys (alpn, port, ipv4hint, ipv6hint, ech)
  - Custom keys using the `keyNNNNN` format
  - Proper formatting and value ranges for each parameter type

### Live preview

As you type in the Record Editor, a live preview updates to show how the record will appear, helping you verify the configuration before saving.

### API support

SVCB and HTTPS records are fully supported through the DNSimple API, allowing you to programmatically create, update, and manage these records. For more information, see the [DNSimple API documentation](https://developer.dnsimple.com/v2/zones/records/).

For step-by-step instructions on how to add, update, and remove service binding records (SVCB and HTTPS) in DNSimple using the record editor, please refer to our dedicated How-To Guide: [Managing Service Binding Records (SVCB and HTTPS)](/articles/manage-service-binding-records/). This guide covers configuring priority values, target hostnames, service parameters, and the naming format requirements for both record types.

## Integrated DNS Provider support

SVCB and HTTPS records are supported for syncing and management with the following Integrated DNS Providers:

- **Route 53**: Full SVCB/HTTPS sync support. Records created in DNSimple can be synced to Route 53, and records in Route 53 can be imported and managed through DNSimple.
- **CoreDNS**: Full SVCB/HTTPS sync support. Records configured in DNSimple can be synced to CoreDNS instances.

> [!NOTE]
> **Azure DNS**: Azure DNS does not support SVCB/HTTPS records. If you're using Azure DNS as an Integrated DNS Provider, SVCB/HTTPS records cannot be synced to Azure DNS zones.

For more information about Integrated DNS Providers, see:
- [Integrated DNS Provider Amazon Route 53](/articles/integrated-dns-provider-amazon-route53/)
- [Integrated DNS Provider CoreDNS](/articles/integrated-dns-provider-coredns/)
- [Integrated DNS Provider Azure DNS](/articles/integrated-dns-provider-azure-dns/)

## Comparing service binding records with other record types

If you're trying to decide between HTTPS records and other record types, these comparison articles may help:

- [Differences Between HTTPS and ALIAS Records](/articles/differences-between-https-and-alias-records/) - Understand when to use HTTPS records versus ALIAS records for apex domain aliasing
- [Differences Between HTTPS and URL Records](/articles/differences-between-https-and-url-records/) - Compare HTTPS records with URL records to understand service binding versus web redirects

## Specification

The specification for service binding records (SVCB and HTTPS) is formally defined in [RFC 9460](https://datatracker.ietf.org/doc/html/rfc9460).

## Have more questions?

If you have additional questions or need any assistance with service binding records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
