---
title: Getting Started with SSL Certificates
excerpt: How to get started with a new SSL Certificate, from purchase to setup.
categories:
- SSL Certificates
---

# Getting Started with SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

An [SSL certificate](/articles/ssl-certificates/) is required to enable SSL on your site and build a secure connection between a browser and your server to encrypt sensitive information, such as credit card details or private data.

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the [certificate authority](/articles/what-is-certificate-authority/).

<note>
#### How long does it take to issue an SSL certificate?

In general, issuing a new SSL certificate can take from a few minutes to a few hours. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate/).
</note>

## SSL certificate requirements {#requirements}

Before starting, take a moment to review how you will use the certificate and be sure to have access to the server configuration or a feature to install a custom certificate on your server.

If you are not familiar with SSL certificates, you may want to learn more about the different [SSL certificate types](/articles/ssl-certificates-types/).

Here's some questions you should be able to answer:

- We [offer different type of certificates](/articles/ssl-certificates/). What certificate type do you want to purchase?
- What is the [appropriate common name](/articles/ssl-certificate-hostname/) for your case?
- Check the web server documentation to understand if you need a [custom CSR](/articles/what-is-csr/).

You'll also need a dnsimple account. **You are not required to transfer or host a domain with us to purchase an SSL certificate**. You can purchase an SSL certificate for a domain, even if the domain is hosted elsewhere or registered with another registrar.

Feel free to [contact us](https://dnsimple.com/contact) if you can't find the answer to any of the questions above, or if you have any doubt.

## Purchasing the SSL certificate {#purchase}

[Purchase](/articles/purchasing-ssl-certificates/) the desired SSL certificate from your DNSimple control panel. If the SSL certificate is expiring and it was previously purchased with us, you can [renew](/articles/renewing-ssl-certificates/) it and we will default some settings for you.

If you need to use a [custom CSR](/articles/what-is-csr/), generate it and paste it in the SSL certificate purchase form.

<warning>
If you use a custom CSR, be sure you have stored the private key safely as it is the only way to use your SSL certificate.
</warning>

## Configuring the SSL certificate {#submit}

[Select the SSL certificate validation email](/articles/ssl-certificates-email-validation/#select-email) and submit your certificate for validation.

<warning>
The validation email must be a valid recipient, an email will be sent to validate the certificate. [Learn more about email validation](/articles/ssl-certificates-email-validation/).
</warning>

## Approving the SSL certificate {#approve}

After submitting your request you will receive a message containing a link to validate your identity and domain ownership at the email address you selected. Be sure to check your junk folder in case it was inadvertently routed there.

Click on the link to approve and issue the certificate.

<note>
[It may take some time](/articles/how-long-to-issue-ssl-certificate/) to issue a certificate once the validation is completed. Every so often we see a certificate held up by the certificate authority for other reasons. If you feel its taking longer than expected please [contact us](https://dnsimple.com/contact) and we will investigate.
</note>


## Downloading the SSL certificate {#download}

Once the SSL certificate is issued, you will be able to download it from the certificate page in your DNSimple account, along with the primary key (if we created the CSR for you) and the intermediate SSL certificate bundle.

![SSL certificate page](/files/ssl-certificate-page.png)

You may also receive an email from the certificate authority with the certificate, however we suggest you to download the files from your DNSimple account as we provide some extra tools to easily package and convert your SSL certificate in a number of formats.

<div class="section-steps" markdown="1">
##### To go to the SSL certificate page

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down the page until you see the <label>SSL certificates</label> section and click on the relevant certificate.

    ![SSL certificate page link](/files/domain-view-ssl-certificate-link.png)

</div>


## Installing the SSL certificate {#install}

To install the certificate click on the <label>install the SSL certificate</label> link on the certificate page and follow the instructions.

![Install SSL certificate](/files/ssl-certificate-install-link.png)

We provide step-by-step instructions for several web servers and services.

![SSL certificate installation page](/files/ssl-certificate-installation-page.png)

If the service or the web server you want to use is not listed in the page, simply click <label>other</label> to access the SSL certificate, intermediate chain and primary key files, and follow the service/software vendor instructions to install the certificate.

You may also find the following guides useful:

- [Ryan McGeary's Guide](http://ryan.mcgeary.org/2011/09/16/how-to-add-a-dnsimple-ssl-certificate-to-heroku/)
- [Heroku Guide for DNSimple Certificates](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple)
