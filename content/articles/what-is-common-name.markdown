---
title: What is the SSL Certificate Common Name?
excerpt: The SSL certificate Common Name identifies the fully qualified domain name associated with the certificate.
categories:
- SSL Certificates
---

# What is the Common Name?

The **Common Name** (also **CN**) identifies the fully qualified domain name(s) associated with the certificate. It is typically composed by an host and a domain name it looks like (e.g. `www.example.com` or `example.com`).

Depending on the [certificate type](/articles/ssl-certificates-types), it can be one or more hostnames belonging to the same domain (e.g. `example.com`, `www.example.com`), a wildcard name (e.g. `*.example.com`) or a list of domains. In all cases, it don't include any protocol (e.g. http:// or https://), port number or pathname.

The certificate is valid only if the request hostname matches at least one of the certificate common names.

<note>
#### Wildcard or Single-Hostname?

Read the article [Choosing the SSL Certificate Common Name](/articles/ssl-certificate-hostname) if you need help to determine the most appropriate common name for your certificate.
</note>

Most web browsers displays a warning message when connecting to an address that does not match the common name in the certificate.

##### Example of host name mismatch error on Google Chrome

![Example of host name mismatch error on Google Chrome](/files/dnsimple-certificate-mismatch-chrome.png)

##### Example of host name mismatch error on Google Safari

![Example of host name mismatch error on Google Safari](/files/dnsimple-certificate-mismatch-safari.png)
