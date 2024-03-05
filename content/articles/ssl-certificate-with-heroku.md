---
meta: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Heroku, and configure your Heroku application.
title: SSL Certificates with Heroku
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Heroku, and configure your Heroku application.
categories:
- SSL Certificates
- Integrations
---

# SSL Certificates and Heroku

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [Heroku](https://heroku.com/) to enable HTTPS on your Heroku application. DNSimple also provides the [ALIAS feature](/articles/alias-record) that is necessary if you want to [point your root domain to Heroku](https://support.dnsimple.com/articles/domain-apex-heroku/), as [explained](https://devcenter.heroku.com/articles/ssl-endpoint#root-domain) in the official Heroku documentation.

This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Heroku, and configure Heroku to use the new SSL certificate with the appropriate domain.

<tip>
Before you start, please take a moment to review [information and prices](/articles/ssl-certificates) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates).
</tip>


## Obtain the SSL certificate

We have prepared [a guide to purchasing an SSL certificate](/articles/purchasing-ssl-certificates). Once you have followed that and the certificate has been issued, return to the certificate page for the next step.

## Install the SSL certificate on Heroku

Open the certificate page and click <label>Install the SSL Certificate</label>.

![Click the Heroku section](/files/certificate-installer-heroku.png)

On that page, click the Heroku section and follow the directions presented to you.
