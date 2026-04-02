---
title: How to Install an SSL Certificate on Heroku
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Heroku, and configure your Heroku application.
meta: Follow these steps to obtain an SSL certificate from DNSimple and install it on your Heroku application to enable HTTPS.
categories:
- SSL Certificates
- Integrations
---

# How to Install an SSL Certificate on Heroku

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [Heroku](https://heroku.com/) to enable HTTPS on your Heroku application. DNSimple also provides the [ALIAS feature](/articles/alias-record/) that is necessary if you want to [point your root domain to Heroku](/articles/domain-apex-heroku/), as [explained](https://devcenter.heroku.com/articles/ssl-endpoint#root-domain) in the official Heroku documentation.

> [!TIP]
> Before you start, review [information and prices](/articles/ssl-certificates/) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates/).

## Obtain the SSL Certificate {#obtain}

If you have not already purchased an SSL certificate, follow [the guide to ordering an SSL certificate](/articles/ordering-standard-certificate/). Once the certificate has been issued, return to this page for the installation steps.

## Install the SSL Certificate on Heroku {#install}

<div class="section-steps" markdown="1">
##### Steps to install the certificate on Heroku

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header menu, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Select the SSL Certificates tab and click on the certificate you want to install.
1. Click <label>Install</label>.

    ![Click the Heroku section](/files/certificate-installer-heroku.png)

1. Click the **Heroku** section in the installation wizard.
1. Follow the instructions presented by the wizard, which will provide the certificate files and Heroku CLI commands you need.
1. Use the Heroku CLI to upload the certificate and private key to your Heroku application.
1. Verify that your DNS records point to the correct Heroku SSL endpoint (ending in `herokudns.com` or `herokussl.com`), not the generic `herokuapp.com` endpoint.

</div>

> [!NOTE]
> If you encounter SSL errors after installation, see [Troubleshooting Heroku SSL Errors](/articles/heroku-error-ssl/) for common issues and solutions.

## Have more questions?

If you have additional questions or need any assistance installing your SSL certificate on Heroku, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
