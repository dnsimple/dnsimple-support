---
title: What Is the DNSimple Sandbox?
excerpt: An explanation of the DNSimple Sandbox environment for testing domains, DNS, integrations, and workflows without affecting production data.
meta: The DNSimple Sandbox mirrors production for evaluating DNSimple, testing domain workflows, and developing API integrations without affecting live data.
categories:
- DNSimple
- API
- Enterprise
---

# What Is the DNSimple Sandbox?

### Table of Contents {#toc}

* TOC
{:toc}

---

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/RfQjvi75e7M" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

DNSimple maintains an isolated test environment at [sandbox.dnsimple.com](https://sandbox.dnsimple.com/) that mirrors the full production platform — web interface, domain management, DNS hosting, and API. The Sandbox provides a safe space to explore DNSimple features, test workflows, and develop integrations without risking changes to live domains, DNS records, or certificates.

## Why use the Sandbox? {#why}

Working directly in a production environment can lead to unintended consequences — accidentally modifying live DNS records, triggering real domain registrations, or consuming API rate limits during development. The Sandbox eliminates these risks by providing a fully functional copy of DNSimple where you can experiment freely. Every action within the Sandbox is free of charge.

The Sandbox is valuable for:

- **Evaluating DNSimple:** Try out the full web interface, explore DNS management features, and test one-click services before committing to a plan.
- **Domain workflow testing:** Register, transfer, and renew domains through the web UI or API. Registrations run against registry OT&E (Operational Test and Evaluation) environments, not live registries.
- **DNS zone management:** Add zones and records to test record formats, automation workflows, and integrations. Records do not resolve on the public internet.
- **Subscription and billing testing:** Subscribe to any plan using Stripe test credit cards to verify billing workflows without real charges.
- **API integration development:** Build and test your integration code against the full [DNSimple API](https://developer.dnsimple.com) before pointing it at production.
- **CI/CD pipeline testing:** Validate DNS automation scripts in your continuous integration workflow without touching live infrastructure.
- **Team onboarding:** Give new team members a safe environment to learn DNSimple — whether through the web interface or the API.

## Sandbox vs. production {#vs-production}

The Sandbox mirrors the production environment, so workflows that succeed in the Sandbox will work in production with minimal changes. The key differences are:

- **Separate accounts:** Your Sandbox account is independent of your production account. [Create a Sandbox account](https://sandbox.dnsimple.com/signup) to get started. If you are using the API, generate a separate [API access token](/articles/api-access-token/).
- **Separate URLs:** The Sandbox web interface is at `https://sandbox.dnsimple.com`. The Sandbox API is at `https://api.sandbox.dnsimple.com`.
- **No real DNS resolution:** There is no public authoritative name server in the Sandbox. Zones and records you create will not resolve on the public internet.
- **Simulated domain registrations:** Domain registrations, transfers, and renewals run against registry OT&E environments, not live production registries. Domains registered in the Sandbox do not affect real-world domain status.
- **No certificate testing:** SSL/TLS certificate testing is not currently supported in the Sandbox because certificate validation requires actual DNS service.
- **Test credit cards for billing:** Use Stripe test card numbers to subscribe to plans. `4242 4242 4242 4242` makes payments succeed; `4000 0000 0000 0341` makes payments fail. See the [Stripe testing documentation](https://stripe.com/docs/testing#cards) for more options.
- **Data is not guaranteed:** Sandbox data and systems are generally treated like production, but DNSimple may occasionally need to take the environment down or clear stored data.

## Getting started {#getting-started}

### Through the web interface

<div class="section-steps" markdown="1">
##### Setting up a Sandbox account

1. Go to [sandbox.dnsimple.com/signup](https://sandbox.dnsimple.com/signup) and create an account. It does not need to match your production account.
1. Choose a [plan](https://sandbox.dnsimple.com/pricing) that matches the features you want to test.
1. Subscribe using a Stripe test credit card number (e.g. `4242 4242 4242 4242` with any future expiration date and any CVC).
1. Start adding domains, managing DNS zones, and exploring DNSimple features.
</div>

### Through the API

Follow the [Getting Started With the DNSimple Sandbox](/articles/sandbox-tutorial/) tutorial for a step-by-step guide to setting up your development environment and running your first API calls.

Before diving in, review [Sandbox Common Pitfalls](/articles/sandbox-pitfalls/) and [DNSimple API Best Practices](/articles/api-best-practices/) to avoid common mistakes.

For the complete API reference, visit the [DNSimple Developer Documentation](https://developer.dnsimple.com). For Sandbox-specific API details, see the [Sandbox documentation](https://developer.dnsimple.com/sandbox/).

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
