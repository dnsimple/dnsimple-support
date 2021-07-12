---
title: Ordering a Standard SSL Certificate
excerpt: How to order a standard SSL certificate with DNSimple.
categories:
- SSL Certificates
---

# Ordering a Standard SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate interface you can use to order a new SSL certificate.

All standard SSL certificates sold by DNSimple are valid for at least one year from their issue date. Sixty days before the certificate expires you will begin receiving renewal notices.


## Before you start

To order an SSL certificate you need a DNSimple account. In order to finalize the order, the account [must be subscribed](/articles/account-activation) to a DNSimple plan.

<note>
You are not required to keep an active subscription to access the certificate, however some features such as certificate renewal or auto-renewal will not be available when you unsubscribe.
</note>

You can order an SSL certificate for a domain, even if the domain is hosted elsewhere or registered with another registrar. **You are not required to transfer or host a domain with us to purchase a Sectigo SSL certificate**.

Please be sure you comply with the all the [technical requirements](/articles/getting-started-ssl-certificates/#requirements) in our [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates) page before ordering the certificate.

For more details about the configuration, approval and installation of the certificate, read the [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates) article or follow the instructions on the site after you purchase the SSL certificate order.

If you are looking to renew an existing certificate, read the renewing article.


## Order a Standard SSL certificate {#order}

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the certificate authority. Before purchasing an SSL certificate, read the [Getting Started with SSL certificates article](/articles/getting-started-ssl-certificates) to make sure you are familiar with the SSL certificate process.

The order is the first step into getting an SSL certificate. It will create an SSL certificate order that represents a request of a certificate to the CA.

<div class="section-steps" markdown="1">
##### To order a certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  If the domain is not already in your account, follow the instructions to [add a domain without transferring it](/articles/adding-domain).
1.  If the domain is already in your account, on the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Select the SSL Certificates tab and click <label>New certificate</label> to start the order.
1.  Click <label>Continue</label> under the Sectigo SSL option.
1.  Follow the instructions to order the certificate.

    1.  [Read this article](/articles/ssl-certificate-names) to determine the appropriate host name of your SSL certificate.
    1.  Enter the certificate common name. Use an `*` to order a wildcard certificate.
    1.  Select a Contact from your contact list. The contact information will be used to generate the certificate request (CSR).
    2.  Leave the CSR option unchecked, unless you really need to provide a [custom CSR](/articles/what-is-csr). The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it). Make sure to read our [private key policy](https://dnsimple.com/private-key-policy).
    3.  Submit the order.

    ![Purchase a Certificate](/files/dnsimple-certificate-purchase.png)

</div>


## What's next?

Once you order the certificate, **you will have to go through the steps of configuring, verifying, and installing the certificate in order to receive the certificate**.

See [getting started with SSL certificates](/articles/getting-started-ssl-certificates).
