---
title: Ordering a Wildcard SSL Certificate
excerpt: How to order a wildcard SSL certificate with DNSimple.
meta: Learn how to easily order a wildcard SSL certificate with DNSimple to secure all subdomains under your domain, enhancing your website's security and credibility.
categories:
- SSL Certificates
- Enterprise
---

# Ordering a Wildcard SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

Wildcard certificates allow you to secure an unlimited number of names belonging to a single subdomain level. Wildcard certificates can make certificate management easier in some cases. However, you should avoid them unless you have a specific need, such as multi-tenant applications.

Wildcard certificates are no different from single name certificates. They contain an `*` as the hostname.

```
    APEX (root) Domain
      _____|____
     /          \
   *.dnsimple.com
   |
wildcard
```

> [!WARNING]
> When ordering a Let's Encrypt wildcard SSL certificate, the wildcard (*) will _only_ secure subdomains. A wildcard certificate cannot secure the root (such as example.com). If you want to secure both the root domain and subdomains with Let's Encrypt, you will need to [order an additional certificate](/articles/getting-started-ssl-certificates/).

## Let's Encrypt or Standard

Both providers support wildcard certificates. Let's Encrypt certificates are free, but are valid for 90 days. Sectigo certificates are valid for longer (200 days as of March 2026), but come with a cost per wildcard certificate.

You can learn more about the differences between standard and Let's Encrypt certificates in the corresponding [article](/articles/standard-vs-letsencrypt/).

> [!NOTE]
> Let's Encrypt wildcard certificates are available only on certain plans. [See the differences between plans](/articles/dnsimple-plans/).

## Use * for a wildcard certificate

To include any subdomain in a certificate, you need to use an asterisk `*` as the subdomain.

![Order overview for Let's Encrypt wildcard certificate](/files/lets-encrypt-wildcard-order.png)

### Let's Encrypt

To order a Let's Encrypt wildcard certificate, follow the instructions to [order a Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/).

When the certificate form requests the _name_, use the `*` char to represent the subdomain level you want to request the certificate for.

For instance, to request a certificate for `*.example.com`, just enter `*`. To request a certificate for `*.app.example.com`, enter `*.app`.

> [!NOTE]
> If your plan supports multiple names (SAN), you can add more than one certificate name in the same certificate.


### Standard

To order a Sectigo wildcard certificate, follow the instructions to [order a Standard certificate](/articles/ordering-standard-certificate/).

When the certificate form requests the _common name_, use the `*` char to represent the subdomain level you want to request the certificate for.

For instance, to request a certificate for `*.example.com`, just enter `*`. To request a certificate for `*.app.example.com`, enter `*.app`.

> [!NOTE]
> Standard wildcard certificates support only one wildcard per certificate.


## Install the certificate

To learn how to install the certificate, take a look at [Installing an SSL Certificate](/articles/installing-ssl-certificate/).
