---
title: dig Reference Guide
excerpt: a quick reference for dig, its syntax, and its output.
categories:
- DNS
---

# dig Reference Guide

This document serves as a quick reference for the `dig` command-line tool, its syntax, and its output. View [How to Use dig](/articles/how-dig/) to learn how to use `dig`.

## Basic syntax and options

The basic syntax for a `dig` command is:

`dig [options] [name] [type]`

- `[name]`: The domain name you want to query (e.g., `dnsimple.com`).
- `[type]`: The record type you want to query (e.g., `A`, `MX`, `CNAME`). If no type is specified, `dig` queries for `A` records.
- `[options]`: Flags to modify the query.

### Common options:

- `+short`: Returns only the answer, in a concise format.
- `@server`: Specifies a different DNS server to query (e.g., `@8.8.8.8` for Google's public DNS).
- `+trace`: Traces the DNS query from the root name servers down to the authoritative servers.

## Common queries

- **Query for an A record**: `dig dnsimple.com A`
- **Query for an MX record**: `dig dnsimple.com MX`
- **Query for a CNAME record**: `dig www.dnsimple.com CNAME`
- **Query for all records**: `dig dnsimple.com ANY`

### The ANY query type

An `ANY` query is a request to a DNS server for all available records for a given domain name. While it's a valid DNS query, it has been deprecated in recent RFCs due to its use in DDoS attacks. Because of this, many DNS providers, including DNSimple, limit their functionality for security and performance reasons. 

DNSimple's systems will respond to `ANY` queries, but the response may be incomplete. For troubleshooting, we recommend using a tool like `dig` to query for specific record types (e.g., A, MX, CNAME) individually, as this gives you a more precise and reliable response.

## Breakdown of a dig response

A standard `dig` output is divided into several sections:

- **HEADER**: Provides information about the query and response, like the status code. A status of `NOERROR` indicates a successful query.
- **QUESTION SECTION**: Repeats the query, confirming the domain and record type requested.
- **ANSWER SECTION**: The most important section. This contains the actual DNS records that were found for the query.
- **AUTHORITY SECTION**: Lists the authoritative name servers for the domain.
- **ADDITIONAL SECTION**: Provides other records that may be relevant to the query, like the IP addresses of the authoritative name servers listed in the AUTHORITY section.

## Have more questions?
If you have additional questions or need any assistance troubleshooting your DNS, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
