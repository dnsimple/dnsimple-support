---
meta: A certificate authority is a trusted entity that issues digital certificates.
title: What is a Certificate Authority?
excerpt: A certificate authority is a trusted entity that issues digital certificates.
categories:
- SSL Certificates
---

# What is a Certificate Authority?

A **Certificate Authority (CA)** (or **Certification Authority**) is an entity that issues digital certificates.

The digital certificate certifies the ownership of a public key by the named subject of the certificate. This allows others (relying parties) to rely upon signatures or assertions made by the private key that corresponds to the public key that is certified.

In this model of trust relationships, a CA is a trusted third party that is trusted by both the subject (owner) of the certificate and the party relying upon the certificate.

In the context of a website, when we use the term digital certificate we often refer to SSL certificates. The CA is the authority responsible for issuing SSL certificates publicly trusted by web browsers.

Anyone can issue SSL certificates, but those certificates would not be trusted automatically by web browsers. Certificates such as these are called _self-signed_. The CA has the responsibility to validate the entity behind an SSL certificate request and, upon successful validation, the ability to issue publicly trusted SSL certificates that will be accepted by web browsers. Essentially, the browser vendors rely on CAs to validate the entity behind a web site. 
