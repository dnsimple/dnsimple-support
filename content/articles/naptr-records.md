---
title: What Are NAPTR Records?
excerpt: What a NAPTR record is and how they work on your domains.
meta: Learn how NAPTR records in DNSimple enhance your domain management for better service discovery and reliability.
categories:
- DNS
---

# What Are NAPTR Records?
A NAPTR (Naming Authority Pointer, record type 35) record is a type of DNS resource record that provides rules for rewriting a string into a new domain name or a Uniform Resource Identifier (URI). Unlike most DNS records that provide direct answers (like an [A record](/articles/a-record/)  providing an IP address), NAPTR records provide instructions. They allow a client to discover available services and protocols for a given resource, often by transforming a query string through a series of regular expression-based rules.

A NAPTR record helps a client find the correct server for a service. Instead of saying "go here," it says, "take this input, apply this rule, and then based on the result, you might need to go here or do this next."

## What information does a NAPTR record contain?

A NAPTR record is complex because it includes multiple fields that dictate its behavior:

**Order (16-bit integer)**: Specifies the order in which multiple NAPTR records for the same name MUST be processed. Lower numbers are processed before higher numbers. Once a record's rule matches, no NAPTRs with a higher order value are considered.

**Preference (16-bit integer)**: Specifies the order in which NAPTR records with the same "Order" value SHOULD be processed. Lower numbers are preferred. This is similar to the preference field in an [MX record](/articles/mx-record/).

**Flags (character string)**: A single-character string that controls how the record's result should be interpreted and what the next step in the resolution process should be. 
- **Common flags include:**
    - `S`: The output of the `Regexp` or `Replacement` field is a domain name that should be looked up using an SRV record. This allows chaining to specific service instances.
    - `A`: The output is a domain name that should be looked up using an A or AAAA record (for direct IP resolution).
    - `U`: The output of the `Regexp` field is a Uniform Resource Identifier (URI), and no further DNS lookups are expected for this NAPTR chain.
    - `P`: The rule is protocol-specific, meaning the interpretation of the `Service` field dictates the next action, rather than a generic DNS lookup.

**Service (character string)**: Describes the service and protocol to be used. For example, `SIP+D2U` might indicate Session Initiation Protocol (SIP) over UDP.
Regexp (regular expression - character string): A regular expression used to rewrite the input string into a new string (which could be a domain name or a URI). This is the core logic of the NAPTR record.

**Replacement (FQDN - character string)**: A Fully Qualified Domain Name (FQDN) that specifies the next domain name to query. This field is used when the `Regexp` field is empty (i.e., for a simple, non-regex-based replacement) or if the regular expression matches and indicates a simple replacement. The `Regexp` and `Replacement` fields are mutually exclusive – only one can contain a value.

## How NAPTR records work
The client (e.g., a VoIP phone, a browser plugin, or an application capable of using NAPTR) queries DNS for NAPTR records for a specific domain or string.
1. **Ordering**: The client receives multiple NAPTR records and processes them in the order specified by the `Order` field (lowest first), then by `Preference` for ties.
1. **Application of rule**: For the chosen NAPTR record, the `Regexp` field (if present) is applied to the original query string. If `Regexp` is empty, the `Replacement` field is used directly.
1. **Flag interpretation**: The `Flags` field dictates the next action:
    - If S or A, the result (from `Regexp` or `Replacement`) is treated as a new domain name, and the client performs a subsequent SRV, A, or AAAA lookup on it. This allows for multi-step resolution, guiding the client to specific service instances.
    - If U, the result is a URI, and the client uses that URI directly, ending the DNS lookup chain.
    - If P, the action is defined by the protocol specified in the `Service` field.

This chaining and rewriting capability makes NAPTR records extremely flexible for complex service discovery.

**Example**:
A common use case for NAPTR records is in ENUM (E.164 Number Mapping), which maps telephone numbers to internet-based services (like SIP or email).
Let's say a VoIP client wants to call the telephone number `+1-555-123-4567`. This number might first be transformed into a domain name following ENUM rules: `7.6.5.4.3.2.1.5.5.5.1.e164.arpa`. The client then queries for NAPTR records at this domain.

**Example NAPTR records that might be returned:**
```
7.6.5.4.3.2.1.5.5.5.1.e164.arpa. IN NAPTR 100 10 "u" "E2U+sip" "!^.*$!sip:jdoe@example.com!" .
7.6.5.4.3.2.1.5.5.5.1.e164.arpa. IN NAPTR 100 20 "s" "E2U+email" "" _email._tcp.example.com.
```
**Interpretation**:
- The client first processes the record with `Order 100` and `Preference 10`.
- Its Flags field is `"u"` (URI), Service is `"E2U+sip"` (ENUM to SIP URI), and `Regexp !^.*$!sip:jdoe@example.com!`
- The Regexp takes the original query string (7.6.5.4.3.2.1.5.5.5.1.e164.arpa.) and rewrites it to sip:`jdoe@example.com.`
- Because the flag is `"u"`, the client now has a SIP URI and can attempt to initiate a call directly to `jdoe@example.com.`
- If the first record didn't work or wasn't suitable, the client might then consider the second record (same Order, Preference 20). This record's `"s"` flag indicates it points to an SRV record, suggesting an email service.

## Why are NAPTR records used?
NAPTR records provide a powerful, flexible mechanism that simple A or CNAME records cannot provide. Their flexibility makes them useful in several key scenarios:

**Service discovery**: They allow clients to dynamically discover which services (e.g., voice, video, instant messaging) are available for a given domain or identifier and how to connect to them.

**URI mapping/resolution**: They are extensively used in ENUM (E.164 Number Mapping) to translate telephone numbers into URIs (like SIP addresses or email addresses), bridging the traditional telecom world with internet services.
Flexible routing: The regular expression capability allows for highly sophisticated and dynamic routing decisions, enabling complex transformations of query strings before further lookups.

**Protocol flexibility**: They can guide clients to use specific protocols (e.g., SIP over UDP vs. SIP over TCP).

**Chaining with SRV records**: Often, NAPTR records are the first step in a multi-step lookup process that then points to SRV records, which provide details about service hosts and ports.

## NAPTR vs. SRV records
While both NAPTR and SRV records are used for service discovery, they operate at different levels:
[SRV (Service) records](/articles/srv-record/) directly specify the hostname and port of a server providing a specific service (e.g., where to find a SIP server for `example.com`). They provide a direct answer for a known service.

NAPTR records provide a more abstract and flexible mechanism. They don't directly point to a host/port but provide rules to discover how to connect to a service, potentially involving rewriting the query and chaining to other DNS records (including SRV records) or directly yielding a URI. NAPTRs often act as the front door for complex service routing.

NAPTR (Type 35) records are a sophisticated DNS resource type that enables flexible and dynamic service discovery, particularly prominent in Voice over IP (VoIP) and telecom services. They provide powerful rewriting rules to guide clients from an initial query string to a specific service endpoint or URI using regular expressions and flags. Understanding NAPTR records is key to comprehending how complex, multi-protocol services are located and connected across the internet.

## Have more questions? 
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
