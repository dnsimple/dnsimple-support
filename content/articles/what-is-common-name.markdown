---
title: What is the SSL Certificate Common Name?
excerpt: The SSL certificate Common Name identifies the fully qualified domain name associated with the certificate.
categories:
- SSL Certificates
---

# What is the Common Name?

The **Common Name** (also **CN**) identifies the host name associated with the certificate, for example `www.example.com` or `example.com`.

It consists of a single host name in case of a single-name certificate (e.g. `example.com`, `www.example.com`), or a wildcard name in case of a wildcard certificate (e.g. `*.example.com`). In all cases, it is not an URL and therefore it doesn't include any protocol (e.g. http:// or https://), port number, or pathname.

<callout>
#### Single-name or Wildcard?

Read the article [Choosing the SSL Certificate Common Name](/articles/ssl-certificate-names) if you need help to determine the most appropriate host names for your certificate.
</callout>

The common name represents the name protected by the SSL certificate. The certificate is valid only if the request hostname matches the certificate common name. Most web browsers displays a warning message when connecting to an address that does not match the common name in the certificate.

##### Example of host name mismatch error on Google Chrome

![Example of host name mismatch error on Google Chrome](/files/dnsimple-certificate-mismatch-chrome.png)

##### Example of host name mismatch error on Google Safari

![Example of host name mismatch error on Google Safari](/files/dnsimple-certificate-mismatch-safari.png)

## Common name vs Subject Alternative Name

The common name can only contain up to one entry: either a wildcard or a single name. It's not possible to specify a list of names covered by an SSL certificate in the common name field.

The [SAN extension](/articles/what-is-ssl-san) was introduced to solve this limitation and allow to issue multi-domain SSL certificates. The SAN extension can be used to integrate or replace the common name, and it supports the ability to specify different domains protected by a single SSL certificate.
