---
title: What is a Root Certificate?
excerpt: A Root SSL certificate is a certificate issued by a trusted certificate authority.
categories:
- SSL Certificates
---

# What is a Root SSL Certificate?

A **Root SSL certificate** is a certificate issued by a **trusted [certificate authority (CA)](/articles/what-is-certificate-authority)**.

In the SSL ecosystem, anyone can generate a signing key and sign a new certificate with that signature. However, that certificate is not considered valid unless it has been directly or indirectly signed by a trusted CA.

A **trusted certificate authority** is an entity that has been entitled to verify that someone is effectively who it declares to be. In order for this model to work, all the participants on the game must agree on a set of CA which they trust. All operating systems and most of web browsers ship with a set of trusted CAs.

The SSL ecosystem is based on a model of trust relationship, also called "chain of trust". When a device validates a certificate, it compares the certificate issuer with the list of trusted CAs. If a match is not found, the client will then check to see if the certificate of the issuing CA was issued by a trusted CA, and so on until the end of the [certificate chain](/articles/what-is-ssl-certificate-chain). The top of the chain, the **root certificate**, must be issued by a trusted Certificate Authority.

![A real SSL certificate chain](/files/dnsimple-ssl-chain-robowhois.png)

The list of trusted CAs is of critical importance, because it determine the entire level of securit of a system.
