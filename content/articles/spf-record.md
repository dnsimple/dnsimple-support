---
title: What Is an SPF Record?
excerpt: What an SPF record is, and how the SPF record works.
meta: Learn what an SPF record is and how it functions to protect your domain from email spoofing, ensuring your messages reach their intended recipients securely.
categories:
- DNS
---

# SPF Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What Is an SPF Record?
The Sender Policy Framework (SPF) record is a crucial email authentication method that helps prevent unauthorized individuals from sending emails on your domain's behalf. Its primary purpose is to indicate to receiving mail servers which hosts (IP addresses or domains) are authorized to send email from your domain.

In an environment where email spoofing (faking the sender's address) is rampant, SPF records act as a digital permit, allowing receiving mail servers to verify the authenticity of the sender's origin. This significantly reduces the likelihood of phishing attacks, spam, and other malicious activities that exploit domain impersonation.

> [!NOTE]
> **Important announcement:**
> **As of August 11th, 2025, SPF records defined using the dedicated SPF RR (Resource Record type 99) are no longer supported by major email providers and DNS services.** All SPF records must now be defined using the **TXT record type**. This documentation has been updated to reflect the current recommended practices for SPF record management using TXT records. For more information, please see our [official announcement](https://blog.dnsimple.com/2025/07/discontinuing-spf-record-type/).

## How SPF works: authorizing your senders
When an email is sent, the recipient's mail server performs a lookup of the sender's domain's SPF record. This record, which is always a [TXT record](/articles/txt-record/) in DNS, contains a list of IP addresses and/or hostnames that are permitted to send email from that domain.

The process typically follows these steps:
1. An email arrives at a recipient's mail server, claiming to be from `yourdomain.com`.
1. The recipient's mail server identifies the IP address from which the email originated.
1. It queries the DNS for the SPF record (a TXT record starting with `v=spf1`) for `yourdomain.com`.
1. The SPF record contains various mechanisms that list authorized senders (e.g., specific IP addresses, other domains that send on your behalf, your own mail server).
1. The recipient's mail server compares the originating IP address of the email with the list in the SPF record.
1. Based on this comparison, and a specified qualifier (like `+pass`, `-fail`, `~softfail`, or `?neutral`), the receiving server decides whether to accept, reject, or mark the email as suspicious.

This mechanism allows you, the domain owner, to explicitly declare your sending policy. This gives receiving mail servers the information they need to make informed decisions about incoming messages.

## Key benefits of SPF:
**Combats email spoofing:** Prevents unauthorized parties from sending emails that appear to originate from your domain.

**Improves email deliverability:** Emails from domains with properly configured SPF records are more likely to be trusted and delivered to inboxes, avoiding spam folders.

**Enhances domain reputation:** Helps maintain a positive sending reputation for your domain, which is crucial for overall email success.

SPF is often used as part of a comprehensive email authentication strategy. It works in conjunction with [DKIM](/articles/dkim-record/) (DomainKeys Identified Mail) and [DMARC](/articles/dmarc-record/) (Domain-based Message Authentication, Reporting & Conformance) to provide robust email security.

## Creating, managing, and validating SPF records
For step-by-step instructions on how to create, edit, or remove SPF records (using TXT records) in your DNSimple zone, please refer to [How To Add Common DNS Records](/articles/how-to-add-dns-records/) (A, AAAA, CNAME, ALIAS, TXT, URL, NS).

For a comprehensive breakdown of the SPF record format, all available mechanisms and modifiers, their specific syntax, and important validation rules (including the 10-DNS-lookup limit), consult our Reference Guide: [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/).

## Technical details
The specification for the Sender Policy Framework is primarily defined in [RFC 7208](https://datatracker.ietf.org/doc/html/rfc7208), which supersedes RFC 4408.

## Have more questions?
If you have additional questions or need any assistance with your SPF records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
