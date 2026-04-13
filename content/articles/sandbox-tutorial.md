---
title: Getting Started With the DNSimple Sandbox
excerpt: A step-by-step tutorial for setting up and using the DNSimple Sandbox to test your integrations.
meta: Learn how to use the DNSimple Sandbox and build integrations with practical curl examples for DNS management and automation.
categories:
- API
- Enterprise
---

# Getting Started With the DNSimple Sandbox

### Table of Contents {#toc}

* TOC
{:toc}

---

## Video Walkthrough

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/MArqtP1AvL8" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

This tutorial walks you through setting up the DNSimple Sandbox and making your first API calls to that environment. By the end, you will have hands-on experience with common API operations using `curl`. The same endpoints and request formats work with any HTTP client or [DNSimple client library](https://developer.dnsimple.com/libraries/). The Sandbox also has a full [web interface](/articles/sandbox/) — this tutorial focuses on the API path.

## 1. Prerequisites {#prerequisites}

Before you begin, ensure you have:

- **A DNSimple Sandbox account.** Sign up at [sandbox.dnsimple.com](https://sandbox.dnsimple.com/signup).
- **A Sandbox API access token.** See [API Access Token](/articles/api-access-token/) for instructions on generating a token.
- **curl** installed on your system. Most macOS and Linux systems include it by default.

Set your token and account ID as environment variables so you can copy and paste the examples directly:

```bash
export DNSIMPLE_TOKEN=your_sandbox_token_here
export DNSIMPLE_ACCOUNT_ID=your_account_id_here
```

> [!WARNING]
> Never commit API tokens to version control or share them publicly.

## 2. Verifying your setup {#verify}

Confirm your token works by calling the [whoami endpoint](https://developer.dnsimple.com/v2/identity/#whoami):

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     https://api.sandbox.dnsimple.com/v2/whoami
```

A successful response returns your account details:

```json
{
  "data": {
    "user": null,
    "account": {
      "id": 12345,
      "email": "you@example.com",
      "plan_identifier": "teams-v1-monthly",
      "created_at": "2026-01-15T10:30:00Z",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  }
}
```

The `account.id` value is the account ID you will use in all subsequent API calls. If you do not already have it, copy it from this response.

## 3. Creating DNS records {#create-records}

Add a domain to your Sandbox account through the [web interface](https://sandbox.dnsimple.com) or the API, then create DNS records for it. This example creates an A record pointing the apex domain to an IP address:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"name":"","type":"A","content":"192.0.2.1","ttl":3600}' \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records
```

A successful response returns HTTP 201 with the created record:

```json
{
  "data": {
    "id": 1,
    "zone_id": "example.com",
    "name": "",
    "content": "192.0.2.1",
    "ttl": 3600,
    "type": "A",
    "regions": ["global"],
    "system_record": false,
    "created_at": "2026-03-18T12:00:00Z",
    "updated_at": "2026-03-18T12:00:00Z"
  }
}
```

Create additional records the same way. For example, a `www` A record and an MX record:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"name":"www","type":"A","content":"192.0.2.1","ttl":3600}' \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records

curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"name":"","type":"MX","content":"mail.example.com","ttl":3600,"priority":10}' \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records
```

## 4. Listing and filtering records {#list-records}

Retrieve all records for a zone:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records
```

Filter by record type or name using query parameters:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     "https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records?type=A&name="
```

The response includes pagination metadata. See [DNSimple API Best Practices](/articles/api-best-practices/) for how to handle paginated results.

## 5. Updating a DNS record {#update-record}

Update an existing record by its ID. This example changes the IP address of an A record. Replace `RECORD_ID` with the `id` value from a previous response:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X PATCH \
     -d '{"content":"198.51.100.1"}' \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/zones/example.com/records/RECORD_ID
```

> [!TIP]
> In a CI/CD pipeline, you can script these curl commands to update DNS records automatically after deployment.

## 6. Checking domain availability {#check-domain}

The [registrar API](https://developer.dnsimple.com/v2/registrar/) lets you check whether a domain is available for registration:

```bash
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     -H "Accept: application/json" \
     https://api.sandbox.dnsimple.com/v2/$DNSIMPLE_ACCOUNT_ID/registrar/domains/example-check.com/check
```

The response indicates availability:

```json
{
  "data": {
    "domain": "example-check.com",
    "available": true,
    "premium": false
  }
}
```

> [!NOTE]
> Sandbox domain checks run against registry OT&E environments. Results may not match production availability. See [Sandbox Common Pitfalls](/articles/sandbox-pitfalls/) for details.

## 7. Moving to production {#production}

When your integration works in the Sandbox, switching to production requires two changes:

1. **Update the base URL:** Change `api.sandbox.dnsimple.com` to `api.dnsimple.com`.
2. **Update your API token:** Replace your Sandbox token with a [production API access token](/articles/api-access-token/).

```bash
# Sandbox
curl -H "Authorization: Bearer $DNSIMPLE_SANDBOX_TOKEN" \
     https://api.sandbox.dnsimple.com/v2/whoami

# Production
curl -H "Authorization: Bearer $DNSIMPLE_TOKEN" \
     https://api.dnsimple.com/v2/whoami
```

For the complete API reference, visit the [DNSimple Developer Documentation](https://developer.dnsimple.com). To learn more about the Sandbox environment, see [What Is the DNSimple Sandbox?](/articles/sandbox/). For tips on avoiding common mistakes, see [Sandbox Common Pitfalls](/articles/sandbox-pitfalls/) and [DNSimple API Best Practices](/articles/api-best-practices/).

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
