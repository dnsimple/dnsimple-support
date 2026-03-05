# SSL Certificates Category Restructure

**Parent Issue:** #191

## 1. Proposed `categories/ssl_certificates.yaml`

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
    - "Standard vs Let's Encrypt SSL Certificates"
  Certificate Processes:
    - "How SSL Certificate Renewal Works"
    - "How Long Does It Take to Issue an SSL Certificate?"
  Certificate Providers:
    - "Let's Encrypt and DNSimple"

How-to guides:
  Ordering Certificates:
    - "Ordering a Standard SSL Certificate"
    - "Ordering a Wildcard SSL Certificate"
    - "Ordering a Let's Encrypt Certificate"
  Renewing Certificates:
    - "Renewing an SSL Certificate"
    - "Renewing a standard SSL Certificate"
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
  Overview:
    - "SSL/TLS Certificates"
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
```

## 2. Articles by Category

### Getting started (2 articles)
- Getting Started with SSL Certificates
- SSL/TLS Certificates

### Explanation (12 articles)

**Certificate Concepts:**
- What is a Certificate Authority?
- What is the SSL Certificate Chain?
- What is a Root Certificate?
- What is the Subject Alternative Name (SAN)?
- What is the CSR?
- What is the SSL Certificate Common Name?

**Certificate Types:**
- SSL Certificate Types
- Standard vs Let's Encrypt SSL Certificates

**Certificate Processes:**
- How does an SSL Certificate Renewal work?
- How long does it take to issue an SSL certificate?

**Certificate Providers:**
- Let's Encrypt and DNSimple

### How-to guides (15 articles)

**Ordering Certificates:**
- Ordering a Standard SSL Certificate
- Ordering a Wildcard SSL Certificate
- Ordering a Let's Encrypt Certificate

**Renewing Certificates:**
- Renewing an SSL Certificate
- Renewing a standard SSL Certificate
- Renewing a Let's Encrypt SSL Certificate

**Reissuing Certificates:**
- Re-issuing an SSL Certificate

**Certificate Configuration:**
- Choosing the SSL Certificate Names
- SSL Certificate email-based Domain Validation
- How can I select a different SSL certificate domain validation email?
- I got an ECC-signed certificate but want RSA

**Certificate Management:**
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

### Reference (9 articles)

**Overview:**
- SSL/TLS Certificates

**Certificate Authorities:**
- SSL Certificate Authorities used by DNSimple

**Certificate Features:**
- Do you support Elliptic Curve Cryptography (ECC) SSL certificates?
- Do you support Extended Validation (EV) SSL certificates?
- Do you support multi-year SSL certificates?
- Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate?
- SHA-2 SSL Certificates

**Frequently Asked Questions:**
- SSL Certificates Frequently Asked Questions

## 3. New Articles Required

**None** - All existing articles are accounted for. The current structure covers all necessary content.

## Notes

- **Removed from SSL category:** "Expiring Product Email Notifications" (not SSL-specific, belongs in Domains/DNSimple categories)
- **Let's Encrypt integration:** Let's Encrypt articles are integrated into appropriate task-based sections rather than having a separate category
- **Platform installation guides:** All kept together in Installation section
- **Total articles:** 46 articles organized across 6 Diataxis categories
