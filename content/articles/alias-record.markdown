---
title: What is an ALIAS record?
excerpt: 
kind: article
categories:
- DNS
---

# What is an ALIAS record?

An **ALIAS** record is a virtual record type that we created to provide [CNAME](/articles/cname-record)-like behavior on apex domains.

For example, if your domain is example.com and you want it to point to a host name like `myapp.herokuapp.com`, then you cannot use a CNAME record, but you can use an ALIAS record. The ALIAS record will automatically resolve your domain to one or more A records at resolution time and thus resolvers see your domain simply as if it had A records.

