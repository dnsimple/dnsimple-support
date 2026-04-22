---
title: Email Authentication Best Practices
excerpt: Comprehensive guide to email authentication best practices for SPF, DKIM, and DMARC.
meta: Best practices guide for email authentication, covering SPF, DKIM, and DMARC configuration and management.
categories:
- Emails
---

# Email Authentication Best Practices

### Table of Contents {#toc}

* TOC
{:toc}

---

Once you have [set up email authentication](/articles/email-authentication/) (SPF, DKIM, and DMARC), these best practices help you maintain, monitor, and optimize your configuration over time.

## SPF best practices {#spf}

### Use appropriate qualifiers

**Best practice:** Use `~all` (soft fail) initially, then move to `-all` (hard fail) once everything is working.

**Why:** `~all` allows you to identify issues without blocking emails, while `-all` provides stronger protection.

**How:**
- Start with `~all` for testing
- Monitor SPF failures
- Move to `-all` only after confirming all legitimate sources are included

### Keep SPF record under 10 lookups

**Best practice:** Keep your SPF record under the 10 DNS lookup limit.

**Why:** SPF has a limit of 10 DNS lookups. Exceeding this causes SPF to fail.

**How:**
- Count `include:` mechanisms (each counts as a lookup)
- Use `ip4:` and `ip6:` for direct IPs when possible
- Consolidate services when possible
- Remove unused includes

### Test SPF regularly

**Best practice:** Test SPF records regularly to ensure they are working correctly.

**Why:** Changes to email services or DNS can break SPF.

**How:**
- Use `dig +short yourdomain.com TXT | grep "v=spf1"` to verify
- Use online SPF checkers
- Send test emails and check headers
- Monitor SPF failures in DMARC reports

## DKIM best practices {#dkim}

### Configure DKIM for all email services

**Best practice:** Enable DKIM for all services that send email on your behalf.

**Why:** DKIM provides cryptographic authentication and improves deliverability.

**How:**
- Enable DKIM for email hosting providers
- Configure DKIM for transactional email services
- Set up DKIM for marketing platforms
- Document all DKIM selectors

### Use appropriate key length

**Best practice:** Use 2048-bit DKIM keys (or as recommended by your email provider).

**Why:** Longer keys provide better security, but 1024-bit keys are still acceptable.

**How:**
- Check your email provider's recommendations
- Use 2048-bit keys when available
- 1024-bit keys are acceptable if 2048-bit keys are not available

### Manage multiple DKIM selectors

**Best practice:** Document and manage all DKIM selectors.

**Why:** Multiple selectors are common and need to be managed properly.

**How:**
- Keep a list of all selectors and their purposes
- Document which service uses which selector
- Remove selectors when services are discontinued
- Test each selector regularly

> [!NOTE]
> For detailed information, see [Manage Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

### Verify DKIM signatures

**Best practice:** Regularly verify that DKIM signatures are working correctly.

**Why:** DKIM can fail silently if not properly configured.

**How:**
- Send test emails and check headers
- Look for `DKIM-Signature` headers
- Verify `d=` tag matches your domain
- Use online DKIM checkers

### Rotate DKIM keys periodically

**Best practice:** Rotate DKIM keys periodically for security.

**Why:** Regular key rotation improves security.

**How:**
- Follow your email provider's key rotation recommendations
- Typically rotate every 6-12 months
- Use key rotation features if available
- Test after rotation

## DMARC best practices {#dmarc}

### Implement gradually

**Best practice:** Implement DMARC gradually, starting with monitoring.

**Why:** Gradual implementation helps identify issues before they affect delivery.

**How:**
1. Start with `p=none` (monitoring)
2. Fix all authentication issues
3. Move to `p=quarantine` with percentage enforcement
4. Gradually increase to full quarantine
5. Finally move to `p=reject` with percentage enforcement
6. Gradually increase to full reject

> [!NOTE]
> For detailed steps, see [Implement a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).

### Set up reporting

**Best practice:** Always configure DMARC reporting (`rua` and optionally `ruf`).

**Why:** Reports provide visibility into your email authentication status.

**How:**
- Set up `rua=mailto:dmarc@yourdomain.com` for aggregate reports
- Optionally set up `ruf=mailto:dmarc-forensic@yourdomain.com` for forensic reports
- Use report aggregation services for easier analysis
- Review reports regularly

### Use relaxed alignment initially

**Best practice:** Use relaxed alignment (`aspf=r`, `adkim=r`) initially.

**Why:** Relaxed alignment is more flexible and easier to achieve.

**How:**
- Start with relaxed alignment
- Move to strict alignment only if needed and after thorough testing
- Default is relaxed if not specified

### Monitor reports regularly

**Best practice:** Review DMARC reports regularly (weekly or bi-weekly).

**Why:** Reports help identify issues and unauthorized use of your domain.

**How:**
- Set up a process for reviewing reports
- Look for authentication failures
- Identify unknown email sources
- Fix issues promptly

## General best practices {#general}

### Test before major changes

**Best practice:** Test authentication changes before implementing them.

**Why:** Prevents breaking email delivery.

**How:**
- Test in a staging environment if possible
- Use test email addresses
- Verify with online tools
- Check email headers after changes

### Monitor continuously

**Best practice:** Continuously monitor email authentication status.

**Why:** Issues can arise at any time.

**How:**
- Set up alerts for authentication failures
- Review DMARC reports regularly
- Monitor sender reputation
- Check email deliverability metrics

### Keep records updated

**Best practice:** Keep authentication records updated when email services change.

**Why:** Outdated records can cause authentication failures.

**How:**
- Update SPF when adding/removing services
- Update DKIM when services change selectors
- Review DMARC policy periodically
- Remove unused records

### Use subdomains strategically

**Best practice:** Use subdomains for different email purposes when appropriate.

**Why:** Subdomains can help organize and manage different email services.

**How:**
- Use `mail.example.com` for email hosting
- Use `transactional.example.com` for transactional emails
- Use `marketing.example.com` for marketing emails
- Configure authentication for each subdomain

## Related articles {#related}

- [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/) - Initial setup and common mistakes
- [SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements
- [Implement a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) - Gradual DMARC rollout
- [Monitor Email Deliverability](/articles/monitoring-email-deliverability/) - Ongoing monitoring routine
- [Troubleshoot Email Authentication](/articles/troubleshooting-email-authentication/) - Diagnosing failures

## Have more questions?

If you have additional questions or need any assistance with email authentication best practices, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
