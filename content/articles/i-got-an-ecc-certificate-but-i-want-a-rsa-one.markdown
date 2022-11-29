---
title: I got an ECC-signed certificate but I want a RSA one
excerpt: How to reissue a SSL Certificate using a RSA Signing Key.
categories:
- SSL Certificates
---

# How to reissue a SSL Certificate using a RSA Signing Key?

DNSimple provides SSL certificates using elliptic curve keys by default but there are some situations or requirements where you still need to use RSA key as certificate signing key.

The RSA-signed certificates are available generating a custom Certificate Signing Request (CSR) and using it while reissuing the SSL certificate. In this guide we will show you how to do this in three steps.

## Before you start

In this guide we are assuming you have OpenSSL installed in your system.  In case you don't have it available, you will need to install it:

* Using your favourite package manager: [apt](https://packages.debian.org/bullseye/openssl), [dnf](https://packages.fedoraproject.org/pkgs/openssl/openssl/), [brew](https://formulae.brew.sh/formula/openssl@3), [nuget](https://www.nuget.org/packages/open_ssl), [chocolatey](https://community.chocolatey.org/packages/openssl) ...
* Using the [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries)
* Finding other alternatives to generate the RSA private key and the CSR

## Generate a RSA private key

First step is to generate a RSA private key that will be used in the next steps to sign the CSR.

```bash
$ openssl genrsa -out KEY_FILE.pem 2048
```

## Generate a Certificate Signing Request

Next step is to generate the CSR. In this example we are going to use the `-subj` argument to the OpenSSL command, but if you don't specify it, a few question will be asked to you interactively.

<info>
Have in mind what each parameter means:

* C is for Country
* ST is for State
* L is for Location
* O is for Organization
* CN is for Common Name, this is specially important as it must match the certificate one.
</info>

```bash
$ openssl req -new -key KEY_FILE.pem -nodes -out CSR_FILE.pem -subj "/C=US/ST=FL/L=Melbourne/O=dnsimple/CN=subdomain.example.com"
```

## Follow the regular process for reissuing a Standard SSL Certificate

Finally, last step is to follow the [regular process for reissuing a Standard SSL Certificate](/articles/reissuing-ssl-certificate/). Make sure:

* The checkbox `I want to provide a custom CSR` is checked
* Copy the `CSR_FILE.pem` content into the text area

![Providing a custom CSR](/files/reissue-with-custom-csr.png)

Once the certificate was reissued **you will have to go through the steps of configuring, verifying, and installing the certificate in order to receive the certificate.**
