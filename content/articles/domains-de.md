---
title: .DE Domains
excerpt: Requirements and special procedures for .DE domains, including DENIC contact-data rules, verification, and transfers.
meta: Learn how .DE domains work at DNSimple, including DENIC contact accuracy requirements under NIS2, risk checks, verification timelines, and unique transfer rules.
categories:
- TLDs
---

# .DE Domain Names

### Table of Contents {#toc}

* TOC
{:toc}

---

.DE domains are governed by DENIC, the German registry. This article covers DENIC rules for accurate contact data (including verification under NIS2), what happens when data is flagged, and transfer behavior that differs from typical gTLDs.

## DENIC contact data, risk checks, and verification {#denic-contact-verification}

DENIC requires registrant and contact information for .DE to be accurate and complete. These expectations align with the EU NIS2 directive and related national implementation.

**From 14 April 2026**, DENIC applies risk assessment to **new** contact creations and **new** domain registrations. If information is considered suspicious or high-risk, DNSimple will ask the account owner to verify or correct it. If required verification is not completed, DENIC may **quarantine** the domain and may ultimately **delete** the registration.

These requirements also apply to **existing** contact records DENIC has already seen. If DENIC flags a contact as suspicious, you must review and update that contact so the data is accurate **by 14 April 2026**. After that date, contacts that are still flagged **cannot be used to register new .DE domains** until the issue is resolved.

If verification is still outstanding **three weeks after 14 April 2026**, or **three weeks after a new contact is created** (depending on which situation applies), DENIC may also email the domain holder directly.

Keep contact details current in your DNSimple account. To update a person or organization tied to a domain, follow [Changing Domain Contacts](/articles/changing-domain-contact/). For background on how contacts work in DNSimple, see [What are domain contacts?](/articles/what-are-domain-contacts/).

> [!NOTE]
> If we email you about specific .DE contacts or domains that need review, use that message together with this article to decide what to update in your account.

> [!WARNING]
> Ignoring verification requests can lead to loss of eligibility for new .DE registrations on affected contacts, domain quarantine, or deletion under DENIC policy.

## Transferring a .DE domain {#transferring}

Unlike standard gTLD domains, .DE has some unique transfer rules.

Following a successful transfer, the expiration of the domain is extended 1 year from the date of the transfer (not from the previous expiration). For example, if on 10 Mar, 2020 you transfer a domain that expires on 15 Sept, 2020, when the transfer completes, the new expiration date will be 10 Mar, 2021.

## Have more questions?

If you have any questions about registering, transferring, or renewing your .DE domain, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
