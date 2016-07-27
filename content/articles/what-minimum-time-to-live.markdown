---
title: What is the minimum time-to-live provided by DNSimple?
excerpt: 
categories:
- DNS
---

# What is the minimum time-to-live provided by DNSimple?

The standard time-to-live (TTL) for records added to DNSimple is 1 hour.

Through the web interface you may select a TTL as low as 1 minute. If you are preparing to change DNS records for a service then you may want to lower your records' TTLs so that the change from one address to another occurs quickly. During normal operation it is usually better to keep your TTL at 1 hour or more so that requests to common name servers only need to be refreshed once an hour, thus resulting in better performance for your clients.

From time to time we may review traffic patterns and request that you raise the TTL to a higher value to improve cache results. If we need to do that we'll contact you via email first.
