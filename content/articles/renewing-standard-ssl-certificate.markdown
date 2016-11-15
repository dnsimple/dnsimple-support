---
title: Renewing a standard SSL Certificate
excerpt: Instructions to renew a standard SSL certificate for a domain with DNSimple.
categories:
- SSL Certificates
---

<note>
There are a few important things you should note about [renewing an SSL certificate](/articles/renewing-ssl-certificate) before continuing with this document.
</note>

All standard DNSimple SSL certificates, including renewals, are valid for at least one year from their issue date. Sixty days before the certificate expires you will begin receiving renewal notices. These are the steps to renew your standard certificate:

1. Purchase the SSL certificate renewal
1. Configure and submit the new SSL certificate
1. Validate and approve the new SSL certificate
1. Download the new SSL certificate and **replace the existing certificate on the server**


<div class="section-steps" markdown="1">
##### To renew a certificate

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>SSL certificates</label> section and find the active SSL certificate. Click <label>Renew</label> to start the renewal.

    ![Renewing a Certificate](/files/certificates-renew-action.png)

    If you can't see the <label>Renew</label> button, the certificate is either expired or not in a state that allows a renewal.

1.  Follow the instructions to purchase the certificate renewal.

    1.  Check the certificate [common name](/articles/what-is-common-name) matches the one you want to renew.
    1.  Change the number of years if you want to purchase a certificate for more than 1 year. The [multi-year SSL certificate](/articles/can-multi-year-ssl-certificates) feature is only available to new plans.
    1.  Leave the CSR option unchecked, unless you really need to provide a [custom CSR](/articles/what-is-csr). The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it).
    1.  Submit the order.

    ![Renew a Certificate](/files/dnsimple-certificate-renewal.png)

</div>

If a certificate is renewed within 60 days from the expiration date, the expiration date of the renewed certificate will be calculated from the expiration of the existing certificate. Therefore, you will not lose any paid days from the previous certificate.

We encourage you to plan the renewal of your certificate to occur at least one week before the expiration, to avoid downtime or issues caused by possible renewal delays.
