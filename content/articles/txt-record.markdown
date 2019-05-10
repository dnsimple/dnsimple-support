---
title: What's a TXT Record?
excerpt: What a TXT record is, and how to create NS records with DNSimple.
categories:
- DNS
---

# What's a TXT Record?

A TXT record is a resource record used to provide the ability to associate text with a zone. This record allows domain administrators to insert any text content into DNS records. These records are used for various purposes. One example is ownership validation: To prove you own the domain, a provider may require you to add a TXT record with a particular value to your domain.

Common use for TXT records:

| Type | Description |
|------|-------------|
| [`DKIM` records](/articles/dkim-record) | This records stores important information used in the validation of email in transit. |
| DMARC records | Domain-based Message Authentication Reporting and Conformance records to midigate phishing and spoofing email attacks |
| [`SPF` record](/articles/spf-record/) | This records is used to indicate to mail exchanges which hosts are authorized to send mail for a domain. |
| Site Verification Records | This record proves overship of a domain and can be used to associate services such as Microsoft 365 and G-Suite to a specific domain. |

TXT records have replaced SPF records.
