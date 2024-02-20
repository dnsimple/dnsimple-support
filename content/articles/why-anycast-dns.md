---
title: Why Anycast DNS?
excerpt: Anycast offers several advantages over Unicast, resulting in lower latency and better traffic distribution.
categories:
- DNS
---

# Why Anycast DNS?

The DNS protocol most often uses UDP to ship packets around the internet. UDP being a stateless protocol enables an optimization based on "anycast".

You usually want to talk to a specific computer on the internet. When a packet is sent to another computer on the internet, the routers in between make forwarding decisions according to their routing table. As your packet meanders through each router, those tables get your packet closer to the computer you want. This is "unicast".

When your customer looks up an IP address for your app, they query DNS. All our name servers have identical answers, so it doesn't matter which one answers. With anycast, we use internet routing capabilities to make things faster.

Packet latency is largely a function of geographic distance. With anycast, we tell routers the same server is located in various spots around the internet. Internet routers optimize routes, so they pick the one closest to your customer. Moving DNS servers closer mitigates geographic latency.

Lower latency is the primary benefit, but we gain resilience at the same time. Instead of four name servers, we now have forty. If any of these go offline, they're removed from the routing table, and others automatically pick up the slack.

DNSimple's ALIAS record type is a second-order DNS query. Since our anycast server is likely to be closer to the target geographic location, an ALIAS record may resolve to a closer datacenter if your app is also geographically distributed.

