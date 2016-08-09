---
title: How does the Certificate Renewal work?
excerpt: Welcome to DNSimple. This page is about how certificate renewal works. Hosted DNS has never been this easy.
categories:
- SSL Certificates
---

# How does the Certificate Renewal work?

The SSL certificate purchase process is different than a domain. Once an SSL certificate is purchased and issued, there is no formal way to extend the expiration of the existing certificate, therefore there is no formal renewal feature.

However, to keep things simple, DNSimple provides a certificate renewal interface that will drastically reduce the amount of time required to purchase a new certificate by reusing part of the settings of the expiring certificate.

We call it *renewal*, however an SSL certificate renewal is effectively a new SSL certificate purchase.

<note>
When you renew a certificate, you will need to go through the [certificate domain validation process](/articles/ssl-certificates-email-validation) again since a new certificate will be issued.

The brand new certificate must be installed in place of the existing one. Both certificate and private key must be replaced on the server.
</note>

To renew your certificate follow the steps described in the [renewing an SSL certificate](/articles/renewing-ssl-certificate) article. Remember to install the brand new certificate in place of the existing one.

<warning>
If you don't approve the certificate, the renewal is not completed. If you don't replace the old certificate with the new one, the browsers will display a security warning when the old certificate expires.
</warning>
