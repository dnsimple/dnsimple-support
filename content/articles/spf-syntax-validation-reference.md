---
title: SPF Record Syntax and Validation Reference
excerpt: The syntax, mechanisms, modifiers, and validation rules that govern SPF records.
meta: Learn more about the syntax, mechanisms, modifiers, and validation rules for SPF records.
categories:
- DNS
---

# SPF Record Syntax and Validation Reference
This document serves as a detailed reference for the syntax, mechanisms, modifiers, and validation rules that govern [Sender Policy Framework (SPF) records](/articles/spf-record/). SPF records are used to specify which hosts are authorized to send email on behalf of a domain.

## SPF record format
An SPF record is always defined as a single string of text published as a DNS [TXT record](/articles/txt-record/).
The record always begins with a version indicator, followed by one or more terms (mechanisms or modifiers).

### Example SPF record:

```
v=spf1 a mx ip4:69.64.153.131 include:_spf.google.com ~all
```

<note> 
**Important note on SPF record type (type 99):** Historically, there was a dedicated SPF record type (Type 99). However, this record type has been deprecated. All SPF records must now be defined using the **TXT record type**. This is the only universally supported method for publishing SPF records. 
</note>

## SPF Mechanisms
Mechanisms define which IP addresses are permitted or denied from sending mail for the domain. A mail server evaluates mechanisms from left to right.
Each mechanism can be prefixed with a **qualifier** that dictates how to handle a match:

- `+` **(Pass)**: The sender is authorized. (This is the default if no qualifier is specified).
- `-` **(Fail)**: The sender is NOT authorized. Messages should be rejected.
- `~` **(SoftFail)**: The sender is NOT authorized, but the result is non-committal. Messages may be accepted but marked as suspicious (e.g., put in spam folder).
- `?` **(Neutral)**: The sender's status is unknown or undefined. Messages are typically accepted without strong judgment.

| Mechanism | Description |Value (optional)|
|--------|-----------|---|
|`all`| Matches any IP address. Typically used as the last mechanism to define a default policy for unmatched senders.|No value. Examples: `-all`, `~all`, `?all`, `+all` (default)|
|`include`|Authorizes hosts defined in another domain's SPF record.|A domain name (e.g., `include:_spf.google.com`).|
|`a`| Matches if the sender's IP address is one of the A or AAAA records for the current domain or a specified domain.|Optional domain name (e.g., `a:mail.example.com`). Optional CIDR suffix (e.g., `a:example.com/24`).|
|`mx`| Matches if the sender's IP address is one of the A or AAAA records for any MX host of the current domain or a specified domain.|Optional domain name (e.g., `mx:mail.example.com`). Optional CIDR suffix (e.g., `mx/24`).|
|`ip4`| Matches if the sender's IP address is within a specified IPv4 range.|An IPv4 address or CIDR range (e.g., `ip4:192.0.2.1`, `ip4:198.51.100.0/24`).|
|`ip6`|Matches if the sender's IP address is within a specified IPv6 range.|An IPv6 address or CIDR range (e.g., `ip6:2001:db8::1`, `ip6:2001:db8::/32`).|
|`exists`|Performs a general DNS A record lookup. If a record is found, it matches. Often used for complex scenarios.|A domain name (e.g., `exists:auth.example.com`).|
|`ptr`|(Discouraged) Matches if the sender's IP has a reverse DNS entry pointing back to the specified domain.|Optional domain name (e.g., `ptr:example.com`). Not recommended due to unreliability and load.|

## SPF modifiers
Modifiers are name/value pairs that provide additional information for SPF processing. Modifiers should appear at the end of the SPF record. A modifier cannot appear more than once. Unrecognized modifiers are ignored.

|Modifier|Description|Value|
|---|---|---|
|redirect|Points to another domain whose SPF record should be used instead of the current one. This effectively replaces the current record.|A domain name (e.g., `redirect=_spf.anotherdomain.com`). Should only be used if you fully control both domains.|
|exp|Provides a human-readable explanation if a `-` (Fail) qualifier mechanism is matched. The explanation is returned to the client.|A domain name that resolves to a TXT record containing the explanation (e.g., `exp=error.example.com`).|

## SPF record validation rules and limitations
To ensure proper functionality and compliance with RFCs, SPF records must adhere to several critical rules:
- **Single SPF Record per Name:** Each fully-qualified domain name (FQDN) or subdomain **can have at maximum one SPF record** (i.e., one TXT record beginning with `v=spf1`). Having multiple SPF records for the same name will cause unpredictable behavior and validation failures.
- **10-DNS-Lookup Limit:** During SPF evaluation, the total number of mechanisms that require DNS lookups **must not exceed 10**. This limit applies to:
`include` mechanisms (each `include` consumes one lookup, and any subsequent lookups within the included record also count).
    - `a` mechanisms.
    - `mx` mechanisms.
    - `ptr` mechanisms.
    - `exists` mechanisms.
    - If this limit is exceeded, the SPF record may result in a "PermError" or "TempError," causing legitimate emails to fail authentication.
  
- `mx` mechanism lookups: When evaluating an `mx` mechanism, the number of MX records queried for the specified domain (or the current domain if no value is provided) is included in the overall 10-lookup limit. Each `mx` mechanism should not result in querying more than 10 address records.
- `ptr` mechanism lookups: Similar to `mx`, each `ptr` mechanism should not result in querying more than 10 address records.
- `all` mechanism position: While not strictly enforced by all parsers, the `all` mechanism is typically used as the last mechanism in an SPF record to define the default policy for all senders not explicitly matched by previous mechanisms.
- Unrecognized modifiers: Unrecognized modifiers will be ignored by SPF evaluators.
- Modifier uniqueness: A modifier (`redirect`, `exp`) can only appear once in an SPF record.

## References
[RFC 7208](https://datatracker.ietf.org/doc/html/rfc7208): Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1 (The current authoritative specification for SPF). This RFC supersedes RFC 4408.

## Have more questions?
If you have additional questions or need any assistance with your SPF records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
