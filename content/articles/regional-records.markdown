---
title: Regional Records
excerpt: Select geographical regions where you want a record to appear.
categories:
- DNS
---

# Regional Records

<info>
This article describes a feature only available on the following plans: Professional and Business.
</info>

Regional records lets you select geographical regions where you want a record to appear.

We have <%= POPS.count %> points of presence:

<% POPS.each do |server| %>
* <%= server %>
<% end %>

When creating a new record, select the point of presence for this record. **If you don't select any, the record will appear in all of them.**

This feature is enabled by default on all Professional and Business plans. [See our pricing and features](https://dnsimple.com/pricing)

![Regional record selection](/files/regional-records.png)
