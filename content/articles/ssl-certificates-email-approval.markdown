---
title: SSL Certificate Email Approval
excerpt: 
categories:
- SSL Certificates
---

# SSL Certificate Email Approval

The email approval is the most common domain validation method for a certificate. It is required for domain-validated certificates.

This step validates the domain is registered and someone with admin rights on the domain is aware of and approves the certificate request.

The domain approval consists in three steps:

1. When you purchase a certificate, you select an email recipient called approver email.
1. The [Certificate Authority](/articles/what-is-a-certificate-authority) sends an approval email (also called DCV email) to the approver email with an unique link to approve the certificate and validate your domain ownership.
1. You click on the link. At this point, the certificate is validated and the authority will generate it.

## Choosing the approval email

The approval email typically can be sent to the following addresses:

- admin@example.com
- administrator@example.com
- hostmaster@example.com
- postmaster@example.com
- webmaster@example.com

where `example.com` is the domain you are purchasing a certificate for. 

In certain cases, the approval email can be sent to a contact email address listed for the domain name in Whois. In this case, you may need to disable the Whois Privacy feature or any another privacy protection service until the order is approved.

The approval email *cannot be an arbitrary email* or any other email.

## Selecting an SSL Certificate Approver Email

You [select the approver email](#) when you purchase the certificate. You can also [change the recipient](/articles/changing-ssl-certificates-email) or [resend the approval email](/articles/resending-ssl-certificates-email).

