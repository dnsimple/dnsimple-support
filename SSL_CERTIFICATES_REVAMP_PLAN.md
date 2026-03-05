# SSL Certificates Documentation Revamp - Implementation Plan

**Status:** Planning PR Only - No Implementation  
**Date:** 2025-01-XX  
**Purpose:** Complete audit and reorganization plan for SSL Certificates documentation following Diataxis framework

---

## Executive Summary

This document provides a comprehensive plan for reorganizing the SSL Certificates documentation according to the Diataxis framework. The current documentation consists of **33 articles** that need to be reorganized into clear categories: **Getting Started**, **Tutorials**, **How-to Guides**, **Explanations**, and **Reference**.

### Key Findings

- **33 total articles** currently in SSL Certificates category
- **No clear Diataxis classification** - articles are mixed across categories
- **Inconsistent naming conventions** - mix of "what-is", "how-to", "ordering", etc.
- **Missing frontmatter** - several articles lack `meta` descriptions
- **Content overlap** - some articles cover similar topics from different angles
- **Installation articles** - 6 platform-specific articles that could be better organized

---

## 1. Complete Article Audit

### Current Articles Inventory

| Article File | Current Title | Current Categories | Word Count | Issues |
|-------------|---------------|-------------------|------------|--------|
| `getting-started-ssl-certificates.md` | Getting Started with SSL Certificates | SSL Certificates | ~650 | Good structure, needs meta |
| `faq-ssl-certificates.md` | SSL Certificates Frequently Asked Questions | SSL Certificates | ~600 | Missing meta, should be Reference |
| `ssl-certificates.md` | SSL/TLS Certificates | SSL Certificates, Enterprise | ~800 | Overview page, needs better structure |
| `ssl-certificates-types.md` | SSL Certificate Types | SSL Certificates, Enterprise | ~600 | Explanation, needs meta |
| `what-is-certificate-authority.md` | What is a Certificate Authority? | SSL Certificates | ~200 | Explanation, needs meta |
| `what-is-ssl-certificate-chain.md` | What is the SSL Certificate Chain? | SSL Certificates | ~700 | Explanation, good |
| `what-is-ssl-root-certificate.md` | What is a Root Certificate? | SSL Certificates | ~200 | Explanation, needs meta |
| `what-is-ssl-san.md` | What is the Subject Alternative Name (SAN)? | SSL Certificates | ~700 | Explanation, needs meta |
| `what-is-csr.md` | What is the CSR? | SSL Certificates | ~200 | Explanation, needs meta |
| `what-is-common-name.md` | What is the SSL Certificate Common Name? | SSL Certificates | ~500 | Explanation, needs meta |
| `ssl-certificate-names.md` | Choosing the SSL Certificate Names | SSL Certificates | ~400 | How-to Guide, needs meta |
| `ssl-certificate-authorities.md` | SSL Certificate Authorities used by DNSimple | SSL Certificates | ~200 | Reference, needs meta |
| `how-long-to-issue-ssl-certificate.md` | How long does it take to issue an SSL certificate? | SSL Certificates | ~400 | Explanation, needs meta |
| `how-to-determine-certificate-authority.md` | How do I determine the Certificate Authority that signed my SSL certificate? | SSL Certificates | ~300 | How-to Guide, needs meta |
| `how-certificate-renewal-works.md` | How does an SSL Certificate Renewal work? | SSL Certificates | ~200 | Explanation, needs meta |
| `ssl-certificates-email-validation.md` | SSL Certificate email-based Domain Validation | SSL Certificates | ~1500 | How-to Guide, very long, could split |
| `how-to-different-ssl-domain-validation-email.md` | How can I select a different SSL certificate domain validation email? | SSL Certificates | ~400 | How-to Guide, needs meta |
| `ordering-standard-certificate.md` | Ordering a Standard SSL Certificate | SSL Certificates | ~800 | How-to Guide, needs meta |
| `ordering-wildcard-certificate.md` | Ordering a Wildcard SSL Certificate | SSL Certificates | ~600 | How-to Guide, needs meta |
| `ordering-lets-encrypt-certificate.md` | Ordering a Let's Encrypt Certificate | SSL Certificates, Enterprise | ~600 | How-to Guide, needs meta |
| `renewing-ssl-certificate.md` | Renewing an SSL Certificate | SSL Certificates | ~400 | How-to Guide, needs meta |
| `renewing-standard-ssl-certificate.md` | Renewing a standard SSL Certificate | SSL Certificates | ~500 | How-to Guide, needs meta |
| `renewing-lets-encrypt-ssl-certificate.md` | Renewing a Let's Encrypt SSL Certificate | SSL Certificates | ~300 | How-to Guide, needs meta |
| `reissuing-ssl-certificate.md` | Re-issuing an SSL Certificate | SSL Certificates | ~900 | How-to Guide, needs meta |
| `installing-ssl-certificate.md` | Installing an SSL Certificate | SSL Certificates | ~500 | How-to Guide, needs meta |
| `ssl-certificate-with-apache.md` | SSL Certificates with Apache | SSL Certificates | ~200 | How-to Guide, needs meta |
| `ssl-certificate-with-microsoft-iis.md` | SSL Certificates with Microsoft Windows IIS | SSL Certificates | ~200 | How-to Guide, needs meta |
| `ssl-certificate-with-nginx.md` | SSL Certificates with NGINX | SSL Certificates | ~200 | How-to Guide, needs meta |
| `ssl-certificate-with-windows.md` | SSL Certificates with Windows | SSL Certificates | ~200 | How-to Guide, redirect to platform-specific |
| `ssl-certificate-with-heroku.md` | SSL Certificates with Heroku | SSL Certificates, Integrations | ~200 | How-to Guide, needs meta |
| `ssl-certificate-with-azure.md` | SSL Certificates with Microsoft Azure | SSL Certificates | ~200 | How-to Guide, needs meta |
| `letsencrypt.md` | Let's Encrypt and DNSimple | SSL Certificates, Integrations | ~1300 | Explanation, very long, could split |
| `standard-vs-letsencrypt.md` | Standard vs Let's Encrypt SSL Certificates | SSL Certificates | ~600 | Explanation, needs meta |
| `sha-2-ssl-certificates.md` | SHA-2 SSL Certificates | SSL Certificates | ~500 | Explanation/Reference, outdated content |
| `can-elliptic-curve-key-ssl-certificates.md` | Do you support Elliptic Curve Cryptography (ECC) SSL certificates? | SSL Certificates | ~100 | Reference/FAQ, needs meta |
| `can-ev-ssl-certificates.md` | Do you support Extended Validation (EV) SSL certificates? | SSL Certificates | ~100 | Reference/FAQ, needs meta |
| `can-multi-year-ssl-certificates.md` | Do you support multi-year SSL certificates? | SSL Certificates | ~200 | Reference/FAQ, needs meta |
| `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md` | Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate? | SSL Certificates | ~100 | Reference/FAQ, needs meta |
| `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md` | I got an ECC-signed certificate but want RSA | SSL Certificates | ~300 | How-to Guide, needs meta |
| `heroku-error-ssl.md` | Troubleshooting Heroku SSL errors | Integrations | ~400 | How-to Guide (Troubleshooting), wrong category |

**Total: 40 articles** (some articles are in multiple categories)

---

## 2. Proposed Diataxis Classification

### Getting Started (1 article)
**Purpose:** Learning-oriented, step-by-step introduction for first-time users

| Current Article | Proposed Title | Notes |
|----------------|---------------|-------|
| `getting-started-ssl-certificates.md` | Getting Started with SSL Certificates | Keep as-is, add meta description |

### Tutorials (0 articles → 1 new)
**Purpose:** Step-by-step lessons for a successful, practical goal

| New Article | Purpose | Notes |
|------------|---------|-------|
| `tutorial-securing-your-first-website.md` | Complete walkthrough: order, validate, install first certificate | New article combining getting started + ordering + installation |

### How-to Guides (18 articles)
**Purpose:** Steps to solve a specific problem or achieve a goal

| Current Article | Proposed Title | Diataxis Type | Notes |
|----------------|---------------|---------------|-------|
| `ordering-standard-certificate.md` | How to Order a Standard SSL Certificate | How-to | Rename for consistency |
| `ordering-wildcard-certificate.md` | How to Order a Wildcard SSL Certificate | How-to | Rename for consistency |
| `ordering-lets-encrypt-certificate.md` | How to Order a Let's Encrypt Certificate | How-to | Rename for consistency |
| `renewing-ssl-certificate.md` | How to Renew an SSL Certificate | How-to | Rename for consistency |
| `renewing-standard-ssl-certificate.md` | How to Renew a Standard SSL Certificate | How-to | Rename for consistency |
| `renewing-lets-encrypt-ssl-certificate.md` | How to Renew a Let's Encrypt SSL Certificate | How-to | Rename for consistency |
| `reissuing-ssl-certificate.md` | How to Reissue an SSL Certificate | How-to | Rename for consistency |
| `installing-ssl-certificate.md` | How to Install an SSL Certificate | How-to | Rename for consistency |
| `ssl-certificate-names.md` | How to Choose SSL Certificate Names | How-to | Rename for consistency |
| `ssl-certificates-email-validation.md` | How to Validate an SSL Certificate via Email | How-to | Rename, consider splitting |
| `how-to-different-ssl-domain-validation-email.md` | How to Use a Different Email for SSL Certificate Validation | How-to | Rename for consistency |
| `how-to-determine-certificate-authority.md` | How to Determine the Certificate Authority | How-to | Rename for consistency |
| `ssl-certificate-with-apache.md` | How to Install an SSL Certificate on Apache | How-to | Rename for consistency |
| `ssl-certificate-with-microsoft-iis.md` | How to Install an SSL Certificate on Microsoft IIS | How-to | Rename for consistency |
| `ssl-certificate-with-nginx.md` | How to Install an SSL Certificate on NGINX | How-to | Rename for consistency |
| `ssl-certificate-with-heroku.md` | How to Install an SSL Certificate on Heroku | How-to | Rename for consistency |
| `ssl-certificate-with-azure.md` | How to Install an SSL Certificate on Microsoft Azure | How-to | Rename for consistency |
| `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md` | How to Get an RSA Certificate Instead of ECC | How-to | Rename for consistency |
| `heroku-error-ssl.md` | How to Troubleshoot Heroku SSL Errors | How-to | Move to SSL Certificates category |

### Explanations (12 articles)
**Purpose:** Context, background, and theoretical knowledge (the "why")

| Current Article | Proposed Title | Diataxis Type | Notes |
|----------------|---------------|---------------|-------|
| `ssl-certificates-types.md` | SSL Certificate Types | Explanation | Keep as-is, add meta |
| `what-is-certificate-authority.md` | What is a Certificate Authority? | Explanation | Keep as-is, add meta |
| `what-is-ssl-certificate-chain.md` | What is the SSL Certificate Chain? | Explanation | Keep as-is |
| `what-is-ssl-root-certificate.md` | What is a Root Certificate? | Explanation | Keep as-is, add meta |
| `what-is-ssl-san.md` | What is the Subject Alternative Name (SAN)? | Explanation | Keep as-is, add meta |
| `what-is-csr.md` | What is a Certificate Signing Request (CSR)? | Explanation | Keep as-is, add meta |
| `what-is-common-name.md` | What is the SSL Certificate Common Name? | Explanation | Keep as-is, add meta |
| `how-certificate-renewal-works.md` | How SSL Certificate Renewal Works | Explanation | Rename for consistency |
| `how-long-to-issue-ssl-certificate.md` | How Long Does It Take to Issue an SSL Certificate? | Explanation | Keep as-is, add meta |
| `letsencrypt.md` | Let's Encrypt and DNSimple | Explanation | Keep as-is, consider splitting |
| `standard-vs-letsencrypt.md` | Standard vs Let's Encrypt SSL Certificates | Explanation | Keep as-is, add meta |
| `sha-2-ssl-certificates.md` | SHA-2 SSL Certificates | Explanation/Reference | Keep as historical reference, add note about current state |

### Reference (9 articles)
**Purpose:** Technical descriptions, definitions, and specifications

| Current Article | Proposed Title | Diataxis Type | Notes |
|----------------|---------------|---------------|-------|
| `ssl-certificates.md` | SSL/TLS Certificates | Reference | Overview page, reorganize content |
| `ssl-certificate-authorities.md` | SSL Certificate Authorities Used by DNSimple | Reference | Keep as-is, add meta |
| `faq-ssl-certificates.md` | SSL Certificates Frequently Asked Questions | Reference | Keep as-is, add meta |
| `can-elliptic-curve-key-ssl-certificates.md` | Elliptic Curve Cryptography (ECC) SSL Certificate Support | Reference | Rename for clarity |
| `can-ev-ssl-certificates.md` | Extended Validation (EV) SSL Certificate Support | Reference | Rename for clarity |
| `can-multi-year-ssl-certificates.md` | Multi-Year SSL Certificate Support | Reference | Rename for clarity |
| `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md` | Upgrading Single-Hostname to Wildcard SSL Certificates | Reference | Rename for clarity |
| `ssl-certificate-with-windows.md` | SSL Certificates with Windows | Reference | Convert to redirect page pointing to platform-specific articles |

---

## 3. Proposed Category Structure

### Updated `categories/ssl_certificates.yaml`

```yaml
Getting Started:
  - "Getting Started with SSL Certificates"

Tutorials:
  - "Securing Your First Website with SSL"

How to:
  Ordering Certificates:
    - "How to Order a Standard SSL Certificate"
    - "How to Order a Wildcard SSL Certificate"
    - "How to Order a Let's Encrypt Certificate"
  Renewing Certificates:
    - "How to Renew an SSL Certificate"
    - "How to Renew a Standard SSL Certificate"
    - "How to Renew a Let's Encrypt SSL Certificate"
  Reissuing Certificates:
    - "How to Reissue an SSL Certificate"
  Installing Certificates:
    - "How to Install an SSL Certificate"
    - "How to Install an SSL Certificate on Apache"
    - "How to Install an SSL Certificate on Microsoft IIS"
    - "How to Install an SSL Certificate on NGINX"
    - "How to Install an SSL Certificate on Heroku"
    - "How to Install an SSL Certificate on Microsoft Azure"
  Certificate Configuration:
    - "How to Choose SSL Certificate Names"
    - "How to Validate an SSL Certificate via Email"
    - "How to Use a Different Email for SSL Certificate Validation"
    - "How to Get an RSA Certificate Instead of ECC"
  Troubleshooting:
    - "How to Determine the Certificate Authority"
    - "How to Troubleshoot Heroku SSL Errors"

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
    - "Standard vs Let's Encrypt SSL Certificates"
  Certificate Processes:
    - "How SSL Certificate Renewal Works"
    - "How Long Does It Take to Issue an SSL Certificate?"
  Certificate Providers:
    - "Let's Encrypt and DNSimple"

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
```

---

## 4. Proposed Article Renames

### Renaming Strategy
- Use consistent "How to" prefix for all how-to guides
- Remove "What is" prefix where appropriate (keep for explanations)
- Use title case consistently
- Make titles action-oriented for how-to guides

### Complete Rename List

| Current File | Current Title | Proposed File | Proposed Title | Reason |
|-------------|---------------|---------------|----------------|--------|
| `ordering-standard-certificate.md` | Ordering a Standard SSL Certificate | `how-to-order-standard-certificate.md` | How to Order a Standard SSL Certificate | Consistency with Diataxis |
| `ordering-wildcard-certificate.md` | Ordering a Wildcard SSL Certificate | `how-to-order-wildcard-certificate.md` | How to Order a Wildcard SSL Certificate | Consistency with Diataxis |
| `ordering-lets-encrypt-certificate.md` | Ordering a Let's Encrypt Certificate | `how-to-order-lets-encrypt-certificate.md` | How to Order a Let's Encrypt Certificate | Consistency with Diataxis |
| `renewing-ssl-certificate.md` | Renewing an SSL Certificate | `how-to-renew-ssl-certificate.md` | How to Renew an SSL Certificate | Consistency with Diataxis |
| `renewing-standard-ssl-certificate.md` | Renewing a standard SSL Certificate | `how-to-renew-standard-ssl-certificate.md` | How to Renew a Standard SSL Certificate | Consistency, fix capitalization |
| `renewing-lets-encrypt-ssl-certificate.md` | Renewing a Let's Encrypt SSL Certificate | `how-to-renew-lets-encrypt-ssl-certificate.md` | How to Renew a Let's Encrypt SSL Certificate | Consistency with Diataxis |
| `reissuing-ssl-certificate.md` | Re-issuing an SSL Certificate | `how-to-reissue-ssl-certificate.md` | How to Reissue an SSL Certificate | Consistency, remove hyphen |
| `installing-ssl-certificate.md` | Installing an SSL Certificate | `how-to-install-ssl-certificate.md` | How to Install an SSL Certificate | Consistency with Diataxis |
| `ssl-certificate-names.md` | Choosing the SSL Certificate Names | `how-to-choose-ssl-certificate-names.md` | How to Choose SSL Certificate Names | Consistency with Diataxis |
| `ssl-certificates-email-validation.md` | SSL Certificate email-based Domain Validation | `how-to-validate-ssl-certificate-via-email.md` | How to Validate an SSL Certificate via Email | Consistency, clearer title |
| `how-to-different-ssl-domain-validation-email.md` | How can I select a different SSL certificate domain validation email? | `how-to-use-different-email-ssl-validation.md` | How to Use a Different Email for SSL Certificate Validation | Consistency, clearer title |
| `how-to-determine-certificate-authority.md` | How do I determine the Certificate Authority that signed my SSL certificate? | `how-to-determine-certificate-authority.md` | How to Determine the Certificate Authority | Consistency, clearer title |
| `ssl-certificate-with-apache.md` | SSL Certificates with Apache | `how-to-install-ssl-certificate-apache.md` | How to Install an SSL Certificate on Apache | Consistency, clearer title |
| `ssl-certificate-with-microsoft-iis.md` | SSL Certificates with Microsoft Windows IIS | `how-to-install-ssl-certificate-microsoft-iis.md` | How to Install an SSL Certificate on Microsoft IIS | Consistency, clearer title |
| `ssl-certificate-with-nginx.md` | SSL Certificates with NGINX | `how-to-install-ssl-certificate-nginx.md` | How to Install an SSL Certificate on NGINX | Consistency, clearer title |
| `ssl-certificate-with-heroku.md` | SSL Certificates with Heroku | `how-to-install-ssl-certificate-heroku.md` | How to Install an SSL Certificate on Heroku | Consistency, clearer title |
| `ssl-certificate-with-azure.md` | SSL Certificates with Microsoft Azure | `how-to-install-ssl-certificate-azure.md` | How to Install an SSL Certificate on Microsoft Azure | Consistency, clearer title |
| `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md` | I got an ECC-signed certificate but want RSA | `how-to-get-rsa-certificate-instead-of-ecc.md` | How to Get an RSA Certificate Instead of ECC | Consistency, clearer title |
| `how-certificate-renewal-works.md` | How does an SSL Certificate Renewal work? | `how-ssl-certificate-renewal-works.md` | How SSL Certificate Renewal Works | Consistency, clearer title |
| `can-elliptic-curve-key-ssl-certificates.md` | Do you support Elliptic Curve Cryptography (ECC) SSL certificates? | `ecc-ssl-certificate-support.md` | Elliptic Curve Cryptography (ECC) SSL Certificate Support | Consistency, clearer title |
| `can-ev-ssl-certificates.md` | Do you support Extended Validation (EV) SSL certificates? | `ev-ssl-certificate-support.md` | Extended Validation (EV) SSL Certificate Support | Consistency, clearer title |
| `can-multi-year-ssl-certificates.md` | Do you support multi-year SSL certificates? | `multi-year-ssl-certificate-support.md` | Multi-Year SSL Certificate Support | Consistency, clearer title |
| `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md` | Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate? | `upgrade-single-hostname-to-wildcard-ssl.md` | Upgrading Single-Hostname to Wildcard SSL Certificates | Consistency, clearer title |

**Total: 23 articles to rename**

---

## 5. Proposed Article Splits

### Articles That Should Be Split

#### 1. `ssl-certificates-email-validation.md` (Currently ~1500 words)
**Reason:** Too long, covers multiple distinct topics

**Proposed Split:**
- **Keep:** `how-to-validate-ssl-certificate-via-email.md` - Main validation process
- **Split out:** `ssl-certificate-email-validation-requirements.md` - Email requirements, WHOIS deprecation, GDPR
- **Split out:** `how-to-change-ssl-certificate-validation-email.md` - Changing validation email
- **Split out:** `how-to-resend-ssl-certificate-validation-email.md` - Resending validation email

#### 2. `letsencrypt.md` (Currently ~1300 words)
**Reason:** Very long, covers multiple topics (overview, differences, integration, products, limitations, auto-renewal)

**Proposed Split:**
- **Keep:** `letsencrypt-and-dnsimple.md` - Overview and integration basics
- **Split out:** `letsencrypt-features-and-limitations.md` - Features, limitations, plan-specific features
- **Split out:** `letsencrypt-auto-renewal.md` - Auto-renewal details (or merge into renewal how-to)

**Alternative:** Keep as single article but reorganize with better structure and clearer sections.

#### 3. `ssl-certificates.md` (Currently ~800 words)
**Reason:** Mix of overview and product details

**Proposed Split:**
- **Keep:** `ssl-tls-certificates.md` - Overview and product listing
- **Split out:** `ssl-certificate-products.md` - Detailed product specifications (pricing, features, etc.)

**Alternative:** Keep as single reference page but reorganize content more clearly.

---

## 6. Proposed New Articles

### New Articles Needed

| New Article | Purpose | Diataxis Type | Priority |
|------------|---------|---------------|----------|
| `tutorial-securing-your-first-website.md` | Complete end-to-end tutorial for first-time SSL certificate users | Tutorial | High |
| `how-to-troubleshoot-ssl-certificate-issues.md` | General troubleshooting guide for common SSL certificate problems | How-to | Medium |
| `ssl-certificate-lifecycle.md` | Explanation of the complete SSL certificate lifecycle (order → validate → issue → install → renew) | Explanation | Medium |
| `ssl-certificate-best-practices.md` | Best practices for managing SSL certificates | Reference | Low |
| `ssl-certificate-security-considerations.md` | Security considerations when using SSL certificates | Explanation | Low |

---

## 7. Proposed Redirects

### Redirect Strategy
- All renamed articles need redirects from old URLs
- Split articles need redirects to new primary article
- Deleted/merged articles need redirects to replacement

### Complete Redirect List

#### Renamed Articles (23 redirects)

```yaml
# Ordering
/articles/ordering-standard-certificate/ → /articles/how-to-order-standard-certificate/
/articles/ordering-wildcard-certificate/ → /articles/how-to-order-wildcard-certificate/
/articles/ordering-lets-encrypt-certificate/ → /articles/how-to-order-lets-encrypt-certificate/

# Renewing
/articles/renewing-ssl-certificate/ → /articles/how-to-renew-ssl-certificate/
/articles/renewing-standard-ssl-certificate/ → /articles/how-to-renew-standard-ssl-certificate/
/articles/renewing-lets-encrypt-ssl-certificate/ → /articles/how-to-renew-lets-encrypt-ssl-certificate/

# Reissuing
/articles/reissuing-ssl-certificate/ → /articles/how-to-reissue-ssl-certificate/

# Installing
/articles/installing-ssl-certificate/ → /articles/how-to-install-ssl-certificate/
/articles/ssl-certificate-with-apache/ → /articles/how-to-install-ssl-certificate-apache/
/articles/ssl-certificate-with-microsoft-iis/ → /articles/how-to-install-ssl-certificate-microsoft-iis/
/articles/ssl-certificate-with-nginx/ → /articles/how-to-install-ssl-certificate-nginx/
/articles/ssl-certificate-with-heroku/ → /articles/how-to-install-ssl-certificate-heroku/
/articles/ssl-certificate-with-azure/ → /articles/how-to-install-ssl-certificate-azure/

# Configuration
/articles/ssl-certificate-names/ → /articles/how-to-choose-ssl-certificate-names/
/articles/ssl-certificates-email-validation/ → /articles/how-to-validate-ssl-certificate-via-email/
/articles/how-to-different-ssl-domain-validation-email/ → /articles/how-to-use-different-email-ssl-validation/
/articles/how-to-determine-certificate-authority/ → /articles/how-to-determine-certificate-authority/
/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/ → /articles/how-to-get-rsa-certificate-instead-of-ecc/

# Explanations
/articles/how-certificate-renewal-works/ → /articles/how-ssl-certificate-renewal-works/

# Reference
/articles/can-elliptic-curve-key-ssl-certificates/ → /articles/ecc-ssl-certificate-support/
/articles/can-ev-ssl-certificates/ → /articles/ev-ssl-certificate-support/
/articles/can-multi-year-ssl-certificates/ → /articles/multi-year-ssl-certificate-support/
/articles/can-upgrade-single-hostname-ssl-certificate-to-wildcard/ → /articles/upgrade-single-hostname-to-wildcard-ssl/
```

#### Split Articles Redirects

```yaml
# If we split ssl-certificates-email-validation.md
/articles/ssl-certificates-email-validation/ → /articles/how-to-validate-ssl-certificate-via-email/
# Individual sections redirect to new articles if split
```

#### Windows Article Redirect

```yaml
# Redirect Windows article to platform-specific articles
/articles/ssl-certificate-with-windows/ → /articles/how-to-install-ssl-certificate-microsoft-iis/
# Or create a redirect page that lists all Windows-compatible options
```

#### Category Move Redirects

```yaml
# Move Heroku troubleshooting from Integrations to SSL Certificates
/articles/heroku-error-ssl/ → /articles/how-to-troubleshoot-heroku-ssl-errors/
```

**Total: ~25-30 redirects needed**

---

## 8. Frontmatter Improvements

### Missing `meta` Descriptions

The following articles are missing `meta` frontmatter (used for SEO and page metadata):

1. `getting-started-ssl-certificates.md`
2. `faq-ssl-certificates.md`
3. `ssl-certificates-types.md`
4. `what-is-certificate-authority.md`
5. `what-is-ssl-root-certificate.md`
6. `what-is-ssl-san.md`
7. `what-is-csr.md`
8. `what-is-common-name.md`
9. `ssl-certificate-authorities.md`
10. `how-long-to-issue-ssl-certificate.md`
11. `how-certificate-renewal-works.md`
12. `ordering-standard-certificate.md`
13. `ordering-wildcard-certificate.md`
14. `ordering-lets-encrypt-certificate.md`
15. `renewing-ssl-certificate.md`
16. `renewing-standard-ssl-certificate.md`
17. `renewing-lets-encrypt-ssl-certificate.md`
18. `reissuing-ssl-certificate.md`
19. `installing-ssl-certificate.md`
20. `ssl-certificate-names.md`
21. `ssl-certificates-email-validation.md`
22. `how-to-different-ssl-domain-validation-email.md`
23. `how-to-determine-certificate-authority.md`
24. `ssl-certificate-with-apache.md`
25. `ssl-certificate-with-microsoft-iis.md`
6. `ssl-certificate-with-nginx.md`
27. `ssl-certificate-with-heroku.md`
28. `ssl-certificate-with-azure.md`
29. `letsencrypt.md`
30. `standard-vs-letsencrypt.md`
31. `can-elliptic-curve-key-ssl-certificates.md`
32. `can-ev-ssl-certificates.md`
33. `can-multi-year-ssl-certificates.md`
34. `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md`
35. `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md`

### Frontmatter Standards

All articles should have:
- `title`: Clear, descriptive title
- `excerpt`: Brief 1-2 sentence description (already present in most)
- `meta`: SEO-optimized description (60-160 characters, missing in 35 articles)
- `categories`: Appropriate categories (most have this)

### Example Improved Frontmatter

**Before:**
```yaml
---
title: Ordering a Standard SSL Certificate
excerpt: How to order a standard SSL certificate with DNSimple.
categories:
- SSL Certificates
---
```

**After:**
```yaml
---
title: How to Order a Standard SSL Certificate
excerpt: Step-by-step instructions for ordering a standard SSL certificate with DNSimple.
meta: Learn how to easily order a standard SSL certificate with DNSimple. Secure your website and protect your data with our step-by-step guide.
categories:
- SSL Certificates
---
```

---

## 9. Implementation Phases

### Phase 1: Preparation (No Code Changes)
- [x] Complete article audit
- [x] Create Diataxis classification
- [x] Propose category structure
- [x] Identify renames, splits, and new articles
- [x] Document redirects needed
- [x] Document frontmatter improvements

### Phase 2: Content Reorganization (Future PR)
- [ ] Update category YAML file
- [ ] Rename article files
- [ ] Update article titles in frontmatter
- [ ] Add missing `meta` descriptions
- [ ] Split long articles (if approved)
- [ ] Create new articles (if approved)
- [ ] Update internal links

### Phase 3: Redirects (Future PR)
- [ ] Add redirects for renamed articles
- [ ] Add redirects for split articles
- [ ] Add redirects for category moves
- [ ] Test all redirects

### Phase 4: Content Updates (Future PR)
- [ ] Update cross-references between articles
- [ ] Update category page content
- [ ] Review and improve article content
- [ ] Ensure consistency in terminology

---

## 10. Summary Statistics

### Current State
- **Total Articles:** 40 (some in multiple categories)
- **Articles Missing Meta:** 35
- **Articles Needing Rename:** 23
- **Articles Needing Split:** 3
- **New Articles Needed:** 5
- **Redirects Needed:** ~25-30

### Proposed State
- **Getting Started:** 1 article
- **Tutorials:** 1 article (new)
- **How-to Guides:** 18 articles (reorganized)
- **Explanations:** 12 articles
- **Reference:** 9 articles
- **Total:** 41 articles (after splits and new articles)

### Benefits
- ✅ Clear Diataxis classification
- ✅ Consistent naming conventions
- ✅ Better organization by user intent
- ✅ Improved SEO with meta descriptions
- ✅ Easier navigation with logical grouping
- ✅ Reduced content overlap
- ✅ Better user experience

---

## 11. Open Questions for Review

1. **Article Splits:** Should we split the 3 long articles, or keep them as single articles with better structure?
2. **New Articles:** Which of the 5 proposed new articles should be prioritized?
3. **Windows Article:** Should we redirect `ssl-certificate-with-windows.md` or keep it as a hub page?
4. **Let's Encrypt Article:** Should `letsencrypt.md` be split or reorganized?
5. **SHA-2 Article:** Should we keep `sha-2-ssl-certificates.md` as historical reference or remove outdated content?
6. **Category Structure:** Are the proposed sub-categories under "How to" appropriate, or should we use a flatter structure?

---

## 12. Next Steps

1. **Review this plan** with the team
2. **Address open questions** and get consensus
3. **Prioritize changes** (what's most important?)
4. **Create implementation PR** after approval
5. **Test redirects** thoroughly
6. **Update internal documentation** if needed

---

**End of Planning Document**
