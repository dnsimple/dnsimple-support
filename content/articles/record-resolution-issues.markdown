---
title: Troubleshooting Record Resolution Issues
excerpt: This article contains instructions to check and debug record resolution issues.
categories:
- DNS
---

# Troubleshooting Record Resolution Issues

The following is checklist of common issues to help you if a record isn't resolving correctly.


## Check the domain resolution status

To use our [DNS hosting service](/articles/dns-hosting), the domain should resolve with DNSimple. Check [this list of common domain resolution errors](/articles/domain-resolution-issues) to determine if the domain is resolving with DNSimple.


## Check that you're using a fresh DNS cache

Every DNS record lookup is cached by default up to the value specified in the time-to-live (TTL) setting of the record.

Whenever you change a record, the old record value may live in your cache until the expiration, giving you the impression the update wasn't performed. This results from a fresh `dig` query for the record `www.dnsimple.com`. Notice the `ANSWER` section:

~~~
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
~~~

This is the same query performed a few seconds later. Again, notice the `ANSWER` section:

~~~
;; ANSWER SECTION:
www.dnsimple.com.   3543    IN  CNAME   dnsimple.com.
dnsimple.com.       543 IN  A   50.31.209.238
~~~

`dig` says I have to wait 3534 seconds (about an hour) before the cache for the record is expired. If I make a change now, it may not be visible from my local machine for an hour.

Clear the DNS cache before checking a record update. This may involve:

1. Clearing system level DNS cache
1. Restart browser sessions

Alternatively, check the changes with a mobile device or another computer outside your local home or office network.


## Check the record propagation delay

If you recently changed a record, it may take a while for the change to propagate. This is especially true if the record has been cached by your local ISP.

You usually can bypass a propagation delay by passing a custom name server in the `dig` call.

The following command checks the DNS record against the `ns1.dnsimple.com` name server:

~~~
$ dig www.dnsimple.com @ns1.dnsimple.com
~~~

If you get the expected response, the record has been updated in our system, but the changes still need to propagate. They should be visible after the TTL period.

You can check it against any of [DNSimple's name servers](/articles/dnsimple-nameservers).

If the query isn't returning the correct value, make sure the record update isn't delayed. See the section *Check record update delay*.


## Check the record update delay

When you change a record in our system, the changes are published almost immediately.

In some cases, our update queue may take a little bit longer. Wait a couple minutes and check again.

Follow our blog or Twitter account for updates. We publish status updates when there's a known issue with our update queue.
