---
title: Domain Registration Reference
excerpt: The formal requirements, restrictions, and key technical details of domain registration.
meta: Learn more about the requirements, restrictions, and technical details for domain registration.
categories:
- Domains
---

# Domain Registration Reference

This article serves as a reference for the formal requirements, restrictions, and key technical details of domain registration.

## Domain registration overview

Domain registration is the process of purchasing and reserving a domain name for a specified period, typically one year or more. When you register a domain with DNSimple, DNSimple acts as your domain registrar and manages your domain registration with the appropriate registry.

## Registration requirements

### Domain availability

**Availability check:** Before registering a domain, you must check if the domain name is available. Domain names are registered on a first-come, first-served basis.

**TLD support:** DNSimple supports registration for many top-level domains (TLDs). For a complete list of supported TLDs, check the [list of TLDs supported by DNSimple for registration](https://dnsimple.com/tlds).

> [!TIP]
> Even if a TLD is not supported for registration or transfer, you can still [add the domain to your account](/articles/adding-domain/) to use DNSimple for the DNS hosting or other domain services such as [purchasing an SSL certificate](https://dnsimple.com/ssl-certificates).

### Registrant contact information

When registering a domain, you must provide accurate registrant contact information. The registrant is the legal owner of the domain and receives important communications about the domain, including expiration notifications and transfer authorization emails. For detailed information about domain contact types, including registrant, administrative, technical, and billing contacts, see [Domain Contact Types Reference](/articles/domain-contact-types-reference/).

### Extended attributes

**TLD-specific requirements:** Depending on the TLD, you may need to fill out extended attributes that are required for registration. These attributes vary by TLD and may include:

- Additional contact information
- Business registration numbers
- Industry classifications
- Other TLD-specific requirements

**Regulated TLDs:** Some TLDs, such as `.BANK` and `.INSURANCE`, have additional requirements and restrictions. For more information, see [Regulated Top-Level Domains](/articles/tlds-regulated/).

## Registration restrictions

### Character restrictions

**Valid characters:** Domain names can contain letters (a-z), numbers (0-9), and hyphens (-). Domain names cannot start or end with a hyphen. Some TLDs support Internationalized Domain Names (IDN), which allow Unicode characters, but IDN support varies by TLD and registry. Contact support to verify IDN support for specific TLDs.

**Length restrictions:** Domain names have minimum and maximum length requirements that vary by TLD. Most TLDs require domain names to be between 1 and 63 characters (excluding the TLD).

**Case sensitivity:** Domain names are not case-sensitive. `Example.com`, `EXAMPLE.COM`, and `example.com` all refer to the same domain.

### Prohibited domains

**Reserved names:** Some domain names may be reserved or prohibited by the registry. These restrictions vary by TLD.

**Trademark considerations:** While DNSimple does not enforce trademark restrictions during registration, you should ensure you have the right to use a domain name to avoid potential legal issues.

### Registration period

**Minimum period:** Domains are typically registered for a minimum of one year.

**Maximum period:** Most TLDs allow registration for up to 10 years in advance. Some TLDs may have different maximum registration periods.

**Renewal:** Domains must be renewed before expiration to maintain registration. We recommend [enabling auto-renewal](/articles/domain-auto-renewal/) to avoid accidental expiration.

## Registration process

The domain registration process at DNSimple involves:

1. Checking domain availability
2. Selecting or creating a registrant contact
3. Choosing optional services (WHOIS privacy, auto-renewal)
4. Providing payment information
5. Completing the registration

For step-by-step instructions, see [Registering a Domain](/articles/registering-domain/).

## Registration pricing

**TLD-based pricing:** Domain registration prices vary depending on the TLD. For the full list of pricing, visit the [DNSimple domain pricing](https://dnsimple.com/tlds) page.

**Payment:** The total registration price will be held on your card immediately. Your card will be charged once the registration completes. If the registration fails, funds will be released.

**Subscription:** If you have a subscription with DNSimple, the card on file will be charged. If you do not have a subscription, you will need to enter payment details.

## Optional services

### WHOIS privacy protection

**Description:** WHOIS privacy protection hides your contact information from public WHOIS databases, helping protect your privacy and reduce spam.

**Availability:** WHOIS privacy protection can be enabled during registration by checking the "Hide my contact information in WHOIS" box. It can also be enabled or disabled after registration.

**Limitations:** Some TLDs may not support WHOIS privacy protection, or may have restrictions on its use.

### Auto-renewal

**Description:** Auto-renewal automatically renews your domain before it expires, preventing service interruption.

**Recommendation:** We recommend enabling auto-renewal whenever possible to avoid your domain expiring.

**Configuration:** Auto-renewal can be enabled during registration or configured later in your domain settings.

## Domain validation requirements

**ICANN requirements:** For domains under ICANN regulations, registrants may be required to validate their contact information. This typically involves responding to an email sent to the registrant email address.

**Validation process:** If validation is required, you will receive an email with instructions on how to validate your contact information. Failure to validate may result in the domain being suspended.

For more information, see [ICANN Domain Validation](/articles/icann-domain-validation/).

## Premium domains

**Definition:** Premium domains are domains that are priced higher than standard registration fees. These domains may have special characteristics, such as short names or desirable keywords.

**Pricing:** Premium domain pricing is set by the registry and may change over time. Premium domains are clearly marked during the registration process.

For more information, see [Premium Domains](/articles/premium-domains/).

## Have more questions?

If you have additional questions or need any assistance with domain registration, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
