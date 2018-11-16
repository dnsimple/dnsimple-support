---
title: Standard vs Let's Encrypt SSL Certificates
excerpt: This article summarizes the most important DNSimple offering differences between Let's Encrypt and Standard SSL certificates.
categories:
- SSL Certificates
---

# Standard vs Let's Encrypt SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

<info>
In this article we'll use the term _standard_ as described in our [TLS/SSL certificate page](/articles/ssl-certificates#standard-certificate).
</info>

## Comparison Let's Encrypt vs Standard SSL certificates

The table below summarizes the most important DNSimple offering differences between Let's Encrypt and Standard SSL certificates. These differences may help you to decide which certificate you need.

<info>
The table only reflects the status of the current DNSimple offering. Some features may be available at the Certificate Authority, but currently not supported by DNSimple.
</info>

|               | Let's Encrypt | Standard      |
|---------------+---------------+---------------|
Certificate Expiration | 90 days | Multi-year
Single names | Supported | Supported
Custom Single names | Supported (on certain plans) | Supported
Wildcard names | Supported (on certain plans) | Supported
Same-domain multi-names (SAN) | Supported (on certain plans) | Not Supported
Multi-domains (SAN) | Not Supported | Not Supported
[Validation type](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level) | DV via DNS only | DV via email only
Cost | Free | $20-$100
Custom CSR | Not Supported | Supported

## What is the right certificate for me? {#whichone}

The following list of questions may help you to determine what is the best certificate for you. The answer is based on possible limitations of a specific certificate to fulfill the requirement. This also means that if you combine two or more questions (requirement), the results may conflict each other.

| Requirement | Answer |
|-------------+--------|
You want to secure a domain name. | **Let's Encrypt** or **Standard**
You want to provide a custom CSR | **Standard**
You want to use a custom private key. | **Standard**
You want to use a wildcard name. | **Standard**
You want a longer multi-year expiration. | **Standard**
You want to fully automate SSL certificate orders without manual intervention. | **Let's Encrypt**
Your domain is resolving with DNSimple. | **Let's Encrypt** or **Standard**
Your domain is NOT resolving with DNSimple. | **Standard**
Your domain is NOT registered but resolving with DNSimple. | **Let's Encrypt** or **Standard**
Your domain is NOT registered ant NOT resolving with DNSimple. | **Standard**
