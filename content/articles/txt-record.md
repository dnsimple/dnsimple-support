---
title: What Is a TXT Record?
excerpt: What a TXT record is, why they're useful, and other details about how we manage them.
meta: Learn what TXT records are and discover how they can optimize your domain's DNS settings effectively.
categories:
- DNS
---

# TXT Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a TXT record?

A TXT record (Text record, type 16) is a versatile type of DNS resource record that allows domain administrators to insert arbitrary human-readable or machine-readable text content into their domain's DNS. These records are used for a wide variety of essential purposes beyond just displaying information.

TXT records serve as a flexible mechanism to associate specific textual data with a domain, which can then be retrieved by other systems on the internet.

## Common uses for TXT records
TXT records are highly adaptable and are employed by many internet services for verification, authentication, and policy enforcement. The following are some of their most common applications.

### Email authentication records
- **[DKIM](/articles/dkim-record/) (DomainKeys Identified Mail) records**: These store cryptographic public keys used in the validation of email in transit, helping to ensure that emails are legitimate and haven't been tampered with.

- **[DMARC](/articles/dkim-record/) (Domain-based Message Authentication, Reporting & Conformance) records**: These establish policies for how email receivers should handle messages that fail SPF or DKIM authentication, and they provide reporting mechanisms to domain owners.

- **[SPF](/articles/spf-record/) (Sender Policy Framework) records**: These indicate to receiving mail exchanges which specific hosts or IP addresses are authorized to send mail for a domain, combating email spoofing.

### Site verification records 
Many services, such as Google Search Console, Microsoft 365, or various website builders, require you to add a specific TXT record to your domain's DNS. This acts as proof that you own or control the domain, allowing the service to securely associate your domain with your account.

### Security and other verifications 
TXT records are also used for various other security protocols and verification processes, such as displaying website security policies or providing information for specific service integrations.

These TXT-based policies work alongside [MX records](/articles/mx-record/), which direct where your email should be delivered. While MX records handle delivery, TXT records define who can send and how to validate that email. 

Due to their flexibility, TXT records are a foundational component for ensuring email deliverability, website security, and seamless integration with many online services.

## Handling long TXT records
Sometimes, the content required for a TXT record can be quite long, especially when dealing with cryptographic keys like those used for DKIM. Standard DNS protocols have limitations on the length of a single string within a TXT record (typically 255 characters).

However, you generally don't need to manually split these long records. DNSimple's system transparently handles the complexities of long TXT records. You can usually provide the full, long string as a single value, and our system will automatically manage the necessary splitting and formatting to ensure it's compliant with internet standards when published to DNS.

## Creating and managing TXT records
For step-by-step instructions on how to add, edit, or remove TXT records (including how DNSimple handles your input for formatting and character limits) in your DNSimple zone, please refer to our dedicated How-To Guide: [How to Add DNS Records](/articles/how-to-add-dns-records/).

## TXT record formatting and validation reference
For detailed information on the specific formatting rules for TXT record content, validation constraints (including overall character limits and handling of quotes and special characters), and an in-depth explanation of how DNSimple manages the splitting and joining of long TXT records, consult our comprehensive Reference Guide: [TXT Record Formatting and Long Record Handling](/articles/txt-record-format/)

## Have more questions?
If you have additional questions or need any assistance with your TXT records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
