---
title: Email Services at DNSimple
excerpt: Email forwarding, authentication records (SPF, DKIM, DMARC), and third-party email hosting configuration at DNSimple.
meta: Guide to email services at DNSimple, including email forwarding, SPF, DKIM, and DMARC authentication records, and integration with third-party email hosting providers.
categories:
- Emails
---

# Email Services at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides email forwarding and DNS-based email authentication (SPF, DKIM, DMARC). DNSimple does not offer full email hosting, but supports configuration for third-party email providers like Google Workspace and Microsoft 365.

## Email forwarding {#forwarding}

- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - How email forwarding works at DNSimple.
- [Email Hosting Support](/articles/email-hosting/) - The difference between email hosting and email forwarding, and what DNSimple supports.

## Email authentication {#authentication}

- [What Is an SPF Record?](/articles/spf-record/) - How SPF authorizes email senders for your domain.
- [What Is a DKIM Record?](/articles/dkim-record/) - How DKIM uses digital signatures to verify email authenticity.
- [What Is a DMARC Record?](/articles/dmarc-record/) - How DMARC ties SPF and DKIM together with a policy.

## Setting up email forwarding {#setup-forwarding}

- [Enabling Email Forwarding](/articles/enabling-email-forwarding/) - Turn on email forwarding for your domain.
- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - Create, manage, and remove forwarding rules.
- [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/) - Forwarding limits, quotas, and billing.
- [Managing Email Forwarding for Multiple Domains](/articles/managing-email-forwarding-for-multiple-domains/) - Manage forwarding across multiple domains.
- [Migrating Email Forwarding from Another Provider](/articles/migrating-email-forwarding-from-another-provider/) - Move forwarding configuration from another provider.

## Setting up email authentication {#setup-authentication}

- [Setting Up SPF Records](/articles/setting-up-spf/) - Configure SPF to authorize your email senders.
- [Setting Up DKIM](/articles/set-up-dkim/) - Add DKIM records for your email services.
- [Setting Up DMARC](/articles/set-up-dmarc/) - Publish a DMARC policy and enable reporting.
- [Verifying SPF with dig and Online Tools](/articles/verifying-spf/) - Confirm your SPF record is published correctly.
- [Verifying DKIM with dig and Online Tools](/articles/verify-dkim/) - Confirm your DKIM record is published correctly.
- [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/) - Confirm your DMARC record is published correctly.

## Email hosting with third-party providers {#hosting}

- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - Configure MX records for email hosting providers.
- [Managing MX Records When Changing Email Providers](/articles/managing-mx-records-when-changing-email-providers/) - Update MX records when migrating between providers.
- [Google Workspace Service](/articles/google-workspace-service/) - Set up Google Workspace email with the one-click service or manual DNS.
- [Microsoft 365 Service](/articles/office-365-service/) - Set up Microsoft 365 email with the one-click service or manual DNS.
- [Email Hosting Support](/articles/email-hosting/) - Options for third-party email hosting with DNSimple.

## Troubleshooting {#troubleshooting}

- [Troubleshooting Email Forwarding with Gmail](/articles/troubleshooting-email-forwarding-gmail/) - Diagnose forwarding problems with Gmail.
- [Troubleshooting Email Forwarding Delivery Issues](/articles/troubleshooting-email-forwarding-delivery-issues/) - Resolve email delivery problems with forwarding.
- [Troubleshooting Email Forwarding with Other Providers](/articles/troubleshooting-email-forwarding-with-other-providers/) - Fix forwarding issues with providers other than Gmail.
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Diagnose SPF, DKIM, and DMARC failures.

## Advanced topics {#advanced}

### Email deliverability {#deliverability}

- [Understanding Email Deliverability](/articles/understanding-email-deliverability/) - What affects whether your emails reach recipients' inboxes.
- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Configure DNS-based authentication and manage sender reputation.
- [Monitoring Email Deliverability](/articles/monitoring-email-deliverability/) - Track authentication results, sender reputation, and inbox placement.

### Advanced authentication {#authentication-advanced}

- [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements and how they affect authentication.
- [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) - Move safely from `p=none` to `p=reject`.
- [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/) - Handle DKIM for multiple email services.
- [Email Authentication Best Practices](/articles/email-authentication-best-practices/) - Best practices for SPF, DKIM, and DMARC configuration.

### Email security {#security}

- [Protecting Your Domain from Email Spoofing](/articles/protecting-your-domain-from-email-spoofing/) - How SPF, DKIM, and DMARC prevent domain spoofing.

### Email bounces {#bounces}

- [Understanding Email Bounces](/articles/understanding-email-bounces/) - Types of bounces and what causes them.
- [Handling Email Bounces with Email Forwarding](/articles/handling-email-bounces-with-email-forwarding/) - How bounces work with forwarding and how to handle them.

### MX records {#mx-records}

- [What Is an MX Record?](/articles/mx-record/) - How MX records work and why they are essential for email delivery.
- [What Are Null MX Records?](/articles/what-are-null-mx-records/) - When and why to use null MX records.
- [Setting Up Null MX Records](/articles/setting-up-null-mx-records/) - Configure null MX for domains that do not accept email.
- [Querying MX Records](/articles/query-mx-records/) - Query MX records with dig.
- [MX Record Reference](/articles/mx-record-reference/) - Formal structure and technical details.

### Email DNS records {#dns-records}

- [Managing Email DNS Records](/articles/managing-email-dns-records/) - Manage all email-related DNS records in DNSimple.
- [Email DNS Records Quick Reference](/articles/email-dns-records-quick-reference/) - Quick reference for email-related DNS record types.

## Reference {#reference}

- [Email Forwarding Management in DNSimple](/articles/email-forwarding-management/) - The email forwarding management interface and available settings.
- [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/) - SPF record format, mechanisms, and validation rules.
- [DKIM Record Reference](/articles/dkim-record-reference/) - DKIM record structure and technical details.
- [DMARC Record Reference](/articles/dmarc-record-reference/) - DMARC record structure, tags, and technical details.

## Have more questions?

If you have additional questions or need assistance with email services, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
