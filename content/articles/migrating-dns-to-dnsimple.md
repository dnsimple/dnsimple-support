---
title: Migrating DNS to DNSimple
excerpt: How to migrate your DNS hosting to DNSimple from another provider without downtime.
meta: Step-by-step instructions for migrating DNS hosting to DNSimple, including record import, verification, and name server delegation.
categories:
- Name Servers
---

# Migrating DNS to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Migrating DNS to DNSimple moves your domain's DNS resolution to DNSimple's name servers. This is separate from [transferring your domain registration](/articles/domain-transfer/) — you can host DNS with DNSimple while keeping your domain registered at another registrar.

> [!TIP]
> If you're also transferring the domain registration, follow the [pre-transfer preparation guide](/articles/before-transferring-domain/) first. That guide covers DNS migration as part of the transfer process.

## Before you start {#before-you-start}

Gather the following before beginning the migration:

- A list of all DNS records at your current provider (A, AAAA, CNAME, MX, TXT, SRV, etc.)
- Access to your current registrar's name server settings
- A DNSimple account with an active subscription

If your domain uses [DNSSEC](/articles/dnssec/), review the [DS record considerations when changing DNS providers](/articles/ds-records-changing-dns/) before switching name servers.

## Step 1: Add the domain to DNSimple {#add-domain}

[Add your domain](/articles/adding-domain/) to your DNSimple account without transferring registration. This creates a DNS zone where you can configure records before switching name servers.

## Step 2: Import your DNS records {#import-records}

DNSimple offers two ways to import records:

- **Auto-import** — DNSimple scans your domain's existing DNS records and imports them automatically. This is the fastest option for most domains. See [Auto-Importing DNS Records](/articles/auto-import-dns/).
- **Zone file import** — If you have a BIND-format zone file exported from your current provider, you can import it directly. See [Import Zone File](/articles/import-records-zone-file/).

You can also add records manually through the [Record Editor](/articles/record-editor/) if you need to adjust individual entries.

> [!NOTE]
> Auto-import supports A, AAAA, CNAME, MX, and TXT records. If your domain uses other record types (SRV, CAA, etc.), add those manually after the import.

## Step 3: Verify your records {#verify-records}

Before switching name servers, confirm that DNSimple has the correct records by querying them directly:

```
dig @ns1.dnsimple.com example.com A
dig @ns1.dnsimple.com example.com MX
dig @ns1.dnsimple.com www.example.com CNAME
```

Compare the results against your current provider's records. Pay particular attention to:

- MX records for email delivery
- A/AAAA records for your website
- TXT records for SPF, DKIM, and domain verification
- CNAME records for subdomains

For more details on using `dig`, see [How to Use dig](/articles/how-dig/).

## Step 4: Switch name servers {#switch-name-servers}

Once your records are verified, update your domain's name servers to [DNSimple's name servers](/articles/dnsimple-nameservers/):

- ns1.dnsimple.com
- ns2.dnsimple-edge.net
- ns3.dnsimple.com
- ns4.dnsimple-edge.org

Where you make this change depends on where your domain is registered:

- **Domain registered with DNSimple** — Follow [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/).
- **Domain registered elsewhere** — Follow [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/).

## Step 5: Monitor propagation {#monitor-propagation}

Name server changes can take up to 24 hours to propagate globally, though most updates complete within a few hours. During this period, some DNS queries may still be answered by your old provider.

To check propagation progress:

- Run `dig NS example.com +short` to see which name servers are currently responding.
- Use a [WHOIS lookup](https://dnsimple.com/whois) to confirm the registrar has updated the delegation.

> [!WARNING]
> Do not remove records from your old DNS provider until propagation is complete. Both providers should serve the same records during the transition to avoid downtime.

## After the migration {#after-migration}

Once propagation is complete and your domain resolves through DNSimple's name servers:

- Verify your [domain resolution status](/articles/check-resolution-status/) in DNSimple.
- Test your website and email to confirm they work correctly.
- Remove the DNS zone from your old provider if you no longer need it.

## Have more questions? {#have-more-questions}

If you have any questions about migrating DNS to DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
