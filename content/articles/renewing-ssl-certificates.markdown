---
title: Renewing an SSL Certificate
excerpt: 
categories:
- SSL Certificates
---

# Renewing an SSL Certificate

An SSL certificate renewal is effectively a new SSL certificate purchase. The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it) and submit the order. Once the new certificate is generated you can go through the same process for installing the private key and certificate as you would with any new SSL purchase.

All DNSimple SSL certificates are valid for one year from their purchase date. Sixty days before the certificate expires you will begin receiving renewal notices.

When you renew a certificate, you will need to go through the [certificate approval process](/articles/ssl-certificates-email-approval) again since a new certificate will be issued. **If you don't approve the certificate, the renewal is not completed**.

<note>
#### Important

A renewal will not extend your existing certificate expiration date, it will result in a brand new certificate that must be installed in place of the existing one. Both certificate and private key must be replaced on the server.

There is no way to extend the expiration of an existing certificate.
</note>

You may have more than 1 certificate for a host name at DNSimple at the same time, so renewing your certificate prior to the expiration date of your current certificate will not affect your operations. Note, however, that you will only be able to install 1 certificate on your server at a time.

## RapidSSL

For RapidSSL SSL certificates, if you renew prior to the current certificate expiration date, your new certificate expiration will be extended as follows:

- 46 - 90 days before expiration date, extend 3 months
- 16 - 45 days before expiration date, extend 2 months
- 15 days or less before expiration date, extend 1 month
- Up to 15 days after expiration date, extend 1 month

This extension will be from the new certificate purchase date.

## Comodo

Comodo SSL certificate will not be extended, therefore you should purchase your new certificate close to your old certificate expiration date, but with enough time for the certificate to be issued.

<note>
We recommend to renew the certificate no late than 1 week before expiration.
</note>

## Heroku

If you are using your certificate on Heroku then you may find [this article](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) helpful when preparing and deploying your newly issued certificate.

