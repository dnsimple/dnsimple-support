---
title: Auto-importing DNS records
excerpt: Avoid downtime when transferring or hosting your domain with us by auto-importing your DNS records
categories:
- DNS
---

# Auto-importing DNS records

Auto-importing DNS records can help you reduce downtime on your domain transfer or when hosting the DNS for your domain with us.

Instead of entering manually DNS records or importing them in BIND format (not all domain providers let you export your records in this standard format), we scan existing records and import them for you.

We currently can import the following DNS record types:
- A
- AAAA
- CNAME
- MX
- TXT

<note>
This feature is available on Personal, Professional, Business, and Reseller plans
</note>

We prompt you to auto-import DNS records from the following flows:
- When a domain transfer is about to start
- When adding a domain for DNS management

You can also auto-import the zone for your domain at any time by clicking on <label>Auto-import DNS</label> from the record editor.

## Overview

We scan the existing records for your domain and let you import them all at once.

We automatically look for the most common subdomain like "www", "blog", and "email", but you can add custom subdomains at the bottom of the form.

![Overview](/files/auto-import-dns-overview.png)

Once you have all the necessary records, click on <label>Import DNS records</label> to add them all to your domain zone.

## Managing conflicts

If auto-importing a record conflicts with an existing one on your domain, we ask you to confirm which record you'd like to keep. By default, we don't override the records on your domain, so you'll have to select the record that applies in your context.

![Overview](/files/auto-import-dns-conflict.png)

Once you have made a selection, click on <label>Import DNS records</label> to add them all to your domain zone.

