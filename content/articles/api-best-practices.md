---
title: DNSimple API Best Practices
excerpt: Best practices for building reliable integrations with the DNSimple API.
meta: Learn best practices for the DNSimple API, including testing in the Sandbox, handling pagination, and using webhooks for event-driven workflows.
categories:
- API
---

# DNSimple API Best Practices

### Table of Contents {#toc}

* TOC
{:toc}

---

These practices apply to all DNSimple API integrations, whether you are working in the [Sandbox](/articles/sandbox/) or in production.

## Test in the Sandbox before production {#test-in-sandbox}

Develop and validate your integration against the [DNSimple Sandbox](/articles/sandbox/) before pointing it at production. The Sandbox is a fully functional copy of the DNSimple environment where API calls do not affect live domains, DNS records, or billing. Once your code works in the Sandbox, switching to production requires only a base URL and token change.

For a step-by-step setup guide, see [Getting Started With the DNSimple Sandbox](/articles/sandbox-tutorial/). For things to watch out for in the Sandbox specifically, see [Sandbox Common Pitfalls](/articles/sandbox-pitfalls/).

## Handle pagination {#pagination}

The DNSimple API [paginates responses](https://developer.dnsimple.com/v2/#pagination), returning up to 30 results per page by default (maximum 100). If you do not account for pagination, you will miss records when a response spans multiple pages. Always check the `pagination` object in the response and request subsequent pages until you have all results.

Request a specific page and page size with query parameters:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     "https://api.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records?page=1&per_page=100"
```

The response includes pagination metadata:

```json
{
  "data": [...],
  "pagination": {
    "current_page": 1,
    "per_page": 100,
    "total_entries": 250,
    "total_pages": 3
  }
}
```

Loop through pages by incrementing the `page` parameter until `current_page` equals `total_pages`.

## Use webhooks instead of polling {#webhooks}

Rather than polling the API to detect changes, use DNSimple [webhooks](https://developer.dnsimple.com/v2/webhooks/webhooks/) to react to events in real time. Webhooks reduce unnecessary API calls and ensure your integration responds promptly to domain registrations, DNS changes, and other events.

Register a webhook URL with your account:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"url":"https://your-app.example.com/webhooks/dnsimple"}' \
     https://api.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/webhooks
```

DNSimple will send HTTP POST requests to your URL whenever events occur. Your endpoint should return a `200` status to acknowledge receipt. For webhook configuration details, see [Webhooks and API Events](/articles/webhooks/).

## Respect rate limits {#rate-limits}

The DNSimple API enforces [rate limits](/articles/api-rate-limit/) to protect service quality. Authenticated requests are limited to 2,400 per hour. Check the rate limit headers in any API response to monitor your usage:

```bash
curl -I -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     https://api.dnsimple.com/v2/whoami
```

The relevant headers are:

- `X-RateLimit-Limit` — Maximum requests per hour
- `X-RateLimit-Remaining` — Requests remaining in the current window
- `X-RateLimit-Reset` — Unix timestamp when the window resets

Design your integration to handle `429 Too Many Requests` responses gracefully — back off and retry after the time indicated in the reset header.

## Have more questions?

If you have additional questions or need any assistance with the DNSimple API, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
