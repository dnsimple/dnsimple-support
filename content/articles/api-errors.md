---
title: API Errors
excerpt: The DNSimple API uses standard HTTP status codes and returns JSON error objects that describe what went wrong.
meta: Reference guide for DNSimple API error responses. Covers HTTP status codes, JSON error object structure, and how to interpret and handle common API errors.
categories:
- API
- Enterprise
---

# API Errors

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple API uses standard HTTP status codes to indicate whether a request succeeded or failed. All error responses include a JSON body with at least a `message` field describing the problem.

## HTTP status codes {#status-codes}

### Successful responses

| Code | Meaning |
|---|---|
| `200 OK` | Request succeeded. |
| `201 Created` | Resource created successfully (typical for POST requests). |
| `202 Accepted` | Request accepted for asynchronous processing (for example, a domain transfer). |
| `204 No Content` | Request succeeded with no response body (typical for DELETE requests). |

### Client errors

| Code | Meaning |
|---|---|
| `400 Bad Request` | The request is invalid or the payload has a problem. See [400 errors](#400) below. |
| `401 Unauthorized` | Authentication credentials are missing or invalid. See [Authentication](/articles/api-access-token/). |
| `402 Payment Required` | Your account is not subscribed or has outstanding invoices. |
| `403 Permission Denied` | The token does not have permission to access this resource. See [scoped access tokens](/articles/api-access-token/#scoped-access-tokens). |
| `404 Not Found` | The resource does not exist, or the token does not have permission to see it. |
| `412 Precondition Failed` | Your current plan does not include the required feature. |
| `429 Too Many Requests` | You have exceeded the [rate limit](/articles/api-rate-limit/). Back off and retry. |

### Server errors

| Code | Meaning |
|---|---|
| `500`, `502`, `503`, `504` | Something went wrong on DNSimple's end. These are rare and temporary. |

## Error response format {#format}

All `4xx` and `5xx` responses return a JSON object with at least a `message` key:

```json
{"message": "Not Found"}
```

`400 Bad Request` responses often include an additional `errors` key with field-level detail:

```json
{
  "message": "Validation failed",
  "errors": {
    "content": ["can't be blank"],
    "ttl": ["is not a number"]
  }
}
```

The `errors` object maps field names to an array of error strings describing what is wrong with that field.

## Common error scenarios {#common}

### 400 - Validation failed {#400}

Returned when required fields are missing or contain invalid values. Inspect the `errors` object to identify which fields need to be corrected:

```json
{
  "message": "Validation failed",
  "errors": {
    "email": ["can't be blank", "is an invalid email address"],
    "first_name": ["can't be blank"]
  }
}
```

### 401 - Authentication failed {#401}

```json
{"message": "Authentication failed"}
```

Check that your [API access token](/articles/api-access-token/) is correct and included in the `Authorization: Bearer` header. Tokens are only displayed once at creation time - if you have lost it, generate a new one.

### 403 - Permission denied {#403}

```json
{"message": "Permission Denied. Required Scope: domains:*:read"}
```

Your token does not have the required scope for this operation. If you are using a [scoped access token](/articles/api-access-token/#scoped-access-tokens), verify that it has been granted the necessary permissions.

### 404 - Not found {#404}

```json
{"message": "Not Found"}
```

Either the resource does not exist, or the token does not have access to it. DNSimple returns `404` in both cases to avoid leaking information about resources the caller cannot access.

### 429 - Rate limit exceeded {#429}

```json
{"message": "quota exceeded"}
```

You have sent too many requests. Check the `X-RateLimit-Reset` header in the response for the Unix timestamp when your limit resets, then retry after that time. See [API Rate Limit](/articles/api-rate-limit/) for details on limits and headers.

## Full error reference {#reference}

For the complete list of error codes, response examples, and endpoint-specific error behavior, see the [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/#errors).

## Have more questions?

If you need help interpreting an API error or troubleshooting your integration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
