---
title: Differences between the A and CNAME records
excerpt: A and CNAME records are the two common ways to map a host name to an address. This article explains the differences between these two records.
categories:
- DNS
---

# Differences between the A and CNAME records

The `A` and `CNAME` records are the two common ways to map a host name (name hereafter) to one or more IP address. Before going ahead, it's important that you really understand the differences between these two records. I'll keep it simple.

The [`A` record](/articles/a-record) points a name to a specific IP. For example, if you want the name `blog.dnsimple.com` to point to the server `185.31.17.133` you will configure:

    blog.dnsimple.com.     A        185.31.17.133

The [`CNAME` record](/articles/cname-record) points a name to another name, instead of an IP. The CNAME source represents an alias for the target name and inherits its entire resolution chain.

Let's take [our blog](https://blog.dnsimple.com/) as example:

    blog.dnsimple.com.      CNAME   aetrion.github.io.
    aetrion.github.io.      CNAME   github.map.fastly.net.
    github.map.fastly.net.  A       185.31.17.133

We use [GitHub Pages](http://pages.github.com/) and we set `blog.dnsimple.com` as a `CNAME` of `aetrion.github.io`, which in turns is itself a `CNAME` of `github.map.fastly.net`, which is an `A` record pointing to `185.31.17.133`. In short terms, this means that `blog.dnsimple.com` resolves to `185.31.17.133`.

To summarize, an `A` record points a name to an `IP`. `CNAME` record can point a name to another `CNAME` or an `A` record.

