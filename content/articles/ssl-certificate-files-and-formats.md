---
title: Understanding SSL Certificate Files and Formats
excerpt: SSL certificates come in several file formats. Knowing which files you need and which format your server requires simplifies installation.
meta: Learn about SSL certificate file formats including PEM, DER, and PFX/PKCS#12, what files DNSimple provides, and which format your server or platform needs.
categories:
- SSL Certificates
---

# Understanding SSL Certificate Files and Formats

### Table of Contents {#toc}

* TOC
{:toc}

---

Installing an SSL certificate on your server requires multiple files, and different platforms expect those files in different formats. Understanding what each file contains and which format your platform needs helps you avoid common installation issues.

## The files you need {#files}

A complete SSL certificate installation requires three components:

- **Server certificate** — The certificate issued for your domain by the [Certificate Authority](/articles/what-is-certificate-authority/) (CA). This contains your domain name, the public key, the issuer's signature, and the validity period.
- **Intermediate certificate chain** — One or more certificates that link your server certificate to the CA's [root certificate](/articles/what-is-ssl-root-certificate/). Without the intermediate chain, browsers cannot verify the [full chain of trust](/articles/what-is-ssl-certificate-chain/) and will display a security error.
- **[Private key](/articles/ssl-private-keys/)** — The secret key that pairs with the public key in the certificate. Your server uses it to prove it is the legitimate owner of the certificate and to establish encrypted connections.

All three must be present on your server for HTTPS to work correctly. The certificate and chain prove your identity to browsers, and the private key enables the encrypted connection.

## Common file formats {#formats}

SSL certificate files are encoded in one of two base formats (PEM or DER), and several container formats build on top of these. The format you need depends on your server or hosting platform.

### PEM (Privacy-Enhanced Mail) {#pem}

PEM is the most widely used format for SSL certificates on Linux-based servers (Apache, NGINX) and most hosting platforms. PEM files are Base64-encoded text files that you can open in any text editor.

A PEM file looks like this:

```
-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJANa3k...
(Base64-encoded data)
...Yb8a4wF6kd
-----END CERTIFICATE-----
```

PEM files use several file extensions, which can be confusing because they all contain the same type of data:

| Extension | Typical contents |
|-----------|-----------------|
| `.pem` | Certificate, chain, or private key (generic) |
| `.crt` | Server certificate |
| `.cer` | Server certificate (common on Windows) |
| `.key` | Private key |
| `.chain.pem` | Intermediate certificate chain |
| `.bundle.pem` or `.ca-bundle` | Certificate bundled with the intermediate chain |

> [!TIP]
> The file extension is just a naming convention. A `.crt` file and a `.pem` file can contain exactly the same data. What matters is the encoding (PEM text vs DER binary), not the extension.

### DER (Distinguished Encoding Rules) {#der}

DER is the binary equivalent of PEM. It contains the same cryptographic data but is not Base64-encoded, so it cannot be read in a text editor. DER files typically use the `.der` or `.cer` extension.

DER format is used mainly by Java-based platforms and some Windows applications. Most web servers and hosting platforms do not require DER files.

### PFX / PKCS#12 {#pfx}

PFX (Personal Information Exchange), also known as PKCS#12, is a container format that bundles the server certificate, the intermediate chain, and the private key into a single encrypted file. PFX files use the `.pfx` or `.p12` extension.

This format is required by:

- Microsoft IIS
- Microsoft Azure
- Some Windows-based applications
- Some load balancers and appliances

The PFX file is password-protected, so you set a password when creating it and must provide that password when importing the file on the server.

### PKCS#7 {#pkcs7}

PKCS#7 files (`.p7b` or `.p7c` extension) contain only certificates and chain certificates — never the private key. This format is sometimes used for certificate exchange between systems. It is not commonly needed for standard web server installations.

## What DNSimple provides {#dnsimple}

When your certificate is issued, DNSimple makes the following files available for download from the [certificate installation page](/articles/installing-ssl-certificate/):

- **Server certificate** (`.crt`) — Your domain's certificate in PEM format
- **Intermediate chain** (`.pem`) — The intermediate certificates bundled in PEM format
- **Full bundle** (`.pem`) — The server certificate and intermediate chain combined into a single PEM file
- **Private key** (`.key`) — The private key in PEM format, available if DNSimple generated the [CSR](/articles/what-is-csr/) for you

> [!NOTE]
> If you provided your own CSR when ordering the certificate, the private key is not stored by DNSimple. You are responsible for keeping your own copy. See [Understanding SSL Private Keys](/articles/ssl-private-keys/) for more details.

## Which format for which platform {#platforms}

| Platform | Required format | Files needed |
|----------|----------------|--------------|
| [NGINX](/articles/ssl-certificate-with-nginx/) | PEM | Full bundle (certificate + chain) and private key as separate files |
| [Apache](/articles/ssl-certificate-with-apache/) | PEM | Certificate, chain, and private key as separate files |
| [Heroku](/articles/ssl-certificate-with-heroku/) | PEM | Full bundle and private key |
| [Microsoft IIS](/articles/ssl-certificate-with-microsoft-iis/) | PFX | Single `.pfx` file containing certificate, chain, and private key |
| [Microsoft Azure](/articles/ssl-certificate-with-azure/) | PFX | Single `.pfx` file |
| AWS (ELB/CloudFront) | PEM | Certificate, chain, and private key uploaded separately |

DNSimple's [installation wizard](/articles/installing-ssl-certificate/) provides platform-specific instructions and the correct file downloads for each platform.

## Converting between formats {#converting}

If your platform requires a format that DNSimple does not provide directly, you can convert between formats using [OpenSSL](https://www.openssl.org/), a widely available command-line tool.

Common conversions:

**PEM to PFX** (for IIS, Azure):

```bash
openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt -certfile chain.pem
```

**PEM to DER**:

```bash
openssl x509 -outform der -in certificate.crt -out certificate.der
```

**DER to PEM**:

```bash
openssl x509 -inform der -in certificate.der -out certificate.pem
```

> [!WARNING]
> Never share your private key file or upload it to public services. When converting formats, work on a secure machine and delete any temporary copies of the private key afterward.

## Have more questions?

If you have any questions about certificate file formats or need help with installation, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
