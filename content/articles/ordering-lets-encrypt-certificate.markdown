---
title: Ordering a Let's Encrypt Certificate
excerpt: How to get request a certificate from Let's Encrypt with DNSimple
categories:
- SSL Certificates
---

# Ordering a Let's Encrypt Certificate

<note>
This article describes a feature in private beta. Please contact support to join the beta and get access to the feature.
</note>

<note>
This article describes a feature that is only available to the [new plans](/articles/new-plans#newer-plans-only).
</note>

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate interface you can use to acquire a new SSL certificate issued by Let's Encrypt.

SSL certificates issued by Let's Encrypt are valid for 90 days from the issue date. If you have selected auto-renewal for the certificate, we will begin retrying the renewal 30 days before the expiration date; otherwise, we will begin sending expiration notices at that point.


## Order requirements

To order an SSL certificate you need a DNSimple account. A subscription is necessary to keep the certificate renewed and the domain must be delegated to use DNSimple's name servers due to the DNS challenge—which is automatically configured and checked in our implementation. **It is not necessary to transfer registration to us, but the domain must be delegated to our name servers.**

# Steps

These are the steps required in order to successfully secure your website with an SSL certificate:

1. [Order the SSL certificate](#order)
1. Configure and submit the SSL certificate
1. Validate and approve the SSL certificate
1. Download and install the SSL certificate

For more details about the configuration, approval and installation of the certificate, read the [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates) article or follow the instructions on the site after you submit the SSL certificate order.


## Ordering an SSL certificate {#order}

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the certificate authority. Before purchasing an SSL certificate, read the [Getting Started with SSL certificates article](/articles/getting-started-ssl-certificates) to make sure you are familiar with the SSL certificate process.

The order is the first step into getting an SSL certificate. It will create an SSL certificate order (for no charge, in the case of Let's Encrypt certificates) that represents a request of a certificate to the CA.

<div class="section-steps" markdown="1">
##### To order a certificate

1.  Log into your DNSimple account.
1.  If the domain is not already in your account, follow the instructions to [add a domain for domain services](/articles/adding-domain) and add any records to it before [delegating to our name servers](/articles/delegating-dnsimple-hosted).
1.  If the domain is already in your account, on the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Select the SSL Certificates tab and click <label>Get an SSL Certificate</label> to start the order.
1.  Click <label>Continue</label> under the Let's Encrypt option.
1.  Follow the instructions to order the certificate.

    1.  [Read this article](/articles/ssl-certificate-names) to determine the appropriate host name of your SSL certificate.
    1.  For different plans, the names available will differ. If you have the ability to select alternate names for your certificate, do so. Otherwise, continue to the next step.
    1.  Select a Contact from your contact list. The contact information will be used to generate the certificate request (CSR).
    1.  Select whether you would like to automatically renew the certificate. If you do so, the certificate will be renewed 30 days prior to expiration as recommended by Let's Encrypt.
    1.  Submit the order.
</div>

### What this looks like

As mentioned above, you will see a different form for ordering a Let's Encrypt certificate based on the plan to which you are subscribed. If you have full access to SAN certificate configuration, this is what you'll see:

![Let's Encrypt with SAN](/files/lets-encrypt-new-san.png)

Other plans provide the ability to configure only one name on your Let's Encrypt certificate:

![Let's Encrypt with single name configuration](/files/lets-encrypt-new-names.png)

On some plans we do not allow the configuration of a name but instead configure the certificate to work only on the apex and www-subdomain of the zone:

![Let's Encrypt with fixed names](/files/lets-encrypt-new-fixed.png)


## What's next?

Once you order the certificate, we will configure the necessary DNS records and check that they are resolving properly before having Let's Encrypt check the DNS challenge. Once the challenge is verified, the certificate will be issued and you can download and install the certificate on your server.

<note>
Due to the short expiration cycle of Let's Encrypt certificates, it is recommended to automate as much of the installation process as possible. You can consult our [developer documentation on SSL Certificates](https://developer.dnsimple.com/v2/domains/certificates/) for more information on how to accomplish this via our API.
</note>
