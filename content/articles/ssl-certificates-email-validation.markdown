---
title: SSL Certificate email-based Domain Validation
excerpt: The email-based domain validation is the most common domain ownership validation method for a certificate and it is required for domain-validated certificates.
categories:
- SSL Certificates
redirect_from:
  - /articles/ssl-certificates-email-approval/
  - /articles/selecting-ssl-certificates-email/
  - /articles/resending-ssl-certificates-email/
  - /articles/changing-ssl-certificates-email/
---

# SSL Certificate email-based Domain Validation

### Table of Contents {#toc}

* TOC
{:toc}

---

In order to issue an SSL certificate, the [Certificate Authority](/articles/what-is-certificate-authority) has to validate the authenticity of the certificate order to ensure the request is legitimate and comes from an authorized owner of the domain. This process is called **domain validation**.

The goal of validation is to ensure the authenticity of a certificate order before issuing a new certificate. Specifically, before issuing the certificate, the Certificate Authority must be sure the domain listed in the certificate is registered and someone with admin rights is aware of and approves the certificate request.

**Email-based domain validation** is the most common certificate validation mechanism for [domain-validated certificate orders](/articles/ssl-certificates-types/#ssl-certificates-by-validation-level). The certificate authority compiles a list of **public emails** associated with the domain, using common administrative emails (e.g. `admin` or `webmaster`), in combination with the public WHOIS data for the domain.

The domain validation is a mandatory step, the Certificate Authority will not issue the certificate if the order has not been validated.

<note>
The Certificate Authority only uses public information, therefore it's not possible to use your account email to perform the validation, unless the email is publicly associated to the domain in the WHOIS record.
</note>


## The process

The email validation process consists of a few steps:

1. When you purchase a certificate, we show you a list of authoritative emails identified by the Certificate Authority for the domain associated with the certificate
1. You select an email from the list.
1. The Certificate Authority sends a verification email (also called DCV email) to the recipient with a unique link to approve the certificate and validate your domain ownership.
1. **You click on the link to validate and approve the certificate**. At this point the certificate's authenticity is validated and the authority will generate it.


## Email requirements {#requirements}

**The approval email cannot be an arbitrary email** such as a customer-provided email or the email in your DNSimple account.

<note>
The goal of the validation process is to ensure that the certificate is requested by someone with admin rights on the domain. Therefore, the email must publicly and unequivocally identify the customer as the owner or administrator of the domain listed in the certificate.
</note>

The approval email typically can be sent to the following addresses, called administrative emails:

- admin@example.com
- administrator@example.com
- hostmaster@example.com
- postmaster@example.com
- webmaster@example.com

Where `example.com` is the domain for the certificate being purchased.


## Email validation and WHOIS privacy {#whois-privacy}

<warning>
[Whois Privacy Protection services](/articles/what-is-whois-privacy) are known to interfere with the delivery of the approval email. Be sure to temporarily disable the Whois Privacy feature or any another privacy protection service until the certificate is issued.
</warning>

If the Whois Privacy is enabled for the domain associated with the certificate, the privacy email (e.g. `wqyygglqlt@whoisprivacyprotect.com`) will be included in the list of possible emails to be used. However, it's not guaranteed that the delivery will be successful and DNSimple has no control over the delivery of the validation email.

[Disable any whois privacy](/articles/whois-privacy/#disable-whois-privacy) service before proceeding.

<info>
Once you disable Whois Privacy it may take up to 24 hours for the email list to be refreshed, as the Certificate Authority may cache that information.
</info>


## Email validation and GDPR {#gdpr}

Due to the new privacy rules enacted by [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) on May 25th 2018, most registrars are now hiding or masking email addresses in the WHOIS records. This prevents the Certificate Authority from being able to verify you are in control of the domain to issue your certificate.

As a result, you can no longer use a custom email address listed in the WHOIS to validate a certificate. You will have to use one of the administrative emails provided by the Certification Authority.


## Select the validation email address {#select-email}

You select the validation email when you purchase the certificate. You can use one of the emails available in the list displayed in the configuration page, selected by the Certificate Authority and based upon the constraints documented above. [What if the validation email you want to use is not included in this list?](/articles/how-to-different-ssl-domain-validation-email)

<div class="section-steps" markdown="1">
##### To select a validation email

1.  Read the list of all available approver emails.

    ![](/files/dnsimple-ssl-selectapprover.png)

2.  Choose the email address you want to use by clicking on it.
3.  Click *Send Approver Email* to configure and submit the certificate for validation.
</div>

If the approver is not in this list or you need time to configure one of those emails, you can also close this page and come back later.

<div class="section-steps" markdown="1">
##### To select a validation email for a previously purchased certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>Active SSL Certificate</label> list and click on the certificate.

    ![](/files/dnsimple-ssl-pagelink-purchased.png)

1.  Click <label>complete the setup process now</label>.

    ![](/files/dnsimple-ssl-completesetup.png)

1.  Read the list of all available approver emails.

    ![](/files/dnsimple-ssl-selectapprover.png)

1.  Choose the email address you want to use by clicking on it.
1.  Click <label>Send Approver Email</label> to configure and submit the certificate for validation.
</div>


## Change the validation email address {#change-email}

If you selected an incorrect email recipient, you can request the email to be changed as long as the email address meets the [requirements](#requirements) described above.

The certificate must be in the submitted state. If instead you still need to submit the certificate and the email address you want to use doesn't snow up in the list, then follow the instructions to [select a different email](#select-email).

<div class="section-steps" markdown="1">
##### To change the approval email
1. [**Read the requirements for the email address**](#requirements) and make sure the recipient you want to use follow these rules.

1. [Contact us](https://dnsimple.com/contact) to change the approver email. Make sure you provide the fully-qualified certificate name (e.g. `www.example.com`, `*.example.com`) and the new email address to use.
</div>


## Resend the validation email {#resend-email}

If you haven't received the validation email, for example because the email configuration was incorrect at the time of the submission, you can request the email to be resent.

<div class="section-steps" markdown="1">
##### To resend the validation email

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>Active SSL Certificate</label> list and click on the certificate.

    ![](/files/dnsimple-ssl-pagelink-submitted.png)

1. At the page, on the status line, look for the link to resend the approval email.

    ![](/files/dnsimple-ssl-resend-approval-link.png)

    If the link is not present, it means the certificate is in a status where the email cannot be resent (e.g. a not submitted or expired certificate).

1.  Click the link and follow the procedure described in the page.
</div>
