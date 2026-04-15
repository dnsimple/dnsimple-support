---
title: What is a Root Certificate?
excerpt: A root certificate is a self-signed certificate from a trusted certificate authority that serves as the trust anchor for the entire certificate chain.
meta: Learn what a root certificate is, how it establishes trust in SSL certificates, and why it's the foundation of the certificate chain of trust.
categories:
- SSL Certificates
---

# What is a Root Certificate?

### Table of Contents {#toc}

* TOC
{:toc}

---

A **Root SSL certificate** (also called a **root CA certificate**) is a self-signed certificate issued by a trusted [certificate authority (CA)](/articles/what-is-certificate-authority/). Root certificates serve as the trust anchor for the entire SSL certificate ecosystem.

## The foundation of trust {#foundation}

In the SSL ecosystem, anyone can generate a signing key and use it to sign a new certificate. However, that certificate is not considered valid unless it has been directly or indirectly signed by a trusted CA.

A **trusted certificate authority** is an entity that is entitled to verify someone is who they say they are. For this trust model to work, all participants must agree on a set of trusted CAs. All operating systems and most web browsers ship with a set of trusted CAs embedded in their software.

## Root certificates in the chain of trust {#chain-of-trust}

The SSL ecosystem is based on a model of trust relationships, also called the **certificate chain of trust**. When a device validates a certificate, it compares the certificate issuer with the list of trusted CAs. If a match is not found, the client checks to see if the certificate of the issuing CA was issued by a trusted CA, and continues until the end of the [certificate chain](/articles/what-is-ssl-certificate-chain/). The top of the chain, the **root certificate**, must be issued by a trusted Certificate Authority.

![A real SSL certificate chain](/files/dnsimple-ssl-chain.png)

Root certificates are self-signed, meaning they sign themselves. This is possible because they are the ultimate authority in the trust hierarchy. They serve as the starting point that browsers and operating systems use to validate all other certificates in the chain.

## Why root certificates matter {#why-they-matter}

The list of trusted CAs is critical because it determines the security level of an entire system. Root certificates are carefully managed and protected because compromising a root certificate would allow an attacker to issue trusted certificates for any domain.

Root CAs keep their root certificates offline and secure. Instead of issuing certificates directly, they delegate issuance to intermediate CAs, which creates a security boundary. This means that if an intermediate CA is compromised, only certificates issued by that intermediate CA are affected, not the entire root CA.

## How root certificates are distributed {#distribution}

Root certificates are embedded in web browsers, operating systems, and other software that needs to validate SSL certificates. Browser vendors and operating system maintainers maintain lists of trusted root certificates and update them through software updates.

When you install a browser or operating system, it comes pre-configured with a set of trusted root certificates. This allows the software to validate SSL certificates without requiring you to manually install root certificates.

## Taking action {#taking-action}

- [How do I determine the Certificate Authority that signed my SSL certificate?](/articles/how-to-determine-certificate-authority/) - Identify which CA issued your certificate

## Related reading {#related}

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Learn about CAs and their role in certificate issuance
- [What is the SSL Certificate Chain?](/articles/what-is-ssl-certificate-chain/) - Understand how certificates form a chain of trust
- [SSL Certificate Authorities used by DNSimple](/articles/ssl-certificate-authorities/) - See which root CAs DNSimple works with

## Have more questions?

If you have additional questions or need any assistance with root certificates and browser trust, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
