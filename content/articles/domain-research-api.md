---
title: Domain Research API
excerpt: Research domain availability and registration status via the Domain Research API (private beta).
meta: Learn about the DNSimple Domain Research API for researching domain availability and registration status on Enterprise plans.
categories:
- Enterprise
---

# Domain Research API

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> The Domain Research API is currently in **private beta**. If you are interested in using or planning to use this feature, please reach out to your account manager.

The Domain Research API lets you research a domain name for availability and registration status before you attempt to register or transfer it. It is available to Enterprise customers. Full details are in the [Domain Research API documentation](https://developer.dnsimple.com/v2/domains/research/) on the DNSimple Developer site.

## What is the Domain Research API?

The Domain Research API returns information about whether a domain is available for registration, already registered, or has other restrictions that prevent registration. Each request returns an availability status and, when the status cannot be determined, optional error messages that explain why.

## Why use it?

Using the Domain Research API helps you:

- **Confirm availability** before starting a registration or transfer flow
- **Improve user experience** in apps or portals by showing availability without leaving your workflow
- **Reduce failed attempts** by checking status first and handling restricted or unavailable domains appropriately

## How it works

You send a request to the Domain Research API with the domain name you want to research. The API responds with an availability value (for example, available, unavailable, or unknown) and, when relevant, a list of errors describing why availability could not be determined.

For request format, parameters, response attributes, and errors, see the [Domain Research API documentation](https://developer.dnsimple.com/v2/domains/research/) on the DNSimple Developer site.

## Have more questions?

If you have additional questions or need any assistance with the Domain Research API, reach out to your account manager, and we'll be happy to help.
