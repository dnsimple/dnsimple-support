---
title: Add DNSimple as Secondary DNS with a Hidden Primary
meta: Use DNSimple as secondary DNS while keeping your primary name servers off public delegation.
excerpt: Configure a hidden primary with DNSimple as the secondary DNS provider.
categories:
- Secondary DNS
- Enterprise
---

# Add DNSimple as Secondary DNS with a Hidden Primary

### Table of Contents {#toc}

* TOC
{:toc}

---

A hidden primary setup keeps your primary DNS server off public name server lists while DNSimple answers public queries as the secondary. You still edit the zone on the primary. DNSimple pulls updates over AXFR. Keeping the primary off public NS records can reduce direct exposure of that server to the internet.

There is no separate "hidden primary" product in the DNSimple UI. You use the same inbound secondary DNS flow (Secondary Zones and Primary Servers), then publish only DNSimple name servers at the registrar.

This guide builds on [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/). For concepts, see [What is Secondary DNS?](/articles/what-is-secondary-dns/).

## Prerequisites {#prerequisites}

> [!WARNING]
> Do not use inbound secondary DNS with DNSSEC on the DNSimple zone. DNSimple does not import external RRSIG records. See [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/).

## Requirements {#requirements}

1. A primary DNS system that supports AXFR.
1. A DNSimple account on a plan that includes DNSimple as secondary DNS (Teams or Enterprise).
1. Ability to change domain delegation at your registrar.

## Step 1: Set up DNSimple as secondary DNS {#setup-secondary}

Follow [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) to create the secondary zone, add the primary server, allow DNSimple on the primary ACL, and link them.

## Step 2: Update delegation at your registrar {#delegation}

Update registrar delegation to [DNSimple's name servers](/articles/dnsimple-nameservers/) only.

> [!NOTE]
> Do not list the hidden primary in public delegation if you want it to stay private.

## Step 3: Configure your hidden primary {#configure-primary}

1. Manage DNS records on the primary.
1. Enable AXFR and allow [DNSimple's AXFR client IPs](/articles/secondary-dns-dnsimple-as-secondary/#axfr-acl).
1. Keep the primary out of the public NS set.

## Step 4: Verify the setup {#verify}

Allow 10 to 30 minutes for the first sync.

### Records synchronized in DNSimple {#verify-records}

Confirm records appear on the secondary zone in DNSimple.

![Secondary DNS zone synchronization](/files/secondary-dns-record-sync.png)

### Public queries resolve through DNSimple {#verify-queries}

```
dig @ns1.dnsimple-edge.com example.com
```

### Hidden primary is not exposed {#verify-hidden}

Confirm WHOIS / registrar name servers list DNSimple only, for example:

```
Name Server: ns1.dnsimple-edge.com
Name Server: ns2.dnsimple-edge.net
Name Server: ns3.dnsimple-edge.io
Name Server: ns4.dnsimple-edge.org
```

## Have more questions?

If you have questions about this setup, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
