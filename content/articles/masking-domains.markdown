---
title: Domain Masking
excerpt: Information on Domain Masking and URL Masking
categories:
- DNSimple
- DNS
---

# Domain Masking

### Table of Contents {#toc}

* TOC
{:toc}

## What is masking

Domain Masking (or URL Masking) is when you set up a website to display the content of another while hiding the destinations URL.
An example for this is if you wanted to make the website `examplemail.com` show the content of `mail.example.com/email/login` without the user knowing they are accessing `mail.example.com`

This is often done with HTML iframes or setting up a proxy.

## Can DNSimple mask my domain for me?

No. Modifying the URL is not a functionality of dns and we have chosen not to develop a helper for this.

If you are ok with displaying the destination URL you can set up a [`URL` Record](/articles/cname-record) to point to the destination.

If you are in control of the destination website you can set up an `ALIAS` or `CNAME` record to point to the destination and configure the destination systems to redirect the correct page.

Adding both an `ALIAS`/`CNAME` and an `URL` record does not combine behaviors of the two, but will return both records to the user, creating an inconsistent and incorrect experience.

## What can I do?

If you want to mask the url and present only your domain, you will need to set up your own web-server to intercept and handle this.
We can recommend a 3rd party app that requires no configuration other than DNS to work called [brighella](https://github.com/weppos/brighella)

Please be aware that this is not a DNSimple product or something we support, but something we know works well with our service.
