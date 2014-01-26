---
title: What is an A record?
excerpt: 
kind: article
categories:
- DNS
---

# What is an A record?

The *A* in A record stands for *Address*. Simply put, an A record is used to find the address of a computer connected to the internet from a name. Whenever you visit a web site, send an email, connect to Twitter or Facebook or do almost anything on the Internet, the address you enter is a series of words connected with dots.

For example, to get to this blog you may have followed a link from another web site pointing to blog.dnsimple.com. In my DNSimple account is an A record that points blog.dnsimple.com to the IP address 72.32.231.8.

![A Record](http://f.cl.ly/items/072v403p2I0T3e2a1B0F/dnsimple-record-a.jpg)

When you clicked on this link your computer probably asked a nearby DNS server "Is there an address record for blog.dnsimple.com?". If the server can answer this question then it replied with: "Yes, the address for blog.dnsimple.com is 72.32.231.8". If it cannot answer the question directly then it probably went and asked another DNS server if they have the answer, and that server either answered or asked another server, and so on. This process is called "resolving" and is the way that all DNS requests are handled on the Internet. How it does it isn't important right now, what matters is that ultimately a DNS server answers with the correct answer and your web browser now knows that it should request the DNSimple blog's home page from 72.32.231.8.

You can actually do quite a bit more with A records, including using multiple A records for the same domain in order to provide redundancy. Additionally multiple names could point to the same address, in which case each would have it's own A record pointing to the same IP address.

The bottom line: A records are used to map a name to a computer's address on the Internet, and are one of the primary records used in DNS servers.
