---
title: Choosing the SSL Certificate Names
excerpt: Guidelines and information for selecting the SSL certificate host names.
meta: Learn how to choose the right host names for your SSL certificate, including when to use single-name, wildcard, and SAN certificates.
categories:
- SSL Certificates
---

# Choosing the SSL Certificate Names

### Table of Contents {#toc}

* TOC
{:toc}

---

An SSL certificate must be associated with one or more host names. Selecting the correct names is important because the certificate will be valid only if the request matches the host name (or host names) associated with the SSL certificate.

> [!NOTE]
> You cannot change the name type of a certificate (e.g., switch from a single-name to a wildcard name) once it has been issued. Choose carefully before ordering.

## How to Choose Your Certificate Names {#choose-names}

<div class="section-steps" markdown="1">
##### Steps to determine the right names for your certificate

1. **Identify which domains and subdomains you need to secure.** List all the host names that users will access over HTTPS (e.g., `example.com`, `www.example.com`, `app.example.com`).

1. **Decide between a single-name and wildcard certificate:**

    - If you need to secure **one specific hostname** (e.g., `www.example.com`), order a **single-name certificate**. This is valid only for that exact hostname.
    - If you need to secure **multiple subdomains at the same level** (e.g., `www.example.com`, `app.example.com`, `api.example.com`), order a **wildcard certificate** for `*.example.com`.

1. **Consider the root domain:**

    - A **single-name certificate** for `www.example.com` will also cover the root domain `example.com`.
    - A **single-name certificate** for `example.com` alone will **not** cover `www.example.com`.
    - A **wildcard certificate** for `*.example.com` covers all first-level subdomains.

1. **Check if you need multiple names on one certificate.** If your [SSL certificate product](/articles/ssl-certificates/) supports the [Subject Alternative Name (SAN)](/articles/what-is-ssl-san/) extension, you can include multiple host names in a single certificate. DNSimple simplifies this by providing a field to enter multiple names when your plan allows it.

1. **Order your certificate** using the names you have determined:

    - [Ordering a Sectigo SSL Certificate](/articles/ordering-standard-certificate/)
    - [Ordering a Wildcard SSL Certificate](/articles/ordering-wildcard-certificate/)
    - [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/)

</div>

## Single-Name vs. Wildcard Certificates {#single-vs-wildcard}

### Single-Name SSL Certificate

A single-name certificate is valid only for the hostname specified with the certificate.

For example, if you purchase a certificate for the hostname `secure.example.com`, you cannot use it for `www.example.com` or `example.com`. Any attempt to serve these hostnames with the certificate will result in a security warning in most browsers.

The only exception is the root domain: if you purchase a certificate for the `www` hostname, it will also cover the root domain as described above.

### Wildcard SSL Certificate

A wildcard certificate is valid for any single-level subdomain. You use the wildcard `*` symbol to indicate the subdomain.

For example, if you purchase a wildcard certificate for `*.example.com`, you can use it for any `example.com` first-level subdomain such as `www.example.com`, `secure.example.com`, or `private.example.com`. However, you cannot use it for `www.secure.example.com` or `super.secure.example.com`.

## Single vs. Multiple Names {#single-vs-multiple}

You can associate host names to an SSL certificate using two different attributes:

- The [Common Name](/articles/what-is-common-name/)
- The [Subject Alternative Name](/articles/what-is-ssl-san/) (SAN)

The Common Name allows specifying a single entry (either a wildcard or single-name), whereas the SAN extension supports multiple entries. However, the SAN is only supported by certain [SSL certificate products](/articles/ssl-certificates/).

At DNSimple, we simplify this by hiding the technical details behind a clear interface. We will not ask you to select when to use the Common Name or the SAN. Whenever you are allowed to enter multiple names, you will be provided a field to enter the list of names.

## Have more questions?

If you have additional questions or need any assistance choosing the right certificate names, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
