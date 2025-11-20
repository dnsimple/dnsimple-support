# Email Category Gap Analysis

This document identifies missing articles for the Emails category based on functionality provided by DNSimple and common user needs.

## Current Coverage

### Email Forwarding
- ✅ What Is Email Forwarding? (Explanation)
- ✅ Enabling Email Forwarding (How-To)
- ✅ Creating and Deleting Email Forwards (How-To)
- ✅ Email Forwarding Management in DNSimple (Reference)
- ✅ Troubleshooting Email Forwarding with Gmail (How-To)

### Email Authentication
- ✅ What Is an SPF Record? (Explanation)
- ✅ What Is a DKIM Record? (Explanation)
- ✅ What Is a DMARC Record? (Explanation)
- ✅ Setting Up SPF Records (How-To)
- ✅ Setting Up DKIM (How-To)
- ✅ Setting Up DMARC (How-To)
- ✅ Verifying SPF with dig and Online Tools (How-To)
- ✅ Verifying DKIM with dig and Online Tools (How-To)
- ✅ Verifying DMARC with dig and Online Tools (How-To)
- ✅ Troubleshooting Email Authentication (How-To)
- ✅ SPF Record Syntax and Validation Reference (Reference)
- ✅ DKIM Record Reference (Reference)
- ✅ DMARC Record Reference (Reference)

### Email Hosting
- ✅ Email Hosting Support (Explanation)

## Identified Gaps

### High Priority

#### 1. MX Records for Email
**Gap:** MX records are fundamental to email delivery but are currently only covered in the DNS category. The Emails category should include:
- **Explanation:** "What Is an MX Record?" (already exists in DNS, should be cross-referenced or duplicated)
- **How-To:** "Setting Up MX Records for Email Hosting" - Guide to configuring MX records for email providers like Google Workspace, Microsoft 365, etc.
- **How-To:** "Managing MX Records When Changing Email Providers" - Guide to updating MX records when migrating email hosting

#### 2. Null MX Records
**Gap:** Null MX records indicate that a domain does not accept email, which is important for security and preventing backscatter.
- **Explanation:** "What Are Null MX Records?" - Explain the purpose and use cases for null MX records
- **How-To:** "Setting Up Null MX Records" - Guide to configuring null MX records for domains that don't accept email

#### 3. Email Forwarding Advanced Topics
**Gap:** Several advanced email forwarding topics are not covered:
- **How-To:** "Managing Email Forwarding for Multiple Domains" - Guide to managing email forwarding across multiple domains
- **How-To:** "Email Forwarding with Subdomains" - How to set up email forwarding for subdomains
- **Explanation:** "Email Forwarding Limits and Quotas" - Detailed explanation of email forwarding limits, quotas, and billing
- **How-To:** "Migrating Email Forwarding from Another Provider" - Guide to migrating email forwarding configuration

#### 4. Email Deliverability
**Gap:** Email deliverability is crucial but not covered:
- **Explanation:** "Understanding Email Deliverability" - Overview of factors affecting email deliverability
- **How-To:** "Improving Email Deliverability" - Best practices for improving email deliverability
- **How-To:** "Monitoring Email Deliverability" - Tools and techniques for monitoring email deliverability

#### 5. Email Service Integration
**Gap:** While one-click services are covered in the Services category, the Emails category should have:
- **How-To:** "Integrating Google Workspace with DNSimple" - Step-by-step guide to setting up Google Workspace email
- **How-To:** "Integrating Microsoft 365 with DNSimple" - Step-by-step guide to setting up Microsoft 365 email
- **How-To:** "Integrating Third-Party Email Services" - General guide to integrating email hosting services

### Medium Priority

#### 6. Email Authentication Advanced Topics
**Gap:** Some advanced email authentication topics are missing:
- **Explanation:** "Understanding SPF, DKIM, and DMARC Alignment" - Detailed explanation of alignment requirements
- **How-To:** "Implementing a Gradual DMARC Policy" - Guide to gradually implementing DMARC policies
- **How-To:** "Managing Multiple DKIM Selectors" - Guide to managing multiple DKIM keys for different services
- **Reference:** "Email Authentication Best Practices" - Reference guide to email authentication best practices

#### 7. Email Bounce Handling
**Gap:** Email bounce handling is not covered:
- **Explanation:** "Understanding Email Bounces" - Overview of email bounce types and causes
- **How-To:** "Handling Email Bounces with Email Forwarding" - Guide to managing bounced emails

#### 8. Email Forwarding API
**Gap:** API documentation for email forwarding is not covered in the Emails category:
- **Reference:** "Email Forwarding API Reference" - API documentation for managing email forwards programmatically
- **How-To:** "Managing Email Forwards with the API" - Guide to using the API for email forwarding

### Low Priority

#### 9. Email Security
**Gap:** General email security topics could be covered:
- **Explanation:** "Email Security Best Practices" - Overview of email security best practices
- **How-To:** "Protecting Your Domain from Email Spoofing" - Guide to protecting against email spoofing

#### 10. Email Forwarding Troubleshooting
**Gap:** Additional troubleshooting topics:
- **How-To:** "Troubleshooting Email Forwarding Delivery Issues" - Guide to troubleshooting email delivery problems
- **How-To:** "Troubleshooting Email Forwarding with Other Providers" - Guide to troubleshooting with providers other than Gmail

#### 11. Email Records Management
**Gap:** General email DNS records management:
- **How-To:** "Managing Email DNS Records" - Comprehensive guide to managing all email-related DNS records
- **Reference:** "Email DNS Records Quick Reference" - Quick reference for all email-related DNS records

## Recommendations

### Immediate Actions
1. **Add MX Records articles to Emails category** - MX records are essential for email and should be prominently featured in the Emails category
2. **Create Null MX Records articles** - Important for security and preventing backscatter
3. **Add Email Forwarding Limits article** - Users need clear information about limits and quotas

### Short-term Actions
4. **Create Email Deliverability articles** - Critical for users sending email
5. **Add Email Service Integration guides** - Help users integrate with popular email providers
6. **Expand Email Authentication coverage** - Add advanced topics and best practices

### Long-term Actions
7. **Add Email Forwarding API documentation** - For users managing email forwards programmatically
8. **Create comprehensive Email Security guide** - Help users protect their domains
9. **Add Email Bounce Handling articles** - Help users understand and manage email bounces

## Notes

- Some topics (like MX records) exist in the DNS category but should be cross-referenced or duplicated in the Emails category for better discoverability
- One-click services for email are covered in the Services category, which is appropriate, but the Emails category should have integration guides
- API documentation may be better suited for developer documentation, but basic API usage guides could be helpful in the Emails category


