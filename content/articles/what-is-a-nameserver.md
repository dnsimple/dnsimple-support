---
title: What is a name server?
excerpt: An explanation of what name servers are, why they're important, and how to set them up.
categories:
- Name Servers
---

# What is a Name Server?

Name servers work as a directory that translates domain names into IP addresses. They make things easy to find across the Internet.

When you type a domain name into the search bar of your browser (Chrome, Safari, etc.), the domain name hits the name server, which translates the domain name into the IP address so the browser can locate it. Once it's found the domain name in the name server, your web browser uses the IP address to connect to the server and load the site you request.

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/2WdF1zT01HY" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<info>
"Name server", "nameserver", and other variants all refer to the same thing. For consistency, we refer to it here as a "name server".
</info>

## How do I change the name servers?

For security purposes, we don't make these changes on your behalf. If you purchase your domain with a registrar like DNSimple and keep it there forever, you don't have to do anything with the name servers.

If you transfer your domain to DNSimple to manage your DNS, you'll need to update the name servers. Luckily, the name servers are easy to change and easy to remember by following [these step-by-step instructions](/articles/delegating-dnsimple-registered/).

<note>
#### Check your name servers

Make sure to [check your nameservers](/articles/pointing-domain-to-dnsimple/). If your domain isn't delegated to DNSimple, then [changes you make to DNS records](/articles/record-editor/) won't resolve.

If you want to know which name servers your domain is using, you can use [zone.vision](https://zone.vision/#/) to do a DNS Lookup.
</note>
