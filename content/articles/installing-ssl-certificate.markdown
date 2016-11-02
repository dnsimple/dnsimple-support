---
title: Installing an SSL Certificate
excerpt: This article explains how to use the DNSimple SSL certificate installation wizard to install an SSL certificate in a few clicks on the most common web services and platforms.
categories:
- SSL Certificates
---

# Installing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---


## SSL certificate installation wizard

We've created a certificate installation wizard which is accessible from the main page for the domain on which you purchased the certificate.

<div class="section-steps" markdown="1">
##### To go to the SSL certificate page

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section and click on the relevant certificate.

    ![SSL certificate page link](/files/domain-view-ssl-certificate-link.png)

</div>

To install the certificate click on the <label>install the SSL certificate</label> link on the certificate page and follow the instructions.

![Install SSL certificate](/files/ssl-certificate-install-link.png)

## Specific installation instructions

Many platforms and servers have specific information about installation in that wizard. Specific information is in these articles:

- [Heroku](/articles/ssl-certificate-with-heroku#installation)
- [Azure](/articles/ssl-certificate-with-azure#installation)
- [NGINX](/articles/ssl-certificate-with-nginx#installation)
- [Apache](/articles/ssl-certificate-with-apache#installation)
- [Microsoft IIS](/articles/ssl-certificate-with-microsoft-iis#installation)

## Generic installation instructions

If you are not using one of the above servers or platforms you can still obtain many formats of your certificate in a generic form.

![Click the Other section](/files/certificate-installer-other.png)

## Downloading the SSL Certificate

The certificate should be available to download from the "Other" section in several formats. Specifically, a standard `.crt` file with the primary certificate, as well as `.pem` files for the intermediate certificates independently bundled and bundled with the primary certificate, are available to download from this section.

## Downloading the Private Key

The private key of your certificate will be available to download from this section as well as from the main certificate page. Keep in mind that if you have provided your own CSR or if you have deleted the private key from our servers, you will no longer be able to download it and some features of the installation wizard will no longer work either.
