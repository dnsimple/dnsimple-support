---
title: Using an SSL Certificate with Windows
excerpt: 
categories:
- SSL Certificates
---

# Using an SSL Certificate with Windows

If you purchase a single domain certificate through DNSimple and would like to install it on a Windows server, you will first need to convert the certificate to PFX format using OpenSSL.

Open a console and run the following command:

```
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt
```

Once you've done that, you should install the certificate per the [instructions on the Certificate Authority SSL support site:

- [Comodo instructions](https://support.comodo.com/index.php?_m=knowledgebase&_a=viewarticle&kbarticleid=1205&nav=0,96,1,95) for wildcard certificates
- [RapidSSL instructions](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&actp=CROSSLINK&id=SO22345) for single name certificate

