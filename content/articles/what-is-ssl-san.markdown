---
title: What is the Subject Alternative Name (SAN)?
excerpt: The Subject Alternative Name (SAN) is an extension to the X.509 specification that allows to specify additional host names for a single SSL certificate.
categories:
- SSL Certificates
---

# What is the SSL Certificate Subject Alternative Name?

The **Subject Alternative Name** (SAN) is an extension to the X.509 specification that allows to specify additional host names for a single SSL certificate.

## Background

The X.509 specifications regulate the _Internet X.509 Public Key Infrastructure Certificate_, which includes the SSL certificates format. Originally, SSL certificates only allowed to specify a single host name in the certificate subject called [Common Name](/articles/what-is-common-name).

The common name represents the fully qualified domain name that is covered by the SSL certificate. Trying to use the certificate for a website that doesn't match the common name will result in a security error, also known as _host name mismatch_ error. 

Later after the original specificaton, it became clear that it would be helpful to have a single certificate to cover multiple host names. The most common example is the case of a single certificate that covers both the root domain and the www subdomain. In fact, it's very common to reuse the same SSL certificate for `example.com` and `www.example.com`.

The X.509 specification allows to define extensions to be attached to a [Certificate Signing Request (CSR)](/articles/what-is-csr) and the final server certificate. Using the SAN extension it's possible to specify several host names in the `subjectAltName` field of a certificate, each of these names will be considered protected by the SSL certificate.

## What is a SAN certificate

In practice, when using the term SAN certificates, we are referring to an SSL certificate that has the ability to cover multiple host names (domains), also called [multi-domain SSL certificate](/articles/ssl-certificates-types/#multi-domain-ssl-certificates).

There is no specific limitation on the host names you can cover by a SAN extension, besides the requirement to be syntactically valid host names (further details are available in the [RFC](https://tools.ietf.org/html/rfc6818)). However, certificate authorities may impose further limitations on number or formats based on internal rules or business decisions.

For example, it's common practice to disallow arbitrary wildcard names as SAN host names. This means SAN certificates generally support only an enumeration of names.

It's also quite common to encounter a limit on the number of names per certificate. The common practice is to limit up to 100 names per certificate.  

Finally, names are generally not required to belong to the same domain. In other words, it's perfectly fine for a certificate to cover a list of names like the following one:

```
example.com
www.example.com
foo.bar.hello.com
another.domain.com
```

## SAN Certificates and DNSimple

DNSimple provides SAN SSL certificates issued by the [Let's Encrypt](/articles/letsencrypt) certification authority.
