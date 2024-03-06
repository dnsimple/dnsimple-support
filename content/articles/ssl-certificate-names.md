---
meta: Guidelines and information for selecting the SSL certificate host names.
title: Choosing the SSL Certificate Names
excerpt: Guidelines and information for selecting the SSL certificate host names.
categories:
- SSL Certificates
---

# SSL Certificate Names

### Table of Contents {#toc}

* TOC
{:toc}

---

An SSL certificate is must be associated with one or more host names. Selecting the correct names is very important, because the certificate will be valid only if the request matches the host name (or host names) associated with the SSL certificate.

Moreover, it's not possible to change the name type of a certificate (e.g. switch from a single-name to a wildcard name) once the certificate has been issued.


## Single vs Multi names

You can associate the host names to an SSL certificate using two different attributes:

- the [Common Name](/articles/what-is-common-name)
- the [Subject Alternative Name](/articles/what-is-ssl-san) (SAN)

The Common Name allows specifying a single entry (either a wildcard or single-name), whereas the SAN extension supports multiple entries. However, the SAN is only supported by certain [SSL certificate products](/articles/ssl-certificates).

At DNSimple we like to simplify your experience, therefore we hid the technical details and implementation behind a simple interface. We won't ask you to select when to use the Common Name or the SAN. Instead, whenever you are allowed to enter multiple names for an SSL certificate, you will be provided a field to enter the list of names.

Additionally, to simplify the interface, we will use the generic term "host names" (sometimes "hostnames" or "domains") to represent the host names attached to a certificate, regardless of whether they will be attached to the certificate via Common Name or SAN.


## Single-name vs Wildcard

Before you request an SSL certificate you need to understand the difference between a single-name and a wildcard certificate. This is important because it will affect which domains you will be able to cover with a single certificate.

### Single-name SSL certificate

The single name certificate is valid only for the hostname specified with the certificate.

For example, if you purchase a certificate for the hostname `secure.example.com`, you can't use it for `www.example.com` or `example.com`. Any attempt to serve these hostnames with the certificate will result in a security warning in most browsers.

The only exception is the root domain, if you purchase a certificate for the www-hostname, as described below.

### Wildcard SSL certificate

The wildcard certificate is valid only at a single level sub-domain. You use the wildcard "`*`" symbol to indicate the sub-domain.

For example, if you purchase a wildcard certificate for `*.example.com`, you can use it in any `example.com` first-level subdomain such as `www.example.com`, `secure.example.com` or `private.example.com`. However, you can't use it for `www.secure.example.com` or `super.secure.example.com`.


## Root domain

Both single name and wildcard certificates can be used on the root domain (e.g. `example.com`) at the following conditions:

- For the single name certificate you must purchase a certificate for the www-hostname (e.g. `www.example.com`). If you purchase a certificate for the root domain you will not be able to use it for the www hostname.
- For the wildcard certificate you must purchase a certificate for the third level domain pattern (e.g. `*.example.com`).
