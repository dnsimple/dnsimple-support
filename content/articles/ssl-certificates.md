---
title: SSL/TLS Certificates
excerpt: Information about purchasing and managing an SSL/TLS certificate with DNSimple.
meta: DNSimple SSL certificate products, including Sectigo and Let's Encrypt options, pricing, validation methods, and certificate management for your domains.
categories:
- SSL Certificates
- Enterprise
---

# SSL/TLS Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

TLS (Transport Layer Security) and its predecessor, SSL (Secure Sockets Layer), are security protocols designed to secure the communication between a server and a client, for example, a web server and a browser. Both protocols are frequently referred to as _SSL_. For a closer look at how this encryption process works, see [How HTTPS Works](/articles/how-https-works/).

A TLS/SSL certificate (simply called _[SSL certificate](/articles/what-is-ssl-certificate/)_) is required to enable SSL/TLS on your site and serve your website using the secure HTTPS protocol.

We offer different types of _domain-validated_ SSL certificates signed by globally recognized [certificate authorities](/articles/ssl-certificate-authorities/).

> [!TIP] Getting started with SSL certificates
> Are you buying an SSL certificate for the first time? We assembled a [getting started with SSL Certificates](/articles/getting-started-ssl-certificates/) article to guide you through the entire process. You can also read about the [SSL certificate lifecycle](/articles/ssl-certificate-lifecycle/) to understand how each stage -- from ordering to renewal -- fits together.

## SSL Certificate Products {#ssl-certificate-products}

There are several types of SSL Certificates. They are generally classified by _validation type_ or _secured domains_. If you are not familiar with the differences, take a look at the [SSL certificate types](/articles/ssl-certificates-types/) article.

DNSimple provides the following certificate products:

1. [Sectigo Single-name SSL certificate](#sectigo-singlename)
1. [Sectigo Wildcard SSL certificate](#sectigo-wildcard)
1. [Let's Encrypt SSL certificate](#letsencrypt)
1. [Let's Encrypt Wildcard SSL certificate](#letsencrypt-wildcard)

All SSL certificates are issued by globally recognized [certificate authorities](/articles/ssl-certificate-authorities/).

> [!NOTE]
> All certificates are [domain-validated](/articles/ssl-certificates-types/). We do not provide _organization-validated_ (OV) or _extended-validation_ (EV) SSL certificates.

For a side-by-side comparison of features, validation methods, and pricing, see [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/).

### Sectigo Single-Name SSL Certificates {#sectigo-singlename}

The single-name certificate is a **single-name**, **domain-validated** certificate. It covers one host and the root domain in case of the [www hostname](/articles/ssl-certificate-names/).

The certificate is issued by **Sectigo** and it costs **$20 per year**. The product name is _Sectigo PositiveSSL_ certificate.

### Sectigo Wildcard SSL Certificates {#sectigo-wildcard}

The wildcard certificate is a **wildcard-name**, **domain-validated** certificate. It covers all [single-level subdomains](/articles/ssl-certificate-names/), as well as the root domain.

The certificate is issued by **Sectigo** and it costs **$100 per year**. The product name is _Sectigo PositiveSSL Wildcard_ certificate.

> [!NOTE]
> Starting March 15, 2026, Sectigo certificates are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity). You will need to purchase a new certificate before it expires to maintain uninterrupted coverage.

### Let's Encrypt SAN SSL Certificates {#letsencrypt}

The Let's Encrypt certificate is a **multi-name (SAN)**, **domain-validated certificate**. It covers all the host names specified in the certificate.

The certificate is issued by **Let's Encrypt**, and it is free. However, certain characteristics or requirements of this certificate may make this product unsuitable for you. [Learn more](/articles/letsencrypt/)

> [!NOTE]
> The ability to customize the names associated with a Let's Encrypt certificate depends on the plan you are subscribed to. Check the [plans and pricing page](https://dnsimple.com/pricing) to view all your options.

### Let's Encrypt Wildcard SSL Certificates {#letsencrypt-wildcard}

The Let's Encrypt wildcard certificate is a **wildcard-name**, **domain-validated certificate**. It covers all [single-level subdomains](/articles/ssl-certificate-names/) of a domain name. It **does not** cover the root domain.

The certificate is issued by **Let's Encrypt**, and it is free. However, certain characteristics or requirements of this certificate may make this product unsuitable for you. [Learn more](/articles/letsencrypt/)

> [!NOTE]
> Let's Encrypt wildcard certificates are only available on certain plans. Check the [plans and pricing page](https://dnsimple.com/pricing) to view all your options.

## Manage SSL Certificates {#manage}

You can purchase and manage SSL certificates from your domain page. Go to the domain page and scroll down until you find the SSL certificate section.

![SSL Certificate section](/files/domain-ssl-certificates-section.png)

If the domain is not in your DNSimple account because you just joined DNSimple or because it is registered elsewhere, just [add the domain to your account](/articles/adding-domain/) and follow the same procedure.

<div class="section-steps" markdown="1">
##### To Go to the SSL Certificate Section

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section.
</div>

From the certificate section you can [purchase a new SSL certificate](/articles/buy-sectigo-ssl-certificate/), [renew an existing SSL certificate](/articles/renew-ssl-certificate/), or view and install the SSL certificate.

## SSL Certificate Frequently Asked Questions {#faq}

The [SSL Certificate frequently asked questions](/articles/faq-ssl-certificates/) page contains the most common questions about DNSimple SSL certificates.

## Have more questions?

If you have any questions or need assistance, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
