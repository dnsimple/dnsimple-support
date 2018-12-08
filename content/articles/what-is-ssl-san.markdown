---
title: What is the Subject Alternative Name (SAN)?
excerpt: The Subject Alternative Name (SAN) is an extension to the X.509 specification that allows to specify additional host names for a single SSL certificate.
categories:
- SSL Certificates
---

# What is the SSL Certificate Subject Alternative Name?

### Table of Contents {#toc}

* TOC
{:toc}

---

The **Subject Alternative Name** (SAN) is an extension to the X.509 specification that allows users to specify additional host names for a single SSL certificate. The use of the SAN extension is standard practice for SSL certificates, and it's on its way to [replacing the use of the common name](/articles/what-is-common-name/#common-name-vs-subject-alternative-name).

## SAN certificates

A **SAN certificate** is a term often used to refer to a [multi-domain SSL certificate](/articles/ssl-certificates-types/#multi-domain-ssl-certificates). An SSL certificate with more than one name is associated using the SAN extension.

There's a subtle difference though. When using the term 'multi-domain certificates', we're generally referring to an SSL certificate that has the ability to cover multiple host names (domains). If we use the term 'SAN certificates', we're probably referring to a particular certificate that includes any name in the SAN extension.

From a technical standpoint, every certificate issued today is effectively a SAN certificate, as the CA/B forum requires the certification authority to add the content of the common name to the SAN as well. Even if the certificate covers a single name, it will still use the SAN extension and include that single name.

In practice, the terms 'SAN certificates' and 'multi-domain certificates' are synonymous, and generally indicate a certificate product where issuers can associate more than one domain by specifying the content of the SAN (directly or indirectly). These certificates are often marketed as "special" and priced differently than standard certificates, because you can associate more than one name.

## SAN restrictions

There's no specific limitation on the host names you can cover with a SAN extension, besides the requirement to be syntactically valid host names (further details are available in the [RFC](https://tools.ietf.org/html/rfc6818)). However, certificate authorities may impose further limitations on the number or formats based on internal rules or business decisions.

For example, it's common practice to disallow arbitrary wildcard names as SAN host names. This means SAN certificates generally support only a specific list of names.

It's also common to encounter a limit on the number of names per certificate, usually up to 100.  

Finally, names are generally not required to belong to the same domain. It's fine for a certificate to cover a list of names like this:

```
example.com
www.example.com
foo.bar.hello.com
another.domain.com
```

## SAN certificates and DNSimple

DNSimple provides SAN SSL certificates issued by the [Let's Encrypt](/articles/letsencrypt) certification authority.

For current platform limitation, all the names must belong to the same domain:

```
example.com
www.example.com
mail.example.com
foo.bar.example.com
```

## Background

The X.509 specifications regulate the _Internet X.509 Public Key Infrastructure Certificate_, which includes the SSL certificates format. Originally, SSL certificates only allowed the designation of a single host name in the certificate subject called [Common Name](/articles/what-is-common-name).

The common name represents the host name that's covered by the SSL certificate. Trying to use the certificate for a website that doesn't match the common name will result in a security error, also known as _host name mismatch_ error. 

After the original specificaton, it became clear it would be helpful to have a single certificate to cover multiple host names. The most common example is a single certificate covering both the root domain and the www subdomain. In fact, it's common to reuse the same SSL certificate for `example.com` and `www.example.com`.

The X.509 specification allows users to define extensions to be attached to a [Certificate Signing Request (CSR)](/articles/what-is-csr) and the final server certificate. Using the SAN extension, it's possible to specify several host names in the `subjectAltName` field of a certificate. Each of these names will be considered protected by the SSL certificate.
