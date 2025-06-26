---
title: Using Cloudflare DNSSEC with DNSimple
excerpt: How to set a DS record on registered domains for Cloudflare DNSSEC.
meta: Learn how to easily set up a DS record for your registered domains using Cloudflare DNSSEC to enhance security and ensure proper domain validation.
categories:
  - DNSSEC
  - Integrations
---

# Using Cloudflare DNSSEC with DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

[Cloudflare](https://www.cloudflare.com/) is a service that offers protection and acceleration of your website by routing requests through its network.

If you want to use Cloudflare's DNSSEC with a domain registered through DNSimple, follow these instructions to set your **DS record** at the domain registry.

<info>
Not all TLDs support DNSSEC. If you receive an error while adding your DS record at DNSimple, please [contact our support team](https://dnsimple.com/contact).
</info>

## Enable DNSSEC at Cloudflare

To use Cloudflare's DNSSEC, you will need to [delegate your registered domain to Cloudflare's name servers in DNSimple](/articles/setting-name-servers/#pointing-the-name-servers-to-another-provider). To prevent downtime, make sure to set up all of the appropriate DNS records at Cloudflare before delegating the domain to them.

Once the delegation is changed, you can start the process of enabling DNSSEC at Cloudflare.

You can learn how to enable DNSSEC in Cloudflare in their [documentation](https://developers.cloudflare.com/dns/dnssec/#enable-dnssec).

## Configure your DS record
Once DNSSEC is enabled at Cloudflare, you will see information about the DS record.

We have field-by-field entry, so you will need to copy/paste or select the information from the drop-down menu for each field in DNSimple. Cloudflare will provide you with all of the necessary information.

You can find out more about configuring your DS record in [Adding a DS Record](/articles/manage-ds-record/).

## Have more questions?
If you have any questions or need assistance enabling DNSSEC at Cloudflare, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
