---
title: Troubleshooting DNSimple Name Servers
excerpt: This article contains instructions to check and debug domain resolution issues.
meta: Explore this comprehensive guide to troubleshoot common issues with name servers, ensuring your website is accessible and functioning properly.
categories:
- DNS
---

# Troubleshooting DNSimple Name Servers

If your domain is not resolving correctly with DNSimple, follow these steps to troubleshoot common issues with name servers.

## Ensure the domain is using the DNSimple name servers

Your domain must be delegated to [DNSimple name servers](/articles/dnsimple-nameservers/) for our [DNS hosting](/articles/dns-hosting/) to work. If it's not delegated to DNSimple's name servers, update the name servers to [point to DNSimple](/articles/pointing-domain-to-dnsimple/).

You can use `dig` or any other DNS tool to get the name servers for the domain.

```
$ dig NS example.com +short
ns1.dnsimple.com.
ns2.dnsimple-edge.net.
ns3.dnsimple.com.
ns4.dnsimple-edge.org.
```

The order of the name servers is irrelevant.

## Check name server propagation delay

If you recently pointed the domain to DNSimple, and the domain still isn't resolving, remember it may take up to 24 hours for a name server change to propagate.

You can check whether the update was successful by inspecting the [WHOIS](https://dnsimple.com/whois) response for the domain as described in the section [Check name server list in the WHOIS response](/articles/domain-resolution-issues/#check-name-server-list-in-the-whois-response/).

The WHOIS response usually updates within a few minutes.

If, after 24 hours, the domain still isn't resolving, make sure your current domain registrar successfully confirmed the update, or check [Troubleshooting Domain Resolution Issues](/articles/domain-resolution-issues/).

## Have more questions?   
If you have additional questions or need any assistance with your domain resolution, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
