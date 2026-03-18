---
title: Sandbox API Common Pitfalls
excerpt: Common pitfalls and best practices when developing against the DNSimple Sandbox API.
meta: Avoid common mistakes when building integrations with the DNSimple Sandbox API. Learn about testing strategies, pagination handling, and event-driven workflows with webhooks.
categories:
- API
---

# Sandbox API Common Pitfalls

### Table of Contents {#toc}

* TOC
{:toc}

---

## Always test in the Sandbox first

One of the most common mistakes is developing and testing directly against the production API. Use the Sandbox to validate your code before switching to production:

```python
import os
from dotenv import load_dotenv
from dnsimple import Client

load_dotenv()

client = Client(sandbox=True, access_token=os.getenv("DNSIMPLE_TOKEN"))

response = client.identity.whoami()
account = response.data.account

print(f"Account: id={account.id}, email={account.email}, plan={account.plan_identifier}")
```

When you set `sandbox=True`, the client directs all API calls to the Sandbox environment. Once your code is validated, change this to `sandbox=False` (or remove it) and update your token to a production token.

## Handle pagination

The DNSimple API [paginates responses](https://developer.dnsimple.com/v2/#pagination), returning a limited number of results per page. If you do not account for pagination, you may miss records:

```python
def get_all_records(client, account_id, domain):
    all_records = []
    page = 1

    while True:
        response = client.zones.list_records(account_id, domain, page=page)
        all_records.extend(response.data)

        if page >= response.pagination.total_pages:
            break
        page += 1

    return all_records
```

## Use webhooks for event-driven workflows

Rather than polling the API for changes, use DNSimple's [webhooks](https://developer.dnsimple.com/v2/webhooks/webhooks/) to react to events in real time:

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/webhooks/dnsimple', methods=['POST'])
def handle_dnsimple_webhook():
    event = request.json

    if event['name'] == 'domain.register':
        domain_name = event['data']['domain']['name']
        provision_dns_for_domain(domain_name)

    return '', 200
```

## Have more questions?

If you have additional questions or need any assistance with the DNSimple Sandbox API, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
