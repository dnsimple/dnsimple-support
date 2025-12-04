---
title: Email DNS Records Quick Reference
excerpt: Quick reference guide for all email-related DNS records.
meta: Quick reference for email DNS records including MX, SPF, DKIM, DMARC, and other email records.
categories:
- Emails
- DNS
---

# Email DNS Records Quick Reference

### Table of Contents {#toc}

* TOC
{:toc}

---

Quick reference guide for email-related DNS records, including record types, formats, and common configurations.

## MX records

**Purpose:** Direct email delivery to mail servers

**Record type:** MX

**Format:**
- **Name:** `@` or blank (root domain)
- **Priority:** Number (lower = higher priority)
- **Mail server:** Hostname (e.g., `mail.example.com`)

**Example:**
```
Name: @
Priority: 10
Mail server: mail.example.com
```

**Common uses:**
- Email hosting (Google Workspace, Microsoft 365)
- Email forwarding (auto-configured by DNSimple)

<info>
See [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) for details.
</info>

## SPF records

**Purpose:** Authorize email senders

**Record type:** TXT

**Format:**
- **Name:** `@` or blank (root domain)
- **Content:** `v=spf1 [mechanisms] [qualifier]`

**Example:**
```
Name: @
Content: v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
```

**Common mechanisms:**
- `include:domain.com` - Include another domain's SPF
- `ip4:1.2.3.4` - Authorize specific IPv4 address
- `ip6:2001:db8::1` - Authorize specific IPv6 address
- `a` - Authorize domain's A records
- `mx` - Authorize domain's MX records

**Qualifiers:**
- `+all` - Pass (default)
- `~all` - Soft fail (recommended initially)
- `-all` - Hard fail (strongest protection)

<info>
See [Setting Up SPF Records](/articles/setting-up-spf/) for details.
</info>

## DKIM records

**Purpose:** Cryptographic email signing

**Record type:** TXT

**Format:**
- **Name:** `selector._domainkey` (e.g., `google._domainkey`)
- **Content:** DKIM public key (provided by email service)

**Example:**
```
Name: google._domainkey
Content: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3...
```

**Common selectors:**
- `google` - Google Workspace
- `selector1`, `selector2` - Microsoft 365
- Various - Other email services

<info>
See [Setting Up DKIM](/articles/set-up-dkim/) and [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/) for details.
</info>

## DMARC records

**Purpose:** Email policy enforcement and reporting

**Record type:** TXT

**Format:**
- **Name:** `_dmarc`
- **Content:** `v=DMARC1; [tags]`

**Example:**
```
Name: _dmarc
Content: v=DMARC1; p=none; rua=mailto:dmarc@example.com
```

**Common tags:**
- `p=none` - Monitor only (start here)
- `p=quarantine` - Quarantine failures
- `p=reject` - Reject failures (strongest)
- `rua=mailto:address@example.com` - Aggregate reports
- `ruf=mailto:address@example.com` - Forensic reports
- `aspf=r` - Relaxed SPF alignment (default)
- `adkim=r` - Relaxed DKIM alignment (default)
- `pct=25` - Apply policy to 25% of emails

<info>
See [Setting Up DMARC](/articles/set-up-dmarc/) and [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) for details.
</info>

## CNAME records for email

**Purpose:** Autodiscover and other email services

**Record type:** CNAME

**Common records:**

**Autodiscover (Microsoft 365):**
```
Name: autodiscover
Value: autodiscover.outlook.com
```

**Webmail (varies by provider):**
```
Name: webmail
Value: webmail.provider.com
```

## Verification TXT records

**Purpose:** Domain verification for email services

**Record type:** TXT

**Format:**
- **Name:** `@` or as specified by provider
- **Content:** Verification string from email provider

**Example:**
```
Name: @
Content: google-site-verification=abc123...
```

## Quick verification commands

### Check MX records
```bash
dig +short yourdomain.com MX
```

### Check SPF record
```bash
dig +short yourdomain.com TXT | grep "v=spf1"
```

### Check DKIM record
```bash
dig +short selector._domainkey.yourdomain.com TXT
```

### Check DMARC record
```bash
dig +short _dmarc.yourdomain.com TXT
```

## Common configurations

### Google Workspace

**MX records:**
- Multiple MX records with priorities 1, 5, 10

**SPF:**
```
v=spf1 include:_spf.google.com ~all
```

**DKIM:**
- Selector: `google`
- Record at: `google._domainkey.yourdomain.com`

### Microsoft 365

**MX record:**
- Priority: 0
- Mail server: `yourdomain-com.mail.protection.outlook.com`

**SPF:**
```
v=spf1 include:spf.protection.outlook.com ~all
```

**DKIM:**
- Selectors: `selector1`, `selector2`
- Records at: `selector1._domainkey.yourdomain.com`, `selector2._domainkey.yourdomain.com`

**Autodiscover:**
- CNAME: `autodiscover` → `autodiscover.outlook.com`

### Email forwarding (DNSimple)

**MX records:**
- Automatically configured when email forwarding is enabled
- Don't manually add MX records

## Best practices

- ✅ **One SPF record:** Only one SPF record per domain
- ✅ **Multiple DKIM selectors:** Each service may need its own selector
- ✅ **Gradual DMARC:** Start with monitoring, gradually increase
- ✅ **Verify records:** Use `dig` to verify after changes
- ✅ **Document configuration:** Keep track of all email records

## Related topics

- [Managing Email DNS Records](/articles/managing-email-dns-records/) - Comprehensive guide
- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - MX setup
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF setup
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM setup
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup

## Have more questions?

If you have additional questions or need any assistance with email DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
