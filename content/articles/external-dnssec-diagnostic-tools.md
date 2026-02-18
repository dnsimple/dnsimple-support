---
title: External DNSSEC Diagnostic Tools
excerpt: External tools used to validate and diagnose DNSSEC configuration issues.
meta: Reference page listing DNSSEC diagnostic tools such as DNSSEC Analyzer, DNSViz, and local validation using dig.
categories:
- DNSSEC
---

# External DNSSEC Diagnostic Tools

These external tools can help verify and diagnose DNSSEC configuration issues. They allow you to validate the DNSSEC chain of trust and identify common problems such as missing DS records, expired signatures, or DNSKEY mismatches.

## DNSSEC Analyzer (Verisign/ICANN)
https://dnssec-analyzer.verisignlabs.com/

Checks whether a domain validates correctly with DNSSEC and reports configuration problems including DS record mismatches, missing DNSKEY records, and expired signatures.

## DNSViz
https://dnsviz.net/

Provides a visual representation of the DNSSEC chain of trust and highlights where validation fails between the parent zone and the authoritative DNS provider.

## Local validation using dig

You can also perform DNSSEC validation checks from your own system using the `dig` command.

Example:
dig +dnssec example.com

Look for:
• AD flag (validated response)
• RRSIG records
• DNSKEY responses

For usage details, reference the "How to Use dig" and "dig Reference Guide" articles.
