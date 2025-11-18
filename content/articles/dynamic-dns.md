---
title: Dynamic DNS
excerpt: What Dynamic DNS is and how it works.
meta: Dynamic DNS with DNSimple keeps your domain updated with changing IP addresses, ensuring seamless access to your online services.
categories:
- DNS
---

# What Is Dynamic DNS?

**Dynamic DNS (DDNS or DynDNS)** automatically updates your domain's DNS records whenever the underlying IP address associated with your network or device changes. This technology is crucial for maintaining continuous connectivity to services hosted on networks with dynamically assigned IP addresses, found in many homes or small business internet connections.

Traditionally, DNS records map a domain name to a static, unchanging IP address. However, many Internet Service Providers (ISPs) assign dynamic IP addresses to their residential and small business customers. These IP addresses can change frequently (e.g., daily, weekly, or after a router restart), which would normally break any services linked to a domain name. Dynamic DNS solves this problem by automating the update process, ensuring your domain always points to the correct, current IP address.

## How Dynamic DNS works

Dynamic DNS involves coordination between your network, a specialized client, and a DDNS service provider like DNSimple:

1. **Dynamic IP assignment:** Your internet service provider assigns a dynamic IP address to your router or network device. This IP address is not permanent and can change over time.  
2. **IP change detection:** A DDNS client (often built into your router or a small software application running on a computer within your network) constantly monitors your network's public IP address.  
3. **Notification to DDNS service:** When the DDNS client detects that your public IP address has changed, it automatically sends a secure update request to your DDNS service provider (e.g., DNSimple).  
4. **DNS record update:** The DDNS service provider receives this notification and immediately updates the relevant DNS record (typically an A record for IPv4 or AAAA record for IPv6) for your domain or subdomain to reflect the new IP address.  
5. **Seamless resolution:** Within minutes, as DNS caches refresh across the internet, your domain name will resolve to the new, correct IP address, ensuring uninterrupted access to your services.

### **DNSimple's approach to Dynamic DNS:** 

DNSimple facilitates Dynamic DNS primarily through its [comprehensive API](https://dnsimple.com/api). This means you can configure devices (like routers that support custom DDNS updates) or run simple scripts on a machine within your network that automatically communicate IP changes to DNSimple, triggering the necessary DNS record updates. 

For details on all the functionality of our API and different tools to set up basic Dynamic IP with our API check out [the tools page on our developer site](https://developer.dnsimple.com/tools/).

<info> 
We don't support the dyndns API. This is what most routers use when they talk about DDNS. 
</info>

## Why use Dynamic DNS?

Dynamic DNS provides significant benefits for users ranging from individuals to enterprises:

- **Continuous reachability:** Ensures your domain name always points to the correct IP address. This makes your services consistently accessible, even if your ISP frequently changes your IP.
- **No manual updates:** Eliminates the need to manually log into your DNS provider and update IP addresses every time they change, saving time and preventing downtime.
- **Cost-effective hosting:** Enables you to host websites, personal cloud storage, security cameras, or other services from a home or office network without incurring the higher costs associated with static IP addresses from ISPs.
- **Remote access:** Easily access devices or resources on your home or small business network remotely by using your domain name, rather than having to discover a constantly changing IP.


