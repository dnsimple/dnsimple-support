---
title: DNSimple Redirector
excerpt: The redirector is a special feature provided by DNSimple that you can use to redirect a host name to another URL.
categories:
- Domains
---

# Redirector

### Table of Contents {#toc}

* TOC
{:toc}

---

The redirector is a special feature provided by DNSimple that you can use to redirect a host name to another URL.

This feature can be used, for example, to redirect the www version of a domain the non-www hostname. Another use case is to redirect a secondary domain you purchased to the main domain, without pointing it to any web hosting service.


## Configure a redirect

To configure a redirect you use the special [URL record](/articles/url-record), available in the [record editor](/articles/record-editor).

The article [URL record](/articles/url-record) contains specific information on how to create and manage URL records.


### Redirect status code

The redirector sets a 301 status code. The code is not configurable and it's currently not possible to return a 302 temporary redirect using the URL record.


### HTTPS redirects

The [redirector doesn't support HTTPS](/articles/redirector-https), therefore you cannot redirect an HTTPS request.

In other words, it is not possible to use the URL record to redirect the www to the not-www version of your domain with HTTPS. You will be able to redirect `http://www.example.com`, but not `https://www.example.com`.

Take a look at the article [redirector and HTTPS](/articles/redirector-https) for additional information and a list of possible of alternative solutions.


## URL to URL redirects

URL to URL redirects can't be done with our URL record. Only domains or subdomains can be redirected to complete URLs.

The following redirect will not work, because you cannot add DNS records to single URLs:

    foo.com/blog/ to bar.com/blog

However, this would work because you can add an URL record for blog.foo.com:

    blog.foo.com to bar.com/blog


## Wildcard URL redirects

You can configure a wildcard redirect using the same conventions of a DNS wildcard record. However, the target cannot contain any wildcard reference.

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

The redirector currently doesn't support redirect targets that include a back-reference (match) to the redirect source. For example, the following redirects will not work:

    *.foo.com to bar.com/$1
    *.foo.com to $1.bar.com

