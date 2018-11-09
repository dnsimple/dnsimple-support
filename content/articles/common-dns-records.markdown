---
title: Common DNS Records
excerpt: Examples of most common DNS records you may want to configure for your domain.
categories:
- DNS
---

# Common DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

The Domain Name System (DNS) is composed by more than 30 different record types (technically called resource records): `A`, `AAAA`, `CNAME`, `MX`, `CAA`, etc. Some record types are very common, others less relevant, and others deprecated or replaced.

[DNSimple supports the most common and traditional record types](/articles/supported-dns-records), as well some newer types introduced to provide innovative services. In this article we'll look at the most common record types and we'll explore the most common DNS records you are likely need for your domain to work properly.


## Common Record Types

The most common DNS record types are:

- [`A` record](/articles/a-record): this record is by far the most popular and famous one. The A record is used to create a DNS record that points to an IPv4 address. It allows to use easily memonic names name such as `www.example.com` in place of IP addresses sich as `127.0.0.1`.
- [`CNAME` record](/articles/a-record): this record works as an alias and maps a particular name to another name. It's often used to reduce duplication in domain name configurations, or to simplify the maintenance of multiple records connected to the same IP address. In the last years its use has increased as it's one of the common mechanisms adopted by cloud services to provision customer-specific services.
- [`MX` record](/articles/mx-record): this record is used to identify mail servers to which mail should be delivered for a domain. You needs to have these records to your domain in order to receive emails.
- [`TXT` record](/articles/txt-record): this record allows a domain administrator to insert any text content into DNS records. These records are used for various purposes. One common example is for ownership validation: a provider may require to add to your domain a TXT record with a particular value, to prove you own the domain.
- [`NS` record](/articles/ns-record): this record is used to delegate a subzone to a set of name servers. It's very common because these are the type of records you need to modify when you want to delegate a domain to a DNS provider. Each domain must have a minimum of 1 NS record, the average number is 3-4.
- [`SOA` record](/articles/soa-record): this record stores important information about the DNS zone (your domain). It's very common because each zone must have an SOA record. However, it's unlikely that you'll have to create a SOA record directly. For instance, DNSimple automatically manages the SOA records for you for all your domains.


## Common DNS Records


