# SSL Certificates Revamp - Implementation Summary

**This document lists all changes that would be made in the implementation PR.**

---

## Files to be Created (2 new articles)

1. **`content/articles/ssl-certificate-glossary.md`**
   - Type: Reference
   - Purpose: Comprehensive glossary of SSL certificate terms
   - Structure: Similar to DNS Glossary and DNSSEC Glossary

2. **`content/articles/troubleshooting-ssl-certificate-issues.md`**
   - Type: Troubleshooting
   - Purpose: Common SSL certificate issues and solutions
   - Structure: Problem → Solution format with links to detailed articles

---

## Files to be Renamed (3 files)

**Note:** Only files with "Standard" terminology are renamed. All other files keep their existing slug patterns.

| Old File | New File | Reason |
|----------|----------|--------|
| `content/articles/standard-vs-letsencrypt.md` | `content/articles/sectigo-vs-letsencrypt.md` | Replace "Standard" with "Sectigo" |
| `content/articles/ordering-standard-certificate.md` | `content/articles/ordering-sectigo-certificate.md` | Replace "Standard" with "Sectigo" |
| `content/articles/renewing-standard-ssl-certificate.md` | `content/articles/renewing-sectigo-ssl-certificate.md` | Replace "Standard" with "Sectigo" |

**Redirects to add in frontmatter:**
- Each renamed file will include `redirect_from:` with the old path

---

## Files to be Modified (All SSL articles)

### Category Structure File
- **`categories/ssl_certificates.yaml`** - Complete restructure following Diataxis framework

### Content Updates (Terminology: Standard → Sectigo)

All files that mention "Standard certificate" or "Standard SSL certificate" in the Sectigo context:

1. `content/articles/getting-started-ssl-certificates.md`
   - Update references to "Standard" → "Sectigo"
   - Add `meta` description
   - Update internal links

2. `content/articles/ssl-certificates.md`
   - Reorganize as pillar page
   - Update product descriptions (Standard → Sectigo)
   - Add quick links section
   - Add legacy terminology note (optional)
   - Add `meta` description

3. `content/articles/faq-ssl-certificates.md`
   - Update Q&A references (Standard → Sectigo)
   - Add `meta` description

4. `content/articles/letsencrypt.md`
   - Update comparison sections (Standard → Sectigo)
   - Reorganize structure
   - Add `meta` description

5. `content/articles/ordering-wildcard-certificate.md`
   - Update references (Standard → Sectigo)
   - Add `meta` description

6. `content/articles/renewing-ssl-certificate.md`
   - Update references (Standard → Sectigo)
   - Add `meta` description
   - Ensure it's a routing/overview page

7. `content/articles/reissuing-ssl-certificate.md`
   - Update references (Standard → Sectigo)
   - Add `meta` description

8. `content/articles/installing-ssl-certificate.md`
   - Update references (Standard → Sectigo)
   - Add `meta` description

9. `content/articles/ssl-certificate-with-apache.md`
   - Update references (Standard → Sectigo)
   - Add `meta` description

10. `content/articles/ssl-certificate-with-azure.md`
    - Update references (Standard → Sectigo)
    - Add `meta` description

11. `content/articles/ssl-certificate-with-heroku.md`
    - Update references (Standard → Sectigo)
    - Add `meta` description

12. `content/articles/ssl-certificate-with-microsoft-iis.md`
    - Update references (Standard → Sectigo)
    - Add `meta` description

13. `content/articles/ssl-certificate-with-nginx.md`
    - Update references (Standard → Sectigo)
    - Add `meta` description

14. `content/articles/ssl-certificate-with-windows.md`
    - Convert to redirect/hub page
    - Add `meta` description

15. `content/articles/ssl-certificates-email-validation.md`
    - Reorganize structure (if needed)
    - Update references (Standard → Sectigo)
    - Add `meta` description

16. `content/articles/ssl-certificates-types.md`
    - Update references (Standard → Sectigo)
    - Add `meta` description

### Frontmatter Updates (Add Missing Meta)

All articles missing `meta` descriptions (approximately 35 articles):

- `getting-started-ssl-certificates.md`
- `faq-ssl-certificates.md`
- `what-is-certificate-authority.md`
- `what-is-common-name.md`
- `what-is-csr.md`
- `what-is-ssl-certificate-chain.md`
- `what-is-ssl-root-certificate.md`
- `what-is-ssl-san.md`
- `how-long-to-issue-ssl-certificate.md`
- `how-certificate-renewal-works.md`
- `how-to-determine-certificate-authority.md`
- `ssl-certificate-authorities.md`
- `ordering-wildcard-certificate.md`
- `ordering-lets-encrypt-certificate.md`
- `renewing-ssl-certificate.md`
- `renewing-lets-encrypt-ssl-certificate.md`
- `reissuing-ssl-certificate.md`
- `installing-ssl-certificate.md`
- `ssl-certificate-names.md`
- `how-to-different-ssl-domain-validation-email.md`
- `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md`
- `ssl-certificate-with-apache.md`
- `ssl-certificate-with-azure.md`
- `ssl-certificate-with-heroku.md`
- `ssl-certificate-with-microsoft-iis.md`
- `ssl-certificate-with-nginx.md`
- `ssl-certificate-with-windows.md`
- `ssl-certificates-email-validation.md`
- `ssl-certificates-types.md`
- `letsencrypt.md`
- `can-elliptic-curve-key-ssl-certificates.md`
- `can-ev-ssl-certificates.md`
- `can-multi-year-ssl-certificates.md`
- `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md`
- `sha-2-ssl-certificates.md`
- `expiring-product-email-notifications.md` (consider removing from SSL category)

---

## Redirects to Add

### File Rename Redirects

In `content/articles/sectigo-vs-letsencrypt.md`:
```yaml
redirect_from:
  - /articles/standard-vs-letsencrypt/
```

In `content/articles/ordering-sectigo-certificate.md`:
```yaml
redirect_from:
  - /articles/ordering-standard-certificate/
```

In `content/articles/renewing-sectigo-ssl-certificate.md`:
```yaml
redirect_from:
  - /articles/renewing-standard-ssl-certificate/
```

### Windows Article Redirect

In `content/articles/ssl-certificate-with-windows.md`:
- Convert to redirect page pointing to:
  - `/articles/ssl-certificate-with-microsoft-iis/`
  - `/articles/ssl-certificate-with-apache/`
  - `/articles/ssl-certificate-with-nginx/`

Or add redirect_from to IIS article if Windows article is deleted.

---

## Category YAML Structure

**File:** `categories/ssl_certificates.yaml`

**New Structure:**
```yaml
Getting started:
  - "Getting Started with SSL Certificates"
  - "SSL/TLS Certificates"

Explanation:
  Certificate Concepts:
    - "What is a Certificate Authority?"
    - "What is the SSL Certificate Chain?"
    - "What is a Root Certificate?"
    - "What is the Subject Alternative Name (SAN)?"
    - "What is a Certificate Signing Request (CSR)?"
    - "What is the SSL Certificate Common Name?"
  Certificate Types:
    - "SSL Certificate Types"
    - "Sectigo vs Let's Encrypt SSL Certificates"
  Certificate Processes:
    - "How SSL Certificate Renewal Works"
    - "How Long Does It Take to Issue an SSL Certificate?"
  Certificate Providers:
    - "Let's Encrypt and DNSimple"

How-to guides:
  Ordering Certificates:
    - "How to Order a Sectigo SSL Certificate"
    - "How to Order a Wildcard SSL Certificate"
    - "How to Order a Let's Encrypt Certificate"
  Renewing Certificates:
    - "How to Renew an SSL Certificate"
    - "How to Renew a Sectigo SSL Certificate"
    - "How to Renew a Let's Encrypt SSL Certificate"
  Reissuing Certificates:
    - "How to Reissue an SSL Certificate"
  Certificate Configuration:
    - "How to Choose SSL Certificate Names"
    - "How to Validate an SSL Certificate via Email"
    - "How to Use a Different Email for SSL Certificate Validation"
    - "How to Get an RSA Certificate Instead of ECC"
  Certificate Management:
    - "How to Determine the Certificate Authority"

Installation:
  - "How to Install an SSL Certificate"
  - "How to Install an SSL Certificate on Apache"
  - "How to Install an SSL Certificate on Microsoft IIS"
  - "How to Install an SSL Certificate on NGINX"
  - "How to Install an SSL Certificate on Heroku"
  - "How to Install an SSL Certificate on Microsoft Azure"

Troubleshooting:
  - "Troubleshooting SSL Certificate Issues"

Reference:
  Overview:
    - "SSL/TLS Certificates"
  Certificate Authorities:
    - "SSL Certificate Authorities Used by DNSimple"
  Certificate Features:
    - "Elliptic Curve Cryptography (ECC) SSL Certificate Support"
    - "Extended Validation (EV) SSL Certificate Support"
    - "Multi-Year SSL Certificate Support"
    - "Upgrading Single-Hostname to Wildcard SSL Certificates"
    - "SHA-2 SSL Certificates"
  Frequently Asked Questions:
    - "SSL Certificates Frequently Asked Questions"
  Glossary:
    - "SSL Certificate Glossary"
```

---

## Title Updates Needed

Articles that need title updates in frontmatter (file slugs remain unchanged):

| Current Title | New Title | File (unchanged) |
|--------------|-----------|------------------|
| Standard vs Let's Encrypt SSL Certificates | Sectigo vs Let's Encrypt SSL Certificates | `sectigo-vs-letsencrypt.md` |
| Ordering a Standard SSL Certificate | Ordering a Sectigo SSL Certificate | `ordering-sectigo-certificate.md` |
| Renewing a standard SSL Certificate | Renewing a Sectigo SSL Certificate | `renewing-sectigo-ssl-certificate.md` |

**Note:** All other article titles may be updated for clarity in frontmatter, but file slugs remain unchanged. DNSimple documentation does not use "how-to-" prefixes in file names.

---

## Internal Link Updates

All internal links that reference:
- `/articles/standard-vs-letsencrypt/` → `/articles/sectigo-vs-letsencrypt/`
- `/articles/ordering-standard-certificate/` → `/articles/ordering-sectigo-certificate/`
- `/articles/renewing-standard-ssl-certificate/` → `/articles/renewing-sectigo-ssl-certificate/`
- "Standard certificate" text → "Sectigo certificate" (in context)
- "Standard SSL certificate" text → "Sectigo SSL certificate" (in context)

---

## Summary

### Files Created: 2
- SSL Certificate Glossary
- Troubleshooting SSL Certificate Issues

### Files Renamed: 3
- standard-vs-letsencrypt.md → sectigo-vs-letsencrypt.md
- ordering-standard-certificate.md → ordering-sectigo-certificate.md
- renewing-standard-ssl-certificate.md → renewing-sectigo-ssl-certificate.md

### Files Modified: ~40
- All SSL articles updated with terminology changes
- All SSL articles updated with meta descriptions
- Category YAML restructured
- Internal links updated

### Redirects Added: 3-4
- 3 for renamed files
- 1 for Windows article (if converted to redirect)

### Total Changes: ~45 files

---

**This summary provides a complete overview of all changes that would be made in the implementation PR.**
