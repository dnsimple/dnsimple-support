---
title: SSL Certificates with Azure
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Azure, and configure your Azure application.
categories:
- SSL Certificates
---

# SSL Certificates and Azure

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [Azure](https://azure.microsoft.com/) to enable HTTPS on your Azure application. DNSimple also provides the [ALIAS feature](/articles/alias-record/) that is necessary if you want to point your root domain to Azure.

This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Azure, and configure Azure to use the new SSL certificate with the appropriate domain.

<callout>
Before you start, please take a moment to review [information and prices](/articles/ssl-certificates) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates).
</callout>

## Obtain the SSL certificate

We have prepared [a guide to purchasing an SSL certificate](/articles/purchasing-ssl-certificates). Once you have followed that and the certificate has been issued, return to the certificate page for the next step.

## Install the SSL certificate on Azure

Open the certificate page and click <label>Install the SSL Certificate</label>.

![Click the Azure section](/files/certificate-installer-azure.png)

On that page, click the Azure section and follow the directions presented to you.
