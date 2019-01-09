---
title: Auto-Importing DNS Records
excerpt: Auto-import your DNS records to avoid downtime when transferring or hosting your domain with us. 
categories:
- DNS
---

# Auto-Importing DNS Records

<info>
This article describes a feature only available on [newer plans](/articles/new-plans#newer-plans-only).
</info>

Auto-importing DNS records helps reduce downtime on your domain transfer or when hosting the DNS for your domain with us.

Instead of manually entering DNS records, or importing them in [BIND](https://en.wikipedia.org/wiki/BIND) format (not all domain providers let you export your records in this standard format), we scan existing records and import them for you.

We can import the following DNS record types:

- [A](/articles/a-record)
- [AAAA](/articles/aaaa-record)
- [CNAME](/articles/cname-record)
- [MX](/articles/mx-record)
- TXT

We prompt you to auto-import DNS records when:

- A domain transfer is about to start
- Adding a domain for DNS management

You can also auto-import the zone for your domain at any time by clicking on <label>Auto-import DNS</label> from the record editor.

## Overview

We scan the existing records for your domain and let you import them all at once.

We automatically look for the most common subdomains like `www`, `blog`, and `email`. You can add custom subdomains at the bottom of the form.

![Overview](/files/auto-import-dns-overview.png)

Once you have all the necessary records, click on <label>Import DNS records</label> to add them all to your domain zone.

## Managing conflicts

If auto-importing a record conflicts with an existing one on your domain, we ask you to confirm which record you'd like to keep. By default, we don't override the records on your domain. You'll have to select the record that applies in your context.

![Overview](/files/auto-import-dns-conflict.png)

Once you've made a selection, click on <label>Import DNS records</label> to add them all to your domain zone.

