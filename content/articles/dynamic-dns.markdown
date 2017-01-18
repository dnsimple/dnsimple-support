---
title: Dynamic DNS
excerpt: Setting up simple Dynamic DNS with DNSimple.
categories:
- DNS
---

# Dynamic DNS

Dynamic DNS (DDNS or DynDNS) is a method of automatically updating a your domain records whenever your IP Address changes. On a small scale level this is a popular way of allowing you to serve traffic from your home network or any other device connected to the internet with DHCP. This is done by either configuring your router to make the appropiate API calls or running a script on a machine.

## Setting up simple Dynamic DNS

This is one of the most common uses of DNSimple [API](https://dnsimple.com/api).

For details on all the functionality of our API and different tools to set up basic Dynamic IP with our API check out [the tools page on our developer site](https://developer.dnsimple.com/tools/).

<note>
We currently do not support the dyndns API. This is what most routers use when they talk about DDNS.
</note>
