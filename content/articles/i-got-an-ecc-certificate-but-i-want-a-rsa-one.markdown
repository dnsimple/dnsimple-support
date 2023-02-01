---
title: I got an ECC-signed certificate but want RSA
excerpt: What to do when you need your SSL Certificate to be signed with an RSA key.
categories:
- SSL Certificates
---

# I got an ECC-signed certificate but want RSA

DNSimple provides SSL certificates using elliptic curve keys by default, but there are some situations or requirements where you still need to use an RSA key as the certificate signing key. 

The following sections explain what you need to do to get your SSL certificates signed with RSA keys.

## Let's Encrypt certificates

SSL certificates issued by Let's Encrypt can't be reissued, which means that you will need to order a new certificate or manually renew an existing one. Follow these steps:

1. Ensure auto-renewal is disabled on the certificate you want to replace.
2. Renew the certificate if it's about to expire. Otherwise, order a new certificate.
  * Make sure you select the radio button for `RSA`

Check out our guides about [ordering](http://localhost:3000/articles/renewing-lets-encrypt-ssl-certificate/) and [renewing](articles/ordering-lets-encrypt-certificate/) Let's Encrypt certificates.

## Sectigo certificates

You can follow the [regular process for reissuing a Standard SSL Certificate](/articles/reissuing-ssl-certificate/), which lets you choose RSA as the signature algorithm. Make sure:

* The reason explains that you need a RSA-based certificate.
* The radio button for `RSA` is selected.
* Copy the `CSR_FILE.pem` content into the text area.

![Reissuing a commercial cert with RSA](/files/reissue_commercial_cert_with_rsa.png)

Once the certificate is reissued, **you will have to go through the steps of configuring, verifying, and installing the certificate to receive the certificate.**
