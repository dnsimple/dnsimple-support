---
title: Ordering a Standard SSL Certificate
excerpt: How to order a standard SSL certificate with DNSimple.
meta: Learn how to easily order a standard SSL certificate with DNSimple. Secure your website and protect your data with our step-by-step guide.
categories:
- SSL Certificates
---

# Ordering a Standard SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides an SSL certificate interface you can use to order a new SSL certificate.

Starting March 15, 2026, standard SSL certificates sold by DNSimple are valid for a maximum of 200 days due to [CA/Browser Forum requirements](/articles/can-multi-year-ssl-certificates/#shorter-validity). You will need to purchase a new certificate before it expires to maintain uninterrupted coverage. Sixty days before the certificate expires, you will begin receiving renewal notices.


## Before starting

To order an SSL certificate you need a DNSimple account.

> [!NOTE]
> You are not required to keep an active subscription to access the certificate, however some features, such as certificate renewal or auto-renewal, will not be available when you unsubscribe.

You can order an SSL certificate for a domain, even if the domain is hosted elsewhere or registered with another registrar. **You are not required to transfer or host a domain with us to purchase a Sectigo SSL certificate**.

Please ensure you comply with all the [technical requirements](/articles/getting-started-ssl-certificates/#requirements) in our [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/) page before ordering the certificate.

For more details about the configuration, approval, and installation of the certificate, read the [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/) article, or follow the instructions on the site after you purchase the SSL certificate order.

If you are looking to renew an existing certificate, read [Renewing a standard SSL certificate](/articles/renewing-standard-ssl-certificate/).


## Ordering a Standard SSL certificate {#order}

Before purchasing an SSL certificate, read the [Getting Started with SSL certificates article](/articles/getting-started-ssl-certificates/) to make sure you are familiar with the SSL certificate process.

The order is the first step in getting an SSL certificate. It will create an SSL certificate order that represents a request for a certificate to the CA.
    
### Ordering a certificate

1.  If you have more than one account, select the relevant one.
2.  If the domain is **not** already in your account, follow the instructions to [add a domain without transferring it](/articles/adding-domain/).
3.  If the domain is already in your account, on the top-nav menu, click the <label>Certificates</label> tab, then the **Add new** button on the upper right.   
4. From the drop-down under Sectigo, locate the domain you are purchasing the certificate for. If there is only one domain in the account, or you have come to the certificate page directly from the domain, click **Continue**

   ![continue on certificate page](/files/purchase-certificate-without-subscription-page.png)
   
5. Click **Continue**.
6. Follow the instructions to order the certificate.

    1.  [Read this article](/articles/ssl-certificate-names/) to determine the appropriate hostname of your SSL certificate.
    2.  Enter the certificate common name. Use an `*` to order a wildcard certificate.
    3.  **Check the radio buttons for the algorithm of the certificate**. ECDSA is selected for you by default, but you can select RSA as the signature algorithm.
    4.  Leave the CSR option unchecked, unless a [custom CSR](/articles/what-is-csr/) is needed. The easiest thing to do is to have DNSimple automatically generate the CSR (and a new private key to go with it). Make sure to read our [private key policy](https://dnsimple.com/private-key-policy).
    5.  Click **Purchase certificate** if you have a subscription.
   
   ![Purchase a Certificate](/files/dnsimple-certificate-purchase.png)

   If  you do not have a subscription, click **Continue payment**.

   ![Purchase a Certificate no subscription](/files/purchase-ssl-certificate-continue-payment.png)

   6. Once the certificate is paid for, select the validation email from the list and click **Send validation email**.

   ![Select validation email](/files/select-validation-email.png)

> [!NOTE]
> The certificate price will be held on your card immediately.
>    Your card will be charged once the certificate is issued.
>    If the issuance fails, funds will be released.

    7. Follow the steps in the validation email. 

## Next steps

Once you order the certificate, **you will have to install and configure the certificate**.

See [how to install a certificate](/articles/installing-ssl-certificate/).

## Have more questions?

If you have any questions about purchasing standard certificates with DNSimple, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
