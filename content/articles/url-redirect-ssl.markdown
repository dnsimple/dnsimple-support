---
title: Can a URL record redirect requests over SSL?
excerpt: 
categories:
- Advanced DNS
---

# Can a URL record redirect requests over SSL?

No, our [redirect service](/articles/redirect) can only redirect non-SSL requests.

This means, for example, you cannot use the [URL record](/articles/url-record) to redirect the not-www to the www version of your domain with HTTPS.

## Applicable redirects

The following redirects can be configured.

~~~text
http://example.com => http://www.example.com
http://example.com => https://www.example.com
~~~

## Not applicable redirects

The following redirect cannot be configure and will result in a timeout.

~~~text
https://example.com => https://www.example.com
~~~

## Technical explanation

URL forwarding is not really a DNS record type, rather it produces an A record which points to an HTTP server. The HTTP server is then responsible for issuing the 301 redirect when it receives HTTP requests.

In order for an HTTP server to respond to SSL requests you would need to have your SSL certificate and private key on the server since it is the HTTP server that negotiates the SSL connection. It is impractical to have a shared URL forwarding server that would allow you to upload your SSL certificate and private key.

## Alternatives

Instead of using URL forwarding you can use an ALIAS record, A record, or CNAME record pointing to your host and then handle a redirect in your HTTP server or inside your application.

