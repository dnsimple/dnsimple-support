---
title: DNSimple Redirector
excerpt: The redirector is a special feature provided by DNSimple that you can use to redirect HTTP/HTTPS requests sent to a host name to a different URL.
categories:
- Domains
---

# Redirector

### Table of Contents {#toc}

* TOC
{:toc}

---
<info>
**HTTP** redirects are available to all plans. **HTTPS** redirects are available only on certain plans. [See the difference between plans](/articles/dnsimple-plans/).
</info>

The redirector is a special feature provided by DNSimple that you can use to redirect HTTP/HTTPS requests sent to a host name to a different URL.

This feature can be used, for example, to redirect the www version of a domain to the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain without pointing it to any web hosting service.

This feature can't be used to redirect from one protocol to another protocol on the same host name. For example, you can't use it to redirect from `http://example.com` to `https://example.com`. To perform a redirect from HTTP to HTTPS on the same host, you'll need to implement the redirection inside your application. If you host on Heroku, [this guide](https://support.dnsimple.com/articles/redirect-heroku/#redirect-http2https) explains how to perform the redirection.


## Configuring a redirect

To configure a redirect, use the proprietary [`URL` record](/articles/url-record), available in the [record editor](/articles/record-editor).

[This article](/articles/manage-url-record) contains specific information on how to add, update, and remove a `URL` record in DNSimple.

After adding a `URL` record, the following redirects will work immediately:

```
http://source.com => http://destination.com
http://source.com => https://destination.com
```


## Redirecting status code

The redirector sets a 301 status code. The code is not configurable, and it's not possible to return a 302 temporary redirect using the `URL` record.


## HTTPS redirects

The DNSimple redirector supports HTTPS redirects. In order to enable it:

  1. Add a [`URL` record](/articles/url-record) to your domain
  1. Issue an [SSL Certificate](/articles/ssl-certificates) for the same domain

Incoming HTTPS requests will be handled automatically with that SSL certificate:

```
https://source.com => http://destination.com
https://source.com => https://destination.com
```

## Path-scoped redirects

Only bare domains or subdomains can be redirected, and they can be directed to a URL that either does or does not specify a path. It's not possible to specify a path in the redirect source.

```
# Invalid
foo.com/blog/   -> bar.com/blog

# Valid
foo.com         -> bar.com/blog
blog.foo.com    -> bar.com/blog
```

Any path or query information passed by the user is passed to the resulting URL. If you set up a redirect from `blog.example.com` to `example.com`, when the user goes to `blog.example.com/awesome_article` they'll be redirected to `example.com/awesome_article`.


## Wildcard URL redirects

You can configure a wildcard redirect using the same conventions of a DNS wildcard record. However, the target can't contain any wildcard references.

    # Valid redirects
    *.foo.com to bar.com
    *.foo.com to bar.com/path

    # This will redirect to the hostname
    *.foo.com to *.bar.com

The wildcard pattern can only be on the left outermost level.

    # Valid redirects
    *.foo.com to bar.com

    # Invalid redirects
    foo.*.bar.com to baz.com


## Match-based URL redirects

The redirector doesn't support redirect targets that include a back-reference (match) to the redirect source. For example, the following redirects won't work:

    *.foo.com to bar.com/$1
    *.foo.com to $1.bar.com
