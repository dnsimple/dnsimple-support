---
title: Using DNSimple as a secondary DNS with a hidden primary
excerpt: Learn how to configure a hidden primary with DNSimple as a secondary DNS provider.
categories:
- Secondary DNS
---

# Using DNSimple as a secondary DNS with a hidden primary

A hidden primary DNS setup allows you to keep your primary DNS server private while using DNSimple as a secondary DNS provider to handle public queries. This setup enhances security, redundancy, and performance by ensuring your authoritative nameservers are not exposed to the internet.

This guide explains how to configure a hidden primary while leveraging DNSimple as your secondary DNS provider.

For an overview of Secondary DNS, have a look at [our introduction article](/articles/secondary-dns).

<warning>
  Don't add DNSimple as a secondary DNS server to domains with DNSSEC. We do not import external RRSIG records, which will produce resolution failures from DNSSEC aware resolvers.

  Please ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS.
</warning>

#### Table of contents {#toc}

* TOC
{:toc}

## Prerequisites

Before proceeding, make sure you’re familiar with setting up DNSimple as a secondary DNS provider by following [this guide](/articles/secondary-dns-dnsimple-as-secondary). This article expands on that setup by configuring a hidden primary.

In this setup, your primary DNS server is hidden from public queries, while DNSimple acts as the secondary DNS provider.

## Requirements

1. A primary DNS provider that supports AXFR (Authoritative Zone Transfers).
2. A DNSimple account with a plan that supports DNSimple as secondary DNS.
3. Ability to modify NS records at your domain registrar.

## Step 1: Configure your hidden primary DNS

1. Ensure your primary DNS provider supports AXFR (zone transfers).
2. Log in to your primary DNS provider
3. Add your DNS records (A, MX, CNAME, TXT, etc...)
4. Enable AXFR (Zone Transfers) and add DNSimple’s AXFR client IP addresses to the Allow-List:

```
3.12.234.2
2600:1f16:ae2:e900:f05c:9438:865f:64a0
```
Ensure your NS records do NOT include the hidden primary to keep it private.

## Step 2: Set Up DNSimple as secondary DNS

1. Log in to DNSimple
2. Navigate to the domain that you'd like to configure
3. Configure the zone to as secondary DNS [this guide](/articles/secondary-dns-dnsimple-as-secondary)

## Step 3: Update the delegation at your domain registrar

1. Log in to your domain registrar
2. Update the delegation only [use DNSimple's name servers](/articles/dnsimple-nameservers).

<note>
Do not list the hidden primary DNS server to keep it private.
</note>

## Step 4: Verify & test your setup

The configuration might take between 10 to 30 minutes to take effect.

### Records have been synchronized in DNSimple
Log in to DNSimple, verify that the records have been synchronized

![Secondary DNS record sync](/files/secondary-dns-record-sync.png)

### Public queries resolve through DNSimple

Run the following `dig` command from your console:
```
dig @ns1.dnsimple.com example.com
```
### Hidden primary is not exposed

Verify that the hidden primary name servers are **not** publicly exposed, by running:
```
> whois example.com
...
Name Server: ns1.dnsimple.com
Name Server: ns2.dnsimple-edge.net
Name Server: ns3.dnsimple.com
Name Server: ns4.dnsimple-edge.org
```
