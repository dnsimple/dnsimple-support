---
title: Where Are Your Servers Located?
excerpt: Our Anycast network consists of <%= POPS.count %> points-of-presence around the world.
categories:
- DNSimple
---

# Where Are Your Servers Located?

Our Anycast network consists of <%= POPS.count %> points-of-presence around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>
