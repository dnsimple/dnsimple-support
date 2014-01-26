---
title: Why anycast DNS?
excerpt: 
kind: article
categories:
- DNS
---

# Why anycast DNS?

The DNS protocol most often uses UDP to ship packets around the internet. UDP being a stateless protocol enables an optimization based on “anycast”.

More often than not you want to talk to a specific computer on the internet. When a packet is sent to another computer on the internet the many routers in between make forwarding decisions according to their routing table. As your packet meanders through each router those tables get your packet closer to the one computer you’re after. This is “unicast”.

When your customer looks up an IP address for your app they query DNS. All of our name servers have identical answers so we don’t care which one answers. With anycast we use internet routing capabilities to make it happen quicker.

Packet latency is largely a function of geographic distance. With anycast we tell routers the same server is located at a bunch of different spots around the internet. Because internet routers are always optimizing routes they pick the one closest to your customer. Moving DNS servers closer mitigates this geographic latency component.

While lower latency is the primary benefit we also gain resilience at the same time. Instead of four name servers we now have forty. If any of these forty go offline they’re removed from the routing table and others automatically pick up the slack.

Finally, DNSimple’s ALIAS record type is a second-order DNS query. Since our anycast server is likely to be closer to the target geographic location an ALIAS record may resolve to a closer datacenter if your app is also geographically distributed.

If you're interested in trying our our Anycast network, sign into your DNSimple account and enable Anycast on each domain's Manage page. In the near future we will be moving all of our name servers to Anycast as well, so you'll no longer need to do anything special to take advantage of the benefits of Anycast.
