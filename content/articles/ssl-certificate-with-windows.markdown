---
title: Using an SSL Certificate with Windows
excerpt: 
categories:
- SSL Certificates
---

# Using an SSL Certificate with Windows

If you purchase a single domain certificate through DNSimple and would like to install it on a Windows server, you will first need to convert the certificate to PFX format using OpenSSL:

`openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt`

Once you've done that, you should install the certificate per the [instructions on the Rapid SSL support site](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&actp=CROSSLINK&id=SO22345).
