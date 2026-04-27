---
title: What is Domain Trustee?
excerpt: Domain trustee service helps you register or transfer TLDs when the registry requires local presence or other rules you cannot meet alone; you stay the beneficiary.
meta: "What domain trustee is in DNSimple: trustee partner vs beneficiary, optional vs required trustee by TLD, registration and transfer availability, extended attributes, billing, and using trustee with the API."
categories:
- Domains and Transfers
---

# What is Domain Trustee?

### Table of Contents {#toc}

* TOC
{:toc}

---

Some top-level domains (TLDs) require local presence, a designated registrant type, or other eligibility you may not be able to provide directly. **Domain trustee** service bridges that gap: DNSimple arranges trustee coverage so you can register or transfer eligible domains while you continue to manage the domain from your account.

## What is a Domain Trustee? {#what-is-a-domain-trustee}

A **domain trustee** is the party that meets the registry's eligibility role on paper—often a local partner or designated registrant—when rules say the domain cannot be held under your personal or company details alone. **You remain the beneficiary**: you keep operational control through DNSimple (DNS, renewal, transfers, and account billing). The trustee fulfills the registry's legal or administrative requirement so the registration or transfer can complete.

## How do optional and required trustee differ? {#optional-vs-required}

**Optional trustee** — The TLD supports trustee, but registration or transfer may still be possible without it if you supply every registry requirement yourself (for example, all [extended attributes](/articles/domain-registration-reference/#extended-attributes)). When you choose trustee, the flow may ask for fewer registry fields than when trustee is off.

**Required trustee** — The registry mandates trustee for that TLD. You cannot opt out; trustee is part of standard eligibility. How it appears in checkout (included in the price versus a separate fee) depends on the TLD. See [.COM.BR domains](/articles/domains-com-br/) for an example where trustee is required.

Trustee is not universal: many TLDs do not offer it. Whether a suffix supports optional trustee, requires trustee, or offers no trustee depends on the registry.

## When is domain trustee available? {#when-available}

Trustee service applies only during [domain registration](/articles/registering-domain/) and [domain transfers into DNSimple](/articles/domain-transfer/). You make the choice in that flow for eligible TLDs, alongside options such as [WHOIS privacy](/articles/what-is-whois-privacy/) or [auto-renewal](/articles/domain-auto-renewal/). You cannot turn trustee on later as a standalone domain setting like an integration or DNS template.

## How does domain trustee affect extended attributes? {#extended-attributes}

Many TLDs collect extended attributes—extra registry fields beyond standard contact data—during registration or transfer.

When trustee applies, you may still need to provide some attributes, or none, depending on the TLD and whether trustee is optional or required. If trustee is optional and you disable it, you normally must complete the full attribute set the registry requests.

After registration, updates follow trustee rules: when you [change domain contacts](/articles/changing-domain-contact/) or [push the domain to another DNSimple account](/articles/transferring-domain-between-accounts/), you may only see extended attributes that still apply for domains using trustee service.

## How is domain trustee billed? {#billing}

When trustee is optional and you add it, DNSimple lists trustee as its own invoice line item next to registration or transfer. When trustee is required or bundled for a TLD, pricing is shown in the purchase flow for that extension. Account-level discounts can apply to trustee service where DNSimple has configured them, similar to other registration products.

## Can you use domain trustee through the API? {#api}

Yes. If you register or transfer domains using the [DNSimple API](/articles/api-documentation/), the same optional-or-required trustee rules apply as in the dashboard. Use the [developer documentation](https://developer.dnsimple.com/) for the exact requests and responses for your integration.

## Have more questions?

If you have any questions about domain trustee service, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
