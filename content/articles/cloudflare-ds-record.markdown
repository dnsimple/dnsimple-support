---
title: Using CloudFlare DNSSEC with DNSimple
excerpt: How to set a DS record on registered domains for CloudFlare DNSSEC.
categories:
- CloudFlare and DNSimple
---

# Using CloudFlare DNSSEC with DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

[CloudFlare](https://www.cloudflare.com/) is a service that offers protection and acceleration of your website by routing requests through their network.

If you would like to use CloudFlare's DNSSEC with a domain registered through DNSimple, you may follow these instructions to set your DS record at the domain registry.

<info>
Not all TLDs support DNSSEC at this time. If you receive an error while enabling your DS record, please [contact support](https://dnsimple.com/contact).
</info>

## Enable DNSSEC at Cloudflare

To use CloudFlare's DNSSEC, you will need to delegate your registered domain to CloudFlare's name servers. Prior to changing the delegation, you should set up all of the appropriate DNS records at CloudFlare. Once you've done that you may change the delegation by visiting the page to “Manage” your domain at DNSimple, follow “Change Name Servers”, and enter CloudFlare supplied name servers.

Once the delegation is changed, you may start the process of enabling DNSSEC.

The first step is to enable DNSSEC at CloudFlare:

![Enable DNSSEC at Cloudflare](/files/cloudflare-dnssec-step1.png)

## Copy the DS Record

Once it is enabled, you will see information about the DS record. We have two ways to enter the information, either field-by-field entry or quick entry, which allows you to paste the entire record into a single field. For CloudFlare, just click the full DS record and it will be copied to your clipboard.

![Copy DS Information](/files/cloudflare-dnssec-step2.png)

## Configure Your DS Record

Log into to your DNSimple account and go to the domain's management page. At the bottom of the Domain tab you will see a card for enabling DS records. Click Configure DS Record.

![Enable DS in DNSimple](/files/dnssec-ds-record-1.png)

Finally, either enter the details for the DS record in using the field-by-field method, or click on the Quick Entry tab and paste the entire record in.

![Enter the DS Information](/files/dnssec-ds-record-2.png)

If your domain's registry supports DNSSEC, the DS record will now be enabled.
