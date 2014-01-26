---
title: Purchasing an SSL Certificate
excerpt: 
categories:
- SSL Certificates
---

# Purchasing an SSL Certificate

To purchase an SSL certificate first create and activate your DNSimple account. Next, add the second-level domain for your certificate. For example, if you would like to purchase www.example.com then add the domain example.com. You do not need to register or transfer the domain, simply add it to your account.

Once you've added the domain, go to the domain's Manage page and click on the Buy an SSL Certificate link or button. Enter the host name for your certificate. You may want to enter a subdomain, such as www, or a wildcard such as *. Read more on [how to select a certificate host name](/articles/ssl-certificate-hostname) for details.

If you would like for us to generate your Private Key and Certificate Signing Request (CSR), then leave the "Generate a private key and certificate signing request for me" check box checked. If you would like to generate your own key and CSR then uncheck the box and paste in your CSR. If you generate your own CSR make sure that the private key is at least 2048 bytes in length and that the Common Name on the request matches the fully-qualified domain name you would like (as in, www.example.com).

Enter your contact details and press Purchase Certificate. On the next screen, select an approver email address which can receive email. An email will be sent to this address with instructions on how to approve the certificate request. Once the certificate request is approved it will be submitted to the [Certificate Authority](/articles/what-is-a-certificate-authority). If there are no issues with the certificate request then you should receive notification that your certificate is ready via email shortly thereafter.

Please note that it may take up to 24 hours for some certificate requests to be processed depending on the number of requests currently queued at the Certificate Authority.

If you are planning on using your certificate on Heroku then [read their instructions](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) for additional details.
