---
title: ICANN Domain Validation Requirements
excerpt: What ICANN domain validation is and how to ensure that your domain name is not suspended by ICANN due to non-validation.
categories:
  - Domains
---

# ICANN Domain Validation Requirements

ICANN, the organization that oversees domain name registrations for most top-level domains, [requires validation](https://www.icann.org/resources/pages/contact-verification-2013-05-03-en) of your registrant email address whenever a new domain is registered or your registrant email address or name is changed. Failure to validate your registrant email address results in suspension of the domain name after [15 days of non-compliance](https://kb.centralnicreseller.com/domains/icann/contact-verification/frequently-asked-questions).

## How ICANN Validation Emails Work

When you make a change to your registrant’s email address or name, you’ll be presented with a confirmation screen that tells you whether the change [locks any of your domains for transfer](/articles/icann-60-day-lock-registrant-change/), and that you may have to verify the change by email. Shortly after, you’ll receive a verification email.

![Contact change confirmation](/files/contact-change.png)

## What the Verification Email Looks Like

The email address listed as the domain contact may receive an email similar to this:

![ICANN Verification Email](/files/icann-verification-email.png)

### When Registering a New Domain

![New domain verification]()

### When Changing or Updating  the Registrant Contact

![Change or Update Registrant]()

The email is sent from one of the following addresses:
- <noreply@emailverification.info>
- DNSimple <donotreply@name-services.com>
- DNSimple <registrant-verification@ispapi.net>

The message will contain a verification link: (http://emailverification.info)

## Resend verification email

If you are having trouble finding the email verification in your inbox, please remember to check your spam folder.

If it isn't there, resend the email by navigating to your domain page and locating the ICANN pending verification warning at the top of the page. Click **Send ICANN RAA verification email**.

![ICANN resend email verification](/files/raa-resend-email-verification.png)

Once the email is verified, the warning should disappear. If it doesn't, it may be because our system hasn't refreshed the latest status yet. Click **Refresh** to manually force a refresh.

## What happens when a domain is suspended?

If your domain is suspended, the name servers will be changed to either of the following:

- ns1.emailverification.info
- ns2.emailverification.info

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

If you need assistance or have any questions about ICANN domain validation, [contact support](https://dnsimple.com/contact), and we'll be happy to help.

Want to learn more about the policy requiring domain validation? Visit ICANN to read about the [ICANN RDDS Accuracy](https://itp.cdn.icann.org/en/files/accredited-registrars/registrar-accreditation-agreement-21jan24-en.htm#rdds-accuracy) program.
