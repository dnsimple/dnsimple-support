---
title: SSL Certificates with Windows
excerpt: This article provides step-by-step instructions to obtain a new SSL certificate via DNSimple and install it on Windows.
categories:
- SSL Certificates
---

# SSL Certificates and Windows

### Table of Contents {#toc}

* TOC
{:toc}

---

With DNSimple you can request an SSL certificate that you can install on Microsoft Windows to enable HTTPS for a site.


## Which server?

Microsoft Windows is an operating system. In order to use the SSL certificate and enable HTTPS for a site, you will have to obtain the SSL certificate and install it on a web server.

Microsoft Windows supports a large number of web servers. The most common are Microsoft IIS (available by default in most versions of Microsoft Windows), Apache, and NGINX.

We provide specific articles to request and install the SSL on the following web servers:

- [Microsoft IIS](/articles/ssl-certificate-with-microsoft-iis)
- [Apache](/articles/ssl-certificate-with-apache)
- [NGINX](/articles/ssl-certificate-with-nginx)

If your web server is not listed above, you can follow the generic instructions to [request an SSL certificate](/articles/purchasing-ssl-certificates) with DNSimple, [download the SSL certificate and install it](/articles/installing-ssl-certificate/#generic-installation-instructions) according to the web server instructions.

If you are using Microsoft Windows as operating system, but you are installing the certificate on a cloud service, then you may be interested in one of the following articles:

- [Heroku](/articles/ssl-certificate-with-heroku)
- [Microsoft Azure](/articles/ssl-certificate-with-azure)
