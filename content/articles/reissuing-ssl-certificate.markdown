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

Re-issuing (also Re-Keying) an SSL certificate is the process of generating a new private key and [CSR](/articles/what-is-csr) for an existing issued certificate.

Re-issuing an SSL certificate involves creating a new private key along with a new CSR and submitting the request to the [certificate authority](/articles/what-is-certificate-authority). The process results in a new SSL certificate being issued.

<note>
#### How long does it take to re-issue an SSL certificate?

In general, re-issuing a new SSL certificate takes from 2 to 5 days. However, [the time frame depends on many factors](/articles/how-long-to-issue-ssl-certificate).
</note>

<warning>
This document applies only to standard SSL certificates. Let's Encrypt certificates cannot be reissued at this time. If the situation arises that you would otherwise reissue your Let's Encrypt certificate, we suggest you [order a new Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate) at this time.

Please note that there are [rate limits](https://letsencrypt.org/docs/rate-limits/) in place with Let's Encrypt, so be sure to request a new certificate only when absolutely necessary or you may be unable to request other certificates.
</warning>

## Why should I re-issue my certificate?

You may need to re-issue your certificate in one of the following cases:

- Your private key has been compromised
- You lose the private key attached to the SSL certificate
- You want to change the SSL certificate signature algorithm or encryption level
- You want to change any SSL certificate information

<note>
Re-issuing a certificate is not a fully automated process. Requests have to be manually handled by our support team and it may take a few days to complete the process. The existing certificate will continue to be valid during this time frame.
</note>

## Requesting an SSL certificate re-issue

<div class="section-steps" markdown="1">
##### To start a new certificate re-issue request

1.  Log into DNSimple with your user credentials.
1.  Click on your avatar on the top-right, and on the drop-down menu select the account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>Active SSL Certificate</label> list and click on the certificate.

    ![](/files/dnsimple-domain-certificatelist-issued.png)

1.  At the page, on the status line, look for the link to reissue the certificate.

    ![](/files/dnsimple-ssl-reissue-link.png)

    If the link is not present, it means the certificate is in a status where the certificate can not be reissued (e.g. a not issued or expired certificate).

1.  Click the link to access the "Reissue certificate" self-service section.

    ![](/files/dnsimple-ssl-reissue-new.png)

1.  Check the certificate information and click <label>Reissue Certificate</label> to submit a new reissue request.

</div>

## Approving the SSL certificate re-issue

Once the certificate re-issue is requested, we will forward the information to the certificate authority. The certificate authority will then send you a link to [validate the certificate](/articles/ssl-certificates-email-validation), as it happened for the original certificate purchase.

<warning>
#### Remember to approve the certificate reissue!

In most cases, the reissue process gets stuck because the request is never approved by the owner. Please monitor the approval email inbox and make sure to **click on the link contained in the email sent from the Certificate Authority** in order to validate and approve the reissue.
</warning>

## Installing the SSL re-issued certificate

Once the certificate re-issue is approved, the certificate authority will send you a new certificate. Install the new certificate and private key on your server, or replace the existing one to deploy the new certificate.

The old certificate will stay active until the expiration date.


### Finding your private key {#private-key}

Once you have received your certificate from the Certificate Authority, go to your certificate page and click <label>Reissue status</label>.

![reissue status](/files/private-key-0.jpg)

If you reissue request has been processed and submitted to the corresponding Certificate Authority it will be in a *Submitted* state. Right below the CSR a message is displayed asking you to confirm that you have received your certificate.

When you receive your reissued certificate via email, **and only then**, go to the status page and click the confirmation button:

![reissue confirmation](/files/private-key-1.jpg)

At that point you will be taken back to the certificate page and you will be able to get your new private key:

![reissue confirmation](/files/private-key-2.jpg)

Your previous private key will be permanently removed at this point.
