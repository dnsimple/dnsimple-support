---
title: Renewing an SSL Certificate
excerpt: Welcome to DNSimple. This page is about renewing SSL certificates. Hosted DNS has never been this easy.
categories:
- SSL Certificates
---

# Renewing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate renewal interface you can use to purchase a renewal for an SSL certificate. Please note that [an SSL certificate renewal is effectively a new SSL certificate purchase](/articles/how-certificate-renewal-works/).

All DNSimple SSL certificates, including renewals, are valid for one year from their issue date. Sixty days before the certificate expires you will begin receiving renewal notices.

## Renewing an SSL certificate

<note>
A renewal will not extend your existing certificate expiration date, it will result in a brand new certificate that must be installed in place of the existing one. Both certificate and private key must be replaced on the server.

There is no way to extend the expiration of an existing certificate &mdash; [Learn more](/articles/how-certificate-renewal-works/)
</note>

<div class="section-steps" markdown="1">
##### To renew a certificate

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>SSL certificates</label> section and find the active SSL certificate. Click <label>Renew</label> to start the renewal.

    ![Renewing a Certificate](/files/certificates-renew-action.png)

    If you can't see the <label>Renew</label> button, the certificate is either expired or not in a state that allows a renewal.

1.  Follow the instructions to purchase the certificate renewal.

    1.  Check the certificate [common name](/articles/what-is-common-name/) matches the one you want to renew.
    1.  Leave the CSR option unchecked, unless you really need to provide a [custom CSR](/articles/what-is-csr/). The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it).
    1.  Submit the order.

    ![Renew a Certificate](/files/dnsimple-certificate-renewal.png)

</div>

## Finalizing the SSL certificate renewal

Once the order is submitted, you will have to go through the same process for configuring, verifying and installing the certificate as you would with any new SSL purchase. See [getting started with SSL certificates](/articles/getting-started-ssl-certificates/).

You will need to [verify the SSL certificate order](/articles/ssl-certificates-email-approval) again, since a new certificate will be issued.

<warning>
**If you don't verify the certificate, the renewal is not completed** and browsers will display a security warning when the old certificate expires.
</warning>

You may have more than 1 certificate for a host name at DNSimple at the same time, so renewing your certificate prior to the expiration date of your current certificate will not affect your operations. Note, however, that you will only be able to install 1 certificate on your server at a time.

## Comodo certificates

Comodo SSL certificate will not be extended, therefore you should purchase your new certificate close to your old certificate expiration date, but with enough time for the certificate to be issued.

<note>
We recommend to renew the certificate no late than 1 week before expiration.
</note>

## RapidSSL certificates

For RapidSSL SSL certificates, if you renew prior to the current certificate expiration date, your new certificate expiration will be extended as follows:

- 46 - 90 days before expiration date, extend 3 months
- 16 - 45 days before expiration date, extend 2 months
- 15 days or less before expiration date, extend 1 month
- Up to 15 days after expiration date, extend 1 month

This extension will be from the new certificate purchase date.

<note>
We no longer sell RapidSSL certificates. If you purchased the renewal for a single-hostname certificate before September 11th, 2014 then you may be entitled for the extension. In this case, the extension will be granted automatically. [Contact us](https://dnsimple.com/contact) if you have any questions.
</note>

## Heroku

If you are using your certificate on Heroku then you may find [this article](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) helpful when preparing and deploying your newly issued certificate.

