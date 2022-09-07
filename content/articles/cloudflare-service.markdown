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

Currently the only way to use Cloudflare services is by means of [direct integraiton](#direct-integration).

### Direct Integration

Direct integration requires to change the name servers for your domain to point to Cloudflare name servers.

If your domain is registered with DNSimple, follow these instructions to [configure the name servers for a domain](/articles/setting-name-servers). If the domain is registered elsewhere, you will need to follow the instructions of your existing domain registrar to point the domain to Cloudflare. In both cases, once the domain is pointing to Cloudflare, you will need to manage the DNS records in Cloudflare. Any DNS change in your DNSimple account for that domain will no longer have any effect, including changing DNS records, enabling/disabling one-click services and enabling/disabling email forwards.

Furthermore, the direct integration doesn't allow selectively delegating only certain DNS records to Cloudflare. If you want to use Cloudflare only for a specific DNS record (e.g. for the main website) and use DNSimple for all the other records (e.g. MX email configurations), then use the one-click DNSimple integration.

## DNSimple one-click integration (Deprecated)

<warning>
The Cloudflare one-click service is deprecated as of December 2021.
</warning>

DNSimple one-click integration allowed you to use Cloudflare to proxy only a specific DNS record of a domain. This was the preferred option, for example, if you want to take advantage of Cloudflare's CDN and protection for the main website, maintaining the other DNS records in DNSimple.

However, this approach had some limitations. For instance, Cloudflare doesn't allow to use the Universal SSL feature for domains or subdomains managed from a third-party provider.

## Disabling Clouldflare service {#disable}

<warning>
Removing the service will also remove any records created by the service. Thefore it is best to update your DNS records manually before removing the service to avoid any distruptions.<br>
In case you are experiencing any issues in removing the service please [contact us](https://dnsimple.com/contact) and we can assist.
</warning>

1. Go to the DNS settings page of the domain you want to remove the service from.
2. Under the "One-click services" section you should see the Cloudflare service. Click on the remove button for the Cloudflare service.
