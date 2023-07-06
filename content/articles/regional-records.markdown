---
title: Regional Records
excerpt: Select geographical regions where you want a record to appear.
categories:
- DNS
---

# Regional Records

<info>
This article describes a feature only available on certain plans. [See the differences between plans](/articles/dnsimple-plans/).
</info>

Regional records lets you select geographical regions where you want a record to appear.

We have <%= POPS.count %> points of presence:

<% POPS.each do |server| %>* <%= server %>
<% end %>

When creating a new record, select the point of presence for this record. **If you don't select any, the record will appear in all of them.**

This feature is enabled by default on certain plans. [See the differences between plans](/articles/dnsimple-plans/).

![Regional record selection](/files/regional-records.png)
