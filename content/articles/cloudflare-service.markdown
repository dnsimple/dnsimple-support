---
title: CloudFlare Service
excerpt: How to setup Cloudflare DNS using DNSimple one-click service.
categories:
- Services
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


## DNS limitations

CloudFlare caches your site content at locations across the globe. It uses DNS to route your requests to one of these locations depending on various factors. To support this technology within DNS limitations it is best to use a host name (i.e. www.example.com) rather than your domain apex (i.e. example.com). CNAME records at a domain apex are disallowed or will cause your DNS respond incorrectly. You may wish to use DNSimple's URL redirection record to forward requests from your domain apex to "www" for instance.


## ALIAS record limitations

DNSimple offers a virtual record type called an ALIAS record. This allows sites to work around a limitation of CNAME records at the domain apex by resolving to an A record at the name server. Because CloudFlare may use the name server physical location to determine how your request will be routed it would short circuit the utility of CloudFlare. As such we advise against using ALIAS records with CloudFlare.


## Universal SSL limitations

[CloudFlare Universal SSL](https://www.cloudflare.com/ssl) is currently made available only if you use Cloudflare directly (first integration method). It's not possible to use CloudFlare Universal SSL if you enable Cloudflare using DNSimple one-click service.

