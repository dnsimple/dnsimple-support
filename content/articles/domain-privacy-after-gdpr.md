---
meta: GDPR impacts available WHOIS information. Learn about the consequences of this law that came into effect on May 25th 2018.
title: Domain privacy after GDPR
excerpt: GDPR impacts available WHOIS information. Learn about the consequences of this law that came into effect on May 25th 2018.
categories:
- Whois Privacy
---

# Domain privacy after GDPR

### Table of Contents {#toc}

* TOC
{:toc}

---


This article explains how the GDPR (General Data Protection Regulation) law affects the information available about your domains after the law came into effect on May 25th 2018.

## WHOIS privacy

WHOIS is frequently used to fetch information about a domain. A WHOIS query usually returns information such as the person or organization that registered the domain, the expiration date, and the domain registrar.

WHOIS queries are useful to identify ownership of a domain. However, spammers take advantage of this public information to call and spam you with text messages. This is why most domain registrar provide WHOIS privacy. With [WHOIS privacy](/articles/whois-privacy/), the information is masked by the registrar.

## WHOIS after GDPR

With GDPR, starting on May 25th 2018, even if you opted out of WHOIS privacy, your information is protected. This is great to avoid spam, but it can make other tasks harder since a WHOIS query can no longer identify you as the owner of a domain.

## Certificate validation

Requesting an SSL certificate is a common task that requires proof of ownership of a domain. Our SSL certificates from Sectigo require an extra step to ensure the request is legitimate and comes from an authorized owner of the domain. Since the WHOIS public email address is now protected, there is no reliable way for Sectigo to contact you to verify the ownership of your domain.

In this situation we recommend one of the following options:

- If your domain is already configured to receive email, you need to create at least one of these following email addresses to prove ownership:

    ```
    admin@your-domain
    webmaster@your-domain
    postmaster@your-domain
    ```

    Some email services let you create an alias email address, so you don't have to monitor an extra inbox just for this.

- If your domain is not configured to receive email, you can use our [email forwarding feature](/articles/email-forwarding/) and delete the forward once the certificate is issued.

## Domain transfer validation

Some domain registrar require an extra step before initiating a transfer. They send an email to validate the ownership of the domain to the available WHOIS email address. Since the WHOIS email is now masked, you need to work with the new registrar to find an alternative to the email validation.
