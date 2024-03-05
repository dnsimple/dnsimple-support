---
meta: How to set up Platform.sh DNS using DNSimple's one-click service.
title: Platform.sh Service
excerpt: How to set up Platform.sh DNS using DNSimple's one-click service.
categories:
- Services
---

# Platform.sh One-click Service

### Table of Contents {#toc}

* TOC
{:toc}

---

[Platform.sh](https://platform.sh/) is the idea-to-cloud application platform. With DNSimple's one-click [DNS services](/categories/services/), you can set up the DNS records required by Platform.sh.


## Setting up at Platform.sh

Follow the steps to [add the domain in your Platform.sh master environment](https://docs.platform.sh/gettingstarted/next-steps/going-live/set-domain.html).


## Enabling Platform.sh service

From the domain list, click on the domain name you want to update, then click on the DNS tab. Scroll down to locate the One Click Services section, and select "Manage services".

![Services](/files/services-dns-page-add.png)

Select the "Hosting" tab, and scroll down the page until you find the Platform.sh service. Click on the *Add* button.

![Add Service](/files/services-platformsh.png)

Enter the Platform.sh master domain, then click on the *Complete Platform.sh Setup* button.

Now the service is added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).
