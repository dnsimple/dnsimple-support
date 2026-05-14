---
title: DNS Query Volume Fees
excerpt: We charge $0.10 per million queries per zone.
meta: Learn about DNS query limits and pricing at DNSimple. Understand the cost of $0.10 per million queries per zone to optimize your domain management.
categories:
- DNSimple
---

# DNS Query Volume Fees

We charge $0.10 per million queries per zone on Solo and Teams plans.

DNS query volume fees are calculated at this price every time the registered volume goes beyond any given million-query mark, starting at zero queries.

### Table of Contents {#toc}

* TOC
{:toc}

---

## Calculating your fees

- 1 - 999,999 queries is $0.10
- 1M - 1,999,999 queries is $0.20
- 2M - 2,999,999 queries is $0.30

And so on.

We won't charge fractions of the price. Any volume greater or equal to 1M and less than 2M will cost $0.20.

**Try our [pricing calculator](https://dnsimple.com/) to get an estimate of your zone query costs.**

## Understanding your query volume

### What plans are affected by query volume fees?

We currently charge query volume fees on Solo and Teams plans. Enterprise plans have custom pricing.

### Where can I see my current query volume?

To view the query volume for your zones, go to your account settings page and click the "Billing and Plans" section. There, you will see the top 100 zones by query volume for the current billing period.

As an Enterprise customer, you have some additional capabilities:

- You can filter by date range to understand the total query volume overage fees incurred during the selected period, along with a link to the corresponding invoices.
- You can also export the query volume for all your zones, not only the top 100, in the selected period as a CSV file.

![Enterprise query volume page showing top 100 zones, date filtering, and CSV export options](/files/enterprise-top-100-zones-query-volume.png)

### How can I learn my zone volume if I'm planning to upgrade my plan?

[Contact support](/articles/dnsimple-support/), and we can give you your zones' query volume for the current billing period. You can also use our [pricing calculator](https://dnsimple.com/) to get an estimate of your costs.

### What is a DNS query?

A DNS query is a message a client sends to the DNS server to request information. Queries are primarily used to find IP addresses associated with domain names. They can come from browsers, email security verifications, and other automated processes.

### What is the average query volume a zone registers?

A typical zone will receive an average of 300K queries per month.

## Have more questions?

If you have any questions about your query volume fees or how we calculate them, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
