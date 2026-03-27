---
title: Do You Support Extended Validation (EV) SSL Certificates?
excerpt: DNSimple does not offer EV or OV SSL certificates. All DNSimple certificates are domain-validated (DV).
meta: DNSimple does not provide Extended Validation (EV) or Organization Validated (OV) SSL certificates. All certificates are domain-validated (DV) with the same cryptographic security.
categories:
- SSL Certificates
---

# Do You Support Extended Validation (EV) SSL Certificates?

DNSimple does not offer Extended Validation (EV) or Organization Validated (OV) SSL certificates. All DNSimple certificates are [domain-validated (DV)](/articles/ssl-certificates-types/).

## Why DNSimple Does Not Offer EV Certificates {#why}

EV certificates require manual verification of the requesting organization's legal identity, which cannot be fully automated. DNSimple focuses on automated certificate workflows.

In terms of cryptographic security, DV certificates provide the same level of encryption as EV certificates. The difference is in how the CA verifies the identity of the certificate requester, not in the strength of the connection. Modern browsers no longer display distinct visual indicators (such as a green address bar) for EV certificates.

## Alternatives {#alternatives}

If you need an EV certificate for compliance or organizational requirements, you will need to purchase it directly from a certificate authority that offers EV validation, such as [Sectigo](https://sectigo.com/) or [DigiCert](https://www.digicert.com/).

For most use cases, a DNSimple [Sectigo](/articles/ssl-certificates/#sectigo-singlename) or [Let's Encrypt](/articles/ssl-certificates/#letsencrypt) DV certificate provides the security you need.

## Have More Questions?

If you have any questions about certificate validation types, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

