---
title: How HTTPS Works
excerpt: HTTPS secures communication between a browser and your server using TLS encryption. Understanding the process helps you troubleshoot certificate issues and make informed security decisions.
meta: Learn how HTTPS and SSL certificates work. Understand the TLS handshake, how certificates prove server identity, and how encryption protects web traffic.
categories:
- SSL Certificates
---

# How HTTPS Works

### Table of Contents {#toc}

* TOC
{:toc}

---

HTTPS (Hypertext Transfer Protocol Secure) is the encrypted version of HTTP, the protocol browsers use to communicate with web servers. HTTPS wraps regular HTTP traffic in a layer of TLS (Transport Layer Security) encryption, which provides three guarantees: the connection is **encrypted** (no one can read the data in transit), the server is **authenticated** (the browser can verify it is talking to the real server, not an impostor), and the data has **integrity** (it cannot be modified in transit without detection).

## What TLS adds to HTTP {#tls}

HTTP transmits data in plain text. Anyone positioned between the browser and the server — such as an ISP, a Wi-Fi operator, or an attacker on a shared network — can read or modify the traffic.

TLS solves this by establishing an encrypted channel before any HTTP data is exchanged. The browser and server negotiate encryption parameters, verify identities, and generate shared encryption keys. Once the TLS connection is established, all HTTP traffic flows through the encrypted channel.

The protocol is technically called TLS (the successor to the older SSL protocol), but the terms SSL and TLS are used interchangeably in most contexts. [SSL certificates](/articles/what-is-ssl-certificate/) are really TLS certificates — the name persists for historical reasons.

## The TLS handshake {#handshake}

Every HTTPS connection begins with a TLS handshake — a sequence of messages between the browser (client) and the server that establishes the encrypted connection. The handshake happens in milliseconds and is invisible to the user.

At a high level, the handshake accomplishes three things:

1. **Agreement on protocol and cipher suite.** The client and server agree on which version of TLS to use and which cryptographic algorithms (cipher suite) to use for encryption, authentication, and integrity checking.

2. **Server authentication.** The server sends its [SSL certificate](/articles/ssl-certificates/) to the client. The client verifies the certificate by checking the [certificate chain](/articles/what-is-ssl-certificate-chain/) up to a trusted [root certificate](/articles/what-is-ssl-root-certificate/). If the chain is valid, the certificate has not expired, and the domain name matches, the client trusts the server's identity.

3. **Key exchange.** The client and server use asymmetric cryptography (the certificate's public key and the server's [private key](/articles/ssl-private-keys/)) to securely generate a shared secret. This shared secret is then used to derive symmetric encryption keys for the rest of the session. Symmetric encryption is much faster than asymmetric encryption, which is why it is used for the actual data transfer.

After the handshake completes, the browser and server communicate over the encrypted channel using the symmetric keys. The padlock icon (or similar security indicator) appears in the browser's address bar.

## How certificates prove identity {#authentication}

The certificate is the mechanism that ties a domain name to a cryptographic key pair. When a [Certificate Authority](/articles/what-is-certificate-authority/) issues a certificate, it verifies that the requester controls the domain through [domain validation](/articles/ssl-domain-validation-methods/) and then digitally signs the certificate.

During the TLS handshake, the browser checks three things about the certificate:

- **Chain of trust.** The certificate must chain back to a root certificate the browser trusts. The server sends its certificate along with any [intermediate certificates](/articles/what-is-ssl-certificate-chain/) needed to complete the chain.
- **Validity period.** The certificate must not be expired. If it is, the browser rejects the connection. This is why timely [renewal](/articles/how-certificate-renewal-works/) is critical.
- **Domain match.** The domain the browser is connecting to must appear in the certificate's [Common Name](/articles/what-is-common-name/) or [Subject Alternative Name (SAN)](/articles/what-is-ssl-san/) field.

If any of these checks fail, the browser displays a security warning and may block the connection entirely.

## What the browser shows {#browser-indicators}

Browsers indicate the security status of a connection through visual cues in the address bar:

- **Padlock icon** — The connection is encrypted with a valid certificate. Clicking the padlock shows certificate details.
- **"Not Secure" warning** — The page is served over plain HTTP or the certificate has an issue (expired, domain mismatch, incomplete chain).
- **Certificate error page** — The browser blocks access entirely and shows a full-page warning. The user can sometimes bypass this, but most visitors will leave the site.

The padlock does not indicate that the website itself is safe or trustworthy — it only confirms that the connection between the browser and the server is encrypted and that the server's identity has been verified by a trusted CA.

## Mixed content {#mixed-content}

A page served over HTTPS can still load some resources (images, scripts, stylesheets) over plain HTTP. This is called **mixed content**, and it weakens the security of the page:

- **Passive mixed content** (images, video, audio loaded over HTTP) — Browsers may load these but display a warning. An attacker could swap the resource for something misleading.
- **Active mixed content** (scripts, stylesheets, iframes loaded over HTTP) — Browsers block these entirely because a malicious script could take full control of the page.

To avoid mixed content issues, ensure all resources on your pages are loaded over HTTPS. Use relative URLs (e.g., `/images/logo.png`) or protocol-relative URLs where possible, and update any hardcoded `http://` references to `https://`.

## Why HTTPS matters {#why}

HTTPS is no longer optional for most websites:

- **Privacy and security.** Encrypted connections protect sensitive data such as login credentials, payment information, and personal details from interception.
- **Search ranking.** Search engines use HTTPS as a ranking signal. Sites served over HTTPS may rank higher than equivalent HTTP sites.
- **Browser requirements.** Modern browsers flag HTTP pages as "Not Secure" and restrict features like geolocation, camera access, and service workers to HTTPS-only contexts.
- **Trust.** Visitors expect the padlock icon. An insecure connection warning erodes confidence, even if the site itself is harmless.

## Have more questions?

If you have any questions about HTTPS or need assistance securing your site, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
