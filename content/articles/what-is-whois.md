---
title: What Is WHOIS?
excerpt: Learn what WHOIS is, how it works, and why domain contact information is publicly accessible.
meta: Discover what WHOIS is and how it provides public access to domain registration information. Learn about WHOIS databases, contact information, and privacy options.
categories:
- Domains
---

# What Is WHOIS?

### Table of Contents {#toc}

* TOC
{:toc}

---

WHOIS (pronounced "who is") is a protocol and database system that provides public access to information about domain name registrations. When you register a domain name, certain information about the registration is stored in a WHOIS database and made publicly accessible to anyone who queries it.

## What is WHOIS used for?

WHOIS serves several important purposes in the domain name system:

- **Transparency and accountability:** WHOIS provides a way to identify who owns or is responsible for a domain name, which helps maintain accountability on the internet.
- **Contact information:** WHOIS contains contact details for domain registrants, which can be used for legitimate purposes such as resolving technical issues, reporting abuse, or handling legal matters.
- **Domain management:** WHOIS information helps verify domain ownership and facilitates domain transfers and other administrative processes.
- **Network troubleshooting:** Technical contact information in WHOIS can help network administrators resolve connectivity or configuration issues.

## What information is in WHOIS?

WHOIS records typically contain the following information about a domain registration:

- **Registrant information:** The name and contact details of the person or organization that registered the domain.
- **Administrative contact:** The person or organization responsible for administrative decisions about the domain.
- **Technical contact:** The person or organization responsible for technical aspects of the domain.
- **Registrar information:** The domain registrar that registered the domain.
- **Registration dates:** When the domain was first registered and when it expires.
- **Name servers:** The DNS name servers that are authoritative for the domain.
- **Domain status:** The current status of the domain (active, locked, pending transfer, etc.).

## How does WHOIS work?

WHOIS operates through a distributed database system:

1. **Registration:** When you register a domain, your registrar collects contact information and submits it to the registry for the top-level domain (TLD).
2. **Storage:** The registry stores this information in a WHOIS database.
3. **Querying:** Anyone can query the WHOIS database using WHOIS lookup tools or command-line utilities to retrieve domain registration information.
4. **Response:** The WHOIS system returns the publicly available information about the domain.

You can check the WHOIS information for any domain using DNSimple's [WHOIS lookup tool](https://dnsimple.com/whois).

## WHOIS and privacy

Because WHOIS information is publicly accessible, privacy concerns have led to the development of privacy protection services:

- **WHOIS Privacy Protection:** Many registrars, including DNSimple, offer WHOIS privacy services that replace your personal contact information with proxy contact details in the public WHOIS database. Learn more about [WHOIS Privacy Protection](/articles/what-is-whois-privacy/).
- **GDPR impact:** The General Data Protection Regulation (GDPR) has led to changes in how WHOIS data is displayed for many TLDs, with some information being redacted or hidden by default. Learn more about [domain privacy after GDPR](/articles/domain-privacy-after-gdpr/).

## WHOIS and domain management

WHOIS information plays an important role in domain management:

- **Domain transfers:** WHOIS contact information is used to verify domain ownership and send transfer authorization emails.
- **Contact updates:** When you update domain contact information, the changes are reflected in the WHOIS database. Learn how to [change WHOIS information](/articles/changing-whois-contact/).
- **Validation:** Some registries use WHOIS email addresses for domain validation, though this practice is being phased out in favor of more secure validation methods.

## Learn more about WHOIS

- [What is WHOIS Privacy Service?](/articles/what-is-whois-privacy/) - Learn about WHOIS privacy protection and how it keeps your contact information private.
- [Changing WHOIS information](/articles/changing-whois-contact/) - Step-by-step guide to updating WHOIS contact information for your domains.
- [Domain privacy after GDPR](/articles/domain-privacy-after-gdpr/) - Understand how GDPR affects domain privacy and WHOIS data display.

## Have more questions?

If you have any questions about WHOIS and how it works, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
