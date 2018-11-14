---
title: Renewing a Let's Encrypt SSL Certificate
excerpt: Instructions to renew a Let's Encrypt SSL certificate for a domain with DNSimple.
categories:
- SSL Certificates
---

# Renewing a Let's Encrypt SSL Certificate

<note>
There are a few important things you should note about [renewing an SSL certificate](/articles/renewing-ssl-certificate) before continuing with this document.
</note>

All Let's Encrypt SSL certificates, including renewals, are valid for no more than 90 days from their issue date. Thirty days before the certificate expires you will begin receiving renewal notices. If you have not selected the [auto-renewal option](/articles/letsencrypt#auto-renewal), these are the steps to manually renew your Let's Encrypt certificate:

<div class="section-steps" markdown="1">
##### To renew a certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>SSL certificates</label> section and find the active SSL certificate. Click <label>Renew</label> to start the renewal.

    ![Renewing a Certificate](/files/certificates-renew-action.png)

    If you can't see the <label>Renew</label> button, the certificate is either expired or not in a state that allows a renewal.

1.  Follow the instructions to order the certificate renewal.

    1.  Check the certificate [common name](/articles/what-is-common-name) matches the one you want to renew.
    1.  Check the certificate details are accurate.
    1.  Enable auto-renewal, if you want it to be auto-renewed before expiration.
    1.  Submit the order.

</div>
