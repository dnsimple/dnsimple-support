---
title: SSL/TLS Certificates
excerpt: Information about purchasing and managing an SSL/TLS certificate with DNSimple.
categories:
- SSL Certificates
---

# SSL/TLS Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

TLS (Transport Layer Security) and its predecessor, SSL (Secure Sockets Layer) are security protocols designed to secure the communication between a server and a client, for example a web server and a browser. Both protocols are frequently simply referred to as _SSL_.

A TLS/SSL certificate (simply called _SSL certificate_) is required to enable SSL/TLS on your site and serve your website using the secure HTTPS protocol.

We offer different types of _domain-validated_ SSL certificates, signed by globally recognized [certificate authorities](/articles/what-ssl-certificate-authorities).

<callout>
#### Getting started with SSL certificates

Are you buying an SSL certificate for the first time? We assembled a [getting started with SSL Certificates](/articles/getting-started-ssl-certificates) article that will guide you through the entire process.
</callout>


## SSL certificate types

There are several types of SSL Certificates. They are generally classified by _validation type_ or _secured domains_. If you are not familiar with the differences, take a look at the [SSL certificate types](/articles/ssl-certificates-types) article.

DNSimple currently provides the following [domain-validated](/articles/ssl-certificates-email-validation) certificates:

- Single-name SSL certificates
- Wildcard SSL certificates

All SSL certificates are issued by globally recognized [certificate authorities](/articles/what-ssl-certificate-authorities).

<note>
We don't provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates. If you need/want to purchase an EV certificate, we provide some recommendation at [this page](/articles/can-ev-ssl-certificates).
</note>

### Single-name SSL certificates

The single-name certificate is a **domain-validated certificate**. It costs **$20 per year** and covers one host and the root domain in case of the [www hostname](/articles/ssl-certificate-hostname).

<callout>
The certificate is issued by Comodo, the name of the product is Comodo EssentialSSL certificate.
</callout>

### Wildcard SSL certificates

The wildcard certificate is a **domain-validated certificate**. It costs **$100 per year** and covers all [single-level subdomains](/articles/ssl-certificate-hostname) as well as the root domain.

<callout>
The certificate is issued by Comodo, the name of the product is Comodo EssentialSSL Wildcard certificate.
</callout>


## Manage SSL certificates

You can purchase and manage SSL certificates from the your domain page. Go to the domain page and scroll down until you find the SSL certificate section.

![SSL Certificate section](/files/domain-ssl-certificates-section.png)

If the domain is not in your DNSimple account because you just joined DNSimple or because it is registered elsewhere, it's not a problem: just [add the domain to your account](/articles/adding-domain) and follow the same procedure.

<div class="section-steps" markdown="1">
##### To go to the SSL certificate section

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section.
</div>

From the certificate section you can [purchase an new SSL certificate](/articles/purchasing-ssl-certificates), [renew an existing SSL certificate](/articles/renewing-ssl-certificates) or view and install the SSL certificate.


## SSL certficates FAQ

The [SSL Certificate frequently asked questions](/articles/faq-ssl-certificates) page contains the most common questions about DNSimple SSL certificates.

