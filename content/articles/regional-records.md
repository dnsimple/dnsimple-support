---
title: Regional Records
excerpt: Select geographical regions where you want a record to appear.
categories:
- DNS
---

# Regional Records

<info>
This article describes a feature only available on the Teams plan and higher, where it's enabled by default. [See the differences between plans](/articles/dnsimple-plans/).
</info>

Regional records let you select points of presence (POP) — geographical regions where you want a record to appear.

We have <%= POPS.count %> points of presence:

<% POPS.each do |server| %>* <%= server %>
<% end %>

When you're setting up a new record for your domain, you have the option to specify its Points of Presence (POPs). **If you don't specify any, the record will be made available across all DNSimple's Points of Presence by default.**

<!--- needs screenshot -->

## Regional record usage note

Our regional records provide additional granularity for customers who want to tailor their DNS responses based on the DNS requests origination.

We have multiple POPs. Some of these are geographically close, which can affect the routing path taken from Internet Service Providers (ISPs) used by the customers to our POPs. 

Internet traffic routing is impacted by multiple factors. Network operators' routing preferences vary based on optimal routing selection, costs, and specific operator agreements.

In certain cases, network topology and geographical proximity do not align perfectly and can lead to unpredictable results with regard to where the network packets terminate.

When setting up regional records, it's important to include records for POPs that are geographically close to each other. Not doing so can cause failing DNS resolution due to the above factors.

## Have more questions? 

[Contact us](https://dnsimple.com/feedback) with any questions about regional records usage, and we'll be happy to help. 
