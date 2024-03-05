---
meta: Understanding the differences among the A, CNAME, ALIAS, and URL records.
title: Differences Among A, CNAME, ALIAS, and URL records
excerpt: Understanding the differences among the A, CNAME, ALIAS, and URL records.
categories:
- DNS
---

# Differences Among A, CNAME, ALIAS, and URL records

`A`, `CNAME`, `ALIAS`, and `URL` records are all possible solutions to point a host name ("name") to your site. However, they have small differences that affect how the client reaches your site.

`A` and `CNAME` records are standard DNS records. `ALIAS` and `URL` records are custom DNS records provided by DNSimple's [DNS hosting](https://dnsimple.com). Both of them are translated internally into `A` records to ensure compatibility with the DNS protocol.

## Understanding the differences

These are the main differences:

- The `A` record maps a name to one or more IP addresses when the IP are known and stable.
- The `CNAME` record maps a name to another name. It should only be used when there are no other records on that name.
- The `ALIAS` record maps a name to another name, but can coexist with other records on that name.
- The `URL` record redirects the name to the target name using the HTTP 301 status code.

Important rules:

- The `A`, `CNAME`, and `ALIAS` records cause a name to resolve to an IP. Conversely, the `URL` record redirects the name to a destination. The `URL` record is a simple and effective way to apply a redirect for one name to another name, for example redirecting `www.example.com` to `example.com`.
- The `A` name must resolve to an IP. The `CNAME` and `ALIAS` records must point to a name.

## Which one to use

Understanding the [difference between `A` name and `CNAME` records](/articles/differences-a-cname-records) will help you decide.

General rules: 

- Use an `A` record if you manage which IP addresses are assigned to a particular machine, or if the IP are fixed (this is the most common case).
- Use a `CNAME` record if you want to alias one name to another name, and you don't need other records (such as `MX` records for emails) for the same name.
- Use an `ALIAS` record if you're trying to alias the root domain (apex zone), or if you need other records for the same name.
- Use the `URL` record if you want the name to redirect (change address) instead of resolving to a destination.

**You should never use a CNAME record for your root domain name (e.g. example.com).**

