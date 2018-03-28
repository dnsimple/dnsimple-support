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

We offer different types of _domain-validated_ SSL certificates, signed by globally recognized [certificate authorities](/articles/ssl-certificate-authorities).

<callout>
#### Getting started with SSL certificates

Are you buying an SSL certificate for the first time? We assembled a [getting started with SSL Certificates](/articles/getting-started-ssl-certificates) article that will guide you through the entire process.
</callout>


## SSL certificate products

There are several types of SSL Certificates. They are generally classified by _validation type_ or _secured domains_. If you are not familiar with the differences, take a look at the [SSL certificate types](/articles/ssl-certificates-types) article.

DNSimple currently provides the following certificate products:

1. [Standard Single-name SSL certificate](#standard-singlename)
1. [Standard Wildcard SSL certificate](#standard-wildcard)
1. [Let's Encrypt SSL certificate](#letsencrypt)

All SSL certificates are issued by globally recognized [certificate authorities](/articles/what-ssl-certificate-authorities).

<callout>
All certificates are [domain-validated](/articles/ssl-certificates-email-validation). We don't provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates. If you need/want to purchase an EV certificate, we provide a recommendation at [this page](/articles/can-ev-ssl-certificates).
</callout>

### Standard Single-name SSL certificates {#standard-singlename}

The single-name certificate is a **single-name**, **domain-validated** certificate. It covers one host and the root domain in case of the [www hostname](/articles/ssl-certificate-names).

The certificate is issued by **Comodo** and it costs **$20 per year**. The name of the product name is _Comodo EssentialSSL_ certificate.

### Standard Wildcard SSL certificates {#standard-wildcard}

The wildcard certificate is a **wildcard-name**, **domain-validated** certificate. It covers all [single-level subdomains](/articles/ssl-certificate-names) as well as the root domain.

The certificate is issued by **Comodo** and it costs **$100 per year**. The name of the product is _Comodo EssentialSSL Wildcard_ certificate.

### Let's Encrypt SAN SSL certificates {#letsencrypt}

The Let's Encrypt certificate is a **multi-name (SAN)**, **domain-validated certificate**. It covers all the host names explicitly specified in the certificate.

The certificate is issued by **Let's Encrypt** and it's free of charge. However, certain characteristics or requirements of this certificate may make this product unsuitable for you. [Learn more](/articles/letsencrypt#products)

<note>
The ability to customize the names associated with a Let's Encrypt certificate depends on the plan you are subscribed to. Please check the [plans and pricing page](https://dnsimple.com/pricing) to view all options.
</note>

### What's a "Standard" Certificate Authority? {#standard-certificate}

You may have noticed we used the term _standard_ in our documentation when referring to some specific product types. Let's Encrypt has represented a big shift in the certificate authority field, in terms of offering, pricing, and automation. Traditionally, certificate authorities have been offering yearly certificates, they charged an issuance fee, and the domain validation was generally performed manually via email.

With the term _Standard_ we refer to traditional certificate authorities. We expect the difference between traditional authorities and Let's Encrypt to be somehow reduced in the future. For example, some authorities are already working to expose a more automated validation flow.

It's important to mention that there is nothing bad in being a "Standard" authority, nor in buying a "Standard" certificate. It's just a term we used at DNSimple to simplify the workflow.


## Manage SSL certificates

You can purchase and manage SSL certificates from the your domain page. Go to the domain page and scroll down until you find the SSL certificate section.

![SSL Certificate section](/files/domain-ssl-certificates-section.png)

If the domain is not in your DNSimple account because you just joined DNSimple or because it is registered elsewhere, it's not a problem: just [add the domain to your account](/articles/adding-domain) and follow the same procedure.

<div class="section-steps" markdown="1">
##### To go to the SSL certificate section

1.  Log into DNSimple with your user credentials.
1.  Click on your avatar on the top-right, and on the drop-down menu select the account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section.
</div>

From the certificate section you can [purchase an new SSL certificate](/articles/purchasing-ssl-certificates), [renew an existing SSL certificate](/articles/renewing-ssl-certificate) or view and install the SSL certificate.


## SSL certificate Frequently Asked Questions

The [SSL Certificate frequently asked questions](/articles/faq-ssl-certificates) page contains the most common questions about DNSimple SSL certificates.
