---
title: Domains Glossary
excerpt: Defines terms related to domain names and domain management.
meta: Explore our comprehensive domains glossary, featuring essential definitions and terms to enhance your understanding of domain names and domain management.
categories:
- Domains
---

# Domains Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

## Core Concepts

### Domain Name

A human-readable label used to identify a website or resource on the internet (e.g., `example.com`). Domain names are registered and managed through a hierarchical system with various levels (top-level domains, second-level domains, subdomains). Domain names translate to IP addresses through the Domain Name System (DNS).

Learn more:

- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
- [What Is a TLD?](/articles/what-is-tld/)

### Top-Level Domain (TLD)

The rightmost part of a domain name, appearing after the final dot. For example, in `dnsimple.com`, the TLD is `COM`. TLDs are generally grouped into three categories: generic top-level domains (gTLDs), country-code top-level domains (ccTLDs), and sponsored top-level domains (sTLDs).

Learn more:

- [What Is a TLD?](/articles/what-is-tld/)
- [List of TLDs supported by DNSimple](https://dnsimple.com/tlds)

### Generic Top-Level Domain (gTLD)

A category of top-level domains that includes general-purpose extensions such as `.COM`, `.NET`, `.ORG`, `.INFO`, and many others. gTLDs are the most common and well-known category of TLDs.

Learn more:

- [What Is a TLD?](/articles/what-is-tld/)

### Country-Code Top-Level Domain (ccTLD)

A category of top-level domains that includes all extensions used or reserved for a country, sovereign state, or dependent territory identified with a country code. Notable examples are `.US`, `.CA`, and `.UK`. Some ccTLDs have become so popular that they are sometimes confused with gTLDs, such as `.IO` or `.CO`.

Learn more:

- [What Is a TLD?](/articles/what-is-tld/)

### Second-Level Domain

The part of a domain name that appears directly to the left of the top-level domain. For example, in `dnsimple.com`, `dnsimple` is the second-level domain.

### Subdomain

A domain name that is part of a larger domain. For example, `www.example.com` is a subdomain of `example.com`. Subdomains can be used to organize different services or sections of a website.

Learn more:

- [Adding a Subdomain](/articles/adding-subdomain/)

### Domain Registrar

A company or organization authorized by ICANN (for gTLDs) or the appropriate registry (for ccTLDs) to register domain names on behalf of registrants. DNSimple is a domain registrar.

Learn more:

- [Domain Registration Reference](/articles/domain-registration-reference/)

### Domain Registry

The organization that manages and maintains the database of all domain names registered under a specific top-level domain. For example, Verisign manages the `.COM` registry.

### Domain Registration

The process of purchasing and reserving a domain name for a specified period, typically one year or more. When you register a domain, you obtain the right to use that domain name for the duration of the registration period.

Learn more:

- [Registering a Domain](/articles/registering-domain/)
- [Domain Registration Reference](/articles/domain-registration-reference/)

### Domain Transfer

The process of moving a domain name registration from one registrar to another. When you transfer a domain, the new registrar becomes responsible for managing the domain registration.

Learn more:

- [Transfer a Domain to DNSimple](/articles/domain-transfer/)
- [Domain Transfer Reference](/articles/domain-transfer-reference/)

### Domain Renewal

The process of extending a domain name registration for an additional period, typically one year. Domains must be renewed before expiration to maintain registration.

Learn more:

- [Renewing a Domain](/articles/renewing-domain/)

### Domain Expiration

The date when a domain name registration period ends. After expiration, the domain may enter a grace period, redemption period, or be deleted, depending on the TLD and registry policies.

Learn more:

- [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/)
- [Domain Expiration Reference](/articles/domain-expiration-reference/)

## Domain Status & Periods

### Grace Period

A period after a domain expires during which the domain is disabled but can still be renewed at no extra cost. For most gTLDs, registrars may offer a non-guaranteed 29-day grace period. There is no guaranteed grace period, and domains may be disposed of at any time according to the registration agreement.

Learn more:

- [Domain Expiration Reference](/articles/domain-expiration-reference/#grace-period)

### Redemption Period

A period after the grace period during which a domain can be restored by the previous registrant for a restore fee plus renewal fee. Only the previous registrant can recover the domain during this time, and it must be retrieved through the previous registrar.

Learn more:

- [Domain Expiration Reference](/articles/domain-expiration-reference/#redemption-period)
- [Restoring a Domain](/articles/restoring-domain/)

### Deletion Period

A 5-day time frame after the redemption period during which the registry holds the domain and it cannot be recovered. Once the registry deletes the domain, it becomes available for registration by anyone on a first-come, first-served basis.

Learn more:

- [Domain Expiration Reference](/articles/domain-expiration-reference/#deletion-period)

## Domain Contacts

### Registrant

The legal owner of a domain name. The registrant contact information is the official record of domain ownership and is used for important communications, including expiration notifications and transfer authorization emails.

Learn more:

- [Domain Contact Types Reference](/articles/domain-contact-types-reference/)
- [Managing Your Contacts](/articles/contact-management/)

### Administrative Contact

A contact designated to handle administrative matters related to a domain name, such as policy questions and business issues.

Learn more:

- [Domain Contact Types Reference](/articles/domain-contact-types-reference/)

### Technical Contact

A contact designated to handle technical matters related to a domain name, such as DNS configuration and technical issues.

Learn more:

- [Domain Contact Types Reference](/articles/domain-contact-types-reference/)

### Billing Contact

A contact designated to handle billing matters related to a domain name, such as renewal fees and payment issues.

Learn more:

- [Domain Contact Types Reference](/articles/domain-contact-types-reference/)

## Domain Transfers

### Authorization Code

Also called transfer code, auth code, or auth info. A code required to authorize the transfer of a domain name from one registrar to another. The authorization code is typically sent by the current registrar via email to the domain registrant.

Learn more:

- [Domain Transfer Code Reference](/articles/domain-transfer-code-reference/)
- [Transferring a domain away from DNSimple](/articles/transferring-domain-away/)

### Gaining Registrar

The registrar where you want to transfer a domain. Also called the new registrar.

Learn more:

- [Transfer a Domain to DNSimple](/articles/domain-transfer/)

### Losing Registrar

The current registrar for a domain that is being transferred. Also called the old registrar.

Learn more:

- [Transferring a domain away from DNSimple](/articles/transferring-domain-away/)

### ICANN 60-Day Lock

A restriction that prevents a domain from being transferred to another registrar for 60 days after certain events, such as registration, a previous transfer, or a change to the registrant's information. This lock cannot be opted out of at DNSimple.

Learn more:

- [Domain Transfer Reference](/articles/domain-transfer-reference/)
- [ICANN 60-Day Lock After Change of Registrant](/articles/icann-60-day-lock-registrant-change/)

## Domain Security & Privacy

### WHOIS

A protocol and database system that provides information about domain name registrations, including registrant contact information, registration dates, and name servers. WHOIS information is publicly accessible unless WHOIS privacy protection is enabled.

### WHOIS Privacy Protection

A service that hides your contact information from public WHOIS databases, helping protect your privacy and reduce spam. WHOIS privacy protection can be enabled during domain registration or configured later.

Learn more:

- [What Is WHOIS Privacy?](/articles/what-is-whois-privacy/)

### Domain Lock

A security feature that prevents unauthorized transfers of a domain. Domains are typically locked by default and must be unlocked before a transfer can be initiated.

### DNSimple SuperLock

An additional security feature provided by DNSimple that provides an extra layer of protection against unauthorized domain transfers, beyond the standard domain lock.

Learn more:

- [DNSimple SuperLock](/articles/superlock/)

## Domain Management

### Auto-Renewal

A feature that automatically renews a domain before it expires, preventing service interruption. Auto-renewal can be enabled during registration or configured later in domain settings.

Learn more:

- [Domain Auto-Renewal](/articles/domain-auto-renewal/)

### Premium Domain

A domain name that is priced higher than standard registration fees. Premium domains may have special characteristics, such as short names or desirable keywords, and pricing is set by the registry.

Learn more:

- [Premium Domains](/articles/premium-domains/)

### Domain Validation

A process required by ICANN to verify the accuracy of registrant contact information. After registering a domain or changing registrant information, you may receive an email requiring validation of your contact information.

Learn more:

- [Domain Validation Requirements](/articles/icann-domain-validation/)

## Have more questions?

If you have additional questions or need any assistance with domain-related terms, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
