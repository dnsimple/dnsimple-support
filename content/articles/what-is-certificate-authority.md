---
title: What is a Certificate Authority?
excerpt: A certificate authority is a trusted entity that issues and validates digital certificates, establishing trust in online communications.
meta: Learn what a certificate authority is and how it validates entities to issue trusted SSL certificates that web browsers accept.
categories:
- SSL Certificates
---

# What is a Certificate Authority?

### Table of Contents {#toc}

* TOC
{:toc}

---

A **Certificate Authority (CA)** (also called a **Certification Authority**) is an organization that issues digital certificates. In the context of SSL/TLS, CAs play a key role in establishing trust between a website and its visitors.

## The role of certificate authorities {#role}

Certificate authorities act as trusted third parties.

They are trusted by both:
- the entity requesting the certificate (the subject), and  
- the parties relying on it (such as browsers and users)

When a CA issues a certificate, it verifies that the entity requesting it controls the domain (or organization) associated with the certificate. The certificate binds a public key to that entity, allowing others to trust that any communication secured with the corresponding private key belongs to the certified domain or organization. In practice, this is what allows browsers to establish secure HTTPS connections without warnings.

## Certificate authorities and SSL certificates {#ssl-certificates}

In the context of websites and online communications, digital certificates are commonly referred to as SSL certificates (or TLS certificates). The CA is responsible for issuing SSL certificates that are publicly trusted by web browsers and operating systems.

The trust relationship works because browser vendors and operating system maintainers maintain lists of trusted CAs. These trusted CAs have their [root certificates](/articles/what-is-ssl-root-certificate/) embedded in browsers and operating systems, creating the foundation of the [certificate chain](/articles/what-is-ssl-certificate-chain/).

## Trusted vs self-signed certificates {#trusted-vs-self-signed}

Anyone can technically generate and issue SSL certificates, but those certificates would not be trusted automatically by web browsers. Certificates issued outside the trusted CA system are called _self-signed certificates_.

The key difference is that a trusted CA has the responsibility to validate the entity behind an SSL certificate request. Upon successful validation, the CA issues publicly trusted SSL certificates that will be accepted by web browsers without security warnings.

Browser vendors rely on CAs to validate that the entity requesting a certificate actually controls the domain or organization they claim to represent. This validation process varies depending on the certificate type and validation level.

## How certificate authorities validate entities {#validation}

Certificate authorities use different validation methods depending on the type of certificate being issued:

- **[Domain validation](/articles/ssl-domain-validation-methods/) (DV)**: The CA verifies that the requester controls the domain by checking email, DNS records, or HTTP challenges.
- **Organization validation (OV)**: The CA verifies both domain ownership and organization information.
- **Extended validation (EV)**: The CA performs extensive verification of the organization's legal existence and authorization.

The validation process ensures that certificates are only issued to entities that legitimately control the domains or organizations they represent.

## Taking action {#taking-action}

- [Ordering a Sectigo SSL Certificate](/articles/ordering-standard-certificate/) - Learn how to order a Sectigo certificate from a trusted CA
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Request a free certificate from Let's Encrypt
- [How do I determine the Certificate Authority that signed my SSL certificate?](/articles/how-to-determine-certificate-authority/) - Identify which CA issued your certificate

## Related reading {#related}

- [What is a Root Certificate?](/articles/what-is-ssl-root-certificate/) - Learn about root certificates and their role in the trust chain
- [What is the SSL Certificate Chain?](/articles/what-is-ssl-certificate-chain/) - Understand how certificates form a chain of trust
- [SSL Certificate Types](/articles/ssl-certificates-types/) - Explore different types of SSL certificates and validation levels
- [SSL Certificate Authorities used by DNSimple](/articles/ssl-certificate-authorities/) - See which CAs DNSimple works with

## Have more questions?

If you have additional questions or need any assistance with certificate authorities or who issued your certificate, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
