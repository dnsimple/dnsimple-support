---
title: What Is a CAA Record?
excerpt: A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain.
meta: Learn about CAA records and how they secure your domain by controlling which certificate authorities can issue SSL/TLS certificates for your domain.
categories:
- DNS
---

# CAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---
## What is a CAA record?
A Certification Authority Authorization (CAA) record (record type 257) is a type of DNS record that provides a layer of security for your domain's [SSL/TLS certificates](/categories/ssl-certificates/). Its primary purpose is to allow domain owners to explicitly declare which Certificate Authorities (CAs) are authorized to issue certificates for their domain or specific hostnames.

A CAA record acts like a whitelist for CAs. It's a powerful tool to prevent mis-issuance of certificates, which could otherwise be exploited for malicious activities like phishing or man-in-the-middle attacks.

## How CAA records control certificate issuance
The presence or absence of a CAA record fundamentally changes how CAs issue certificates for your domain:

- **No CAA record present**: If no CAA record is configured for a domain or hostname, **any CA is allowed to issue a certificate for that domain**. This is the default behavior.
- **CAA record(s) present**: If one or more CAA records are present for a domain or hostname, **only the CAs explicitly listed in those records are allowed to issue certificates for that specific hostname**. Any requests to an unauthorized CA should be denied by that CA.

CAA records also provide a mechanism to indicate **notification rules**. You can configure a CAA record to request CAs to report any policy violations (i.e., if someone attempts to request a certificate from an unauthorized CA) through a specified email address or callback URL.

### Scope and inheritance
CAA records can define policy for your entire domain or for specific hostnames within it. **CAA policies are also inherited by subdomains**. For example, a CAA record set on `example.com` will also apply to `www.example.com`, `blog.example.com`, and any other subdomain, unless overridden by a more specific CAA record on the subdomain.

## Why CAA records are important for your security
- **Prevents mis-issuance**: The primary benefit is preventing unauthorized or rogue CAs from issuing certificates for your domain without your consent, significantly reducing the risk of domain spoofing.
- **Enhances trust**: By explicitly controlling who can issue certificates, you add another layer of trust and integrity to your online presence.
- **Compliance**: Some industry standards or security best practices may recommend or require the use of CAA records.

A CAA record uses a specific format consisting of flags, a tag, and a value, which together define the authorized CA or the notification policy.

## Setting up and understanding CAA record details
For step-by-step instructions on how to add a CAA record to your DNSimple zone, please refer to our dedicated How-To Guide: [Managing CAA Records](/articles/manage-caa-record/).

For a detailed explanation of the CAA record format, accepted tags (like `issue`, `issuewild`, `iodef`,`contactemail`, `contactphone`), their specific values, and various examples, consult our Reference Guide: [CAA Record Format and Policy Tags](/articles/caa-record-format/).

## Technical details
The specification for the DNS CAA record is formally defined in RFC 8659: [CAA Resource Record for DNS](https://datatracker.ietf.org/doc/html/rfc8659).

## Have more questions?
If you have additional questions or need any assistance with your CAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
