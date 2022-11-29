---
title: I got an ECC-signed certificate but want RSA
excerpt: How to reissue an SSL Certificate using an RSA Signing Key.
categories:
- SSL Certificates
---

# Reissuing an SSL Certificate using an RSA Signing Key

DNSimple provides SSL certificates using elliptic curve keys by default, but there are some situations or requirements where you still need to use an RSA key as the certificate signing key.

The RSA-signed certificates are available by generating a custom Certificate Signing Request (CSR) and using it while reissuing the SSL certificate. 

## Before starting

In this guide, we assume you have OpenSSL installed in your system.  If you don't have it available, you will need to install it:

* Using your favorite package manager: [apt](https://packages.debian.org/bullseye/openssl), [dnf](https://packages.fedoraproject.org/pkgs/openssl/openssl/), [brew](https://formulae.brew.sh/formula/openssl@3), [nuget](https://www.nuget.org/packages/open_ssl), [chocolatey](https://community.chocolatey.org/packages/openssl), etc. 
* Using the [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries).
* Finding other alternatives to generate the RSA private key and the CSR.

## Generating an RSA private key

First, generate an RSA private key that will be used in the next steps to sign the CSR.

```bash
$ openssl genrsa -out KEY_FILE.pem 2048
```

## Generating a Certificate Signing Request

Next, generate the CSR. In this example we'll use the `-subj` argument to the OpenSSL command. If you don't specify it, you'll be asked a few clarifying questions.

<info>
* C is for Country
* ST is for State
* L is for Location
* O is for Organization
* CN is for Common Name — this is especially important, as it must match the certificate CN.
</info>

```bash
$ openssl req -new -key KEY_FILE.pem -nodes -out CSR_FILE.pem -subj "/C=US/ST=FL/L=Melbourne/O=dnsimple/CN=subdomain.example.com"
```

## Follow the regular process for reissuing a Standard SSL Certificate

Finally, follow the [regular process for reissuing a Standard SSL Certificate](/articles/reissuing-ssl-certificate/). Make sure:

* The reason explains that you need a RSA-based certificate.
* The checkbox `I want to provide a custom CSR` is checked.
* Copy the `CSR_FILE.pem` content into the text area.

![Providing a custom CSR](/files/reissue-with-custom-csr.png)

Once the certificate is reissued, **you will have to go through the steps of configuring, verifying, and installing the certificate to receive the certificate.**
