---
title: What Is an SSL Certificate?
excerpt: An SSL certificate is a digital credential that enables HTTPS encryption between a browser and a server, protecting data in transit and verifying the server's identity.
meta: What is an SSL certificate and how does it work? Learn how SSL certificates encrypt web traffic, authenticate servers, and protect sensitive data — plus the difference between free and paid certificates.
categories:
- SSL Certificates
---

# What Is an SSL Certificate?

### Table of Contents {#toc}

* TOC
{:toc}

---

An SSL certificate is a digital credential issued by a trusted [certificate authority (CA)](/articles/what-is-certificate-authority/) that binds a domain name to a cryptographic key pair. When installed on a web server, it enables HTTPS — the encrypted version of HTTP — so that data exchanged between a visitor's browser and the server is protected from interception and tampering.

The term "SSL" refers to Secure Sockets Layer, the original protocol. Modern connections use its successor, TLS (Transport Layer Security), but the industry still uses "SSL certificate" as the standard name.

## How SSL certificates work {#how-ssl-certificates-work}

When someone visits a site over HTTPS, the browser and server perform a [TLS handshake](/articles/how-https-works/#handshake) — a rapid exchange of messages that establishes a secure connection. The SSL certificate plays a central role in this process:

1. **The server presents its certificate.** The certificate contains the server's public key and the domain name it was issued for.
2. **The browser verifies the certificate.** It checks that the certificate was signed by a trusted CA, has not expired, and matches the domain being visited. The browser follows the [certificate chain](/articles/what-is-ssl-certificate-chain/) from the server certificate through any [intermediate certificates](/articles/what-is-ssl-certificate-chain/) up to a trusted [root certificate](/articles/what-is-ssl-root-certificate/).
3. **An encrypted session is established.** The browser and server use the certificate's public key to securely exchange a shared secret, then switch to fast symmetric encryption for the rest of the session.

Once the handshake completes, the browser displays a padlock icon, and all HTTP traffic flows through the encrypted channel. For a deeper look at the encryption process, see [How HTTPS Works](/articles/how-https-works/).

## What SSL certificates protect {#what-ssl-certificates-protect}

An SSL certificate provides three guarantees:

- **Encryption.** Data traveling between the browser and the server is scrambled so it cannot be read by anyone who intercepts it — including ISPs, Wi-Fi operators, and attackers on shared networks.
- **Authentication.** The certificate proves the server is who it claims to be. Without authentication, a browser has no way to distinguish a legitimate server from an impostor.
- **Integrity.** The encrypted connection detects any modification to data in transit. If a packet is altered, the connection rejects it.

## Types of SSL certificates {#types}

SSL certificates are classified two ways: by **validation level** (how the CA verifies the applicant's identity) and by **hostname coverage** (how many domain names the certificate protects).

### Validation levels

- **Domain Validated (DV)** — The CA confirms the applicant controls the domain. This is the most common type and the only type DNSimple provides. Issuance takes minutes.
- **Organization Validated (OV)** — The CA also verifies the organization's legal identity. Takes hours to days.
- **Extended Validation (EV)** — The most rigorous verification, including legal entity checks. Takes days to weeks.

All three levels provide the same encryption strength. The difference is what identity information appears in the certificate, not the security of the connection.

### Hostname coverage

- **Single-name** — Protects one hostname (e.g., `www.example.com`).
- **Wildcard** — Protects all single-level subdomains of a domain (e.g., `*.example.com` covers `www`, `mail`, `app`, etc.).
- **Multi-domain (SAN)** — Protects multiple specified hostnames using the [Subject Alternative Name](/articles/what-is-ssl-san/) extension.

For a detailed breakdown, see [SSL Certificate Types](/articles/ssl-certificates-types/).

## Free vs. paid SSL certificates {#free-vs-paid}

The encryption provided by a free certificate is identical to that of a paid certificate. The differences are in automation, validity period, and features.

**Free SSL certificates** from [Let's Encrypt](/articles/letsencrypt/) are domain-validated, expire after 90 days, and are issued and renewed automatically. They are a good fit when your domain resolves with a provider that supports automated DNS validation.

**Paid SSL certificates** from CAs like [Sectigo](/articles/ssl-certificates/#sectigo-singlename) offer longer validity periods (up to 200 days as of March 2026), support custom [CSRs](/articles/what-is-csr/) and private keys, and do not require the domain to resolve with a specific provider. Sectigo single-name certificates cost $20 per year and wildcard certificates cost $100 per year through DNSimple.

For a side-by-side comparison, see [Sectigo vs Let's Encrypt SSL Certificates](/articles/standard-vs-letsencrypt/).

## Why every website needs an SSL certificate {#why-ssl}

- **Data protection.** Any site that collects passwords, payment details, or personal information must encrypt that data in transit. Even sites without forms benefit from encryption — it prevents injection of ads, tracking scripts, or malicious code by intermediaries.
- **Search ranking.** Search engines use HTTPS as a ranking signal. Sites served over HTTPS may rank higher than equivalent HTTP-only sites.
- **Browser trust.** Modern browsers display "Not Secure" warnings for HTTP pages and restrict features like geolocation, camera access, and service workers to HTTPS-only contexts. Visitors expect the padlock icon.
- **Compliance.** Regulations like PCI-DSS require HTTPS for any page that handles payment card data.

## How to get an SSL certificate {#how-to-get}

DNSimple provides domain-validated SSL certificates from two certificate authorities — Sectigo and Let's Encrypt. The process follows the same general path regardless of which CA you choose:

1. **Choose** between a [Sectigo](/articles/ssl-certificates/#sectigo-singlename) or [Let's Encrypt](/articles/ssl-certificates/#letsencrypt) certificate based on your needs.
2. **Order** the certificate through DNSimple.
3. **Validate** domain ownership — automatically via DNS for Let's Encrypt, or via email for Sectigo.
4. **Install** the issued certificate on your web server.

For the full step-by-step process, see [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/). For details on each stage a certificate goes through, see [SSL Certificate Lifecycle](/articles/ssl-certificate-lifecycle/).

## Have more questions?

If you have any questions about SSL certificates, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
