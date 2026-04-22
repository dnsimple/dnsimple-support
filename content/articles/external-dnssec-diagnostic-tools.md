---
title: External DNSSEC Diagnostic Tools
excerpt: Test and check your DNSSEC configuration with external diagnostic tools like DNSSEC Analyzer, DNSViz, and dig.
meta: Test your DNSSEC configuration with DNSSEC Analyzer, DNSViz, and dig. Validate your chain of trust and identify common DNSSEC issues.
categories:
- DNSSEC
---

# External DNSSEC Diagnostic Tools

Use these tools to test your DNSSEC configuration and check whether your domain's chain of trust is valid. They help identify common problems such as missing DS records, expired signatures, or DNSKEY mismatches.

## How to test your DNSSEC configuration {#how-to-test-your-dnssec-configuration}

To check if DNSSEC is working correctly for your domain, run your domain through one or more of the tools listed below. Start with DNSSEC Analyzer for a quick pass/fail overview, then use DNSViz if you need a visual breakdown of where the chain of trust fails. For command-line validation, use `dig +dnssec` locally.

## DNSSEC Analyzer (Verisign/ICANN) {#dnssec-analyzer-verisignicann}
https://dnssec-analyzer.verisignlabs.com/

Checks whether a domain validates correctly with DNSSEC and reports configuration problems including DS record mismatches, missing DNSKEY records, and expired signatures.

## DNSViz {#dnsviz}
https://dnsviz.net/

Provides a visual representation of the DNSSEC chain of trust and highlights where validation fails between the parent zone and the authoritative DNS provider.

## Local validation using dig {#local-validation-using-dig}

You can also perform DNSSEC validation checks from your own system using the `dig` command.

Example:
dig +dnssec example.com

Look for:
• AD flag (validated response)
• RRSIG records
• DNSKEY responses

For usage details, reference the "How to Use dig" and "dig Reference Guide" articles.
