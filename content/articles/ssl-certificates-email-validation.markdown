---
title: SSL Certificate Email-based Domain Validation
excerpt: The email-based domain validation is the most common domain ownership validation method for a certificate and it is required for domain-validated certificates.
categories:
- SSL Certificates
redirect_from:
  - /articles/ssl-certificates-email-approval/
  - /articles/selecting-ssl-certificates-email/
---

# SSL Certificate Email-based Domain Validation

### Table of Contents {#toc}

* TOC
{:toc}

---

The **email-based certificate validation** is the most common certificate validation mechanism used by Certification Authorities in case of [domain-validated certificate orders](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level).

The goal of the validation is to verify the authenticity of a certificate order before issuing a new certificate. Specifically, before issuing the certificate, the Certificate Authority must be sure the domain listed in the certificate is registered and someone with admin rights is aware of and approves the certificate request.

The email validation is a mandatory step performed by the Certification Authority based only on publicly accessible information.

## The process

The email validation process consists of three steps:

1. When you purchase a certificate, we show you a list of authoritative emails identified by the Certificate Authority for the domain associated with the certificate
1. You select an email from the list.
1. The [Certificate Authority](/articles/what-is-certificate-authority/) sends a verification email (also called DCV email) to the recipient with an unique link to approve the certificate and validate your domain ownership.
1. **You click on the link to validate and approve the certificate**. At this point, the certificate authenticity is validated and the authority will generate it.

## Email requirements

**The approval email cannot be an arbitrary email** such as a customer-provided email or the email in your DNSimple account.

Remember: the goal of the validation process is to ensure that the certificate is requested by someone with admin rights on the domain. Therefore, the email must publicly and inequivocally identify the customer as the owner or administrator of the domain listed in the certificate.

The approval email typically can be sent to the following addresses, called administrative emails:

- admin@example.com
- administrator@example.com
- hostmaster@example.com
- postmaster@example.com
- webmaster@example.com

Where `example.com` is the domain for the certificate being purchased.

Alternatively, **the approval email can be sent to a different email address only if this is listed in the WHOIS information for the domain**. In fact, this is the only way for the Certificate Authority to determine if an email is officially associated with a domain.

<note>
Some registries, such as the .IO, do not disclose registrant email therefore it's not possible to select the registrant email for a certificate purchased for one of these TLDs.
</note>

## Email validation and Whois Privacy {#whois-privacy}

<warning>
[Whois Privacy Protection services](/articles/what-is-whois-privacy/) are known to interfere with the delivery of the approval email. Be sure to temporarily disable the Whois Privacy feature or any another privacy protection service until the certificate is issued.
</warning>

If the whois privacy is enabled for the domain associated with the certificate, the privacy email (e.g. `wqyygglqlt@whoisprivacyprotect.com`) will be included in the list of possible emails to be used. However, it's not guaranteed that the delivery will be successful and DNSimple has no control over the delivery of the validation email.

[Disable any whois privacy](/articles/whois-privacy/#disable-whois-privacy) service before proceeding.

<note>
Once you disabled the whois privacy it may take up to 24 hours for the email list to be refreshed, as the Certificate Authority may cache that information. [Contact us](https://dnsimple.com/contact) and provide the certificate name if you want to speed up the update.
</note>

## Select a Validation Email {#select-email}

You select the validation email when you purchase the certificate, which is based upon the constraints documented above.

<div class="section-steps" markdown="1">
##### To select an approver email

1.  Read the list of all available approver emails.

    ![](/files/dnsimple-ssl-selectapprover.png)

1.  Choose the email address you want to use by clicking on it.
1.  Click *Send Approver Email* to configure and submit the certificate for validation.
</div>

If the approver is not in this list or you need time to configure one of those emails, you can also close this page and come back later.

<div class="section-steps" markdown="1">
##### To select an approver email for a previously purchased certificate

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>Active SSL Certificate</label> list and click on the certificate.

    ![](/files/dnsimple-ssl-pagelink-purchased.png)

1.  Click <label>complete the setup process now</label>.

    ![](/files/dnsimple-ssl-completesetup.png)

1.  Read the list of all available approver emails.

    ![](/files/dnsimple-ssl-selectapprover.png)

1.  Choose the email address you want to use by clicking on it.
1.  Click <label>Send Approver Email</label> to configure and submit the certificate for validation.
</div>
