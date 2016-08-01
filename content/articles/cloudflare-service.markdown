---
title: CloudFlare Service
excerpt: How to setup Cloudflare DNS using DNSimple one-click service.
categories:
- Services
- CloudFlare and DNSimple
---

# CloudFlare

### Table of Contents {#toc}

* TOC
{:toc}

---

[CloudFlare](https://www.cloudflare.com/) is a service that offers protection and acceleration of your website by routing requests through their network.


## CloudFlare Integration

CloudFlare has two integration methods:

- Change your name servers to those supplied by CloudFlare. This method is available if you create an account via their website. To use this method first configure your DNS at CloudFlare. Next, "Manage" your domain at DNSimple, follow "Change Name Servers", and enter CloudFlare supplied name servers.
- Through third-party "Certified Hosting Provider Partners". In this case DNSimple manages automatic provisioning and configuration of your CloudFlare account and DNS template. This greatly simplifies CloudFlare integration for your domain and allows you to continue using DNSimple as your [DNS service provider](https://dnsimple.com/about). "Manage" your domain, press the "One-Click Services" button near the top of the page, and "Add" CloudFlare.

### Direct Integration

Direct integration requires to change the name servers for your domain to point to CloudFlare name servers.

If your domain is registered with DNSimple, follow these instructions to [configure the name servers for a domain](/articles/setting-name-servers). If the domain is registered elsewhere, you will need to follow the instructions of your existing domain registrar to point the domain to CloudFlare. In both cases, once the domain is pointing to CloudFlare, you will need to manage the DNS records in CloudFlare. Any DNS change in your DNSimple account for that domain will no longer have any effect, including changing DNS records, enabling/disabling one-click services and enabling/disabling email forwards.

Furthermore, the direct integration doesn't allow selectively delegating only certain DNS records to CloudFlare. If you want to use CloudFlare only for a specific DNS record (e.g. for the main website) and use DNSimple for all the other records (e.g. MX email configurations), then use the one-click DNSimple integration.

### DNSimple one-click integration

DNSimple one-click integration allows you to use CloudFlare to proxy only a specific DNS record of a domain. This is the preferred option, for example, if you want to take advantage of CloudFlare's CDN and protection for the main website, maintaining the other DNS records in DNSimple.

However, this approach has some limitations. For instance, CloudFlare doesn't allow to use the Universal SSL feature for domains or subdomains managed from a third-party provider. More information below.


## DNS limitations

CloudFlare caches your site content at locations across the globe. It uses DNS to route your requests to one of these locations depending on various factors. To support this technology within DNS limitations it is best to use a host name (i.e. www.example.com) rather than your domain apex (i.e. example.com). CNAME records at a domain apex are disallowed or will cause your DNS respond incorrectly. You may wish to use DNSimple's URL redirection record to forward requests from your domain apex to "www" for instance.


## ALIAS record limitations

DNSimple offers a virtual record type called an ALIAS record. This allows sites to work around a limitation of CNAME records at the domain apex by resolving to an A record at the name server. Our ALIAS record cannot be used with the CloudFlare service at this time. If you need this functionality then you may either use another CDN provider, or you may use CloudFlare directly by creating an account with them and delegating your registered domain to their name servers.


## Universal SSL limitations

[CloudFlare Universal SSL](https://www.cloudflare.com/ssl) is currently available only if you use Cloudflare directly (first integration method). It's not possible to use CloudFlare Universal SSL if you enable Cloudflare using DNSimple one-click service.


## Enabling CloudFlare service {#enable}

From the domain page, switch to the <label>Services</label> tab and click to <label>Add or edit service</label>. Find the **CloudFlare** service, click to <label>Add</label> and follow the instructions


## Disabling ClouldFlare service {#disable}

<warning>
A known bug currently prevents the possibility to disable the CloudFlare service from the UI. Please [contact us](https://dnsimple.com/contact) if you want to disable the service.
</warning>


