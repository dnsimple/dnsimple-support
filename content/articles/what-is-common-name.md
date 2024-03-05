---
meta: The SSL certificate Common Name identifies the hostname associated with the certificate.
title: What is the SSL Certificate Common Name?
excerpt: The SSL certificate Common Name identifies the hostname associated with the certificate.
categories:
- SSL Certificates
---

# What is the SSL Certificate Common Name?

### Table of Contents {#toc}

* TOC
{:toc}

---

The **Common Name** (AKA **CN**) represents the server name protected by the SSL certificate. The certificate is valid only if the request hostname matches the certificate common name. Most web browsers display a warning message when connecting to an address that does not match the common name in the certificate.

In the case of a single-name certificate, the common name consists of a single host name  (e.g. `example.com`, `www.example.com`), or a wildcard name in case of a wildcard certificate (e.g. `*.example.com`).

The common name is technically represented by the `commonName` field in the X.509 certificate specification.


## commonName format

The common name is not a URL. It doesn't include any protocol (e.g. http:// or https://), port number, or pathname. For instance, `https://example.com` or `example.com/path` are incorrect. In both cases, the common name should be `example.com`.

It must precisely match the server name where the certificate is installed. If the certificate is issued for a subdomain, it should be the full subdomain. For instance, for the `www` and `api` subdomains of `example.com`, the common name will be `www.example.com` or `api.example.com`, and not `example.com`.

<tip>
#### Single-name or Wildcard?

Read the article [Choosing the SSL Certificate Common Name](/articles/ssl-certificate-names) for help determining the appropriate host names for your certificate.
</tip>

##### Example of host name mismatch error on Google Chrome

![Example of host name mismatch error on Google Chrome](/files/dnsimple-certificate-mismatch-chrome.png)

##### Example of host name mismatch error on Google Safari

![Example of host name mismatch error on Google Safari](/files/dnsimple-certificate-mismatch-safari.png)


## Common Name vs Subject Alternative Name

The common name can only contain up to one entry: either a wildcard or non-wildcard name. It's not possible to specify a list of names covered by an SSL certificate in the common name field.

The [Subject Alternative Name extension](/articles/what-is-ssl-san) (also called Subject Alternate Name or SAN) was introduced to solve this limitation. The SAN allows issuance of multi-name SSL certificates.

The ability to directly specify the content of a certificate SAN depends on the Certificate Authority and the specific product. Most certificate authorities have historically marketed multi-domain SSL certificates as a separate product. They're generally charged at a higher rate than a standard single-name certificate.

On the technical side, the SAN extension was introduced to integrate the common name. Since HTTPS was first introduced in 2000 (and defined by the [RFC 2818](https://tools.ietf.org/html/rfc2818)), the use of the commonName field has been considered deprecated, because it's ambiguous and untyped.

The CA/Browser Forum has since mandated that the SAN would also include any value present in the common name, effectively making the SAN the only required reference for a certificate match with the server name. The notion of the common name survives mostly as a legacy of the past. There are active discussions to remove its use from most browsers and interfaces.
