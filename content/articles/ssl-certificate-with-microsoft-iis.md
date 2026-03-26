---
title: How to Install an SSL Certificate on Microsoft IIS
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple and install it on Microsoft Windows IIS.
meta: Follow these steps to obtain an SSL certificate from DNSimple and install it on Microsoft Windows IIS to enable HTTPS.
categories:
- SSL Certificates
---

# How to Install an SSL Certificate on Microsoft IIS

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [Microsoft IIS](http://www.iis.net/) on Windows to enable HTTPS for a site.

> [!TIP]
> Before you start, review [information and prices](/articles/ssl-certificates/) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates/).

## Obtain the SSL Certificate

If you have not already purchased an SSL certificate, follow [the guide to ordering an SSL certificate](/articles/ordering-standard-certificate/). Once the certificate has been issued, return to this page for the installation steps.

## Install the SSL Certificate on IIS

<div class="section-steps" markdown="1">
##### Steps to install the certificate on IIS

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header menu, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Select the SSL Certificates tab and click on the certificate you want to install.
1. Click <label>Install</label>.

    ![Click the IIS section](/files/certificate-installer-iis.png)

1. Click the **IIS** section in the installation wizard.
1. Follow the instructions presented by the wizard, which will provide the `.PFX` bundle for download.
1. Download the `.PFX` file to your Windows server.
1. Open IIS Manager, import the `.PFX` file through Server Certificates, and bind it to your site using the HTTPS binding.

</div>

## Have More Questions?

If you have additional questions or need any assistance installing your SSL certificate on Microsoft IIS, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
