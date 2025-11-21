---
title: Setting Up SPF Records
excerpt: How to set up SPF records in your DNSimple account.
meta: Learn how to set up SPF records for email authentication and what to expect from your email provider.
categories:
- DNS
- Emails
---

# Setting Up SPF Records

[SPF](/articles/spf-record/) (Sender Policy Framework) helps prevent unauthorized individuals from sending emails on your domain's behalf by specifying which hosts are authorized to send email from your domain.

SPF records are published as [TXT records](/articles/txt-record/) in your DNS zone. The record contains a list of IP addresses and/or hostnames that are permitted to send email from your domain.

<info>
**Important announcement:**
**As of August 11th, 2025, SPF records defined using the dedicated SPF RR (Resource Record type 99) are no longer supported by major email providers and DNS services.** All SPF records must now be defined using the **TXT record type**. This documentation reflects the current recommended practices for SPF record management using TXT records. For more information, please see our [official announcement](https://blog.dnsimple.com/2025/07/discontinuing-spf-record-type/). 
</info>

## Steps to set up SPF

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain where you want to set up SPF.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click **Add record**, and select **TXT** as the record type.
1. Enter the SPF record information:

   - **Name field:** Leave this blank or enter `@` to create the record at the root of your domain (e.g., `yourdomain.com`). This is the standard location for SPF records.
   
   - **Content field:** Enter your SPF record. SPF records must start with `v=spf1`. A basic SPF record might look like this:
   
   ```
   v=spf1 include:_spf.google.com ~all
   ```
   
   Or for a domain that sends email from its own mail server:
   
   ```
   v=spf1 ip4:192.0.2.1 ~all
   ```

<warning>
A domain should have only **one** SPF record. If you already have an SPF record, you should modify the existing record rather than creating a new one. Multiple SPF records can cause email delivery issues.
</warning>

## Common SPF record examples

**Google Workspace:**
```
v=spf1 include:_spf.google.com ~all
```

**Microsoft 365:**
```
v=spf1 include:spf.protection.outlook.com ~all
```

**SendGrid:**
```
v=spf1 include:sendgrid.net ~all
```

**Postmark:**
```
v=spf1 include:spf.mtasv.net ~all
```

**Multiple providers:**
```
v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
```

**Domain's own mail server plus providers:**
```
v=spf1 ip4:192.0.2.1 include:_spf.google.com ~all
```

## Understanding SPF mechanisms

SPF records use various mechanisms to specify authorized senders:

- `include:` - Include the SPF record from another domain (commonly used for email service providers).
- `ip4:` - Authorize a specific IPv4 address or range.
- `ip6:` - Authorize a specific IPv6 address or range.
- `a` - Authorize the domain's A record.
- `mx` - Authorize the domain's MX records.
- `~all` - Soft fail for all other senders (recommended for gradual deployment).
- `-all` - Hard fail for all other senders (strict policy).
- `?all` - Neutral for all other senders (testing mode).

For a comprehensive breakdown of SPF record format, all available mechanisms and modifiers, their specific syntax, and important validation rules (including the 10-DNS-lookup limit), consult our Reference Guide: [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/).

## Managing SPF records

SPF records are added as TXT records. To update or remove them, follow the instructions in the [Record Editor guide](/articles/record-editor/).

<info>
Remember: A domain should have only one SPF record. If you need to authorize multiple email providers, combine them using multiple `include:` mechanisms in a single SPF record.
</info>

## Verifying your SPF record

After setting up your SPF record, you should verify it's working correctly. For step-by-step instructions, see [Verifying SPF with dig and Online Tools](/articles/verifying-spf/).

## Technical details

The specification for the Sender Policy Framework is primarily defined in [RFC 7208](https://datatracker.ietf.org/doc/html/rfc7208), which supersedes RFC 4408.

## Have more questions?

If you have additional questions or need any assistance with your SPF records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


