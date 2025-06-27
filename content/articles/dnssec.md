---
title: DNSSEC
excerpt: DNSimple provides full support for DNSSEC in our authoritative name servers, including signing of zones registered outside DNSimple.
categories:
- DNS
- DNSSEC
---

# DNSSEC

<warning>
  DNSimple does not support [Secondary DNS](/articles/secondary-dns/) if you have DNSSEC enabled. They will not work in conjunction. Please ensure that you are not currently using DNSSEC, or disable DNSSEC before using Secondary DNS. You can read more about the complexities of multi-signer DNSSEC models in [RFC 8901](https://datatracker.ietf.org/doc/html/rfc8901).
</warning>

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSSEC (Domain Name System Security Extensions) provides a way to cryptographically build a chain of trust from the [root name servers](https://en.wikipedia.org/wiki/Root_name_server) to [authoritative name servers](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server). Authenticating resolvers may verify this chain of trust to ensure the DNS results weren't tampered with while in transit. Check out our [comics](https://howdnssec.works/why-do-we-need-dnssec/) for a fun explanation of why we need DNSSEC.

## DNSSEC scenarios

There are a variety of scenarios that DNSimple facilitates to ensure that your zone is signed. Use the scenarios below to understand how to configure your domain/zone.

### Scenario 1: Registered *and* DNS-hosted at DNSimple

1. [Enable DNSSEC](/articles/enabling-dnssec/) for *automatic* zone signing, provisioning, and [key rotation](/articles/rotate-dnssec-key/).

### Scenario 2: Registered at DNSimple, but DNS-hosted elsewhere

1. Set up DNSSEC through your external DNS provider.
1. When you have the DNSSEC details, add them to your domain's registrar using our [DS management page](/articles/manage-ds-record/).

### Scenario 3: Registered elsewhere, but DNS-hosted at DNSimple

1. [Enable DNSSEC](articles/enabling-dnssec/) to sign your zone. This initiates automatic [key rotation](/articles/rotate-dnssec-key/).
1. After enabling, copy the DS record details over to your domain's registrar.
1. When the [key rotates](/articles/rotate-dnssec-key/) every three months, we'll send you an email with the details, which you'll need to supply to your domain's registrar.

## Managing DNSSEC

DNSSEC is applied on a per-domain basis. DNSSEC management options are under the DNSSEC tab on a domain's management page.

![screenshot: edit dnssec link](/files/edit-dnssec.png)

## Managing DS records

You'll be able to manage your records whether the TLD requires the DS records to be set up with the DS-Data interface or the KEY-Data interface. Read more about [managing DS records](/articles/manage-ds-record/).