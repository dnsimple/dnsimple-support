---
title: Managing Email Forwards with the API
excerpt: Step-by-step guide to managing email forwards programmatically using the DNSimple API.
meta: Learn how to use the DNSimple API to create, update, and manage email forwards programmatically.
categories:
- Emails
- API
---

# Managing Email Forwards with the API

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple API allows you to manage email forwards programmatically, which is useful for automation, bulk operations, and integration with other systems. This guide walks you through using the API to manage email forwards.

## Prerequisites

Before using the API to manage email forwards:

1. **API token:** You need a DNSimple API access token
2. **API access:** Your account must have API access enabled
3. **Domain in DNSimple:** The domain must be in your DNSimple account
4. **Plan with email forwarding:** Your plan must include email forwarding

<info>
For information about creating API tokens, see [API Access Tokens](/articles/api-access-token/).
</info>

## Getting started

### Step 1: Get an API token

1. **Log into DNSimple:**
   - Go to [dnsimple.com](https://dnsimple.com) and log in
   - Navigate to **Account** > **Access Tokens**

2. **Create a token:**
   - Click **Create token**
   - Give the token a descriptive name
   - Copy the token immediately (you won't be able to see it again)

3. **Store securely:**
   - Store the token securely
   - Never commit it to version control
   - Use environment variables or secure storage

### Step 2: Get your account ID

You'll need your account ID for API requests:

1. **Find account ID:**
   - Log into DNSimple
   - Your account ID is shown in the account switcher or URL
   - Or use the API to list accounts

2. **Example:**
   - Account ID might be: `123` or `your-account-id`

### Step 3: Get your domain name

You'll need the domain name for API requests:

- Use the exact domain name (e.g., `example.com`)
- Ensure the domain is in your DNSimple account

## Basic operations

### List email forwards

Get all email forwards for a domain:

**cURL example:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

**Python example:**
```python
import requests

url = "https://api.dnsimple.com/v2/123/domains/example.com/email_forwards"
headers = {"Authorization": "Bearer YOUR_TOKEN"}

response = requests.get(url, headers=headers)
forwards = response.json()["data"]
print(forwards)
```

**Ruby example:**
```ruby
require 'dnsimple'

client = Dnsimple::Client.new(access_token: "YOUR_TOKEN")
forwards = client.domains.list_email_forwards(123, "example.com")
puts forwards.data
```

### Create an email forward

Create a new email forward:

**cURL example:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"from": "hello", "to": "user@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards
```

**Python example:**
```python
import requests

url = "https://api.dnsimple.com/v2/123/domains/example.com/email_forwards"
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
}
data = {
    "from": "hello",
    "to": "user@example.com"
}

response = requests.post(url, headers=headers, json=data)
forward = response.json()["data"]
print(forward)
```

**Ruby example:**
```ruby
require 'dnsimple'

client = Dnsimple::Client.new(access_token: "YOUR_TOKEN")
forward = client.domains.create_email_forward(
  123,
  "example.com",
  from: "hello",
  to: "user@example.com"
)
puts forward.data
```

### Update an email forward

Update an existing email forward (typically just the destination):

**cURL example:**
```bash
curl -X PATCH \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"to": "newuser@example.com"}' \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

**Python example:**
```python
import requests

url = "https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1"
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
}
data = {"to": "newuser@example.com"}

response = requests.patch(url, headers=headers, json=data)
forward = response.json()["data"]
print(forward)
```

### Delete an email forward

Delete an email forward:

**cURL example:**
```bash
curl -X DELETE \
  -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1
```

**Python example:**
```python
import requests

url = "https://api.dnsimple.com/v2/123/domains/example.com/email_forwards/1"
headers = {"Authorization": "Bearer YOUR_TOKEN"}

response = requests.delete(url, headers=headers)
print(response.status_code)  # 204 if successful
```

## Common use cases

### Bulk create email forwards

Create multiple email forwards at once:

**Python example:**
```python
import requests

base_url = "https://api.dnsimple.com/v2/123/domains/example.com"
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
}

forwards = [
    {"from": "hello", "to": "user1@example.com"},
    {"from": "contact", "to": "user2@example.com"},
    {"from": "info", "to": "user3@example.com"}
]

for forward_data in forwards:
    response = requests.post(
        f"{base_url}/email_forwards",
        headers=headers,
        json=forward_data
    )
    if response.status_code == 201:
        print(f"Created: {forward_data['from']}")
    else:
        print(f"Error: {response.json()}")
```

### Update all forwards to new destination

Update all email forwards to point to a new destination:

**Python example:**
```python
import requests

base_url = "https://api.dnsimple.com/v2/123/domains/example.com"
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
}

# Get all forwards
response = requests.get(f"{base_url}/email_forwards", headers=headers)
forwards = response.json()["data"]

# Update each forward
new_destination = "newuser@example.com"
for forward in forwards:
    forward_id = forward["id"]
    update_response = requests.patch(
        f"{base_url}/email_forwards/{forward_id}",
        headers=headers,
        json={"to": new_destination}
    )
    print(f"Updated forward {forward_id}: {update_response.status_code}")
```

### Delete all email forwards

Delete all email forwards for a domain:

**Python example:**
```python
import requests

base_url = "https://api.dnsimple.com/v2/123/domains/example.com"
headers = {"Authorization": "Bearer YOUR_TOKEN"}

# Get all forwards
response = requests.get(f"{base_url}/email_forwards", headers=headers)
forwards = response.json()["data"]

# Delete each forward
for forward in forwards:
    forward_id = forward["id"]
    delete_response = requests.delete(
        f"{base_url}/email_forwards/{forward_id}",
        headers=headers
    )
    print(f"Deleted forward {forward_id}: {delete_response.status_code}")
```

## Error handling

### Handle API errors

Always handle errors in your API calls:

**Python example:**
```python
import requests

def create_email_forward(account_id, domain, from_addr, to_addr, token):
    url = f"https://api.dnsimple.com/v2/{account_id}/domains/{domain}/email_forwards"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    data = {"from": from_addr, "to": to_addr}
    
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()["data"]
    except requests.exceptions.HTTPError as e:
        if response.status_code == 422:
            errors = response.json().get("errors", {})
            print(f"Validation errors: {errors}")
        else:
            print(f"HTTP error: {e}")
        return None
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")
        return None
```

## Best practices

### Use environment variables for tokens

Store API tokens in environment variables:

```python
import os

token = os.environ.get("DNSIMPLE_TOKEN")
if not token:
    raise ValueError("DNSIMPLE_TOKEN environment variable not set")
```

### Implement rate limiting

Respect API rate limits:

```python
import time
import requests

def rate_limited_request(url, headers, method="GET", **kwargs):
    response = requests.request(method, url, headers=headers, **kwargs)
    
    # Check rate limit headers
    remaining = int(response.headers.get("X-RateLimit-Remaining", 0))
    if remaining < 10:
        print("Rate limit low, waiting...")
        time.sleep(60)  # Wait before continuing
    
    return response
```

### Use pagination

For large result sets, use pagination:

```python
def get_all_email_forwards(account_id, domain, token):
    url = f"https://api.dnsimple.com/v2/{account_id}/domains/{domain}/email_forwards"
    headers = {"Authorization": f"Bearer {token}"}
    
    all_forwards = []
    page = 1
    
    while True:
        params = {"page": page}
        response = requests.get(url, headers=headers, params=params)
        data = response.json()
        all_forwards.extend(data["data"])
        
        # Check if there are more pages
        pagination = data.get("pagination", {})
        if not pagination.get("has_next_page", False):
            break
        page += 1
    
    return all_forwards
```

## Testing

### Use the sandbox environment

Test your API code in the sandbox environment:

```python
# Sandbox base URL
SANDBOX_URL = "https://api.sandbox.dnsimple.com/v2"

# Use sandbox for testing
url = f"{SANDBOX_URL}/123/domains/example.com/email_forwards"
```

<info>
For more information about the sandbox, see [Sandbox](/articles/sandbox/).
</info>

## Related topics

- [Email Forwarding API Reference](/articles/email-forwarding-api-reference/) - Complete API reference
- [API Documentation](/articles/api-documentation/) - General API information
- [API Access Tokens](/articles/api-access-token/) - Creating API tokens
- [API Rate Limits](/articles/api-rate-limit/) - Rate limit information
- [DNSimple Developer Documentation](https://developer.dnsimple.com/v2/domains/email-forwards/) - Complete API documentation

## Have more questions?

If you have additional questions or need any assistance with managing email forwards via the API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
