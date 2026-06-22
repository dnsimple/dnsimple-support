---
title: DNSimple Points of Presence
excerpt: A point of presence (PoP) is a location where DNSimple operates name servers that answer DNS queries.
meta: Learn what a DNSimple point of presence (PoP) is, where DNSimple's Anycast points of presence are located, and how a PoP differs from a regional record.
categories:
- DNS
---

# DNSimple Points of Presence

### Table of Contents {#toc}

* TOC
{:toc}

---

A point of presence (PoP) is a physical location where DNSimple operates name servers that answer DNS queries for your domains. DNSimple's [Anycast network](/articles/why-anycast-dns/) spans multiple PoPs around the world, and every zone is served from all of them by default. When someone looks up your domain, Anycast routes the query to the nearest available PoP, which lowers latency and improves resilience.

## Where our points of presence are located {#locations}

DNSimple's Anycast network consists of name servers in the following <%= POPS.count %> locations around the world:

<% POPS.each do |server| %>* <%= server %>
<% end %>

## Points of presence versus regional records {#vs-regional-records}

A point of presence is part of DNSimple's infrastructure — it is *where* a query is answered. A [regional record](/articles/regional-records/) is a per-record setting that controls *which* of those locations may answer for a given record.

By default, every record is served from all of DNSimple's PoPs. The regional records feature lets you restrict an individual record to a subset of these locations, so it is served only from the regions you choose.

## Have more questions?

If you have additional questions about our points of presence, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.
