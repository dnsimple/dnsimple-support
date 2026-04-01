---
title: Renewing a Let's Encrypt SSL Certificate
excerpt: Instructions to renew a Let's Encrypt SSL certificate for a domain with DNSimple.
meta: Follow these steps to manually renew a Let's Encrypt SSL certificate for your domain using DNSimple, or enable auto-renewal to automate the process.
categories:
- SSL Certificates
---

# Renewing a Let's Encrypt SSL Certificate

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> There are a few important things you should note about [renewing an SSL certificate](/articles/renewing-ssl-certificate/) before continuing with this document.

All Let's Encrypt SSL certificates, including renewals, are valid for no more than 90 days from their issue date. Thirty days before the certificate expires, you will begin receiving renewal notices. If you have not selected the [auto-renewal option](/articles/ssl-auto-renewal/), these are the steps to manually renew your Let's Encrypt certificate:

<div class="section-steps" markdown="1">
##### Renewing a certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1.  Scroll down to the <label>SSL certificates</label> section, and find the active SSL certificate. Click <label>Renew</label> to start the renewal.

    ![Renewing a Certificate](/files/certificates-renew-action.png)

    If you cannot see the <label>Renew</label> button, the certificate is either expired or not in a state that allows a renewal.

1.  Configure the certificate renewal:

    1.  Check the certificate [common name](/articles/what-is-common-name/) matches the one you want to renew.
    1.  Verify the certificate details are accurate.
    1.  Enable auto-renewal if you want the certificate to be automatically renewed before expiration.
    1.  ECDSA is selected by default, but you can select RSA as the signature algorithm if your scenario requires it.
    1.  Submit the order.

</div>

## Next Steps {#next-steps}

Once the certificate is issued, you need to install it on your server. The old certificate will remain valid until its expiration date, but you should install the new one promptly.

- [Installing an SSL Certificate](/articles/installing-ssl-certificate/) -- Use the installation wizard to install your renewed certificate.
- [Let's Encrypt and DNSimple](/articles/letsencrypt/) -- Learn more about auto-renewal and Let's Encrypt integration details.

## Have more questions? {#have-more-questions}

If you have additional questions or need any assistance renewing your Let's Encrypt certificate, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
