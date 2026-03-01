---
title: Understanding SPF, DKIM, and DMARC Alignment
excerpt: Learn about alignment requirements for SPF, DKIM, and DMARC and how they affect email authentication.
meta: Detailed explanation of SPF, DKIM, and DMARC alignment requirements and how they work together for email authentication.
categories:
- Emails
---

# Understanding SPF, DKIM, and DMARC Alignment

### Table of Contents {#toc}

* TOC
{:toc}

---

Alignment is a critical concept in email authentication that determines whether SPF, DKIM, and DMARC pass authentication checks. Understanding alignment is essential for properly configuring email authentication and ensuring DMARC policies work correctly.

## What is alignment?

Alignment refers to the relationship between the domain used in email authentication checks and the domain visible to recipients in the "From" address. For DMARC to pass, either SPF or DKIM (or both) must not only pass their individual checks but also be "aligned" with the "From" domain.

## Why alignment matters

DMARC requires alignment because:

- **Prevents spoofing:** Ensures the authenticated domain matches what recipients see
- **Builds trust:** Recipients can trust that emails are from the claimed domain
- **Enables strict policies:** Allows you to use strict DMARC policies (quarantine or reject)
- **Improves deliverability:** Proper alignment improves email deliverability

<info>
**DMARC requirement:** DMARC requires either SPF alignment or DKIM alignment (or both) to pass. Without alignment, DMARC will fail even if SPF and DKIM individually pass.
</info>

## SPF alignment

SPF alignment checks whether the domain used in the SPF check matches the "From" domain.

### How SPF alignment works

1. **SPF check:** The receiving mail server checks SPF using the domain from the "Return-Path" (envelope sender) address
2. **Alignment check:** DMARC then checks if this domain aligns with the "From" domain
3. **Alignment modes:** SPF alignment can be strict or relaxed

### SPF alignment modes

**Strict alignment (SPF-A):**
- The "Return-Path" domain must exactly match the "From" domain
- Example: `From: user@example.com` and `Return-Path: user@example.com` = aligned
- Example: `From: user@example.com` and `Return-Path: user@mail.example.com` = not aligned

**Relaxed alignment (SPF-A):**
- The "Return-Path" domain must be in the same organizational domain as the "From" domain
- Example: `From: user@example.com` and `Return-Path: user@mail.example.com` = aligned (both are example.com)
- Example: `From: user@example.com` and `Return-Path: user@otherdomain.com` = not aligned

### Common SPF alignment issues

**Issue:** Using a third-party email service that changes the Return-Path

**Example:**
- You send from `user@example.com`
- Your email service uses `Return-Path: user@mailservice.com`
- SPF alignment fails because domains don't match

**Solution:**
- Use a subdomain for the email service (e.g., `mail.example.com`)
- Configure SPF to include the email service
- Ensure the Return-Path uses your domain or a subdomain

## DKIM alignment

DKIM alignment checks whether the domain in the DKIM signature matches the "From" domain.

### How DKIM alignment works

1. **DKIM signature:** The sending server signs the email with a DKIM signature
2. **Domain in signature:** The DKIM signature contains a domain (the "d=" tag)
3. **Alignment check:** DMARC checks if this domain aligns with the "From" domain

### DKIM alignment modes

**Strict alignment (DKIM-A):**
- The domain in the DKIM signature must exactly match the "From" domain
- Example: `From: user@example.com` and DKIM `d=example.com` = aligned
- Example: `From: user@example.com` and DKIM `d=mail.example.com` = not aligned

**Relaxed alignment (DKIM-A):**
- The domain in the DKIM signature must be in the same organizational domain as the "From" domain
- Example: `From: user@example.com` and DKIM `d=mail.example.com` = aligned (both are example.com)
- Example: `From: user@example.com` and DKIM `d=otherdomain.com` = not aligned

### Common DKIM alignment issues

**Issue:** Email service uses a different domain for DKIM signing

**Example:**
- You send from `user@example.com`
- Your email service signs with `d=mailservice.com`
- DKIM alignment fails

**Solution:**
- Configure your email service to sign with your domain or a subdomain
- Use a subdomain like `mail.example.com` for the email service
- Ensure DKIM selector points to your domain

## DMARC alignment requirements

DMARC requires alignment for the policy to pass:

### Alignment requirements

1. **SPF must pass AND align:** OR
2. **DKIM must pass AND align:** OR
3. **Both SPF and DKIM pass AND align**

If neither SPF nor DKIM aligns, DMARC fails regardless of individual SPF/DKIM results.

### DMARC alignment modes

DMARC allows you to specify alignment modes:

**Strict mode (`aspf=s`, `adkim=s`):**
- Requires exact domain match
- More secure but less flexible
- Recommended for maximum security

**Relaxed mode (`aspf=r`, `adkim=r`):**
- Allows organizational domain match
- More flexible and easier to achieve
- Default if not specified
- Recommended for most use cases

### Example DMARC record with alignment

```
v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com; aspf=r; adkim=r
```

- `aspf=r`: Relaxed SPF alignment
- `adkim=r`: Relaxed DKIM alignment
- `p=quarantine`: Quarantine emails that fail DMARC

## Achieving alignment

### For SPF alignment

1. **Use your domain for Return-Path:**
   - Configure your email service to use your domain in Return-Path
   - Or use a subdomain of your domain

2. **Configure SPF correctly:**
   - Include your email service in SPF
   - Ensure SPF record authorizes the sending servers

3. **Test alignment:**
   - Send test emails
   - Check DMARC reports
   - Verify alignment in email headers

### For DKIM alignment

1. **Sign with your domain:**
   - Configure your email service to sign with your domain
   - Or use a subdomain of your domain

2. **Publish DKIM records:**
   - Add DKIM records to your DNS
   - Ensure records are at correct subdomains

3. **Test alignment:**
   - Send test emails
   - Check DKIM signature in headers
   - Verify alignment in DMARC reports

## Testing alignment

### Check email headers

After sending a test email, check the headers for:

**SPF alignment:**
- Look for `Authentication-Results` header
- Check for `spf=pass` and alignment information
- Verify `From` domain matches authenticated domain

**DKIM alignment:**
- Look for `DKIM-Signature` header
- Check `d=` tag matches or aligns with `From` domain
- Verify alignment in `Authentication-Results`

### Use DMARC reports

DMARC aggregate reports show alignment status:

- **SPF alignment:** Check `spf` section for alignment status
- **DKIM alignment:** Check `dkim` section for alignment status
- **Overall DMARC:** Check if policy passed (requires alignment)

### Online testing tools

Use tools like:
- Mail-Tester
- MXToolbox
- Google Postmaster Tools

These tools can help verify alignment.

## Common alignment scenarios

### Scenario 1: Using email hosting (Google Workspace, Microsoft 365)

**Setup:**
- Send from `user@example.com`
- Email service signs with `d=example.com` (DKIM)
- Email service uses `Return-Path: user@example.com` (SPF)

**Result:** Both SPF and DKIM align ✅

### Scenario 2: Using transactional email service

**Setup:**
- Send from `user@example.com`
- Service signs with `d=mailservice.com` (DKIM)
- Service uses `Return-Path: user@mailservice.com` (SPF)

**Problem:** Neither aligns with `example.com` ❌

**Solution:**
- Configure service to use subdomain (e.g., `mail.example.com`)
- Or use service's domain alignment features
- Or send from subdomain that matches service domain

### Scenario 3: Using subdomain for email

**Setup:**
- Send from `user@mail.example.com`
- DKIM signs with `d=mail.example.com`
- SPF uses `mail.example.com`

**Result:** Both align with `mail.example.com` ✅

**DMARC:** Use relaxed alignment to allow `mail.example.com` to align with `example.com`

## Best practices

- ✅ Use relaxed alignment (`aspf=r`, `adkim=r`) for flexibility
- ✅ Ensure at least one authentication method aligns
- ✅ Test alignment after configuration changes
- ✅ Monitor DMARC reports for alignment issues
- ✅ Use subdomains strategically for email services
- ✅ Document your alignment configuration

## Related topics

- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF configuration
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM configuration
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC configuration
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting
- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Deliverability improvement

## Have more questions?

If you have additional questions or need any assistance with SPF, DKIM, and DMARC alignment, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
