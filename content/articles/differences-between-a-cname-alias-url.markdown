---
title: Differences between the A, CNAME, ALIAS and URL records
excerpt: Understanding the differences between the A, CNAME, ALIAS, and URL records.
categories:
- DNS
---

# Differences between the A, CNAME, ALIAS and URL records

`A`, `CNAME`, `ALIAS` and `URL` records are all possible solutions to point a host name (name hereafter) to your site. However, they have some small differences that affect how the client will reach your site.

Before going further into the details, it's important to know that `A` and `CNAME` records are standard DNS records, whilst `ALIAS` and `URL` records are custom DNS records provided by DNSimple's [DNS hosting](https://dnsimple.com). Both of them are translated internally into `A` records to ensure compatibility with the DNS protocol.

## Understanding the differences

Here's the main differences:

- The `A` record maps a name to one or more IP addresses, when the IP are known and stable.
- The `CNAME` record maps a name to another name. It should only be used when there are no other records on that name.
- The `ALIAS` record maps a name to another name, but in turns it can coexist with other records on that name.
- The `URL` record redirects the name to the target name using the HTTP 301 status code.

Some important rules to keep in mind:

- The `A`, `CNAME`, `ALIAS` records causes a name to resolve to an IP. Vice-versa, the `URL` record redirects the name to a destination. The `URL` record is simple and effective way to apply a redirect for a name to another name, for example to redirect `www.example.com` to `example.com`.
- The `A` name must resolve to an IP, the `CNAME` and `ALIAS` record must point to a name.

## Which one to use

Understanding the [difference between the `A` name and the `CNAME` records](/articles/differences-a-cname-records) will help you to decide.

The general rule is:

- use an `A` record if you manage what IP addresses are assigned to a particular machine or if the IP are fixed (this is the most common case)
- use a `CNAME` record if you want to alias a name to another name, and you don't need other records (such as `MX` records for emails) for the same name
- use an `ALIAS` record if you are trying to alias the root domain (apex zone) or if you need other records for the same name
- use the `URL` record if you want the name to redirect (change address) instead of resolving to a destination.

**You should never use a CNAME record for your root domain name (i.e. example.com).**

