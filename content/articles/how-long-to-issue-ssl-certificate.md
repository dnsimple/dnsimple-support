---
meta: The time frame required to issue a new SSL certificate depends on many factors.
title: How long does it take to issue an SSL certificate?
excerpt: The time frame required to issue a new SSL certificate depends on many factors.
categories:
- SSL Certificates
---

# How long does it take to issue an SSL certificate?

The time required to issue a new [SSL certificate](/articles/ssl-certificates) depends on many factors. The SSL certificate type, the validation process, and how quickly you respond with requested information from us or the [certificate authority](/articles/what-is-certificate-authority) communications.

## Standard certificates

For standard [single-name](/articles/ssl-certificates#standard-singlename) and [wildcard](/articles/ssl-certificates#standard-wildcard) certificates, it can take from a minimum of one hour to several hours, **after you [approve the SSL certificate](/articles/ssl-certificates-email-validation)**.

Occasionally, the issuance may take longer and require up to several days. This is the case when some issue occurs during the issuance or validation. Common issues are:

- misconfiguration of the domain
- [CAA records](/articles/caa-record) preventing the validation and issuance
- issues in the email approval

<note>
#### Remember to approve the certificate!

In most cases, the purchase process can get stuck because the certificate is never approved by the owner. Once you submit the certificate, please monitor the approval email inbox and make sure to **click on the link contained in the email sent from the Certificate Authority** in order to validate and approve the certificate. Be sure to monitor your spam folder in case these emails are accidentally marked as spam.
</note>

<note>
#### Sectigo Wildcard Certificates and CAA

Customers who purchase a Sectigo wildcard certificate from us need to make sure they have both `issuewild` and `issue` [CAA records](/articles/caa-record), because they add an additional single-name to the certificate to cover the non-wildcard name.

For example, buying a certificate for `*.example.com` issues a certificate with both `example.com` and `*.example.com` in the certificate names. This means you need to configure your CAA records:

    example.com.  CAA 0 issue "sectigo.com"
    example.com.  CAA 0 issuewild "sectigo.com"

The above rules also apply to subdomain wildcard certificates.
</note>
## Let's Encrypt certificates

For [Let's Encrypt](/articles/ssl-certificates#letsencrypt) certificates the issuance is generally between 30 minutes and 1 hour.

If the order is taking longer, it is generally because of a possible issuance problem such as:

- misconfiguration of the domain
- misconfiguration of [DNSSEC](/articles/dnssec/#troubleshooting-dnssec-configurations) for the domain
- [CAA records](/articles/caa-record) preventing the issuance
