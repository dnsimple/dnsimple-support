---
title: URL Record Format and Technical Details
excerpt: The formal structure, restrictions, and technical details of a URL record.
meta: Learn more about the structure, restrictions, and technical details for URL records.
categories:
- DNS
---
# URL Record Format and Technical Details

This document serves as a reference for the structure and underlying technical implementation of DNSimple's proprietary [URL record type](/articles/url-record/). This record type facilitates web (HTTP/HTTPS) redirects directly through DNSimple's services.

## URL record format
The URL record is a special record type developed by DNSimple and is **not defined by any standard RFC**. Its functionality is proprietary to DNSimple's name servers and redirector service.

In DNSimple's record editor, the URL record is represented by the following configurable elements:
| Element | Description | Constraints & Details |
|:--------|:------------|:-------------------------------------------------------------------------------------------------------------|
| Name| The hostname for the record, without the domain name. Generally referred to as the "subdomain" (e.g., www, blog). DNSimple automatically appends your domain name. | Cannot be blank if setting up a subdomain. If setting up a redirect for the apex domain (e.g., `example.com`), leave this field blank.|
| TTL | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a DNS resolver.| An unsigned 32-bit integer. Standard DNS TTL values apply.|
| URL | The full destination URL to which the source hostname should redirect.|Must be a valid, complete URL including the scheme (e.g., `https://www.example.com/new-page`).|

## Technical implementation: how DNSimple exposes URL records
You configure a URL record in the DNSimple interface, and DNSimple handles its technical implementation at the DNS level. The URL record itself does not exist as a standard DNS record type that is directly served to clients.

Instead, when you create a URL record:
- **Underlying A and AAAA records:** DNSimple automatically configures a set of standard [A (IPv4)](/articles/a-record/) and [AAAA (IPv6)](/articles/aaaa-record/) records for the source hostname (e.g., `www.yourdomain.com`) to point to the IP addresses of DNSimple's [redirector service](/articles/redirector/).
- **HTTP/HTTPS redirect service:** When an HTTP/HTTPS client (like a web browser) attempts to access the source hostname, its DNS query resolves to one of our redirector service's IP addresses. The redirector service then receives the HTTP/HTTPS request.
- **Redirect response:** Our redirector service then serves an appropriate HTTP/HTTPS redirect response (e.g., a `301 Moved Permanently`) to the client. This response includes the `Location` header, which contains the target URL you specified in the URL record.
- **Client follows redirect:** The client's web browser then automatically follows this HTTP/HTTPS redirect to the final target URL.

From the perspective of a querying DNS resolver, the source hostname appears to have standard A and AAAA records pointing to DNSimple's infrastructure. The web redirection itself occurs at the HTTP/HTTPS layer, handled by DNSimple's servers.

## Have more questions?
If you have additional questions or need any assistance with your URL records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
