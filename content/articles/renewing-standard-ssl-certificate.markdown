---
title: Renewing a standard SSL Certificate
excerpt: Instructions to renew a standard SSL certificate for a domain with DNSimple.
categories:
- SSL Certificates
---

# Renewing a standard SSL Certificate

<note>
There are a few important things you should note about [renewing an SSL certificate](/articles/renewing-ssl-certificate) before continuing with this document.
</note>

All standard DNSimple SSL certificates, including renewals, are valid for at least one year from their issue date. Sixty days before the certificate expires you will begin receiving renewal notices.

If a certificate is renewed within 60 days from the expiration date, the expiration date of the renewed certificate will be calculated from the expiration of the existing certificate. Therefore, you will not lose any paid days from the previous certificate.

We encourage you to plan the renewal of your certificate to occur at least one week before the expiration, to avoid downtime or issues caused by possible renewal delays.

These are the steps to renew your standard certificate:

<div class="section-steps" markdown="1">
##### To renew a certificate

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  Scroll down to the <label>SSL certificates</label> section and find the active SSL certificate. Click <label>Renew</label> to start the renewal.

    ![Renewing a Certificate](/files/certificates-renew-action.png)

    If you can't see the <label>Renew</label> button, the certificate is either expired or not in a state that allows a renewal.

1.  Follow the instructions to purchase the certificate renewal.

    1.  Check the certificate [common name](/articles/what-is-common-name) matches the one you want to renew.
    1.  Leave the CSR option unchecked, unless you really need to provide a [custom CSR](/articles/what-is-csr). The easiest thing to do is to have us automatically generate the CSR (and a new private key to go with it).
    1.  Submit the order.

    ![Renew a Certificate](/files/dnsimple-certificate-renewal.png)

</div>

## What's next?

Once you order the certificate, **you will have to go through the steps of configuring, verifying, and installing the certificate in order to receive the certificate**.

See [getting started with SSL certificates](/articles/getting-started-ssl-certificates).
