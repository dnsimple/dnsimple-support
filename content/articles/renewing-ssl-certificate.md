---
title: Renewing an SSL Certificate
excerpt: Instructions to renew an SSL certificate for a domain with DNSimple.
meta: Learn how to renew your SSL certificate in DNSimple, including how to identify your certificate type and complete the renewal process.
categories:
- SSL Certificates
---

# Renewing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

An SSL certificate renewal in DNSimple results in a new certificate being issued to replace your expiring one. Both the certificate and private key must be replaced on the server. Learn more about [how certificate renewal works](/articles/how-certificate-renewal-works/).

> [!NOTE]
> A renewal will not extend your existing certificate's expiration date. It results in a brand new certificate that must be installed in place of the existing one.

## Before You Start {#before-you-start}

- You need an active SSL certificate in your DNSimple account that is approaching its expiration date.
- You will begin receiving renewal notices 60 days before a Sectigo certificate expires and 30 days before a Let's Encrypt certificate expires.
- You may have more than one certificate for a hostname at the same time, so renewing before expiration will not affect your current operations.

## Renewing Your SSL Certificate {#renew}

<div class="section-steps" markdown="1">
##### Steps to renew your certificate

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Scroll down to the <label>SSL certificates</label> section and find the active SSL certificate.
1. Identify your certificate type and follow the appropriate renewal guide:

    - **Sectigo certificate**: Follow the steps in [Renewing a Sectigo SSL Certificate](/articles/renewing-standard-ssl-certificate/). You will need to complete [email-based domain validation](/articles/ssl-certificates-email-validation/) again.
    - **Let's Encrypt certificate**: Follow the steps in [Renewing a Let's Encrypt SSL Certificate](/articles/renewing-lets-encrypt-ssl-certificate/). You can also enable [auto-renewal](/articles/letsencrypt/#auto-renewal) to automate this process.

</div>

## After Renewal {#after-renewal}

Once you have completed the renewal, you must configure, verify, and install the new certificate on your server:

1. **Sectigo certificate**:
   - Complete [email-based domain validation](/articles/ssl-certificates-email-validation/) to receive the new certificate.
   - If DNSimple generated the CSR for you, the renewed certificate has a different private key. You will need to replace both the certificate and the private key on your server.
1. **Let's Encrypt certificate**:
   - DNSimple handles domain validation automatically using DNS.
   - Wait for the renewed certificate to be issued.
1. Install the new certificate using the [SSL certificate installation guide](/articles/installing-ssl-certificate/).

> [!WARNING]
> If you do not complete the verification and installation steps, the renewal is not finished. Browsers will display a security warning when the old certificate expires.

See [Getting Started with SSL Certificates](/articles/getting-started-ssl-certificates/) for the full process from order to installation.

## Have more questions? {#have-more-questions}

If you have additional questions or need any assistance with renewing your SSL certificate, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
