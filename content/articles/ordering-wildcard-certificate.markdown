---
title: Ordering a Wildcard SSL Certificate
excerpt: How to order a wildcard SSL certificate with DNSimple.
categories:
- SSL Certificates
---

# Ordering a Standard SSL Certificate

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

## Let's Encrypt or Standard

Both providers support wildcard certificates. Let's Encrypt certificates are free, but are only valid for a short period. Comodo certificates are valid for much longer, but also come with a cost per wildcard certificate.

You can learn more about the differences between standard and Let's Encrypt certificates in the corresponding [article](/articles/standard-vs-letsencrypt/).

<info>
Let's Encrypt wildcard certificates are only available on [specific plans](https://dnsimple.com/pricing).
</info>

## Use * for a wildcard certificate

To include any subdomain in a certificate, you need to use an asterisk `*` as the subdomain.

### Let's Encrypt

Here's how to [order a wildcard for Let's Encrypt](/articles/ordering-lets-encrypt-certificate/).

### Standard

Here's how to [order a wildcard for Standard](/articles/ordering-standard-certificate/).

## Install the certificate

To learn how to install the certificate, take a look at [Installing an SSL Certificate](/articles/installing-ssl-certificate/).
