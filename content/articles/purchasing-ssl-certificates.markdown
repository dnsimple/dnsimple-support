---
title: Purchasing an SSL Certificate
excerpt: Instructions to purchase an SSL certificate for a domain with DNSimple.
categories:
- SSL Certificates
---

# Purchasing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate interface you can use to purchase a new SSL certificate.

All DNSimple SSL certificates are valid for one year from their issue date. Sixty days before the certificate expires you will begin receiving renewal notices.


## Requirements

To purchase an SSL certificate you need a DNSimple account. In order to finalize the purchase, our system requires the account to be subscribed to a DNSimple plan, however you can unsubscribe later on once the certificate is successfully purchased and issued.

**You are not required to transfer or host a domain with us to purchase an SSL certificate**. You can purchase an SSL certificate for a domain, even if the domain is hosted elsewhere or registered with another registrar.


# Steps

These are the steps required in order to successfully secure your website with an SSL certificate:

1. [Purchase the SSL certificate](#order)
1. Configure and submit the SSL certificate
1. Validate and approve the SSL certificate
1. Download and install the SSL certificate

If you are looking to renew an existing certificate, read the renewing article. For more details about the configuration, approval and installation of the certificate, read the [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/) article or follow the instructions on the site after you purchase the SSL certificate order.


## Purchasing an SSL certificate {#order}

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the certificate authority. Before purchasing an SSL certificate, read the [Getting Started with SSL certificates article](/articles/getting-started-ssl-certificates/) to make sure you are familiar with the SSL certificate process.

The purchase is the first step into getting an SSL certificate. It will create an SSL certificate order that represents a request of a certificate to the CA.

<div class="section-steps" markdown="1">
##### To purchase a certificate

1.  Log into your DNSimple account.
1.  If the domain is not already in your account, follow the instructions to [add a domain without transferring it](/articles/adding-domain/).
1.  If the domain is already in your account, on the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll to the certificate section. Click <label>Buy an SSL Certificate</label> to start the order.
1.  Follow the instructions to purchase the certificate.

    1.  [Read this article](/articles/ssl-certificate-hostname/) to determine the appropriate common name of your SSL certificate.
    1.  Enter the certificate common name. Use an `*` to purchase a wildcard certificate.
    1.  Select a Contact from your contact list. The contact information will be used to generate the certificate request (CSR).
    1.  Leave the CSR option unchecked, unless you really need to provide a [custom CSR](/articles/what-is-csr/). The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it)
    1.  Submit the order.

    ![Purchase a Certificate](/files/dnsimple-certificate-purchase.png)

</div>


## What's next?

Once you purchased the certificate, **you will have to go through the steps of configuring, verifying and installing the certificate in order to receive the certificate**.

See [getting started with SSL certificates](/articles/getting-started-ssl-certificates/).
