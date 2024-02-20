---
title: DNS query volume fees
excerpt: We charge $0.10 per million queries per zone.
categories:
- DNSimple
---

# DNS query volume fees

TL;DR: We charge $0.10 per million queries per zone on Solo and Teams plans. 

### Table of Contents {#toc}

* TOC
{:toc}

---

## How we calculate fees

- The price for up to, but not including, one million queries per zone is $0.10.
- The DNS query volume fees are calculated at this price every time the registered volume goes beyond any given million-query mark (starting at 0 queries):
    - The fee for 1 - 999,999 queries is $0.10
    - The fee for 1M - 1,999,999 queries is $0.20
    - The fee for 2M - 2,999,999 queries is $0.30
    - And so on.
- We won't charge fractions of the price:
    - Any volume greater or equal to 1M and less than 2M will have a fee of $0.20
    - For example, the fee for 1.5M queries is still $0.2.

Let's explore this using a couple examples.

### Example 1: 2,000,000 total queries across 4 zones

This is a sample list of zones and queries for a billing period in an account:
- zone1.com with 500,000 queries
- zone2.com with 100,000 queries
- zone3.com with 1,300,000 queries
- zone4.com with 100,000 queries

In this scenario, you would see a DNS query volume fee of $0.50 in your invoice:
- zone1.com, zone2.com, and zone4.com contribute each with $0.10, because they don't surpass the 1M queries threshold.
- zone3.com contributes with $0.20, because it has registered between 1M and 2M queries.

### Example 2: 2,000,000 total queries across a single zone

What if you have a single zone with a registered query volume of 2M queries?

You would see a DNS query volume fee of $0.30 in your invoice, because zone1.com has registered a volume between 2M and 3M queries.

## Understanding your query volume

### What plans are affected by query volume fees?

We currently charge for query volume on our Solo and Teams plans. If you're on an Enterprise plan, you likely have custom pricing.

### How can I visualize my current query volume

You can visualize your zones' query volume for the current billing period in the "Billing and Plans" section of your account page.

### How can I know my zones' volume if I'm planning to upgrade my plan?

[Contact support](/articles/dnsimple-support), and we can give you your zones' query volume for the current billing period.

### What is the average query volume a zone registers?

A typical zone will receive an average of 300K queries per month.
 
