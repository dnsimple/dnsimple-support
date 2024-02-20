---
title: Heroku Service
excerpt: How to set up Heroku DNS using DNSimple's one-click service.
categories:
- Services
---

# Heroku One-click Service

<note>
This service is being deprecated. We recommend that you use the [Heroku Connector](/articles/heroku-connector) instead.
</note>

### Table of Contents {#toc}

* TOC
{:toc}

---

[Heroku](https://www.heroku.com) is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. With DNSimple's one-click [DNS services](/categories/services/), you can set up the DNS records required by Heroku.


## Enabling Heroku service

From the domain list, click on the domain name you want to update, then click on the DNS tab. Scroll down to locate the One Click Services section, and select "Manage services".

![Services](/files/services-dns-page-add.png)

Select the "Infrastructure" tab, and scroll down the page until you find the Heroku service. Click on the *Add* button.

![Add Service](/files/services-heroku.png)

Enter your Heroku Apex and WWW App Names, then click on the *Complete Heroku Setup* button.

Now the service is added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).


## Setting up at Heroku

Follow the steps to [add the domain in your Heroku app](https://devcenter.heroku.com/articles/custom-domains).
