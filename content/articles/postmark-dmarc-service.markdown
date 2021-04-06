---
title: DMARC Reports by Postmark Service
excerpt: How to set up DMARC Reports by Postmark DNS using DNSimple one-click service.
categories:
- Services
---

# DMARC Reports by Postmark One-click Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[DMARC Reports by Postmark](https://dmarc.postmarkapp.com) will process reports from major ISPs about your domain's DMARC alignment and turn them into beautiful, human-readable weekly email digests, absolutely free. With DNSimple one-click [DNS services](/categories/services/) you can set up the DNS records required by DMARC Reports by Postmark using the one-click service we provide.


## Setting up at DMARC Reports by Postmark

Follow the steps to [in the DMARC setup process](https://dmarc.postmarkapp.com).

<info>
Copy the TXT record value provided to you during this process. You will need it when activating this service.
</info>


## Enabling DMARC Reports by Postmark service

From the domain list, click on the domain name you want to update and then click on the DNS tab. Then scroll down to locate the One Click Services section, and select "Manage services".

![Services](/files/services-dns-page-add.png)

Select the "Email" tab and scroll down the page until you find the DMARC Reports by Postmark service. Click on the *Add* button.

![Add Service](/files/services-postmark-dmarc.png)

Enter the DMARC Value, then click on the *Complete DMARC Reports by Postmark Setup* button.

Now the service is added. You can remove it any time by following the steps on [how to remove a service](/articles/services/#removing-services).


## Verifying MX Records

Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) that will verify your DNS configuration and suggest improvements with links to support articles.
