---
title: Re-issuing an SSL Certificate
excerpt: How to reissue a previously issued SSL certificate with a new CSR and/or private key.
categories:
- SSL Certificates
---

# Re-issuing an SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

Re-issuing (also Re-Keying) an SSL certificate is the process of generating a new private key and CSR for an existing issued certificate.

Re-issuing an SSL certificate involves creating a new private key along with a new CSR and submitting the request to the CA. The process results in a new SSL certificate being issued.


## Why should I re-issue my certificate?

You may need to re-issue your certificate in one of the following cases:

- Your private key has been compromised
- You lose the private key attached to the SSL certificate
- You want to change the SSL certificate signature algorithm or encryption level
- You want to change any SSL certificate information

<info>
Re-issuing a certificate is not a fully automated process. Requests have to be manually handled by our support team and it may take a few days to complete the process. The existing certificate will continue to be valid during this time frame.
</info>

## Requesting an SSL certificate re-issue

<div class="steps" markdown="1">
##### To start a new certificate re-issue request

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click <label>Manage</label>.
1.  Scroll down to the <label>Active SSL Certificate</label> list and click on the certificate.

    ![](http://cl.ly/image/0S24193M3q1z/dnsimple-domain-certificatelist-issued.png.png)

1.  At the page, on the status line, look for the link to reissue the certificate.

    ![](http://cl.ly/image/0f1G080o0r1l/dnsimple-ssl-reissue-link.png)

    If the link is not present, it means the certificate is in a status where the certificate can not be reissued (e.g. a not issued or expired certificate).

1.  Click the link to access the "Reissue certificate" self-service section.

    ![](http://cl.ly/image/423q2h1k0W1O/dnsimple-ssl-reissue-new.png)

1.  Check the certificate information and click <label>Reissue Certificate</label> to submit a new reissue request.

</div>

## Approving the SSL certificate re-issue

Once the certificate re-issue is requested, we will forward the information to the certificate authority. The certificate authority will then send you a link to [validate the certificate](/articles/ssl-certificates-email-approval/), as it happened for the original certificate purchase.

<warning>
#### Remember to approve the certificate reissue!

In most cases, the reissue process gets stuck because the request is never approved by the owner. Please monitor the approval email inbox and make sure to **click on the link contained in the email sent from the Certificate Authority** in order to validate and approve the reissue.
</warning>

## Installing the SSL re-issued certificate

Once the certificate re-issue is approved, the certificate authority will send you a new certificate. Install the new certificate and private key on your server, or replace the existing one to deploy the new certificate.
