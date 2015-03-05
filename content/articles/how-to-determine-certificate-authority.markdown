---
title: How do I determine the Certificate Authority that signed my SSL certificate?
categories:
- SSL Certificates
---

# How do I determine the Certificate Authority that signed my SSL certificate?

To determine the [Certificate Authority](/articles/what-is-certificate-authority/) that issued your certificate, open the website in a browser and click on the certificate information.

The steps to view the certificate information depend on the browser. For instance, in Google Chrome, click on the lock icon in the address bar, switch to the the <label>Connection</label> tab and click on <label>Certificate Information</label>.

![](/files/dnsimple-certificate-determine-authority.png)

Search for the issuer organization name. Please note that, in some cases, Certificate Authorities may delegate the signing process to subsidiaries or acquired companies.

For instance, in the following case *Issued by* reports *EssentialSSL CA*, which belongs to Comodo certificate authority. The authority name is clearly visible in the *Common Name* field.

We currently offers SSL certificates signed by different certificate authorities:

- [Comodo](http://www.comodo.com/): possible matches are `EssentialSSL`, `Comodo`
- [RapidSSL](http://www.rapidssl.com/): possible matches are `RapidSSL`
