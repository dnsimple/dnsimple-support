---
title: Check DNS Cache
excerpt: How to check if your domain is currently resolving with DNSimple.
categories:
- DNS
---


# Check DNS Cache

## Ensure you're using a fresh DNS cache

Every DNS record lookup is cached by default up to the value specified in the [time-to-live (TTL)](/articles/what-is-ttl/) setting of the record.

Whenever you change a record, the old record value may live in your cache until the expiration, giving you the impression that the update wasn't performed. 

**Example**: 

A `dig` query for the record `www.dnsimple.com`. Notice the `ANSWER` section:

```
$ dig www.dnsimple.com

; <<>> DiG 9.8.3-P1 <<>> www.dnsimple.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 63190
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.dnsimple.com.      IN  A

;; ANSWER SECTION:
www.dnsimple.com.   3600    IN  CNAME   dnsimple.com.
dnsimple.com.       600 IN  A   50.31.209.238

;; Query time: 605 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Fri Jul 19 15:15:39 2013
;; MSG SIZE  rcvd: 64
```

This is the same query performed a few seconds later. Notice the `ANSWER` section:

```
;; ANSWER SECTION:
www.dnsimple.com.   3543    IN  CNAME   dnsimple.com.
dnsimple.com.       543 IN  A   50.31.209.238
```

Here, `dig` says to wait 3543 seconds (about an hour) before the cache for the record expires. If a change is made now, it may not be visible from a local machine for an hour.
Flushing the local DNS cache only clears the cache on the device you are using. It does not affect the cache stored by the upstream DNS resolver. If the upstream resolver is still holding outdated data, you will continue to receive the same old response even after flushing your local cache.
You can verify what the upstream resolver is returning by running the dig command shown in the example above and checking the ANSWER section and TTL. This helps you know if the delay is coming from the resolver cache or your local machine.
If the upstream resolver already shows the updated record, you can then flush your local cache using the methods in Option 1 or Option 2 below

### **Option 1: everyday methods**

Clear the DNS cache before checking a record update. This may involve:

- **Clearing your browser cache** (Settings → Clear browsing data → Cached images and files).
- **Restarting your browser or computer** to trigger a fresh lookup.
- **Trying another device or network** (e.g., mobile data instead of Wi-Fi).
- **Using an online DNS lookup tool.**

**Option 2: advanced methods (system DNS cache)**

**You can flush the DNS cache manually, if you're comfortable doing so. This varies depending on your operating system:**

- **macOS (depends on version):**  
  `sudo dscacheutil \-flushcache; sudo killall \-HUP mDNSResponder`  
- **Windows:**  
   `ipconfig /flushdns`

    - **Best practice**: After flushing, you can also refresh your IP address by running: `ipconfig /renew`

- **Linux: Command depends on your distribution. For example:**  
   `sudo systemd-resolve \--flush-caches`

## Have more questions? 
If you have additional questions or need any assistance with your DNS cache, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
