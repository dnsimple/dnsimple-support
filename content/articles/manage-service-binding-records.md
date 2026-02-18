---
title: Managing Service Binding Records (SVCB and HTTPS)
excerpt: Instructions to add, update, and remove SVCB and HTTPS records in DNSimple.
meta: Learn how to effectively manage SVCB and HTTPS records in DNSimple with our step-by-step guide. Add, update, or remove records to optimize your domain's service binding configuration.
categories:
- DNS
---

# Managing Service Binding Records (SVCB and HTTPS)

### Table of Contents {#toc}

* TOC
{:toc}

---

You can manage [service binding records](/articles/service-binding-records/) (SVCB and HTTPS) in DNSimple using the [DNS record editor](/articles/record-editor/).

The instructions in this article assume you're familiar with the [service binding record format](/articles/service-binding-records/#service-binding-record-structure) and usage.

## Adding HTTPS records

The process for adding HTTPS records is straightforward. The **Name** field uses a simple format since the service and protocol are implicit for HTTP/HTTPS services.

### Adding an HTTPS record

<div class="section-steps" markdown="1">
#### To add an HTTPS record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add**, and select **HTTPS** to add a new HTTPS record.
1. Enter the HTTPS record information.

    - **Name**: The hostname for the record, without the domain name. For example, if you want to represent `www.example.com` enter `www`. Leave it blank to represent the root domain `example.com`. HTTPS records can be used at the apex domain (root domain), unlike [CNAME records](/articles/cname-record/).
    - **Priority**: The priority value (0-65535). Lower values are preferred. A priority of 0 indicates AliasMode (functions like a [CNAME](/articles/cname-record/)), while a priority greater than 0 indicates ServiceMode (provides alternative endpoints with service parameters).
    - **Target**: The fully-qualified domain name (FQDN) of either an alias target (AliasMode) or alternative endpoint (ServiceMode). This must be a hostname, not an IP address.
    - **Service Parameters (SvcParams)**: Optional service parameters in key=value format. Multiple parameters can be separated by spaces. Common parameters include:
      - `alpn=h2,h3` - Lists supported ALPN protocols (e.g., `h2` for HTTP/2, `h3` for HTTP/3)
      - `port=443` - Specifies the port number for the service
      - `ipv4hint=192.0.2.1,192.0.2.2` - Provides IPv4 address hints
      - `ipv6hint=2001:db8::1` - Provides IPv6 address hints

    As with any other DNS record, you can configure:

    - **TTL**: The record [time-to-live](/articles/what-is-ttl/).
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Optionally include a [record note](/articles/record-notes/).

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1. The record is created and visible in the record list.

</div>

## Adding SVCB records

The process for adding SVCB records is similar to HTTPS records, but the **Name** field requires explicit service and protocol specification using the format `_service._protocol.hostname`.

### Adding an SVCB record

<div class="section-steps" markdown="1">
#### To add an SVCB record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the record editor, click **Add**, and select **SVCB** to add a new SVCB record.
1. Enter the SVCB record information.

    - **Name**: The service name and transport protocol, followed by the domain name. This must follow the format `_service._protocol.hostname`. For example:
      - `_example._tcp` for a service named `_example` over TCP on the root domain
      - `_example._tcp.www` for the same service on the `www` subdomain
      - `_ldap._tcp` for an LDAP service over TCP
      - Both the service name (e.g., `_example`, `_ldap`) and protocol (e.g., `_tcp`, `_udp`) must start with an underscore.
    - **Priority**: The priority value (0-65535). Lower values are preferred. A priority of 0 indicates AliasMode (functions like a [CNAME](/articles/cname-record/)), while a priority greater than 0 indicates ServiceMode (provides alternative endpoints with service parameters).
    - **Target**: The fully-qualified domain name (FQDN) of either an alias target (AliasMode) or alternative endpoint (ServiceMode). This must be a hostname, not an IP address.
    - **Service Parameters (SvcParams)**: Optional service parameters in key=value format. Multiple parameters can be separated by spaces. Common parameters include:
      - `port=8443` - Specifies the port number for the service
      - `ipv4hint=192.0.2.1,192.0.2.2` - Provides IPv4 address hints to avoid additional DNS lookups
      - `ipv6hint=2001:db8::1` - Provides IPv6 address hints to avoid additional DNS lookups
      - `alpn=h2,h3` - Lists supported ALPN protocols (primarily used with HTTPS records)
      - `mandatory=port,alpn` - Lists service parameters that must be understood by the client

    As with any other DNS record, you can configure:

    - **TTL**: The record [time-to-live](/articles/what-is-ttl/).
    - **Respond From Regions**: Configure [Regional Records](/articles/regional-records/) if desired.
    - **Notes**: Optionally include a [record note](/articles/record-notes/).

    Once you're ready, click <label>Add Record</label> to confirm and create the record.

1. The record is created and visible in the record list.

</div>

> [!NOTE]
> SVCB records following the pattern `_service._protocol.example.com` may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) at intermediate names like `_tcp.example.com`. If you're using wildcard records, this may affect DNS resolution. Learn more about [wildcards and ENTs](/articles/empty-non-terminals/#wildcards-and-empty-non-terminals).

> [!NOTE]
> Some hosting providers label fields differently than DNSimple does, which can be confusing if you're copying DNS settings from another provider.
> - In DNSimple, **Name** = what others might call _Host._
> - In DNSimple, **Target** = the target hostname for the service binding record.
> - In DNSimple, **Service Parameters** = the SvcParams field containing key=value pairs.

## Examples

### HTTPS record examples

#### HTTPS record in AliasMode

To create an HTTPS record that aliases `example.com` to `example.net`:

- **Name**: (leave blank for root domain)
- **Priority**: `0` (AliasMode)
- **Target**: `example.net.`
- **Service Parameters**: (leave blank for simple aliasing)

This creates: `example.com. IN HTTPS 0 example.net.`

#### HTTPS record in ServiceMode

To create an HTTPS record that specifies HTTP/2 and HTTP/3 support:

- **Name**: (leave blank for root domain)
- **Priority**: `1` (ServiceMode)
- **Target**: `example.com.`
- **Service Parameters**: `alpn=h2,h3 port=443`

This creates: `example.com. IN HTTPS 1 example.com. alpn=h2,h3 port=443`

### SVCB record examples

#### SVCB record in AliasMode

To create an SVCB record that aliases a service to another domain:

- **Name**: `_example._tcp` (for root domain) or `_example._tcp.www` (for www subdomain)
- **Priority**: `0` (AliasMode)
- **Target**: `example.net.`
- **Service Parameters**: (leave blank for simple aliasing)

This creates: `_example._tcp.example.com. IN SVCB 0 example.net.`

#### SVCB record in ServiceMode

To create an SVCB record that specifies a custom service with port and protocol hints:

- **Name**: `_custom._tcp`
- **Priority**: `1` (ServiceMode)
- **Target**: `server.example.com.`
- **Service Parameters**: `port=8443 ipv4hint=192.0.2.1`

This creates: `_custom._tcp.example.com. IN SVCB 1 server.example.com. port=8443 ipv4hint=192.0.2.1`

#### Multiple SVCB records for load balancing

To create multiple SVCB records with different priorities for failover:

**First record (primary):**
- **Name**: `_service._tcp`
- **Priority**: `1`
- **Target**: `server1.example.com.`
- **Service Parameters**: `port=8443`

**Second record (fallback):**
- **Name**: `_service._tcp`
- **Priority**: `2`
- **Target**: `server2.example.com.`
- **Service Parameters**: `port=8443`

This creates two records that clients will try in order of priority (1, then 2).

## Updating service binding records

The process for updating service binding records is the same for both HTTPS and SVCB records.

<div class="section-steps" markdown="1">
#### To update a service binding record (HTTPS or SVCB)

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the service binding record (SVCB or HTTPS) you want to update in the list.
1. Click the edit icon (🖊️) at the end of the record row to edit it.

1. Update the information and click **Update Record** to save the record.
</div>

## Removing service binding records

The process for removing service binding records is the same for both HTTPS and SVCB records.

<div class="section-steps" markdown="1">
#### To remove a service binding record (HTTPS or SVCB)

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. Locate the service binding record (SVCB or HTTPS) you want to remove in the list.
1. Click the _trash_ icon at the end of the row to delete it.

1. Confirm the dialog to delete the record.
</div>

## Understanding service binding record modes

Both SVCB and HTTPS records operate in two modes based on the priority value:

- **AliasMode (Priority 0)**: Functions like a [CNAME record](/articles/cname-record/) but can be used at the apex domain. The record redirects queries to the target hostname specified in the Target field. No service parameters are typically used in AliasMode.

- **ServiceMode (Priority > 0)**: Provides information about alternative endpoints where the service is available, along with associated service parameters. Multiple service binding records with different priorities can be used to specify fallback endpoints or load balancing.

For more information about service binding record modes, structure, and use cases, see [Service Binding Records (SVCB and HTTPS)](/articles/service-binding-records/).

## Choosing between SVCB and HTTPS

- **Use HTTPS records** for HTTP/HTTPS services (most common use case). The simpler naming format (`domain.name`) makes them easier to configure and understand.

- **Use SVCB records** for:
  - Custom services that are not HTTP/HTTPS
  - Services that benefit from explicit service and protocol specification
  - Future extensibility as new service types are defined

For HTTP/HTTPS services, both record types provide the same functionality and can be used interchangeably, but HTTPS records are generally preferred for simplicity and clarity.

## Related articles

- [What Are Service Binding Records (SVCB and HTTPS)?](/articles/service-binding-records/) - Comprehensive explanation of service binding records
- [Differences Between HTTPS and ALIAS Records](/articles/differences-between-https-and-alias-records/) - Understand when to use HTTPS records versus ALIAS records
- [Differences Between HTTPS and URL Records](/articles/differences-between-https-and-url-records/) - Compare HTTPS records with URL records

## Have more questions?

If you have additional questions or need any assistance with service binding records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
