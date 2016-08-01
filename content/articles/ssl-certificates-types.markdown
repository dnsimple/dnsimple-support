---
title: SSL Certificate Types
excerpt: This article quickly explains the differences between the various types you may want to use to secure a website.
categories:
- SSL Certificates
---

# SSL Certificate Types

There are several types of SSL Certificates. This article quickly explains the differences between the various types you may want to use to secure a website.

You can group SSL certificates by validation level or secured domains/hostnames.

### Table of Contents {#toc}

* TOC
{:toc}

---

## SSL Certificates by Validation Level

The validation level determines the method adopted by the Certificate Authority to confirm the identity of the certificate applicant.

### Domain Validated SSL Certificates

The Domain Validated SSL Certificate validates the domain is registered and someone with admin rights is aware of and approves the certificate request.

The validation process is normally performed [via email](/articles/ssl-certificates-email-validation) or DNS. The owner is requested to prove admin right by receiving and confirming an email sent to an administrative email for the domain, or by configuring some specific DNS records for the domain.

The order normally takes from a few minutes to a few hours.

If the certificate is valid and signed by a trusted authority, the browsers indicate a successfully secured HTTPS connection.

![](/files/dnsimple-ssltypes-https.png)

<callout>
DNSimple currently provides both [single-name and wildcard](/articles/ssl-certificates) domain-validated certificates.
</callout>

### Organization Validated SSL Certificates

The Organization Validated SSL Certificate (OV certificate) validates the domain ownership, plus organization information included in the certificate such as name, city, state and country.

The validation process is similar to the domain validated certificate, but it requires additional documentation to certify the company identity.

The order can take from a few hours to a few days, due to the company validation process.

The Organization Validated SSL Certificates display the company information in the certificate details.

![](/files/dnsimple-ssltypes-company.png)

<callout>
DNSimple currently doesn't provide organization-validated certificates.
</callout>

### Extended Validation SSL Certificates

The Extended Validation SSL Certificate (EV certificate) requires an extended validation of the business. It validates domain ownership and organization information, plus the legal existence of the organization. It also validates that the organization is aware of the SSL certificate request and approves it.

The validation requires documentation to certify the company identity plus a set of additional steps and checks.

The order can take from a few days to a few weeks, due to the extended validation process.

The Extended Validation SSL Certificates are generally identified with a green address bar in the browser containing the company name.

![](/files/dnsimple-ssltypes-greenbar.png)

<callout>
DNSimple currently doesn't provide extended validation certificates.
</callout>


## SSL Certificates by Secured Domains

An SSL certificate is associated to one or more secured host names that restrict the scope of a certificate.

### Single-name SSL Certificates

Single-name SSL certificates protects a single subdomain (hostname).

For example, if you purchase a certificate for `www.example.com` it will not secure `mail.example.com`.

On sole discretion of the certificate authority, if you purchase a single-name certificate for the www hostname (www.example.com) the certificate may also include the root domain.

<callout>
DNSimple currently provides [single-name certificates](/articles/ssl-certificates).
</callout>

### Wildcard SSL Certificates

Wildcard SSL certificates protect an unlimited number of subdomains for a single domain.

For example, if you purchase a certificate for `*.example.com` it will secure `foo.example.com`, `bar.example.com`, etc. However, it will not secure `foo.else.example.com`.

<callout>
DNSimple currently provides [wildcard certificates](/articles/ssl-certificates).
</callout>

### Multi-Domain SSL Certificates

Multi-domain SSL certificates protect different domains with a single certificate.

You can normally secure a combination of different subdomains from different domains.

<callout>
DNSimple does not currently provide multi-domain certificates.
</callout>


## Security

It's important to remember that the validation level and the number of secured domains don't affect the security level offered by an SSL certificate.

All certificates work following the same encryption principle.
