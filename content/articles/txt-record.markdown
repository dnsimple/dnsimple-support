---
title: What's a TXT Record?
excerpt: What a TXT record is, and how to create NS records with DNSimple.
categories:
- DNS
---

# What's a TXT Record?

A TXT record is a resource record used to provide the ability to associate text with a zone. This record allows domain administrators to insert any text content into DNS records. These records are used for various purposes. One example is ownership validation: To prove you own the domain, a provider may require you to add a TXT record with a particular value to your domain.

Common uses for TXT records:

| Type | Description |
|------|-------------|
| [`DKIM` records](/articles/dkim-record) | This record stores important information used in the validation of email in transit. |
| DMARC records | Domain-based Message Authentication Reporting and Conformance records mitigate phishing and spoofing email attacks. |
| [`SPF` record](/articles/spf-record/) | This record is used to indicate to mail exchanges which hosts are authorized to send mail for a domain. TXT records should be used instead of the special SPF record type. |
| Site Verification Records | This record proves ownership of a domain and can be used to associate services such as Microsoft 365 and G-Suite to a specific domain. |

TXT record content longer than 255 characters will automatically be broken into quoted strings of 255 characters maximum. If you have TXT record content that is longer than 255 characters, such as a DKIM value, our system will automatically handle those records; you do not need to break the record into quoted strings.
