---
title: HINFO Record Reference
excerpt: The formal structure, restrictions, and key technical details of HINFO records.
meta: Learn more about the structure, security considerations, and technical details for HINFO records.
categories:
- DNS
---

# HINFO Record Reference
This article serves as a reference for the formal structure, format, and key technical details of [HINFO (Host Information) records](/articles/hinfo-records/).

## HINFO record format
HINFO records have a type code of 13 and are defined in RFC 1035. The record's data section (RDATA) is composed of two primary components: a description of the CPU and a description of the operating system.

The canonical representation of a HINFO record is:
```
<name> <TTL> IN HINFO <cpu> <os>
```
Both the `<cpu>` and `<os>` fields are defined as character-strings. If either string contains a space, it must be enclosed in double quotes.

In the DNSimple record editor, an HINFO record is represented by the following customizable elements:

| Element | Description | 
|:--------|:-----|
| Name | The host name for the record, without the domain name. This is generally referred to as "subdomain". |
| TTL | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver. |
| CPU | A description of the host's central processing unit. |
| OS | A description of the host's operating system. |


### Example HINFO record
A single HINFO record should exist for each host.
```
server.example.com. IN HINFO "SPARCstation-20" "Solaris 2.5.1"
```
In this example, the record for `server.example.com` specifies the hardware as a SPARCstation-20 and the operating system as Solaris 2.5.1.

## Security considerations
Due to the sensitive information they can reveal, HINFO records are considered a security risk when used on publicly accessible servers. The information about a host's hardware and OS can be used by malicious actors to identify potential vulnerabilities and exploit them.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
