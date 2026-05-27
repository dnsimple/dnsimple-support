---
title: DNSimple API Overview
excerpt: The DNSimple API lets you manage domains, DNS records, SSL certificates, contacts, and more programmatically over HTTPS.
meta: Overview of the DNSimple REST API v2. Manage domains, DNS records, SSL certificates, and contacts programmatically. Covers authentication, base URL, response format, and links to full developer documentation.
categories:
- API
- Enterprise
---

# DNSimple API Overview

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple API is a REST API that lets you automate domain registration, DNS management, SSL certificate provisioning, and account administration. All requests are made over HTTPS and responses are JSON.

## Base URL {#base-url}

All API v2 requests go to:

```
https://api.dnsimple.com/v2/
```

Most endpoints are scoped to an account and require your account ID in the path:

```
https://api.dnsimple.com/v2/{account_id}/domains
```

For testing and development, use the [Sandbox environment](/articles/sandbox/) at `api.sandbox.dnsimple.com`. Sandbox requests do not affect live domains or billing.

## Authentication {#authentication}

The API authenticates using bearer tokens. Include your [API access token](/articles/api-access-token/) in the `Authorization` header on every request:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     "https://api.dnsimple.com/v2/whoami"
```

DNSimple offers two token types:

- **Account tokens** - Access resources within one specific account. Recommended for most integrations.
- **User tokens** - Access resources across all accounts associated with a user.

For applications that need to request access on behalf of a user, use [OAuth 2.0](/articles/oauth-applications/) instead of a static token.

## Response format {#responses}

All successful responses return a JSON object with a `data` key:

```json
{
  "data": {
    "id": 1,
    "name": "example.com"
  }
}
```

List endpoints return an array under `data` along with a `pagination` object. By default, lists return 30 results per page up to a maximum of 100. See [API Best Practices](/articles/api-best-practices/#pagination) for how to handle pagination.

## What you can do with the API {#capabilities}

| Resource | What you can do |
|---|---|
| Domains | Register, transfer, renew, list, and delete domains |
| DNS zones and records | Create and manage A, CNAME, MX, TXT, and other record types |
| SSL certificates | Order, renew, and download Sectigo and Let's Encrypt certificates |
| Contacts | Create and manage registrant contacts |
| Webhooks | Register endpoints to receive real-time event notifications |
| Account | Manage users, access tokens, and billing |

## Rate limits {#rate-limits}

Authenticated requests are limited to 2,400 per hour. See [API Rate Limit](/articles/api-rate-limit/) for details on headers and how to handle `429 Too Many Requests` responses.

## Error handling {#errors}

The API uses standard HTTP status codes. All error responses return a JSON object with a `message` field. See [API Errors](/articles/api-errors/) for a full reference of status codes and error formats.

## Developer documentation {#dev-docs}

The complete API reference - including every endpoint, request parameters, and response schemas - is at [developer.dnsimple.com](https://developer.dnsimple.com/).

The developer site also lists official client libraries and community-built tools. If you build a library or tool and would like it included, [contact us](https://dnsimple.com/contact).

## Have more questions?

If you have questions about the DNSimple API or need help with your integration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
