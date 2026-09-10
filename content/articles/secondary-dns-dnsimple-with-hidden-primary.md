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

A hidden primary DNS setup lets you keep your primary DNS server private while using DNSimple as a secondary DNS provider to handle public queries. This setup enhances security, redundancy, and performance by keeping your primary authoritative name servers off public name server lists.

Your primary name servers can be located behind firewalls, on internal networks, or on premises, so you keep full control over zone management. You still edit the zone on the primary. DNSimple pulls updates over AXFR.

There is no separate "hidden primary" product in the DNSimple UI. You use the same inbound secondary DNS flow (Secondary Zones and Primary Servers), then publish only DNSimple name servers at the registrar.

This guide builds on [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/). For concepts, see [What is Secondary DNS?](/articles/what-is-secondary-dns/).

## Requirements {#requirements}

1. A primary DNS provider that supports AXFR (Authoritative Zone Transfers).
1. A DNSimple account on a plan that includes DNSimple as secondary DNS (Teams or Enterprise).
1. Ability to change domain delegation at your domain registrar.

> [!WARNING]
> Do not add DNSimple as a secondary DNS server to domains with DNSSEC. DNSimple does not import external RRSIG records, which produces resolution failures from DNSSEC-aware resolvers. See [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/).

## Step 1: Set up DNSimple as secondary DNS {#setup-secondary}

Follow [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/) to create the secondary zone, add the primary server, allow DNSimple on the primary ACL, and link them.

## Step 2: Update delegation at your registrar {#delegation}

Update the delegation at your domain registrar to [DNSimple's name servers](/articles/dnsimple-nameservers/) only.

> [!NOTE]
> Do not list the hidden primary DNS server in public delegation if you want it to stay private.

## Step 3: Configure your hidden primary {#configure-primary}

<div class="section-steps" markdown="1">
##### Configure the hidden primary

1. At your primary DNS provider, add your DNS records (A, MX, CNAME, TXT, and others as needed).
1. Enable AXFR (zone transfers), and allow [DNSimple's AXFR client IPs](/articles/secondary-dns-dnsimple-as-secondary/#axfr-acl).
1. Ensure your NS records do not include the hidden primary, so it stays private.
</div>

## Step 4: Verify the setup {#verify}

The configuration can take 10 to 30 minutes to take effect.

### Records synchronized in DNSimple {#verify-records}

Verify that the records have been synchronized in your DNSimple account.

![Secondary DNS zone synchronization](/files/secondary-dns-record-sync.png)

### Public queries resolve through DNSimple {#verify-queries}

Run the following `dig` command from your console:

```
dig @ns1.dnsimple-edge.com example.com
```

### Hidden primary is not exposed {#verify-hidden}

Verify that the hidden primary name servers are not publicly exposed. Query WHOIS for the domain:

```
whois example.com
```

The name servers listed should be DNSimple only:

```
Name Server: ns1.dnsimple-edge.com
Name Server: ns2.dnsimple-edge.net
Name Server: ns3.dnsimple-edge.io
Name Server: ns4.dnsimple-edge.org
```

## Have more questions?

If you have questions about this setup, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
