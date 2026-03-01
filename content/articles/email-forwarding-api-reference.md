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

The DNSimple API allows you to manage email forwards programmatically. This reference provides information about the email forwarding API endpoints, authentication, and usage examples.

## Overview

The DNSimple API provides endpoints for:

- **Listing email forwards:** Get all email forwards for a domain
- **Creating email forwards:** Create new email forwarding rules
- **Viewing email forwards:** Get details about a specific email forward
- **Updating email forwards:** Modify existing email forwarding rules
- **Deleting email forwards:** Remove email forwarding rules

<info>
**Full API documentation:** For complete API documentation, including authentication, rate limits, and all endpoints, see the [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/domains/email-forwards/).
</info>

## Authentication

All API requests require authentication using an API token:

1. **Get an API token:**
   - Log into your DNSimple account
   - Go to **Account** > **Access Tokens**
   - Create a new access token
   - Copy and securely store the token

2. **Use the token in requests:**
   - Include the token in the `Authorization` header
   - Format: `Authorization: Bearer YOUR_TOKEN`

<warning>
**Keep tokens secure:** API tokens provide full access to your account. Never share tokens or commit them to version control.
</warning>

## Base URL

The DNSimple API base URL is:

```
https://api.dnsimple.com/v2
```

For the sandbox environment:

```
https://api.sandbox.dnsimple.com/v2
```

## Common endpoints

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
      "id": 1,
      "domain_id": 123,
      "from": "hello",
      "to": "user@example.com",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
  ]
}
```

### Create email forward

Create a new email forward.

**Endpoint:** `POST /{account_id}/domains/{domain}/email_forwards`

**Request body:**
```json
{
  "from": "hello",
  "to": "user@example.com"
}
```

**Example request:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"from": "hello", "to": "user@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

**Example response:**
```json
{
  "data": {
    "id": 1,
    "domain_id": 123,
    "from": "hello",
    "to": "user@example.com",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
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

### Update email forward

Update an existing email forward.

**Endpoint:** `PATCH /{account_id}/domains/{domain}/email_forwards/{email_forward_id}`

**Request body:**
```json
{
  "to": "newuser@example.com"
}
```

**Example request:**
```bash
curl -X PATCH \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"to": "newuser@example.com"}' \
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

## Request parameters

### Creating email forwards

**Required parameters:**
- `from`: The local part of the email address (e.g., `hello` for `hello@example.com`)
- `to`: The full destination email address

**Optional parameters:**
- For catch-all forwards, use `from: "(.*)"` or the catch-all option if supported

### Updating email forwards

**Updatable parameters:**
- `to`: The destination email address

**Note:** The `from` field typically cannot be updated. Delete and recreate the forward if needed.

## Response format

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

## Error handling

The API returns standard HTTP status codes:

- **200 OK:** Request successful
- **201 Created:** Resource created successfully
- **400 Bad Request:** Invalid request parameters
- **401 Unauthorized:** Authentication required or invalid
- **404 Not Found:** Resource doesn't exist
- **422 Unprocessable Entity:** Validation errors
- **429 Too Many Requests:** Rate limit exceeded

**Example error response:**
```json
{
  "message": "Validation failed",
  "errors": {
    "to": ["is invalid"]
  }
}
```

## Rate limits

API requests are subject to rate limits:

- **Rate limit:** Check your plan's rate limits
- **Rate limit headers:** Responses include rate limit information
- **Rate limit exceeded:** Returns 429 status code

<info>
For current rate limit information, see [API Rate Limits](/articles/api-rate-limit/).
</info>

## Examples

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
  -d '{"from": "hello", "to": "user@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

### Update an email forward

```bash
curl -X PATCH \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"to": "newuser@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

### Delete an email forward

```bash
curl -X DELETE \
  -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

## Using API libraries

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
forward = client.domains.create_email_forward(123, "example.com", from: "hello", to: "user@example.com")
```

## Best practices

- ✅ **Use API tokens:** Create dedicated API tokens for different applications
- ✅ **Handle errors:** Implement proper error handling for API responses
- ✅ **Respect rate limits:** Implement rate limit handling in your code
- ✅ **Use pagination:** Use pagination for large result sets
- ✅ **Secure tokens:** Never commit API tokens to version control
- ✅ **Test in sandbox:** Use the sandbox environment for testing

## Related topics

- [Managing Email Forwards with the API](/articles/managing-email-forwards-with-the-api/) - Guide to using the API
- [API Documentation](/articles/api-documentation/) - General API information
- [API Access Tokens](/articles/api-access-token/) - Creating and managing API tokens
- [API Rate Limits](/articles/api-rate-limit/) - Rate limit information
- [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/domains/email-forwards/) - Complete API documentation

## Have more questions?

If you have additional questions or need any assistance with the email forwarding API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
