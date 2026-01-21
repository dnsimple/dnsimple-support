---
title: Verifying SPF with dig and Online Tools
excerpt: How to verify your SPF record is being returned correctly.
meta: Learn how to verify your SPF record is working and find online tools to help monitor.
categories:
- DNS
- Emails
---

# Verifying SPF with dig and Online Tools

## Verifying SPF with dig

The `dig` tool is a good way to verify your SPF record is being returned correctly by our DNS servers. To learn more about `dig`, see [How To Use dig](/articles/how-dig/).

To verify the SPF record, query for the TXT record at the root of your domain (or the subdomain where you published the SPF record).

For example, on the domain `example.com`, you can get the TXT record using the following query:

```
dig +short example.com TXT
```

This will return all TXT records for the domain, including your SPF record. The SPF record will start with `v=spf1`:

```
"v=spf1 include:_spf.google.com ~all"
```

If you want to filter for just SPF records, you can use:

```
dig +short example.com TXT | grep "v=spf1"
```

If no result is returned, verify that you added the TXT record with the correct name. Remember, the **Name** field in DNSimple should be blank or `@` for the root domain, otherwise it would create a record at a subdomain.

<info>
A domain should have only one SPF record. If you see multiple TXT records starting with `v=spf1`, you should consolidate them into a single record.
</info>

## Verifying your SPF with an online tool

Verify your SPF record with an online tool like [MXToolbox SPF Record Lookup](https://mxtoolbox.com/spf.aspx). This tool:

- Verifies that you have an SPF record published
- Shows the content of your SPF record
- Validates the SPF record syntax
- Alerts you to any problems with your record
- Shows which IP addresses are authorized to send email

Another useful tool is [SPF Record Checker](https://www.spf-record.com/), which provides detailed analysis of your SPF record and helps identify potential issues.

## Understanding SPF validation results

When verifying your SPF record, you may see different results:

- **Pass:** The SPF check passed, meaning the sender is authorized.
- **Fail:** The SPF check failed, meaning the sender is not authorized (if using `-all`).
- **Softfail:** The SPF check soft-failed, meaning the sender is not authorized but the email may still be accepted (if using `~all`).
- **Neutral:** The SPF check returned neutral, meaning no policy is specified (if using `?all`).
- **None:** No SPF record was found for the domain.

## Common issues and solutions

**Multiple SPF records:** If you have multiple SPF records, you need to consolidate them into a single record. Multiple SPF records can cause email delivery issues.

**Syntax errors:** SPF records must start with `v=spf1` and use proper syntax. Check for typos or missing colons after mechanisms (e.g., `include:` not `include`).

**Too many DNS lookups:** SPF records are limited to 10 DNS lookups. If your SPF record exceeds this limit, you may need to simplify it or use IP addresses instead of `include:` mechanisms.

**Missing mechanisms:** Ensure your SPF record includes all the email providers you use. Missing an authorized sender can cause legitimate emails to fail SPF checks.

## Technical details

For more information about the technical details of SPF, head over to [OpenSPF.org](https://www.openspf.org/).

If you want more details on SPF record formats and validation, view our [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/).

## Have more questions?

If you have additional questions or need any assistance with your SPF records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


