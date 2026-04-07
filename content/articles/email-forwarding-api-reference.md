---
title: Email Forwarding API Reference
excerpt: API reference for managing email forwards programmatically with the DNSimple API.
meta: Complete API reference for managing email forwarding programmatically, including endpoints, authentication, and examples.
categories:
- Emails
- API
---

# Email Forwarding API Reference

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple API allows you to manage email forwards programmatically. This reference covers the email forwarding API endpoints, authentication, and usage examples.

## Available endpoints {#endpoints-summary}

The DNSimple API provides endpoints for:

- **Listing email forwards:** Get all email forwards for a domain
- **Creating email forwards:** Create new email forwarding rules
- **Retrieving email forwards:** Get details about a specific email forward
- **Deleting email forwards:** Remove email forwarding rules

> [!NOTE]
> For complete API documentation, including authentication, rate limits, and all endpoints, see the [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/domains/email-forwards/).

## Authentication {#authentication}

All API requests require authentication using an API token:

1. **Get an API token:**
   - Log into your DNSimple account
   - Go to <label>Account</label> > <label>Access Tokens</label>
   - Create a new access token
   - Copy and securely store the token

2. **Use the token in requests:**
   - Include the token in the `Authorization` header
   - Format: `Authorization: Bearer YOUR_TOKEN`

> [!WARNING]
> API tokens provide full access to your account. Never share tokens or commit them to version control.

## Base URL {#base-url}

The DNSimple API base URL is:

```
https://api.dnsimple.com/v2
```

For the sandbox environment:

```
https://api.sandbox.dnsimple.com/v2
```

## Common endpoints {#endpoints}

### List email forwards

Get all email forwards for a domain.

**Endpoint:** `GET /{account_id}/domains/{domain}/email_forwards`

**Example request:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

**Example response:**
```json
{
  "data": [
    {
      "id": 24809,
      "domain_id": 235146,
      "alias_email": "hello@example.com",
      "destination_email": "user@example.com",
      "created_at": "2021-01-25T13:54:40Z",
      "updated_at": "2021-01-25T13:54:40Z",
      "active": true
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 30,
    "total_entries": 1,
    "total_pages": 1
  }
}
```

### Create email forward

Create a new email forward.

**Endpoint:** `POST /{account_id}/domains/{domain}/email_forwards`

**Request body:**
```json
{
  "alias_name": "hello",
  "destination_email": "user@example.com"
}
```

**Example request:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"alias_name": "hello", "destination_email": "user@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

**Example response:**
```json
{
  "data": {
    "id": 41872,
    "domain_id": 235146,
    "alias_email": "hello@example.com",
    "destination_email": "user@example.com",
    "created_at": "2021-01-25T13:54:40Z",
    "updated_at": "2021-01-25T13:54:40Z",
    "active": true
  }
}
```

### Get email forward

Get details about a specific email forward.

**Endpoint:** `GET /{account_id}/domains/{domain}/email_forwards/{email_forward_id}`

**Example request:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

### Delete email forward

Delete an email forward.

**Endpoint:** `DELETE /{account_id}/domains/{domain}/email_forwards/{email_forward_id}`

**Example request:**
```bash
curl -X DELETE \
  -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

## Request parameters {#request-parameters}

### Creating email forwards

**Required parameters:**
- `alias_name`: The local part of the email address (e.g., `hello` for `hello@example.com`). Do not include the domain.
- `destination_email`: The full destination email address (e.g., `user@example.com`)

> [!NOTE]
> The API does not support updating email forwards. To change a forward, delete the existing one and create a new one.

## Response format {#response-format}

API responses follow a consistent format:

```json
{
  "data": {
    // Resource data
  }
}
```

For list endpoints:

```json
{
  "data": [
    // Array of resources
  ],
  "pagination": {
    // Pagination information
  }
}
```

## Error handling {#error-handling}

The API returns standard HTTP status codes:

- **200 OK:** Request successful (list, retrieve)
- **201 Created:** Resource created successfully
- **204 No Content:** Resource deleted successfully
- **400 Bad Request:** Invalid request or resource cannot be created/deleted
- **401 Unauthorized:** Authentication required or invalid
- **404 Not Found:** Resource does not exist
- **429 Too Many Requests:** Rate limit exceeded

## Rate limits {#rate-limits}

API requests are subject to rate limits:

- **Rate limit:** Check your plan's rate limits
- **Rate limit headers:** Responses include rate limit information
- **Rate limit exceeded:** Returns 429 status code

> [!NOTE]
> For current rate limit information, see [API Rate Limits](/articles/api-rate-limit/).

## Examples {#examples}

### List all email forwards for a domain

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

### Create a new email forward

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"alias_name": "hello", "destination_email": "user@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

### Delete an email forward

```bash
curl -X DELETE \
  -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

## Using API libraries {#libraries}

DNSimple provides official libraries for various languages:

- **Ruby:** [dnsimple-ruby](https://github.com/dnsimple/dnsimple-ruby)
- **Python:** [dnsimple-python](https://github.com/dnsimple/dnsimple-python)
- **Node.js:** [dnsimple-node](https://github.com/dnsimple/dnsimple-node)
- **PHP:** [dnsimple-php](https://github.com/dnsimple/dnsimple-php)
- **Go:** [dnsimple-go](https://github.com/dnsimple/dnsimple-go)

**Example using Ruby:**
```ruby
require 'dnsimple'

client = Dnsimple::Client.new(access_token: "YOUR_TOKEN")

# List email forwards
forwards = client.domains.list_email_forwards(123, "example.com")

# Create email forward
forward = client.domains.create_email_forward(123, "example.com", alias_name: "hello", destination_email: "user@example.com")
```

## Best practices {#best-practices}

- **Use API tokens:** Create dedicated API tokens for different applications
- **Handle errors:** Implement proper error handling for API responses
- **Respect rate limits:** Implement rate limit handling in your code
- **Use pagination:** Use pagination for large result sets
- **Secure tokens:** Never commit API tokens to version control
- **Test in sandbox:** Use the sandbox environment for testing

## Have more questions?

If you have additional questions or need any assistance with the email forwarding API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
