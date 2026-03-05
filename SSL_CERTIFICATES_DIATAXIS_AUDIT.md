# SSL Certificates Documentation - Diataxis Audit & Implementation Plan

**Status:** Planning Document - No Implementation Yet  
**Date:** 2025-01-XX  
**Purpose:** Complete audit and reorganization of SSL Certificates documentation following Diataxis framework

---

## Phase 1: Complete Article Audit & Diataxis Mapping

### Article Mapping Table

| Current Title | Current File | Current YAML Section | Proposed Diataxis Type | Needs Rename? | Needs Split? | Notes |
|--------------|-------------|---------------------|----------------------|---------------|--------------|-------|
| Getting Started with SSL Certificates | `getting-started-ssl-certificates.md` | Getting started | Getting Started | No | No | Keep as hub, or convert to Tutorial |
| SSL Certificates Frequently Asked Questions | `faq-ssl-certificates.md` | Getting started | Reference | No | No | Move to Reference |
| What is a Certificate Authority? | `what-is-certificate-authority.md` | Getting started | Explanation | No | No | Move to Explanation |
| What is the SSL Certificate Common Name? | `what-is-common-name.md` | Getting started | Explanation | No | No | Move to Explanation |
| What is the CSR? | `what-is-csr.md` | Getting started | Explanation | No | No | Move to Explanation |
| What is the SSL Certificate Chain? | `what-is-ssl-certificate-chain.md` | Getting started | Explanation | No | No | Move to Explanation |
| What is a Root Certificate? | `what-is-ssl-root-certificate.md` | Getting started | Explanation | No | No | Move to Explanation |
| What is the Subject Alternative Name (SAN)? | `what-is-ssl-san.md` | Getting started | Explanation | No | No | Move to Explanation |
| How long does it take to issue an SSL certificate? | `how-long-to-issue-ssl-certificate.md` | Getting started | Explanation | No | No | Move to Explanation |
| How do I determine the Certificate Authority that signed my SSL certificate? | `how-to-determine-certificate-authority.md` | Getting started | How-to | No | No | Move to How-to |
| How does an SSL Certificate Renewal work? | `how-certificate-renewal-works.md` | Getting started | Explanation | No | No | Move to Explanation |
| SSL Certificate Authorities used by DNSimple | `ssl-certificate-authorities.md` | Getting started | Reference | No | No | Move to Reference |
| Expiring Product Email Notifications | `expiring-product-email-notifications.md` | Getting started | Reference | No | No | Move to Reference (or remove from SSL category) |
| Standard vs Let's Encrypt SSL Certificates | `standard-vs-letsencrypt.md` | Let's Encrypt | Explanation | **Yes** → "Sectigo vs Let's Encrypt" | No | Rename title, file, and all references |
| Let's Encrypt and DNSimple | `letsencrypt.md` | Let's Encrypt | Explanation | No | Consider | Very long, could split features/limitations |
| Ordering a Let's Encrypt Certificate | `ordering-lets-encrypt-certificate.md` | Let's Encrypt | How-to | No | No | Move to How-to |
| Renewing a Let's Encrypt SSL Certificate | `renewing-lets-encrypt-ssl-certificate.md` | Let's Encrypt | How-to | No | No | Move to How-to |
| Ordering a Standard SSL Certificate | `ordering-standard-certificate.md` | Ordering | How-to | **Yes** → "Ordering a Sectigo SSL Certificate" | No | Rename title, file, and all references |
| Ordering a Wildcard SSL Certificate | `ordering-wildcard-certificate.md` | Ordering | How-to | No | No | Move to How-to |
| Re-issuing an SSL Certificate | `reissuing-ssl-certificate.md` | Ordering | How-to | No | No | Move to How-to |
| Renewing an SSL Certificate | `renewing-ssl-certificate.md` | Ordering | How-to | No | No | Move to How-to (overview/routing page) |
| Renewing a standard SSL Certificate | `renewing-standard-ssl-certificate.md` | Ordering | How-to | **Yes** → "Renewing a Sectigo SSL Certificate" | No | Rename title, file, and all references |
| How can I select a different SSL certificate domain validation email? | `how-to-different-ssl-domain-validation-email.md` | Ordering | How-to | No | No | Move to How-to |
| Choosing the SSL Certificate Names | `ssl-certificate-names.md` | Ordering | How-to | No | No | Move to How-to |
| I got an ECC-signed certificate but want RSA | `i-got-an-ecc-certificate-but-i-want-a-rsa-one.md` | Ordering | How-to | No | No | Move to How-to |
| Installing an SSL Certificate | `installing-ssl-certificate.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with Apache | `ssl-certificate-with-apache.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with Microsoft Azure | `ssl-certificate-with-azure.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with Heroku | `ssl-certificate-with-heroku.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with Microsoft Windows IIS | `ssl-certificate-with-microsoft-iis.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with NGINX | `ssl-certificate-with-nginx.md` | Installation | Installation | No | No | Keep in Installation |
| SSL Certificates with Windows | `ssl-certificate-with-windows.md` | Installation | Reference | No | No | Convert to redirect/hub page |
| SSL Certificate email-based Domain Validation | `ssl-certificates-email-validation.md` | Installation | How-to | No | **Yes** | Split: main process vs requirements vs troubleshooting |
| SSL Certificate Types | `ssl-certificates-types.md` | Installation | Explanation | No | No | Move to Explanation |
| SSL/TLS Certificates | `ssl-certificates.md` | Installation | Reference | No | Consider | Pillar page - reorganize content |
| Do you support Elliptic Curve Cryptography (ECC) SSL certificates? | `can-elliptic-curve-key-ssl-certificates.md` | SSL Certificate features | Reference | No | No | Move to Reference |
| Do you support Extended Validation (EV) SSL certificates? | `can-ev-ssl-certificates.md` | SSL Certificate features | Reference | No | No | Move to Reference |
| Do you support multi-year SSL certificates? | `can-multi-year-ssl-certificates.md` | SSL Certificate features | Reference | No | No | Move to Reference |
| Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate? | `can-upgrade-single-hostname-ssl-certificate-to-wildcard.md` | SSL Certificate features | Reference | No | No | Move to Reference |
| SHA-2 SSL Certificates | `sha-2-ssl-certificates.md` | SSL Certificate features | Reference | No | No | Move to Reference (historical) |

### Summary Statistics

- **Total Articles:** 40
- **Articles Needing Rename (Standard → Sectigo):** 3
- **Articles Needing Split:** 2-3
- **Articles Missing Meta:** ~35
- **New Articles Needed:** 2 (Glossary, Troubleshooting)

---

## Phase 2: Proposed Category Structure

### Updated `categories/ssl_certificates.yaml`

```yaml
Getting started:
  - "Getting Started with SSL Certificates"
  - "SSL/TLS Certificates"

Tutorials:
  # Optional: Convert "Getting Started" to a tutorial if it becomes step-by-step

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

## Phase 3: Terminology Changes (Standard → Sectigo)

### Files to Rename

| Current File | New File | Current Title | New Title |
|-------------|----------|---------------|-----------|
| `standard-vs-letsencrypt.md` | `sectigo-vs-letsencrypt.md` | Standard vs Let's Encrypt SSL Certificates | Sectigo vs Let's Encrypt SSL Certificates |
| `ordering-standard-certificate.md` | `ordering-sectigo-certificate.md` | Ordering a Standard SSL Certificate | Ordering a Sectigo SSL Certificate |
| `renewing-standard-ssl-certificate.md` | `renewing-sectigo-ssl-certificate.md` | Renewing a standard SSL Certificate | Renewing a Sectigo SSL Certificate |

### Content Updates Needed

**Important:** Only 3 files are renamed (those with "Standard" in the filename). All other file slugs remain unchanged. DNSimple documentation does not use "how-to-" prefixes in file names.

All articles that mention "Standard certificate" or "Standard SSL certificate" in the Sectigo context need content updates:

1. `getting-started-ssl-certificates.md` - Update references
2. `ssl-certificates.md` - Update product descriptions, add legacy note if needed
3. `faq-ssl-certificates.md` - Update Q&A
4. `letsencrypt.md` - Update comparison sections
5. `ordering-wildcard-certificate.md` - Update references
6. `renewing-ssl-certificate.md` - Update references
7. All installation articles - Update references
8. Any other articles with "Standard" references

### Redirects Needed

```yaml
# In each renamed article's frontmatter:
redirect_from:
  - /articles/standard-vs-letsencrypt/
  - /articles/ordering-standard-certificate/
  - /articles/renewing-standard-ssl-certificate/
```

---

## Phase 4: Pillar Page Decision

**Decision:** Keep `ssl-certificates.md` as the pillar page (SSL/TLS Certificates)

**Updates Needed:**
- Reorganize content to be scannable
- Add clear sections:
  - Overview of SSL/TLS
  - Certificate options (Sectigo vs Let's Encrypt) with links
  - Quick links to Getting Started, key How-tos, Explanations
  - Link to Glossary and Troubleshooting
- Remove deep concept dumps (link to explanations instead)
- Add legacy note about "Standard" terminology if needed

**Getting Started Decision:** Keep as Getting Started hub (not Tutorial) - it's already a good onboarding page that links to other resources.

---

## Phase 5: New Articles to Create

### 1. SSL Certificate Glossary (`ssl-certificate-glossary.md`)

**Structure (following DNS/DNSSEC glossary pattern):**

```markdown
---
title: SSL Certificate Glossary
excerpt: Defines terms related to SSL/TLS certificates.
meta: Explore our comprehensive SSL certificate glossary, featuring essential definitions and terms to enhance your understanding of SSL/TLS certificates and their critical components.
categories:
- SSL Certificates
---

# SSL Certificate Glossary

## Core Concepts

### SSL/TLS Certificate
[Definition + Learn more links]

### Certificate Authority (CA)
[Definition + Learn more links]

### Domain Validation (DV)
[Definition + Learn more links]

## Certificate Structure

### Certificate Signing Request (CSR)
[Definition + Learn more links]

### Common Name (CN)
[Definition + Learn more links]

### Subject Alternative Name (SAN)
[Definition + Learn more links]

### Certificate Chain
[Definition + Learn more links]

### Root Certificate
[Definition + Learn more links]

### Intermediate Certificate
[Definition + Learn more links]

## Certificate Types

### Single-Name Certificate
[Definition + Learn more links]

### Wildcard Certificate
[Definition + Learn more links]

### Multi-Domain Certificate (SAN Certificate)
[Definition + Learn more links]

## Validation & Issuance

### Domain Validation
[Definition + Learn more links]

### Email Validation
[Definition + Learn more links]

### DNS Validation
[Definition + Learn more links]

## Providers

### Sectigo
[Definition + Learn more links]

### Let's Encrypt
[Definition + Learn more links]

### PositiveSSL
[Definition + Learn more links]
```

### 2. Troubleshooting SSL Certificate Issues (`troubleshooting-ssl-certificate-issues.md`)

**Structure:**

```markdown
---
title: Troubleshooting SSL Certificate Issues
excerpt: Common SSL certificate issues and how to resolve them.
meta: Learn how to troubleshoot common SSL certificate issues including validation problems, issuance delays, and installation errors.
categories:
- SSL Certificates
---

# Troubleshooting SSL Certificate Issues

## Validation Email Problems
[Content + links to email validation article]

## CAA Record Blocking Issuance
[Content + links to CAA article]

## Issuance Delays
[Content + links to issuance timing article]

## Wrong Hostname / Certificate Mismatch
[Content + links to certificate names article]

## Incomplete Certificate Chain
[Content + links to certificate chain article]

## When to Reissue vs Renew
[Content + links to reissue and renewal articles]

## Platform-Specific Issues
[Content + links to platform installation articles]
```

---

## Phase 6: Content Splits & Cleanup

### Articles to Split

#### 1. `ssl-certificates-email-validation.md`
**Current:** ~1500 words, mixes process, requirements, and troubleshooting

**Proposed Split:**
- **Keep:** Main article as "How to Validate an SSL Certificate via Email" (process)
- **Extract to Reference:** Email requirements, WHOIS deprecation, GDPR → "SSL Certificate Email Validation Requirements"
- **Extract to How-to:** Changing email → "How to Change SSL Certificate Validation Email"
- **Extract to How-to:** Resending email → "How to Resend SSL Certificate Validation Email"

**Decision:** Keep as single article but reorganize with clear sections. Only split if it exceeds 2000 words.

#### 2. `letsencrypt.md`
**Current:** ~1300 words, covers overview, differences, integration, products, limitations, auto-renewal

**Proposed:** Keep as single article but reorganize with better structure. Consider extracting auto-renewal details to renewal how-to article.

#### 3. `ssl-certificates.md`
**Current:** Mix of overview and product details

**Proposed:** Reorganize as pillar page with links, remove deep product details (link to product-specific articles).

### Articles to Move

- `ssl-certificate-types.md` → Move from Installation to Explanation
- `ssl-certificates-email-validation.md` → Move from Installation to How-to
- `ssl-certificate-with-windows.md` → Convert to redirect/hub page pointing to IIS, Apache, NGINX articles

---

## Phase 7: Frontmatter & Links Audit

### Missing Meta Descriptions

All articles need `meta` frontmatter. See detailed list in implementation checklist.

### Link Updates Needed

1. Update all internal links from "Standard" to "Sectigo"
2. Update all file path references after renames
3. Add Glossary links to relevant articles
4. Add Troubleshooting links to relevant articles
5. Update cross-references between related articles

---

## Implementation Checklist

### Phase 1: ✅ Complete
- [x] Audit all articles
- [x] Create Diataxis mapping
- [x] Document renames needed
- [x] Document splits needed

### Phase 2: Category Restructure
- [ ] Update `categories/ssl_certificates.yaml`
- [ ] Test category page rendering

### Phase 3: Terminology (Standard → Sectigo)
- [ ] Rename 3 article files
- [ ] Update titles in frontmatter
- [ ] Update content in all articles
- [ ] Add redirects
- [ ] Update internal links

### Phase 4: Pillar Page
- [ ] Reorganize `ssl-certificates.md`
- [ ] Add quick links section
- [ ] Add legacy terminology note (if needed)

### Phase 5: New Articles
- [ ] Create `ssl-certificate-glossary.md`
- [ ] Create `troubleshooting-ssl-certificate-issues.md`
- [ ] Add to category YAML

### Phase 6: Content Splits
- [ ] Reorganize `ssl-certificates-email-validation.md`
- [ ] Reorganize `letsencrypt.md`
- [ ] Reorganize `ssl-certificates.md`
- [ ] Move misplaced articles

### Phase 7: Frontmatter & Links
- [ ] Add `meta` to all articles
- [ ] Update all internal links
- [ ] Update cross-references
- [ ] Test all links

---

## Open Questions

1. Should "Getting Started" become a Tutorial or stay as a hub?
2. Should we split `ssl-certificates-email-validation.md` or just reorganize?
3. Should `ssl-certificate-with-windows.md` be deleted or converted to redirect page?
4. Where should "Expiring Product Email Notifications" live? (It's not SSL-specific)

---

**End of Audit Document**
