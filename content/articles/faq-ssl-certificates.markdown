---
title: SSL Certificates Frequently Asked Questions
excerpt: A collection of frequently asked questions about the SSL certificates offered by DNSimple.
categories:
- SSL Certificates
structured_data: true
---

# SSL Certificate FAQ

### Table of Contents {#toc}

* TOC
{:toc}

---

## Prices and Subscription

<div class="section-faq" markdown="1">
1.  #### What is the price of an SSL certificate?

    The price depends on the certificate type. To learn more, visit [SSL Certificates](/articles/ssl-certificates).

1.  #### I want to purchase an SSL certificate. What is the DNSimple subscription?

    DNSimple is a subscription-based service. You need an active subscription in our to use our platform and domain services.

    The subscription gives you access to the included platform services (such as the API access and the DNS hosting), and the paid products (such as the domain registration, SSL certificates, email forwarding, etc.).

1.  #### I want to purchase an SSL certificate. Do I need a subscription?

    Yes. SSL certificates are one of our paid products, provided as part of our subscription service.

    To purchase an SSL certificate, you need an active subscription at the time of the purchase. You're not required to have an active subscription to use or install the certificate on your server. If you disable the subscription, you won't receive any additional services for the domain or the certificate.

    You need a valid, active subscription when you renew the certificate or if you want to reissue the certificate.

1.  #### I just want to purchase an SSL certificate, why do I need a subscription?

    We offer SSL certificate purchases as part of our subscription service.

    An SSL certificate is not a one-off purchase. You need to renew the certificate periodically. Sometimes you need to rekey it, or may have issues installing it, and need support. All these tasks are covered by our subscription service.

    If you're requesting a [Let's Encrypt certificate](/articles/letsencrypt/), we'll use our DNS hosting service to automatically provision the DNS records required to validate your certificate, and we'll [automatically renew](/articles/letsencrypt/#auto-renewal) the certificate for you before it expires. All these services require a subscription.

1.  #### Will my certificate remain valid after unsubscribing?

    Yes. You're not required to have an active subscription to use or install the certificate on your server.

    If you disable the subscription, you won't receive any additional services for the domain or the certificate, like expiration warnings or the ability to renew or reissue it.

</div>

## Domains and SSL certificates

<div class="section-faq" markdown="1">
1.  #### Do I need to transfer the domain to DNSimple to purchase an SSL certificate?

    No. You can purchase an SSL certificate for a domain that is not registered with us without transferring it to us. However, you need to add the domain to your account to request the certificate. You also need a valid, active subscription.

    Follow the instructions in [Getting Started](/articles/getting-started-ssl-certificates). When you're asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

1.  #### Do I need to host the domain with DNSimple to purchase an SSL certificate?

    Not for Standard certificates. You can purchase an SSL certificate for a domain that is not hosted with us. However, you need to add the domain to your account in order to be able to request the certificate. You also need a valid, active subscription.

    Follow the instructions in [Getting Started](/articles/getting-started-ssl-certificates). When you are asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

    If you're getting a free [Let's Encrypt certificate](/articles/letsencrypt), you must have the domain hosted with us so we can set up the required records for domain-based validation.

1. #### How do CAA records affect purchasing SSL certificates?

    If you have [CAA Records](/articles/caa-record) already set up, or you want to use them, you need to add the appropriate record for Sectigo or Let's Encrypt before you purchase the SSL certificate. Please see [this support document](/articles/caa-record#caa-record-usage) for more details.
</div>


## Certificate Types

<div class="section-faq" markdown="1">
1.  #### What type of SSL certificates does DNSimple provide?

    We provide different types of _domain-validated_ [SSL certificates](/articles/ssl-certificates), signed by globally recognized [certificate authorities](/articles/what-is-certificate-authority). We don't provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates.

    To learn more, visit [SSL Certificates](/articles/ssl-certificates).

1.  #### What certificates show the company name in the green bar near the padlock?

    The green bar in the browser is displayed only if you purchase an _extended-validation_ (EV) certificate. We don't sell EV certificates.

    We only sell DV certificates. These are less expensive than EV certificates and offer the same cryptographic level of security.
</div>


## Certificate Procedures

<div class="section-faq" markdown="1">
1.  #### How long does it take to issue an SSL certificate?

    Issuing a new SSL certificate can take anywhere from a few minutes to a few hours. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate).

1.  #### Does renewing a certificate update the one I have installed?

    No. After renewing or purchasing a new certificate you need to install the updated files on your server(s). You can automate this using [webhooks and our api](https://developer.dnsimple.com), but we don't have access to your systems to update your certificates for you.
</div>
