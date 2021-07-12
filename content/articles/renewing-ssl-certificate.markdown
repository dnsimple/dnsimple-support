---
title: Renewing an SSL Certificate
excerpt: Instructions to renew an SSL certificate for a domain with DNSimple.
categories:
- SSL Certificates
---

# Renewing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate renewal interface you can use to purchase a renewal for an SSL certificate. Please note that [an SSL certificate renewal is effectively a new SSL certificate purchase](/articles/how-certificate-renewal-works).

## Renewing an SSL certificate {#order}

<info>
A renewal will not extend your existing certificate expiration date, it will result in a brand new certificate that must be installed in place of the existing one. Both certificate and private key must be replaced on the server.

There is no way to extend the expiration of an existing certificate &mdash; [Learn more](/articles/how-certificate-renewal-works)
</info>

Our [SSL certificate products](/articles/ssl-certificates#ssl-certificate-products) fall into two major classes for how renewals work:

- [Standard certificate renewals](/articles/renewing-standard-ssl-certificate)
- [Let's Encrypt certificate renewals](/articles/renewing-lets-encrypt-ssl-certificate)

Please consult whichever document is correct for your needs.

## What's next?

Once you purchased the certificate renewal, **you will have to go through the steps of configuring, verifying and installing the certificate in order to receive the certificate**. If we generated the CSR for you, each certificate has a different private key therefore you will also need to replace the private key.

These are the same steps you followed after you purchased your original certificate. See [getting started with SSL certificates](/articles/getting-started-ssl-certificates).

For a standard Sectigo certificate, you will need to [verify the SSL certificate order](/articles/ssl-certificates-email-validation) again, since a new certificate will be issued.

<warning>
**If you don't verify the certificate, the renewal is not completed** and browsers will display a security warning when the old certificate expires.
</warning>

You may have more than 1 certificate for a host name at DNSimple at the same time, so renewing your certificate prior to the expiration date of your current certificate will not affect your operations. Note, however, that you will only be able to install 1 certificate on your server at a time.
