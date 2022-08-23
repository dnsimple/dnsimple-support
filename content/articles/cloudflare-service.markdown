---
title: Cloudflare Service
excerpt: How to setup Cloudflare DNS using DNSimple one-click service.
categories:
- Services
- Cloudflare and DNSimple
---

# Cloudflare

### Table of Contents {#toc}

* TOC
{:toc}

---

[Cloudflare](https://www.cloudflare.com/) is a service that offers protection and acceleration of your website by routing requests through their network.


## Cloudflare Integration

Cloudflare has two integration methods:

- Change your name servers to those supplied by Cloudflare. This method is available if you create an account via their website. To use this method first configure your DNS at Cloudflare. Next, "Manage" your domain at DNSimple, follow "Change Name Servers", and enter Cloudflare supplied name servers.
- Through third-party "Certified Hosting Provider Partners". In this case DNSimple manages automatic provisioning and configuration of your Cloudflare account and DNS template. This greatly simplifies Cloudflare integration for your domain and allows you to continue using DNSimple as your [DNS service provider](https://dnsimple.com/about). "Manage" your domain, press the "One-Click Services" button near the top of the page, and "Add" Cloudflare.

### Direct Integration

Direct integration requires to change the name servers for your domain to point to Cloudflare name servers.

If your domain is registered with DNSimple, follow these instructions to [configure the name servers for a domain](/articles/setting-name-servers). If the domain is registered elsewhere, you will need to follow the instructions of your existing domain registrar to point the domain to Cloudflare. In both cases, once the domain is pointing to Cloudflare, you will need to manage the DNS records in Cloudflare. Any DNS change in your DNSimple account for that domain will no longer have any effect, including changing DNS records, enabling/disabling one-click services and enabling/disabling email forwards.

Furthermore, the direct integration doesn't allow selectively delegating only certain DNS records to Cloudflare. If you want to use Cloudflare only for a specific DNS record (e.g. for the main website) and use DNSimple for all the other records (e.g. MX email configurations), then use the one-click DNSimple integration.

### DNSimple one-click integration

DNSimple one-click integration allows you to use Cloudflare to proxy only a specific DNS record of a domain. This is the preferred option, for example, if you want to take advantage of Cloudflare's CDN and protection for the main website, maintaining the other DNS records in DNSimple.

However, this approach has some limitations. For instance, Cloudflare doesn't allow to use the Universal SSL feature for domains or subdomains managed from a third-party provider. More information below.


## DNS limitations

Cloudflare caches your site content at locations across the globe. It uses DNS to route your requests to one of these locations depending on various factors. To support this technology within DNS limitations it is best to use a host name (i.e. www.example.com) rather than your domain apex (i.e. example.com). CNAME records at a domain apex are disallowed or will cause your DNS respond incorrectly. You may wish to use DNSimple's URL redirection record to forward requests from your domain apex to "www" for instance.


## ALIAS record limitations

DNSimple offers a virtual record type called an ALIAS record. This allows sites to work around a limitation of CNAME records at the domain apex by resolving to an A record at the name server. Our ALIAS record cannot be used with the Cloudflare service at this time. If you need this functionality then you may either use another CDN provider, or you may use Cloudflare directly by creating an account with them and delegating your registered domain to their name servers.


## Universal SSL limitations

[Cloudflare Universal SSL](https://www.cloudflare.com/ssl) is currently available only if you use Cloudflare directly (first integration method). It's not possible to use Cloudflare Universal SSL if you enable Cloudflare using DNSimple one-click service.


## Enabling Cloudflare service {#enable}

<warning>
The Cloudflare service is deprecated as of December 2021.
</warning>


## Disabling ClouldFlare service {#disable}

<warning>
A known bug currently prevents the possibility to disable the Cloudflare service from the UI. Please [contact us](https://dnsimple.com/contact) if you want to disable the service.
</warning>
