---
title: What is a name server?
excerpt: An explanation of what name servers are and why they're important.
categories:
- Name Servers
---

# What is a name server?

In the simplest terms, name servers work as a directory that translates domain names (human
-readable words) into IP addresses (computer-readable numbers). With billions of websites out there, and more being created every day, we need name servers to make things easy to find across the Internet.

Without name servers, you'd almost never find what you were looking for unless you knew the exact IP address. Plus no one wants their grandma being sent to seedy places on the internet when she's just trying to order yarn to knit you a sweater. That's where a DNS service provider, like DNSimple, comes in.

When you type a domain name into the search bar of your browser (Chrome, Safari, etc.), the domain name hits the name server, which translates the domain name into the IP address so the browser can locate it. Once it's found the domain name in the name server, your web browser uses the IP address to connect to the server and load the site you request.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/2WdF1zT01HY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## How do I change them? And why would I?

Now that you know what the name servers are doing, let's talk about what you've got to do with them.

If you purchase your domain with a company like DNSimple and keep it there forever, you don't have to do anything with the name servers.

If you transfer your domain to DNSimple to manage your DNS, you'll need to update the name servers. Luckily, the name servers are easy to change and easy to remember. Read [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/) for step-by-step instructions.

<note>
Make sure to [check your nameservers](/articles/pointing-domain-to-dnsimple/). If your domain isn't delegated to DNSimple, then [changes you make to DNS records](/articles/record-editor/) won't resolve.
</note>
