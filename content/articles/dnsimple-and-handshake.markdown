---
title: DNSimple and Handshake (HNS)
excerpt: How to use Handshake (HNS) domains with your DNSimple account.
categories:
- Domains
---

# DNSimple and Handshake (HNS)

### Table of Contents {#toc}

* TOC
{:toc}

## What is Handshake?

[Handshake](https://handshake.org/) is a decentralized, peer-to-peer, permissionless naming protocol. Each peer in the network validates and manages the root DNS naming zone. The aim of the project is to make any centralized governing bodies obsolete for both managing the DNS root zone and, as a result, needing a centralized Certificate Authority (CA).

## Adding a Handshake (HNS) Domain

<note>
DNSimple only supports the management of second-level Handshake domains. Currently, you can't host a name directly registered in the Handshake blockchain (TLD).
</note>

To add an HNS domain and manage its DNS records through DNSimple you have two options:

1. Register the domain with a registrar that sells second-level Handshake domains.
2. If you're the owner of the HNS TLD, add DNSimple's NS records for the domain directly to the blockchain via your preferred method.

For both options, the process of adding the domain to DNSimple is the same.

<div class="section-steps" markdown="1">
##### Adding a domain

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  Click <label>Add</label> from the Dashboard.
  ![Adding a domain button](/files/add-a-domain.png)
1.  Choose <label>DNS zone</label> from the provided options.
  ![Adding a domain](/files/add-button-dns-zone.png)

You'll then be prompted for the name of the domain you want to add to your account.

After adding the domain to DNSimple, you need to use the name servers from the [DNSimple name servers](/articles/dnsimple-nameservers) support article for your domain.
</div>

## Incompatible services

<warning>
Handshake domains do not resolve in regular browsers by default. They require additional setup.
</warning>

DNSimple DNS services are compatible with HNS domains. However, some services are incompatible with HNS domains because they aren't resolvable without a Handshake-aware resolver.

These known services are not compatible:

* Certificates
* Email forwards
* Some One-Click Services
* Netlify Connector
* ALIAS records pointing to other HNS domains which are not hosted with DNSimple

