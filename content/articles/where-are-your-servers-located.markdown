---
title: Where are your servers located?
excerpt: Our Anycast network consists of <%= servers.count %> points-of-presence around the world.
categories:
- DNSimple
---

# Where are your servers located?

Our Anycast network consists of <%= POPS.count %> points-of-presence around the world:

<% POPS.each do |server| %>
* <%= server %>
<% end %>
