---
title: Troubleshooting DNSSEC
excerpt: A comprehensive guide to diagnosing and resolving common DNSSEC issues for your domain, including checks for DS records, DNSKEYs, RRSIGs, and NSEC/NSEC3 records. Learn how to use essential tools like DNSSEC Analyzer, DNSViz, and dig.
meta: Troubleshoot DNSSEC with our detailed guide, covering DS records, DNSKEYs, RRSIGs, and NSEC/NSE to ensure your domain's security.
categories:
  - DNSSEC
---

# Troubleshooting DNSSEC

If you're new to DNSSEC, start with [What Is DNSSEC?](/articles/what-is-dnssec/) to understand what DNSSEC is and how it works. For a comprehensive overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

### Table of Contents {#toc}

* TOC
{:toc}
---

## Is DNSSEC active for your DNSimple domain?

There are two ways to check this:

1. **Domain Names List**: In your list of domains, look for a `DNSSEC` label on the domain. If present, it indicates DNSSEC is enabled.
1. **DNSSEC card**: When you are on the domain page, click the `DNSSEC` tab on the left side. On this page, you can see the DNSSEC state.

### Essential tools for diagnosing DNSSEC issues

Before attempting fixes, verify the DNSSEC state of the domain using external diagnostic tools. These tools help identify where the DNSSEC chain of trust is failing and are often the fastest way to understand the problem.

See **External DNSSEC Diagnostic Tools** for a list of recommended tools and what each one checks.

After identifying the reported error, return here and follow the resolution steps below.

## Common DNSSEC issues and their resolutions
This section details the most frequent problems identified by the tools and provides actionable steps to fix them, ensuring your DNSSEC is properly set up with DNSimple.

### Incorrect or missing DS records in the parent zone (registrar not DNSimple)
**Symptoms**: DNSSEC Analyzer/DNSViz report "No DS records found for domain" or "DS record mismatch." `dig` output lacks the `AD` flag. This is the single most common cause of DNSSEC validation failure.

**Why it happens**: The DS records weren't provisioned, were provisioned incorrectly, or haven't propagated yet.

**Resolution steps**:

1. **Verify DNSimple's DS records**: Go to the DNSSEC tab of your domain in your DNSimple account, and copy the exact DS record values provided.
1. **Access your registrar**: Log in to your domain registrar's website and provision the DS record. Instructions will vary depending on your particular domain registrar (e.g., GoDaddy, Namecheap, etc.).
1. **Allow propagation**: Registrar updates can take anywhere from a few seconds to a few hours, and cached DS records will invalidate after 24 hours. Re-check with DNSSEC Analyzer.

### Expired RRSIG (Resource Record Signature) records
**Symptoms**: DNSSEC Analyzer/DNSViz show "Signature Expired" or "RRSIG Validation Failure."

**Why it happens**: A DNSSEC operation on your domain didn't successfully complete, and DNSSEC key sets were left in place, eventually getting expired.

**Resolution steps**:
1. **Check your email inbox**: Check your email for any automated DNSSEC notifications, and follow the included instructions. Our system will automatically notify you when a DNSSEC operation doesn't complete successfully.

## Contact DNSimple support
Please reach out to our [expert support team](https://www.dnsimple.com/contact) at DNSimple about any DNSSEC-related issues.

Before contacting support, please gather the following information:

- **Your domain name**: _(e.g., `yourwebsite.com`)_
- **Description of the problem**: What exactly is failing? (e.g., "DNSSEC Analyzer shows 'DS record mismatch'," "My site isn't loading for users in Europe when DNSSEC is enabled").
- **Tools used and their output**:
  - Screenshots from DNSSEC Analyzer and DNSViz are incredibly helpful.
  - The exact `dig +dnssec` output.
  - Any specific error messages you've encountered.
- **Steps you've already taken**: (e.g., "I've verified DS records at my registrar multiple times," "I've tried toggling DNSSEC off and on in DNSimple").
- **Time of observation**: When did you first notice the issue?

Providing this information allows our support team to diagnose and resolve your DNSSEC issue much more quickly, getting your secure DNS up and running again.
