---
title: API Rate Limit
excerpt: The DNSimple API allows up to 2,400 authenticated requests per hour. Rate limit status is reported in HTTP response headers on every request.
meta: DNSimple API rate limit reference. Authenticated requests are capped at 2,400 per hour. Learn how to read rate limit headers, handle 429 errors, and design integrations that stay within limits.
categories:
- API
- Enterprise
---

# API Rate Limit

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple API enforces rate limits to protect service quality. Authenticated requests are capped at 2,400 per hour. Unauthenticated requests are capped at 30 per hour.

## Rate limit headers {#headers}

Every API response includes headers showing your current rate limit status:

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests allowed per hour. |
| `X-RateLimit-Remaining` | Requests remaining in the current window. |
| `X-RateLimit-Reset` | Unix timestamp when the current window resets. |

You can check these headers on any request:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -I "https://api.dnsimple.com/v2/whoami"
```

A typical response:

```
HTTP/1.1 200 OK
X-RateLimit-Limit: 2400
X-RateLimit-Remaining: 2399
X-RateLimit-Reset: 1449836141
```

## When you exceed the limit {#exceeded}

Once you go over the limit, the API returns `429 Too Many Requests`:

```
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 2400
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1449836141

{"message":"quota exceeded"}
```

Check the `X-RateLimit-Reset` header, convert the Unix timestamp to a time, and wait until that point before retrying. Do not retry immediately - repeated requests after hitting the limit will not succeed until the window resets.

> [!NOTE]
> Individual API endpoints may have additional rate limiting in place beyond the account-wide limit.

## Designing integrations that stay within limits {#best-practices}

**Monitor headers proactively.** Read `X-RateLimit-Remaining` on every response. If it drops close to zero before the window resets, pause requests until `X-RateLimit-Reset`.

**Use webhooks instead of polling.** If you are repeatedly calling the API to check whether something has changed, replace that pattern with [DNSimple webhooks](https://developer.dnsimple.com/v2/webhooks/webhooks/). Webhooks push change events to your endpoint in real time and eliminate unnecessary requests.

**Handle pagination efficiently.** List endpoints return up to 100 results per page. Request the maximum `per_page=100` to minimize the number of calls required to retrieve large datasets. See [API Best Practices](/articles/api-best-practices/) for a pagination example.

**Implement exponential backoff.** When you receive a `429`, wait for the reset window rather than retrying immediately. For other transient errors (`500`, `502`, `503`), apply exponential backoff with jitter.

For a complete guide to building reliable integrations, see [DNSimple API Best Practices](/articles/api-best-practices/).

## Full rate limit reference {#reference}

For additional detail on rate limiting behavior and endpoint-specific limits, see the [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/#rate-limiting).

## Have more questions?

If you are hitting rate limits unexpectedly or need help optimizing your integration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
