---
title: Troubleshooting URL redirects
excerpt: This article contains instructions to check and debug URL redirect issues.
categories:
- Domains
---

# Troubleshooting URL Redirects

### Table of Contents {#toc}

* TOC
{:toc}

---

Here's a checklist of common issues to help you in case a configured redirect is not redirecting correctly.


## Check domain resolution status

In order to use our [redirector service](/articles/redirector), the domain should resolve with DNSimple. Check [this list of common domain resolution errors](/articles/domain-resolution-issues) to determine whether the domain is resolving with DNSimple.


## Use cURL to test the redirect {#test}

Sometimes the redirect is working correctly, but the browser cached the previous page and it's not showing the redirect. We highly recommend to use an HTTP client and not a browser to test the redirect.

[`cURL`](https://curl.haxx.se/) is the most common HTTP client, and it's [available for a large number of operating systems](https://curl.haxx.se/download.html).

To test the redirect via `cURL` use the `-I` option to print the response headers:

```
$ curl -I www.weppos.xyz
HTTP/1.1 301 Moved Permanently
Location: http://target.com
X-Redirector-Version: 1.5.1
Date: Mon, 01 Aug 2016 20:24:42 GMT
Content-Type: text/plain; charset=utf-8
```

The response code should be 301, and it should contain the Location. We also include the `X-Redirector-Version` custom header to help you to determine if the redirect is sent from our redirector, or from some other system.
