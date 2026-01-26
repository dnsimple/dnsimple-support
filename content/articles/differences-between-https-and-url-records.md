---
title: Differences Between HTTPS and URL Records
excerpt: Understanding the differences between HTTPS records and URL records for web redirection and service binding.
meta: Compare HTTPS records and URL records to understand when to use each for web services, redirects, and domain aliasing.
categories:
- DNS
---

# Differences Between HTTPS and URL Records

HTTPS records and URL records both relate to web services, but they serve fundamentally different purposes and operate at different layers of the internet protocol stack. Understanding these distinctions is crucial for selecting the right record type for your specific needs, whether it's service binding information or web redirection.

## Core distinctions: service binding vs. web redirects

The primary difference between HTTPS records and URL records lies in what they accomplish:

**HTTPS records (RFC 9460):**
- **Service binding information:** HTTPS records provide service binding information for HTTP/HTTPS services, delivering configuration details and parameters to clients before they establish a connection.
- **DNS layer operation:** HTTPS records operate purely at the DNS layer, providing information about how to connect to a service.
- **No HTTP redirect:** HTTPS records do not perform HTTP redirects. They inform clients about service endpoints, protocols, and connection parameters.

**URL records (DNSimple proprietary):**
- **HTTP redirects:** URL records initiate HTTP redirects from a source hostname to a target URL, causing the browser's address bar to change.
- **HTTP layer operation:** URL records operate at the HTTP layer via DNSimple's redirector service, not directly through DNS resolution.
- **Web redirection:** When a client accesses a URL record, they receive an HTTP redirect response (typically a 301 Permanent Redirect) that sends them to a different URL.

## Understanding the differences in action

### HTTPS records

HTTPS records provide clients with complete instructions for accessing HTTP/HTTPS services. When a client queries for an HTTPS record, it receives information about:

- **Alternative endpoints** where the service is available
- **Transport protocol configurations** (e.g., HTTP/2, HTTP/3 support via ALPN)
- **Connection parameters** that optimize the connection process
- **Alias targets** for domain name redirection (in AliasMode)

**Example:**
```
example.com.  3600  IN  HTTPS  1  example.com.  alpn=h2,h3  port=443
```

This HTTPS record tells clients that the HTTPS service at `example.com` supports HTTP/2 and HTTP/3 protocols on port 443.

**Key characteristics:**
- Standard DNS record type (RFC 9460)
- Can be used at the apex domain (root domain)
- Provides service binding information, not redirects
- Enables protocol optimization and performance improvements
- Learn more: [What Are Service Binding Records (SVCB and HTTPS)?](/articles/service-binding-records/)

### URL records

URL records perform HTTP redirects through DNSimple's redirector service. When you create a URL record:

1. **DNS resolution:** DNSimple automatically configures underlying A and AAAA records for the source hostname to point to the IP addresses of DNSimple's redirector service.
2. **HTTP redirection:** When an HTTP client accesses that hostname, it resolves to the redirector service, which serves an HTTP redirect response (301 Permanent Redirect) to the target URL.
3. **Browser redirect:** The client's browser automatically follows the redirect instruction, changing the URL in the address bar.

**Example:**
```
www.example.com  →  URL record  →  https://example.com
```

When someone visits `www.example.com`, their browser receives a 301 redirect and automatically navigates to `https://example.com`, with the address bar showing the new URL.

**Key characteristics:**
- DNSimple proprietary record type
- Performs HTTP redirects (not DNS resolution to a service)
- Changes the URL in the browser's address bar
- Uses DNSimple's redirector service
- Learn more: [What Is a URL Record?](/articles/url-record/)

## When to use which

### Use HTTPS records when:

- You want to provide **service binding information** for HTTP/HTTPS services
- You need to specify **protocol support** (e.g., HTTP/2, HTTP/3) or connection parameters
- You want to enable **apex domain aliasing** for HTTPS services (AliasMode)
- You need to provide **alternative endpoints** with different priorities (ServiceMode)
- You want clients to **connect directly** to your service, not redirect to another URL
- You need **standard DNS record types** that work with any DNS provider

### Use URL records when:

- You want to perform an **HTTP redirect** from one URL to another
- You want the **browser's address bar to change** to show the destination URL
- You need to redirect `www` to the naked domain (or vice versa)
- You want to redirect a secondary domain to your main website
- You need **simple web redirects** without setting up a web server
- You're using **DNSimple's DNS hosting** (URL records are proprietary to DNSimple)

## Key differences summary

| Aspect | HTTPS Records | URL Records |
|:-------|:--------------|:------------|
| **Purpose** | Service binding information | HTTP redirects |
| **Layer** | DNS layer | HTTP layer |
| **Standard** | RFC 9460 (standard) | DNSimple proprietary |
| **Browser behavior** | Connects directly to service | Redirects to new URL |
| **Address bar** | Shows original domain | Changes to destination URL |
| **Protocol info** | Can specify HTTP/2, HTTP/3, etc. | Not applicable |
| **Apex domain** | Supported (AliasMode) | Supported |
| **Use case** | Service discovery and optimization | Web redirects |

## Practical examples

### Example 1: Apex domain pointing

**Scenario:** You want `example.com` to point to your Heroku app at `myapp.herokuapp.com`.

- **HTTPS record (AliasMode):** `example.com. IN HTTPS 0 myapp.herokuapp.com.`
  - Clients query for `example.com` and receive information to connect to `myapp.herokuapp.com`
  - The browser connects directly to `myapp.herokuapp.com`, but the address bar shows `example.com` (if using HTTPS with proper certificate)
  - Provides service binding information about the connection

- **URL record:** `example.com → https://myapp.herokuapp.com`
  - Clients accessing `example.com` receive an HTTP redirect
  - The browser automatically navigates to `https://myapp.herokuapp.com`
  - The address bar changes to show `myapp.herokuapp.com`

### Example 2: www to naked domain

**Scenario:** You want `www.example.com` to redirect to `example.com`.

- **HTTPS record:** Not typically used for this purpose. HTTPS records are for service binding, not redirects.

- **URL record:** `www.example.com → https://example.com`
  - Perfect for this use case
  - Visitors to `www.example.com` are automatically redirected to `example.com`
  - The address bar changes to show `example.com`

## Have more questions?

If you have additional questions or need any assistance choosing between HTTPS and URL records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
