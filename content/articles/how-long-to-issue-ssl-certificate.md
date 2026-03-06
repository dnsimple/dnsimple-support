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
- Problems with the approval email process

> [!TIP]
> **Remember to approve the certificate**
>
> In many cases, the process is delayed because the certificate request is never approved. After submitting the certificate request, monitor the approval email inbox and make sure to approve the certificate using the message sent by the Certificate Authority. It is also a good idea to check your spam folder in case the message is filtered there.

> [!NOTE]
> **Sectigo wildcard certificates and CAA**
>
> Customers who purchase a Sectigo wildcard certificate from us need to make sure they have both `issuewild` and `issue` [CAA records](/articles/caa-record/), because the certificate also includes the non-wildcard name.
>
> For example, a certificate for `*.example.com` also covers `example.com`. This means the CAA policy must allow Sectigo to issue both the wildcard and non-wildcard names:
>
> `example.com. CAA 0 issue "sectigo.com"`
>
> `example.com. CAA 0 issuewild "sectigo.com"`
>
> These requirements also apply to wildcard certificates for subdomains.

## Let's Encrypt certificates

For [Let's Encrypt](/articles/ssl-certificates/#letsencrypt) certificates, issuance is generally between 30 minutes and 1 hour. The process is fully automated, which contributes to the faster timeline.

Let's Encrypt uses DNS-based validation, which DNSimple handles automatically when the domain is delegated to and exclusively resolves with DNSimple. The automated nature of this process eliminates manual approval steps and reduces issuance time.

If issuance takes longer than expected, common causes include:

- **Domain misconfiguration**: If the domain is not correctly delegated to DNSimple, or is not exclusively resolving with DNSimple, DNSimple cannot complete the DNS validation required by Let's Encrypt.
- [**CAA records**](/articles/caa-record/) preventing issuance: If the domain's CAA policy does not allow Let's Encrypt to issue a certificate, the request will fail.
- **Rate limiting**: Let's Encrypt applies rate limits to prevent abuse. If too many certificates are requested for the same domain or set of names within a short period of time, issuance may be temporarily blocked until the limit resets.

## Taking action

- [Ordering a Standard SSL Certificate](/articles/ordering-standard-certificate/) - Order a Sectigo certificate
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Request a Let's Encrypt certificate
- [SSL Certificate email-based Domain Validation](/articles/ssl-certificates-email-validation/) - Learn about email validation for Sectigo certificates

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand how CAs process certificate requests
- [How does an SSL Certificate Renewal work?](/articles/how-certificate-renewal-works/) - Learn about the renewal process timeline
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare issuance processes between certificate types
- [CAA Records](/articles/caa-record/) - Understand how CAA records affect certificate issuance

## Have more questions?

If you have additional questions or need any assistance with certificate issuance timeframes, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
