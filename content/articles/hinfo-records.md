---
title: What Are HINFO Records?
excerpt: HINFO records indicate the hardware type and operating system of the host.
meta: Learn how HINFO records work and why they have largely been superseded.
categories:
- DNS
---

# What Are HINFO Records?

A HINFO (Host Information) record (Type 13) is a type of DNS resource record that provides descriptive information about a host (a computer or server connected to a network). It's designed to indicate the hardware type and operating system of the host. Think of it as a digital label that tells you what kind of machine a particular DNS name refers to.

While once more commonly used, HINFO records are less prevalent in modern DNS configurations due to evolving security practices and the rise of more dynamic infrastructure. However, understanding what they are can be helpful when troubleshooting or examining older DNS setups.

## What information does a HINFO record contain?
A HINFO record contains two mandatory fields, both of which are free-form text strings:
- **CPU type (hardware)**: This field describes the central processing unit or the overall hardware architecture of the host. Examples might include "SPARC," "x86," "ARM," "Intel Core i7," or "AMD EPYC."
- **OS type (operating system)**: This field specifies the operating system running on the host. Examples could be "UNIX," "Linux," "Windows Server 2019," "FreeBSD," or "macOS."

### Example

A HINFO record for a server named `webserver.example.com` might look something like this in a DNS zone file:
```
webserver.example.com. IN HINFO "x86-64" "Ubuntu Linux"
```
In this example:
- `"x86-64"` describes the hardware architecture.
- `"Ubuntu Linux"` describes the operating system.
  
For the full technical breakdown of the HINFO record format, see our [HINFO Record Reference](/articles/hinfo-record-reference/) article.

## Why were HINFO records used?
In the past, HINFO records served several purposes:
- **Network management**: They provided system administrators with quick insights into the hardware and software of various hosts on their network, aiding in inventory, troubleshooting, and planning.
- **Application compatibility**: Some older applications or protocols might have used HINFO information to determine compatibility or optimize their behavior based on the host's environment.
- **Informational purposes**: Simply put, they offered a way to publish basic system information within DNS.

## Why are HINFO records less common now?
Several factors have contributed to the decline in HINFO record usage:
- **Security concerns**: Publishing detailed information about hardware and operating systems can be a security risk. Malicious actors could potentially use this information to identify vulnerabilities and launch targeted attacks.
- **Dynamic environments**: Modern cloud environments and virtualization often involve highly dynamic and ephemeral servers. The specific hardware and OS of a server behind a load balancer might change frequently, making static HINFO records impractical and quickly outdated.
- **Alternatives for system informatio**n: System administrators now have more sophisticated and secure tools for monitoring and managing host information, such as configuration management databases (CMDBs), inventory systems, and agent-based monitoring tools.
- **Privacy**: In some cases, organizations prefer not to publicly disclose details about their infrastructure.

## When might you encounter HINFO records?
While not common in new deployments, you might still encounter HINFO records in the following scenarios:
**Legacy systems**: Older networks or systems that haven't been updated in a while might still have HINFO records configured.
**Niche applications**: Very specific or proprietary applications might still rely on HINFO for compatibility checks, though this is rare.
**DNS zone file examination**: When analyzing a DNS zone file, you might come across HINFO records as part of a historical configuration.

## HINFO records are part of older DNS configurations
HINFO records are a relic of earlier internet practices, designed to provide basic hardware and operating system information about hosts. While their utility has largely been superseded by more secure and dynamic methods of system management, understanding what they are can be beneficial for comprehending older DNS configurations and the evolution of DNS practices. For most modern deployments, you will not need to create or manage HINFO records.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
