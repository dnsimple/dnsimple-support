---
title: Troubleshooting Email Authentication
excerpt: A comprehensive guide to diagnosing and resolving common email authentication problems.
meta: Learn how to troubleshoot SPF, DKIM, and DMARC authentication issues to improve email deliverability and security.
categories:
- Emails
---

# Troubleshooting Email Authentication

### Table of Contents {#toc}

* TOC
{:toc}

---

Email authentication protocols (SPF, DKIM, and DMARC) help protect your domain from spoofing and improve email deliverability. When these protocols aren't working correctly, you may experience issues with email delivery, emails being marked as spam, or authentication failures.

This guide will help you diagnose and resolve common email authentication problems.

## Common authentication issues

### SPF authentication failures

**Problem:** Emails are failing SPF checks, causing them to be rejected or marked as spam.

**Possible causes:**
- SPF record is missing or not published
- SPF record doesn't include all authorized sending servers
- Multiple SPF records exist (a domain should have only one)
- SPF record syntax errors
- DNS propagation delays

**Solutions:**
1. **Verify SPF record exists:** Use `dig` or an online tool to check if your SPF record is published:
   ```
   dig +short yourdomain.com TXT | grep "v=spf1"
   ```

2. **Check SPF record content:** Ensure your SPF record includes all email providers you use. Common includes:
   - `include:_spf.google.com` for Google Workspace
   - `include:spf.protection.outlook.com` for Microsoft 365
   - `include:sendgrid.net` for SendGrid
   - `include:spf.mtasv.net` for Postmark

3. **Consolidate multiple SPF records:** If you have multiple SPF records, combine them into a single record:
   ```
   v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
   ```

4. **Verify syntax:** SPF records must start with `v=spf1` and use proper syntax. Check for typos or missing colons.

5. **Check DNS propagation:** Allow time for DNS changes to propagate (typically a few minutes to a few hours).

For more details, see [Verifying SPF with dig and Online Tools](/articles/verifying-spf/).

### DKIM authentication failures

**Problem:** Emails are failing DKIM checks, causing authentication failures.

**Possible causes:**
- DKIM record is missing or not published
- DKIM selector is incorrect
- DKIM record is at the wrong subdomain
- DKIM key mismatch between signing and DNS
- DNS propagation delays

**Solutions:**
1. **Verify DKIM record exists:** Use `dig` to check if your DKIM record is published:
   ```
   dig +short selector._domainkey.yourdomain.com TXT
   ```
   Replace `selector` with the selector provided by your email service.

2. **Check subdomain:** DKIM records are published at `selector._domainkey.yourdomain.com`. Ensure the record is at the correct subdomain.

3. **Verify record content:** The DKIM record should start with `v=DKIM1` and contain the public key. Ensure the entire key is present and correctly formatted.

4. **Check selector:** Different email services use different selectors. Ensure you're using the correct selector for your email service.

5. **Verify key match:** The public key in your DNS must match the private key used by your email service to sign emails. Contact your email service provider if keys don't match.

For more details, see [Verifying DKIM with dig and Online Tools](/articles/verify-dkim/).

### DMARC authentication failures

**Problem:** Emails are failing DMARC checks, causing them to be rejected or quarantined.

**Possible causes:**
- DMARC record is missing or not published
- SPF or DKIM is failing (DMARC requires at least one to pass)
- SPF or DKIM alignment is failing
- DMARC policy is too strict
- DNS propagation delays

**Solutions:**
1. **Verify DMARC record exists:** Use `dig` to check if your DMARC record is published:
   ```
   dig +short _dmarc.yourdomain.com TXT
   ```

2. **Check SPF and DKIM first:** DMARC requires SPF or DKIM to pass. Fix SPF and DKIM issues before addressing DMARC.

3. **Verify alignment:** DMARC checks that the "From" domain aligns with the SPF or DKIM domain. Ensure:
   - SPF alignment: The "From" domain matches the domain used for SPF check
   - DKIM alignment: The "From" domain matches the domain in the DKIM signature

4. **Start with monitoring:** Begin with `p=none` to monitor DMARC without affecting email delivery:
   ```
   v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
   ```

5. **Gradually increase policy:** Once you've verified everything is working, gradually increase the policy:
   - `p=quarantine` - Treat failures as suspicious
   - `p=reject` - Reject failures (use only after thorough testing)

6. **Review DMARC reports:** Check the reports sent to the address in your `rua` tag to identify authentication issues.

For more details, see [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/).

## General troubleshooting steps

### 1. Verify DNS records are published

Use `dig` or online tools to verify your authentication records are published:

**SPF:**
```
dig +short yourdomain.com TXT | grep "v=spf1"
```

**DKIM:**
```
dig +short selector._domainkey.yourdomain.com TXT
```

**DMARC:**
```
dig +short _dmarc.yourdomain.com TXT
```

### 2. Check DNS propagation

DNS changes can take time to propagate. Use online tools like [whatsmydns.net](https://www.whatsmydns.net/) to check if your records have propagated globally.

### 3. Test email authentication

Send a test email and check the authentication results:

- **Gmail:** View the email headers and look for `Authentication-Results`
- **Online tools:** Use services like [Mail-Tester](https://www.mail-tester.com/) to test your email authentication

### 4. Review email headers

Email headers contain authentication information. Look for:
- `Received-SPF:` - SPF authentication result
- `DKIM-Signature:` - DKIM signature information
- `Authentication-Results:` - Overall authentication results

### 5. Check for common mistakes

- **Multiple SPF records:** A domain should have only one SPF record
- **Wrong subdomain:** DKIM and DMARC records must be at the correct subdomains
- **Syntax errors:** Check for typos, missing colons, or incorrect formatting
- **Missing mechanisms:** Ensure all authorized senders are included in SPF

## Getting help

If you're still experiencing issues after following these troubleshooting steps:

1. **Check our reference guides:**
   - [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/)
   - [DKIM Record Reference](/articles/dkim-record-reference/)
   - [DMARC Record Reference](/articles/dmarc-record-reference/)

2. **Contact your email service provider:** They can help verify your authentication configuration is correct for their service.

3. **Contact DNSimple support:** [Contact support](https://dnsimple.com/feedback) with details about your issue, and we'll be happy to help.

## Have more questions?

If you have additional questions or need any assistance with email authentication, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


