---
title: How to Get a Free Let's Encrypt SSL Certificate
excerpt: How to get a free Let's Encrypt SSL certificate with DNSimple.
meta: How to get a free Let's Encrypt SSL certificate through DNSimple. Step-by-step guide including DNS requirements and automated validation.
categories:
- SSL Certificates
- Enterprise
---

# How to Get a Free Let's Encrypt SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate interface you can use to get a free [SSL certificate](/articles/what-is-ssl-certificate/) issued by Let's Encrypt.

SSL certificates issued by Let's Encrypt are valid for 90 days from the issue date. If you have selected auto-renewal for the certificate, we will begin retrying the renewal 30 days before the expiration date. Otherwise, we will begin sending expiration notices at that point.


## Before You Start {#before-you-start}

To order an SSL certificate, you need a DNSimple account. A subscription is necessary to keep the certificate renewed, and the domain must be delegated to use DNSimple's name servers due to the DNS challenge — which is automatically configured and checked in our implementation.

> [!NOTE]
> It is not necessary to transfer registration to us, but the domain must be only delegated to our name servers.

For more details about the configuration, approval, and installation of the certificate, read the [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/) article, or follow the instructions on the site after you submit the SSL certificate order.


## Ordering a Let's Encrypt SSL Certificate {#order}

Before purchasing an SSL certificate, read the [Getting Started with SSL certificates article](/articles/getting-started-ssl-certificates/) to make sure you are familiar with the SSL certificate process.

The order is the first step in getting an SSL certificate. It will create an SSL certificate order (for no charge, in the case of Let's Encrypt certificates) that represents a request for a certificate to the CA.

<div class="section-steps" markdown="1">
##### Ordering a certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  If the domain is not already in your account, follow the instructions to [add a domain for domain services](/articles/adding-domain/), and add any records to it before [delegating to our name servers](/articles/delegating-dnsimple-hosted/).
1.  If the domain is already in your account, on the top-nav menu, click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.
1.  Select the SSL Certificates tab, and click <label>Get an SSL Certificate</label> to start the order.
1.  Click <label>Continue</label> under the Let's Encrypt option.
1.  Configure the certificate details:

    1.  [Read this article](/articles/ssl-certificate-names/) to determine the appropriate host name of your SSL certificate.
    1.  If your plan supports alternate names, select them. Otherwise, continue to the next step.
    1.  Select whether you would like to automatically renew the certificate. If enabled, the certificate will be renewed 30 days before expiration as recommended by Let's Encrypt.
    1.  ECDSA is selected by default, but you can select RSA as the signature algorithm if your scenario requires it.
    1.  Submit the order.

</div>

Check out our [pricing page](https://dnsimple.com/pricing) to understand the limitations on your subscription plan regarding Let's Encrypt SSL certificates.

## Next Steps {#next-steps}

Once you order the certificate, we will configure the necessary DNS records and check that they are resolving properly before having Let's Encrypt check the DNS challenge. Once the challenge is verified, the certificate will be issued, and you can download and install the certificate on your server.

> [!TIP]
> Due to the short expiration cycle of Let's Encrypt certificates, it is recommended to automate as much of the installation process as possible. You can consult our [developer documentation on SSL Certificates](https://developer.dnsimple.com/v2/certificates/) for more information on how to do this via our API.

## Have more questions?

If you have any questions or need assistance, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
