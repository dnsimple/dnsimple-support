---
title: What Are SVCB and HTTPS Records?
excerpt: SVCB and HTTPS records (RFC 9460) let clients know how to connect optimally before connecting — which protocols are supported, which ports, IP hints, and ECH keys.
meta: Learn about SVCB and HTTPS records (RFC 9460) and how they enable faster, more efficient connections by providing connection hints to clients before they connect.
categories:
- DNS
---

# SVCB and HTTPS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What are SVCB and HTTPS records?

**SVCB (Service Binding)** and **HTTPS** records (record types 64 and 65, respectively) are DNS record types defined in [RFC 9460](https://datatracker.ietf.org/doc/html/rfc9460) that enable clients to discover how to connect optimally to a service before establishing a connection. These records provide clients with essential connection information, including which protocols are supported (HTTP/2, HTTP/3), which ports to use, IP address hints, and ECH (Encrypted Client Hello) keys.

HTTPS records are a specialized form of SVCB records specifically designed for HTTPS services. When a client queries for an HTTPS record, it receives connection hints that allow it to skip discovery round-trips and connect faster, improving both performance and user experience.

## How SVCB and HTTPS records work

SVCB and HTTPS records allow domain owners to publish connection parameters directly in DNS, enabling clients to optimize their connections from the start. This eliminates the need for clients to perform multiple round-trips to discover connection capabilities.

### Key benefits

- **Faster connections**: Browsers and other clients can skip discovery round-trips and connect directly using the optimal protocol and port.
- **Protocol negotiation**: Clients learn which protocols are supported (HTTP/2, HTTP/3) before connecting.
- **Port information**: Clients receive explicit port information, avoiding default port assumptions.
- **IP address hints**: IPv4 and IPv6 address hints help clients connect more quickly by providing direct IP addresses.
- **ECH (Encrypted Client Hello) support**: HTTPS records can include ECH keys, enabling encrypted SNI (Server Name Indication) for enhanced privacy.

### Browser support

Modern browsers use HTTPS records to optimize connections. When a browser queries for an HTTPS record, it receives connection hints that allow it to:

- Connect using the most efficient protocol (HTTP/2 or HTTP/3) immediately
- Use the correct port without trial-and-error
- Connect to the correct IP address without additional DNS lookups
- Establish encrypted connections with ECH support

## SVCB and HTTPS record structure

SVCB and HTTPS records contain several components:

- **SvcPriority**: A priority value (0-65535) that determines the order in which records should be used. Lower values indicate higher priority.
- **TargetName**: The canonical hostname for the service. If set to `.` (root), it indicates that the service is available at the record's owner name.
- **SvcParams**: A set of service parameters that provide connection hints. Common parameters include:
  - `alpn`: Lists supported application-layer protocols (e.g., `h2`, `h3`)
  - `port`: Specifies the port number for the service
  - `ipv4hint`: Provides IPv4 address hints
  - `ipv6hint`: Provides IPv6 address hints
  - `ech`: Contains ECH configuration for encrypted SNI
  - Custom parameters using the `keyNNNNN` format

## Managing SVCB and HTTPS records in DNSimple

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

## Technical details

The specification for SVCB and HTTPS records is formally defined in [RFC 9460](https://datatracker.ietf.org/doc/html/rfc9460): Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records).

## Have more questions?

If you have additional questions or need any assistance with your SVCB or HTTPS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
