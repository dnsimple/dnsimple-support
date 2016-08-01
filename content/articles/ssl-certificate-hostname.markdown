---
title: Choosing the SSL Certificate Common Name
excerpt: Guidelines and information for selecting the SSL certificate common name.
categories:
- SSL Certificates
---

# Choosing the SSL Certificate Common Name

An SSL certificate is required to be associated with one or more hostnames, called [**common name**](/articles/what-is-common-name).

The common name determines which hostnames are covered by the certificate and must be selected at the time of the purchase. DNSimple provides both [single name and wildcard certificates](/articles/ssl-certificates).

## Single name certificate

The single name certificate is valid only for the hostname specified with the certificate.

For example, if you purchase a certificate for the hostname `secure.example.com`, you can't use it for `www.example.com` or `example.com`. Any attempt to serve these hostnames with the certificate will result in a security warning in most browsers.

The only exception is the root domain, in case you purchase a certificate for the www-hostname, as described below.

## Wildcard certificate

The wildcard certificate is valid only at a single level sub-domain. You use the wildcard "`*`" symbol to indicate the sub-domain.

For example, if you purchase a wildcard certificate for `*.example.com`, you can use it in any `example.com` first-level subdomain such as `www.example.com`, `secure.example.com` or `private.example.com`. However, you can't use it for `www.secure.example.com` or `super.secure.example.com`.

<note>
#### Securing the Root domain

Both single name and wildcard certificates can be used on the root domain (e.g. `example.com`) at the following conditions:

- For the single name certificate you must purchase a certificate for the www-hostname (e.g. `www.example.com`). If you purchase a certificate for the root domain you will not be able to use it for the www hostname.
- For the wildcard certificate you must purchase a certificate for the third level domain pattern (e.g. `*.example.com`).

</note>
