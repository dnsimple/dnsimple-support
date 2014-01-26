---
title: SSL Certificates Current Best Practices
excerpt: 
categories:
- SSL Certificates
---

# SSL Certificates Current Best Practices

DNSimple offers SSL certificates from two different [certificate authorities (CAs)](/articles/what-is-a-certificate-authority). RapidSSL for normal, single name certificates and Comodo for wildcard certificates.

There are three broad steps to installing a certificate.

- Generating a private key and a certificate signing request (CSR). 
- Requesting a CA validate your identity and sign the certificate. 
- Installing your private key and the certificate on your server.

## Private key and certificate signing request

DNSimple will automatically generate these if you like. They will be available to download once generated. You may choose to permanently delete the private key stored at DNSimple to increase your security. Be sure you have stored the private key safely as it is the only way to use your SSL certificate.

Alternatively, you may generate your private key and CSR using publicly available tools that are beyond the scope of this article.

The certificate is uniquely associated to a single name or a wildcard name. You need to [select the hostname](/articles/ssl-certificate-hostname) during the purchase.

## Certificate authority validation and signing

These types of certificates are verified via email only.

A CA will present several common email addresses for your domain to choose from (i.e. admin@example.com, webmaster@example.com, etc). In addition to these the CA will present the email address listed as your administrative contact for your domain. 

If you don't have (and don't want to configure) any of these common email addresses your domain administrator email address is easiest to change. To change it follow "Contacts" at the top of the page on DNSimple, then "Manage" your domain, and follow "Change Contacts".

If domain privacy is enabled you may wish to disable it long enough for the CA to retrieve your real admin email address.

After submitting your request you will receive a message containing a link to validate your identity at the email address you selected. Be sure to check your junk folder in case it was inadvertently routed there.

It may take up to four days to receive your validation email and, once validated, signed by the CA. In general we see certificates being signed the same day.

Every so often we see a certificate held up by the CA for other reasons. If you feel its taking longer than expected please contact DNSimple support and we will investigate.

## Installing your private key and certificate

Each software package (web, email server, etc.) may have a unique method to install private keys and certificates.

Please see these certificate authority installation instructions for various packages:

- [RapidSSL](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&id=SO16226&actp=LIST&viewlocale=en_US)
- [Comodo](https://support.comodo.com/index.php?_m=knowledgebase&_a=view&parentcategoryid=95&pcid=1&nav=0,96,1)

You may also find the following guides useful:

- [Heroku Guide for DNSimple Certificates](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple)
- [Ryan McGeary's Guide](http://ryan.mcgeary.org/2011/09/16/how-to-add-a-dnsimple-ssl-certificate-to-heroku/)
