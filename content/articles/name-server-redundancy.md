---
title: Name Server Redundancy and High Availability
excerpt: How multiple name servers and Anycast routing protect your domain from DNS outages.
meta: How DNS redundancy works, why multiple name servers are required, and how DNSimple provides high availability through Anycast and geographic distribution.
categories:
- Name Servers
---

# Name Server Redundancy and High Availability

### Table of Contents {#toc}

* TOC
{:toc}

---

DNS redundancy ensures your domain remains reachable even when individual name servers are unavailable. If a name server goes offline due to maintenance, network issues, or hardware failure, other name servers continue answering queries for your domain without interruption.

## Why multiple name servers matter {#why-multiple-name-servers}

Every domain is delegated to multiple name servers. When a DNS resolver looks up your domain, it queries one of the delegated name servers. If that server does not respond, the resolver automatically tries another from the list.

A domain with only one name server has a single point of failure — if that server goes down, the domain stops resolving entirely. With multiple name servers, the remaining servers handle queries while the failed server recovers.

Most domain registries require at least two name servers for delegation. DNSimple provides four name servers across different top-level domains to maximize availability:

- ns1.dnsimple.com
- ns2.dnsimple-edge.net
- ns3.dnsimple.com
- ns4.dnsimple-edge.org

Using name servers on different TLDs (.com, .net, .org) provides an additional layer of resilience. If an issue affects the .com TLD infrastructure, the .net and .org name servers continue to operate.

## How Anycast increases availability {#anycast}

DNSimple's name servers use [Anycast routing](/articles/why-anycast-dns/), which means each name server address is served from multiple physical locations around the world. When a DNS query reaches ns1.dnsimple.com, the internet's routing protocols direct it to the nearest available server.

If one Anycast location goes offline, routing tables update automatically to redirect queries to the next closest location. This happens at the network layer with no configuration changes required on your part.

The combination of multiple name servers and Anycast means your domain's DNS has redundancy at two levels:

- **Name server level** — four independent name servers, any of which can answer queries
- **Location level** — each name server operates from multiple geographic locations

## All four name servers are required {#all-four-required}

To get the full benefit of DNSimple's redundancy, delegate your domain to all four [DNSimple name servers](/articles/dnsimple-nameservers/). Using fewer name servers reduces availability — if you only delegate to two and one becomes unreachable, half your DNS capacity is gone.

> [!WARNING]
> Do not mix DNSimple name servers with name servers from another provider unless you are using [Secondary DNS](/articles/secondary-dns/). Mismatched name servers can return inconsistent results and cause intermittent resolution failures.

## Secondary DNS for additional redundancy {#secondary-dns}

For domains that require even higher availability, DNSimple supports [Secondary DNS](/articles/secondary-dns/). Secondary DNS replicates your DNS records to a second provider's name servers, so queries are answered by both DNSimple and the secondary provider. If one provider experiences an outage, the other continues serving DNS.

## Monitoring your name server health {#monitoring}

You can verify that your domain is properly delegated to all four DNSimple name servers:

```
dig NS example.com +short
```

The output should list all four DNSimple name servers. If any are missing, update the delegation through your registrar. See [Setting the Name Servers for a Domain](/articles/setting-name-servers/) for instructions.

If your domain is not resolving correctly, see [Troubleshooting Domain Resolution Issues](/articles/domain-resolution-issues/) for diagnostic steps.

## Have more questions? {#have-more-questions}

If you have any questions about name server redundancy or DNS availability, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
