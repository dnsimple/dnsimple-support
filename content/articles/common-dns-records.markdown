---
title: Common DNS Records
excerpt: Welcome to DNSimple. This page is about common dns records. Hosted DNS has never been this easy.
categories:
- DNS
---

# Common DNS Records

DNS is full of jargon - look, I can't even say the name without resorting to an acronym (and [domain name service](https://dnsimple.com) isn't much better). The good news is that most domain names only need a few things to function correctly.

First, if you are using any one of the services we support (like Google Apps, Heroku, Posterous, etc.) then you should just use our services feature to add the services you need to the domain. It's pretty simple: log in, go to the domain's manage page and click *Add Services to Domain*.

In addition most domains will likely want to lead visitors to a web site. Your hosting company will often provide you with 1 or more IP addresses for your web site. These will be something like `34.23.149.20`.

To point your domain to an IP address like this add an [A record](/articles/a-record). Leave the Name field blank and fill in the Address field with the address provided by your hosting company. If you host with someone like Heroku or Amazon AWS, where they provide you a hostname instead of an IP address, then you can use the [DNSimple ALIAS record](/articles/alias-record) to point `yourdomain.com` to the hostname.

You may also want to have `www.yourdomain.com` point to `yourdomain.com`. 

1. Create a [CNAME record](/articles/cname-record) with the name `www`
and with value `yourdomain.com`.
2. Create an URL forwarding record pointing the name `www` to `http://yourdomain.com` which will cause the URL visitors see to switch `www.yourdomain.com` to `yourdomain.com`.

