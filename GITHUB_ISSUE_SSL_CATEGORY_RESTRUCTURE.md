# SSL Certificates category restructure proposal

**Parent Issue:** #191

## 1. Overview

The SSL Certificates category will be reorganized to follow the Diataxis framework, similar to the Domains category revamp. This restructuring improves documentation navigation by organizing content by user intent rather than by product or topic.

**Note:** This issue is for reviewing the documentation structure only. No PR, code changes, or commits will be generated at this stage.

## 2. Objectives

- Align SSL documentation with the Diataxis framework
- Separate explanations from how-to guides
- Integrate Let's Encrypt articles into task-based sections (remove separate "Let's Encrypt" category)
- Group installation guides together
- Replace "Standard" terminology with "Sectigo" in navigation labels
- Improve documentation discoverability

## 3. Proposed `categories/ssl_certificates.yaml`

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
    - "What is the CSR?"
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
    - "Ordering a Sectigo SSL Certificate"
    - "Ordering a Wildcard SSL Certificate"
    - "Ordering a Let's Encrypt Certificate"
  Renewing Certificates:
    - "Renewing an SSL Certificate"
    - "Renewing a Sectigo SSL Certificate"
    - "Renewing a Let's Encrypt SSL Certificate"
  Reissuing Certificates:
    - "Re-issuing an SSL Certificate"
  Certificate Configuration:
    - "Choosing the SSL Certificate Names"
    - "SSL Certificate email-based Domain Validation"
    - "How can I select a different SSL certificate domain validation email?"
    - "I got an ECC-signed certificate but want RSA"
  Certificate Management:
    - "How do I determine the Certificate Authority that signed my SSL certificate?"

Installation:
  - "Installing an SSL Certificate"
  - "SSL Certificates with Apache"
  - "SSL Certificates with Microsoft Windows IIS"
  - "SSL Certificates with NGINX"
  - "SSL Certificates with Heroku"
  - "SSL Certificates with Microsoft Azure"
  - "SSL Certificates with Windows"

Troubleshooting:
  - "Troubleshooting Heroku SSL errors"

Reference:
  Certificate Authorities:
    - "SSL Certificate Authorities used by DNSimple"
  Certificate Features:
    - "Do you support Elliptic Curve Cryptography (ECC) SSL certificates?"
    - "Do you support Extended Validation (EV) SSL certificates?"
    - "Do you support multi-year SSL certificates?"
    - "Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate?"
    - "SHA-2 SSL Certificates"
  Frequently Asked Questions:
    - "SSL Certificates Frequently Asked Questions"
  Expiring Product Email Notifications:
    - "Expiring Product Email Notifications"
```

## 4. Articles by Category

### Getting started (2 articles)
- Getting Started with SSL Certificates
- SSL/TLS Certificates

### Explanation (12 articles)

**Certificate Concepts (6 articles):**
- What is a Certificate Authority?
- What is the SSL Certificate Chain?
- What is a Root Certificate?
- What is the Subject Alternative Name (SAN)?
- What is the CSR?
- What is the SSL Certificate Common Name?

**Certificate Types (2 articles):**
- SSL Certificate Types
- Sectigo vs Let's Encrypt SSL Certificates

**Certificate Processes (2 articles):**
- How SSL Certificate Renewal Works
- How Long Does It Take to Issue an SSL Certificate?

**Certificate Providers (1 article):**
- Let's Encrypt and DNSimple

### How-to guides (15 articles)

**Ordering Certificates (3 articles):**
- Ordering a Sectigo SSL Certificate
- Ordering a Wildcard SSL Certificate
- Ordering a Let's Encrypt Certificate

**Renewing Certificates (3 articles):**
- Renewing an SSL Certificate
- Renewing a Sectigo SSL Certificate
- Renewing a Let's Encrypt SSL Certificate

**Reissuing Certificates (1 article):**
- Re-issuing an SSL Certificate

**Certificate Configuration (4 articles):**
- Choosing the SSL Certificate Names
- SSL Certificate email-based Domain Validation
- How can I select a different SSL certificate domain validation email?
- I got an ECC-signed certificate but want RSA

**Certificate Management (1 article):**
- How do I determine the Certificate Authority that signed my SSL certificate?

### Installation (7 articles)
- Installing an SSL Certificate
- SSL Certificates with Apache
- SSL Certificates with Microsoft Windows IIS
- SSL Certificates with NGINX
- SSL Certificates with Heroku
- SSL Certificates with Microsoft Azure
- SSL Certificates with Windows

### Troubleshooting (1 article)
- Troubleshooting Heroku SSL errors

### Reference (8 articles)

**Certificate Authorities (1 article):**
- SSL Certificate Authorities used by DNSimple

**Certificate Features (5 articles):**
- Do you support Elliptic Curve Cryptography (ECC) SSL certificates?
- Do you support Extended Validation (EV) SSL certificates?
- Do you support multi-year SSL certificates?
- Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate?
- SHA-2 SSL Certificates

**Frequently Asked Questions (1 article):**
- SSL Certificates Frequently Asked Questions

**Expiring Product Email Notifications (1 article):**
- Expiring Product Email Notifications

**Total: 45 articles**

## 5. Content Notes

- **No new articles required** - All existing articles are accounted for and reorganized into the new structure.
- **Existing articles only** - All 45 articles are existing content being reorganized.
- **Expiring Product Email Notifications** - Remains referenced in the SSL category because it includes relevant information about SSL certificate expiration notifications, even though it also applies to other DNSimple products.
- **Let's Encrypt integration** - Let's Encrypt documentation is integrated into task-based sections (Ordering, Renewing) instead of having a separate "Let's Encrypt" category, making it easier to find information by task rather than by provider.
- **Platform installation guides** - All platform-specific installation guides remain grouped together in the Installation section.

## 6. Navigation Label Changes (Standard → Sectigo)

The following navigation labels in the YAML will change from "Standard" to "Sectigo":

| Old Navigation Label | New Navigation Label |
|---------------------|---------------------|
| "Standard vs Let's Encrypt SSL Certificates" | "Sectigo vs Let's Encrypt SSL Certificates" |
| "Ordering a Standard SSL Certificate" | "Ordering a Sectigo SSL Certificate" |
| "Renewing a standard SSL Certificate" | "Renewing a Sectigo SSL Certificate" |

**Important:** These are navigation label changes only. File names and article frontmatter remain unchanged at this stage.

## 7. Implementation Plan

### Phase 1 — Navigation restructure
- Update `categories/ssl_certificates.yaml` with the new Diataxis-aligned structure
- Test category page rendering

### Phase 2 — Terminology updates
- Replace "Standard" → "Sectigo" in navigation labels (3 changes)
- Verify all references are updated

### Phase 3 — Documentation quality
- Add `meta` descriptions to articles missing them
- Update internal links to reflect new navigation structure
- Ensure cross-references are accurate

### Phase 4 — Review
- Confirm article placement makes sense
- Ensure navigation clarity and discoverability
- Verify all 45 articles are properly categorized

---

**Ready for team review and feedback before implementation.**
