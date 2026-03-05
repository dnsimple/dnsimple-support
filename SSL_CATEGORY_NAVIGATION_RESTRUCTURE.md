# SSL Certificates Category Navigation Restructure

**Parent Issue:** #191

## A) Proposed `categories/ssl_certificates.yaml`

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

## B) Articles by Category

### Getting started (2 articles)

**Existing articles:**
- Getting Started with SSL Certificates
- SSL/TLS Certificates

**New articles:** none

### Explanation (12 articles)

**Certificate Concepts:**

**Existing articles:**
- What is a Certificate Authority?
- What is the SSL Certificate Chain?
- What is a Root Certificate?
- What is the Subject Alternative Name (SAN)?
- What is the CSR?
- What is the SSL Certificate Common Name?

**New articles:** none

**Certificate Types:**

**Existing articles:**
- SSL Certificate Types
- Sectigo vs Let's Encrypt SSL Certificates *(navigation label change from "Standard vs Let's Encrypt SSL Certificates")*

**New articles:** none

**Certificate Processes:**

**Existing articles:**
- How SSL Certificate Renewal Works *(title normalization in navigation)*
- How Long Does It Take to Issue an SSL Certificate? *(title normalization in navigation)*

**New articles:** none

**Certificate Providers:**

**Existing articles:**
- Let's Encrypt and DNSimple

**New articles:** none

### How-to guides (15 articles)

**Ordering Certificates:**

**Existing articles:**
- Ordering a Sectigo SSL Certificate *(navigation label change from "Ordering a Standard SSL Certificate")*
- Ordering a Wildcard SSL Certificate
- Ordering a Let's Encrypt Certificate

**New articles:** none

**Renewing Certificates:**

**Existing articles:**
- Renewing an SSL Certificate
- Renewing a Sectigo SSL Certificate *(navigation label change from "Renewing a standard SSL Certificate")*
- Renewing a Let's Encrypt SSL Certificate

**New articles:** none

**Reissuing Certificates:**

**Existing articles:**
- Re-issuing an SSL Certificate

**New articles:** none

**Certificate Configuration:**

**Existing articles:**
- Choosing the SSL Certificate Names
- SSL Certificate email-based Domain Validation
- How can I select a different SSL certificate domain validation email?
- I got an ECC-signed certificate but want RSA

**New articles:** none

**Certificate Management:**

**Existing articles:**
- How do I determine the Certificate Authority that signed my SSL certificate?

**New articles:** none

### Installation (7 articles)

**Existing articles:**
- Installing an SSL Certificate
- SSL Certificates with Apache
- SSL Certificates with Microsoft Windows IIS
- SSL Certificates with NGINX
- SSL Certificates with Heroku
- SSL Certificates with Microsoft Azure
- SSL Certificates with Windows

**New articles:** none

### Troubleshooting (1 article)

**Existing articles:**
- Troubleshooting Heroku SSL errors

**New articles:** none

### Reference (8 articles)

**Certificate Authorities:**

**Existing articles:**
- SSL Certificate Authorities used by DNSimple

**New articles:** none

**Certificate Features:**

**Existing articles:**
- Do you support Elliptic Curve Cryptography (ECC) SSL certificates?
- Do you support Extended Validation (EV) SSL certificates?
- Do you support multi-year SSL certificates?
- Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate?
- SHA-2 SSL Certificates

**New articles:** none

**Frequently Asked Questions:**

**Existing articles:**
- SSL Certificates Frequently Asked Questions

**New articles:** none

**Expiring Product Email Notifications:**

**Existing articles:**
- Expiring Product Email Notifications

**New articles:** none

## C) Navigation Title Changes (Standard → Sectigo)

These navigation labels in the YAML must change from "Standard" to "Sectigo":

| Old Navigation Label | New Navigation Label |
|---------------------|---------------------|
| "Standard vs Let's Encrypt SSL Certificates" | "Sectigo vs Let's Encrypt SSL Certificates" |
| "Ordering a Standard SSL Certificate" | "Ordering a Sectigo SSL Certificate" |
| "Renewing a standard SSL Certificate" | "Renewing a Sectigo SSL Certificate" |

**Note:** These are navigation label changes only. File names and article frontmatter remain unchanged at this stage.

## D) New Articles Required

**None** - All existing articles are accounted for. The current structure covers all necessary content.

## E) Articles to Move Out of SSL Category

**None** - All articles remain in the SSL category. "Expiring Product Email Notifications" applies to multiple DNSimple products including SSL certificates and contains relevant information about SSL certificate expiration notifications, so it remains in the SSL category.

---

## Summary

**Total SSL articles after restructuring:** 45

**Breakdown:**
- Getting started: 2
- Explanation: 12
- How-to guides: 15
- Installation: 7
- Troubleshooting: 1
- Reference: 8
