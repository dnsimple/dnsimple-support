---
title: Verifying Domain Resolution
excerpt: This article explains the different ways you can verify that a domain is resolving.
categories:
- Domains
---

### Table of Contents {#toc}

* TOC
{:toc}

---

# Verifying Domain Resolution

Certain changes to your domain require that its resolution be properly configured. To ensure this, we run checks to verify that your domain is resolving correctly before you make any changes. If we detect anything that might prevent a change from taking effect, a notification will appear listing the failed verifications and the actions you need to take to get your domain resolving.

![screenshot: the domain resolution notificatoin](/files/verifying-domain-resolution-notification.png)

## Domain is not registered

Your domain needs to be registered for your changes to take effect. You can register the domain at DNSimple by clicking **Register domain** in the notification. Refer to our [guide](/articles/registering-domain/) on domain registration for more information.

## The DNS zone is inactive

Your domain’s DNS zone needs to be active for the domain to resolve and for your changes to take effect. You can activate the DNS zone for your domain by clicking **Activate zone** in the notification. Refer to our [guide](/articles/dns-hosting/#activating-a-dns-zone) on activating a DNS zone for more information.

## Domain is delegated elsewhere

Your domain is not currently resolving using our name servers. Your domain needs to be delegated to [DNSimple’s name servers](/articles/dnsimple-nameservers/) for your changes to take effect. Otherwise, you will need to make the changes through your current DNS provider. If your domain is registered at DNSimple, refer to our [guide](/articles/delegating-dnsimple-registered/) to learn how to delegate it to our name servers. If your domain is registered at another registrar, we have another [guide](/articles/delegating-dnsimple-hosted/) for that.

Once you’ve delegated your domain to DNSimple, you can click **Refresh** in the notification to rerun the verification. It may take a few minutes for the delegation changes to propagate and be recognized by our system.

## Domain is delegated to additional DNS providers

Your domain is currently resolving with DNSimple along with other DNS providers. The changes you make will take effect on DNSimple’s name servers, but will need to be [replicated manually](/articles/secondary-dnsimple/) to your other DNS providers. Refer to your DNS providers’ documentation to find out how to replicate your changes on their name servers.

If you've made any changes to your domain's delegation, you can click **Refresh** in the notification to rerun the verification. It may take a few minutes for the delegation changes to propagate and be recognized by our system.

<info>
This verification is ignored for domains with secondary DNS enabled with DNSimple as primary, as record changes at DNSimple are automatically synced to the other provider(s) for supported record types. Refer to our [guide](/articles/secondary-dns/) on secondary DNS for more information.
</info>

## Domain is expired

Your domain is expired and needs to be renewed for your changes to take effect. You can renew the domain by clicking **Renew (example.com)** in the notification. Refer to [this guide](/articles/renewing-domain/) for how to renew a domain, and this [guide](/articles/what-happens-when-domain-expires/) for more information on what happens when a domain expires. We also strongly recommend [enabling auto-renew](/articles/domain-auto-renewal/#enabling-auto-renewal) for your domains.

## Have more questions?

If you have any questions about verifying your domain resolution or the actions you need to take to fix it, just [contact support](https://dnsimple.com/feedback), and we’ll be happy to help.
