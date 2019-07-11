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

The redirector is a special feature provided by DNSimple that you can use to redirect HTTP/HTTPS requests sent to a host name to a different URL.

This feature can be used, for example, to redirect the www version of a domain to the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain without pointing it to any web hosting service.

This feature can't be used to redirect from one protocol to another protocol on the same host name. For example, you can't use it to redirect from `http://example.com` to `https://example.com`. To perform a redirect from HTTP to HTTPS on the same host, you'll need to implement the redirection inside your application. If you host on Heroku, [this guide](https://support.dnsimple.com/articles/redirect-heroku/#redirect-http2https) explains how to perform the redirection. 

<info>
HTTP redirects are available to all plans. HTTPS redirects are available only on the following [plans](https://dnsimple.com/pricing): Professional or Business.
</info>


## Configuring a redirect

To configure a redirect, use the special [`URL` record](/articles/url-record), available in the [record editor](/articles/record-editor).

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

## URL to URL redirects

URL to URL redirects can't be done with our `URL` record. Only domains or subdomains can be redirected to complete URLs.

The following redirect will not work, because you can't add a URL to the name part of the `URL` record.

    foo.com/blog/ to bar.com/blog

This would work, because you can add a `URL` record for blog.foo.com:

    blog.foo.com to bar.com/blog

Any path or query information passed by the user is passed to the resulting URL. If you set up a redirect from blog.foo.com to myfooblog.com, when the user goes to blog.foo.com/awesome_article they'll be redirected to myfooblog.com/awesome_article.


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

