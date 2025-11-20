---
title: DNSimple Points of Presence
excerpt: DNS zones at DNSimple are served through Anycast from multiple points of presence.
categories:
- DNS
---

# DNSimple Points of Presence

DNSimple's Anycast network consists of servers in the following locations around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>

To learn more about what Anycast is, read our [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/)? article. 
