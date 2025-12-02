---
title: Explanation of Regional Records
excerpt: Select geographical regions where you want a record to appear.
meta: Easily manage your DNS records by selecting specific geographical regions for their visibility, ensuring optimal performance and relevance for your audience.
categories:
- DNS
- Enterprise
---

# Explanation of Regional Records

Regional records are a feature from DNSimple that lets you specify the geographical regions where a DNS record will be available. This feature gives you granular control over DNS responses, tailoring them based on where a [DNS](/articles/what-is-dns/) request originates. Instead of a record being served from all of DNSimple's points of presence (PoPs), you can restrict it to a select few. This is particularly useful for geographically sensitive applications like content delivery networks (CDNs) or services that need to route traffic to a specific regional server.

## How regional records work 

Regional records provide an extra layer of control over the DNS resolution process. When a DNS request arrives at DNSimple, our system checks its origin location. If the request comes from a region you've specified for a particular record, our name server in that PoP will serve the record's content. If the request comes from a region that is not specified, that record will not be served.

By default, if you don't specify any regions for a record, it's made available across all of DNSimple's PoPs. You have the option to pick from our <%= POPS.count %> points of presence:

<% POPS.each do |server| %>* <%= server %>
<% end %>

## Important usage notes
Understanding how internet traffic is routed is critical when using regional records. Network operators' routing preferences are complex. They're influenced by factors like costs, specific agreements, and optimal routing selection. This means that geographical proximity and network topology don't always align perfectly, which can lead to unpredictable results with network packets.

For example, a request originating from a location close to one PoP might still terminate at a different, farther PoP due to a network operator's specific routing path. To account for this, it's best practice to include records for PoPs that are geographically close to each other to prevent potential DNS resolution failures.

This feature is available on the [Teams plan and higher](https://dnsimple.com/pricing) and is enabled by default for those plans.

## Have more questions?
If you have additional questions or need any assistance with regional records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
