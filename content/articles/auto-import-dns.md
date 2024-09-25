---
title: Auto-Importing DNS Records
excerpt: Auto-import your DNS records to avoid downtime when transferring or hosting your domain with us. 
categories:
- DNS
---

# Auto-Importing DNS Records

<info>
Legacy Plans don't have access to this feature. You'll need to be subscribed to one of our [current plans](https://dnsimple.com/pricing) to use this tool.
</info>

Auto-importing DNS records helps reduce downtime on your domain transfer or when hosting the DNS for your domain with us.

Instead of manually entering DNS records, or importing them in [BIND](https://en.wikipedia.org/wiki/BIND) format, we scan existing records and import them for you.

<note>
Not all domain providers let you export your records in this standard format.
</note>

We can import these DNS record types:

- [A](/articles/a-record)
- [AAAA](/articles/aaaa-record)
- [CNAME](/articles/cname-record)
- [MX](/articles/mx-record)
- [TXT](/articles/txt-record/)

We prompt you to auto-import DNS records when:

- A [domain transfer](/articles/domain-transfer/) is about to start.
- [Adding a domain](/articles/adding-domain/) for DNS management.

You can auto-import the zone for your domain any time by clicking on **Auto-import DNS** from the record editor.

## Overview

We scan the existing records for your domain and let you import them all at once.

We automatically look for the most common subdomains, like `www`, `blog`, and `email`. You can add custom subdomains at the bottom of the form.

![Overview](/files/auto-import-dns-overview.png)

Once you have all the necessary records, click **Import DNS records** to add them to your domain zone.

## Managing conflicts

If auto-importing a record conflicts with an existing record on your domain, we ask you to confirm which record you'd like to keep. By default, we don't override the records on your domain — you'll have to select the record that applies in your context.

![Overview](/files/auto-import-dns-conflict.png)

Once you've made a selection, click **Import DNS records** to add them to your domain zone.

## Have more questions?

If you have any questions about how to auto-import your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
