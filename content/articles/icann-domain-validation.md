---
title: ICANN Domain Validation Requirements
excerpt: What ICANN domain validation is and how to ensure that your domain name is not suspended by ICANN due to non-validation.
categories:
  - Domains
---

# ICANN Domain Validation Requriements

ICANN, the organization that oversees domain name registrations for most top-level domains, [requires validation](https://www.icann.org/resources/pages/contact-verification-2013-05-03-en) of your registrant email address whenever a new domain is registered or your registrant email address or name is changed. Failure to validate your registrant email address results in suspension of the domain name after 15 days of non-compliance.

When you make a change to your registrant's email address or name, you'll be presented with a confirmation screen. This screen notifies you if the registrant changes are going to trigger a [60-day lock](/articles/icann-60-day-lock-registrant-change/) by ICANN. This screen will also tell you if you have to verify the registrant changes via the email address that is listed.

![Contact change confirmation](/files/contact-change.png)

The email address listed as the domain contact may receive an email similar to this:

![ICANN Verification Email](/files/icann-verification-email.png)

This email will be sent from the addresses `DNSimple <donotreply@name-services.com>` or `DNSimple <registrant-verification@ispapi.net>` and will include a link similar to these:

- `raa.name-services.com/raaverification/verification.aspx?VerificationCode=A8E3763E-EE70-42DB-A654-20BF560300A00`
- `www.enom.com/raaverification/verification.aspx?VerificationCode=AAAAAAAA-1A11-11AA-1A1A-1111111111`
- `registrant-email-verification-ispapi.net/?approve&token=Fsjdklajdfoqewvoieioejrawkjnjasfie&lang=en`
- `registrant-email-verification.ispapi.net/?approve&token=Fsjdklajdfoqewvoieioejrawkjnjasfie&lang=en`

Click the link to verify the registrant email address.

The link must be to `raa.name-services.com`, `www.enom.com`, `registrant-email-verification-ispapi.net`, or `registrant-email-verification.ispapi.net` - if you receive a verification email, and this link is not in the email, contact support@dnsimple.com, forwarding the email you received.

## Resend verification email

If you are having trouble finding the email verification in your inbox, please remember to check your spam.

If it isn't there, resend the email by navigating to your domain page and locating the ICANN pending verification warning at the top of the page. Click **Send ICANN RAA verification email**.

![ICANN resend email verification](/files/raa-resend-email-verification.png)

Once the email is verified, the warning should disappear. If it doesn't, it may be because our system hasn't refreshed the latest status yet. Click **Refresh** to manually force a refresh.

## What happens when a domain is suspended?

If your domain is suspended, the name servers will be changed to either of the following:

- ns1.emailverification.info
- ns2.emailverification.info

_or_

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

On this verification page is an option to resend the verification email. Requesting a resend will schedule a new verification email that is sent to the registrant email address.

However, if your domain is suspended, and you request a new verification email but do not receive it, this is likely because the email services associated with your domain have stopped working due to the suspension. To resolve this, [update the registrant contact information](/articles/changing-domain-contact/) to an active email address.

Once the contact information has been updated and verified, a new verification email will be automatically sent. Click the link in that email to complete the validation process. After verifying the email, the domain suspension will be lifted.

<note>
If your domain was suspended, it may take between 24 and 48 hours for the suspension to be removed after verification. This is due to DNS caching.
</note>

## What happens if the registrant email address cannot receive email?

You must be able to receive an email at the registrant email address to complete the verification process. If you set up the email address after registration or changing your registrant details, contact support@dnsimple.com to resend the verification email. Be sure to include the domain name that you need to verify in your email to support.

## Have more questions?

If you need assistance or have any questions about ICANN domain validation, contact support, and we'll be happy to help.

Want to learn more about the policy requiring domain validation? Visit ICANN to read about the [ICANN Whois Accuracy](https://www.icann.org/resources/pages/approved-with-specs-2013-09-17-en#whois-accuracy) program.
