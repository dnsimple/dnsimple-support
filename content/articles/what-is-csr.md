---
title: What is a Certificate Signing Request (CSR)?
excerpt: A Certificate Signing Request (CSR) is a formatted block of text containing certificate information and a public key, submitted to a certificate authority to request an SSL certificate.
meta: Learn what a Certificate Signing Request is, what information it contains, and how it's used in the SSL certificate issuance process.
categories:
- SSL Certificates
---

# What is a Certificate Signing Request (CSR)?

### Table of Contents {#toc}

* TOC
{:toc}

---

The **Certificate Signing Request** (also **CSR** or **certification request**) is a formatted block of text that is sent to a [Certificate Authority](/articles/what-is-certificate-authority/) to request an SSL certificate. The CSR contains the information that will be included in your certificate and the public key that will be embedded in it.

## What information does a CSR contain? {#contents}

The CSR includes several pieces of information that will appear in your SSL certificate:

- **Common Name (CN)**: The primary hostname the certificate will protect (e.g., `example.com` or `*.example.com` for wildcards)
- **Subject Alternative Names (SAN)**: Additional hostnames to be protected by the certificate (if supported)
- **Organization information**: Company name, location, and other identifying details (for organization-validated certificates)
- **Public key**: The public portion of the key pair that will be used for encryption

The CSR also contains metadata about the key pair, such as the key algorithm (RSA or ECC) and key size.

> [!NOTE]
> DNSimple currently supports domain-validated (DV) certificates only and does not support organization-validated (OV) or extended validation (EV) certificates.

## How CSRs work in the certificate process {#how-it-works}

When you generate a CSR, you create a public/private key pair. The private key remains on your server and is never shared. The public key is included in the CSR and sent to the certificate authority.

The CA uses the information in the CSR to create your SSL certificate. The certificate binds your domain information to the public key, creating a trusted association that browsers can verify.

## Automatic vs custom CSRs {#automatic-vs-custom}

Many certificate providers, including DNSimple, can automatically generate CSRs for you. This simplifies the process and works for most use cases. When DNSimple generates a CSR automatically, it creates a unique public/private key pair and includes the appropriate certificate information.

For advanced requirements, you may need to generate a custom CSR. This allows you to:

- Use your own private key (for key management policies or existing infrastructure)
- Specify exact certificate details
- Maintain control over the key generation process

> [!NOTE]
> DNSimple supports custom CSRs for Sectigo certificates only. Let's Encrypt certificates always use automatically generated CSRs.

## Taking action {#taking-action}

- [Ordering a Sectigo SSL Certificate](/articles/ordering-standard-certificate/) - Learn how to provide a custom CSR when ordering
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Understand automatic CSR generation for Let's Encrypt
- [I got an ECC-signed certificate but want RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/) - Learn how to request a different certificate type

## Related reading {#related}

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand how CAs process CSRs and issue certificates
- [What is the SSL Certificate Common Name?](/articles/what-is-common-name/) - Learn about the common name field in CSRs
- [What is the Subject Alternative Name (SAN)?](/articles/what-is-ssl-san/) - Understand how SAN is specified in CSRs
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare CSR support between certificate types

## Have more questions? {#more-questions}

If you have additional questions or need any assistance with CSRs and certificate requests, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
