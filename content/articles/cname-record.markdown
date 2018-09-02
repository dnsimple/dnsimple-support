---
title: What is a CNAME record?
excerpt: What is a CNAME record and how to add a CNAME record in DNSimple.
categories:
- DNS
---

# CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a CNAME record?

**CNAME** stands for Canonical Name. CNAME records can be used to alias one name to another.

For example, if you have a server where you keep all of your documents online, it might normally be accessed through `docs.example.com`. You may also want to access it through `documents.example.com`. One way to make this possible is to add a CNAME record that points `documents.example.com` to `docs.example.com`. When someone visits `documents.example.com` they will see the exact same content as `docs.example.com`.


## Add a CNAME record

To use CNAME records, select CNAME from the *Add Record* drop down in the advanced editor. Then enter the hostname you would like to alias from and the fully-qualified domain name you would like to alias to. You may also enter `@` in the Alias for field to represent the domain itself.

For example, if the domain were `example.com` and you wanted `www.example.com` to point to `example.com` you could put `www` in the name field and `@` in the alias for field.

### Error: "Cannot add a new record where a CNAME exists"

To understand the error, it is important to understand that a CNAME points a whole subdomain to another name in the domain name system. If you have another record on that subdomain you can't add a CNAME, as that CNAME would render the other records useless. Let's look at an example:

Let's assume there is an MX record on email.example.com and now you try to add a CNAME on that exact subdomain (email.example.com) that would produce that error because there is already that MX record.
