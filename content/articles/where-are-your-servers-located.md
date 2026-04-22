---
title: Where are your servers located?
excerpt: Our Anycast network consists of multiple points-of-presence around the world.
meta: DNSimple Anycast network server locations. Multiple global points-of-presence providing fast and reliable DNS resolution for your domains.
categories:
- DNSimple
- Enterprise
---

# Where are your servers located?

Our Anycast network consists of <%= POPS.count %> points-of-presence around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>
