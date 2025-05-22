---
title: Add Dnsimple as a Secondary DNS with a Hidden Primary
meta: Configure DNSimple as a secondary DNS provider keeping your primary nameservers hidden to enhance security.
excerpt: Learn how to configure a hidden primary with DNSimple as a secondary DNS provider.
categories:
- Secondary DNS
---

# Add DNSimple as a Secondary DNS with a hidden primary

#### Table of contents {#toc}

* TOC
{:toc}

A hidden primary DNS setup allows you to keep your primary DNS server private while using DNSimple as a secondary DNS provider to handle public queries. This setup enhances security, redundancy, and performance by ensuring your primary authoritative nameservers are not exposed to the internet.

Your primary nameservers can be located behind firewalls, on internal networks, or on premises, allowing full control over zone management.

This guide explains how to configure a hidden primary while leveraging DNSimple as your secondary DNS provider.

## Prerequisites

<warning>
  Don't add DNSimple as a secondary DNS server to domains with DNSSEC. We do not import external RRSIG records, which will produce resolution failures from DNSSEC aware resolvers.

  Ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS.
</warning>

Before proceeding, familiarize yourself with setting up DNSimple as a secondary DNS provider by following [this guide](/articles/secondary-dns-dnsimple-as-secondary). This article expands on that setup by configuring a hidden primary.

In this setup, your primary DNS server is hidden from public queries, while DNSimple acts as the secondary DNS provider.

## Requirements

1. A primary DNS provider that supports AXFR (Authoritative Zone Transfers).
2. A DNSimple account with a plan that supports DNSimple as secondary DNS.
3. Ability to change domain delegation at your domain registrar.

## Step 1: Set Up DNSimple as secondary DNS

1. Navigate to the domain that you'd like to configure
2. Configure the zone to as secondary DNS [this guide](/articles/secondary-dns-dnsimple-as-secondary)

## Step 2: Update the delegation at your domain registrar

1. Log in to your domain registrar
2. Update the delegation only [use DNSimple's name servers](/articles/dnsimple-nameservers).

<note>
Do not list the hidden primary DNS server to keep it private.
</note>

## Step 3: Configure your hidden primary DNS

1. At your primary DNS provider, add your DNS records (A, MX, CNAME, TXT, etc...).
2. Enable AXFR (Zone Transfers) and add [DNSimple's AXFR client IP addresses to the Allow-List](https://support.dnsimple.com/articles/secondary-dns-dnsimple-as-secondary/#configuring-axfr-at-your-primary-dns-provider).
3. Ensure your NS records do NOT include the hidden primary to keep it private.

## Step 4: Verify &amp; test your setup

The configuration might take between 10 to 30 minutes to take effect.

### Records have been synchronized in DNSimple

Verify that the records have been synchronized in your DNSimple account.

![Secondary DNS zone synchronization](/files/secondary-dns-record-sync.png)

### Public queries resolve through DNSimple

Run the following `dig` command from your console:
```
dig @ns1.dnsimple.com example.com
```
### Hidden primary is not exposed

Verify that the hidden primary name servers are **not** publicly exposed, by running:
```
> whois your-domain-name.com
...
Name Server: ns1.dnsimple.com
Name Server: ns2.dnsimple-edge.net
Name Server: ns3.dnsimple.com
Name Server: ns4.dnsimple-edge.org
```
## Have more questions? 

If you have questions or need any assistance with your secondary DNS configuration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
