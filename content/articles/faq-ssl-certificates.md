---
title: SSL Certificates Frequently Asked Questions
excerpt: A collection of frequently asked questions about the SSL certificates offered by DNSimple.
meta: FAQ about SSL certificates at DNSimple, covering pricing, domain requirements, certificate types, validity periods, and common procedures.
categories:
- SSL Certificates
structured_data: true
---

# SSL Certificates Frequently Asked Questions

### Table of Contents {#toc}

* TOC
{:toc}

---

## Prices and Subscription {#prices-and-subscription}

<div class="section-faq" markdown="1">
    
1.  #### What is the price of an SSL certificate?

    The price depends on the certificate type. To learn more, visit [SSL Certificates](/articles/ssl-certificates/).

1.  #### I want to purchase an SSL certificate. What is the DNSimple subscription?

    DNSimple is a subscription-based service. You need an active subscription with us to use our platform and domain services.

    The subscription gives you access to the included platform services (such as the API access and the DNS hosting), and the paid products (such as the domain registration, certain SSL certificates, email forwarding, etc.).

1.  #### I want to purchase an SSL certificate. Do I need a subscription?

    Yes and no. Let's Encrypt certificates are only available with an active subscription. They are included with the subscription at no additional cost.

    You can purchase a Sectigo SSL Certificate without a subscription. Note that you will not receive any additional services for the domain without an active subscription. 


1.  #### I just want to purchase a Let's Encrypt SSL certificate. Why do I need a subscription?

    If you are requesting a [Let's Encrypt certificate](/articles/letsencrypt/), we will use our DNS hosting service to automatically provision the DNS records required to validate your certificate, and we will [automatically renew](/articles/letsencrypt/#auto-renewal) the certificate for you before it expires. All these services require a subscription.

1.  #### Will my certificate remain valid after unsubscribing?

    Yes. You are not required to have an active subscription to use or install the certificate on your server.

</div>

## Domains and SSL certificates {#domains-and-ssl-certificates}

<div class="section-faq" markdown="1">
    
1.  #### Do I need to transfer the domain to DNSimple to purchase an SSL certificate?

    No. You can purchase an SSL certificate for a domain that is not registered with us without transferring it to us. However, you need to add the domain to your account to request the certificate. For certain certificate types, you will also need a valid, active subscription.

    Follow the instructions in [Getting Started](/articles/getting-started-ssl-certificates/). When you are asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

1.  #### Do I need to host the domain with DNSimple to purchase an SSL certificate?

    Not for Sectigo certificates. You can purchase an SSL certificate for a domain that is not hosted with us. However, you need to add the domain to your account to be able to request the certificate.

    Follow the instructions in [Getting Started](/articles/getting-started-ssl-certificates/). When you are asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

    If you are getting a free [Let's Encrypt certificate](/articles/letsencrypt/), you must have the domain hosted with us so we can set up the required records for domain-based validation.

1. #### How do CAA records affect purchasing SSL certificates?

    If you have [CAA Records](/articles/caa-record/) already set up, or you want to use them, you need to add the appropriate record for Sectigo or Let's Encrypt before you purchase the SSL certificate. See [CAA Records and SSL Certificates](/articles/caa-records-ssl-certificates/) for the specific values each certificate type requires.
</div>


## Certificate Types {#certificate-types}

<div class="section-faq" markdown="1">
    
1.  #### What type of SSL certificates does DNSimple provide?

    We provide different types of _domain-validated_ [SSL certificates](/articles/what-is-ssl-certificate/), signed by globally recognized [certificate authorities](/articles/what-is-certificate-authority/). We do not provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates.

    To learn more, visit [SSL Certificates](/articles/ssl-certificates/).

1.  #### What certificates show the company name in the green bar near the padlock?

    The green bar in the browser is displayed only if you purchase an _extended-validation_ (EV) certificate. We do not sell EV certificates.

    We only sell DV certificates. These are less expensive than EV certificates and offer the same cryptographic level of security.
</div>


## Certificate Validity {#certificate-validity}

<div class="section-faq" markdown="1">

1.  #### Why is my Sectigo certificate only valid for 200 days?

    Starting March 15, 2026, the CA/Browser Forum requires that publicly trusted SSL/TLS certificates have a maximum validity of 200 days. This applies to all Certificate Authorities, not just Sectigo.

    The issued certificate will be valid for 200 days. You will need to purchase a new certificate before it expires to maintain uninterrupted coverage. Each new certificate requires completing [domain validation](/articles/ssl-certificates-email-validation/) again.

    This maximum will continue to decrease: 100 days in March 2027, and 47 days in March 2029. Learn more about the [certificate lifetime reduction timeline](/articles/can-multi-year-ssl-certificates/#shorter-validity).

1.  #### Will my existing certificate be affected?

    No. Certificates issued before March 15, 2026 remain valid until their original expiration date. Only newly issued certificates after that date are subject to the shorter validity.

</div>

## Certificate Procedures {#certificate-procedures}

<div class="section-faq" markdown="1">
    
1.  #### How long does it take to issue an SSL certificate?

    Issuing a new SSL certificate can take anywhere from a few minutes to a few hours. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate/).

1.  #### Does renewing a certificate update the one I have installed?

    No. After renewing or purchasing a new certificate, you need to install the updated files on your server(s). You can automate this using [webhooks and our api](https://developer.dnsimple.com), but we do not have access to your systems to update your certificates for you.
</div>

## Have more questions?

If you have any questions or need assistance, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
