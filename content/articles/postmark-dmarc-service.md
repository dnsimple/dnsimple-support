---
title: DMARC Reports by Postmark Service
excerpt: How to set up DMARC Reports by Postmark DNS using DNSimple's one-click service.
categories:
- Services
---

# DMARC Reports by Postmark One-click Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[DMARC Reports by Postmark](https://dmarc.postmarkapp.com) will process reports from major ISPs about your domain's DMARC alignment and turn them into beautiful, human-readable weekly email digests, absolutely free. 

If you have accounts with DNSimple and Postmark, you can use DNSimple's [One-click Services](/categories/services/) to set up the DNS records required by Postmark to process reports. 

## Setting up at DMARC Reports by Postmark

Follow the steps [in the DMARC setup process](https://dmarc.postmarkapp.com).

<info>
Copy the TXT record value provided to you during this process. You'll need it when activating this service.
</info>

## Enabling DMARC Reports by Postmark service

1. From the domain list, click on the domain name you want to update.
2. Click the **DNS** tab on the left side.
3. Scroll down to the **One-click services** card, and click **Add**.

 <!--- needs screenshot -->

Select the **Email** tab and scroll down the page until you find the DMARC Reports by Postmark service. Click **Add**.

![Add Service](/files/services-postmark-dmarc.png)

Enter the DMARC Value, then click **Complete DMARC Reports by Postmark Setup**.

The service has been added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services). 

## Verifying MX Records

Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) that will verify your DNS configuration and suggest improvements with links to support articles.

## Have more questions?

If you have additional questions or need any assistance with our One-click Services, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
