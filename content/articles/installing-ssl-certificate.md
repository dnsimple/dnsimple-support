---
title: Installing an SSL Certificate
excerpt: Use the DNSimple SSL certificate installation wizard to install your certificate on the most common web servers and platforms in a few clicks.
meta: Use the DNSimple SSL certificate installation wizard to install your SSL certificate on Apache, NGINX, IIS, Heroku, Azure, and other platforms.
categories:
- SSL Certificates
---

# Installing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate installation wizard that guides you through installing your certificate on the most common web servers and platforms.

## Using the SSL Certificate Installation Wizard {#installation-wizard}

<div class="section-steps" markdown="1">
##### Steps to access the installation wizard

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header menu, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Select the SSL Certificates tab and click on the relevant certificate.

    ![SSL certificate page link](/files/dnsimple-domain-certificates-list.png)

1. Click <label>Install</label> on the certificate page.

    ![Install SSL certificate](/files/ssl-certificate-install-link.png)

1. Select your server or platform from the wizard and follow the provided instructions.

</div>

## Platform-Specific Installation Guides {#platform-guides}

For detailed instructions for specific platforms, see:

- [How to Install an SSL Certificate on Apache](/articles/ssl-certificate-with-apache/)
- [How to Install an SSL Certificate on NGINX](/articles/ssl-certificate-with-nginx/)
- [How to Install an SSL Certificate on Microsoft IIS](/articles/ssl-certificate-with-microsoft-iis/)
- [How to Install an SSL Certificate on Heroku](/articles/ssl-certificate-with-heroku/)
- [How to Install an SSL Certificate on Microsoft Azure](/articles/ssl-certificate-with-azure/)
- [How to Install an SSL Certificate on Windows](/articles/ssl-certificate-with-windows/)

## Generic Installation Instructions {#generic-installation-instructions}

If you are not using one of the platforms listed above, you can obtain your certificate in several generic formats from the **Other** section of the installation wizard.

![Click the Other section](/files/certificate-installer-other.png)

## Downloading the SSL Certificate {#download-certificate}

The certificate is available to download from the "Other" section in several formats, including a standard `.crt` file with the primary certificate and `.pem` files for the intermediate certificates (both independently bundled and bundled with the primary certificate).

## Downloading the Private Key {#download-private-key}

The private key of your certificate is available to download from this section and from the main certificate page. If you provided your own CSR or deleted the private key from our servers, you will no longer be able to download it, and some features of the installation wizard will not work.

## Have more questions? {#more-questions}

If you have additional questions or need any assistance installing your SSL certificate, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
