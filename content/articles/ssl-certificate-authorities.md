---
title: SSL Certificate Authorities Used by DNSimple
excerpt: The list of certificate authorities used by DNSimple to sign SSL certificates, with product details and trust information.
meta: DNSimple uses Sectigo and Let's Encrypt as certificate authorities. See which products each CA signs, validation methods, pricing, and trust store compatibility.
categories:
- SSL Certificates
---

# SSL Certificate Authorities Used by DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides [SSL certificates](/articles/ssl-certificates/) signed by two globally recognized [certificate authorities](/articles/what-is-certificate-authority/): Sectigo and Let's Encrypt.

## Sectigo {#sectigo}

[Sectigo](https://sectigo.com/) (formerly Comodo) is a commercial certificate authority. DNSimple uses Sectigo to issue the following products:

- **Sectigo PositiveSSL** - Single-name certificate, $20/year
- **Sectigo PositiveSSL Wildcard** - Wildcard certificate, $100/year

Sectigo certificates use [email-based domain validation](/articles/ssl-certificates-email-validation/). Starting March 15, 2026, Sectigo certificates are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity).

Sectigo root certificates are trusted by all major browsers, operating systems, and mobile devices. See the [Sectigo compatibility page](https://sectigo.com/knowledge-base/detail/Sectigo-Root-and-Intermediate-Certificates/kA01N000000rfBO) for root and intermediate certificate details.

## Let's Encrypt {#letsencrypt}

[Let's Encrypt](https://letsencrypt.org/) is a free, automated, open certificate authority operated by the [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/). DNSimple uses Let's Encrypt to issue the following products:

- **Let's Encrypt SAN** - Multi-name certificate covering up to 100 hostnames, free
- **Let's Encrypt Wildcard** - Wildcard certificate, free

Let's Encrypt certificates are validated automatically using DNS challenges and are valid for 90 days. DNSimple supports [auto-renewal](/articles/letsencrypt/#auto-renewal) for Let's Encrypt certificates. Your domain must resolve with DNSimple.

Let's Encrypt root certificates are trusted by all major browsers and operating systems. See the [Let's Encrypt chain of trust](https://letsencrypt.org/certificates/) for root and intermediate certificate details.

## Identifying Your Certificate Authority {#identify}

You can determine which CA signed your certificate by inspecting the certificate details in your browser or by checking the certificate page in your DNSimple account.

**Learn more:** [How Do I Determine the Certificate Authority That Signed My SSL Certificate?](/articles/how-to-determine-certificate-authority/)

## Have more questions?

If you have any questions about certificate authorities, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
