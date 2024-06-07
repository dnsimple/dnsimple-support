---
meta: Instructions to determine the Certificate Authority that signed an SSL certificate.
title: How do I determine the Certificate Authority that signed my SSL certificate?
excerpt: Instructions to determine the Certificate Authority that signed an SSL certificate.
categories:
- SSL Certificates
---

# How do I determine the Certificate Authority that signed my SSL certificate?


## Certificate from DNSimple

When you request an SSL certificate with DNSimple, the certificate authority information are clearly visible in your SSL certificate page:

![screenshot: Showing the SSL certificates page](/files/ssl-authority-order.png)

Once the SSL certificate is issued, we also extract the identification of the Issuer (the Certificate Authority) from the certificate, and we display it in the certificate page:

![screenshot: Showing a certificate on the certificates page](/files/ssl-authority-certificate.png)

If you can't access your SSL certificate page, or you didn't request the certificate using DNSimple, then use the following generic procedure to determine the certificate authority.


## Generic procedure

To determine the [Certificate Authority](/articles/what-is-certificate-authority) that issued your certificate, open the website in a browser and click on the certificate information.

The steps to view the certificate information depend on the browser. For instance, in Google Chrome, click on the lock icon in the address bar, switch to the the <label>Connection</label> tab and click on <label>Certificate Information</label>.

![screenshot: Showing SSL Certificate information](/files/dnsimple-certificate-determine-authority.png)

Search for the issuer organization name. Please note that, in some cases, Certificate Authorities may delegate the signing process to subsidiaries or acquired companies.

For instance, in the following case *Issued by* reports *EssentialSSL CA*, which belongs to Sectigo certificate authority. The authority name is clearly visible in the *Common Name* field.

Learn more about the [certificate authorities used by DNSimple](/articles/ssl-certificate-authorities).
