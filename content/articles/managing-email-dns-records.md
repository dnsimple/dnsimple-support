---
title: Managing Email DNS Records
excerpt: Comprehensive guide to managing all email-related DNS records in DNSimple.
meta: Complete guide to managing email DNS records including MX, SPF, DKIM, DMARC, and other email-related records.
categories:
- Emails
- DNS
---

# Managing Email DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

Managing email DNS records is essential for email delivery and authentication. This guide covers all email-related DNS records and how to manage them in DNSimple.

## Email DNS records overview {#overview}

Email functionality requires several types of DNS records:

- **MX records:** Direct email delivery
- **SPF records:** Authorize email senders
- **DKIM records:** Cryptographically sign emails
- **DMARC records:** Enforce email policies
- **CNAME records:** Autodiscover and other services
- **TXT records:** Various email-related configurations

## MX records {#mx}

### Purpose

MX (Mail Exchange) records specify which mail servers receive email for your domain.

### When to use

- **Email hosting:** Using email hosting services (Google Workspace, Microsoft 365, etc.)
- **Email forwarding:** Using DNSimple's email forwarding service

### Configuration

**For email hosting:**
- Add MX records provided by your email hosting provider
- Typically multiple MX records with different priorities

**For email forwarding:**
- MX records are automatically added when you enable email forwarding
- Do not manually add MX records for email forwarding

> [!NOTE]
> For detailed MX record setup, see [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/).

## SPF records {#spf}

### Purpose

SPF (Sender Policy Framework) records authorize which servers can send email from your domain.

### Configuration

1. **Create SPF record:**
   - Add a TXT record at the root domain
   - Include all authorized email senders
   - Use `~all` or `-all` at the end

2. **Example:**
   ```
   v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
   ```

> [!NOTE]
> For detailed SPF setup, see [Setting Up SPF Records](/articles/setting-up-spf/).

## DKIM records {#dkim}

### Purpose

DKIM (DomainKeys Identified Mail) records provide public keys for cryptographically signing emails.

### Configuration

1. **Get DKIM information:**
   - Contact each email service provider
   - Obtain DKIM selector and public key

2. **Add DKIM records:**
   - Add TXT records at `selector._domainkey.yourdomain.com`
   - Enter the DKIM public key

3. **Multiple selectors:**
   - Different services may use different selectors
   - Add separate records for each selector

> [!NOTE]
> For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/) and [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

## DMARC records {#dmarc}

### Purpose

DMARC (Domain-based Message Authentication, Reporting & Conformance) enforces email policies and provides reporting.

### Configuration

1. **Create DMARC record:**
   - Add a TXT record at `_dmarc.yourdomain.com`
   - Start with `p=none` for monitoring
   - Gradually increase to `p=quarantine` or `p=reject`

2. **Example:**
   ```
   v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
   ```

> [!NOTE]
> For detailed DMARC setup, see [Setting Up DMARC](/articles/set-up-dmarc/) and [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).

## CNAME records {#cname}

### Purpose

CNAME records are used for email-related services like Autodiscover.

### Common CNAME records

**Autodiscover:**
- `autodiscover` -> `autodiscover.outlook.com` (Microsoft 365)
- Helps email clients automatically configure

**Webmail:**
- `webmail` -> Provider's webmail server
- Used by some email providers

## TXT records {#txt}

### Purpose

TXT records are used for various email-related configurations beyond SPF, DKIM, and DMARC.

### Common uses

- **Domain verification:** Verifying domain ownership with email providers
- **Email authentication:** SPF, DKIM, DMARC
- **Other configurations:** Provider-specific settings

## Managing records in DNSimple {#managing}

### Using the Record Editor {#record-editor}

<div class="section-steps" markdown="1">
##### Add an email DNS record

1. Click on your domain name.
1. Click the <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Click <label>Add record</label>.
1. Select the record type.
1. Enter record details.
1. Click <label>Add record</label>.
</div>

To edit a record, click the edit icon, modify the details, and click <label>Save</label>. To delete a record, click the delete icon and confirm the deletion.

### Best practices {#best-practices}

- **One SPF record:** Only one SPF record per domain
- **Document selectors:** Keep track of DKIM selectors
- **Monitor DMARC:** Review DMARC reports regularly
- **Test changes:** Test after making DNS changes
- **Verify records:** Use `dig` to verify records are published

## Verifying records {#verifying}

### Using dig

**MX records:**
```bash
dig +short yourdomain.com MX
```

**SPF records:**
```bash
dig +short yourdomain.com TXT | grep "v=spf1"
```

**DKIM records:**
```bash
dig +short selector._domainkey.yourdomain.com TXT
```

**DMARC records:**
```bash
dig +short _dmarc.yourdomain.com TXT
```

### Using online tools

- [whatsmydns.net](https://www.whatsmydns.net/) - Check DNS propagation
- [MXToolbox](https://mxtoolbox.com/) - Check various DNS records
- Mail-Tester - Test email authentication

## Common issues {#issues}

### Multiple SPF records

**Problem:** Multiple SPF records cause SPF to fail.

**Solution:** Combine all SPF includes into a single record.

### Missing DKIM records

**Problem:** DKIM authentication failing.

**Solution:** Verify DKIM records exist and are correct for all email services.

### DMARC policy too strict

**Problem:** Legitimate emails being rejected by DMARC.

**Solution:** Start with monitoring, gradually increase policy after fixing issues.

## Related topics

- [Email DNS Records Quick Reference](/articles/email-dns-records-quick-reference/) - Quick reference
- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX setup
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF setup
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM setup
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup

## Have more questions?

If you have additional questions or need any assistance with managing email DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
