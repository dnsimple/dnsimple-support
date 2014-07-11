---
title: SSL Certificate Email Approval
excerpt: The email approval is the most common domain validation method for a certificate and it is required for domain-validated certificates.
categories:
- SSL Certificates
---

# SSL Certificate Email Approval

An email approval process is the most common domain validation method for a certificate. It is required for domain-validated certificates.

This process validates the domain is registered and someone with administrator rights on the domain is aware of and approves the certificate request.

The email approval process consists of three steps:

1. When you purchase a certificate, you select an email recipient called approver email.
1. The [Certificate Authority](/articles/what-is-a-certificate-authority) sends an approval email (also called DCV email) to the approver email with an unique link to approve the certificate and validate your domain ownership.
1. **You click on the link to validate and approve the certificate**. At this point, the certificate is validated and the authority will generate it.

## Choosing the approval email

<warning>
#### Disable Whois Privacy Protection

Whois Privacy Protection services are known to interfere with the delivery of the approval email. Be sure to temporarily disable the Whois Privacy feature or any another privacy protection service until the certificate is issued.
</warning>

The approval email typically can be sent to the following addresses:

- admin@example.com
- administrator@example.com
- hostmaster@example.com
- postmaster@example.com
- webmaster@example.com

Where `example.com` is the domain for the certificate being purchased.

**The approval email cannot be an arbitrary email** or any other email. In certain cases, the approval email can be sent to a different email address if this is listed in the WHOIS information for the domain.

<note>
In order to select a specific email, the email MUST be visible in the public WHOIS details for the domain. Some registries, such as the .IO, do not disclose registrant email therefore it's not possible to select the registrant email for a certificate purchased for one of these TLDs.
</note>

## Selecting an SSL Certificate Approver Email

You [select the approver email](/articles/selecting-ssl-certificates-email/) when you purchase the certificate, which is based upon the contact information listed with your domain. You can also [change the recipient](/articles/changing-ssl-certificates-email) or [resend the approval email](/articles/resending-ssl-certificates-email) if needed.
