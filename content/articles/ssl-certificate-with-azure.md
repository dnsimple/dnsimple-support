---
title: How to Install an SSL Certificate on Microsoft Azure
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on Azure, and configure your Azure application.
meta: Follow these steps to obtain an SSL certificate from DNSimple and install it on your Microsoft Azure application to enable HTTPS.
categories:
- SSL Certificates
---

# How to Install an SSL Certificate on Microsoft Azure

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [Microsoft Azure](https://azure.microsoft.com/) to enable HTTPS on your Azure application. DNSimple also provides the [ALIAS feature](/articles/alias-record/) that is necessary if you want to point your root domain to Azure.

> [!TIP]
> Before you start, review [information and prices](/articles/ssl-certificates/) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates/).

## Obtain the SSL Certificate {#obtain}

If you have not already purchased an SSL certificate, follow [the guide to ordering an SSL certificate](/articles/buy-sectigo-ssl-certificate/). You can also use a free [Let's Encrypt certificate](/articles/get-lets-encrypt-certificate/). Once the certificate has been issued, return to this page for the installation steps.

## Install the SSL Certificate on Microsoft Azure {#install}

<div class="section-steps" markdown="1">
##### Steps to install the certificate on Azure

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header menu, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Select the SSL Certificates tab and click on the certificate you want to install.
1. Click <label>Install</label>.

    ![Click the Azure section](/files/certificate-installer-azure.png)

1. Click the **Azure** section in the installation wizard.
1. Follow the instructions presented by the wizard, which will provide the certificate files needed for Azure.
1. Upload the certificate to your Azure App Service or Azure resource through the Azure portal.
1. Configure the SSL binding in Azure to associate the certificate with your custom domain.

</div>

## Have more questions?

If you have additional questions or need any assistance installing your SSL certificate on Microsoft Azure, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
