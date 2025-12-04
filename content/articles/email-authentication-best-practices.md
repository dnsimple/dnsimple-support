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

Following email authentication best practices is essential for good email deliverability, security, and protection against spoofing. This guide covers best practices for SPF, DKIM, and DMARC.

## Overview

Email authentication best practices include:

- **Proper configuration:** Set up SPF, DKIM, and DMARC correctly
- **Regular monitoring:** Monitor authentication status and reports
- **Gradual implementation:** Implement policies gradually
- **Ongoing maintenance:** Keep authentication records updated
- **Documentation:** Document your email ecosystem

## SPF best practices

### Include all authorized senders

**Best practice:** Include all services that send email on your behalf in your SPF record.

**Why:** Missing authorized senders can cause SPF failures and delivery issues.

**How:**
- List all email hosting providers
- Include all transactional email services
- Include all marketing platforms
- Include any other services that send email

**Example:**
```
v=spf1 include:_spf.google.com include:spf.mtasv.net include:sendgrid.net ~all
```

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

### One SPF record per domain

**Best practice:** Have only one SPF record per domain.

**Why:** Multiple SPF records cause SPF to fail.

**How:**
- Check for existing SPF records before adding a new one
- Modify existing SPF record instead of creating a new one
- Combine multiple SPF records into one

### Test SPF regularly

**Best practice:** Test SPF records regularly to ensure they're working correctly.

**Why:** Changes to email services or DNS can break SPF.

**How:**
- Use `dig +short yourdomain.com TXT | grep "v=spf1"` to verify
- Use online SPF checkers
- Send test emails and check headers
- Monitor SPF failures in DMARC reports

## DKIM best practices

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
- 1024-bit keys are acceptable if 2048-bit aren't available

### Manage multiple DKIM selectors

**Best practice:** Document and manage all DKIM selectors.

**Why:** Multiple selectors are common and need to be managed properly.

**How:**
- Keep a list of all selectors and their purposes
- Document which service uses which selector
- Remove selectors when services are discontinued
- Test each selector regularly

<info>
For detailed information, see [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).
</info>

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

## DMARC best practices

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

<info>
For detailed steps, see [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).
</info>

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

### Document your email ecosystem

**Best practice:** Document all services that send email from your domain.

**Why:** Documentation helps manage authentication and identify issues.

**How:**
- List all email hosting providers
- Document all transactional email services
- Note all marketing platforms
- Keep DKIM selectors documented
- Update documentation when services change

## General best practices

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

### Document your configuration

**Best practice:** Document your email authentication configuration.

**Why:** Documentation helps with troubleshooting and future management.

**How:**
- Document all SPF includes
- List all DKIM selectors
- Note DMARC policy and settings
- Keep records of changes

## Common mistakes to avoid

### ❌ Don't start with reject policy

**Mistake:** Starting DMARC with `p=reject` immediately.

**Why:** Can block legitimate emails if authentication isn't properly configured.

**Solution:** Always start with `p=none` (monitoring).

### ❌ Don't ignore DMARC reports

**Mistake:** Setting up DMARC but not reviewing reports.

**Why:** Reports provide valuable information about authentication status.

**Solution:** Review reports regularly and act on findings.

### ❌ Don't have multiple SPF records

**Mistake:** Creating multiple SPF records instead of combining them.

**Why:** Multiple SPF records cause SPF to fail.

**Solution:** Have only one SPF record and combine all includes.

### ❌ Don't forget to update records

**Mistake:** Not updating authentication records when services change.

**Why:** Can cause authentication failures.

**Solution:** Keep records updated and review regularly.

### ❌ Don't skip testing

**Mistake:** Making changes without testing.

**Why:** Can break email delivery.

**Solution:** Always test changes before full implementation.

## Best practices summary

**SPF:**
- ✅ Include all authorized senders
- ✅ Use `~all` initially, then `-all`
- ✅ Keep under 10 lookups
- ✅ One SPF record per domain
- ✅ Test regularly

**DKIM:**
- ✅ Configure for all services
- ✅ Use appropriate key length
- ✅ Manage multiple selectors
- ✅ Verify signatures
- ✅ Rotate keys periodically

**DMARC:**
- ✅ Implement gradually
- ✅ Set up reporting
- ✅ Use relaxed alignment initially
- ✅ Monitor reports regularly
- ✅ Document email ecosystem

**General:**
- ✅ Test before changes
- ✅ Monitor continuously
- ✅ Keep records updated
- ✅ Use subdomains strategically
- ✅ Document configuration

## Related topics

- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF setup
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM setup
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Troubleshooting
- [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment
- [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) - Gradual implementation

## Have more questions?

If you have additional questions or need any assistance with email authentication best practices, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
