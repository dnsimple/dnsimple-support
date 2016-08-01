---
title: Can a URL record redirect requests over SSL?
excerpt: Information about HTTPS redirect using the DNSimple redirector, and alternative solutions.
categories:
- DNS
---

# Can a URL record redirect requests over SSL?

No, our [redirector](/articles/redirector) service can only redirect non-HTTPS requests.

In other words, it's not possible to use the URL record to redirect the www to the not-www version of your domain with HTTPS. You will be able to redirect `http://www.example.com`, but not `https://www.example.com`.


## Redirects support

This table shows a list of most common redirect options, and whether they are supported by the redirector:

| Source | Target | Supported |
|--------+--------+-----------| 
| http://example.com      | http://www.example.com  | YES | Redirect a host name to another URL
| http://example.com      | https://www.example.com | YES | Redirect a host name to another HTTPS URL
| http://example.com      | https://www.example.com | NO  | Redirect a host name to the same host name, but HTTPS
| https://example.com     | https://www.example.com | NO  | Redirect a host name via HTTPS


## Technical explanation

URL forwarding is not really a DNS record type, rather it produces an A record which points to an HTTP server. The HTTP server is then responsible for issuing the 301 redirect when it receives HTTP requests.

In order for an HTTP server to respond to HTTPS requests for your domain, the redirector would need to have your SSL certificate and private key installed on the redirector server since it is the HTTP server that negotiates the SSL connection. It is impractical to have a shared URL forwarding service that would allow you to upload your SSL certificate and private key.


## Alternatives

Instead of using URL record to redirect the request, you can use an ALIAS record, A record, or CNAME record to point both the redirecting domain and the target domain to your application, and then handle a redirect in your HTTP server or inside your application.
