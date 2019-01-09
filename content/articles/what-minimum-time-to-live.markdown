---
title: What's the Minimum Time-To-Live Provided by DNSimple?
excerpt: The standard time-to-live (TTL) for records added to DNSimple is 1 hour, but you can set different values.
categories:
- DNS
---

# What's the Minimum Time-To-Live Provided by DNSimple?

The standard time-to-live (TTL) for records added to DNSimple is 1 hour.

Through the web interface you can select a TTL as low as 1 minute. If you're preparing to change DNS records for a service,  you may want to lower your records' TTLs so the change from one address to another occurs quickly. During normal operation, it's usually better to keep your TTL at 1 hour or more so requests to common name servers only need to be refreshed once an hour. This results in better performance for your clients.

From time to time we may review traffic patterns and request that you raise the TTL to a higher value to improve cache results. We'll contact you via email first if we need to do that. 
