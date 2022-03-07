---
title: ICANN domain validation requirements
excerpt: This support article explains what ICANN domain validation is and how to ensure that your domain name is not suspended by ICANN due to non-validation.
categories:
  - Domains
---

# ICANN domain validation

ICANN, the organization that oversees domain name registrations for most top-level domains, requires validation of your registrant email address whenever a new domain is registered, or your registrant email address or name is changed. Failure to validate your registrant email address results in suspension of the domain name after 15 days of non-compliance.

When you make a change to your registrant's email address or name, you'll be presented with a confirmation screen that tells you whether the change locks any of your domains for transfer, and that you may have to verify the change by email.

![Contact change confirmation](/files/contact-change.png)

You may receive an email similar to the following:

![ICANN Verification Email](/files/icann-verification-email.png)

This email will be sent from the addresses `DNSimple <donotreply@name-services.com>` or `DNSimple <registrant-verification@ispapi.net>` and will include a link similar to the following:
- `raa.name-services.com/raaverification/verification.aspx?VerificationCode=A8E3763E-EE70-42DB-A654-20BF560300A00`
- `www.enom.com/raaverification/verification.aspx?VerificationCode=AAAAAAAA-1A11-11AA-1A1A-1111111111`
- `registrant-email-verification-ispapi.net/?approve&token=Fsjdklajdfoqewvoieioejrawkjnjasfie&lang=en`
- `registrant-email-verification.ispapi.net/?approve&token=Fsjdklajdfoqewvoieioejrawkjnjasfie&lang=en`

Click the link to verify the registrant email address.

The link must be to `raa.name-services.com`, `www.enom.com`, `registrant-email-verification-ispapi.net`, or `registrant-email-verification.ispapi.net` - if you receive a verification email and this link is not in the email then please contact support@dnsimple.com, forwarding the email you received.

## Resend verification email

If you are having trouble finding the email verification in your inbox, you may want to resend it. Navigate to your domain page and locate the ICANN pending verification warning at the top of the page. Then click on "Send ICANN RAA verification email"

![ICANN resend email verification](/files/raa-resend-email-verification.png)

Once you have acted on the verification email, the warning above should not appear. If it does, it may be because our system hasn't refreshed the latest status yet. You can manually force a refresh by clicking on the "Refresh" button.

## What happens when a domain is suspended?

If your domain is suspended, the name servers will be changed to either of the following:

- DNS1.NAME-SERVICES.COM
- DNS2.NAME-SERVICES.COM
- DNS3.NAME-SERVICES.COM
- DNS4.NAME-SERVICES.COM
- DNS5.NAME-SERVICES.COM

_or_

- NS1.REGISTRANT-VERIFICATION.ISPAPI.NET
- NS2.REGISTRANT-VERIFICATION.ISPAPI.NET
- NS3.REGISTRANT-VERIFICATION.ISPAPI.NET

Additionally, a message will appear on your website indicating that your domain is suspended:

![ICANN Verification Web](/files/icann-verification-web.png)

![ICANN Verification Web](/files/icann-verification-web-2.png)

On this verification page is an option to resend the verification email. Requesting a resend will schedule a new verification email that is sent to the registrant email address.

<note>
If your domain was suspended, it may take between 24 to 48 hours for the suspension to be removed once you have verified the registrant email address.
</note>

## What happens if the registrant email address cannot receive email?

You must be able to receive an email at the registrant email address to complete the verification process. You can set up the email address with an email provider or you can use our email forwarding service. If you set up the email address after registration or changing your registrant details, you may need to resend the verification email. Please contact support@dnsimple.com to do so. Include the domain name that you need to verify in your email to support.

Want to more about the policy requiring domain validation? Visit the ICANN web site to read about the [ICANN Whois Accuracy](https://www.icann.org/resources/pages/approved-with-specs-2013-09-17-en#whois-accuracy) program.
