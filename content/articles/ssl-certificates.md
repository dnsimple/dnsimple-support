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

TLS (Transport Layer Security) and its predecessor, SSL (Secure Sockets Layer), are security protocols designed to secure the communication between a server and a client, for example, a web server and a browser. Both protocols are frequently referred to as _SSL_.

A TLS/SSL certificate (simply called _SSL certificate_) is required to enable SSL/TLS on your site and serve your website using the secure HTTPS protocol.

We offer different types of _domain-validated_ SSL certificates signed by globally recognized [certificate authorities](/articles/ssl-certificate-authorities).

<tip>
#### Getting started with SSL certificates

Are you buying an SSL certificate for the first time? We assembled a [getting started with SSL Certificates](/articles/getting-started-ssl-certificates) article to guide you through the entire process.
</tip>


## SSL certificate products

There are several types of SSL Certificates. They're generally classified by _validation type_ or _secured domains_. If you aren't familiar with the differences, take a look at the [SSL certificate types](/articles/ssl-certificates-types) article.

DNSimple provides the following certificate products:

1. [Standard Single-name SSL certificate](#standard-singlename)
1. [Standard Wildcard SSL certificate](#standard-wildcard)
1. [Let's Encrypt SSL certificate](#letsencrypt)
1. [Let's Encrypt Wildcard SSL certificate](#letsencrypt-wildcard)

All SSL certificates are issued by globally recognized [certificate authorities](/articles/what-ssl-certificate-authorities).

<info>
All certificates are [domain-validated](/articles/ssl-certificates-email-validation). We don't provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates.
</info>

### Standard Single-name SSL certificates {#standard-singlename}

The single-name certificate is a **single-name**, **domain-validated** certificate. It covers one host and the root domain in case of the [www hostname](/articles/ssl-certificate-names).

The certificate is issued by **Sectigo** and it costs **$20 per year**. The product name is _Sectigo PositiveSSL_ certificate.

### Standard Wildcard SSL certificates {#standard-wildcard}

The wildcard certificate is a **wildcard-name**, **domain-validated** certificate. It covers all [single-level subdomains](/articles/ssl-certificate-names), as well as the root domain.

The certificate is issued by **Sectigo** and it costs **$100 per year**. The product name is _Sectigo PositiveSSL Wildcard_ certificate.

### Let's Encrypt SAN SSL certificates {#letsencrypt}

The Let's Encrypt certificate is a **multi-name (SAN)**, **domain-validated certificate**. It covers all the host names specified in the certificate.

The certificate is issued by **Let's Encrypt**, and it's free. However, certain characteristics or requirements of this certificate may make this product unsuitable for you. [Learn more](/articles/letsencrypt#products)

<info>
The ability to customize the names associated with a Let's Encrypt certificate depends on the plan you're subscribed to. Please check the [plans and pricing page](https://dnsimple.com/pricing) to view all your options.
</info>

### Let's Encrypt Wildcard SSL certificates {#letsencrypt-wildcard}

The Let's Encrypt wildcard certificate is a **wildcard-name**, **domain-validated certificate**. It covers all [single-level subdomains](/articles/ssl-certificate-names) of a domain name. It **does not** cover the root domain.

The certificate is issued by **Let's Encrypt**, and it's free. However, certain characteristics or requirements of this certificate may make this product unsuitable for you. [Learn more](/articles/letsencrypt#products)

<info>
Let's Encrypt wildcard certificates are only available on certain plans. Please check the [plans and pricing page](https://dnsimple.com/pricing) to view all your options.
</info>

### What's a "Standard" Certificate Authority? {#standard-certificate}

You may have noticed we use the term _standard_ in our documentation when referring to some specific product types. Let's Encrypt has represented a big shift in the certificate authority field in terms of offering, pricing, and automation. Traditionally, certificate authorities have offered yearly certificates. They charged an issuance fee, and the domain validation was generally performed manually via email.

With the term _Standard_, we refer to traditional certificate authorities. We expect the difference between traditional authorities and Let's Encrypt to be reduced in the future. For example, some authorities are already working to expose a more automated validation flow.

There's nothing negative about being a "Standard" authority, nor about buying a "Standard" certificate. It's just a term we use at DNSimple to simplify the workflow.

## Manage SSL certificates

You can purchase and manage SSL certificates from your domain page. Go to the domain page and scroll down until you find the SSL certificate section.

![SSL Certificate section](/files/domain-ssl-certificates-section.png)

If the domain is not in your DNSimple account because you just joined DNSimple or because it is registered elsewhere, it's not a problem - just [add the domain to your account](/articles/adding-domain) and follow the same procedure.

<div class="section-steps" markdown="1">
##### To go to the SSL certificate section

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section.
</div>

From the certificate section you can [purchase an new SSL certificate](/articles/purchasing-ssl-certificates), [renew an existing SSL certificate](/articles/renewing-ssl-certificate) or view and install the SSL certificate.


## SSL certificate Frequently Asked Questions

The [SSL Certificate frequently asked questions](/articles/faq-ssl-certificates) page contains the most common questions about DNSimple SSL certificates.
