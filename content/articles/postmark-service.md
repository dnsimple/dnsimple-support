---
title: Postmark Service
excerpt: How to set up Postmark DNS using DNSimple's One-click Service.
categories:
- Services
---

# Postmark One-click Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[Postmark](https://postmarkapp.com) is a transactional email service to enable your app to reliably send and receive transactional email with your application. 

If you have accounts with DNSimple and Postmark, you can use DNSimple's [One-click Services](/categories/services/) to set up the DNS records required by Postmark.

## Setting up at Postmark

Follow the steps to [add the domain in your Postmark account](https://postmarkapp.com/support/article/1046-how-do-i-verify-a-domain). Note the values from the DKIM **Hostname** and **Add this value** columns in your DNS Settings for this domain. You'll need to input these when activating the service in the next section.

## Enabling Postmark service

1. From the domain list, click on the domain name you want to update.
2. Click the **DNS** tab on the left side.
3. Scroll down to the **One-click services** card, and click **Add**.

 <!--- needs screenshot -->

Select the **Email** tab, and scroll down to the Postmark service. Click **Add**.

![Add Service](/files/services-postmark.png)

Enter the DKIM Hostname, DKIM Value, and Inbound Subdomain, then click **Complete Postmark Setup**.

The service has been added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).

## Verifying MX Records

Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) that will verify your DNS configuration and suggest improvements with links to support articles.

## Have more questions? 

If you have additional questions or need any assistance with our One-click Services, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 

