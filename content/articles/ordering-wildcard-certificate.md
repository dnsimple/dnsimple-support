---
title: Ordering a Wildcard SSL Certificate
excerpt: How to order a wildcard SSL certificate with DNSimple.
meta: Learn how to order a wildcard SSL certificate with DNSimple to secure all subdomains under your domain, with step-by-step instructions for both Let's Encrypt and Sectigo.
categories:
- SSL Certificates
- Enterprise
---

# Ordering a Wildcard SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

Wildcard certificates allow you to secure an unlimited number of names belonging to a single subdomain level. They contain an `*` as the hostname.

```
    APEX (root) Domain
      _____|____
     /          \
   *.dnsimple.com
   |
wildcard
```

## Before You Start

- Determine whether you need a **Let's Encrypt** (free, 90-day validity) or **Sectigo** (paid, 200-day validity as of March 2026) wildcard certificate. See [Sectigo vs Let's Encrypt](/articles/standard-vs-letsencrypt/) for a detailed comparison.
- Let's Encrypt wildcard certificates are available only on certain plans. [See the differences between plans](/articles/dnsimple-plans/).
- Sectigo wildcard certificates support only one wildcard name per certificate.

> [!WARNING]
> When ordering a Let's Encrypt wildcard SSL certificate, the wildcard (`*`) will only secure subdomains. A wildcard certificate cannot secure the root domain (such as `example.com`). If you want to secure both the root domain and subdomains with Let's Encrypt, you will need to [order an additional certificate](/articles/getting-started-ssl-certificates/).

## Ordering a Let's Encrypt Wildcard Certificate

<div class="section-steps" markdown="1">
##### Steps to order a Let's Encrypt wildcard certificate

1. Follow the instructions to [order a Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/).
1. When the certificate form requests the **name**, use the `*` character to represent the subdomain level you want the certificate to cover.

    - To request a certificate for `*.example.com`, enter `*`.
    - To request a certificate for `*.app.example.com`, enter `*.app`.

1. If your plan supports multiple names (SAN), you can add more than one certificate name in the same certificate.
1. Submit the order. DNSimple will automatically handle the DNS-based validation.

</div>

![Order overview for Let's Encrypt wildcard certificate](/files/lets-encrypt-wildcard-order.png)

## Ordering a Sectigo Wildcard Certificate

<div class="section-steps" markdown="1">
##### Steps to order a Sectigo wildcard certificate

1. Follow the instructions to [order a Sectigo certificate](/articles/ordering-standard-certificate/).
1. When the certificate form requests the **common name**, use the `*` character to represent the subdomain level you want the certificate to cover.

    - To request a certificate for `*.example.com`, enter `*`.
    - To request a certificate for `*.app.example.com`, enter `*.app`.

1. Complete the remaining order steps, including selecting the signature algorithm and submitting the order.
1. Complete [email-based domain validation](/articles/ssl-certificates-email-validation/) when prompted.

</div>

## Next Steps

Once your wildcard certificate has been issued, install it on your server:

- [Installing an SSL Certificate](/articles/installing-ssl-certificate/)
- [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/) to understand how wildcard names are matched

## Have More Questions?

If you have additional questions or need any assistance ordering a wildcard certificate, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
