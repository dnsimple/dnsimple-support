---
title: .ONG Domain Names
excerpt: Eligibility, validation, and transfer rules for .ONG domains (Public Interest Registry).
meta: Register .ONG domains at DNSimple. Understand PIR eligibility, self-certification, audits, and auth code requirements.
categories:
- TLDs
---

# .ONG Domain Names

* TOC
{:toc}

---

**.ong** is intended for non-governmental organizations. This article summarizes registry requirements from [CentralNic Reseller TLD documentation](https://kb.centralnicreseller.com/domains/tlds/ong) and [PIR’s .NGO/.ONG policy](https://pir.org/our-impact/ngo-ong-policy/).

## Eligibility and registration {#eligibility}

Registrants must meet **PIR eligibility criteria** for NGOs/ONGs. **PIR may audit** registrations; if audited, you may need to provide documentation proving your organization’s status.

At checkout you must **confirm** that you understand and accept the registration policies and that your organization meets the eligibility requirements.

### Organizations in China

PIR states that organizations formed under the laws of the **People’s Republic of China** (including its territories) **do not meet** certain eligibility criteria. Such organizations should **not** register .ONG or .NGO; PIR may delete names that violate this rule.

### Bundled .NGO / .ONG

As of **June 1, 2022**, .ONG and .NGO are **sold separately** (no automatic bundle). Legacy bundle domains were split into two independent domains.

## After registration: validation {#validation}

The registry may return verification properties (same **x-ngo-** namespace in API responses, e.g. verification link and deadline). Complete any required steps before the deadline, or the registration may fail and the name can be released.

## Transfers and auth codes {#transfers}

Transfers use an auth code from the losing registrar. Codes must be **8–32** characters and include at least one **letter**, one **number**, and one **special** character from the registry’s allowed set.

New registrations are **transfer-locked at the registry for 60 days** after creation.

Registrant changes may trigger **validation** similar to new registrations.

## Internationalized domain names (IDN) {#idn}

.ONG supports selected scripts; use the correct **IDN language tag** per [CentralNic KB](https://kb.centralnicreseller.com/domains/tlds/ong) and [IANA IDN tables](https://www.iana.org/domains/idn-tables).

## Have more questions?

[Contact us](https://dnsimple.com/feedback).
