---
meta: A and CNAME records are the two common ways to map a host name to an address. This article explains the differences between these two records.
title: Differences Between A and CNAME records
excerpt: A and CNAME records are the two common ways to map a host name to an address. This article explains the differences between these two records.
categories:
- DNS
---

# Differences Between A and CNAME Records

The `A` and `CNAME` records are the two common ways to map a host name ("name") to one or more IP addresses. There are important differences between these two records. 

## Understanding the differences

The [`A` record](/articles/a-record) points a name to a specific IP. If you want `blog.dnsimple.com` to point to the server `185.31.17.133` you'll configure:

    blog.dnsimple.com.     A        185.31.17.133

The [`CNAME` record](/articles/cname-record) points a name to another name instead of to an IP. The CNAME source represents an alias for the target name and inherits its entire resolution chain.

## How we use them

Let's use [our blog](https://blog.dnsimple.com/) as an example:

    blog.dnsimple.com.      CNAME   aetrion.github.io.
    aetrion.github.io.      CNAME   github.map.fastly.net.
    github.map.fastly.net.  A       185.31.17.133

We use [GitHub Pages](http://pages.github.com/), and we set `blog.dnsimple.com` as a `CNAME` of `aetrion.github.io`, which is a `CNAME` of `github.map.fastly.net`, which is an `A` record pointing to `185.31.17.133`. This means `blog.dnsimple.com` resolves to `185.31.17.133`.

## Which one to use

An `A` record points a name to an `IP`. A `CNAME` record can point a name to another `CNAME` or to an `A` record.

