---
title: What Is DNSSEC?
excerpt: Explains what DNSSEC is and why it matters.
meta: Learn how DNSSEC works and what happens when you enable DNSSEC on your domains.
categories:
  - DNSSEC
---

# What Is DNSSEC?

DNSSEC (Domain Name System Security Extensions) adds a layer of security to DNS by allowing DNS records to be digitally signed. This helps ensure that the responses users receive from a DNS lookup are authentic and haven't been tampered with along the way.

Without DNSSEC, attackers can exploit vulnerabilities in DNS to redirect users to malicious sites, even if everything looks normal. With DNSSEC, DNS resolvers can perform authentication to confirm the integrity of DNS records using cryptographic signatures.

Want to learn about DNSSEC from a taco? Check out our [DNSSEC comic](https://howdnssec.works) for a fun explanation.

## Why DNSSEC matters

Although DNS is a fundamental part of the Internet's infrastructure, it lacks built-in security to verify that the information it returns is authentic or unchanged. This makes it possible for attackers to manipulate DNS responses and redirect users without them ever knowing.

DNSSEC addresses this by allowing resolvers to validate the origin of DNS data. It ensures that what you receive genuinely comes from the correct source and hasn't been altered in transit.

## How does DNSSEC work?

When DNSSEC is enabled for a domain, it adds an extra layer of information to DNS responses, allowing resolvers to verify that each answer is authentic.

### What happens behind the scenes:
1. The domain's DNS records are digitally signed. The signature is stored in an RRSIG record — this is like a private key that lets resolvers check the record's authenticity.
1. The domain also publishes a DNSKEY record — this contains the public key that resolvers use to verify signatures (like a public lock that matches the private key used to sign the record).
1. The parent zone (e.g., .com) publishes a DS record — this is a fingerprint of the DNSKEY, which connects the domain's key to the parent zone and helps build a chain of trust.
1. When a resolver queries the domain, it checks the DNSKEY and DS records to verify that the signature is valid and trusted.
1. If everything checks out, the resolver returns the DNS result to the user. If not, the result is rejected.

## Have more questions?
If you have any questions about DNSSEC and how it works to keep your DNS secure, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

