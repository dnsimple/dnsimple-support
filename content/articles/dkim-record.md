---
title: What Is a DKIM Record?
excerpt: What a DKIM record is, and how DKIM records work.
meta: Learn about DKIM records, and their purpose in email authentication, by using a specially formatted DNS text record storing a public key.
categories:
- DNS
- Emails
---

# DKIM Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a DKIM record?

**DKIM**, which stands for **DomainKeys Identified Mail**, is an email authentication method designed to enhance the trustworthiness and security of email communications. It provides a way for email recipients to verify that an email message was indeed sent and authorized by the owner of the domain it claims to be from, and that it hasn't been tampered with in transit.

In an era of rampant email spoofing, phishing, and spam, DKIM plays a vital role in helping mail servers differentiate legitimate email from fraudulent messages, significantly reducing the amount of unwanted or malicious email that reaches inboxes.

## How DKIM works: digital signatures for email
DKIM utilizes a cryptographic technique involving a pair of keys: a private key and a public key.

1. **Signing the email (private key):** When an organization sends an email on your behalf (e.g., an email service provider), they use a **private key** to generate a unique digital signature for that email. This signature is embedded within the email's hidden headers.

1. **Publishing the public key (DNS TXT record):** Your organization publishes the corresponding **public key** in your domain's DNS as a [TXT record](/articles/txt-record/). This public key is specifically placed at a unique subdomain, often structured using a **selector** (e.g., `s1._domainkey.yourdomain.com` or `google._domainkey.yourdomain.com`). The selector allows a single domain to have multiple DKIM keys. This is useful for different sending services or key rotation.

1. **Verifying the email (public key):** When a recipient's mail server receives an email claiming to be from your domain, it performs a DNS lookup for the DKIM public key using the selector found in the email's header. It then uses this retrieved public key to verify the email's digital signature.

If the signature matches, it confirms:
- The email genuinely originated from a server authorized by your domain.
- The email's content (including headers and body) has not been altered since it was signed.

## Key benefits of DKIM

**Combats spoofing and phishing:** Makes it significantly harder for malicious actors to impersonate your domain.

**Improves deliverability:** Email servers are more likely to trust and deliver messages that pass DKIM authentication, leading to fewer emails being marked as spam or rejected.

**Enhances reputation:** Helps build and maintain a positive sending reputation for your domain.

DKIM is often used in conjunction with [SPF](/articles/spf-record/) (Sender Policy Framework)(and [DMARC](/articles/dmarc-record/) (Domain-based Message Authentication, Reporting, and Conformance) to form a comprehensive email authentication strategy.

## Setting up and verifying DKIM
For step-by-step instructions on how to add a DKIM record to your DNSimple zone, including details on formatting and specific fields, please refer to our dedicated How-To Guide: Setting Up DKIM (LINK TO NEW ARTICLE).

To verify that your DKIM record is correctly published and functioning, consult our How-To Guide: Verifying Your DKIM with dig and Online Tools (LINK TO NEW ARTICLE), which covers using command-line tools like dig and online verification services.

## Technical details
Visit [DKIM.org](http://DKIM.org) for a closer look into the technical specifications and intricacies of DomainKeys Identified Mail. They provide extensive resources, including links to the relevant RFCs.

## Have more questions?
If you have additional questions or need any assistance with your DKIM records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
