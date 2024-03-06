---
meta: DNS zones at DNSimple are served through Anycast from 5 points of presence.
title: Anycast DNS
excerpt: DNS zones at DNSimple are served through Anycast from 5 points of presence.
categories:
- DNS
---

# DNSimple Anycast DNS Service

All domains at DNSimple are served through Anycast. Use the name servers from the [DNSimple name servers](/articles/dnsimple-nameservers) support article for your domain.

DNSimple has servers in <%= POPS.count %> locations around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>

If you want to learn more about Anycast, [read this support article](/articles/why-anycast-dns).
