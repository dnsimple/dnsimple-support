---
title: What is a POOL record?
excerpt: 
kind: article
categories:
- DNS
---

# What is a POOL record?

A POOL record is a virtual record type that we created at DNSimple to provide a way to randomly select from multiple hosts when resolving a CNAME record. For example, imagine you would like the host name "www.example.com" to resolve to two different hosts, for example "example.provider1.com" and/or "example.provider2.com". The POOL record makes this possible by randomly returning one or the other as a CNAME record. This would allow you to randomly distribute requests to either provider. It would also allow you to remove specific providers from the pool of available providers at any point in time. Once a provider is removed and the record has cleared from resolver caches, no new requests will go to that provider.
