---
title: Domain Contact Types Reference
excerpt: The formal structure, roles, and key technical details of domain contact types.
meta: Learn more about the structure, roles, and technical details for domain contact types (registrant, administrative, technical, and billing).
categories:
- Domains and Transfers
---

# Domain Contact Types Reference

This article serves as a reference for the formal structure, roles, and key technical details of domain contact types.

## Domain contact overview

Domain contacts are individuals or organizations associated with a domain name registration. Contacts are required for domain registration and serve different roles in domain management. Contact information is stored in the WHOIS database and may be publicly accessible unless WHOIS privacy protection is enabled.

## Contact types

### Registrant

**Role:** The legal owner of a domain name. The registrant is the entity that has the right to use the domain name for the duration of the registration period.

**Responsibilities:**
- Legal ownership of the domain
- Receiving important communications about the domain, including expiration notifications and transfer authorization emails
- Validating contact information when required by ICANN
- Authorizing domain transfers

**Contact information requirements:**
- Name (individual or organization)
- Email address (must be accessible and valid)
- Phone number
- Address (street, city, state/province, postal code, country)

**Importance:** The registrant email address is critical, as it receives important notifications about the domain. If the email address is incorrect or inaccessible, you may miss expiration notifications or transfer authorization emails, which could result in domain expiration or failed transfers.

**Change restrictions:** Changing the registrant information may trigger a 60-day lock that prevents the domain from being transferred to another registrar. This lock cannot be opted out of at DNSimple.

Learn more:

- [Managing Your Contacts](/articles/contact-management/)
- [Changing Domain Contacts](/articles/changing-domain-contact/)
- [ICANN 60-Day Lock After Change of Registrant](/articles/icann-60-day-lock-registrant-change/)

### Administrative Contact

**Role:** A contact designated to handle administrative matters related to a domain name, such as policy questions, business issues, and administrative decisions.

**Responsibilities:**
- Handling administrative inquiries
- Managing business-related domain matters
- Responding to policy questions
- Making administrative decisions about the domain

**Contact information requirements:**
- Name (individual or organization)
- Email address
- Phone number
- Address (street, city, state/province, postal code, country)

**Usage:** Administrative contacts are less commonly used in modern domain management, as many registrars consolidate contact roles. At DNSimple, administrative contact information is typically the same as the registrant contact.

### Technical Contact

**Role:** A contact designated to handle technical matters related to a domain name, such as DNS configuration, technical issues, and technical support inquiries.

**Responsibilities:**
- Managing DNS configuration
- Handling technical issues
- Responding to technical support inquiries
- Managing name server changes

**Contact information requirements:**
- Name (individual or organization)
- Email address
- Phone number
- Address (street, city, state/province, postal code, country)

**Usage:** Technical contacts are less commonly used in modern domain management, as many registrars consolidate contact roles. At DNSimple, technical contact information is typically the same as the registrant contact.

### Billing Contact

**Role:** A contact designated to handle billing matters related to a domain name, such as renewal fees, payment issues, and billing inquiries.

**Responsibilities:**
- Managing domain renewal payments
- Handling billing inquiries
- Updating payment information
- Managing subscription and billing matters

**Contact information requirements:**
- Name (individual or organization)
- Email address
- Phone number
- Address (street, city, state/province, postal code, country)

**Usage:** Billing contacts are less commonly used in modern domain management, as many registrars consolidate contact roles. At DNSimple, billing contact information is typically the same as the registrant contact.

## Contact information structure

**Required fields:** All contact types require the following information:
- Name (individual or organization name)
- Email address
- Phone number
- Address (street, city, state/province, postal code, country)

**Optional fields:** Depending on the TLD and registrar, additional fields may be required or optional:
- Organization name (if different from contact name)
- Fax number
- Extended attributes (TLD-specific requirements)

**Email address requirements:**
- Must be valid and accessible
- Should not belong to the domain being managed (to avoid issues if the domain becomes unavailable)
- Must be able to receive emails for important notifications

**Address requirements:**
- Must be a valid physical address
- Must include all required components (street, city, state/province, postal code, country)
- Must be accurate and up to date

## Contact management

**Creating contacts:** Contacts can be created during domain registration or SSL certificate purchase, or through the Contacts page in your DNSimple account.

**Updating contacts:** Contact information can be updated at any time. If a contact is associated with multiple domains, updating the contact updates all associated domains.

**Deleting contacts:** Contacts cannot be deleted if they are associated with at least one domain or SSL certificate. You must remove all associations before deleting a contact.

**Contact accuracy:** It's important to ensure contact information is accurate and up to date, as this information is used for important communications and may be subject to ICANN validation requirements.

Learn more:

- [Managing Your Contacts](/articles/contact-management/)
- [Changing Domain Contacts](/articles/changing-domain-contact/)

## Contact roles in practice

**Consolidated contacts:** At DNSimple and many modern registrars, contact roles are often consolidated. The registrant contact information is typically used for all contact types (administrative, technical, and billing), simplifying domain management.

**TLD-specific requirements:** Some TLDs may have specific requirements for contact types. For example, some ccTLDs may require contacts to be residents of the country associated with the TLD.

**Regulated TLDs:** Some regulated TLDs may have additional requirements or restrictions related to contact types. For more information, see [Regulated Top-Level Domains](/articles/tlds-regulated/).

## WHOIS and privacy

**Public accessibility:** Contact information is typically stored in the WHOIS database and may be publicly accessible, depending on the TLD and registrar policies.

**WHOIS privacy protection:** WHOIS privacy protection can hide your contact information from public WHOIS databases, helping protect your privacy and reduce spam. WHOIS privacy protection can be enabled during domain registration or configured later.

**GDPR considerations:** In some regions, GDPR (General Data Protection Regulation) may affect how contact information is displayed in WHOIS databases. Contact information may be redacted or restricted in certain circumstances.

Learn more:

- [What Is WHOIS Privacy?](/articles/what-is-whois-privacy/)
- [Domain Privacy After GDPR](/articles/domain-privacy-after-gdpr/)

## Contact validation

**ICANN requirements:** For domains under ICANN regulations, registrants may be required to validate their contact information. This typically involves responding to an email sent to the registrant email address.

**Validation process:** If validation is required, you will receive an email with instructions on how to validate your contact information. Failure to validate may result in the domain being suspended.

**Contact changes:** Changing registrant contact information may trigger a new validation requirement.

Learn more:

- [Domain Validation Requirements](/articles/icann-domain-validation/)

## Have more questions?

If you have additional questions or need any assistance with domain contact types, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
