---
title: SSL Certificate Types
excerpt: SSL certificates are classified by validation level (how the CA verifies identity) and by the number of hostnames they protect (single-name, wildcard, or multi-domain).
meta: Understand the different types of SSL certificates, including validation levels and hostname coverage, to choose the right certificate for your needs.
categories:
- SSL Certificates
- Enterprise
---

# SSL Certificate Types

### Table of Contents {#toc}

* TOC
{:toc}

---

SSL certificates can be classified in two ways: by **validation level** (how the [certificate authority](/articles/what-is-certificate-authority/) verifies the certificate holder's identity) or by **secured domains/hostnames** (how many hostnames the certificate protects). Understanding these classifications helps you choose the right certificate type for your needs.

## SSL Certificates by Validation Level

The validation level determines the method adopted by the Certificate Authority to confirm the identity of the certificate applicant.

### Domain Validated SSL Certificates

The Domain Validated SSL Certificate validates the domain is registered and someone with admin rights is aware of and approves the certificate request.

The validation process is normally performed [via email](/articles/ssl-certificates-email-validation/) or DNS. The owner is requested to prove admin right by receiving and confirming an email sent to an administrative email for the domain, or by configuring some specific DNS records for the domain.

The order normally takes from a few minutes to a few hours.

If the certificate is valid and signed by a trusted authority, the browsers indicate a successfully secured HTTPS connection.

![screenshot: Showing an accepted SSL certificate in a browser URL bar](/files/dnsimple-ssltypes-https.png)

> [!NOTE]
> DNSimple provides both [single-name and wildcard](/articles/ssl-certificates/) domain-validated certificates.

### Organization Validated SSL Certificates

The Organization Validated SSL Certificate (OV certificate) validates the domain ownership, plus organization information included in the certificate such as name, city, state and country.

The validation process is similar to the domain validated certificate, but it requires additional documentation to certify the company identity.

The order can take from a few hours to a few days, due to the company validation process.

The Organization Validated SSL Certificates display the company information in the certificate details.

![screenshot: Viewing information of an SSL company certificate](/files/dnsimple-ssltypes-company.png)

> [!NOTE]
> DNSimple currently doesn't provide organization-validated certificates.

### Extended Validation SSL Certificates

The Extended Validation SSL Certificate (EV certificate) requires an extended validation of the business. It validates domain ownership and organization information, plus the legal existence of the organization. It also validates that the organization is aware of the SSL certificate request and approves it.

The validation requires documentation to certify the company's identity, plus a set of additional steps and checks.

The order can take from a few days to a few weeks, due to the extended validation process.

The Extended Validation SSL Certificates are generally identified with a green address bar in the browser containing the company name.

![screenshot: Showing green url bar when a SSL certificate is present on a site](/files/dnsimple-ssltypes-greenbar.png)

> [!NOTE]
> DNSimple currently doesn't provide extended validation certificates. However, we provide a recommendation for a CA that does [here](/articles/can-ev-ssl-certificates/).


## SSL Certificates by Secured Domains

An SSL certificate is associated to one or more secured host names that restrict the scope of a certificate.

### Single-name SSL Certificates

Single-name SSL certificates protects a single subdomain (hostname).

For example, if you purchase a certificate for `www.example.com` it will not secure `mail.example.com`.

On sole discretion of the certificate authority, if you purchase a single-name certificate for the www hostname (www.example.com) the certificate may also include the root domain.

> [!NOTE]
> DNSimple provides [single-name certificates](/articles/ssl-certificates/).

### Wildcard SSL Certificates

Wildcard SSL certificates protect an unlimited number of subdomains for a single domain.

For example, if you purchase a certificate for `*.example.com` it will secure `foo.example.com`, `bar.example.com`, etc. However, it will not secure `foo.else.example.com`.

> [!NOTE]
> DNSimple provides [wildcard certificates](/articles/ssl-certificates/).

### Multi-Domain SSL Certificates

Multi-domain SSL certificates protect different domains with a single certificate, using the [SAN extension](/articles/what-is-ssl-san/). For this reason, these certificates are often referred to as SAN certificates.

You can generally secure a combination of different host names, from the same or different domains.

> [!NOTE]
> DNSimple provides [multi-domain SAN certificates](/articles/ssl-certificates/).


## Security

It's important to remember that the validation level and the number of secured domains don't affect the security level offered by an SSL certificate.

All certificates work following the same encryption principle. The validation level determines what information appears in the certificate and how the CA verified your identity, but it doesn't change the cryptographic strength of the certificate. Similarly, protecting multiple hostnames with a single certificate doesn't reduce security — it's simply a matter of how many names are associated with the same certificate.

## Taking action

- [Ordering a Sectigo SSL Certificate](/articles/ordering-standard-certificate/) - Order a Sectigo single-name or wildcard certificate
- [Ordering a Wildcard SSL Certificate](/articles/ordering-wildcard-certificate/) - Request a wildcard certificate
- [Ordering a Let's Encrypt Certificate](/articles/ordering-lets-encrypt-certificate/) - Get a free certificate with SAN support

## Related reading

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand how CAs validate entities and issue certificates
- [What is the Subject Alternative Name (SAN)?](/articles/what-is-ssl-san/) - Learn how multi-domain certificates use SAN
- [What is the SSL Certificate Common Name?](/articles/what-is-common-name/) - Understand how single-name certificates identify hostnames
- [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/) - Compare certificate types and their features

## Have more questions?

If you have additional questions or need any assistance with certificate types and which one to choose, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
