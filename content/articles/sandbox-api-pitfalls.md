---
title: Sandbox Common Pitfalls
excerpt: Common pitfalls and things to keep in mind when working in the DNSimple Sandbox environment.
meta: Avoid common mistakes when using the DNSimple Sandbox. Learn about domain registration behavior, DNS resolution limits, certificate testing, data persistence, and shared system considerations.
categories:
- API
---

# Sandbox Common Pitfalls

### Table of Contents {#toc}

* TOC
{:toc}

---

The [DNSimple Sandbox](/articles/sandbox/) mirrors the production environment, but there are important differences that can cause confusion if you are not aware of them.

## Domain registrations do not reflect real-world status {#domain-registrations}

Domain registrations, transfers, and renewals in the Sandbox run against registry OT&E (Operational Test and Evaluation) environments, not live production registries. A domain that is registered in the real world may show as available in the Sandbox, and vice versa. Do not use Sandbox availability checks to determine whether a domain is actually registered or available for purchase in production.

## DNS records do not resolve publicly {#no-dns-resolution}

There is no public authoritative name server in the Sandbox. Zones and records you create exist in the system, but they will not resolve on the public internet. You cannot use the Sandbox to test DNS propagation, verify that records are serving correctly, or validate configurations that depend on live resolution (e.g. domain verification for third-party services).

## Certificate testing is not supported {#no-certificates}

SSL/TLS certificate operations — ordering, renewing, and validating certificates — are not available in the Sandbox. Certificate validation requires actual DNS service, which the Sandbox does not provide. Test your certificate workflows in production, or limit Sandbox testing to the API calls leading up to the certificate order.

## Sandbox data may be cleared at any time {#data-persistence}

Sandbox data and systems are generally treated like production, but DNSimple may occasionally need to take the environment down, wipe a portion of the data, or clear all stored data. Do not rely on Sandbox data persisting across sessions. If your testing workflow depends on specific domains, zones, or records being present, script their creation so you can recreate them quickly.

## Separate credentials are required {#separate-credentials}

Your production account and Sandbox account are completely independent. Your production [API access token](/articles/api-access-token/) will not work in the Sandbox, and your Sandbox token will not work in production. If API calls are returning authentication errors, verify you are using the correct token for the environment.

The Sandbox web interface is at `https://sandbox.dnsimple.com`, and the Sandbox API is at `https://api.sandbox.dnsimple.com`.

## The Sandbox is a shared system {#shared-system}

You share the Sandbox environment with other DNSimple customers. Another customer may have already registered the domain you want to test with. If a domain is unavailable, try a different domain name rather than assuming a system error.

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
