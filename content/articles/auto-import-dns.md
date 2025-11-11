---
title: Auto-Importing DNS Records
excerpt: Auto-import your DNS records to avoid downtime when transferring or hosting your domain with us. 
categories:
- DNS
---

# Auto-Importing DNS Records

[Auto-importing DNS records](/articles/why-auto-import/) helps reduce downtime on your domain transfer or when hosting the DNS for your domain with us. Instead of manually entering DNS records or importing them in [BIND](https://en.wikipedia.org/wiki/BIND) format, we scan existing records and import them for you.

<info>
Legacy Plans don't have access to this feature. You must be subscribed to one of our [current plans](https://dnsimple.com/pricing) to use this tool.
</info>

**We can import these DNS record types**:

- [A](/articles/a-record/)
- [AAAA](/articles/aaaa-record/)
- [CNAME](/articles/cname-record/)
- [MX](/articles/mx-record/)
- [TXT](/articles/txt-record/)

<note>
Not all domain providers let you export your records in this standard format.
</note>

**We prompt you to auto-import DNS records when**:

- A [domain transfer](/articles/domain-transfer/) is about to start.
- [Adding a domain](/articles/adding-domain/) for DNS management.

You can auto-import the zone for your domain any time by clicking on **Auto-import DNS** from the Record Editor.

## How to auto-import DNS records
1. If you have multiple accounts, use the **account switcher** at the top-right corner to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the Record Editor, click **Import/Export**, then choose **Auto-import DNS** from the dropdown.

   <!--- needs screenshot -->
  
1. DNSimple scans your domain's existing records and displays them in a table.
    - DNSimple automatically checks for common subdomains, like `www`, `blog`, and `email`. You can also add custom subdomains at the bottom of the form.

  ![Overview](/files/auto-import-dns-overview.png)

1. Once you have all the necessary records, click **Import DNS records** to add them to your domain zone.

## Managing conflicts

If auto-importing a record conflicts with an existing record on your domain, we ask you to confirm which record to keep. By default, we don't override the records on your domain — you must select the record that applies in your context.

![Overview](/files/auto-import-dns-conflict.png)

Once you choose which record to keep, click **Import DNS records** to add them to your domain zone.

## Have more questions?

If you have any questions about how to auto-import your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
