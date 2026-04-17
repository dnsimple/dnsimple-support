---
title: What Is DNSSEC (Domain Name System Security Extensions)?
excerpt: DNSSEC adds cryptographic signatures to DNS, letting resolvers verify that responses are authentic and have not been tampered with.
meta: What is DNSSEC? DNSSEC (Domain Name System Security Extensions) adds cryptographic signatures to DNS responses. Learn the meaning of DNSSEC, how it works, and whether you should enable it.
categories:
  - DNSSEC
  - Enterprise
---

# What Is DNSSEC?

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/7JWpgka8zBQ" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## The meaning of DNSSEC

DNSSEC stands for Domain Name System Security Extensions. It's part of DNS security best practices, because it adds a layer of security to DNS by allowing DNS records to be digitally signed. This helps ensure that the responses users receive from a DNS lookup are authentic and haven't been tampered with along the way.

Without DNSSEC, attackers can exploit vulnerabilities in DNS to redirect users to malicious sites, even if everything looks normal. With DNSSEC, DNS resolvers can perform authentication to confirm the integrity of DNS records using cryptographic signatures.

Want to learn about DNSSEC from a taco? Check out our [DNSSEC comic](https://howdnssec.works) for a fun explanation, and get answers to your burning questions on what DNS security is and how DNSSEC helps ensure DNS protection. 

## Why DNSSEC is a good DNS security tool

Although DNS is a fundamental part of the Internet's infrastructure, it lacks built-in security to verify that the information it returns is authentic or unchanged. This makes it possible for attackers to manipulate DNS responses and redirect users without them ever knowing.

DNSSEC addresses this by allowing resolvers to validate the origin of DNS data. It ensures that what you receive genuinely comes from the correct source and hasn't been altered in transit. If you want to use secure DNS, we recommend [enabling DNSSEC](/articles/enabling-dnssec/).

## How does DNSSEC work?

When DNSSEC is enabled for a domain, it adds an extra layer of information to DNS responses, allowing resolvers to verify that each answer is authentic. To learn more about the concepts mentioned here, see [The DNSSEC Chain of Trust](/articles/dnssec-chain-of-trust/).

### What happens behind the scenes:
1. The domain's DNS records are digitally signed. The signature is stored in an [RRSIG record](/articles/understanding-rrsets-rrsigs/#what-is-an-rrsig) — this is like a private key that lets resolvers check the record's authenticity. Learn more about [RRSETs and RRSIGs in DNSSEC](/articles/understanding-rrsets-rrsigs/).
1. The domain also publishes a [DNSKEY record](/articles/dnskey-records-explained/) — this contains the public key that resolvers use to verify signatures (like a public lock that matches the private key used to sign the record).
1. The parent zone (e.g., .com) publishes a [DS record](/articles/what-are-ds-records/) — this is a fingerprint of the DNSKEY, which connects the domain's key to the parent zone and helps build a chain of trust.
1. When a resolver queries the domain, it checks the DNSKEY and DS records to verify that the signature is valid and trusted.
1. If everything checks out, the resolver returns the DNS result to the user. If not, the result is rejected.

## What happens if DNSSEC is not enabled? {#what-happens-if-dnssec-is-not-enabled}

Without DNSSEC, DNS responses are not cryptographically signed. This means resolvers have no way to verify that the data they receive is authentic. Attackers can exploit this through cache poisoning or man-in-the-middle attacks, redirecting your visitors to malicious sites without any visible indication that something is wrong. Enabling DNSSEC eliminates this class of attack by letting resolvers reject tampered responses.

## Is DNSSEC outdated? {#is-dnssec-outdated}

DNSSEC is not outdated. The protocol is actively maintained by the IETF, with [RFC 9364](https://datatracker.ietf.org/doc/rfc9364/) (published in 2023) consolidating the current standard. Major registries and TLDs continue to expand DNSSEC support, and adoption is growing. While newer proposals like DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt DNS traffic, they serve a different purpose - they protect the transport channel, not the data itself. DNSSEC and encrypted DNS are complementary: DNSSEC verifies that DNS data is authentic, while DoH/DoT prevents eavesdropping on queries.

## Should you enable DNSSEC? {#should-you-enable-dnssec}

If your domain's TLD supports DNSSEC, enabling it is a recommended security best practice. DNSSEC protects your visitors from being redirected to malicious sites through DNS tampering. At DNSimple, enabling DNSSEC is straightforward - see [Enable DNSSEC](/articles/enabling-dnssec/) for step-by-step instructions. Before enabling, review [DNSSEC Compatibility With Other DNSimple Features](/articles/dnssec-compatibility/) to confirm your setup is compatible.

## Learn more about DNSSEC

For a comprehensive overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/). To explore DNSSEC terms and definitions, check out our [DNSSEC Glossary](/articles/dnssec-glossary/).

## Have more questions?
If you have any questions about DNSSEC and how it works to keep your DNS secure, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
