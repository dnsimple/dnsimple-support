---
title: Setting Up Simple Dynamic DNS
excerpt: How to set up simple Dynamic DNS with DNSimple.
meta: Easily configure Dynamic DNS with DNSimple to keep your domain updated with changing IP addresses, ensuring seamless access to your online services.
categories:
- DNS
---

# Setting Up Simple Dynamic DNS

Dynamic DNS (DDNS) lets you keep a DNS record updated automatically when your IP address changes. This is especially useful if your ISP assigns you a dynamic IP, but you still want to reach your home network or server using a fixed domain name.

With DNSimple, you can use our [API](https://developer.dnsimple.com/) to build simple [dynamic DNS](/articles/dynamic-dns/) updates. For examples and ready-to-use options, check out our [Tools page](https://developer.dnsimple.com/tools/).

## Before you begin

- You need a DNSimple account with an active domain.
- An API access token.
- Basic familiarity with making HTTP requests (or a tool like `curl`).

<note>
DNSimple does **not** support the legacy **dyndns API** that many consumer routers reference when they mention DDNS. Instead, you must use our API or a compatible client.
</note>

## Step 1: Identify the record you want to update

Decide which DNS record you want to keep updated with your dynamic IP address.

- Typically, this will be an **A record** for a subdomain like `home.example.com`.
- You can add an A record in your DNSimple dashboard before you start.

## Step 2: Write a script or use a client

You can update the record programmatically by calling the DNSimple API. Here's a simple `curl` example to update an A record:
```
curl -H "Authorization: Bearer \<API\_TOKEN\>" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X PATCH \
     -d '{"content":"<YOUR_CURRENT_IP>"}' \
     https://api.dnsimple.com/v2/<ACCOUNT_ID>/zones/example.com/records/<RECORD_ID>
```

- Replace `<API_TOKEN>`, `<ACCOUNT_ID>`, `<RECORD_ID>`, and `<YOUR_CURRENT_IP>` with your own values.
- To get the current IP automatically, you can use a service like https://ifconfig.me in your script.

**Example with shell substitution:**
```
CURRENT_IP=$(curl -s https://ifconfig.me)
curl -H "Authorization: Bearer $API_TOKEN" \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -X PATCH \
     -d "{\"content\":\"$CURRENT_IP\"}" \
     "https://api.dnsimple.com/v2/$ACCOUNT_ID/zones/example.com/records/$RECORD_ID"
```
## Step 3: Automate the update

Run your script on a schedule to keep your DNS record synced with your current IP:

- On Linux/macOS: use **cron**.
- On Windows: use **Task Scheduler**.

For example, update every 5 minutes with cron:

`*/5 ****/path/to/update-script.sh`


## Step 4: Verify the record

Check that your DNS record updates correctly:

`dig home.example.com`

The returned IP should match your current IP address.

