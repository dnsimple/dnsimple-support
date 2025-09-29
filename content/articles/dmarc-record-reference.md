---
title: DMARC Record Reference
excerpt: The formal structure, behavior, and key technical details of a DMARC record.
meta: Learn more about the structure, behavior, and technical details for DMARC records.
categories:
- DNS
---

# DMARC Record Reference
This article serves as a reference for the formal structure, tags, and key technical details of a **[DMARC](/articles/dmarc-record/) (Domain-based Message Authentication, Reporting & Conformance)** record.

## DMARC record format

A DMARC record is a special type of [TXT record](/articles/txt-record/) published at the `_dmarc` subdomain. The record's format and tags are specified in [RFC 7489](https://datatracker.ietf.org/doc/html/rfc7489).

The value of the TXT record is a single string containing a series of semicolon-separated tags, where each tag is a key/value pair. All DMARC records must begin with the `v` tag.

**Canonical representation:**

```
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

In the DNSimple [record editor](/articles/record-editor/), a DMARC record is represented by the following customizable elements:

|Element| Description|
|:----|:----|
|Name | The host name for the record, which must be `_dmarc`.|
|TTL |The [time-to-live](/articles/what-is-ttl/) in seconds.|
|Content| A single string of semicolon-separated DMARC tags.|

## DMARC tags and their values

|Tag| Description| Value|
|:----|:-----|:---|
| `v` | **Version**: Must be the first tag in the record. | `DMARC1` |
| `p` | **Policy**: The policy for the organizational domain. | `none` (monitor only), `quarantine` (treat as suspicious), `reject` (block message). |
| `pct` | **Percentage**: The percentage of messages to which the DMARC policy applies.| A number from `0` to `100`. |
| `rua` | **Reporting URI for aggregate reports**: An email address to which aggregate reports are sent. | `mailto:address@example.com` |
| `ruf` | **Reporting URI for failure reports**: An email address to which forensic reports are sent. | `mailto:address@example.com` |
| `adkim` | **DKIM alignment mode** | `r` (relaxed), `s` (strict) |
| `aspf` | **SPF alignment mode**| `r` (relaxed), `s` (strict) |
| `fo` | **Forensic options**: Controls when forensic reports are generated.| `0` (all failures), `1` (any failure), `d` (DKIM failure), `s` (SPF failure) |
| `sp` | **Subdomain policy**: The policy to apply to subdomains. | `none`, `quarantine`, `reject` |
| `ri` | **Report interval**: The interval in seconds between aggregate reports.| A number representing seconds. The default is `86400` (1 day). |
| `rf` | **Report format**: The format for failure reports.| `afrf` (Authentication Failure Reporting Format) |
| `rfmt` | **Reporting format**| `afrf` (Authentication Failure Reporting Format) |
| `fo` | **Forensic reporting mode**| `b0`, `1`, `d`, `s` |

## Have more questions?
If you have additional questions or need any assistance with your DMARC records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
