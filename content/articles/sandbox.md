---
title: What Is the DNSimple Sandbox API?
excerpt: An explanation of the DNSimple Sandbox API environment for testing integrations without affecting production data.
meta: Learn what the DNSimple Sandbox API is, why you should use it for development, and how it helps you test integrations safely before deploying to production.
categories:
- API
- Enterprise
---

# What Is the DNSimple Sandbox API?

### Table of Contents {#toc}

* TOC
{:toc}

---

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/VIDEO_ID" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

DNSimple maintains an isolated test environment at [sandbox.dnsimple.com](https://sandbox.dnsimple.com/) that mirrors the production API. The Sandbox provides a safe space to develop, test, and validate your API integrations without risking changes to live DNS records, domains, or certificates.

## Why use the Sandbox?

Building integrations directly against a production API can lead to unintended consequences — accidentally modifying live DNS records, triggering domain registrations, or consuming API rate limits during development. The Sandbox eliminates these risks by providing a fully functional copy of the DNSimple API where you can experiment freely.

The Sandbox is valuable for:

- **API integration development:** Build and test your integration code before pointing it at production.
- **CI/CD pipeline testing:** Validate DNS automation scripts in your continuous integration workflow without touching live infrastructure.
- **Learning the API:** Explore endpoints, understand response formats, and experiment with different API calls.
- **Team onboarding:** Give new developers a safe environment to learn the DNSimple API without risk.

## Sandbox vs. production

The Sandbox mirrors the production API, so code that works in the Sandbox will work in production with minimal changes. The key differences are:

- **Separate accounts:** Your Sandbox account is independent of your production account. You need to [create a Sandbox account](https://sandbox.dnsimple.com/signup) and generate a separate [API access token](/articles/api-access-token/).
- **Separate base URL:** The Sandbox API is accessed at `https://api.sandbox.dnsimple.com`, while production uses `https://api.dnsimple.com`.
- **No real DNS resolution:** Domains and records created in the Sandbox do not resolve on the public internet.
- **No real registrations:** Domain registrations in the Sandbox are simulated and do not interact with registries.

## Getting started

Ready to start building? Follow our [Sandbox API Tutorial](/articles/sandbox-tutorial/) for a step-by-step guide to setting up your environment and running your first API calls.

Before diving in, review the [Sandbox API Common Pitfalls](/articles/sandbox-api-pitfalls/) to avoid mistakes when developing against the API.

For the complete API reference, visit the [DNSimple Developer Documentation](https://developer.dnsimple.com). For Sandbox-specific details, see the [Sandbox documentation](https://developer.dnsimple.com/sandbox/).

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
