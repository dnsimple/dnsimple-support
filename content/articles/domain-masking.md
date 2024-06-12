---
title: Domain Masking
excerpt: Information on Domain Masking and URL Masking.
categories:
- Domains
---

# Domain Masking

### Table of Contents {#toc}

* TOC
{:toc}

## What is masking?

Domain Masking (or URL Masking) is when you set up a website to display the content of another while hiding the destination's URL. For example, using Domain Masking makes the website `examplemail.com` show the content of `mail.example.com/email/login`, without the user knowing they're accessing `mail.example.com`. 

This is often done with HTML iframes, or by setting up a proxy.

## Can DNSimple mask my domain for me?

No. URL modification is not a DNS functionality. We have chosen not to develop a helper for this.

If you don't mind displaying the destination URL, you can set up a [`URL` Record](/articles/cname-record) to point to the destination.

If you control the destination website, you can set up an `ALIAS` or `CNAME` record to point to the destination, and configure the destination systems to redirect to the correct page.

Adding both an `ALIAS`/`CNAME` and a `URL` record does not combine behaviors of the two. It will return both records to the user, creating an inconsistent and incorrect experience.

## What can I do?

If you want to mask the URL and present only your domain, you need to set up your own web-server to intercept and handle this. We recommend using a third-party app that requires no configuration other than DNS to work: [brighella](https://github.com/weppos/brighella)

**This is not a DNSimple product or something we support**, but we know it works well with our service.
