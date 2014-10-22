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

Getting a new SSL certificate is a multi-step process and involves several parties: the customer (you), DNSimple, and the [certificate authority](/articles/what-certificate-authority/).

<note>
#### How long does it take to issue an SSL certificate?

In general, issuing a new SSL certificate can take from a few minutes to a few hours. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate/).
</note>

## Reviewing the SSL certificate requirements {#review}

Before starting, take a moment to review how you will use the certificate and be sure to have access to the server configuration or a feature to install a custom certificate on your server.

If you are not familiar with SSL certificates, you may want to learn more about the different [SSL certificate types](/articles/ssl-certificates-types/).

Here's some questions you should be able to answer:

- We [offer different type of certificates](/articles/ssl-certificates/). What certificate type do you want to purchase?
- What is the [appropriate common name](/articles/ssl-certificate-hostname/) for your case?
- Check the web server documentation to understand if you need a [custom CSR](/articles/what-is-csr/).

Feel free to [contact us](https://dnsimple.com/contact) if you can't find the answer to any of the questions above, or if you have any doubt.

## Purchasing the SSL certificate {#purchase}

[Purchase](/articles/purchasing-ssl-certificates/) the desired SSL certificate from your DNSimple control panel. If the SSL certificate is expiring and it was previously purchased with us, you can [renew](/articles/renewing-ssl-certificates/) it and we will default some settings for you.

If you need to use a [custom CSR](/articles/what-is-csr/), generate it and paste it in the SSL certificate purchase form.

<warning>
If you use a custom CSR, be sure you have stored the private key safely as it is the only way to use your SSL certificate.
</warning>

## Configuring the SSL certificate {#submit}

[Select the SSL certificate email approver](/articles/selecting-ssl-certificates-email/) and submit your certificate for validation.

<warning>
The approver email must be a valid recipient, an email will be sent to validate the certificate. [Learn more about email validation](/articles/ssl-certificates-email-approval/).
</warning>

## Approving the SSL certificate {#approve}

After submitting your request you will receive a message containing a link to validate your identity and domain ownership at the email address you selected. Be sure to check your junk folder in case it was inadvertently routed there.

Click on the link to approve and issue the certificate.

<note>
[It may take some time](/articles/how-long-to-issue-ssl-certificate/) to issue a certificate once the validation is completed. Every so often we see a certificate held up by the certificate authority for other reasons. If you feel its taking longer than expected please [contact us](https://dnsimple.com/contact) and we will investigate.
</note>

## Installing the SSL certificate {#install}

Once the SSL certificate is issued, you will receive an email from the certificate authority with the certificate. You can also download it from your DNSimple control panel.

Install the certificate and private key on your server. Each software package (web, email server, etc.) may have a unique method to install them.

Please see these certificate authority installation instructions for various packages:

- [RapidSSL](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&id=SO16226&actp=LIST&viewlocale=en_US)
- [Comodo](https://support.comodo.com/index.php?_m=knowledgebase&_a=view&parentcategoryid=95&pcid=1&nav=0,96,1)

You may also find the following guides useful:

- [Ryan McGeary's Guide](http://ryan.mcgeary.org/2011/09/16/how-to-add-a-dnsimple-ssl-certificate-to-heroku/)
- [Heroku Guide for DNSimple Certificates](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple)
