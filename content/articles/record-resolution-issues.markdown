---
title: Troubleshooting Record Resolution Issues
excerpt: 
categories:
- DNS
---

# Troubleshooting Record Resolution Issues

Here's a checklist of common issues to help you in case a record is not resolving correctly.


## Check domain resolution status

In order to use our DNS services the domain should resolve with DNSimple. Check [this list of common domain resolution errors](/articles/domain-resolution-issues) to determine whether the domain is resolving with DNSimple.


## Check you are using a fresh DNS cache

By default every DNS record lookup is cached up to the value specified in the time-to-live (TTL) setting of the record itself.

Whenever you change a record, the old record value may live in your cache until the expiration giving you the impression the update was not performed.

This is the result from a fresh `dig` query for the record `www.dnsimple.com`. Notice the `ANSWER` section.

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

This is the same query performed a few seconds later. Notice again the `ANSWER` section.

```
;; ANSWER SECTION:
www.dnsimple.com.   3543    IN  CNAME   dnsimple.com.
dnsimple.com.       543 IN  A   50.31.209.238
```

In this case, `dig` is telling me I have to wait 3534 seconds (about an hour) before the cache for the record is expired. If I make a change now, it may not be visible from my local machine for an hour.

For this reason, make sure to clear the DNS cache before checking a record update. This may involve:

1. Clearing system level DNS cache
1. Restart browser sessions

Another alternative is to check the changes with a mobile device or another computer outside of your local home or office network.


## Check record propagation delay

If you recently changed a record it may take awhile for the change to propagate. This is especially true if the record has been cached by your local ISP.

In most cases, you can bypass a propagation delay by passing a custom name server in the `dig` call.

The following command checks the DNS record against the `ns1.dnsimple.com` name server.

```
$ dig www.dnsimple.com @ns1.dnsimple.com
```

If the response is the one you expect, it means the record has been updated in our system but the changes still need propagate. In all likelihood, they will be visible after the TTL period.

You can check against any of [DNSimple's name servers](/articles/dnsimple-nameservers).

If the query is not returning the correct value make sure there isn't a delay in the record update. See the section *Check record update delay*.


## Check record update delay

Whenever you change a record in our system, the changes are published almost immediately.

In some cases, our update queue may take a little bit longer. Please wait a couple of minutes and check again.

Make sure to follow our blog or Twitter account. We normally publish status updates in case of known issue with our update queue.
