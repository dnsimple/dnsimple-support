---
title: SSL Certificates Frequently Asked Questions
excerpt: This is a collection of frequently asked questions about the SSL certificates offered by DNSimple.
categories:
- SSL Certificates
---

# SSL Certificate FAQ

### Table of Contents {#toc}

* TOC
{:toc}

---

## Prices and Subscription

<div class="section-faq" markdown="1">
1.  #### What is the price of an SSL certificate?

    The price depends on the certificate type. To learn more visit the [SSL Certificates](/articles/ssl-certificates) article.

1.  #### I want to purchase an SSL certificate. What is the DNSimple subscription?

    DNSimple is a subscription-based service. You need an active subscription in our to use our platform and domain services.

    The subscription gives you access to the included platform services (such as the API access and the DNS hosting), and the paid products (such as the domain registration, SSL certificates, email forwarding, etc.).

1.  #### I want to purchase an SSL certificate. Do I need a subscription?

    Yes. As explained in the previous question, SSL certificates are one of our paid products, provided as part of our subscription service.

    In order to purchase an SSL certificate you need an active subscription at the time of the purchase. You are not required to have an active subscription to use or install the certificate on your domain/server, however please note that if you disable the subscription you will not receive any additional service for the domain or the certificate.

    You will also need a valid, active subscription when you renew the certificate, or if you want to reissue the certificate.

1.  #### I just want to purchase an SSL certificate, why do I need a subscription?

    As explained in the previous questions, we offer SSL certificate purchases as part of our subscription service.

    An SSL certificate is not a single-time purchase. You need to renew the certificate periodically, sometimes you need to rekey it or you find yourself having issues installing it, and you want to ask for some help. All these tasks are covered by our subscription service.

    Additionally, if you are requesting a [Let's Encrypt certificate](/articles/letsencrypt/), we will use our DNS hosting service to automatically provision the DNS records required to validate your certificate, and we will [automatically renew](/articles/letsencrypt/#auto-renewal) the certificate for you before it expires. All these services require a subscription.
</div>

## Domains and SSL certificates

<div class="section-faq" markdown="1">
1.  #### Do I need to transfer the domain to DNSimple to purchase an SSL certificate?

    No. You can purchase an SSL certificate for a domain that is not registered with us, without transferring it to us. However you will need to add the domain to your account in order to be able to request the certificate. You also need a valid, active subscription.

    Just follow the general instruction explained in the [Getting Started](/articles/getting-started-ssl-certificates) guide. When you are asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

1.  #### Do I need to host the domain with DNSimple to purchase an SSL certificate?

    Not for Codomo certificates. You can purchase an SSL certificate for a domain that is not hosted with us. However you will need to add the domain to your account in order to be able to request the certificate. You also need a valid, active subscription.

    Just follow the general instruction explained in the [Getting Started](/articles/getting-started-ssl-certificates) guide. When you are asked to add the domain to purchase the certificate, select the option to add a domain without transferring or registering it.

    If you are getting a free [Let's Encrypt certificate](https://support.dnsimple.com/articles/letsencrypt/) you will need to have the domain hosted with us in order for us to set up the required records for domain-based validation.

1. #### How do CAA records affect purchasing SSL certificates?

    If you have [CAA Records](https://support.dnsimple.com/articles/caa-record/) already set up, or you wish to use them, you will need to make sure to add the appropiate record for Codomo or Let's Encrypt before you purchase the SSL certificate. Please see [this support document](https://support.dnsimple.com/articles/caa-record/#caa-record-usage) for more details.
</div>


## Certificate Types

<div class="section-faq" markdown="1">
1.  #### What type of SSL certificates does DNSimple provide?

    We provide different types of _domain-validated_ [SSL certificates](/articles/ssl-certificates), signed by globally recognized [certificate authorities](/articles/what-is-certificate-authority). We don't provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates.

    To learn more visit the [SSL Certificates](/articles/ssl-certificates) article.

1.  #### What certificates show the company name in the green bar near the padlock?

    The green bar in the browser is displayed only if you purchase an _extended-validation_ (EV) certificate. We currently do not sell EV certificates.

    We currently only sell DV certificates. These are less expensive than EV certificates and offer the same cryptographic level of security. If you still need/want to purchase an EV certificate, we provide some recommendation at [this page](/articles/can-ev-ssl-certificates).
</div>


## Certificate Procedures

<div class="section-faq" markdown="1">
1.  #### How long does it take to issue an SSL certificate?

    In general, issuing a new SSL certificate can take from a few minutes to a few hours. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate).

1.  #### Does renewing a certificate update the one I have installed?

    No. After renewing or purchasing a new certificate you will need to install the updated files on your server(s). It is possible to automate this using [webhooks and our api](https://developer.dnsimple.com) but we do not have access to your systems to update your certificates for you.
</div>
