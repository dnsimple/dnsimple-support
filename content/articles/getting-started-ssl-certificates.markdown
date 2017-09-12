---
title: Getting Started with SSL Certificates
excerpt: How to get started with a new SSL Certificate, from order to installation.
categories:
- SSL Certificates
---

# Getting Started with SSL Certificates and DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

An [SSL certificate](/articles/ssl-certificates) is required to enable SSL on your site and build a secure connection between a browser and your server to encrypt sensitive information, such as credit card details or private data.

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the [certificate authority](/articles/what-is-certificate-authority). For this reason, [this is not a real-time process](/articles/how-long-to-issue-ssl-certificate).

## Before you start {#requirements}

Before starting, take a moment to review how you will use the certificate and be sure to have access to the server configuration, or a feature to install a custom certificate on your server.

If you are not familiar with SSL certificates, you may want to learn more about the different [SSL certificate types](/articles/ssl-certificates-types).

In some limited instances, you may need to use a custom [CSR](/articles/what-is-csr) to acquire a new certificate. Check your web server's documentation to determine if you do. DNSimple will generate one for you automatically if you do not provide a custom CSR, which is fine in most cases.

**You are not required to transfer or host a domain with us to order an SSL certificate**. You can acquire a Standard SSL certificate for a domain, even if the domain is hosted elsewhere or registered with another registrar. Let's Encrypt certificates can be ordered only for domains resolving with DNSimple. More details are available [on the articles about ordering the two types of certificates](#order).

## Choose the certificate product

We [offer different types of certificates](/articles/ssl-certificates). You will need to determine which type you would like to acquire.

## Choose the certificate names

Some types of certificates allow multiple names to be chosen. Before ordering your certificate you will need to know what the [appropriate host name](/articles/ssl-certificate-names) is for your case.

# Steps

These are the generic steps required in order to successfully secure your website with an SSL certificate:

1. [Order the SSL certificate](#order)
1. Configure and submit the SSL certificate
1. [Validate the SSL certificate](#validate)
1. [Download and install the SSL certificate](#install)

## Order the certificate {#order}

Because acquiring a certificate is different between the Certificate Authorities we support, we have provided separate articles about these two:

- [Ordering a Standard certificate](/articles/ordering-standard-certificate)
- [Ordering a Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate)

If the SSL certificate is expiring and it was previously purchased with us, you can [renew](/articles/renewing-ssl-certificates) it and we will default some settings for you.

If you need to use a [custom CSR](/articles/what-is-csr), generate it and [order a Standard certificate](/articles/ordering-standard-certificate) where you can paste it in the SSL certificate purchase form.

<warning>
If you use a custom CSR, be sure you have stored the private key safely as it is the only way to use your SSL certificate.
</warning>

## Validate the certificate request {#validate}

### Let's Encrypt validation

If you have ordered a Let's Encrypt certificate, the request will be automatically validated, provided your domain is resolving with us properly. If there is a delay of more than a 20 minutes from order to issuance, please contact us via our support channels to investigate any possible issues.

### Standard validation

If you have ordered a Standard certificate, you have a bit more work to do.

[Select the SSL certificate validation email](/articles/ssl-certificates-email-validation/#select-email) and submit your certificate for validation.

<warning>
The validation email must be a valid recipient, an email will be sent to validate the certificate. [Learn more about email validation](/articles/ssl-certificates-email-validation).
</warning>

After submitting your request you will receive a message containing a link to validate your identity and domain ownership at the email address you selected. Be sure to check your junk folder in case it was inadvertently routed there.

Click on the link to approve and issue the certificate.

<note>
[It may take some time](/articles/how-long-to-issue-ssl-certificate) to issue a certificate once the validation is completed. Every so often we see a certificate held up by the certificate authority for other reasons. If you feel its taking longer than expected please [contact us](https://dnsimple.com/contact) and we will investigate.
</note>

## Install the certificate {#install}

Once the SSL certificate is issued, you will be able to download it from the certificate page in your DNSimple account, along with the primary key (if we created the CSR for you) and the intermediate SSL certificate bundle.

![SSL certificate page](/files/ssl-certificate-page.png)

You may also receive an email from the certificate authority with the certificate, however we suggest you use the [step-by-step installation instructions](/articles/installing-ssl-certificate) we provide.
