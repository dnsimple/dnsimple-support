# Proposed SSL Certificates Category YAML Structure

**File:** `categories/ssl_certificates.yaml`

**This is the complete proposed structure following Diataxis framework.**

---

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
  - "SSL Certificates with Microsoft IIS"
  - "SSL Certificates with NGINX"
  - "SSL Certificates with Heroku"
  - "SSL Certificates with Microsoft Azure"

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

## Key Changes from Current Structure

### Removed Sections
- ❌ "Let's Encrypt" (separate section) - Now integrated into task-based groupings
- ❌ "Ordering" (separate section) - Now under "How-to guides"
- ❌ "Installation" (mixed content) - Now only platform-specific installation guides
- ❌ "SSL Certificate features" - Now under "Reference"

### New Sections
- ✅ "Explanation" - All concept articles grouped by topic
- ✅ "How-to guides" - All task-based articles, grouped by task type
- ✅ "Troubleshooting" - New section for troubleshooting content
- ✅ "Reference" - Organized by content type (Overview, Features, FAQ, Glossary)

### Reorganized Content
- **Getting Started:** Only onboarding/hub pages
- **Explanation:** Concepts organized by topic (Concepts, Types, Processes, Providers)
- **How-to guides:** Tasks organized by action (Ordering, Renewing, Reissuing, Configuration, Management)
- **Installation:** Only platform-specific installation guides
- **Troubleshooting:** New troubleshooting article
- **Reference:** Lookup content organized by type

### Terminology Updates
- "Standard" → "Sectigo" in titles (only 3 files renamed)
- File slugs remain unchanged (DNSimple doesn't use "how-to-" prefixes)
- Titles may be updated for clarity in frontmatter only

---

## Article Title Mapping

| Current Title (in YAML) | New Title (in YAML) | Diataxis Type |
|------------------------|---------------------|---------------|
| Getting Started with SSL Certificates | Getting Started with SSL Certificates | Getting Started |
| SSL Certificates Frequently Asked Questions | SSL Certificates Frequently Asked Questions | Reference |
| What is a Certificate Authority? | What is a Certificate Authority? | Explanation |
| What is the SSL Certificate Common Name? | What is the SSL Certificate Common Name? | Explanation |
| What is the CSR? | What is a Certificate Signing Request (CSR)? | Explanation |
| What is the SSL Certificate Chain? | What is the SSL Certificate Chain? | Explanation |
| What is a Root Certificate? | What is a Root Certificate? | Explanation |
| What is the Subject Alternative Name (SAN)? | What is the Subject Alternative Name (SAN)? | Explanation |
| How long does it take to issue an SSL certificate? | How Long Does It Take to Issue an SSL Certificate? | Explanation |
| How do I determine the Certificate Authority that signed my SSL certificate? | How do I determine the Certificate Authority that signed my SSL certificate? | How-to |
| How does an SSL Certificate Renewal work? | How SSL Certificate Renewal Works | Explanation |
| SSL Certificate Authorities used by DNSimple | SSL Certificate Authorities Used by DNSimple | Reference |
| Standard vs Let's Encrypt SSL Certificates | Sectigo vs Let's Encrypt SSL Certificates | Explanation |
| Let's Encrypt and DNSimple | Let's Encrypt and DNSimple | Explanation |
| Ordering a Let's Encrypt Certificate | Ordering a Let's Encrypt Certificate | How-to |
| Renewing a Let's Encrypt SSL Certificate | Renewing a Let's Encrypt SSL Certificate | How-to |
| Ordering a Standard SSL Certificate | Ordering a Sectigo SSL Certificate | How-to |
| Ordering a Wildcard SSL Certificate | Ordering a Wildcard SSL Certificate | How-to |
| Re-issuing an SSL Certificate | Re-issuing an SSL Certificate | How-to |
| Renewing an SSL Certificate | Renewing an SSL Certificate | How-to |
| Renewing a standard SSL Certificate | Renewing a Sectigo SSL Certificate | How-to |
| How can I select a different SSL certificate domain validation email? | How can I select a different SSL certificate domain validation email? | How-to |
| Choosing the SSL Certificate Names | Choosing the SSL Certificate Names | How-to |
| I got an ECC-signed certificate but want RSA | I got an ECC-signed certificate but want RSA | How-to |
| Installing an SSL Certificate | Installing an SSL Certificate | Installation |
| SSL Certificates with Apache | SSL Certificates with Apache | Installation |
| SSL Certificates with Microsoft Azure | SSL Certificates with Microsoft Azure | Installation |
| SSL Certificates with Heroku | SSL Certificates with Heroku | Installation |
| SSL Certificates with Microsoft Windows IIS | SSL Certificates with Microsoft IIS | Installation |
| SSL Certificates with NGINX | SSL Certificates with NGINX | Installation |
| SSL Certificates with Windows | (Redirect/Hub page) | Reference |
| SSL Certificate email-based Domain Validation | SSL Certificate email-based Domain Validation | How-to |
| SSL Certificate Types | SSL Certificate Types | Explanation |
| SSL/TLS Certificates | SSL/TLS Certificates | Reference |
| Do you support Elliptic Curve Cryptography (ECC) SSL certificates? | Elliptic Curve Cryptography (ECC) SSL Certificate Support | Reference |
| Do you support Extended Validation (EV) SSL certificates? | Extended Validation (EV) SSL Certificate Support | Reference |
| Do you support multi-year SSL certificates? | Multi-Year SSL Certificate Support | Reference |
| Can I upgrade a single-hostname SSL certificate to a wildcard SSL certificate? | Upgrading Single-Hostname to Wildcard SSL Certificates | Reference |
| SHA-2 SSL Certificates | SHA-2 SSL Certificates | Reference |
| (NEW) Troubleshooting SSL Certificate Issues | Troubleshooting SSL Certificate Issues | Troubleshooting |
| (NEW) SSL Certificate Glossary | SSL Certificate Glossary | Reference |

---

## Notes

1. **Expiring Product Email Notifications** - This article is not SSL-specific and should be removed from the SSL category. It's already in DNSimple and Domains categories.

2. **Windows Article** - `ssl-certificate-with-windows.md` should be converted to a redirect/hub page pointing to the platform-specific articles (IIS, Apache, NGINX) since Windows is an OS, not a web server.

3. **Getting Started** - Kept as a hub page (not converted to Tutorial) as it serves as an onboarding entry point that links to other resources.

4. **Let's Encrypt Integration** - Let's Encrypt articles are now integrated into task-based groupings rather than having a separate section, making it easier to find information by task rather than by provider.

5. **Installation Section** - Only contains platform-specific installation guides. Generic installation is in How-to guides.

---

**This structure aligns with Diataxis framework and improves discoverability by organizing content by user intent rather than by product or topic.**
