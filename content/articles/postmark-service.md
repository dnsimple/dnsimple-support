---
title: Postmark Service
excerpt: How to set up Postmark DNS using DNSimple's one-click service.
categories:
- Services
---

# Postmark One-click Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[Postmark](https://postmarkapp.com) is a transactional email service to enable your app to reliably send and receive transactional email with your application. With DNSimple's one-click [DNS services](/categories/services/) you can set up the DNS records required by Postmark.


## Setting up at Postmark

Follow the steps to [add the domain in your Postmark account](https://postmarkapp.com/support/article/1046-how-do-i-verify-a-domain). Make note of the values from the DKIM *Hostname* and *Add this value* columns in your DNS Settings for this domain. You'll need to input these when activating the service in the next section.


## Enabling Postmark service

From the domain list, click on the domain name you want to update, then click on the DNS tab. Scroll down to locate the One Click Services section, and select "Manage services".

![Services](/files/services-dns-page-add.png)

Select the "Email" tab, and scroll down the page until you find the Postmark service. Click on the *Add* button.

![Add Service](/files/services-postmark.png)

Enter the DKIM Hostname, DKIM Value, and Inbound Subdomain, then click on the *Complete Postmark Setup* button.

Now the service is added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).

## Verifying MX Records

Google provides a free [MX record checking tool](https://toolbox.googleapps.com/apps/checkmx) that will verify your DNS configuration and suggest improvements with links to support articles.
