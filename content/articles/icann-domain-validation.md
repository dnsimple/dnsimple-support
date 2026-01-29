---
title: Domain Validation Requirements
excerpt: Learn about domain validation requirements and how to verify your registrant contact information.
meta: Understand domain validation requirements, verification processes, and how to ensure your domain contact information is properly validated to avoid suspension.
categories:
  - Domains
---

# Domain Validation Requirements

Domain registries and organizations that oversee domain name registrations require validation of your registrant email address whenever a new domain is registered or your registrant email address or name is changed. This validation helps ensure the accuracy of contact information in the domain registration database and protects domain owners from unauthorized changes.

For most top-level domains, validation is required by [ICANN](https://www.icann.org/) (the Internet Corporation for Assigned Names and Numbers) as part of their [RDDS Accuracy program](https://www.icann.org/resources/pages/rdds-2013-02-28-en). Failure to validate your registrant email address results in suspension of the domain name after 15 days of non-compliance.

## Why domain validation exists

ICANN requires domain validation to maintain the accuracy of the WHOIS database, which contains contact information for all registered domains. Accurate contact information is essential for resolving disputes, handling security incidents, and ensuring that domain owners can be reached when necessary. Without validation, the database could contain outdated or incorrect email addresses, making it impossible to contact domain owners for critical matters such as transfer authorizations, security alerts, or legal notices.

The validation requirement also protects domain owners by ensuring that any changes to registrant information are verified. This prevents unauthorized modifications that could lead to domain hijacking or loss of control over a domain.

## How domain validation emails work

After you register a new domain or make a change to your registrant's email address or name, you'll be presented with a confirmation screen that tells you whether the change locks any of your domains for transfer, and that you may have to verify the change by email. Shortly after, you'll receive a verification email.

![Contact change confirmation](/files/contact-change.png)

## What the verification email looks like

### When registering a new domain

![New domain verification](/files/new-domain-registration-verification-email.png)

### When changing or updating the registrant contact

![Change or Update Registrant](/files/change-update-contact-verification-email.png)

The email is sent from one of the following addresses:

- noreply@emailverification.info
- DNSimple donotreply@name-services.com

The message will contain a verification link that goes to <https://www.emailverification.info/>.

## Resend verification email

If you are having trouble finding the email verification in your inbox, please remember to check your spam folder.

If it isn't there, resend the email by navigating to your domain page in DNSimple and locating the pending verification warning at the top of the page. Click **Send registrant verification email**.

![Resend email verification](/files/resend-domain-verification-email.png)

Once the email is verified, the warning should disappear. If it doesn't, it may be because our system hasn't refreshed the latest status yet. Click **Refresh** to manually force a refresh.

## What happens when a domain is suspended?

If your domain is suspended because the registrant email address was not verified in time, the name servers will be changed to the following:

- ns1.emailverification.info
- ns2.emailverification.info

Additionally, a message will appear on your website indicating that your domain is suspended:

Domain suspension due to validation failure is a registry-level action that overrides your DNS settings. This means your website, email, and all other DNS-dependent services will stop working because the domain's name servers are changed to point to the verification service. The suspension affects all DNS resolution for the domain, not just specific services. This is why validation is critical for maintaining domain functionality.

![Verification Web](/files/icann-verification-web.png)

On this suspension page, you will find instructions on how to verify the registrant information. 

However, if your domain is suspended, and you do not receive a verification email, this is likely because the email services associated with your domain have stopped working due to the suspension. To resolve this, [update the registrant contact information](/articles/changing-domain-contact/) to an active email address.

Once the contact information has been updated and verified, a new verification email will be automatically sent. Click the link in that email to complete the validation process. After verifying the email, the domain suspension will be lifted.

If your domain was suspended, it may take between 24 and 48 hours for the suspension to be removed after verification. This is due to DNS caching.

DNS caching means that name server changes propagate gradually across the internet. Even after the registry updates your domain's name servers back to your original settings, some DNS resolvers around the world may still have cached the old verification name servers. This propagation delay is normal and expected, and your domain will resume normal operation once DNS caches expire and refresh.

## What happens if the registrant email address cannot receive email?

You must be able to receive an email at the registrant email address to complete the verification process. If you set up the email address after registration or changing your registrant details, contact support@dnsimple.com to resend the verification email. Be sure to include the domain name that you need to verify in your email to support.

## Have more questions?

If you need assistance or have any questions about domain validation, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

Want to learn more about the policy requiring domain validation? Visit [ICANN](https://www.icann.org/) to read about the [ICANN RDDS Accuracy program](https://www.icann.org/resources/pages/rdds-2013-02-28-en).
