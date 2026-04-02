---
title: How to Install an SSL Certificate on NGINX
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple, install it on NGINX, and configure the NGINX host.
meta: Follow these steps to obtain an SSL certificate from DNSimple and install it on your NGINX web server to enable HTTPS.
categories:
- SSL Certificates
---

# How to Install an SSL Certificate on NGINX

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on [NGINX](https://www.nginx.com/resources/wiki/) to enable HTTPS for a site.

> [!TIP]
> Before you start, review [information and prices](/articles/ssl-certificates/) about our SSL certificates. Most common questions are answered in the [SSL certificates FAQ](/articles/faq-ssl-certificates/).

## Obtain the SSL Certificate {#obtain}

If you have not already purchased an SSL certificate, follow [the guide to ordering an SSL certificate](/articles/ordering-standard-certificate/). You can also use a free [Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/). Once the certificate has been issued, return to this page for the installation steps.

## Install the SSL Certificate on NGINX {#install}

<div class="section-steps" markdown="1">
##### Steps to install the certificate on NGINX

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header menu, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Select the SSL Certificates tab and click on the certificate you want to install.
1. Click <label>Install</label>.

    ![Click the NGINX section](/files/certificate-installer-nginx.png)

1. Click the **NGINX** section in the installation wizard.
1. Follow the instructions presented by the wizard, which will provide the certificate files and NGINX configuration directives you need.
1. Copy the provided certificate bundle and private key files to your NGINX server.
1. Update your NGINX server block configuration to reference the certificate files, then reload NGINX to apply the changes.

</div>

## Have more questions?

If you have additional questions or need any assistance installing your SSL certificate on NGINX, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
