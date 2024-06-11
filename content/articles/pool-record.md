---
title: What's a POOL Record?
excerpt: What a POOL record is, and how to create POOL records with DNSimple.
categories:
- DNS
---

# What's a POOL Record?

A POOL record is a proprietary record type we created at DNSimple to provide a way to randomly select from multiple hosts when resolving a CNAME record. For example, if you want the host name "www.example.com" to resolve to two different hosts, like "example.provider1.com" and/or "example.provider2.com", the POOL record makes this possible by randomly returning one or the other as a CNAME record. This allows you to randomly distribute requests to either provider. It also allows you to remove specific providers from the pool of available providers at any point in time. Once a provider is removed and the record has cleared from resolver caches, no new requests will go to that provider.
