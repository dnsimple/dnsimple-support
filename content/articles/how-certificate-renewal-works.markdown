---
title: How does an SSL Certificate Renewal work?
excerpt: DNSimple provides a certificate renewal interface that will drastically reduce the amount of time required to purchase a new certificate.
categories:
- SSL Certificates
---

# How does an SSL Certificate Renewal work?

The SSL certificate lifecycle is different than a domain. Once an SSL certificate is requested and issued, there is no formal way to extend the expiration of the existing certificate.

Therefore there is no formal renewal feature. In other words, there isn't a way to extend the validity of an installed certificate without replacing it with a never certificate.

However, to keep things simple, DNSimple provides a certificate renewal interface that will drastically reduce the amount of time required to purchase a new certificate by reusing part of the settings of the expiring certificate.

We call it *renewal*, although an SSL certificate renewal is effectively a new SSL certificate request. Once the new certificate (the renewal) is issues, it must be installed in place of the existing one. Both certificate and private key must be replaced on the server.

To renew your certificate follow the steps described in the [renewing an SSL certificate](/articles/renewing-ssl-certificate) article. Remember to install the brand new certificate in place of the existing one.

<warning>
When you renew a certificate, you will need to go through the [certificate domain validation process](/articles/ssl-certificates-email-validation) again, as for every certificate request. If you don't validate the new certificate, the renewal will not be issued.

If you don't complete the renewal process, or if you don't replace the old certificate with the new one, the browsers will display a security warning when the old certificate expires.
</warning>
