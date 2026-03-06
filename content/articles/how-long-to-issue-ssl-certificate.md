---
title: How long does it take to issue an SSL certificate?
excerpt: SSL certificate issuance time varies by certificate type and validation method, ranging from minutes for automated validation to days for extended validation.
meta: Learn how long it takes to issue SSL certificates, what factors affect issuance time, and what to expect for different certificate types.
categories:
- SSL Certificates
---

# How long does it take to issue an SSL certificate?

The time required to issue a new [SSL certificate](/articles/ssl-certificates/) depends on several factors: the SSL certificate type, the validation process used by the [certificate authority](/articles/what-is-certificate-authority/), and how quickly validation steps are completed.

## Sectigo certificates

For Sectigo [single-name](/articles/ssl-certificates/#standard-singlename) and [wildcard](/articles/ssl-certificates/#standard-wildcard) certificates, issuance typically takes from one hour to several hours after email approval is completed.

The issuance process begins once the certificate authority receives and validates the email approval. The actual certificate generation and signing happens relatively quickly once validation is confirmed.

Occasionally, issuance may take longer — up to several days — when issues occur during validation or issuance. Common causes of delays include:

- Domain misconfiguration
- [CAA records](/articles/caa-record/) preventing validation and issuance
- Email approval delays or issues

### CAA records and Sectigo wildcard certificates

Sectigo wildcard certificates include both the wildcard name (e.g., `*.example.com`) and the root domain (e.g., `example.com`) in the certificate. This means your CAA records must authorize both `issue` (for the root domain) and `issuewild` (for the wildcard) permissions for Sectigo.

For example, a certificate for `*.example.com` requires:
```
example.com.  CAA 0 issue "sectigo.com"
example.com.  CAA 0 issuewild "sectigo.com"
```

This requirement also applies to subdomain wildcard certificates.

## Let's Encrypt certificates

For [Let's Encrypt](/articles/ssl-certificates/#letsencrypt) certificates, issuance is generally between 30 minutes and 1 hour. The process is fully automated, which contributes to the faster timeline.

Let's Encrypt uses DNS-based validation, which DNSimple handles automatically when the domain is resolving with DNSimple. The automated nature of this process eliminates manual approval steps and reduces issuance time.

If issuance takes longer than expected, common causes include:

- Domain misconfiguration
- [CAA records](/articles/caa-record/) preventing issuance
- Rate limiting (Let's Encrypt has per-domain and per-week limits)

## Factors affecting issuance time

Several factors can influence how long certificate issuance takes:

- **Validation method**: Automated DNS validation (Let's Encrypt) is faster than email-based validation (Sectigo)
- **Certificate type**: Domain-validated certificates are faster than organization-validated or extended-validation certificates
- **Domain configuration**: Properly configured domains with correct DNS and CAA records process faster
- **Response time**: For email-based validation, how quickly you approve the certificate request affects total time

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand how CAs process certificate requests
- [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/) - Learn about the renewal process timeline
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare issuance processes between certificate types
- [CAA Records](/articles/caa-record/) - Understand how CAA records affect certificate issuance

## Taking action

- [Ordering a Standard SSL Certificate](/articles/ordering-standard-certificate/) - Order a Sectigo certificate
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Request a Let's Encrypt certificate
- [SSL Certificate email-based Domain Validation](/articles/ssl-certificates-email-validation/) - Learn about email validation for Sectigo certificates

## Have more questions?

If you have additional questions or need any assistance with certificate issuance timeframes, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
