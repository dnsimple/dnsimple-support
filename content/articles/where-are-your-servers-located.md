---
title: Where are your servers located?
excerpt: Our Anycast network consists of multiple points-of-presence around the world.
meta: Discover the global locations of our Anycast network servers, providing fast and reliable DNS services with multiple points-of-presence for enhanced performance.
categories:
- DNSimple
- Enterprise
---

# Where are your servers located?

Our Anycast network consists of <%= POPS.count %> points-of-presence around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>
