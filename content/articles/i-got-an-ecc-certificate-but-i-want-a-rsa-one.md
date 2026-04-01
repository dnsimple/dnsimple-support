---
title: How to Switch From an ECC-Signed Certificate to RSA
excerpt: What to do when you need your SSL certificate to be signed with an RSA key.
meta: Learn how to get an RSA-signed SSL certificate in DNSimple if you received an ECC-signed certificate, with steps for both Let's Encrypt and Sectigo certificates.
categories:
- SSL Certificates
---

# How to Switch From an ECC-Signed Certificate to RSA

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides SSL certificates using elliptic curve (ECC) keys by default, but some situations require an RSA key as the certificate signing key. Follow the steps below for your certificate type.

## Switching a Let's Encrypt Certificate to RSA {#lets-encrypt-rsa}

Let's Encrypt certificates cannot be reissued, so you will need to order a new certificate or manually renew an existing one.

<div class="section-steps" markdown="1">
##### Steps to get an RSA-signed Let's Encrypt certificate

1. Disable auto-renewal on the existing ECC certificate you want to replace.
1. Renew the certificate if it is about to expire, or order a new certificate.
1. On the certificate configuration page, select the <label>RSA</label> radio button for the signature algorithm.
1. Submit the order.

</div>

See our guides for [ordering](/articles/ordering-lets-encrypt-certificate/) and [renewing](/articles/renewing-lets-encrypt-ssl-certificate/) Let's Encrypt certificates.

## Switching a Sectigo Certificate to RSA {#sectigo-rsa}

For Sectigo certificates, you can reissue the existing certificate with an RSA key.

<div class="section-steps" markdown="1">
##### Steps to reissue a Sectigo certificate with RSA

1. Follow the [process for reissuing a Sectigo SSL certificate](/articles/reissuing-ssl-certificate/).
1. In the reason field, explain that you need an RSA-based certificate.
1. Select the <label>RSA</label> radio button for the signature algorithm.
1. Provide your CSR content in the text area if you have a custom CSR.
1. Submit the reissue request.

</div>

![Reissuing a commercial cert with RSA](/files/reissue_commercial_cert_with_rsa.png)

## Next Steps {#next-steps}

Once the new certificate is issued, you will need to configure, verify, and install it on your server:

- [Installing an SSL Certificate](/articles/installing-ssl-certificate/)
- [Re-Issuing an SSL Certificate](/articles/reissuing-ssl-certificate/)

## Have more questions? {#more-questions}

If you have additional questions or need any assistance switching from ECC to RSA, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
