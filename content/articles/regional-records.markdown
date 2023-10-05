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

<info>
Usage note for regional records
</info>

Our regional records provide an additional granularity for customers who would like to tailor their DNS responses based on the DNS requests origination.

We have multiple Points of Presence (POPs) and some of these POPs are geographically closely located which might affect the routing path taken from Internet Service Providers (ISPs) used by the customers to our POPs. 

The Internet traffic routing is impacted by multiple factors as the network operators routing preferences vary based on optimal routing selection, costs and specific operator agreements.

In certain cases, network topology and geographical proximity do not align perfectly and can lead to unpredictable results in regard to where the network packets terminate.

When using regional records, please bear in mind that defining a record for specific POP without adding the same regional record for geographically close POP can cause failing DNS resolution due to the factors mentioned above.

We are always happy to help with your specific needs and please do not hesitate to contact us if you are in doubt on regional records usage.

