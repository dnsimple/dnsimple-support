---
title: SSL Certificate Glossary
excerpt: Definitions of key terms related to SSL/TLS certificates, encryption, and certificate management.
meta: Definitions of SSL certificate terms including CA, CSR, private key, TLS handshake, ECDSA, PEM, wildcard certificates, and more. Quick reference for DNSimple users.
categories:
- SSL Certificates
---

# SSL Certificate Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

## Certificate Basics {#basics}

### HTTPS {#https}

HTTP over TLS. The encrypted version of web communication that uses an SSL certificate to secure the connection between a browser and a server.

**Learn more:**
- [How HTTPS Works](/articles/how-https-works/)

### SSL (Secure Sockets Layer) {#ssl}

The predecessor to TLS. Although TLS has replaced SSL, the term "SSL certificate" is still widely used to refer to certificates that enable encrypted HTTPS connections.

### TLS (Transport Layer Security) {#tls}

The current encryption protocol that secures HTTPS connections. TLS is the successor to SSL and is what modern browsers and servers use during the handshake process.

**Learn more:**
- [How HTTPS Works](/articles/how-https-works/)

### TLS Handshake {#tls-handshake}

The initial negotiation between a client (browser) and server that establishes an encrypted connection. During the handshake, the server presents its certificate, the client verifies it, and both sides agree on encryption keys.

**Learn more:**
- [How HTTPS Works](/articles/how-https-works/)

### Mixed Content {#mixed-content}

An HTTPS page that loads some resources (images, scripts, stylesheets) over plain HTTP. Mixed content weakens security and causes browser warnings, because unencrypted resources can be intercepted or modified in transit.

**Learn more:**
- [How HTTPS Works](/articles/how-https-works/)

## Certificate Types {#types}

### Domain Validated (DV) Certificate {#dv}

A certificate where the CA verifies only that the requester controls the domain. All DNSimple certificates are domain-validated.

**Learn more:**
- [SSL Certificate Types](/articles/ssl-certificates-types/)

### Extended Validation (EV) Certificate {#ev}

The most rigorous CA validation level, requiring legal entity verification. DNSimple does not provide EV certificates.

**Learn more:**
- [Do You Support Extended Validation (EV) SSL Certificates?](/articles/can-ev-ssl-certificates/)
- [SSL Certificate Types](/articles/ssl-certificates-types/)

### Organization Validated (OV) Certificate {#ov}

A certificate that verifies both domain ownership and organization identity. DNSimple does not provide OV certificates.

**Learn more:**
- [SSL Certificate Types](/articles/ssl-certificates-types/)

### Single-Name Certificate {#single-name}

A certificate protecting exactly one hostname (e.g., `www.example.com`). For the `www` hostname, Sectigo single-name certificates also cover the root domain.

**Learn more:**
- [SSL/TLS Certificates](/articles/ssl-certificates/)
- [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/)

### Wildcard Certificate {#wildcard}

A certificate protecting all single-level subdomains of a domain (e.g., `*.example.com` covers `www.example.com`, `mail.example.com`, etc.), but not multi-level subdomains.

**Learn more:**
- [SSL/TLS Certificates](/articles/ssl-certificates/)
- [Choosing the SSL Certificate Names](/articles/ssl-certificate-names/)

### SAN (Subject Alternative Name) {#san}

An X.509 extension that allows a single certificate to cover multiple hostnames. Let's Encrypt SAN certificates in DNSimple can cover up to 100 names.

**Learn more:**
- [What Is the SAN?](/articles/what-is-ssl-san/)

## Certificate Authorities {#authorities}

### Certificate Authority (CA) {#ca}

A trusted organization that verifies domain ownership (and sometimes organization identity) and issues SSL certificates. DNSimple uses Sectigo and Let's Encrypt as CAs.

**Learn more:**
- [What Is a Certificate Authority?](/articles/what-is-certificate-authority/)
- [SSL Certificate Authorities Used by DNSimple](/articles/ssl-certificate-authorities/)

### Let's Encrypt {#lets-encrypt}

A free, automated, open certificate authority. Let's Encrypt certificates in DNSimple are validated via DNS challenges and support auto-renewal. The domain must resolve with DNSimple.

**Learn more:**
- [Let's Encrypt and DNSimple](/articles/letsencrypt/)

### Sectigo {#sectigo}

A commercial certificate authority (formerly Comodo). Sectigo certificates in DNSimple are validated via email and cost $20 (single-name) or $100 (wildcard) per year.

**Learn more:**
- [SSL/TLS Certificates](/articles/ssl-certificates/)
- [Sectigo vs Let's Encrypt](/articles/standard-vs-letsencrypt/)

## Keys and Cryptography {#keys}

### Private Key {#private-key}

The secret key paired with a certificate. The server uses the private key to prove its identity during the TLS handshake and to establish encrypted connections. DNSimple generates private keys automatically unless you provide a custom CSR.

**Learn more:**
- [Understanding SSL Private Keys](/articles/ssl-private-keys/)

### Certificate Signing Request (CSR) {#csr}

An encoded block of text containing the public key and domain information, submitted to a CA to request a certificate. DNSimple generates CSRs automatically, but you can provide a custom CSR for Sectigo certificates.

**Learn more:**
- [What Is a CSR?](/articles/what-is-csr/)

### RSA {#rsa}

Rivest-Shamir-Adleman. The traditional public-key algorithm, widely compatible across platforms and software. RSA keys are larger than ECDSA keys (2048+ bits).

**Learn more:**
- [Elliptic Curve Cryptography (ECC) SSL Certificates](/articles/can-elliptic-curve-key-ssl-certificates/)

### ECDSA {#ecdsa}

Elliptic Curve Digital Signature Algorithm. A key algorithm that produces smaller, faster keys than RSA at equivalent security levels. DNSimple defaults to ECDSA (`prime256v1`) for new certificates.

**Learn more:**
- [Elliptic Curve Cryptography (ECC) SSL Certificates](/articles/can-elliptic-curve-key-ssl-certificates/)
- [How to Switch From an ECC-Signed Certificate to RSA](/articles/i-got-an-ecc-certificate-but-i-want-a-rsa-one/)

### SHA-2 / SHA-256 {#sha2}

The current standard hash algorithm used to sign certificates. All DNSimple certificates use SHA-256 signatures.

**Learn more:**
- [SHA-2 SSL Certificates](/articles/sha-2-ssl-certificates/)

## Certificate Chain and Trust {#chain}

### Certificate Chain {#certificate-chain}

The sequence of certificates from the server certificate, through one or more intermediate certificates, up to the root certificate. Browsers follow this chain to verify that a certificate is trusted.

**Learn more:**
- [What Is the SSL Certificate Chain?](/articles/what-is-ssl-certificate-chain/)

### Root Certificate {#root-certificate}

The top-level certificate in the chain of trust. Root certificates are pre-installed in browsers and operating systems. A certificate is trusted only if its chain leads back to a recognized root.

**Learn more:**
- [What Is a Root Certificate?](/articles/what-is-ssl-root-certificate/)

### Intermediate Certificate {#intermediate-certificate}

A certificate between the server certificate and the root certificate in the chain of trust. CAs use intermediate certificates to sign server certificates, keeping the root certificate offline for security.

**Learn more:**
- [What Is the SSL Certificate Chain?](/articles/what-is-ssl-certificate-chain/)

## Certificate Formats {#formats}

### PEM {#pem}

Privacy-Enhanced Mail. The most common Base64-encoded text format for certificates and keys. PEM files typically use `.pem` or `.crt` extensions and are the default format for Apache, Nginx, and most Unix/Linux platforms.

### DER {#der}

Distinguished Encoding Rules. A binary encoding format for certificates. DER files use `.der` or `.cer` extensions and are used by some Java and Windows applications.

### PFX / PKCS#12 {#pfx}

A container format that bundles the certificate, intermediate chain, and private key into one encrypted file. PFX files use `.pfx` or `.p12` extensions and are required for Microsoft IIS and Azure.

## Validation and Issuance {#validation}

### Domain Validation (DV) {#domain-validation}

The process by which a CA confirms the certificate requester controls the domain. DNSimple supports email-based validation (Sectigo) and DNS-based validation (Let's Encrypt).

**Learn more:**
- [SSL Certificate Email-Based Domain Validation](/articles/ssl-certificates-email-validation/)

### Common Name (CN) {#common-name}

The hostname field in a certificate identifying which domain the certificate protects. For a wildcard certificate, the Common Name is `*.example.com`.

**Learn more:**
- [What Is the SSL Certificate Common Name?](/articles/what-is-common-name/)

### CAA Record {#caa}

Certification Authority Authorization. A DNS record that specifies which CAs are allowed to issue certificates for a domain. If CAA records are present and the CA is not listed, the certificate request will fail.

**Learn more:**
- [CAA Records and SSL Certificates](/articles/caa-records-ssl-certificates/)

### ACME {#acme}

Automated Certificate Management Environment. The protocol Let's Encrypt uses for automated certificate issuance and renewal. DNSimple handles ACME challenges automatically for Let's Encrypt certificates.

## Certificate Lifecycle {#lifecycle}

### Auto-Renewal {#auto-renewal}

Automatic certificate renewal before expiration. In DNSimple, auto-renewal is supported for Let's Encrypt certificates. Sectigo certificates must be reordered manually.

**Learn more:**
- [Let's Encrypt and DNSimple](/articles/letsencrypt/#auto-renewal)
- [SSL Certificate Lifecycle](/articles/ssl-certificate-lifecycle/)

### Reissue (Re-Key) {#reissue}

Generating a new private key and certificate for an existing certificate order, without purchasing a new certificate. Reissuing is useful if the private key has been compromised or if you need to change the certificate's key algorithm.

**Learn more:**
- [Re-Issuing an SSL Certificate](/articles/reissuing-ssl-certificate/)

### Renewal {#renewal}

Purchasing a new certificate to replace one that is expiring. In DNSimple, renewing creates a new certificate order associated with the previous one, with some settings pre-filled.

**Learn more:**
- [How Does an SSL Certificate Renewal Work?](/articles/how-certificate-renewal-works/)
- [Renewing an SSL Certificate](/articles/renewing-ssl-certificate/)

## Have more questions?

If you have any questions about SSL certificate terminology, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
