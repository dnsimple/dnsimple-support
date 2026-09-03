---
title: DNS Query Allowances and Volume Fees
excerpt: Every zone on a Solo or Teams plan includes a monthly allowance of DNS queries at no charge, and only the volume above that allowance is billed.
meta: Solo includes 50,000 DNS queries per zone per month and Teams includes 500,000, at no charge. DNSimple bills only the query volume above your plan's allowance, at $0.80 per million on Solo and $0.60 per million on Teams.
categories:
- DNSimple
---

# DNS Query Allowances and Volume Fees

Each zone on a Solo or Teams plan includes a monthly allowance of DNS queries at no charge, and DNSimple bills only the volume above it. Solo includes 50,000 queries per zone per month, then $0.80 per million. Teams includes 500,000 queries per zone per month, then $0.60 per million. Enterprise plans have custom contract pricing.

### Table of Contents {#toc}

* TOC
{:toc}

---

## Query allowances and rates {#rates}

| Plan | Included per zone per month | Price above the allowance |
|------|-----------------------------|---------------------------|
| Solo | 50,000 queries | $0.80 per million |
| Teams | 500,000 queries | $0.60 per million |
| Enterprise | Custom | Custom |

The allowance applies to each zone on its own. A zone that stays within its allowance costs nothing in query fees, no matter how many other zones you host. The allowance is not prorated, so every zone receives the full allowance in every billing cycle.

> [!NOTE]
> Query pricing is set on your subscription when the subscription is created and when you change plans. To confirm the rates on your account, open the Billing and plans page or [contact support](/articles/dnsimple-support/).

## Calculating your fees {#calculating-your-fees}

Subtract the allowance from the zone's monthly query volume, round the remainder up to the next full million, and multiply by your plan's rate. DNSimple does not charge fractions of a million.

On the Solo plan, with a 50,000-query allowance at $0.80 per million:

- 40,000 queries is $0.00, because the zone stays within its allowance
- 300,000 queries is $0.80, because the 250,000 queries above the allowance round up to one million
- 1,200,000 queries is $1.60, because the 1,150,000 queries above the allowance round up to two million

On the Teams plan, with a 500,000-query allowance at $0.60 per million:

- 500,000 queries is $0.00
- 900,000 queries is $0.60, because the 400,000 queries above the allowance round up to one million
- 3,000,000 queries is $1.80, because the 2,500,000 queries above the allowance round up to three million

Each zone is calculated separately, and the results are added together on your [invoice](/articles/understanding-invoice/).

**Try our [pricing calculator](https://dnsimple.com/) to get an estimate of your zone query costs.**

## Understanding your query volume {#understanding-your-query-volume}

### What plans are affected by query volume fees?

DNSimple bills query volume on the Solo and Teams plans, and only for the volume above each zone's monthly allowance. Enterprise plans have custom contract pricing. The legacy Personal and Professional plans are not billed for query volume.

### Where can I see my current query volume?

To view the query volume for your zones, open <label>account settings</label>, click the <label>Billing and plans</label> tab, then click <label>View</label> in the <label>Plan usage</label> section.

The page opens with a statement of the queries included per zone and the rate above them. Below that, you will see the top 100 zones by query volume for the current billing period, and for each zone, how far it sits above its allowance and the fees it has accrued.

As an Enterprise customer, you have some additional capabilities:

- You can filter by date range to understand the total query volume fees incurred during the selected period, along with a link to the corresponding invoices.
- You can also export the query volume for all your zones, not only the top 100, in the selected period as a CSV file.

![Enterprise query volume page showing top 100 zones, date filtering, and CSV export options](/files/enterprise-top-100-zones-query-volume.png)

### How can I learn my zone volume if I am planning to upgrade my plan?

[Contact support](/articles/dnsimple-support/), and we can give you your zones' query volume for the current billing period. You can also use our [pricing calculator](https://dnsimple.com/) to get an estimate of your costs. Moving from Solo to [Teams](/articles/dnsimple-plans/#teams) raises the allowance on every zone from 50,000 to 500,000 queries per month and lowers the rate above it.

### What is a DNS query?

A DNS query is a message a client sends to the DNS server to request information. Queries are primarily used to find IP addresses associated with domain names. They can come from browsers, email security verifications, and other automated processes.

### What is the average query volume a zone registers?

A typical zone will receive an average of 300K queries per month. A zone at that volume is within the Teams allowance and incurs no query fees, and costs $0.80 per month on Solo.

### Why does DNSimple charge for query volume?

Serving DNS queries costs money. Hardware and network transit prices have risen, and query fees cover the cost of operating DNSimple's authoritative DNS network so that it stays fast and available everywhere it answers. Including an allowance with each plan keeps low-traffic zones free of query fees and bills only the zones that use the network heavily.

## Have more questions?

If you have any questions about your query volume fees or how we calculate them, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
