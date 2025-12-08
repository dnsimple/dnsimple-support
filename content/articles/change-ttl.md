---
title: How to Change TTL in DNSimple
excerpt: In DNS, resource records are held in cache on a resolver for an amount of time specified by time-to-live (TTL).
meta: Learn what Time-to-live (TTL) is and how to manage it in your DNSimple domain DNS settings to control caching of your DNS records lookup.
categories:
- DNS
---

# How to Change TTL in DNSimple

The **TTL (Time-to-Live)** determines how long DNS resolvers cache a record before requesting it again. To learn more about what TTL is and how it works, see [What Is Time-to-Live?](/articles/what-is-ttl/). For information about DNSimple's TTL settings and defaults, see [What's the Minimum Time-To-Live Provided by DNSimple?](/articles/what-minimum-time-to-live/). You can change the TTL of any DNS record in DNSimple using the [Record Editor](/articles/record-editor/).

## Changing the TTL

1. If you have multiple accounts, use the **account switcher** at the top of the page to select the appropriate account.  
2. From the **Domain Names** list, click the domain you want to manage.  
3. On the domain page, click **DNS** at the top-right of the screen to open the Record Editor.  
4. In the list of DNS records, find the record you want to update.
5. Click the **edit icon** at the end of the record row.  
6. In the edit form, locate the **TTL field**.  
    <!--- needs screenshot -->  
7. Select a new TTL value from the dropdown.  
8. Click **Update record** to save your changes.

## Have more questions?
If you have additional questions or need any assistance changing the TTL, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
