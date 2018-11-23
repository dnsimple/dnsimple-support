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

Wildcard certificates allow you to secure all subdomains of a domain with a single certificate. Wildcard certificates can make certificate management easier in some cases. We still recommend non-wildcard certificates for most use cases.

Wildcard certificates are no different to standard certificates, they only contain an `*` as the subdomain, so please make sure to check out the article about [Ordering a Standard Certificate](/articles/ordering-standard-certificate/) too.


## Let's Encrypt or Standard

Both providers support wildcard certificates Let's Encrypt and Comodo. Let's Encrypt certificates are free but are only valid for 60 days, Comodo certificates are valid for one year or longer but also cost $100 per wildcard certificate.

You can learn more about the differences between standard and Let's Encrypt certificates in the corresponding [article](/articles/standard-vs-letsencrypt/).

<info>
Let's Encrypt wildcard certificates are only available on [specific plans](https://dnsimple.com/pricing).
</info>

## Use * for a wildcard certificate

To include any sub domain in a certificate you need to use an asterisk `*` as the subdomain.

![Let's Encrypt Wildcard](/files/le-wildcard.png)

<info>
Let's Encrypt certificates can cover multiple names, as well as multiple wilcard names like:
  - *.member.example.com
  - *.customer.example.com
</info>


## Install the certificate

Now you need to install the certificate; please follow the article about [Installing an SSL Certificate](/articles/installing-ssl-certificate/).
