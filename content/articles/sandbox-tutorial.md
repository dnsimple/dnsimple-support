---
title: Getting Started With the DNSimple Sandbox API
excerpt: A step-by-step tutorial for setting up and using the DNSimple Sandbox API to test your integrations.
meta: Learn how to set up the DNSimple Sandbox API and build integrations with practical examples for DNS management and automation.
categories:
- API
- Enterprise
---

# Getting Started With the DNSimple Sandbox API

### Table of Contents {#toc}

* TOC
{:toc}

---

This tutorial walks you through setting up the DNSimple Sandbox API and making your first API calls. By the end, you will have a working development environment and hands-on experience with common API operations. The examples below use Python, but the Sandbox API works with any language or HTTP client.

You can follow along with the video below, or use it as a reference as you go through the numbered steps.

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/VIDEO_ID" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 1. Prerequisites

Before you begin, ensure you have:

- **A DNSimple Sandbox account.** Sign up at [sandbox.dnsimple.com](https://sandbox.dnsimple.com/signup).
- **A Sandbox API access token.** See [API Access Token](/articles/api-access-token/) for instructions on generating a token.

## 2. Setting up your environment

The examples in this tutorial use the [DNSimple Python client](https://github.com/dnsimple/dnsimple-python). Install it with:

```bash
pip install dnsimple
```

Create a `.env` file in your project directory with your Sandbox API token:

```
DNSIMPLE_TOKEN=your_sandbox_token_here
```

> [!WARNING]
> Never commit your `.env` file or API tokens to version control. Add `.env` to your `.gitignore` file.

Verify your setup by connecting to the Sandbox:

```python
import os
from dotenv import load_dotenv
from dnsimple import Client

load_dotenv()

client = Client(sandbox=True, access_token=os.getenv("DNSIMPLE_TOKEN"))
response = client.identity.whoami()
account = response.data.account

print(f"Connected to account {account.id} ({account.email})")
```

If the script prints your account details, you are ready to start making API calls.

## 3. Batch-creating DNS records

A common use case is onboarding a new domain with a standard set of DNS records. The batch records endpoint lets you create multiple records in a single API call:

```python
from dnsimple.struct import BatchChangeZoneRecordsInput, BatchChangeZoneRecordsCreateInput

records = [
    {'type': 'A', 'name': '', 'content': '192.0.2.1', 'ttl': 3600},
    {'type': 'A', 'name': 'www', 'content': '192.0.2.1', 'ttl': 3600},
    {'type': 'MX', 'name': '', 'content': 'mail.clientwebsite.com', 'priority': 10, 'ttl': 3600},
    {'type': 'TXT', 'name': '', 'content': 'v=spf1 mx ~all', 'ttl': 3600},
]

creates = [
    BatchChangeZoneRecordsCreateInput(
        name=r['name'],
        type=r['type'],
        content=r['content'],
        ttl=r['ttl'],
        priority=r.get('priority'),
    )
    for r in records
]

batch = BatchChangeZoneRecordsInput(creates=creates)
response = client.zones.batch_change_records(account_id, "my-domain-here.com", batch)
```

This creates A records for the apex and `www` subdomain, an MX record for email routing, and an SPF TXT record — all in one request.

## 4. Automating DNS updates in CI/CD

You can integrate DNS updates into your deployment pipeline. This example updates an A record to point to a new server IP after deployment:

```python
from dnsimple import Client
from dnsimple.struct import ZoneRecordUpdateInput, ZoneRecordInput

def update_dns(domain, new_ip):
    client = Client(sandbox=True, access_token=os.getenv('DNSIMPLE_TOKEN'))
    account_id = client.identity.whoami().data.account.id

    records = client.zones.list_records(
        account_id, domain, filter={"name": "", "type": "A"}
    ).data

    if records:
        record_id = records[0].id
        client.zones.update_record(
            account_id, domain, record_id, ZoneRecordUpdateInput(content=new_ip)
        )
        print(f"Updated DNS for {domain} to point to {new_ip}")
    else:
        client.zones.create_record(
            account_id,
            domain,
            ZoneRecordInput(name="", type="A", content=new_ip, ttl=600),
        )
        print(f"Created DNS record for {domain} pointing to {new_ip}")
```

> [!TIP]
> Test this function in the Sandbox with `sandbox=True` before switching to production. When you are ready, change to `sandbox=False` and swap your token for a production API token.

## 5. Checking domain availability

The registrar API lets you check whether a domain is available for registration:

```python
def check_domain_availability(domain_name, client=None, account_id=None):
    if client is None or account_id is None:
        client = Client(sandbox=True, access_token=os.getenv('DNSIMPLE_TOKEN'))
        account_id = client.identity.whoami().data.account.id

    try:
        response = client.registrar.check_domain(account_id, domain_name)
        domain_check = response.data

        if domain_check.available:
            return {
                'available': True,
                'price': getattr(domain_check, 'premium_price', None) or 'standard pricing'
            }
        else:
            return {'available': False}
    except Exception as e:
        return {'error': str(e)}
```

## 6. Moving to production

When your integration is working in the Sandbox, switching to production requires two changes:

1. **Update the client configuration:** Remove `sandbox=True` or set it to `False`.
2. **Update your API token:** Replace your Sandbox token with a [production API access token](/articles/api-access-token/).

```python
# Sandbox
client = Client(sandbox=True, access_token=os.getenv("DNSIMPLE_SANDBOX_TOKEN"))

# Production
client = Client(access_token=os.getenv("DNSIMPLE_TOKEN"))
```

For more details on the DNSimple API, visit the [Developer Documentation](https://developer.dnsimple.com). To learn more about the Sandbox environment, see [What Is the DNSimple Sandbox API?](/articles/sandbox/). For tips on avoiding common mistakes, see [Sandbox API Common Pitfalls](/articles/sandbox-api-pitfalls/).

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
