---
title: What Are Domain Contacts?
excerpt: Learn about domain contacts, the different contact types, and their roles in domain management.
meta: Discover what domain contacts are, the different types of contacts (registrant, administrative, technical), and how contact information is used in domain management.
categories:
- Domains and Transfers
---

# What Are Domain Contacts?

Domain contacts are the people or organizations associated with a domain name registration. When you register a domain, you must provide contact information that identifies who owns the domain and who is responsible for its management and technical aspects.

## Why are domain contacts required?

Domain contacts serve several important purposes. They identify who legally owns or is responsible for a domain name. Contact information provides a way to reach domain owners for legal, technical, or administrative matters. Contacts are used to verify domain ownership during [transfers](/articles/what-is-domain-transfer/), [updating contact information](/articles/changing-whois-contact/), and other administrative processes. Registrars and registries use contact information to send important notifications about domain status, expiration, and other matters.

## Types of domain contacts

Domain registrations typically include three types of contacts. **The registrant contact** is the legal owner of the domain name. This contact has legal ownership rights to the domain, receives important notifications about the domain, must approve domain transfers and other significant changes, and is responsible for ensuring contact information remains accurate. The registrant contact information is particularly important because changes to registrant information can trigger additional security measures, such as [transfer locks](/articles/what-is-domain-lock/).

**The administrative contact** is responsible for administrative decisions about the domain. This contact handles administrative matters related to the domain, may receive notifications about domain status and expiration, can typically make administrative changes to the domain, and often has similar permissions to the registrant contact. In many cases, the administrative contact may be the same person or organization as the registrant contact.

**The technical contact** is responsible for technical aspects of the domain. This contact handles technical issues related to the domain, may receive technical notifications, is typically the person to contact for DNS or other technical problems, and may have limited administrative permissions depending on the registrar. The technical contact is often different from the registrant and administrative contacts, especially for organizations with separate technical and administrative staff.

> [!INFO]
> At DNSimple, domain contacts are managed using a simplified model. A single contact record represents all contact roles (registrant, administrative, and technical).
> This means that when you update the domain registrant contact in your DNSimple account, the change is applied to all associated contact roles for that domain.


## Contact information in WHOIS

Domain contact information is stored in the [WHOIS](/articles/what-is-whois/) database, which provides public access to domain registration information. WHOIS records typically include the name of the contact person or organization, email address, mailing address, phone number, and organization name if applicable. This information may be publicly accessible through WHOIS lookups, depending on the TLD and registry policies, though privacy protection services can further limit what is displayed.

## Contact information and privacy

Because contact information is publicly available through WHOIS, privacy concerns have led to the development of privacy protection services. Many registrars offer [WHOIS privacy](/articles/what-is-whois-privacy/) services that replace your personal contact information with proxy contact details in the public WHOIS database. The General Data Protection Regulation (GDPR) has also led to changes in how WHOIS data is displayed, with some information being redacted or hidden by default for certain TLDs.

## Contact information and domain lifecycle

Domain contact information helps registries and registrars maintain a clear chain of ownership throughout a domain's lifecycle. Because the registrant contact represents the legal owner of a domain, changes to this information are treated with extra care.

To reduce the risk of unauthorized transfers, registries may apply temporary safeguards when registrant details are updated. For example, under ICANN policy, a registrant change can trigger a temporary transfer restriction intended to protect domain ownership. You can learn more about this policy in [ICANN 60-day transfer lock after registrant change](/articles/icann-60-day-lock-registrant-change/).

## Have more questions?

If you have any questions about domain contacts or need help with your domains, just [contact our support team](https://dnsimple.com/feedback) — we're here to help.
