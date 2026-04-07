---
title: How to Install an SSL Certificate on Windows
excerpt: How to identify your web server on Windows and follow the appropriate SSL certificate installation guide.
meta: Learn how to install an SSL certificate on a Windows server by identifying your web server software and following the appropriate installation guide from DNSimple.
categories:
- SSL Certificates
---

# How to Install an SSL Certificate on Windows

### Table of Contents {#toc}

* TOC
{:toc}

---

Microsoft Windows supports several web servers. To install an SSL certificate, you need to identify which web server you are running and follow the corresponding installation guide.

## Identify Your Web Server and Install the Certificate {#identify-and-install}

<div class="section-steps" markdown="1">
##### Steps to install an SSL certificate on Windows

1. Determine which web server software is running on your Windows server:

    - **Microsoft IIS** (Internet Information Services) is the default web server included with most versions of Windows Server.
    - **Apache** is an open-source web server commonly installed on Windows via XAMPP, WampServer, or standalone.
    - **NGINX** is a high-performance web server that can also run on Windows.

1. Follow the installation guide for your web server:

    - [How to Install an SSL Certificate on Microsoft IIS](/articles/ssl-certificate-with-microsoft-iis/)
    - [How to Install an SSL Certificate on Apache](/articles/ssl-certificate-with-apache/)
    - [How to Install an SSL Certificate on NGINX](/articles/ssl-certificate-with-nginx/)

1. If your web server is not listed above, follow the generic instructions to [request an SSL certificate](/articles/ordering-standard-certificate/) with DNSimple, then [download and install the certificate](/articles/installing-ssl-certificate/#generic-installation-instructions) according to your web server's documentation.

</div>

## Cloud Service Providers {#cloud-providers}

If you are running Windows as the operating system but hosting your application on a cloud platform, follow the platform-specific guide instead:

- [How to Install an SSL Certificate on Heroku](/articles/ssl-certificate-with-heroku/)
- [How to Install an SSL Certificate on Microsoft Azure](/articles/ssl-certificate-with-azure/)

## Have more questions?

If you have additional questions or need any assistance installing your SSL certificate on Windows, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
