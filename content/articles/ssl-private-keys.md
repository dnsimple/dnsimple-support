---
title: Understanding SSL Private Keys
excerpt: Every SSL certificate has a corresponding private key that must be kept secret. This article explains what a private key is, why it matters, and how DNSimple handles key generation.
meta: Learn what an SSL private key is, how it relates to your certificate and CSR, the difference between RSA and ECDSA keys, and what to do if a key is compromised.
categories:
- SSL Certificates
---

# Understanding SSL Private Keys

### Table of Contents {#toc}

* TOC
{:toc}

---

Every SSL certificate has a corresponding **private key**. Together, the certificate (which contains the public key) and the private key form a cryptographic pair that enables secure communication between a client (such as a web browser) and your server. Understanding what the private key does — and why it must be protected — is essential to managing your SSL certificates.

## What is a private key? {#what-is}

SSL/TLS uses **asymmetric cryptography**, which relies on a pair of mathematically related keys:

- The **public key** is embedded in the SSL certificate and shared openly with anyone who connects to your server.
- The **private key** stays on your server and is never shared.

When a browser connects to your site over HTTPS, the two keys work together to establish an encrypted session. The public key encrypts information that only the private key can decrypt, and the private key is used to prove that your server is the legitimate owner of the certificate.

Without the private key, the certificate cannot be used. If the private key is lost or compromised, the certificate must be replaced.

## How DNSimple handles private keys {#dnsimple}

When you order a certificate through DNSimple, you have two options:

1. **Let DNSimple generate the key pair (default).** DNSimple automatically generates a [Certificate Signing Request (CSR)](/articles/what-is-csr/) and the associated private key. The private key is available to download from the certificate page in your DNSimple account after the certificate is issued. This is the simplest option and works for the majority of use cases, including hosting platforms such as Heroku and Amazon.

2. **Provide your own CSR.** If you have advanced requirements — for example, if your organization's security policy requires that private keys are generated and stored on-premises — you can generate a CSR yourself and paste it into the certificate order form. In this case, DNSimple never sees or stores your private key, and you are responsible for keeping it safe.

> [!NOTE]
> DNSimple publishes a [private key policy](https://dnsimple.com/private-key-policy) that explains how we generate and store private keys when we create the CSR on your behalf.

## RSA vs. ECDSA keys {#algorithms}

When ordering a certificate, you choose a **signature algorithm** that determines what type of key pair is generated:

- **ECDSA (Elliptic Curve Digital Signature Algorithm)** — Uses elliptic curve cryptography. ECDSA keys are smaller and faster than RSA keys at equivalent security levels. DNSimple uses the `prime256v1` curve by default. ECDSA is the default for both Sectigo and Let's Encrypt certificates.

- **RSA** — The traditional algorithm, widely supported across all platforms. RSA keys are larger (typically 2048 or 4096 bits) but are compatible with older systems that may not support ECDSA.

For most users, the default ECDSA option is the right choice. If your server or platform specifically requires RSA, you can select it during the certificate order. If you ordered an ECDSA certificate but need RSA, see [I got an ECC-signed certificate but want RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/) for instructions.

## Why the private key must stay secret {#security}

The private key is the only thing that proves your server is the rightful owner of the certificate. If someone else obtains your private key, they can:

- Impersonate your server and intercept traffic intended for your site
- Decrypt previously captured traffic (in some configurations)
- Undermine the trust that the certificate is meant to provide

This is why CAs, browsers, and security standards all require that private keys remain confidential and are stored securely.

## What "compromised" means {#compromised}

A private key is considered **compromised** when it has been, or may have been, accessed by an unauthorized party. Common situations include:

- The server hosting the key was breached
- The key was accidentally committed to a public repository
- The key was sent over an unencrypted channel (e.g., email)
- A team member who had access to the key has left the organization under unfavorable circumstances

If you suspect your private key has been compromised, you should replace the certificate immediately. For Sectigo certificates, you can [reissue the certificate](/articles/reissue-ssl-certificate/), which generates a new key pair without purchasing a new certificate. For Let's Encrypt certificates, reissuing is not supported — [order a new certificate](/articles/get-lets-encrypt-certificate/) instead.

## Relationship to the CSR {#csr}

The private key and the [CSR](/articles/what-is-csr/) are generated together as a pair. The CSR contains the public key (derived from the private key) along with information about the domain, and it is sent to the [Certificate Authority](/articles/what-is-certificate-authority/) to request the certificate.

Because the CSR contains only the public key, it is safe to share with the CA. The private key never leaves your control (or DNSimple's servers, if we generated it for you).

## Private keys during renewal and reissue {#renewal}

When you [renew](/articles/how-certificate-renewal-works/) a certificate, a completely new key pair and certificate are generated. The old private key does not carry over. After installing the renewed certificate, both the new certificate **and** the new private key must be deployed to your server.

When you [reissue](/articles/reissue-ssl-certificate/) a Sectigo certificate, a new key pair is also generated. The old private key is permanently removed from DNSimple once you confirm receipt of the reissued certificate.

## Have more questions?

If you have any questions about SSL private keys or need assistance with your certificates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
